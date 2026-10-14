/**
 * 录取概率模型 + 一分一段换算（浏览器与 Node 通用）
 *
 * 一、为什么用位次
 *   广东物理类 / 历史类分列划线、分列投档。每年试题难度不同，同一个分数在不同年份对应的
 *   位次差异可能上万名，分数不可跨年比较，位次可以。
 *
 * 二、概率怎么算
 *   1) 取该志愿单位（院校专业组 / 专业）近三年投档最低位次 r_2026、r_2025、r_2024；
 *   2) 按年份加权（越近权重越高）得预测最低位次 μ；
 *   3) 用三年位次的加权标准差估计波动 σ，并设下限 σ ≥ μ × SIGMA_FLOOR
 *      （三年样本太少，σ 会被低估，下限用于防止概率被算得过满）；
 *   4) 假设下一年该志愿单位的最低投档位次服从 N(μ, σ²)，
 *      考生位次为 R，则
 *          录取概率 P = P(最低位次 > R) = Φ((μ − R) / σ)
 *      含义：考生位次排在录取线之前，就算被录取。R 比 μ 小得越多，概率越高。
 *
 *   例：μ = 120000、σ = 9000、考生位次 R = 122000
 *       P = Φ((120000−122000)/9000) = Φ(−0.222) ≈ 41%
 *
 *   这是可解释的统计推算，不是官方录取概率，也没有考虑报考人数变化、计划调整、
 *   专业热门度突变等不可量化因素。
 *
 * 三、档位（冲稳保原则）
 *   P ≤ 30%      冲
 *   30% < P ≤ 70% 稳
 *   P > 70%       保
 *   阈值在 data/meta.js 的 PROB_BANDS 里，属业务参数，可调。
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.MODEL = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {

  var EPS = 1e-9;

  // ---------- 一分一段 ----------

  /** 规范化为 [{score, rank}]，按分数从高到低 */
  function normalizeTable(table) {
    var rows = [];
    if (!table) return rows;
    for (var i = 0; i < table.length; i++) {
      var r = table[i];
      var score = Array.isArray(r) ? r[0] : r.score;
      var rank = Array.isArray(r) ? r[1] : r.rank;
      if (typeof score === 'number' && typeof rank === 'number') rows.push({ score: score, rank: rank });
    }
    rows.sort(function (a, b) { return b.score - a.score; });
    return rows;
  }

  /** 分数 → 累计位次（线性插值） */
  function scoreToRank(table, score) {
    var rows = normalizeTable(table);
    if (!rows.length) return null;
    if (score >= rows[0].score) return rows[0].rank;
    var last = rows[rows.length - 1];
    if (score <= last.score) return last.rank;
    for (var i = 0; i < rows.length - 1; i++) {
      var hi = rows[i], lo = rows[i + 1];
      if (score <= hi.score && score >= lo.score) {
        var t = (hi.score - score) / (hi.score - lo.score || EPS);
        return Math.round(hi.rank + t * (lo.rank - hi.rank));
      }
    }
    return null;
  }

  /** 累计位次 → 分数（反查，用于“等效分”） */
  function rankToScore(table, rank) {
    var rows = normalizeTable(table);
    if (!rows.length || !rank) return null;
    if (rank <= rows[0].rank) return rows[0].score;
    var last = rows[rows.length - 1];
    if (rank >= last.rank) return last.score;
    for (var i = 0; i < rows.length - 1; i++) {
      var hi = rows[i], lo = rows[i + 1];
      if (rank >= hi.rank && rank <= lo.rank) {
        var t = (rank - hi.rank) / ((lo.rank - hi.rank) || EPS);
        return Math.round(hi.score + t * (lo.score - hi.score));
      }
    }
    return null;
  }

  /**
   * 一分一档明细：每个分数段的「本段人数」= 累计(该分) − 累计(该分+1)
   * @returns [{score, rank, count, ratio}]  ratio 为累计占比
   */
  function rankBreakdown(table) {
    var rows = normalizeTable(table);
    var byScore = {};
    rows.forEach(function (r) { byScore[r.score] = r.rank; });
    var total = rows.length ? rows[rows.length - 1].rank : 0;
    // rows 按分数从高到低。累计 rank(s) = 分数 ≥ s 的人数，
    // 本段人数(恰好 s 分) = rank(s) − rank(s+1)；s+1 分在降序数组里是上一行，位次更小。
    return rows.map(function (r, i) {
      var higher = i > 0 ? rows[i - 1] : null;
      var count = r.rank - (higher ? higher.rank : 0);
      return {
        score: r.score,
        rank: r.rank,
        count: count > 0 ? count : 0,
        ratio: total ? r.rank / total : 0
      };
    });
  }

  // ---------- 概率 ----------

  /** 加权平均 + 加权标准差（缺失年份自动重新归一化权重） */
  function predict(years, weights, sigmaFloor) {
    var pts = [];
    var wsum = 0, mu = 0, i;
    for (i = 0; i < years.length; i++) {
      var w = weights[years[i].year];
      if (typeof w !== 'number') w = 0.1;
      if (!(years[i].minRank > 0)) continue;
      pts.push({ year: years[i].year, minRank: years[i].minRank, w: w });
      wsum += w;
      mu += years[i].minRank * w;
    }
    if (!pts.length || wsum <= 0) return null;
    mu = mu / wsum;

    var varSum = 0;
    for (i = 0; i < pts.length; i++) varSum += pts[i].w * Math.pow(pts[i].minRank - mu, 2);
    var sd = pts.length >= 2 ? Math.sqrt(varSum / wsum) : 0;
    var floor = (typeof sigmaFloor === 'number' ? sigmaFloor : 0.06) * mu;
    var sigma = Math.max(sd, floor);

    return {
      mu: Math.round(mu),
      sigma: Math.round(sigma),
      sd: Math.round(sd),
      years: pts,
      volatility: sd / mu
    };
  }

  function erf(x) {
    var sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    var a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741,
        a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
    var t = 1 / (1 + p * x);
    var y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return sign * y;
  }

  /** 标准正态分布累计函数 */
  function normCdf(z) { return 0.5 * (1 + erf(z / Math.SQRT2)); }

  /** 录取概率：P(最低位次 > 考生位次) */
  function probability(studentRank, pred) {
    if (!pred || !(studentRank > 0)) return null;
    return normCdf((pred.mu - studentRank) / (pred.sigma || 1));
  }

  /** 概率 → 冲稳保档位 */
  function bandOf(p, bands) {
    if (p === null || typeof p !== 'number') return null;
    for (var i = 0; i < bands.length; i++) {
      if (p <= bands[i].max + EPS) return bands[i];
    }
    return bands[bands.length - 1];
  }

  /** 把一个志愿单位的三年数据整理成评估结果 */
  function evaluateUnit(unit, studentRank, opt) {
    var pred = predict(unit.history || [], opt.weights, opt.sigmaFloor);
    var out = {
      id: unit.id,
      canApply: true,
      history: unit.history || [],
      pred: pred,
      probability: null,
      band: null,
      gapPct: null
    };
    if (!pred) return out;
    out.probability = probability(studentRank, pred);
    out.band = bandOf(out.probability, opt.bands);
    out.gapPct = Math.round(((pred.mu - studentRank) / studentRank) * 1000) / 10;
    return out;
  }

  /** 45 个志愿的建议配比 */
  function slotSuggestion(total, ratio) {
    var chong = Math.round(total * ratio.chong);
    var wen = Math.round(total * ratio.wen);
    return { chong: chong, wen: wen, bao: total - chong - wen };
  }

  /** 选科匹配：考生再选科目需覆盖专业组要求 */
  function matchSubject(require, firstChoice, secondChoices) {
    if (!require || !require.length) return true;
    if (require[0] !== firstChoice) return false;
    for (var i = 1; i < require.length; i++) {
      if (secondChoices.indexOf(require[i]) < 0) return false;
    }
    return true;
  }

  return {
    normalizeTable: normalizeTable,
    scoreToRank: scoreToRank,
    rankToScore: rankToScore,
    rankBreakdown: rankBreakdown,
    predict: predict,
    normCdf: normCdf,
    probability: probability,
    bandOf: bandOf,
    evaluateUnit: evaluateUnit,
    slotSuggestion: slotSuggestion,
    matchSubject: matchSubject
  };
});