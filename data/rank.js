// 一分一段与批次线：演示样例数据，用于说明“分数不可跨年比较”
// 正式使用时请替换为考试院公布的数据。

// [分数, 累计位次]，中间分数用线性插值估算
const PHYSICS_TABLE = [
  [700, 120], [680, 900], [660, 3200], [640, 8600], [620, 15200],
  [600, 24000], [585, 39200], [570, 54000], [550, 76000], [530, 101000],
  [510, 128000], [490, 158000], [470, 190000], [450, 222000], [437, 245000]
];

const HISTORY_TABLE = [
  [660, 90], [640, 700], [620, 2600], [600, 7200], [585, 11800],
  [570, 18400], [550, 30000], [530, 45000], [510, 62000], [490, 81000],
  [470, 102000], [450, 124000], [428, 146000]
];

// 同一年份同一分数对应的位次相对今年的比例，用于演示“同样分数在不同年份不等价”
const YEAR_RATIO = [
  { year: 2024, ratio: 1.19 },
  { year: 2025, ratio: 1.05 },
  { year: 2026, ratio: 1.0 }
];

const BATCH_LINE = { 物理: 437, 历史: 428 };

function table(kind) {
  return kind === '历史' ? HISTORY_TABLE : PHYSICS_TABLE;
}

function batchLine(kind) {
  return BATCH_LINE[kind] || BATCH_LINE['物理'];
}

function maxScore(kind) {
  return table(kind)[0][0];
}

function minScore(kind) {
  const rows = table(kind);
  return rows[rows.length - 1][0];
}

module.exports = {
  PHYSICS_TABLE: PHYSICS_TABLE,
  HISTORY_TABLE: HISTORY_TABLE,
  YEAR_RATIO: YEAR_RATIO,
  BATCH_LINE: BATCH_LINE,
  table: table,
  batchLine: batchLine,
  maxScore: maxScore,
  minScore: minScore
};
