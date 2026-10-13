// 通用格式化与分层判断

function thousands(value) {
  if (value === null || value === undefined || value === '') return '';
  const num = Number(value);
  if (isNaN(num)) return String(value);
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 选科要求展示：[] 不限 / ['物理'] 物理+不限 / ['物理','化学'] 物理+化学
function reqText(req) {
  if (!req || !req.length) return '不限';
  if (req.length === 1) return req[0] + '+不限';
  return req.join('+');
}

// 考生选科展示
function subjectText(profile) {
  if (!profile) return '';
  const second = profile.second || [];
  return [profile.kind].concat(second).join('+');
}

// 参考分层：位次数值越小排名越靠前
function band(studentRank, groupRank) {
  if (!studentRank || !groupRank) {
    return { key: 'unknown', label: '参考不足', cls: 'tag-line' };
  }
  const ratio = studentRank / groupRank;
  if (ratio <= 0.85) return { key: 'great', label: '机会很大', cls: 'tag-ok' };
  if (ratio <= 1.0) return { key: 'good', label: '机会较大', cls: 'tag-ok' };
  if (ratio <= 1.25) return { key: 'some', label: '有一定机会', cls: 'tag-warn' };
  return { key: 'low', label: '差距较大', cls: 'tag-line' };
}

function modeText(profile) {
  return profile && profile.mode === 'before' ? '出分前' : '出分后';
}

module.exports = {
  thousands: thousands,
  reqText: reqText,
  subjectText: subjectText,
  band: band,
  modeText: modeText
};
