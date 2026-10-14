/**
 * 概率模型校准（回答「σ 下限和 30%/70% 阈值该定多少」）
 *
 * 做法：留一年回测。用前面的年份预测留出年份，把每个志愿单位在各候选考生位次上的
 *      「预测概率」与「实际是否过线」配对，算 Brier 分数与可靠性表，选 Brier 最小的 σ 下限。
 *
 * 用法：
 *   node tools/calibrate.js                 # 默认 用 2024+2025 预测 2026
 *   node tools/calibrate.js --holdout 2025  # 换留出年份
 *   node tools/calibrate.js --out docs/校准报告.md
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
global.window = global;
require(ROOT + '/data/meta.js');
require(ROOT + '/data/ranks.js');
require(ROOT + '/data/schools.js');
const MODEL = require(ROOT + '/lib/model.js');
const META = window.META, RANKS = window.RANKS, SCHOOLS = window.SCHOOLS;

const args = process.argv.slice(2);
function arg(k, d) { const i = args.indexOf(k); return i >= 0 && args[i + 1] ? args[i + 1] : d; }
const HOLDOUT = parseInt(arg('--holdout', '2026'), 10);
const OUT = arg('--out', path.join(ROOT, 'docs', '校准报告.md'));
const FLOORS = [0.02, 0.04, 0.06, 0.08, 0.10, 0.12, 0.14, 0.16, 0.20, 0.25];
const GRID = [];
for (let k = 0.75; k <= 1.2501; k += 0.01) GRID.push(k);

// 组样本：院校（每科类）+ 专业组
const units = [];
SCHOOLS.forEach(s => {
  ['physics', 'history'].forEach(st => {
    const h = s.records[st];
    if (h) units.push({ label: s.name + '（院校·' + (st === 'physics' ? '物理' : '历史') + '）', history: h });
  });
  s.groups.forEach(g => units.push({ label: s.name + '·组' + g.code, history: g.history }));
});

function yearsOf(h) { return META.YEAR_ORDER.filter(y => h[y] && h[y].minRank > 0).map(y => ({ year: y, minRank: h[y].minRank })); }

// 构造回测样本
function buildSamples(floor) {
  const out = [];
  units.forEach(u => {
    const all = yearsOf(u.history);
    const train = all.filter(x => x.year !== HOLDOUT);
    const test = all.filter(x => x.year === HOLDOUT)[0];
    if (!train.length || !test) return;
    const opt = { weights: META.WEIGHTS, sigmaFloor: floor, bands: META.PROB_BANDS };
    const pred = MODEL.predict(train, META.WEIGHTS, floor);
    if (!pred) return;
    GRID.forEach(k => {
      const R = Math.round(pred.mu * k);
      const p = MODEL.probability(R, pred);
      const outcome = test.minRank > R ? 1 : 0;
      out.push({ p, outcome, unit: u.label });
    });
  });
  return out;
}

function score(samples) {
  const n = samples.length;
  const brier = samples.reduce((a, s) => a + Math.pow(s.p - s.outcome, 2), 0) / n;
  const ll = samples.reduce((a, s) => {
    const p = Math.min(0.999, Math.max(0.001, s.p));
    return a + (s.outcome ? -Math.log(p) : -Math.log(1 - p));
  }, 0) / n;
  return { brier, ll, n };
}

const BINS = [[0, 0.1], [0.1, 0.3], [0.3, 0.5], [0.5, 0.7], [0.7, 0.9], [0.9, 1.01]];
function reliability(samples) {
  return BINS.map(([lo, hi]) => {
    const g = samples.filter(s => s.p >= lo && s.p < hi);
    return { lo, hi, n: g.length, freq: g.length ? g.reduce((a, s) => a + s.outcome, 0) / g.length : null,
             avgP: g.length ? g.reduce((a, s) => a + s.p, 0) / g.length : null };
  });
}

const rows = FLOORS.map(f => {
  const s = buildSamples(f);
  const sc = score(s);
  return { floor: f, ...sc, samples: s };
});
const best = rows.reduce((a, b) => (b.brier < a.brier ? b : a), rows[0]);

const isSample = SCHOOLS.every(s => s.dataStatus === 'sample') && (META.DATA_STATUS !== 'official');
const L = [];
L.push('# 概率模型校准报告');
L.push('');
L.push('> 由 `node tools/calibrate.js` 自动生成，回测设置：用 ' +
  META.YEAR_ORDER.filter(y => y !== HOLDOUT).join(' + ') + ' 预测 ' + HOLDOUT + ' 年，样本 ' + units.length + ' 个志愿单位。');
L.push('');
if (isSample) {
  L.push('**⚠ 当前数据是示例占位数据，下表只用于验证校准流程是否跑通，不能作为参数结论。** 换成官方数据后重跑本命令即可得到真实结论。');
  L.push('');
}
L.push('## 一、σ 下限扫描（Brier 与对数损失越低越好）');
L.push('');
L.push('| σ 下限 | Brier 分数 | 对数损失 | 样本数 | 命中率最高的概率区间 |');
L.push('| --- | --- | --- | --- | --- |');
rows.forEach(r => {
  const rel = reliability(r.samples).filter(x => x.n >= 20).sort((a, b) => Math.abs((b.freq - b.avgP)) - Math.abs((a.freq - a.avgP)));
  const worst = rel.length ? rel[0] : null;
  L.push('| ' + (r.floor * 100) + '% | ' + r.brier.toFixed(4) + (r.floor === best.floor ? ' **← 最优**' : '') + ' | ' +
    r.ll.toFixed(4) + ' | ' + r.n + ' | ' + (worst ? (worst.lo * 100) + '~' + (worst.hi * 100) + '% 预测 ' + (worst.avgP * 100).toFixed(0) +
    '% / 实际 ' + (worst.freq * 100).toFixed(0) + '%' : '样本不足') + ' |');
});
L.push('');
L.push('## 二、选定 σ 下限 = ' + (best.floor * 100) + '% 时的可靠性表');
L.push('');
L.push('| 预测概率区间 | 样本数 | 平均预测 | 实际过线率 | 偏差 |');
L.push('| --- | --- | --- | --- | --- |');
reliability(best.samples).forEach(b => {
  if (!b.n) { L.push('| ' + (b.lo * 100) + '~' + (b.hi * 100) + '% | 0 | — | — | — |'); return; }
  const dev = (b.freq - b.avgP) * 100;
  L.push('| ' + (b.lo * 100) + '~' + (b.hi * 100) + '% | ' + b.n + ' | ' + (b.avgP * 100).toFixed(1) + '% | ' +
    (b.freq * 100).toFixed(1) + '% | ' + (dev >= 0 ? '+' : '') + dev.toFixed(1) + ' 个百分点' + (Math.abs(dev) > 20 ? ' ⚠' : '') + ' |');
});
L.push('');
L.push('## 三、结论');
L.push('');
L.push('- 本次回测的 σ 下限最优值：**' + (best.floor * 100) + '%**（Brier ' + best.brier.toFixed(4) + '）。');
L.push('- 可靠性表的偏差列如果普遍在 ±10 个百分点内，说明「预测 40% 的志愿，实际大约有四成能上」，概率值得信；偏差大说明模型偏乐观或偏保守，需要调整 σ 下限。');
L.push('- 样本独立性：同一志愿单位在不同候选位次上会产生多个配对样本，彼此高度相关，等效独立样本数约等于志愿单位数（本次 ${units.length} 个），结论只能作方向性参考。');
L.push('- 只有一年留出样本时结论不稳。等凑齐 4 年以上数据，应对每一年各做一次留出回测再取平均。');
L.push('- 用 `node tools/calibrate.js --apply` 可把回测出的 σ 下限直接写回 data/meta.js。');
L.push('');

const APPLY = args.indexOf('--apply') >= 0;
if (APPLY) {
  const metaPath = path.join(ROOT, 'data', 'meta.js');
  const before = fs.readFileSync(metaPath, 'utf8');
  const after = before.replace(/SIGMA_FLOOR: [0-9.]+/, 'SIGMA_FLOOR: ' + best.floor.toFixed(2));
  fs.writeFileSync(metaPath, after, 'utf8');
  console.log('已把 SIGMA_FLOOR 写回 data/meta.js -> ' + best.floor.toFixed(2) + (isSample ? '（当前为示例数据，正式使用前请用官方数据重跑）' : ''));
}

if (!fs.existsSync(path.dirname(OUT))) fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, L.join('\n'), 'utf8');

console.log('样本单位 ' + units.length + ' 个；回测：用 ' + META.YEAR_ORDER.filter(y => y !== HOLDOUT).join('+') + ' 预测 ' + HOLDOUT);
rows.forEach(r => console.log('  σ下限 ' + String((r.floor * 100)).padStart(4) + '%  Brier=' + r.brier.toFixed(4) + '  logloss=' + r.ll.toFixed(4) + (r.floor === best.floor ? '   ← 最优' : '')));
console.log('\n最优 σ 下限 = ' + (best.floor * 100) + '%，报告已写入 ' + path.relative(ROOT, OUT));
if (isSample) console.log('提醒：当前为示例数据，结论仅验证流程，换官方数据后请重跑。');