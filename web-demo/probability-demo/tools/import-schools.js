/**
 * 导入院校数据：templates 下的三个 CSV → data/schools.js
 *   院校投档数据.csv  每个「学校 × 科类 × 年份」一行，填该校最低投档分/位次（= 最容易进的专业组）
 *   院校专业组.csv    每个「专业组 × 年份」一行，填组投档最低分/位次
 *   专业数据.csv      每个「专业 × 年份」一行（没有分专业位次时可不提供）
 *   专业水平名单.csv  学校层级专业名单：school_id,专业名称,级别,批准入选年份,数据来源URL,备注
 *
 * 用法：node tools/import-schools.js [--status official --source "广东省教育考试院 2026 本科批投档情况"]
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

const errors = [], warnings = [];
const groupNoRank = {};
const fail = m => errors.push(m), warn = m => warnings.push(m);

function readCsv(name) {
  const file = path.join(TPL, name);
  if (!fs.existsSync(file)) { warn('缺少 templates/' + name + '，该层数据将为空'); return []; }
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

const TAG_MAP = {
  'gjyl': 'gjyl', '国家级一流': 'gjyl', '国家级一流本科专业建设点': 'gjyl',
  'gjts': 'gjts', '国家特色': 'gjts', '国家级特色专业': 'gjts',
  'sjyl': 'sjyl', '省级一流': 'sjyl', '省级一流本科专业建设点': 'sjyl',
  'szdxk': 'szdxk', '省重点学科': 'szdxk', '省级重点学科': 'szdxk', '广东省重点学科': 'szdxk',
  'ssd': 'ssd', '硕士点': 'ssd', '硕士学位授权点': 'ssd'
};
const parseTags = s => String(s || '').split(/[、;；/\|,，]/).map(t => t.trim()).filter(Boolean)
  .map(t => { const k = TAG_MAP[t]; if (!k) warn('无法识别的专业水平标签「' + t + '」，已忽略'); return k; }).filter(Boolean);
const stKey = label => /物理/.test(label || '') ? 'physics' : (/历史/.test(label || '') ? 'history' : null);
const int = (v) => { const n = parseInt(v, 10); return isNaN(n) ? null : n; };

const schools = {}, order = [];
function getSchool(id, r) {
  if (!schools[id]) {
    schools[id] = {
      id, name: r['学校名称'] || id, city: r['城市'] || '', nature: r['办学性质'] || '公办',
      type: r['类型'] || '', code: r['院校代码'] || '', codeVerified: false, level: r['层次'] || '本科',
      tags: String(r['标签'] || '').split(/[、;；]/).map(s => s.trim()).filter(Boolean),
      intro: r['简介'] || '', nameNote: r['备注'] || '', dataStatus: STATUS,
      records: {}, groups: []
    };
    order.push(id);
  }
  return schools[id];
}

// ---- 院校层 ----
readCsv('院校投档数据.csv').forEach(r => {
  const s = getSchool(r['school_id'], r);
  const st = stKey(r['科类']), y = int(r['年份']), rank = int(r['最低位次']), score = int(r['最低分']);
  if (!st || !y) { warn('院校表 第' + r.__line + '行：科类/年份有问题，已跳过'); return; }
  if (!rank) { fail('院校表 第' + r.__line + '行：最低位次必填且为正整数'); return; }
  s.records[st] = s.records[st] || {};
  s.records[st][y] = { minScore: score, minRank: rank, plan: int(r['招生计划']) || null, source: r['数据来源'] || SOURCE };
});

// ---- 专业组层 ----
const groupIndex = {};
readCsv('院校专业组.csv').forEach(r => {
  const s = getSchool(r['school_id'], r);
  const st = stKey(r['科类']), y = int(r['年份']), rank = int(r['最低位次']);
  const code = String(r['组代码'] || '').trim();
  if (!st || !y || !code) { warn('专业组表 第' + r.__line + '行：组代码/科类/年份有问题，已跳过'); return; }
  if (!rank) { fail('专业组表 第' + r.__line + '行：最低位次必填'); return; }
  const key = r['school_id'] + '-' + st + '-' + code;   // 物理/历史会用相同的组代码，必须带科类
  if (!groupIndex[key]) {
    let gnote = String(r['组备注'] || '');
    const requirePending = gnote.indexOf('选科要求待核实') >= 0;
    gnote = gnote.replace(/｜?选科要求待核实/g, '').replace(/^｜/, '').trim();
    const g = {
      id: r['school_id'] + '-' + st + '-' + code, collegeId: r['school_id'], code, scoreType: st,
      name: r['组名称'] || '', kind: r['组类型'] || '普通', requirePending: requirePending,
      require: String(r['选科要求'] || '').split('+').map(t => t.trim()).filter(Boolean),
      plan: int(r['组招生计划']) || null, note: gnote, history: {}, majors: []
    };
    groupIndex[key] = g;
    s.groups.push(g);
  }
  groupIndex[key].history[y] = { minScore: int(r['最低分']), minRank: rank, source: r['数据来源'] || SOURCE };
});

// ---- 专业层 ----
readCsv('专业数据.csv').forEach(r => {
  const sid = r['school_id'], st = stKey(r['科类']), code = String(r['组代码'] || '').trim();
  const y = int(r['年份']), rank = int(r['最低位次']);
  if (!sid || !st || !y) { warn('专业表 第' + r.__line + '行：学校/科类/年份有问题，已跳过'); return; }
  let list = null, scope = '';
  if (code) {
    const g = groupIndex[sid + '-' + st + '-' + code];
    if (!g) { warn('专业表 第' + r.__line + '行：找不到专业组 ' + code + '，已跳过'); return; }
    list = g.majors; scope = '组';
  } else {
    const s = schools[sid];
    if (!s) { warn('专业表 第' + r.__line + '行：未知学校 ' + sid + '，已跳过'); return; }
    s.majorPool = s.majorPool || { physics: [], history: [] };   // 专业池必须按科类分开，否则物理/历史的专业会串
    s.majorPool[st] = s.majorPool[st] || [];
    list = s.majorPool[st]; scope = '学校';
  }
  const mcode = String(r['专业代码'] || '').trim();
  let m = list.filter(x => x.code === mcode)[0];
  if (!m) {
    m = {
      code: mcode, name: r['专业名称'] || '', plan: int(r['招生计划']) || null,
      years: int(r['学制']) || 4, tuition: int(r['学费']) || null, levels: parseTags(r['专业水平标签']),
      note: String(r['专业备注'] || '').trim(), history: {}
    };
    list.push(m);
  }
  if (rank) {
    m.history[y] = { minScore: int(r['最低分']), minRank: rank, source: r['数据来源'] || SOURCE };
  } else {
    // 位次缺失（如五邑大学：官方只公布专业组投档排位）——保留专业与分数，不给位次，不做概率
    m.history[y] = { minScore: int(r['最低分']), minRank: null, source: r['数据来源'] || SOURCE };
    if (scope === '组') groupNoRank[(sid + '-' + st + '-' + code)] = (groupNoRank[(sid + '-' + st + '-' + code)] || 0) + 1;
  }
});

// ---- 专业水平名单（学校层级）----
const majorLevels = {};
readCsv('专业水平名单.csv').forEach(r => {
  const sid = r['school_id'], name = r['专业名称'], lv = parseTags(r['级别']);
  if (!sid || !name || !lv.length) return;
  majorLevels[sid] = majorLevels[sid] || [];
  majorLevels[sid].push({ name: name, levels: lv, year: int(r['批准入选年份']), source: r['数据来源URL'] || '' });
});

// ---- 交叉校验 ----
order.forEach(id => {
  const s = schools[id];
  Object.keys(s.groups).forEach(() => {});
  ['physics', 'history'].forEach(st => {
    const gs = s.groups.filter(g => g.scoreType === st);
    if (!gs.length) return;
    const years = new Set();
    gs.forEach(g => Object.keys(g.history).forEach(y => years.add(Number(y))));
    years.forEach(y => {
      const norm = gs.filter(g => (g.kind || '普通') === '普通');
      const use = norm.length ? norm : gs;   // 院校最低投档线只在普通组之间取
      const ranks = use.map(g => g.history[y] && g.history[y].minRank).filter(v => v > 0);
      if (!ranks.length) return;
      // 组线 = 最容易进的组 = 位次最大
      const expect = Math.max.apply(null, ranks);
      const rec = s.records[st] && s.records[st][y];
      if (rec && rec.minRank !== expect) {
        warn(s.name + ' ' + y + ' 年' + (st === 'physics' ? '物理' : '历史') + '：院校最低位次填了 ' + rec.minRank + '，按各专业组推算应为 ' + expect + '（已以专业组为准）');
        rec.minRank = expect;
      }
      gs.forEach(g => {
        const lv = g.history[y];
        if (!lv) return;
        const lowest = g.majors.map(m => m.history[y] && m.history[y].minRank).filter(v => v > 0);
        if (lowest.length) {
          const mx = Math.max.apply(null, lowest);
          const dev = Math.abs(mx - lv.minRank) / lv.minRank;
          if (dev > 0.03) warn(s.name + ' 组' + g.code + ' ' + y + ' 年：专业组投档位次 ' + lv.minRank + ' 与组内专业最大位次 ' + mx + ' 相差 ' + (dev * 100).toFixed(1) + '%（超过 3%，建议核对）');
          if (g.majors.every(m => !m.history[y] || !m.history[y].minRank)) warn(s.name + ' 组' + g.code + ' ' + y + ' 年：组内专业位次全部缺失（官方只公布组级排位），该组只能按组级评估');
        }
      });
    });
  });
  s.groups.forEach(g => {
    g.history = Object.keys(g.history).sort((a, b) => b - a).reduce((o, k) => (o[k] = g.history[k], o), {});
    g.majors.forEach(m => { m.history = Object.keys(m.history).sort((a, b) => b - a).reduce((o, k) => (o[k] = m.history[k], o), {}); });
  });
});

if (errors.length) {
  console.log('\n发现 ' + errors.length + ' 处错误，未写入：');
  errors.forEach(e => console.log('  ✗ ' + e));
  process.exit(1);
}

const list = order.map(id => schools[id]);
list.forEach(s => { s.majorLevels = majorLevels[s.id] || []; });
const header = `/**
 * 院校数据（由 tools/import-schools.js 生成，请勿手改；改数据请改 templates/*.csv）
 * 层级：records 院校 → groups 专业组 → majors 组内专业，每层都有近三年最低分/最低位次
 * 专业水平：majors[].levels 取值见 data/meta.js 的 LEVEL_TAGS
 * 数据状态：${STATUS}
 */

