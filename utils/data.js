// 数据访问层：所有页面只通过这里取数据。
// 将来切换到云开发时，把这一层内部实现换成 wx.cloud 调用即可，页面不用改。

const colleges = require('../data/colleges');
const groups = require('../data/groups');
const autoGroups = require('../data/groups-auto');
const gzhmtGroups = require('../data/groups-gzhmt');
const moreRealGroups = require('../data/groups-real');
const moreRealGroups2 = require('../data/groups-real2');
const moreRealGroups3 = require('../data/groups-real3');
const rankData = require('../data/rank');
const life = require('../data/life');
const format = require('./format');

// 真实录取数据（广航、深大、东莞理工等）优先，同一所学校不再使用示例专业组
const realGroups = gzhmtGroups.concat(moreRealGroups, moreRealGroups2, moreRealGroups3);
const realColleges = {};
realGroups.forEach(function (group) {
  realColleges[group.collegeCode] = true;
});
const demoGroups = groups.filter(function (group) {
  return !realColleges[group.collegeCode];
}).map(function (group) {
  // 示例专业组统一打标记，详情页会提示「组内专业、计划与位次为演示数据」
  return Object.assign({}, group, { estimated: true });
});
const allGroupSource = demoGroups.concat(realGroups, autoGroups);

function collegeOf(code) {
  let found = null;
  colleges.forEach(function (item) {
    if (item.code === code) found = item;
  });
  return found;
}

// 学费标准：民办与合作办学按自定标准，公办按广东省分档标准
function tuitionText(college) {
  if (college.nature === '民办') return life.TUITION_RULES['民办'];
  if (college.nature === '合作办学') return life.TUITION_RULES['合作办学'];
  return life.TUITION_RULES[college.type] || '待核验';
}

// 生活与费用信息：有整理数据的院校给出细节，其余标注待核验
function buildLife(college) {
  const item = life.SCHOOLS[college.name] || {};
  return {
    tuition: tuitionText(college),
    dormFee: item.dormFee || life.DORM_FEE[college.nature] || life.DORM_FEE['公办'],
    dorm: item.dorm || '待核验：建议查看学校官方新生入学须知，或向在校生了解',
    canteen: item.canteen || '待核验：食堂口碑主观性较强，建议咨询在校学生',
    campus: item.campus || '',
    source: item.source || '学费按广东省公办本科现行标准分档；宿舍与食堂信息待核验',
    verified: !!item.verified
  };
}

// 把院校信息合并进专业组，方便列表直接渲染
function decorate(group) {
  const college = collegeOf(group.collegeCode) || {};
  const latest = (group.history && group.history.length) ? group.history[0] : null;
  return {
    id: group.id,
    collegeCode: group.collegeCode,
    collegeName: college.name || '未知院校',
    city: college.city || '',
    province: college.province || '',
    nature: college.nature || '',
    type: college.type || '',
    tags: college.tags || [],
    groupCode: group.groupCode,
    groupName: group.groupName,
    subjectReq: group.subjectReq || [],
    subjectText: format.reqText(group.subjectReq),
    plan: group.plan,
    tuition: group.tuition,
    note: group.note || '',
    estimated: !!group.estimated,
    life: buildLife(college),
    history: group.history || [],
    latestYear: latest ? latest.year : null,
    latestRank: latest ? latest.rank : null,
    majors: group.majors || []
  };
}

function allGroups() {
  return allGroupSource.map(decorate);
}

function getGroup(id) {
  let found = null;
  allGroupSource.forEach(function (item) {
    if (item.id === id) found = item;
  });
  return found ? decorate(found) : null;
}

function cityOptions() {
  const list = [];
  colleges.forEach(function (item) {
    if (list.indexOf(item.city) < 0) list.push(item.city);
  });
  return list;
}

