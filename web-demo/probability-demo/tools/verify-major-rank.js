global.window = global;
const fs = require('fs');
const ROOT = 'C:/Users/甲鱼/Documents/Codex/2026-10-14/zh/outputs/gd-prob-demo';
require(ROOT + '/data/ranks.js');
const MODEL = require(ROOT + '/lib/model.js');
const R = window.RANKS;
const SRC = process.argv[2];
const text = fs.readFileSync(SRC, 'utf8').replace(/^\uFEFF/, '');
const lines = text.split(/\r?\n/).filter(l => l.trim());
const head = lines[0].split(',');
const rows = lines.slice(1).map((l, i) => {
  const c = l.split(',');
  const o = { __n: i + 2 };
  head.forEach((h, k) => o[h] = (c[k] || '').trim());
  o.min_score = parseInt(o.min_score, 10);
  o.min_rank = o.min_rank === '' ? null : parseInt(o.min_rank, 10);
  return o;
});
const stKey = t => t.indexOf('物理') >= 0 ? 'physics' : 'history';
const band = (st, y, s) => ({ lo: MODEL.scoreToRank(R.tables[st][y], s + 1), hi: MODEL.scoreToRank(R.tables[st][y], s) });
console.log('文件 ' + SRC.split('/').pop() + '　行数 ' + rows.length);

// 1 汇总
console.log('\n【1】汇总');
const years = Array.from(new Set(rows.map(r => r.year))).sort();
let t = 0;
years.forEach(y => {
  const p = rows.filter(r => r.year === y && r.subject_type.indexOf('物理') >= 0).length;
  const h = rows.filter(r => r.year === y && r.subject_type.indexOf('历史') >= 0).length;
  console.log('  ' + y + ' 年：物理 ' + p + ' + 历史 ' + h + ' = 合计 ' + (p + h));
  t += p + h;
});
['物理类','历史类'].forEach(st => years.forEach(y => {
  const parts = {};
  rows.filter(r => r.year === y && r.subject_type === st).forEach(r => parts[r.school] = (parts[r.school]||0)+1);
  console.log('  ' + y + ' ' + st + ' 小计 ' + Object.values(parts).reduce((a,b)=>a+b,0) + '　= ' +
    Object.keys(parts).map(k => k + ' ' + parts[k]).join(' + '));
}));
console.log('  总计 ' + t);

// 2 选科要求
console.log('\n【2】subject_require 填充率');
const sc = Array.from(new Set(rows.map(r => r.school)));
sc.forEach(s => { const sub = rows.filter(r => r.school === s); console.log('  ' + s.padEnd(20,'　') + sub.filter(r=>r.subject_require).length + ' / ' + sub.length); });
console.log('  空值合计 ' + rows.filter(r => !r.subject_require).length + ' / ' + rows.length);

// 3 重复
const dup = {};
rows.forEach(r => { const k = [r.year,r.subject_type,r.school,r.major_group,r.major_name].join('|'); (dup[k]=dup[k]||[]).push(r); });
const dups = Object.keys(dup).filter(k => dup[k].length > 1);
console.log('\n【3】重复行：' + dups.length + ' 组' + (dups.length ? ' → ' + dups.join(' , ') : ''));

// 4 矛盾
console.log('\n【4】分数-位次 矛盾 / 位次缺失');
let bad = 0, missing = 0;
const missBy = {};
rows.forEach(r => {
  const st = stKey(r.subject_type), y = Number(r.year), b = band(st, y, r.min_score);
  if (r.min_rank === null) { missing++; missBy[r.school] = (missBy[r.school]||0)+1; return; }
  if (!(r.min_rank > b.lo && r.min_rank <= b.hi)) {
    bad++;
    console.log('  第' + r.__n + '行 ' + r.year + ' ' + r.subject_type + ' ' + r.school + ' 组' + r.major_group + ' ' + r.major_name +
      '　' + r.min_score + '分/' + r.min_rank + '位　官方区间(' + b.lo + ', ' + b.hi + ']');
  }
});
console.log('  矛盾 ' + bad + ' 行；位次缺失 ' + missing + ' 行 ' + JSON.stringify(missBy));

// 5 专项：广金 2025 物理 与官方原表一致性（行数）
const gd = rows.filter(r => r.school === '广东金融学院' && r.year === '2025' && r.subject_type === '物理类');
console.log('\n【5】广金 2025 物理 行数 = ' + gd.length + '（官方原表 56 行）');
console.log('\n结论：' + ((bad === 0 && dups.length === 0) ? '四项问题已清除（位次缺失 ' + missing + ' 行为隔离项，见文档）' : '仍有问题'));