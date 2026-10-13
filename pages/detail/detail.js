const store = require('../../utils/store');
const data = require('../../utils/data');
const format = require('../../utils/format');
const rules = require('../../utils/rules');

Page({
  data: {
    id: '',
    group: null,
    majorsView: [],
    profile: null,
    subjectText: '',
    match: null,
    history: [],
    selected: [],
    maxMajors: rules.MAX_MAJORS,
    adjust: null,
    inDraft: false,
    favorite: false,
    majorModal: null,
    canSave: false
  },

  onLoad(options) {
    this.setData({ id: options.id || '' });
  },

  onShow() {
    this.load();
  },

  load() {
    const group = data.getGroup(this.data.id);
    if (!group) {
      wx.showToast({ title: '没有找到这个专业组', icon: 'none' });
      return;
    }
    const profile = store.getProfile();
    const draft = store.getDraft();
    let current = null;
    draft.forEach(function (item) {
      if (item.id === group.id) current = item;
    });
    const selected = current && current.majors ? current.majors.slice() : [];
    const match = rules.matchSubjects(profile, group);
    this.setData({
      group: group,
      majorsView: this.buildMajorsView(group, selected),
      profile: profile,
      subjectText: format.subjectText(profile),
      match: match,
      history: group.history || [],
      selected: selected,
      adjust: current ? current.adjust : null,
      inDraft: !!current,
      favorite: store.isFavorite(group.id),
      canSave: selected.length > 0 && match.ok,
      dataNoteText: data.dataNote() + '　最终以广东省教育考试院官方系统为准。'
    });
  },

  // 组内专业列表：带上是否已选标记，供勾选框使用
  buildMajorsView(group, selected) {
    return (group.majors || []).map(function (major) {
      let sel = false;
      selected.forEach(function (item) {
        if (item.code === major.code) sel = true;
      });
      return {
        code: major.code,
        name: major.name,
        plan: major.plan,
        years: major.years,
        tuition: major.tuition,
        sel: sel
      };
    });
  },

  toggleMajor(e) {
    const code = e.currentTarget.dataset.code;
    const group = this.data.group;
    const selected = this.data.selected.slice();
    let index = -1;
    selected.forEach(function (item, i) {
      if (item.code === code) index = i;
    });
    if (index >= 0) {
      selected.splice(index, 1);
    } else {
      if (selected.length >= rules.MAX_MAJORS) {
        wx.showToast({ title: '每组最多选择 ' + rules.MAX_MAJORS + ' 个专业', icon: 'none' });
        return;
      }
      let target = null;
      (group.majors || []).forEach(function (major) {
        if (major.code === code) target = major;
      });
      if (target) selected.push({ code: target.code, name: target.name });
    }
    this.setData({
      selected: selected,
      majorsView: this.buildMajorsView(group, selected),
      canSave: selected.length > 0 && this.data.match.ok
    });
  },

  moveMajor(e) {
    const index = Number(e.currentTarget.dataset.index);
    const direction = e.currentTarget.dataset.dir;
    const selected = this.data.selected.slice();
    const target = direction === 'up' ? index - 1 : index + 1;
    if (target < 0 || target >= selected.length) return;
    const temp = selected[index];
    selected[index] = selected[target];
    selected[target] = temp;
    this.setData({ selected: selected });
  },

  removeMajor(e) {
    const index = Number(e.currentTarget.dataset.index);
    const selected = this.data.selected.slice();
    selected.splice(index, 1);
    this.setData({
      selected: selected,
      majorsView: this.buildMajorsView(this.data.group, selected),
      canSave: selected.length > 0 && this.data.match.ok
    });
  },

  toggleAdjust() {
    const next = this.data.adjust === true ? false : true;
    this.setData({ adjust: next });
  },

  toggleFavorite() {
    const list = store.toggleFavorite(this.data.group.id);
    this.setData({ favorite: list.indexOf(this.data.group.id) >= 0 });
    wx.showToast({ title: this.data.favorite ? '已收藏' : '已取消收藏', icon: 'none' });
  },

  showMajor(e) {
    const code = e.currentTarget.dataset.code;
    let target = null;
    (this.data.group.majors || []).forEach(function (major) {
      if (major.code === code) target = major;
    });
    this.setData({ majorModal: target });
  },

  closeMajor() {
    this.setData({ majorModal: null });
  },

  noop() {},

  save() {
    const group = this.data.group;
    const profile = this.data.profile;
    const draft = store.getDraft();

    if (!this.data.match.ok) {
      wx.showModal({
        title: '不能填报',
        content: '本组要求 ' + (group.subjectReq.join('+') || '不限') +
          '，你的选科不满足。选科是资格门槛，不满足无法填报。',
        showCancel: false
      });
      return;
    }
    if (!this.data.selected.length) {
      wx.showToast({ title: '请先选择至少 1 个组内专业', icon: 'none' });
      return;
    }
    if (this.data.adjust === null) {
      wx.showToast({ title: '请选择是否服从调剂', icon: 'none' });
      return;
    }

    const payload = {
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
      majors: this.data.selected,
      adjust: this.data.adjust,
      addedBefore: profile.mode === 'before'
    };

    if (this.data.inDraft) {
      store.updateDraftItem(group.id, payload);
    } else {
      const check = rules.canAdd(draft, profile, group);
      if (!check.ok) {
        wx.showToast({ title: check.msg, icon: 'none', duration: 2600 });
        return;
      }
      store.addDraft(payload);
    }

    wx.showToast({ title: '已保存到志愿表', icon: 'success' });
    setTimeout(function () {
      wx.switchTab({ url: '/pages/wish/wish' });
    }, 700);
  }
});
