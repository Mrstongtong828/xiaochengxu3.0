const store = require('../../utils/store');
const data = require('../../utils/data');
const format = require('../../utils/format');
const rules = require('../../utils/rules');

const REGIONS = ['全部', '省内', '省外', '广州', '深圳'];
const NATURES = ['不限', '公办', '民办'];
const BAND_LABEL = {
  great: '机会很大',
  good: '机会较大',
  some: '有一定机会',
  low: '差距较大',
  unknown: '参考不足'
};

Page({
  data: {
    mode: 'college',
    keyword: '',
    regions: REGIONS,
    natures: NATURES,
    region: '全部',
    nature: '不限',
    onlyMatch: true,
    sort: 'band',
    band: '',
    bandLabel: '',
    list: [],
    count: 0,
    profile: null,
    subjectText: '',
    hasRank: false
  },

  onShow() {
    const app = getApp();
    const globalData = app.globalData || {};
    const patch = {};
    if (globalData.listMode) {
      patch.mode = globalData.listMode;
      globalData.listMode = null;
    }
    if (globalData.listBand) {
      patch.band = globalData.listBand;
      patch.bandLabel = BAND_LABEL[globalData.listBand] || '';
      globalData.listBand = null;
    }
    if (Object.keys(patch).length) this.setData(patch);
    this.load();
  },

  load() {
    const profile = store.getProfile();
    const studentRank = profile.mode === 'before' ? null : profile.rank;
    const bandFilter = this.data.band;
    const list = data.queryGroups({
      keyword: this.data.keyword,
      mode: this.data.mode,
      region: this.data.region === '全部' ? '' : this.data.region,
      nature: this.data.nature === '不限' ? '' : this.data.nature,
      onlyMatch: this.data.onlyMatch,
      sort: this.data.sort,
      profile: profile,
      studentRank: studentRank
    }).filter(function (item) {
      if (!bandFilter) return true;
      return item.bandKey === bandFilter;
    });

    this.setData({
      profile: profile,
      subjectText: format.subjectText(profile),
      hasRank: profile.mode !== 'before' && !!profile.rank,
      list: list,
      count: list.length
    });
  },

  onKeyword(e) {
    this.setData({ keyword: e.detail.value });
    this.load();
  },

  clearKeyword() {
    this.setData({ keyword: '' });
    this.load();
  },

  switchMode(e) {
    this.setData({ mode: e.currentTarget.dataset.mode });
    this.load();
  },

  pickRegion(e) {
    this.setData({ region: e.currentTarget.dataset.value });
    this.load();
  },

  pickNature(e) {
    this.setData({ nature: e.currentTarget.dataset.value });
    this.load();
  },

  toggleMatch() {
    this.setData({ onlyMatch: !this.data.onlyMatch });
    this.load();
  },

  toggleSort() {
    this.setData({ sort: this.data.sort === 'band' ? 'rank' : 'band' });
    this.load();
  },

  clearBand() {
    this.setData({ band: '', bandLabel: '' });
    this.load();
  },

  goDetail(e) {
    wx.navigateTo({ url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id });
  },

  // 快速加入：只加入专业组，组内专业到详情页选择
  quickAdd(e) {
    const id = e.currentTarget.dataset.id;
    const group = data.getGroup(id);
    const profile = store.getProfile();
    const draft = store.getDraft();
    const check = rules.canAdd(draft, profile, group);
    if (!check.ok) {
      wx.showToast({ title: check.msg, icon: 'none', duration: 2600 });
      return;
    }
    store.addDraft({
      id: group.id,
      collegeCode: group.collegeCode,
      collegeName: group.collegeName,
      city: group.city,
      groupCode: group.groupCode,
      groupName: group.groupName,
      subjectReq: group.subjectReq,
      subjectText: group.subjectText,
      plan: group.plan,
      historyRank: group.latestRank,
      majors: [],
      adjust: null,
      addedBefore: profile.mode === 'before'
    });
    wx.showToast({ title: '已加入志愿表，记得选择组内专业', icon: 'none', duration: 2600 });
  },

  goWish() {
    wx.switchTab({ url: '/pages/wish/wish' });
  }
});
