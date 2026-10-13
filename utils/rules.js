// 广东填报规则：选科匹配、志愿组数上限、组内专业上限、方案检查、草稿导出
// 规则只在这里实现一次，界面只负责调用与展示。

const MAX_GROUPS = 45; // 普通类本科批院校专业组志愿数
const MAX_MAJORS = 6;  // 每组最多填报专业数

// 选科是否满足：选科是资格门槛，不满足就是不能填报
function matchSubjects(profile, group) {
  const req = (group && group.subjectReq) || [];
  const own = [];
  if (profile && profile.kind) own.push(profile.kind);
  (profile && profile.second ? profile.second : []).forEach(function (item) {
    own.push(item);
  });
  const miss = req.filter(function (item) {
    return own.indexOf(item) < 0;
  });
  return { ok: miss.length === 0, miss: miss, own: own, req: req };
}

// 能否加入志愿表
function canAdd(draft, profile, group) {
  if (!group) return { ok: false, msg: '没有找到这个院校专业组' };
  let existIndex = -1;
  draft.forEach(function (item, index) {
    if (item.id === group.id) existIndex = index;
  });
  if (existIndex >= 0) {
    return { ok: false, msg: '这个专业组已经在志愿表第 ' + (existIndex + 1) + ' 位，无需重复添加' };
  }
  if (draft.length >= MAX_GROUPS) {
    return { ok: false, msg: '普通类本科批最多 ' + MAX_GROUPS + ' 个院校专业组志愿，请先移除一个' };
  }
  const match = matchSubjects(profile, group);
  if (!match.ok) {
    return {
      ok: false,
      msg: '本组要求 ' + (match.req.join('+') || '不限') + '，你的选科不满足，不能填报'
    };
  }
  return { ok: true, msg: '' };
}

// 方案检查：规则错误必须先改，决策风险由用户决定，信息不足需要核验
function checkDraft(draft, profile) {
  const errors = [];
  const risks = [];
  const unknowns = [];
  const seen = {};
  const own = [profile.kind].concat(profile.second || []).join('+');

  draft.forEach(function (item, index) {
    const position = '第 ' + (index + 1) + ' 组';

    if (seen[item.id]) {
      errors.push({
        title: position + ' 与第 ' + seen[item.id] + ' 组是同一个专业组',
        desc: '重复填报会浪费志愿位置，建议只保留一个。'
      });
    } else {
      seen[item.id] = index + 1;
    }

    const match = matchSubjects(profile, item);
    if (!match.ok) {
      errors.push({
        title: position + ' 的选科要求不满足',
        desc: '本组要求 ' + match.req.join('+') + '，你现在的选科是 ' + own + '。'
      });
    }

    if (!item.majors || item.majors.length === 0) {
      errors.push({
        title: position + ' 还没有选择组内专业',
        desc: '每个专业组至少选择 1 个专业，最多 ' + MAX_MAJORS + ' 个。'
      });
    }

    if (item.adjust === null || item.adjust === undefined) {
      errors.push({
        title: position + ' 未选择是否服从调剂',
        desc: '每组必须明确选择，到志愿表补充后重新检查。'
      });
    }

    if (item.adjust === false) {
      risks.push({
        title: position + ' 选择了不服从调剂',
        desc: '若未被组内所填专业录取，可能被退档，只能参加征集志愿。'
      });
    }

    if (item.majors && item.majors.length > 0 && item.majors.length < MAX_MAJORS) {
      risks.push({
        title: position + ' 只填了 ' + item.majors.length + ' 个专业',
        desc: '每组最多可填 ' + MAX_MAJORS + ' 个专业，填满能减少被调到不喜欢专业的可能。'
      });
    }

    if (!item.historyRank) {
      unknowns.push({
        title: position + ' 缺少历史投档位次',
        desc: '缺少历史数据时不做分层判断，建议到官方系统核验。'
      });
    }

    if (item.addedBefore) {
      unknowns.push({
        title: position + ' 是出分前加入的',
        desc: '请重新核验当年的招生计划、组代码与选科要求。'
      });
    }
  });

  if (draft.length > 0 && draft.length < MAX_GROUPS) {
    risks.push({
      title: '已填 ' + draft.length + ' / ' + MAX_GROUPS + ' 个专业组',
      desc: '未填满不影响志愿有效性，但建议珍惜每一个志愿位置。'
    });
  }

  return {
    errors: errors,
    risks: risks,
    unknowns: unknowns,
    checked: draft.length,
    hasProblem: errors.length > 0
  };
}

// 导出为可以逐行核对的模拟草稿文本
function exportText(draft, profile) {
  const lines = [];
  lines.push('广东本科志愿填报模拟草稿（演示样例数据）');
  lines.push('科类：' + profile.kind + '类　选科：' +
    [profile.kind].concat(profile.second || []).join('+') +
    '　分数：' + profile.score + '　位次：' + (profile.rank || '未填写'));
  lines.push('批次：' + profile.batch + '　年份：' + profile.year);
  lines.push('序号 | 院校代码 | 院校名称 | 组代码 | 专业代码（按顺序） | 是否服从调剂');
  draft.forEach(function (item, index) {
    const codes = (item.majors || []).map(function (major) {
      return major.code;
    }).join(',');
    const adjust = item.adjust === true ? '是' : (item.adjust === false ? '否' : '未选择');
    lines.push([
      index + 1,
      item.collegeCode,
      item.collegeName,
      item.groupCode,
      codes || '未选择',
      adjust
    ].join(' | '));
  });
  lines.push('提示：本文件是模拟草稿，不代表已在官方系统确认，请到广东省教育考试院系统完成填报与确认。');
  return lines.join('\n');
}

module.exports = {
  MAX_GROUPS: MAX_GROUPS,
  MAX_MAJORS: MAX_MAJORS,
  matchSubjects: matchSubjects,
  canAdd: canAdd,
  checkDraft: checkDraft,
  exportText: exportText
};
