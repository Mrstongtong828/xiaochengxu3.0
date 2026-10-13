const store = require('../../utils/store');
const data = require('../../utils/data');
const format = require('../../utils/format');
const rules = require('../../utils/rules');

Page({
  data: {
    profile: null,
    mode: 'after',
    subjectText: '',
    rankText: '',
    scoreText: '',
    summary: null,
    missingCount: 0,
    gradeTotal: 0,
    draftCount: 0,
    maxGroups: rules.MAX_GROUPS,
    dataNote: '',
    beforeCount: 0
  },

  onShow() {
    this.refresh();
  },

  refresh() {
    const app = getApp();
    const profile = store.getProfile();
    app.globalData.profile = profile;
    const draft = store.getDraft();
    const summary = data.summary(profile);
    let beforeCount = 0;
    draft.forEach(function (item) {
      if (item.addedBefore) beforeCount += 1;
    });
    this.setData({
      profile: profile,
      mode: profile.mode,
      subjectText: format.subjectText(profile),
      rankText: profile.rank ? format.thousands(profile.rank) : '',
      scoreText: profile.score ? String(profile.score) : '',
      summary: summary,
      missingCount: summary.missing,
      gradeTotal: summary.total,
      draftCount: draft.length,
      beforeCount: beforeCount,
      dataNote: data.dataNote()
    });
  },

  goMine() {
    wx.switchTab({ url: '/pages/mine/mine' });
  },

  goList() {
    wx.switchTab({ url: '/pages/list/list' });
  },

  goListWithMode() {
    getApp().globalData.listMode = 'major';
    wx.switchTab({ url: '/pages/list/list' });
  },

  goRank() {
    wx.navigateTo({ url: '/pages/rank/rank' });
  },

  goRules() {
    wx.navigateTo({ url: '/pages/rules/rules' });
  },

  goWish() {
    wx.switchTab({ url: '/pages/wish/wish' });
  },

  goCheck() {
    wx.navigateTo({ url: '/pages/check/check' });
  },

  // 点分层概览时把筛选条件交给列表页
  goBand(e) {
    const band = e.currentTarget.dataset.band;
    getApp().globalData.listBand = band;
    wx.switchTab({ url: '/pages/list/list' });
  }
});