window.SCHOOLS = `;
fs.writeFileSync(path.join(DATA, 'schools.js'), header + JSON.stringify(list, null, 2) + ';\n', 'utf8');

const metaPath = path.join(DATA, 'meta.js');
if (fs.existsSync(metaPath)) {
  let m = fs.readFileSync(metaPath, 'utf8');
  if (STATUS === 'official') {
    m = m.replace(/DATA_STATUS: '[^']*'/, "DATA_STATUS: 'official'");
    const nGroups = list.reduce((a, s) => a + s.groups.length, 0);
    const srcText = ('广东省教育考试院《本科普通类投档情况》与各校招生网。' + list.length + ' 所院校 / ' + nGroups + ' 个院校专业组（2024-2026 三年投档线）').replace(/'/g, '');
    m = m.replace(/DATA_SOURCE: [^\n]*,/, "DATA_SOURCE: '" + srcText + "',");
    fs.writeFileSync(metaPath, m, 'utf8');
    console.log('已同步 data/meta.js：DATA_STATUS=official');
  }
}

const nGroupMajors = list.reduce((a, s) => a + s.groups.reduce((b, g) => b + g.majors.length, 0), 0);
const nPool = list.reduce((a, s) => a + ((s.majorPool && (s.majorPool.physics.length + s.majorPool.history.length)) || 0), 0);
console.log('导入完成：' + list.length + ' 所学校、' + list.reduce((a, s) => a + s.groups.length, 0) + ' 个专业组、' +
  nGroupMajors + ' 个组内专业、' + nPool + ' 个学校级专业（官方未标注专业组），状态=' + STATUS);
list.forEach(s => {
  const cnt = { physics: Object.keys(s.records.physics || {}).length, history: Object.keys(s.records.history || {}).length };
  console.log('  - ' + s.name + '　物理 ' + cnt.physics + ' 年 / 历史 ' + cnt.history + ' 年　专业组 ' + s.groups.length +
    '　专业 ' + s.groups.reduce((b, g) => b + g.majors.length, 0));
});
if (warnings.length) { console.log('\n提示 ' + warnings.length + ' 条：'); warnings.slice(0, 30).forEach(w => console.log('  ! ' + w)); }
console.log('\n下一步：node tools/bundle.js');