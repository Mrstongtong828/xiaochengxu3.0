/* 广东高考志愿概率分析系统 · Demo 前端逻辑（官方数据版） */
(function () {
  var META = window.META, RANKS = window.RANKS, SCHOOLS = window.SCHOOLS, MODEL = window.MODEL;

  var state = {
    name: META.TARGET.name, scoreType: META.TARGET.scoreType, score: META.TARGET.score,
    rankInput: '', second: META.TARGET.secondChoices.slice(), year: META.YEAR_ORDER[0],
    sim: {}, sort: 'prob', onlyEligible: false, onlyOrdinary: false,
    openSchool: null, openGroup: null, tab: 'rank'
  };

  // ---------------- 工具 ----------------
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }
  function num(n) { return (n == null || n === '') ? '—' : Number(n).toLocaleString('en-US'); }
  function fmtP(p) {
    if (p == null || isNaN(p)) return '—';
    var v = p * 100;
    if (v < 0.01) return '<0.01%';
    if (v < 1) return v.toFixed(2) + '%';
    if (v < 10) return v.toFixed(1) + '%';
    return v.toFixed(0) + '%';
  }
  function bandOf(key) { return META.PROB_BANDS.filter(function (b) { return b.key === key; })[0]; }
  function firstChoice() { return state.scoreType === 'physics' ? '物理' : '历史'; }
  function tableOf(year) { return RANKS.tables[state.scoreType][year]; }
  function toHistory(h) {
    var out = [];
    META.YEAR_ORDER.forEach(function (y) { if (h && h[y] && h[y].minRank > 0) out.push({ year: y, minRank: h[y].minRank }); });
    return out;
  }
  function autoRank() { return MODEL.scoreToRank(tableOf(META.YEAR_ORDER[0]), state.score); }
  function studentRank() { var n = parseInt(state.rankInput, 10); return n > 0 ? n : autoRank(); }
  function modelOpt(floor) { return { weights: META.WEIGHTS, sigmaFloor: floor || META.SIGMA_FLOOR, bands: META.PROB_BANDS }; }
  function chip(key) {
    var t = META.LEVEL_TAGS.filter(function (x) { return x.key === key; })[0];
    return t ? '<span class="chip ' + key + '" title="' + esc(t.desc) + '">' + t.short + '</span>' : '';
  }
  function bar(p, key, small) {
    var w = Math.max(0.5, Math.min(100, (p || 0) * 100));
    return '<div class="bar ticks' + (small ? ' sm' : '') + '"><i style="width:' + w.toFixed(2) + '%;background:' +
      (bandOf(key) ? bandOf(key).color : '#adb5bd') + '"></i></div>';
  }
  function kindTag(kind) {
    return (!kind || kind === '普通') ? '' : '<span class="chip kind">' + esc(kind) + '</span>';
  }

  // 单个专业：算概率、记录数据年数
  function evalMajor(m, containerId, rank, opt) {
    var hist = toHistory(m.history);
    var u = MODEL.evaluateUnit({ id: containerId + '-' + m.code, history: hist }, rank, opt);
    var scored = 0;
    Object.keys(m.history || {}).forEach(function (y) { if (m.history[y] && m.history[y].minScore) scored++; });
    return {
      code: m.code, name: m.name, levels: m.levels || [], note: m.note || '',
      history: m.history || {}, years: hist.length, scoreYears: scored,
      plan: m.plan, tuition: m.tuition, u: u
    };
  }

  // ---------------- 计算 ----------------
  function compute() {
    var st = state.scoreType, rank = studentRank(), opt = modelOpt(), first = firstChoice();
    var schools = SCHOOLS.map(function (s) {
      var su = MODEL.evaluateUnit({ id: s.id, history: toHistory(s.records[st]) }, rank, opt);
      var groups = s.groups.filter(function (g) { return g.scoreType === st; }).map(function (g) {
        var gu = MODEL.evaluateUnit({ id: g.id, history: toHistory(g.history) }, rank, opt);
        var eligible = g.requirePending ? true : MODEL.matchSubject(g.require, first, state.second);
        var majors = (g.majors || []).map(function (m) { return evalMajor(m, g.id, rank, opt); });
        majors.sort(function (a, b) { return (b.u.probability == null ? -1 : b.u.probability) - (a.u.probability == null ? -1 : a.u.probability); });
        return {
          id: g.id, code: g.code, name: g.name, kind: g.kind || '普通', require: g.require,
          requireText: (g.require || []).join('+'), requirePending: !!g.requirePending,
          plan: g.plan, note: g.note, history: g.history, years: Object.keys(g.history || {}).length,
          majors: majors, u: gu, eligible: eligible
        };
      });
      groups.sort(function (a, b) { return (b.u.probability || 0) - (a.u.probability || 0); });
      var ps = groups.map(function (g) { return g.u.probability; }).filter(function (p) { return p != null; });
      var pool = (((s.majorPool || {})[st]) || []).map(function (m) { return evalMajor(m, s.id + '-pool', rank, opt); });
      pool.sort(function (a, b) { return (b.u.probability == null ? -1 : b.u.probability) - (a.u.probability == null ? -1 : a.u.probability); });
      var majorCount = 0, majorWithP = 0;
      groups.forEach(function (g) { g.majors.forEach(function (m) { majorCount++; if (m.u.probability != null) majorWithP++; }); });
      pool.forEach(function (m) { majorCount++; if (m.u.probability != null) majorWithP++; });
      return {
        s: s, u: su, groups: groups, pool: pool, majorCount: majorCount, majorWithP: majorWithP,
        pMin: ps.length ? Math.min.apply(null, ps) : null,
        pMax: ps.length ? Math.max.apply(null, ps) : null,
        majorLevels: s.majorLevels || []
      };
    });
    var all = [];
    schools.forEach(function (it) { it.groups.forEach(function (g) { all.push({ school: it.s, g: g }); }); });
    var counts = { chong: 0, wen: 0, bao: 0, multi: 0, single: 0 };
    all.forEach(function (x) {
      if (x.g.u.band) counts[x.g.u.band.key]++;
      if (x.g.years >= 2) counts.multi++; else counts.single++;
    });
    var mCount = 0, mWithP = 0;
    schools.forEach(function (it) { mCount += it.majorCount; mWithP += it.majorWithP; });
    return { st: st, rank: rank, schools: schools, table: tableOf(META.YEAR_ORDER[0]), opt: opt, all: all, counts: counts, majorCount: mCount, majorWithP: mWithP };
  }

  // ---------------- 考生档案 ----------------
  function renderProfile(data) {
    $('fName').value = state.name;
    $('fScore').value = state.score;
    $('fScoreRange').value = state.score;
    $('fRank').value = state.rankInput;
    $('autoRank').textContent = num(autoRank());
    $('eqScore').textContent = num(MODEL.rankToScore(data.table, data.rank)) + ' 分';
    $('segPhysics').className = state.scoreType === 'physics' ? 'on' : '';
    $('segHistory').className = state.scoreType === 'history' ? 'on' : '';
    var opts = ['化学', '生物', '政治', '地理'];
    $('picks').innerHTML = opts.map(function (o) {
      return '<span class="pick ' + (state.second.indexOf(o) >= 0 ? 'on' : '') + '" data-sub="' + o + '">' + o + '</span>';
    }).join('');
    var official = META.DATA_STATUS === 'official';
    $('dataStatus').textContent = official ? '数据已核验' : '示例数据 · 仅演示';
    var banner = $('banner');
    if (!official) {
      banner.className = 'banner';
      banner.textContent = '部分数据仍为示例占位，不可用于真实填报。';
    } else {
      banner.className = 'banner ok';
      banner.innerHTML = '数据已逐表核验：一分一段表来自广东省教育考试院 2024 / 2025 / 2026 年分数段统计表（PDF 附件）；' +
        '院校与专业组投档线来自省考试院《本科普通类投档情况》；分专业录取位次 902 条来自各校招生网（2024/2025 两年）。' +
        '唯一缺口：<b>五邑大学未公布分专业最低排位</b>，其 154 条专业只到分数、位次待补（见「模型与说明」页）。' +
        '<br><b>本页仅用于演示，概率为统计模型推算，不构成录取承诺。</b>';
    }
  }
  // ---------------- 模拟填报 ----------------
  function renderSim(data) {
    var rows = ['<tr><th class="l">年</th><th style="min-width:78px">分数</th><th>该年位次</th><th>等效 2026 分</th><th>与你的位次差</th></tr>'];
    var values = {};
    META.YEAR_ORDER.forEach(function (y) {
      var auto = MODEL.rankToScore(tableOf(y), data.rank);
      var v = (state.sim[y] == null || state.sim[y] === '') ? auto : parseInt(state.sim[y], 10);
      values[y] = v;
      var r = MODEL.scoreToRank(tableOf(y), v);
      var eq = (r == null) ? null : MODEL.rankToScore(data.table, r);
      var diff = (r == null) ? null : r - data.rank;
      rows.push('<tr><td class="l mono">' + y + '</td>' +
        '<td><input type="number" inputmode="numeric" data-sim="' + y + '" style="height:32px;font-size:14px;text-align:center;padding:0 4px"></td>' +
        '<td class="mono">' + num(r) + '</td>' +
        '<td class="mono">' + (eq == null ? '-' : eq + ' 分') + '</td>' +
        '<td class="mono" style="color:' + (diff == null ? '#868e96' : (diff <= 0 ? '#2f9e44' : '#e8590c')) + '">' +
        (diff == null ? '-' : (diff > 0 ? '+' : '') + num(diff)) + '</td></tr>');
    });
    $('simTable').innerHTML = rows.join('');
    Array.prototype.forEach.call(document.querySelectorAll('[data-sim]'), function (input) {
      var y = input.getAttribute('data-sim');
      input.value = values[y];
      input.addEventListener('input', function () { state.sim[y] = this.value; renderAll(); });
    });
    var sameRank = META.YEAR_ORDER.map(function (y) { return y + ' 年 ' + MODEL.rankToScore(tableOf(y), data.rank) + ' 分'; }).join(' · ');
    $('simHint').innerHTML = '同样考到第 ' + num(data.rank) + ' 名，各年分别需要：' + sameRank + '（官方一分一段表换算）。';
  }

  // ---------------- 一分一档 ----------------
  function renderRank(data) {
    var year = state.year, table = tableOf(year);
    var rows = MODEL.rankBreakdown(table);
    var total = rows[rows.length - 1].rank;
    var mine = MODEL.scoreToRank(table, state.score);
    var myRow = rows.filter(function (r) { return r.score === state.score; })[0] || {};
    var src = (RANKS.meta && RANKS.meta[state.scoreType] && RANKS.meta[state.scoreType][year]) || {};

    $('rankMeta').textContent = (state.scoreType === 'physics' ? '物理类' : '历史类') + ' · ' + year + ' 年 · 官方表 ' + rows.length + ' 个分数档';
    $('rankStats').innerHTML =
      '<div class="stat"><b class="mono">' + state.score + '</b><span class="tiny">你的分数</span></div>' +
      '<div class="stat"><b class="mono">' + num(mine) + '</b><span class="tiny">你的位次（' + year + ' 年官方表）</span></div>' +
      '<div class="stat"><b class="mono">' + num(myRow.count || 0) + '</b><span class="tiny">同分人数</span></div>' +
      '<div class="stat"><b class="mono">' + (total ? (mine / total * 100).toFixed(1) : '-') + '%</b><span class="tiny">超过全省比例</span></div>';

    $('yearSeg').innerHTML = META.YEAR_ORDER.map(function (y) {
      return '<button data-year="' + y + '" class="' + (y === year ? 'on' : '') + '" style="flex:0 0 auto;padding:0 12px">' + y + '</button>';
    }).join('');

    var win = rows.filter(function (r) { return r.score >= state.score - 12 && r.score <= state.score + 12; });
    var maxCount = Math.max.apply(null, win.map(function (r) { return r.count; }));
    var html = ['<tr><th>分数</th><th>本段人数</th><th>累计人数（位次）</th><th>累计占比</th><th style="width:90px">本段人数分布</th></tr>'];
    win.forEach(function (r) {
      var hl = r.score === state.score;
      html.push('<tr class="' + (hl ? 'hl' : '') + '">' +
        '<td class="mono">' + r.score + (hl ? ' ← 你的分数' : '') + '</td>' +
        '<td class="mono">' + num(r.count) + '</td>' +
        '<td class="mono">' + num(r.rank) + '</td>' +
        '<td class="mono">' + (r.ratio * 100).toFixed(1) + '%</td>' +
        '<td><div class="mini"><i style="width:' + (maxCount ? (r.count / maxCount * 100).toFixed(1) : 0) + '%"></i></div></td></tr>');
    });
    $('rankTable').innerHTML = html.join('');
    $('rankNote').innerHTML = '数据来源：' + esc(src.source || '-') + '（' + (src.rows || 0) + ' 个分数档，' +
      (src.minScore || '-') + '~' + (src.maxScore || '-') + ' 分，最低分累计 ' + num(src.total || 0) + ' 人）。' +
      '本段人数 = 该分数的人数，累计人数 = 该分数及以上的总人数（即位次）。同一分数本段人数为 0 时累计持平，属正常。';

    var cross = ['<tr><th>年份</th><th>' + state.score + ' 分对应的位次</th><th>折算到 2026 基准的等效分</th><th>相当于</th></tr>'];
    META.YEAR_ORDER.forEach(function (y) {
      var r = MODEL.scoreToRank(tableOf(y), state.score);
      var eq = MODEL.rankToScore(data.table, r);
      var gap = eq - state.score;
      cross.push('<tr' + (y === META.YEAR_ORDER[0] ? ' class="hl"' : '') + '><td class="mono">' + y + '</td><td class="mono">' + num(r) +
        '</td><td class="mono">' + eq + ' 分</td><td>' + (gap === 0 ? '基准年' :
        (gap > 0 ? '比 2026 年的同分多值 ' + gap + ' 分' : '比 2026 年的同分缩水 ' + Math.abs(gap) + ' 分')) + '</td></tr>');
    });
    $('crossTable').innerHTML = cross.join('');
    $('crossNote').innerHTML = '所有年份都来自官方一分一段表，因此这个换算是真实的：同一个分数在不同年份对应的位次不同，说明分数不可跨年比较，志愿填报必须用位次。';
  }
  // ---------------- 概率分析 ----------------
  function renderProb(data) {
    var schools = data.schools.slice();
    if (state.sort === 'prob') schools.sort(function (a, b) { return (b.u.probability || 0) - (a.u.probability || 0); });
    else schools.sort(function (a, b) { return (a.u.pred ? a.u.pred.mu : 0) - (b.u.pred ? b.u.pred.mu : 0); });

    $('probMeta').textContent = '基准：' + state.score + ' 分 / 位次 ' + num(data.rank) + '（' +
      (state.scoreType === 'physics' ? '物理类' : '历史类') + '）· 共 ' + data.all.length + ' 个专业组，' +
      data.counts.multi + ' 个有 2 年以上数据';
    $('probStats').innerHTML =
      '<div class="stat"><b class="mono" style="color:#e8590c">' + data.counts.chong + '</b><span class="tiny">冲档专业组（≤30%）</span></div>' +
      '<div class="stat"><b class="mono" style="color:#1c7ed6">' + data.counts.wen + '</b><span class="tiny">稳档专业组（30~70%）</span></div>' +
      '<div class="stat"><b class="mono" style="color:#2f9e44">' + data.counts.bao + '</b><span class="tiny">保档专业组（>70%）</span></div>' +
      '<div class="stat"><b class="mono">' + data.all.length + '</b><span class="tiny">专业组总数</span></div>' +
      '<div class="stat"><b class="mono">' + data.majorWithP + '</b><span class="tiny">可算概率的专业（共 ' + data.majorCount + '）</span></div>';

    $('eligibleToggle').className = 'pick' + (state.onlyEligible ? ' on' : '');
    $('ordinaryToggle').className = 'pick' + (state.onlyOrdinary ? ' on' : '');

    var out = [];
    schools.forEach(function (it) {
      var s = it.s, u = it.u;
      var groups = it.groups.slice();
      if (state.onlyEligible) groups = groups.filter(function (g) { return g.eligible; });
      if (state.onlyOrdinary) groups = groups.filter(function (g) { return (g.kind || '普通') === '普通'; });
      var open = state.openSchool === s.id;
      var bandKey = u.band ? u.band.key : 'wen';
      out.push('<div class="sch ' + bandKey + '" data-school="' + s.id + '">');
      out.push('<div class="sch-head">');
      out.push('<div style="flex:1;min-width:0">');
      out.push('<div class="sch-name">' + esc(s.name) +
        '<span class="tiny" style="margin-left:8px">' + esc(s.city) + ' · ' + esc(s.type) + ' · 代码 ' + esc(s.code) + '</span></div>');
      out.push('<div class="tiny">' + it.groups.length + ' 个专业组' + (groups.length !== it.groups.length ? '（当前筛选后 ' + groups.length + '）' : '') +
        ' · 组概率区间 ' + fmtP(it.pMin) + ' ~ ' + fmtP(it.pMax) + '</div>');
      out.push('<div class="tiny" style="margin-top:4px">院校最低投档线（普通组中最容易进的组）：' +
        (u.pred ? '预测位次 ' + num(u.pred.mu) + ' · 相对差 ' + u.gapPct + '%' : '数据不足') + '</div>');
      out.push('<div style="margin-top:6px">' + (s.tags || []).map(function (t) { return '<span class="chip">' + esc(t) + '</span>'; }).join('') + '</div>');
      out.push('</div>');
      out.push('<div style="flex:0 0 132px;text-align:right">');
      out.push('<div class="pbig mono" style="color:' + bandOf(bandKey).color + '">' + fmtP(u.probability) + '</div>');
      out.push('<span class="badge b-' + bandKey + '">' + (u.band ? u.band.label : '-') + '</span>');
      out.push('<div class="tiny" style="margin-top:6px">院校层录取概率</div>');
      out.push('</div></div>');
      out.push('<div style="margin-top:10px">' + bar(u.probability, bandKey) + '</div>');
      if (s.nameNote) out.push('<div class="tiny" style="color:#b85c00;margin-top:8px">' + esc(s.nameNote) + '</div>');
      if (u.pred) out.push('<div class="tiny" style="margin-top:6px">院校最低位次 μ=' + num(u.pred.mu) + ' σ=' + num(u.pred.sigma) + '　近三年：' +
        META.YEAR_ORDER.map(function (y) {
          var r = s.records[state.scoreType] && s.records[state.scoreType][y];
          return y + ' 年 ' + num(r ? r.minRank : null);
        }).join(' / ') + '</div>');

      if (!open) {
        out.push('<div class="tiny" style="margin-top:8px">点击展开 ' + groups.length + ' 个专业组（含各自录取概率）→</div>');
      } else {
        groups.forEach(function (g) {
          var gopen = state.openGroup === g.id;
          out.push('<div class="grp">');
          out.push('<div class="grp-head" data-group="' + g.id + '">');
          out.push('<div style="flex:1;min-width:0">');
          out.push('<div style="font-size:13.5px;font-weight:600">专业组 ' + esc(g.code) + kindTag(g.kind) +
            (g.eligible ? '' : ' <span class="flag">选科不符</span>') +
            (g.requirePending ? ' <span class="tiny" style="color:#b85c00">选科要求待核实</span>' : '') + '</div>');
          out.push('<div class="tiny">选科 ' + esc(g.requireText) + ' · ' + (g.years >= 2 ? '近 ' + g.years + ' 年数据' : '仅 ' + g.years + ' 年数据') +
            ' · 预测最低位次 ' + (g.u.pred ? num(g.u.pred.mu) : '-') + '</div>');
          out.push('</div>');
          out.push('<div style="flex:0 0 100px;text-align:right"><span class="mono" style="font-weight:700;color:' +
            bandOf(g.u.band.key).color + '">' + fmtP(g.u.probability) + '</span> <span class="badge b-' + g.u.band.key + '">' +
            g.u.band.label + '</span></div>');
          out.push('</div>');
          out.push('<div style="margin-top:6px">' + bar(g.u.probability, g.u.band.key, true) + '</div>');
          if (gopen) {
            out.push('<div class="detail">');
            out.push('<div class="tiny">逐年投档线：' + META.YEAR_ORDER.map(function (y) {
              var r = g.history[y];
              return y + ' 年 ' + (r ? r.minScore + ' 分 / ' + num(r.minRank) + ' 位' : '未招生');
            }).join('　·　') + '</div>');
            if (g.u.pred) out.push('<div class="tiny" style="margin-top:4px">预测最低位次 μ=' + num(g.u.pred.mu) +
              '，波动 σ=' + num(g.u.pred.sigma) + '（占 μ 的 ' + (g.u.pred.sigma / g.u.pred.mu * 100).toFixed(1) +
              '%）· 相对你的位次 ' + g.u.gapPct + '%</div>');
            if (g.note) out.push('<div class="tiny" style="margin-top:4px;color:#495057">' + esc(g.note) + '</div>');
            if (g.majors.length) {
              out.push('<div class="tiny" style="margin-top:9px;font-weight:600">组内专业（按录取概率降序）</div>');
              g.majors.forEach(function (m) {
                var tags = m.levels.map(chip).join('');
                var pTxt = (m.u.probability == null)
                  ? '<span class="tiny" style="color:#b85c00">位次待补</span>'
                  : '<span class="mono" style="font-weight:700;color:' + bandOf(m.u.band.key).color + '">' + fmtP(m.u.probability) + '</span>';
                out.push('<div class="major"><div style="flex:1;min-width:0">' +
                  '<div class="major-name">' + esc(m.name) + '<span class="tiny" style="margin-left:8px">代码 ' + esc(m.code) + (m.plan ? ' · ' + num(m.plan) + ' 人' : '') + '</span></div>' +
                  '<div style="margin-top:3px">' + (tags || '<span class="chip">普通专业</span>') + '</div>' +
                  '<div class="tiny">' + META.YEAR_ORDER.map(function (y) {
                    var r = m.history[y];
                    if (!r) return y + ' 未招生';
                    return y + ' ' + r.minScore + '分/' + (r.minRank ? num(r.minRank) : '位次待补');
                  }).join('　') + '　·　位次年份 ' + m.years + '</div></div>' +
                  '<div style="flex:0 0 92px;text-align:right">' + pTxt + '<div class="tiny">' + (m.u.band ? m.u.band.label : '—') + '</div></div></div>');
              });
            } else {
              out.push('<div class="tiny" style="margin-top:6px;color:#b85c00">该组未收录分专业数据。</div>');
            }
            out.push('</div>');
          } else {
            out.push('<div class="tiny" style="margin-top:6px">点击展开该组详情 →</div>');
          }
          out.push('</div>');
        });
        if (!groups.length) out.push('<div class="tiny">当前筛选下没有可选专业组</div>');
      }
      out.push('</div>');
    });
    $('schoolList').innerHTML = out.join('');

    Array.prototype.forEach.call(document.querySelectorAll('[data-school] .sch-head'), function (node) {
      node.addEventListener('click', function () {
        var id = this.parentNode.getAttribute('data-school');
        state.openSchool = state.openSchool === id ? null : id;
        if (state.openSchool === null) state.openGroup = null;
        renderAll();
      });
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-group]'), function (node) {
      node.addEventListener('click', function (ev) {
        ev.stopPropagation();
        var gid = this.getAttribute('data-group');
        state.openGroup = state.openGroup === gid ? null : gid;
        state.openSchool = gid.substring(0, gid.lastIndexOf('-')).replace(/-(physics|history)$/, '');
        renderAll();
      });
    });
  }
  // ---------------- 专业水平 ----------------
  function renderLevel(data) {
    $('levelLegend').innerHTML = META.LEVEL_TAGS.map(function (t) {
      return '<div><span class="chip ' + t.key + '">' + t.short + '</span><div style="font-size:13px;font-weight:600;margin:4px 0 3px">' +
        t.label + '</div><div class="tiny">' + esc(t.desc) + '</div></div>';
    }).join('');
    $('levelExplain').textContent = META.LEVEL_EXPLAIN;

    var head = ['<tr><th class="l">院校</th><th class="l">最高层级</th><th class="l">代表专业（按层级排序）</th><th>国家级一流</th><th>省级一流</th><th>省重点学科</th></tr>'];
    var rows = [], totals = { gjyl: 0, sjyl: 0, szdxk: 0 };
    var rankOf = function (levels) {
      return Math.min.apply(null, levels.map(function (k) {
        var t = META.LEVEL_TAGS.filter(function (y) { return y.key === k; })[0];
        return t ? t.rank : 99;
      }));
    };
    data.schools.forEach(function (it) {
      var list = it.majorLevels || [];
      var best = null;
      list.forEach(function (m) {
        m.levels.forEach(function (k) {
          var t = META.LEVEL_TAGS.filter(function (y) { return y.key === k; })[0];
          if (t && (!best || t.rank < best.rank)) best = t;
        });
      });
      var ranked = list.slice().sort(function (a, b) { return rankOf(a.levels) - rankOf(b.levels) || a.name.localeCompare(b.name); });
      var n = function (k) { return list.filter(function (m) { return m.levels.indexOf(k) >= 0; }).length; };
      totals.gjyl += n('gjyl'); totals.sjyl += n('sjyl'); totals.szdxk += n('szdxk');
      rows.push('<tr><td class="l"><b>' + esc(it.s.name) + '</b><div class="tiny">' + esc(it.s.city) + ' · 收录 ' + list.length + ' 个专业</div></td>' +
        '<td class="l">' + (best ? '<span class="chip ' + best.key + '">' + best.label + '</span>' : '<span class="tiny">-</span>') + '</td>' +
        '<td class="l">' + (ranked.slice(0, 5).map(function (m) { return esc(m.name) + m.levels.map(chip).join(''); }).join('<br>') || '<span class="tiny">-</span>') + '</td>' +
        '<td class="mono">' + n('gjyl') + '</td><td class="mono">' + n('sjyl') + '</td><td class="mono">' + n('szdxk') + '</td></tr>');
    });
    head.push('<tr style="background:#f8f9fa"><td class="l"><b>合计</b></td><td></td><td></td><td class="mono"><b>' + totals.gjyl +
      '</b></td><td class="mono"><b>' + totals.sjyl + '</b></td><td class="mono"><b>' + totals.szdxk + '</b></td></tr>');
    $('levelTable').innerHTML = head.concat(rows).join('');

    var lvRank = function (k) { var t = META.LEVEL_TAGS.filter(function (x) { return x.key === k; })[0]; return t ? t.rank : 99; };
    var blocks = [];
    data.schools.forEach(function (it) {
      var all = [];
      it.groups.forEach(function (g) { g.majors.forEach(function (m) { all.push({ m: m, group: g }); }); });
      it.pool.forEach(function (m) { all.push({ m: m, group: null }); });
      all.sort(function (a, b) {
        var ra = a.m.levels.length ? Math.min.apply(null, a.m.levels.map(lvRank)) : 99;
        var rb = b.m.levels.length ? Math.min.apply(null, b.m.levels.map(lvRank)) : 99;
        if (ra !== rb) return ra - rb;
        return (b.m.u.probability == null ? -1 : b.m.u.probability) - (a.m.u.probability == null ? -1 : a.m.u.probability);
      });
      blocks.push('<div class="card" style="box-shadow:none;border:1px solid #e9ecef">' +
        '<h2>' + esc(it.s.name) + '<span class="tiny">' + esc(it.s.city) + ' · 收录专业 ' + all.length + ' 个（带层级标注 ' + (it.majorLevels || []).length + ' 个）</span></h2>' +
        (all.length ? '<div class="scrollx"><table class="data">' +
          '<tr><th class="l">专业</th><th class="l">层级</th><th>专业组</th><th>最近一年最低分/位次</th><th>录取概率</th><th>档位</th><th>位次年份</th></tr>' +
          all.map(function (x) {
            var m = x.m;
            var last = m.history[2026] || m.history[2025] || m.history[2024] || null;
            var p = m.u.probability;
            return '<tr><td class="l">' + esc(m.name) + '</td>' +
              '<td class="l">' + (m.levels.map(chip).join('') || '<span class="tiny">—</span>') + '</td>' +
              '<td class="mono">' + (x.group ? esc(x.group.code) : '<span class="tiny">未标注</span>') + '</td>' +
              '<td class="mono">' + (last ? last.minScore + ' / ' + (last.minRank ? num(last.minRank) : '待补') : '—') + '</td>' +
              '<td class="mono"><b style="color:' + (p == null ? '#adb5bd' : bandOf(m.u.band.key).color) + '">' + (p == null ? '—' : fmtP(p)) + '</b></td>' +
              '<td>' + (m.u.band ? '<span class="badge b-' + m.u.band.key + '">' + m.u.band.label + '</span>' : '<span class="tiny">数据不足</span>') + '</td>' +
              '<td class="mono tiny">' + m.years + '</td></tr>';
          }).join('') + '</table></div>' : '<div class="tiny">—</div>') +
        '</div>');
    });
    $('levelBySchool').innerHTML = blocks.join('');
  }

  // ---------------- 冲稳保志愿表 ----------------
  function plan45(data) {
    var quota = MODEL.slotSuggestion(META.TOTAL_SLOTS, META.SUGGEST_RATIO);
    var pool = data.all.slice();
    if (state.onlyEligible) pool = pool.filter(function (x) { return x.g.eligible; });
    if (state.onlyOrdinary) pool = pool.filter(function (x) { return (x.g.kind || '普通') === '普通'; });
    var ok = function (x) { return x.g.u.probability != null; };
    var chong = pool.filter(function (x) { return ok(x) && x.g.u.probability <= 0.30; }).sort(function (a, b) { return b.g.u.probability - a.g.u.probability; });
    var wen = pool.filter(function (x) { return ok(x) && x.g.u.probability > 0.30 && x.g.u.probability <= 0.70; }).sort(function (a, b) { return b.g.u.probability - a.g.u.probability; });
    var bao = pool.filter(function (x) { return ok(x) && x.g.u.probability > 0.70; }).sort(function (a, b) { return a.g.u.probability - b.g.u.probability; });
    var list = []
      .concat(chong.slice(0, quota.chong).map(function (x) { return { x: x, band: 'chong' }; }))
      .concat(wen.slice(0, quota.wen).map(function (x) { return { x: x, band: 'wen' }; }))
      .concat(bao.slice(0, quota.bao).map(function (x) { return { x: x, band: 'bao' }; }));
    return { quota: quota, list: list, avail: { chong: chong.length, wen: wen.length, bao: bao.length } };
  }

  function renderPlan(data) {
    var p = META.PROB_BANDS, plan = plan45(data);
    $('planPrinciple').innerHTML =
      '<div class="stats">' +
      '<div class="stat"><b class="mono">' + META.TOTAL_SLOTS + '</b><span class="tiny">本科批志愿数（院校专业组）</span></div>' +
      '<div class="stat"><b class="mono" style="color:#e8590c">' + plan.quota.chong + '</b><span class="tiny">建议冲（≤30%）</span></div>' +
      '<div class="stat"><b class="mono" style="color:#1c7ed6">' + plan.quota.wen + '</b><span class="tiny">建议稳（30~70%）</span></div>' +
      '<div class="stat"><b class="mono" style="color:#2f9e44">' + plan.quota.bao + '</b><span class="tiny">建议保（>70%）</span></div>' +
      '</div>' +
      '<div style="margin-top:14px">' + p.map(function (b) {
        return '<div class="step" data-n="' + b.label + '"><b>' + b.label + '：</b>' + esc(b.desc) + '</div>';
      }).join('') + '</div>' +
      '<div class="note" style="margin-top:12px">平行志愿投档规则：分数（位次）优先、遵循志愿顺序、一次投档。' +
      '志愿顺序要按考生意愿排，冲的放前面、保的必须垫底；冲和稳的志愿建议勾选服从专业调剂。' +
      '下表是按概率自动生成的<strong>演示顺序</strong>，真实填报必须按意愿调整。</div>' +
      '<div class="note" style="margin-top:8px">候选池（' + data.all.length + ' 个专业组）：冲 ' + plan.avail.chong +
      ' 个 / 稳 ' + plan.avail.wen + ' 个 / 保 ' + plan.avail.bao +
      ' 个。地方专项、中外合作办学、联合培养、国际班需要相应资格或另计学费，选组时注意类型标签。</div>';

    var head = ['<tr><th>序号</th><th class="l">院校 + 专业组</th><th>类型</th><th>选科</th><th>录取概率</th><th>档位</th><th>数据年数</th><th>建议</th></tr>'];
    var rows = plan.list.map(function (o, i) {
      var x = o.x, u = x.g.u;
      var advice = o.band === 'bao' ? '必须服从调剂' : (o.band === 'chong' ? '建议服从调剂' : '可服从调剂');
      return '<tr><td class="mono">' + (i + 1) + '</td>' +
        '<td class="l"><b>' + esc(x.school.name) + '</b> · 组 ' + esc(x.g.code) + '</td>' +
        '<td>' + (x.g.kind === '普通' ? '<span class="tiny">普通</span>' : '<span class="chip kind">' + esc(x.g.kind) + '</span>') + '</td>' +
        '<td class="tiny">' + esc(x.g.requireText || '-') + (x.g.requirePending ? '<div class="tiny">待核实</div>' : '') + '</td>' +
        '<td class="mono"><b style="color:' + bandOf(o.band).color + '">' + fmtP(u.probability) + '</b></td>' +
        '<td><span class="badge b-' + o.band + '">' + bandOf(o.band).label + '</span></td>' +
        '<td class="mono tiny">' + x.g.years + '</td>' +
        '<td class="tiny">' + advice + '</td></tr>';
    });
    $('planTable').innerHTML = head.concat(rows).join('');
    $('planNote').innerHTML = '共 ' + plan.list.length + ' 行（目标 ' + META.TOTAL_SLOTS + ' 个）。' +
      '要凑满 45 个志愿，需要把院校范围扩到全省（当前只有 6 所，' + data.all.length + ' 个专业组）。';
  }
  // ---------------- 模型与说明 ----------------
  function renderModel(data) {
    $('modelSteps').innerHTML = META.MODEL_NOTE.map(function (t, i) {
      return '<div class="step" data-n="' + (i + 1) + '">' + esc(t) + '</div>';
    }).join('') + '<div class="note" style="margin-top:12px">' + esc(META.DISCLAIMER) + '</div>';

    var floors = [0.06, 0.08, 0.10, 0.12, 0.15];
    var head = ['<tr><th>σ 下限</th>' + SCHOOLS.map(function (s) {
      return '<th>' + esc(s.name.replace('学院', '').replace('大学', '')) + '</th>';
    }).join('') + '</tr>'];
    var rows = floors.map(function (f) {
      var opt = modelOpt(f);
      return '<tr' + (f === META.SIGMA_FLOOR ? ' class="hl"' : '') + '><td class="mono">' + (f * 100) + '%</td>' +
        SCHOOLS.map(function (s) {
          var u = MODEL.evaluateUnit({ id: s.id, history: toHistory(s.records[data.st]) }, data.rank, opt);
          return '<td class="mono">' + fmtP(u.probability) + '</td>';
        }).join('') + '</tr>';
    });
    $('sensTable').innerHTML = head.concat(rows).join('');

    $('srcStatus').textContent = META.DATA_STATUS === 'official' ? '官方数据' : '包含示例数据';
    $('srcText').innerHTML = RANKS.status === 'official'
      ? '广东省教育考试院 2024 / 2025 / 2026 年高考分数段统计表（官方 PDF 附件）；投档线来自省考试院《本科普通类投档情况》与各校招生网。'
      : esc(META.DATA_SOURCE);

    var prov = ['<table class="data"><tr><th class="l">年份 / 科类</th><th>分数档数</th><th>覆盖区间</th><th>最低分累计人数</th></tr>'];
    ['physics', 'history'].forEach(function (st) {
      META.YEAR_ORDER.forEach(function (y) {
        var m = (RANKS.meta && RANKS.meta[st] && RANKS.meta[st][y]) || null;
        if (!m) return;
        prov.push('<tr><td class="l">' + y + ' 年' + (st === 'physics' ? '物理类' : '历史类') + '</td><td class="mono">' + m.rows +
          '</td><td class="mono">' + m.minScore + '~' + m.maxScore + '</td><td class="mono">' + num(m.total) + '</td></tr>');
      });
    });
    prov.push('</table>');
    var gsum = data.schools.map(function (it) {
      var n = it.groups.length, one = it.groups.filter(function (g) { return g.years < 2; }).length;
      var gm = 0, pm = 0;
      it.groups.forEach(function (g) { gm += g.majors.length; });
      pm = it.pool.length;
      return '<tr><td class="l">' + esc(it.s.name) + '</td><td class="mono">' + n + '</td><td class="mono">' + gm +
        '</td><td class="mono">' + pm + '</td><td class="mono">' + it.majorWithP + '</td><td class="mono">' + (it.majorLevels || []).length + '</td></tr>';
    });
    $('provTable').innerHTML = '<h3>一分一段表来源（逐表核对）</h3>' + prov.join('') +
      '<h3>院校数据覆盖（当前科类）</h3><div class="scrollx"><table class="data">' +
      '<tr><th class="l">院校</th><th>专业组数</th><th>组内专业</th><th>学校级专业</th><th>可算概率的专业</th><th>专业水平名单条数</th></tr>' +
      gsum.join('') + '</table></div>' +
      '<div class="note" style="margin-top:10px"><b>已知数据缺口</b>（整理自你提供的《6校专业水平名单·数据缺口说明》）：</div>' +
      '<div class="scrollx"><table class="data"><tr><th class="l">范围</th><th class="l">缺口</th></tr>' +
      '<tr><td class="l">广州航海学院</td><td class="l">省重点学科官方未公开完整名单，仅收录 1 个</td></tr>' +
      '<tr><td class="l">广东石油化工学院</td><td class="l">省重点学科未公开完整名单；2019 年度 5 个省级一流专业明细缺失</td></tr>' +
      '<tr><td class="l">仲恺农业工程学院</td><td class="l">省重点学科官方未公开完整名单</td></tr>' +
      '<tr><td class="l">五邑大学</td><td class="l"><b>154 条专业无位次</b>：官方只公布「专业组投档最低排位」，未公布分专业最低排位，界面显示「位次待补」，不参与专业级概率（不编造数据）</td></tr>' +
      '<tr><td class="l">仲恺 / 广石化</td><td class="l">分专业数据官方未标注专业组代码，已挂到「学校级专业池」计算专业级概率，不做组内展示</td></tr>' +
      '<tr><td class="l">选科要求</td><td class="l">158 条专业组的选科要求标注为「以当年招生专业目录为准」，界面已标「选科要求待核实」且不过滤</td></tr>' +
      '</table></div>';
    $('disclaimer').textContent = META.DISCLAIMER;
  }

  function renderFooter(data) {
    $('footer').innerHTML = '考生：' + (state.name ? esc(state.name) : '（未填写姓名）') + ' · ' +
      (state.scoreType === 'physics' ? '物理类' : '历史类') + ' · 2027 高考分数 ' + state.score + ' · 省排位 ' + num(data.rank) +
      '　|　数据来源：广东省教育考试院官方一分一段表与本科普通类投档情况。' + esc(META.DISCLAIMER);
  }

  // ---------------- 调度 ----------------
  var TABS = ['rank', 'prob', 'level', 'plan', 'model'];
  function applyTab(t) {
    if (TABS.indexOf(t) < 0) t = 'rank';
    state.tab = t;
    Array.prototype.forEach.call($('tabs').children, function (b) { b.className = b.getAttribute('data-tab') === t ? 'on' : ''; });
    TABS.forEach(function (k) { $('sec-' + k).className = 'tab-panel' + (k === t ? '' : ' hidden'); });
  }

  var cache = null;
  function renderAll() {
    cache = compute();
    renderProfile(cache);
    renderSim(cache);
    renderRank(cache);
    renderProb(cache);
    renderLevel(cache);
    renderPlan(cache);
    renderModel(cache);
    renderFooter(cache);
  }

  function bind() {
    $('fName').addEventListener('input', function () { state.name = this.value; renderFooter(cache || compute()); });
    $('fScore').addEventListener('input', function () { var v = parseInt(this.value, 10); if (v > 0) { state.score = v; state.rankInput = ''; renderAll(); } });
    $('fScoreRange').addEventListener('input', function () { state.score = parseInt(this.value, 10); state.rankInput = ''; renderAll(); });
    $('fRank').addEventListener('input', function () { state.rankInput = this.value; renderAll(); });
    $('segPhysics').addEventListener('click', function () {
      if (state.scoreType === 'physics') return;
      state.scoreType = 'physics'; state.second = ['化学', '生物']; state.openSchool = null; state.openGroup = null; renderAll();
    });
    $('segHistory').addEventListener('click', function () {
      if (state.scoreType === 'history') return;
      state.scoreType = 'history'; state.second = ['政治', '地理']; state.openSchool = null; state.openGroup = null; renderAll();
    });
    $('picks').addEventListener('click', function (ev) {
      var t = ev.target.getAttribute('data-sub');
      if (!t) return;
      var i = state.second.indexOf(t);
      if (i >= 0) state.second.splice(i, 1); else state.second.push(t);
      renderAll();
    });
    $('yearSeg').addEventListener('click', function (ev) {
      var y = ev.target.getAttribute('data-year');
      if (!y) return;
      state.year = parseInt(y, 10);
      renderRank(cache || compute());
    });
    $('sortSeg').addEventListener('click', function (ev) {
      var s = ev.target.getAttribute('data-sort');
      if (!s) return;
      state.sort = s;
      Array.prototype.forEach.call(this.children, function (b) { b.className = b.getAttribute('data-sort') === s ? 'on' : ''; });
      renderProb(cache || compute());
    });
    $('eligibleToggle').addEventListener('click', function () { state.onlyEligible = !state.onlyEligible; renderProb(cache || compute()); renderPlan(cache || compute()); });
    $('ordinaryToggle').addEventListener('click', function () { state.onlyOrdinary = !state.onlyOrdinary; renderProb(cache || compute()); renderPlan(cache || compute()); });
    $('resetBtn').addEventListener('click', function () {
      state.name = ''; state.score = META.TARGET.score; state.rankInput = ''; state.sim = {};
      state.scoreType = META.TARGET.scoreType; state.second = META.TARGET.secondChoices.slice();
      state.openSchool = null; state.openGroup = null; state.year = META.YEAR_ORDER[0];
      state.onlyEligible = false; state.onlyOrdinary = false; renderAll();
    });
    $('tabs').addEventListener('click', function (ev) {
      var t = ev.target.getAttribute('data-tab');
      if (!t) return;
      applyTab(t);
      if (location.hash !== '#' + t) location.hash = t;
    });
  }

  bind();
  renderAll();
  applyTab((location.hash || '').replace('#', ''));
  window.__demo = { state: state, compute: compute, MODEL: MODEL };
})();