/**
 * 导入一分一段表：templates/一分一段表.csv → data/ranks.js
 *
 * CSV 表头（UTF-8）：科类,年份,分数,累计人数,数据来源[,本段人数]
 *   科类     物理类 / 历史类
 *   年份     2024 / 2025 / 2026（可扩展）
 *   分数     整数，可只填需要的分数区间，但同一科类同年份必须连续降序
 *   累计人数 该分数及以上的累计人数（= 位次），必须严格递增
 *   本段人数 可选，填了会与「累计人数之差」交叉校验
 *
 * 用法：
 *   node tools/import-ranks.js
 *   node tools/import-ranks.js --status official --source "广东省教育考试院 2026 年分数段统计表"
 *   node tools/import-ranks.js --from "<某目录>/附件2.csv"      # 单独导入一个文件
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const TPL = path.join(ROOT, 'templates');
const DATA = path.join(ROOT, 'data');

const args = process.argv.slice(2);
function arg(k, d) { const i = args.indexOf(k); return i >= 0 && args[i + 1] ? args[i + 1] : d; }
const STATUS = arg('--status', 'sample');
const SOURCE = arg('--source', '示例占位数据');
const FILES = args.filter(a => a.endsWith('.csv')).length ? args.filter(a => a.endsWith('.csv')) : [path.join(TPL, '一分一段表.csv')];

const warnings = [];
const errors = [];
function warn(m) { warnings.push(m); }
function fail(m) { errors.push(m); }

function readCsv(file) {
  if (!fs.existsSync(file)) throw new Error('找不到文件：' + file);
  let text = fs.readFileSync(file, 'utf8');
  if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
  const lines = text.split(/\r?\n/).filter(l => l.trim() !== '');
  const header = lines[0].split(',').map(s => s.trim());
  return lines.slice(1).map((line, i) => {
    const cells = line.split(',').map(s => s.trim());
    const o = { __line: i + 2 };
    header.forEach((h, k) => { o[h] = cells[k] === undefined ? '' : cells[k]; });
    return o;
  });
}

const stKey = (label) => {
  if (/物理/.test(label)) return 'physics';
  if (/历史/.test(label)) return 'history';
  return null;
};

const buckets = {};   // { physics: { 2026: [{score, rank, line, source}] } }
const zeroRuns = {};  // 统计每个表里「本段人数为 0」的分数档数量
FILES.forEach(f => {
  readCsv(f).forEach(r => {
    const st = stKey(r['科类'] || '');
    const year = parseInt(r['年份'], 10);
    const score = parseInt(r['分数'], 10);
    const rank = parseInt(r['累计人数'], 10);
    if (st === null) { warn('第 ' + r.__line + ' 行：科类无法识别（' + r['科类'] + '），已跳过'); return; }
    if (!(year >= 2015 && year <= 2100)) { warn('第 ' + r.__line + ' 行：年份异常，已跳过'); return; }
    if (!(score >= 100 && score <= 750)) { warn('第 ' + r.__line + ' 行：分数 ' + r['分数'] + ' 超出常规范围，已跳过'); return; }
    if (!(rank > 0)) { fail('第 ' + r.__line + ' 行：累计人数必须为正整数'); return; }
    buckets[st] = buckets[st] || {};
    buckets[st][year] = buckets[st][year] || [];
    buckets[st][year].push({ score, rank, line: r.__line, src: r['数据来源'] || SOURCE, num: r['本段人数'] ? parseInt(r['本段人数'], 10) : null });
  });
});

const tables = {};
const meta = {};
const ALL_STATUS = [];

['physics', 'history'].forEach(st => {
  tables[st] = {};
  meta[st] = {};
  const years = Object.keys(buckets[st] || {}).map(Number).sort((a, b) => a - b);
  years.forEach(y => {
    const rows = buckets[st][y].sort((a, b) => b.score - a.score);
    // 校验：分数唯一、连续、累计严格递增
    for (let i = 1; i < rows.length; i++) {
      if (rows[i].score === rows[i - 1].score) fail((st === 'physics' ? '物理' : '历史') + y + '：分数 ' + rows[i].score + ' 重复');
      if (rows[i].rank < rows[i - 1].rank) fail((st === 'physics' ? '物理' : '历史') + y + '：分数 ' + rows[i].score + ' 的累计人数 ' + rows[i].rank + ' 小于上一行 ' + rows[i - 1].rank + '（分数越低累计不能减少）');
      const gap = rows[i - 1].score - rows[i].score;
      if (gap === 1) {
        // 本段人数允许为 0（该分数确实没人），此时累计人数与上一分持平，属正常
        const num = rows[i].rank - rows[i - 1].rank;
        if (num === 0) zeroRuns[[st, y].join('_')] = (zeroRuns[[st, y].join('_')] || 0) + 1;
        if (rows[i].num !== null && rows[i].num !== num) fail((st === 'physics' ? '物理' : '历史') + y + '：分数 ' + rows[i].score + ' 本段人数填了 ' + rows[i].num + '，与累计之差 ' + num + ' 不一致');
      } else if (gap > 1) {
        warn((st === 'physics' ? '物理' : '历史') + y + '：' + rows[i - 1].score + ' 与 ' + rows[i].score + ' 之间缺 ' + (gap - 1) + ' 个分数（换算时会线性插值）');
      }
    }
    const zeros = zeroRuns[[st, y].join('_')] || 0;
    if (zeros > 5) warn((st === 'physics' ? '物理' : '历史') + y + '：有 ' + zeros + ' 个分数档的累计人数与上一分持平（本段人数为 0），数量偏多，建议核对');
    const scores = rows.map(r => r.score);
    const hi = Math.max.apply(null, scores), lo = Math.min.apply(null, scores);
    const total = rows[rows.length - 1].rank;
    if (hi < 620) warn((st === 'physics' ? '物理' : '历史') + y + '：最高只到 ' + hi + ' 分，高分段缺失');
    if (lo > 450) warn((st === 'physics' ? '物理' : '历史') + y + '：最低只到 ' + lo + ' 分，低分段缺失');
    const near = rows.filter(r => r.score >= 490 && r.score <= 550).length;
    if (!near) warn((st === 'physics' ? '物理' : '历史') + y + '：490~550 分区间没有数据，考生 520 分左右无法定位');
    const src = rows[0].src;
    const stat = /官方|考试院|教育厅/.test(src) ? 'official' : STATUS;
    ALL_STATUS.push(stat);
    meta[st][y] = { status: stat, source: src, rows: rows.length, minScore: lo, maxScore: hi, total: total };
    tables[st][y] = rows.map(r => [r.score, r.rank]);
    console.log((st === 'physics' ? '物理类' : '历史类') + ' ' + y + '：' + rows.length + ' 档，' + lo + '~' + hi + ' 分，累计总数 ' + total + '  来源「' + src + '」');
  });
});

if (errors.length) {
  console.log('\n发现 ' + errors.length + ' 处错误，未写入文件：');
  errors.forEach(e => console.log('  ✗ ' + e));
  process.exit(1);
}

const years = Array.from(new Set(ALL_STATUS.map((s, i) => s))).length ? Object.keys(buckets).reduce((acc, st) => acc.concat(Object.keys(buckets[st]).map(Number)), []).filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b) : [];
const overall = ALL_STATUS.every(s => s === 'official') ? 'official' : (ALL_STATUS.some(s => s === 'official') ? 'mixed' : 'sample');

// 批次线（可选）：templates/批次线.csv 表头 年份,科类,本科线,数据来源
const batchLine = {};
const blPath = path.join(TPL, '批次线.csv');
if (fs.existsSync(blPath)) {
  readCsv(blPath).forEach(r => {
    const y = parseInt(r['年份'], 10);
    const st = stKey(r['科类'] || '');
    const v = parseInt(r['本科线'], 10);
    if (st && y && v > 0) { batchLine[y] = batchLine[y] || {}; batchLine[y][st] = v; }
  });
} else {
  warn('没有 templates/批次线.csv，界面上的本科线标记不会显示');
}

const out = `/**
 * 一分一段表（由 tools/import-ranks.js 生成，请勿手改）
 * 数据状态：${overall}
 * 说明：tables[科类][年份] = [[分数, 累计人数], ...]，分数从高到低
 *       meta[科类][年份] 记录该表的数据来源、状态、覆盖区间与累计总数
 */

window.RANKS = ${JSON.stringify({
  status: overall,
  years,
  note: '累计人数 = 该分数及以上的考生人数（即位次）',
  batchLine,
  meta,
  tables
}, null, 2)};
`;
fs.writeFileSync(path.join(DATA, 'ranks.js'), out, 'utf8');

// 同步 data/meta.js 的数据状态与来源（界面顶部的徽标与横幅读这两个字段）
const metaPath = path.join(DATA, "meta.js");
if (fs.existsSync(metaPath)) {
  let m = fs.readFileSync(metaPath, "utf8");
  m = m.replace(/DATA_STATUS: '[^']*'/, "DATA_STATUS: '" + overall + "'");
  m = m.replace(/DATA_SOURCE: [^\n]*,/, "DATA_SOURCE: '" + SOURCE.replace(/'/g, '') + "',");
  fs.writeFileSync(metaPath, m, "utf8");
  console.log("已同步 data/meta.js：DATA_STATUS=" + overall);
}

console.log('\n已写入 data/ranks.js　总体数据状态=' + overall);
if (warnings.length) { console.log('\n提示 ' + warnings.length + ' 条：'); warnings.forEach(w => console.log('  ! ' + w)); }
console.log('\n下一步：node tools/bundle.js');