const store = require('./utils/store');

App({
  globalData: {
    profile: null,
    dataSource: 'local'
  },

  onLaunch() {
    store.ensureInit();
    this.globalData.profile = store.getProfile();
  },

  // 页面里改完档案后调用，保证 globalData 与本地存储一致
  refreshProfile() {
    this.globalData.profile = store.getProfile();
    return this.globalData.profile;
  }
});