// 列表查询：关键词 + 地区 + 性质 + 排序
function queryGroups(options) {
  const opt = options || {};
  const keyword = (opt.keyword || '').replace(/\s/g, '');
  let list = allGroups();

  if (keyword) {
    if (opt.mode === 'major') {
      list = list.filter(function (item) {
        const matched = item.majors.filter(function (major) {
          return major.name.indexOf(keyword) >= 0;
        });
        if (matched.length) {
          item.matchedMajors = matched.map(function (major) {
            return major.name;
          }).join('、');
          return true;
        }
        return item.groupName.indexOf(keyword) >= 0;
      });
    } else {
      list = list.filter(function (item) {
        return item.collegeName.indexOf(keyword) >= 0 ||
          item.collegeCode.indexOf(keyword) >= 0 ||
          item.groupCode.indexOf(keyword) >= 0 ||
          item.groupName.indexOf(keyword) >= 0;
      });
    }
  }

  if (opt.region === '省内') {
    list = list.filter(function (item) { return item.province === '广东'; });
  } else if (opt.region === '省外') {
    list = list.filter(function (item) { return item.province !== '广东'; });
  } else if (opt.region) {
    list = list.filter(function (item) { return item.city === opt.region; });
  }

  if (opt.nature) {
    list = list.filter(function (item) { return item.nature === opt.nature; });
  }

  if (opt.onlyMatch) {
    list = list.filter(function (item) {
      return require('./rules').matchSubjects(opt.profile, item).ok;
    });
  }

  const studentRank = opt.studentRank || null;
  list = list.map(function (item) {
    const result = format.band(studentRank, item.latestRank);
    item.bandLabel = result.label;
    item.bandCls = result.cls;
    item.bandKey = result.key;
    item.rankText = item.latestRank ? format.thousands(item.latestRank) : '暂无';
    return item;
  });

  if (opt.sort === 'rank') {
    list.sort(function (a, b) {
      return (a.latestRank || 999999) - (b.latestRank || 999999);
    });
  } else {
    // 默认按“位次接近优先”排序：和考生位次最接近的专业组排在前面
    list.sort(function (a, b) {
      const ra = studentRank && a.latestRank ? Math.abs(studentRank / a.latestRank - 1) : 99;
      const rb = studentRank && b.latestRank ? Math.abs(studentRank / b.latestRank - 1) : 99;
      return ra - rb;
    });
  }

  return list;
}

// 首页概览：分层数量统计
function summary(profile) {
  const studentRank = profile && profile.mode === 'before' ? null : (profile ? profile.rank : null);
  const result = { great: 0, good: 0, some: 0, low: 0, missing: 0, total: 0, matchTotal: 0 };
  const rules = require('./rules');
  allGroups().forEach(function (item) {
    if (!rules.matchSubjects(profile, item).ok) return;
    result.matchTotal += 1;
    if (!studentRank || !item.latestRank) {
      result.missing += 1;
      return;
    }
    const bandInfo = format.band(studentRank, item.latestRank);
    result.total += 1;
    if (bandInfo.key === 'great') result.great += 1;
    else if (bandInfo.key === 'good') result.good += 1;
    else if (bandInfo.key === 'some') result.some += 1;
    else result.low += 1;
  });
  return result;
}

// 分数换位次：表内取点，表与表之间线性插值
function scoreToRank(score, kind) {
  const rows = rankData.table(kind);
  const value = Number(score);
  if (!value) return null;
  if (value >= rows[0][0]) return { rank: rows[0][1], year: 2026, kind: kind, segment: 1 };
  const last = rows[rows.length - 1];
  if (value <= last[0]) return { rank: last[1], year: 2026, kind: kind, segment: 1, belowLine: true };

  for (let i = 0; i < rows.length - 1; i += 1) {
    const high = rows[i];
    const low = rows[i + 1];
    if (value <= high[0] && value >= low[0]) {
      const span = high[0] - low[0];
      const pos = (high[0] - value) / span;
      const rank = Math.round(high[1] + (low[1] - high[1]) * pos);
      const prevPos = (high[0] - (value + 1)) / span;
      const prevRank = high[1] + (low[1] - high[1]) * (prevPos > 0 ? prevPos : 0);
      return {
        rank: rank,
        year: 2026,
        kind: kind,
        segment: Math.max(1, Math.round(rank - prevRank))
      };
    }
  }
  return null;
}

// 同一分数在近三年的累计位次，用于图中说明跨年不可比
function rankTrend(score, kind) {
  const base = scoreToRank(score, kind);
  if (!base) return [];
  return rankData.YEAR_RATIO.map(function (item) {
    return {
      year: item.year,
      rank: Math.round(base.rank * item.ratio / 100) * 100
    };
  });
}

function batchLine(kind) {
  return rankData.batchLine(kind);
}

function dataNote() {
  return '演示样例数据 · 年份 2026 · 含广东本科院校与部分省外院校 · 非当年正式招生数据';
}

module.exports = {
  allColleges: function () { return colleges.slice(); },
  allGroups: allGroups,
  getGroup: getGroup,
  queryGroups: queryGroups,
  summary: summary,
  scoreToRank: scoreToRank,
  rankTrend: rankTrend,
  batchLine: batchLine,
  cityOptions: cityOptions,
  dataNote: dataNote
};
