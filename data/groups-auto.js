// 为没有精细专业组数据的院校自动生成一个示例专业组，
// 好让「查院校」能覆盖到广东全部本科院校。
// 位次是按院校层次生成的演示值，不是真实录取数据（estimated = true）。

const colleges = require('./colleges');
const detailGroups = require('./groups');
const realGroups = require('./groups-gzhmt')
  .concat(require('./groups-real'))
  .concat(require('./groups-real2'))
  .concat(require('./groups-real3'));

const TYPE_MAJORS = {
  理工: ['计算机科学与技术', '软件工程', '电子信息工程', '机械设计制造及其自动化'],
  综合: ['计算机科学与技术', '工商管理', '汉语言文学', '会计学'],
  师范: ['汉语言文学（师范）', '数学与应用数学（师范）', '英语（师范）', '小学教育'],
  医药: ['临床医学', '护理学', '药学', '医学检验技术'],
  财经: ['金融学', '会计学', '国际经济与贸易', '财务管理'],
  语言: ['英语', '翻译', '商务英语', '日语'],
  农林: ['农学', '食品科学与工程', '园林', '动物医学'],
  政法: ['法学', '治安学', '侦查学'],
  艺术: ['视觉传达设计', '环境设计', '绘画', '音乐表演'],
  体育: ['体育教育', '运动训练', '休闲体育']
};

const TYPE_REQ = {
  医药: ['物理', '化学'],
  理工: ['物理', '化学'],
  农林: ['物理'],
  综合: ['物理'],
  师范: ['物理'],
  财经: ['物理'],
  语言: ['物理'],
  政法: ['历史'],
  艺术: [],
  体育: []
};

const TYPE_TUITION = {
  理工: 5190, 农林: 5190, 综合: 5190, 师范: 4590, 财经: 4590,
  语言: 5190, 政法: 4590, 医药: 5800, 艺术: 10000, 体育: 10000
};

function seedOf(name) {
  let hash = 7;
  for (let i = 0; i < name.length; i += 1) {
    hash = (hash * 31 + name.charCodeAt(i)) % 9973;
  }
  return hash;
}

// 按院校层次给出示例位次区间
function baseRank(college) {
  const tags = college.tags || [];
  if (tags.indexOf('双一流') >= 0) return 6000 + (seedOf(college.name) % 20000);
  if (tags.indexOf('省属重点') >= 0) return 32000 + (seedOf(college.name) % 22000);
  if (college.nature === '合作办学') return 18000 + (seedOf(college.name) % 25000);
  if (college.level === '职业本科') return 95000 + (seedOf(college.name) % 40000);
  if (college.nature === '民办') return 105000 + (seedOf(college.name) % 60000);
  return 58000 + (seedOf(college.name) % 38000);
}

function build() {
  const covered = {};
  detailGroups.concat(realGroups).forEach(function (group) {
    covered[group.collegeCode] = true;
  });

  const list = [];
  colleges.forEach(function (college, index) {
    if (covered[college.code]) return; // 已有精细数据的院校跳过
    const majors = TYPE_MAJORS[college.type] || TYPE_MAJORS['综合'];
    const req = TYPE_REQ[college.type] || ['物理'];
    const seed = seedOf(college.name);
    const plan = 60 + (seed % 120);
    const groupCode = '1' + String((seed % 8) + 1) + String((index % 9) + 1);
    const tuition = college.nature === '公办'
      ? (TYPE_TUITION[college.type] || 5190)
      : (college.nature === '合作办学' ? 60000 : 29800);
    list.push({
      id: college.code + '-' + groupCode,
      collegeCode: college.code,
      groupCode: groupCode,
      groupName: (college.type || '综合') + '类示例组',
      subjectReq: req,
      plan: plan,
      tuition: tuition,
      note: '示例专业组：组内专业与计划为演示数据，位次按院校层次估算，正式填报请以当年招生专业目录为准。',
      estimated: true,
      history: [{ year: 2025, rank: baseRank(college), score: null }],
      majors: majors.map(function (name, i) {
        return {
          code: groupCode + String(i + 1),
          name: name,
          plan: Math.max(10, Math.round(plan / 4)),
          years: name.indexOf('临床医学') >= 0 ? 5 : 4,
          tuition: tuition
        };
      })
    });
  });
  return list;
}

module.exports = build();
