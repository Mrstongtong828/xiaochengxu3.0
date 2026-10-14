/**
 * 数据与模型自检：打印某科类某分数下 6 校 / 专业组 的概率矩阵，并做数据一致性校验
 * 用法：node tools/check-data.js [physics|history] [分数]
 */
const path = require('path');
const ROOT = path.join(__dirname, '..').replace(/\\/g, '/');
global.window = global;
require(ROOT + '/data/meta.js');
require(ROOT + '/data/ranks.js');
require(ROOT + '/data/schools.js');
const MODEL = require(ROOT + '/lib/model.js');
const META = window.META, RANKS = window.RANKS, SCHOOLS = window.SCHOOLS;

const st = (process.argv[2] === 'history') ? 'history' : 'physics';
const score = parseInt(process.argv[3], 10) || 520;
const opt = { weights: META.WEIGHTS, sigmaFloor: META.SIGMA_FLOOR, bands: META.PROB_BANDS };
const toYears = h => META.YEAR_ORDER.map(y => ({ year: y, minRank: h[y] ? h[y].minRank : null })).filter(x => x.minRank);
const fmt = p => (p == null ? '  -  ' : (p * 100 < 0.01 ? '<0.01%' : (p * 100).toFixed(p * 100 < 1 ? 2 : 1) + '%'));

let problems = 0;
const notes = [];
const assert = (cond, msg) => { if (!cond) { problems++; console.log('  ! ' + msg); } };

// ---- 数据校验 ----
Object.keys(RANKS.tables).forEach(k => {
  META.YEAR_ORDER.forEach(y => {
    const t = RANKS.tables[k][y];
    if (!t) return;
    for (let i = 1; i < t.length; i++) {
      if (t[i][1] < t[i - 1][1]) assert(false, k + ' ' + y + '：分数 ' + t[i][0] + ' 累计人数不能小于上一分');
      if (t[i][0] >= t[i - 1][0]) assert(false, k + ' ' + y + '：分数未严格降序');
    }
  });
});
SCHOOLS.forEach(s => {
  ['physics', 'history'].forEach(k => {
    if (!s.records[k]) { assert(false, s.name + ' 缺 ' + k + ' 院校数据'); return; }
    META.YEAR_ORDER.forEach(y => assert(s.records[k][y] && s.records[k][y].minRank > 0, s.name + ' ' + k + ' ' + y + ' 缺院校数据'));
  });
  ['physics', 'history'].forEach(k => {
    const gs = s.groups.filter(g => g.scoreType === k);
    if (!gs.length) return;
    META.YEAR_ORDER.forEach(y => {
      const norm = gs.filter(g => (g.kind || '普通') === '普通' && g.history[y]);
      const use = norm.length ? norm : gs.filter(g => g.history[y]);
      if (!use.length || !s.records[k][y]) return;
      const expect = Math.max.apply(null, use.map(g => g.history[y].minRank));
      assert(s.records[k][y].minRank === expect, s.name + ' ' + y + ' ' + k + '：院校最低位次 ' + s.records[k][y].minRank + ' ≠ 普通组最大位次 ' + expect);
    });
    gs.forEach(g => {
      Object.keys(g.history).forEach(y => {
        const h = g.history[y];
        assert(h.minRank > 0 && h.minScore > 100, s.name + ' 组' + g.code + ' ' + y + ' 分数/位次异常');
      });
      if (g.majors && g.majors.length) {
        Object.keys(g.history).forEach(y => {
          const lowest = g.majors.map(m => m.history[y] && m.history[y].minRank).filter(v => v > 0);
          if (!lowest.length) return;
          const mx = Math.max.apply(null, lowest);
          const dev = Math.abs(mx - g.history[y].minRank) / g.history[y].minRank;
          // 组投档线（省考试院）与组内专业最低线（各校公布）本就来自两个口径，允许 3% 差异
          if (dev > 0.03) notes.push(s.name + ' 组' + g.code + ' ' + y + '：组投档位次 ' + g.history[y].minRank + ' 与组内专业最大位次 ' + mx + ' 相差 ' + (dev * 100).toFixed(1) + '%');
        });
      }
      assert(['普通', '地方专项', '中外合作办学', '联合培养', '国际班'].indexOf(g.kind || '普通') >= 0, s.name + ' 组' + g.code + ' 组类型未知: ' + g.kind);
      assert(g.requirePending || (g.require || []).length > 0, s.name + ' 组' + g.code + ' 无选科要求');
    });
  });
  (s.majorLevels || []).forEach(m => assert(m.levels.length > 0, s.name + ' 专业水平名单 ' + m.name + ' 无级别'));
});

const table = RANKS.tables[st][2026] || RANKS.tables[st][META.YEAR_ORDER[0]];
const rank = MODEL.scoreToRank(table, score);
console.log('科类=' + (st === 'physics' ? '物理类' : '历史类') + '  分数=' + score + '  位次=' + rank +
  '  专业组=' + SCHOOLS.reduce((a, s) => a + s.groups.filter(g => g.scoreType === st).length, 0));
console.log('\n院校层');
SCHOOLS.forEach(s => {
  const u = MODEL.evaluateUnit({ id: s.id, history: toYears(s.records[st]) }, rank, opt);
  console.log('  ' + s.name.padEnd(10, '　') + ' μ=' + String(u.pred.mu).padStart(7) + ' σ=' + String(u.pred.sigma).padStart(6) +
    '  P=' + fmt(u.probability).padStart(7) + '  ' + u.band.label + '  相对差 ' + u.gapPct + '%');
});
console.log('\n专业组（按概率降序，只列前 40 个）');
const list = [];
SCHOOLS.forEach(s => s.groups.filter(g => g.scoreType === st).forEach(g => {
  const u = MODEL.evaluateUnit({ id: g.id, history: toYears(g.history) }, rank, opt);
  list.push({ s, g, u });
}));
list.sort((a, b) => b.u.probability - a.u.probability);
list.slice(0, 40).forEach(x => console.log('  ' + x.s.name.padEnd(10, '　') + '组' + String(x.g.code).padEnd(4) +
  (x.g.kind === '普通' ? '      ' : x.g.kind.padEnd(6)) + ' P=' + fmt(x.u.probability).padStart(7) + ' ' + x.u.band.label +
  '  预测位次 ' + String(x.u.pred.mu).padStart(7) + '  年份数 ' + Object.keys(x.g.history).length));

console.log('\n一分一档抽样（' + score + ' 分 ±4，2026 官方表）');
MODEL.rankBreakdown(RANKS.tables[st][2026]).filter(r => r.score >= score - 4 && r.score <= score + 4)
  .forEach(r => console.log('  ' + r.score + ' 分：累计 ' + r.rank + ' 人，本段 ' + r.count + ' 人'));
console.log('\n同分跨年对照（' + score + ' 分）');
META.YEAR_ORDER.forEach(y => {
  const r = MODEL.scoreToRank(RANKS.tables[st][y], score);
  console.log('  ' + y + ' 年 ' + score + ' 分 → 位次 ' + r + ' → 折算 2026 基准 ' + MODEL.rankToScore(RANKS.tables[st][2026], r) + ' 分');
});
if (notes.length) { console.log('\n口径差异说明（组投档线 vs 组内专业线，>3% 才列出）：' + notes.length + ' 条'); notes.slice(0, 10).forEach(n => console.log('  · ' + n)); }
console.log('\n数据校验问题数：' + problems);
process.exit(problems ? 1 : 0);