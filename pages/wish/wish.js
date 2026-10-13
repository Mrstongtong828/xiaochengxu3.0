const store = require('../../utils/store');
const data = require('../../utils/data');
const rules = require('../../utils/rules');

Page({
  data: {
    list: [],
    count: 0,
    majorCount: 0,
    maxGroups: rules.MAX_GROUPS,
    beforeCount: 0,
    exportText: '',
    showExport: false,
    profile: null
  },

  onShow() {
    this.load();
  },

  load() {
    const profile = store.getProfile();
    const draft = store.getDraft();
    let majorCount = 0;
    let beforeCount = 0;
    const list = draft.map(function (item, index) {
      majorCount += (item.majors || []).length;
      if (item.addedBefore) beforeCount += 1;
      let adjustText = '未选择调剂';
      let adjustCls = 'warn-text';
      if (item.adjust === true) {
        adjustText = '服从调剂';
        adjustCls = 'ok-text';
      } else if (item.adjust === false) {
        adjustText = '不服从调剂';
        adjustCls = 'no-text';
      }
      return {
        id: item.id,
        index: index + 1,
        collegeName: item.collegeName,
        groupCode: item.groupCode,
        subjectText: item.subjectText,
        majorCount: (item.majors || []).length,
        adjustText: adjustText,
        adjustCls: adjustCls
      };
    });
    this.setData({
      profile: profile,
      list: list,
      count: draft.length,
      majorCount: majorCount,
      beforeCount: beforeCount
    });
  },

  goList() {
    wx.switchTab({ url: '/pages/list/list' });
  },

  goDetail(e) {
    wx.navigateTo({ url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id });
  },

  move(e) {
    store.moveDraftItem(e.currentTarget.dataset.id, e.currentTarget.dataset.dir);
    this.load();
  },

  remove(e) {
    const id = e.currentTarget.dataset.id;
    const that = this;
    wx.showModal({
      title: '移除这个专业组？',
      content: '移除后需要重新挑选组内专业与调剂选择。',
      success(res) {
        if (res.confirm) {
          store.removeDraftItem(id);
          that.load();
          wx.showToast({ title: '已移除', icon: 'none' });
        }
      }
    });
  },

  clearAll() {
    const that = this;
    if (!this.data.count) return;
    wx.showModal({
      title: '清空志愿表？',
      content: '演示时可以随时清空重来。',
      success(res) {
        if (res.confirm) {
          store.clearDraft();
          that.load();
        }
      }
    });
  },

  goCheck() {
    if (!this.data.count) {
      wx.showToast({ title: '先添加院校专业组再检查', icon: 'none' });
      return;
    }
    wx.navigateTo({ url: '/pages/check/check' });
  },

  openExport() {
    if (!this.data.count) {
      wx.showToast({ title: '还没有可以导出的志愿', icon: 'none' });
      return;
    }
    this.setData({
      exportText: rules.exportText(store.getDraft(), store.getProfile()),
      showExport: true
    });
  },

  closeExport() {
    this.setData({ showExport: false });
  },

  copyExport() {
    wx.setClipboardData({
      data: this.data.exportText,
      success() {
        wx.showToast({ title: '草稿已复制', icon: 'success' });
      }
    });
  },

  noop() {},

  goOfficial() {
    wx.showModal({
      title: '到官方系统确认',
      content: '本页是模拟草稿，不等于已在官方系统确认。请到广东省教育考试院志愿填报系统完成填报与确认。',
      showCancel: false
    });
  },

  shareNote() {
    wx.showModal({
      title: '关于数据',
      content: data.dataNote() + '。演示数据只用于功能展示。',
      showCancel: false
    });
  }
});
