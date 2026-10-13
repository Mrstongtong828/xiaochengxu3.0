const data = require('../../utils/data');
const store = require('../../utils/store');

Page({
  data: {
    kinds: ['物理', '历史'],
    kind: '物理',
    score: '585',
    result: null,
    trend: [],
    bars: [],
    batchLine: 0,
    dataNote: ''
  },

  onLoad() {
    const profile = store.getProfile();
    this.setData({ kind: profile.kind, score: String(profile.score || 585) }, this.query);
  },

  pickKind(e) {
    this.setData({ kind: e.currentTarget.dataset.value }, this.query);
  },

  onScore(e) {
    this.setData({ score: e.detail.value }, this.query);
  },

  query() {
    const score = Number(this.data.score);
    const result = data.scoreToRank(score, this.data.kind);
    const trend = data.rankTrend(score, this.data.kind);
    let max = 1;
    trend.forEach(function (item) {
      if (item.rank > max) max = item.rank;
    });
    const bars = trend.map(function (item) {
      return {
        year: item.year,
        rank: item.rank,
        height: Math.max(20, Math.round(item.rank / max * 200)),
        isNow: item.year === 2026
      };
    });
    this.setData({
      result: result,
      trend: trend,
      bars: bars,
      batchLine: data.batchLine(this.data.kind),
      dataNote: data.dataNote()
    });
  }
});
