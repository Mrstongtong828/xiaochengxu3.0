// 本地存储：档案、志愿草稿、收藏。将来换成云开发时只需要改这一个文件。

const PROFILE_KEY = 'yzy_profile_v1';
const DRAFT_KEY = 'yzy_draft_v1';
const FAV_KEY = 'yzy_fav_v1';

// 默认演示档案：出分后状态，物理 + 化学 + 生物
const DEFAULT_PROFILE = {
  province: '广东',
  year: 2026,
  batch: '普通本科批',
  kind: '物理',
  second: ['化学', '生物'],
  score: 585,
  rank: 39200,
  mode: 'after'
};

function read(key, fallback) {
  try {
    const value = wx.getStorageSync(key);
    if (value === '' || value === null || value === undefined) return fallback;
    return value;
  } catch (err) {
    return fallback;
  }
}

function write(key, value) {
  try {
    wx.setStorageSync(key, value);
  } catch (err) {
    // 演示项目忽略写入失败
  }
}

function ensureInit() {
  if (!read(PROFILE_KEY, null)) write(PROFILE_KEY, DEFAULT_PROFILE);
  if (!read(DRAFT_KEY, null)) write(DRAFT_KEY, []);
  if (!read(FAV_KEY, null)) write(FAV_KEY, []);
}

function getProfile() {
  const profile = read(PROFILE_KEY, DEFAULT_PROFILE);
  return Object.assign({}, DEFAULT_PROFILE, profile);
}

function saveProfile(patch) {
  const profile = Object.assign({}, getProfile(), patch || {});
  write(PROFILE_KEY, profile);
  return profile;
}

// 出分前不进入个人分层：rank 仍保留，但界面按无位次处理
function activeRank() {
  const profile = getProfile();
  return profile.mode === 'before' ? null : profile.rank;
}

function resetAll() {
  write(PROFILE_KEY, DEFAULT_PROFILE);
  write(DRAFT_KEY, []);
  write(FAV_KEY, []);
}

function getDraft() {
  return read(DRAFT_KEY, []);
}

function saveDraft(list) {
  write(DRAFT_KEY, list || []);
  return getDraft();
}

function isInDraft(groupId) {
  return getDraft().some(function (item) { return item.id === groupId; });
}

function addDraft(item) {
  const list = getDraft();
  list.push(item);
  return saveDraft(list);
}

function updateDraftItem(groupId, patch) {
  const list = getDraft().map(function (item) {
    if (item.id !== groupId) return item;
    return Object.assign({}, item, patch);
  });
  return saveDraft(list);
}

function removeDraftItem(groupId) {
  return saveDraft(getDraft().filter(function (item) { return item.id !== groupId; }));
}

function moveDraftItem(groupId, direction) {
  const list = getDraft();
  const index = list.findIndex(function (item) { return item.id === groupId; });
  const target = direction === 'up' ? index - 1 : index + 1;
  if (index < 0 || target < 0 || target >= list.length) return list;
  const temp = list[index];
  list[index] = list[target];
  list[target] = temp;
  return saveDraft(list);
}

function clearDraft() {
  return saveDraft([]);
}

function getFavorites() {
  return read(FAV_KEY, []);
}

function isFavorite(groupId) {
  return getFavorites().indexOf(groupId) >= 0;
}

function toggleFavorite(groupId) {
  const list = getFavorites();
  const index = list.indexOf(groupId);
  if (index >= 0) {
    list.splice(index, 1);
  } else {
    list.push(groupId);
  }
  write(FAV_KEY, list);
  return getFavorites();
}

module.exports = {
  DEFAULT_PROFILE: DEFAULT_PROFILE,
  ensureInit: ensureInit,
  getProfile: getProfile,
  saveProfile: saveProfile,
  activeRank: activeRank,
  resetAll: resetAll,
  getDraft: getDraft,
  saveDraft: saveDraft,
  isInDraft: isInDraft,
  addDraft: addDraft,
  updateDraftItem: updateDraftItem,
  removeDraftItem: removeDraftItem,
  moveDraftItem: moveDraftItem,
  clearDraft: clearDraft,
  getFavorites: getFavorites,
  isFavorite: isFavorite,
  toggleFavorite: toggleFavorite
};
