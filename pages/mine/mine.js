const store = require('../../utils/store');
const data = require('../../utils/data');
const format = require('../../utils/format');

const SECOND_POOL = ['化学', '生物', '政治', '地理'];

Page({
  data: {
    profile: null,
    kinds: ['物理', '历史'],
    secondPool: SECOND_POOL,
    secondView: [],
    favorites: [],
    favCount: 0,
    dataNote: '',
    draftCount: 0
  },

  onShow() {
    this.load();
  },

  load() {
    const profile = store.getProfile();
    const secondView = SECOND_POOL.map(function (name) {
      return { name: name, on: profile.second.indexOf(name) >= 0 };
    });
    const favIds = store.getFavorites();
    const favorites = favIds.map(function (id) {
      const group = data.getGroup(id);
      if (!group) return null;
      return {
        id: group.id,
        collegeName: group.collegeName,
        groupCode: group.groupCode,
        subjectText: group.subjectText
      };
    }).filter(function (item) { return !!item; });

    this.setData({
      profile: profile,
      secondView: secondView,
      favorites: favorites,
      favCount: favorites.length,
      draftCount: store.getDraft().length,
      dataNote: data.dataNote()
    });
  },

  setMode(e) {
    store.saveProfile({ mode: e.currentTarget.dataset.value });
    this.load();
    wx.showToast({
      title: e.currentTarget.dataset.value === 'before' ? '已切换到出分前' : '已切换到出分后',
      icon: 'none'
    });
  },

  pickKind(e) {
    const kind = e.currentTarget.dataset.value;
    const second = store.getProfile().second.filter(function (item) {
      return item !== kind;
    });
    store.saveProfile({ kind: kind, second: second.slice(0, 2) });
    this.load();
  },

  toggleSecond(e) {
    const value = e.currentTarget.dataset.value;
    const second = store.getProfile().second.slice();
    const index = second.indexOf(value);
    if (index >= 0) {
      second.splice(index, 1);
    } else {
      if (second.length >= 2) {
        wx.showToast({ title: '再选科目只能选 2 门', icon: 'none' });
        return;
      }
      second.push(value);
    }
    store.saveProfile({ second: second });
    this.load();
  },

  onScoreBlur(e) {
    store.saveProfile({ score: Number(e.detail.value) || 0 });
    this.load();
  },

  onRankBlur(e) {
    store.saveProfile({ rank: Number(e.detail.value) || null });
    this.load();
  },

  goDetail(e) {
    wx.navigateTo({ url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id });
  },

  clearFavorites() {
    const that = this;
    wx.showModal({
      title: '清空收藏？',
      content: '收藏只影响浏览，不影响志愿表。',
      success(res) {
        if (res.confirm) {
          store.getFavorites().slice().forEach(function (id) {
            store.toggleFavorite(id);
          });
          that.load();
        }
      }
    });
  },

  resetDemo() {
    const that = this;
    wx.showModal({
      title: '重置演示数据？',
      content: '档案回到默认的物理类 585 分、位次 39200，志愿表与收藏会清空，方便重复录制演示。',
      success(res) {
        if (res.confirm) {
          store.resetAll();
          that.load();
          wx.showToast({ title: '已重置', icon: 'success' });
        }
      }
    });
  },

  goRules() {
    wx.navigateTo({ url: '/pages/rules/rules' });
  },

  showSource() {
    wx.showModal({
      title: '数据年份与来源',
      content: '演示样例数据，年份 2026，覆盖在粤招生的本科院校专业组。正式使用前需替换为考试院公布的招生计划、一分一段与录取数据。',
      showCancel: false
    });
  }
});
