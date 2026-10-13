const store = require('../../utils/store');
const rules = require('../../utils/rules');
const data = require('../../utils/data');

Page({
  data: {
    checked: 0,
    result: null,
    errorCount: 0,
    riskCount: 0,
    unknownCount: 0,
    exportText: '',
    showExport: false,
    dataNote: ''
  },

  onShow() {
    this.run();
  },

  run() {
    const profile = store.getProfile();
    const draft = store.getDraft();
    const result = rules.checkDraft(draft, profile);
    this.setData({
      checked: result.checked,
      result: result,
      errorCount: result.errors.length,
      riskCount: result.risks.length,
      unknownCount: result.unknowns.length,
      dataNote: data.dataNote()
    });
  },

  goWish() {
    wx.switchTab({ url: '/pages/wish/wish' });
  },

  goList() {
    wx.switchTab({ url: '/pages/list/list' });
  },

  openExport() {
    if (!this.data.checked) {
      wx.showToast({ title: '先添加院校专业组再导出', icon: 'none' });
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

  noop() {}
});
