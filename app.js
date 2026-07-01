import { PREFECTURES, SEED_FACILITIES } from "./data.js";
import { GEAR_PRODUCTS, GUIDE_FAQS, SAUNA_ARTICLES, SAUNA_REFERENCES } from "./content.js";

const STORAGE_KEY = "saincho-state-v1";
const LEGACY_STORAGE_KEY = "yuincho-state-v1";
const SETTINGS_KEY = "saincho-settings-v1";
const LEGACY_SETTINGS_KEY = "yuincho-settings-v1";
const INSTALL_DISMISSED_KEY = "saincho-install-dismissed-v1";
const SHARED_FACILITIES_ENDPOINT = "./api/facilities";
const PROFILE_KEY = "saincho-profile-v1";
const RANKING_ENDPOINT = "./api/ranking";
const RANKING_REFRESH_MS = 10000;
const AMAZON_ASSOCIATE_TAG = "saunastampral-22";
const RAKUTEN_AFFILIATE_URL = "https://hb.afl.rakuten.co.jp/hgc/4145461f.ff7bbb59.41454620.00c2fd25/";
const RAKUTEN_AFFILIATE_UT = "eyJwYWdlIjoidXJsIiwidHlwZSI6InRleHQiLCJjb2wiOjF9";
const PRODUCT_RECOMMENDATIONS = GEAR_PRODUCTS.slice(0, 4);
const MOBILE_MENU_QUERY = window.matchMedia("(max-width: 899px)");
const MENU_EDGE_WIDTH = 46;
const MENU_SWIPE_DISTANCE = 72;
const MENU_SWIPE_MAX_VERTICAL = 64;
const APP_URL = "https://saincho-sauna-stamp-rally.pages.dev/";
const APP_SHARE_TEXT = "サ印帳で、行ったサウナを押印して集めよう。全国サウナ候補、県別マスター、称号、ランキング、サウナ入門、Gearまでスマホで使えます。";
const VIEW_META = {
  Explore: {
    path: "/",
    title: "サ印帳 | 全国サウナスタンプラリー・サ活記録アプリ",
    description: "サ印帳は、行ったサウナをサ印として押印し、全国1589候補から次の一湯を探せる無料のサウナスタンプラリー・サ活記録アプリです。",
  },
  Passport: {
    path: "/passport/",
    title: "サ印帳のサ印コレクション | 県別マスターと称号",
    description: "サ印帳で押印したサウナを全県・県別に切り替えて確認。県別マスター認定、称号、達成度でサ活の継続を楽しめます。",
  },
  Stats: {
    path: "/ranking/",
    title: "サ印ランキング TOP10 | サ印帳",
    description: "サ印帳のサ印数ランキング、訪問県、称号、行きたい候補を確認。サウナ仲間と記録を共有できます。",
  },
  Gear: {
    path: "/gear/",
    title: "サウナグッズ30選 | サ印帳 Gear",
    description: "サウナハット、サウナマット、水分補給、タオル、遠征グッズなど、初心者が失敗しにくいサウナGearをAmazon・楽天で比較できます。",
  },
  Guide: {
    path: "/guide/",
    title: "サウナ入門30記事 | 入り方・水風呂・持ち物・マナー",
    description: "初めてのサウナでも迷わない入り方、水風呂、休憩、水分補給、ロウリュ、サウナグッズ、マナーを30記事とFAQで確認できます。",
  },
  Add: {
    path: "/add/",
    title: "候補にないサウナを追加 | サ印帳",
    description: "サ印帳に候補がないサウナを自分で登録し、特徴、メモ、押印候補として管理できます。",
  },
};

const TITLE_MILESTONES = [
  { count: 0, title: "湯けむり準備中" },
  { count: 1, title: "はじめの一湯" },
  { count: 5, title: "新米サウナー" },
  { count: 20, title: "初級サウナー" },
  { count: 50, title: "中級サウナー" },
  { count: 100, title: "上級サウナー" },
  { count: 250, title: "玄人サウナー" },
  { count: 400, title: "プロサウナー" },
  { count: 600, title: "名人サウナー" },
  { count: 800, title: "達人サウナー" },
  { count: 1000, title: "永世サウナー" },
  { count: 2000, title: "神人サウナー" },
];

const SEARCH_SYNONYM_GROUPS = [
  ["saunachelin", "サウナシュラン", "さうなしゅらん", "サウナシェラン", "サウナチェリン"],
  ["sauna", "サウナ", "さうな"],
  ["spa", "スパ", "すぱ"],
  ["ofuro", "おふろ", "オフロ"],
  ["onsen", "温泉", "おんせん", "オンセン"],
  ["loyly", "ロウリュ", "ロウリュウ", "ろうりゅ", "セルフロウリュ"],
  ["private", "プライベート", "個室", "貸切"],
];

const STAMP_STYLES = {
  wood: { kanji: "薪", color: "#2d6a4f", bg: "#eff7ef" },
  water: { kanji: "冷", color: "#2473a6", bg: "#eef7fb" },
  urban: { kanji: "街", color: "#39464f", bg: "#f1f3f4" },
  onsen: { kanji: "湯", color: "#d85a3a", bg: "#fff2ea" },
  award: { kanji: "熱", color: "#bb8d23", bg: "#fff7df" },
  custom: { kanji: "私", color: "#0a8f8a", bg: "#effaf7" },
};

const FEATURE_GROUPS = [
  {
    label: "サウナ室",
    options: ["ドライサウナ", "遠赤外線サウナ", "スチーム(ミスト)サウナ", "塩サウナ", "薪サウナ", "テントサウナ", "バレルサウナ"],
  },
  {
    label: "温度体験",
    options: ["セルフロウリュ", "アロマロウリュ", "熱波師あり", "水風呂あり", "外気あり", "外気なし"],
  },
  {
    label: "利用条件",
    options: ["温泉付き", "個室", "貸切可", "水着必須", "タオルレンタルあり", "タオルレンタルなし", "サウナハット禁止"],
  },
  {
    label: "滞在",
    options: ["サ飯あり", "サ飯なし", "サウナドリンク飲み放題", "宿泊可", "男女共用"],
  },
];

const FEATURE_OPTIONS = FEATURE_GROUPS.flatMap((group) => group.options);
const FEATURE_NORMALIZE_MAP = new Map(FEATURE_OPTIONS.map((feature) => [normalizeText(feature), feature]));
const FEATURE_ALIASES = {
  "スチーム(ミスト)サウナ": ["スチームサウナ", "ミストサウナ", "蒸気サウナ"],
  "外気あり": ["外気浴あり", "外気浴", "外気"],
  "外気なし": ["外気浴なし"],
  "水風呂あり": ["水風呂", "天然水風呂", "滝つぼ水風呂", "冷水", "冷水浴"],
  "熱波師あり": ["熱波", "アウフグース"],
  "アロマロウリュ": ["アロマロウリュウ"],
  "セルフロウリュ": ["セルフロウリュウ"],
  "温泉付き": ["温泉", "天然温泉", "源泉"],
  "個室": ["個室サウナ", "完全個室", "プライベートサウナ"],
  "サ飯あり": ["サ飯", "食事", "レストラン", "食堂"],
};
Object.entries(FEATURE_ALIASES).forEach(([feature, aliases]) => {
  aliases.forEach((alias) => FEATURE_NORMALIZE_MAP.set(normalizeText(alias), feature));
});
const FEATURE_CONFLICTS = new Map([
  ["外気あり", "外気なし"],
  ["外気なし", "外気あり"],
  ["サ飯あり", "サ飯なし"],
  ["サ飯なし", "サ飯あり"],
  ["タオルレンタルあり", "タオルレンタルなし"],
  ["タオルレンタルなし", "タオルレンタルあり"],
]);

const TRAIT_FEATURES = {
  wood: ["薪サウナ"],
  water: ["水風呂あり"],
  onsen: ["温泉付き"],
};

const NON_DISPLAY_TAGS = new Set([
  "SaunaTime掲載",
  "サウナイキタイ掲載",
  "県別スターター",
  "県別30件補強",
  "ユーザー指定追加",
  "みんなの追加",
  "指定リスト",
  "地域照合",
  "指定リスト/地域照合",
  "設備未確認",
  "営業要確認",
  "要確認",
  "注目",
  "名店",
  "自然",
  "街サウナ",
  "温浴",
]);

const AROMAS = ["檜", "白樺", "薄荷", "ほうじ茶", "ヴィヒタ", "柚子", "松葉"];

const FACILITY_STATUS = {
  planned: { badge: "開業予定", action: "開業待ち" },
  verify: { badge: "要確認", action: "要確認" },
};

let state = loadState();
let settings = loadSettings();
let profile = loadProfile();
let selectedPrefecture = "全国";
let selectedGearCategory = "すべて";
let selectedArticleCategory = "すべて";
let activeFilter = "all";
let activeView = "Explore";
let searchTerm = "";
let searchNeedles = [];
let selectedFeatureFilters = new Set();
let sharedFacilities = [];
let sharedFacilitiesConfigured = false;
let leaderboardEntries = [];
let rankingConfigured = null;
let toastTimer = 0;
let rankingSyncTimer = 0;
let rankingPollTimer = 0;
let visibleLimit = 36;
let deferredInstallPrompt = null;
let menuSwipeStart = null;

const el = {
  main: document.querySelector(".main"),
  visitedCount: document.querySelector("#visitedCount"),
  nextMilestone: document.querySelector("#nextMilestone"),
  collectionScope: document.querySelector("#collectionScope"),
  rewardNudge: document.querySelector("#rewardNudge"),
  totalCandidateCount: document.querySelector("#totalCandidateCount"),
  coveredPrefCount: document.querySelector("#coveredPrefCount"),
  heroWishlistCount: document.querySelector("#heroWishlistCount"),
  progressRing: document.querySelector("#progressRing"),
  progressPercent: document.querySelector("#progressPercent"),
  searchInput: document.querySelector("#searchInput"),
  searchClearButton: document.querySelector("#searchClearButton"),
  prefStrip: document.querySelector("#prefStrip"),
  sourceRow: document.querySelector("#sourceRow"),
  featureFilterGrid: document.querySelector("#featureFilterGrid"),
  featureFilterCount: document.querySelector("#featureFilterCount"),
  addFeatureGrid: document.querySelector("#addFeatureGrid"),
  spotlight: document.querySelector("#spotlight"),
  facilityList: document.querySelector("#facilityList"),
  passportPrefStrip: document.querySelector("#passportPrefStrip"),
  titleProgressPanel: document.querySelector("#titleProgressPanel"),
  stampGrid: document.querySelector("#stampGrid"),
  statsGrid: document.querySelector("#statsGrid"),
  prefBoard: document.querySelector("#prefBoard"),
  profileForm: document.querySelector("#profileForm"),
  profileNickname: document.querySelector("#profileNickname"),
  profileEmail: document.querySelector("#profileEmail"),
  profileStatus: document.querySelector("#profileStatus"),
  leaderboardList: document.querySelector("#leaderboardList"),
  leaderboardSummary: document.querySelector("#leaderboardSummary"),
  leaderboardUpdatedAt: document.querySelector("#leaderboardUpdatedAt"),
  leaderboardSyncButton: document.querySelector("#leaderboardSyncButton"),
  shopGrid: document.querySelector("#shopGrid"),
  gearCategoryStrip: document.querySelector("#gearCategoryStrip"),
  gearGrid: document.querySelector("#gearGrid"),
  gearCount: document.querySelector("#gearCount"),
  articleCategoryStrip: document.querySelector("#articleCategoryStrip"),
  guideGearRail: document.querySelector("#guideGearRail"),
  articleList: document.querySelector("#articleList"),
  articleCount: document.querySelector("#articleCount"),
  guideReferences: document.querySelector("#guideReferences"),
  guideFaq: document.querySelector("#guideFaq"),
  prefSelect: document.querySelector("#prefSelect"),
  addForm: document.querySelector("#addForm"),
  toast: document.querySelector("#toast"),
  settingsButton: document.querySelector("#settingsButton"),
  settingsDialog: document.querySelector("#settingsDialog"),
  closeSettingsButton: document.querySelector("#closeSettingsButton"),
  vibrationToggle: document.querySelector("#vibrationToggle"),
  resetButton: document.querySelector("#resetButton"),
  exportButton: document.querySelector("#exportButton"),
  importInput: document.querySelector("#importInput"),
  clearFilterButton: document.querySelector("#clearFilterButton"),
  installCard: document.querySelector("#installCard"),
  installHint: document.querySelector("#installHint"),
  installButton: document.querySelector("#installButton"),
  installDismissButton: document.querySelector("#installDismissButton"),
  installFromSettingsButton: document.querySelector("#installFromSettingsButton"),
  installHelpDialog: document.querySelector("#installHelpDialog"),
  closeInstallHelpButton: document.querySelector("#closeInstallHelpButton"),
  sharedAddHint: document.querySelector("#sharedAddHint"),
  achievementDialog: document.querySelector("#achievementDialog"),
  achievementEyebrow: document.querySelector("#achievementEyebrow"),
  achievementTitle: document.querySelector("#achievementTitle"),
  achievementBody: document.querySelector("#achievementBody"),
  closeAchievementButton: document.querySelector("#closeAchievementButton"),
  achievementOkButton: document.querySelector("#achievementOkButton"),
};

init();

function init() {
  activeView = getViewFromLocation();
  applyActiveView(activeView);
  updateDocumentMetaForView(activeView);
  renderPrefSelect();
  renderFeatureControls();
  hydrateSearchFromUrl();
  renderSearchClearButton();
  renderProfilePanel();
  renderShopPanel();
  renderAll();
  bindEvents();
  renderInstallPrompt();
  registerServiceWorker();
  loadSharedFacilities();
  loadRanking();
  startRankingPolling();
  window.addEventListener("popstate", () => {
    activeView = getViewFromLocation();
    applyActiveView(activeView);
    updateDocumentMetaForView(activeView);
    renderAll();
    el.main.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function bindEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  document.addEventListener("click", (event) => {
    const openViewButton = event.target instanceof Element ? event.target.closest("[data-open-view]") : null;
    if (!openViewButton || el.main.contains(openViewButton)) return;
    if (el.settingsDialog.open) closeSettingsDialog();
    setView(openViewButton.dataset.openView);
  });

  document.querySelectorAll("[data-menu-view]").forEach((button) => {
    button.addEventListener("click", () => {
      closeSettingsDialog();
      setView(button.dataset.menuView);
    });
  });

  document.addEventListener("click", (event) => {
    const appActionButton = event.target instanceof Element ? event.target.closest("[data-app-action]") : null;
    if (!appActionButton) return;
    if (el.settingsDialog.open && appActionButton.closest(".settings-dialog")) closeSettingsDialog();
    if (appActionButton.dataset.appAction === "share-app") shareApp();
    if (appActionButton.dataset.appAction === "copy-app-url") copyAppUrl();
    if (appActionButton.dataset.appAction === "share-line") shareToLine();
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      visibleLimit = 36;
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("segment-active", item === button));
      renderExplore();
    });
  });

  el.searchInput.addEventListener("input", (event) => {
    setSearchTerm(event.target.value);
    visibleLimit = 36;
    renderSearchClearButton();
    const moved = moveToSearchPrefecture(event.target.value);
    if (moved) {
      renderAll();
    } else {
      renderExplore();
    }
  });

  el.searchClearButton.addEventListener("click", () => {
    if (!el.searchInput.value) return;
    el.searchInput.value = "";
    setSearchTerm("");
    visibleLimit = 36;
    renderSearchClearButton();
    renderExplore();
    el.searchInput.focus();
  });

  el.prefStrip.addEventListener("click", (event) => {
    const button = event.target.closest("[data-prefecture]");
    if (!button) return;
    selectedPrefecture = button.dataset.prefecture;
    visibleLimit = 36;
    renderAll();
  });

  el.featureFilterGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-feature-filter]");
    if (!button) return;
    const feature = normalizeFeature(button.dataset.featureFilter);
    if (!feature) return;
    if (selectedFeatureFilters.has(feature)) {
      selectedFeatureFilters.delete(feature);
    } else {
      const conflict = FEATURE_CONFLICTS.get(feature);
      if (conflict) selectedFeatureFilters.delete(conflict);
      selectedFeatureFilters.add(feature);
    }
    visibleLimit = 36;
    renderFeatureFilterGrid();
    renderExplore();
  });

  el.addFeatureGrid.addEventListener("change", (event) => {
    const input = event.target.closest('input[name="features"]');
    if (!input?.checked) return;
    const feature = normalizeFeature(input.value);
    const conflict = FEATURE_CONFLICTS.get(feature);
    if (!conflict) return;
    const conflictInput = el.addFeatureGrid.querySelector(`input[name="features"][value="${cssEscape(conflict)}"]`);
    if (conflictInput) conflictInput.checked = false;
  });

  el.main.addEventListener("click", (event) => {
    const openViewButton = event.target.closest("[data-open-view]");
    if (openViewButton) {
      setView(openViewButton.dataset.openView);
      return;
    }

    const gearCategoryButton = event.target.closest("[data-gear-category]");
    if (gearCategoryButton) {
      selectedGearCategory = gearCategoryButton.dataset.gearCategory;
      renderGearPage();
      return;
    }

    const articleCategoryButton = event.target.closest("[data-article-category]");
    if (articleCategoryButton) {
      selectedArticleCategory = articleCategoryButton.dataset.articleCategory;
      renderGuidePage();
      return;
    }

    const moreButton = event.target.closest("[data-show-more]");
    if (moreButton) {
      visibleLimit += 36;
      renderExplore();
      return;
    }

    const button = event.target.closest("[data-action]");
    if (!button) return;
    if (button.dataset.action === "prefill-add") {
      prefillAddFormFromSearch();
      return;
    }

    const facility = getFacilities().find((item) => item.id === button.dataset.id);
    if (!facility) return;

    if (button.dataset.action === "stamp") stampFacility(facility);
    if (button.dataset.action === "unstamp") unstampFacility(facility);
    if (button.dataset.action === "wishlist") toggleWishlist(facility);
    if (button.dataset.action === "save-note") saveFacilityMemo(facility, button);
    if (button.dataset.action === "delete-note") deleteFacilityMemo(facility);
    if (button.dataset.action === "share-note") shareFacilityMemo(facility);
    if (button.dataset.action === "share-facility") shareFacility(facility);
  });

  el.prefBoard.addEventListener("click", (event) => {
    const button = event.target.closest("[data-prefecture]");
    if (!button) return;
    selectedPrefecture = button.dataset.prefecture;
    setView("Explore");
  });

  el.passportPrefStrip.addEventListener("click", (event) => {
    const button = event.target.closest("[data-passport-prefecture]");
    if (!button) return;
    selectedPrefecture = button.dataset.passportPrefecture;
    visibleLimit = 36;
    renderAll();
  });

  el.profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nickname = el.profileNickname.value.trim();
    const email = el.profileEmail.value.trim();
    if (!nickname || !email || !el.profileEmail.validity.valid) {
      showToast("ニックネームとメールアドレスを確認してください");
      return;
    }
    profile = {
      id: profile.id || createClientId(),
      nickname: nickname.slice(0, 16),
      email: email.slice(0, 80),
      registeredAt: profile.registeredAt || new Date().toISOString(),
    };
    saveProfile();
    renderProfilePanel();
    syncRanking({ announce: true });
  });

  el.leaderboardSyncButton.addEventListener("click", () => syncRanking({ announce: true }));

  el.addForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(el.addForm);
    const memoText = String(form.get("note")).trim();
    const selectedFeatures = normalizeFeatures(form.getAll("features"));
    const custom = {
      id: `custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      name: String(form.get("name")).trim(),
      prefecture: String(form.get("prefecture")),
      city: String(form.get("city")).trim(),
      trait: inferTraitFromFeatures(selectedFeatures),
      tags: ["マイサウナ", ...selectedFeatures],
      features: selectedFeatures,
      note: memoText,
      source: "自分で追加",
      sourceUrl: "",
      custom: true,
    };

    if (!custom.name) return;
    const duplicate = findDuplicateFacility(custom);
    if (duplicate) {
      selectedPrefecture = duplicate.prefecture;
      setSearchTerm(duplicate.name);
      el.searchInput.value = duplicate.name;
      setView("Explore");
      showToast(`${duplicate.name} はすでに候補にあります`);
      return;
    }

    let addedFacility = custom;
    let shared = false;
    try {
      const result = await publishSharedFacility(custom);
      if (result?.facility) {
        addedFacility = result.facility;
        shared = true;
        mergeSharedFacility(result.facility);
      } else {
        state.customFacilities.push(custom);
      }
    } catch {
      state.customFacilities.push(custom);
    }

    if (memoText) {
      state.facilityMemos[addedFacility.id] = {
        text: memoText,
        updatedAt: new Date().toISOString(),
      };
    }
    selectedPrefecture = addedFacility.prefecture;
    setSearchTerm(addedFacility.name);
    el.searchInput.value = addedFacility.name;
    saveState();
    el.addForm.reset();
    setView("Explore");
    showToast(shared ? `${addedFacility.name} をみんなの候補に追加しました` : `${addedFacility.name} を自分の候補に追加しました`);
  });

  el.settingsButton.addEventListener("click", openSettingsDialog);
  el.closeSettingsButton.addEventListener("click", closeSettingsDialog);
  el.vibrationToggle.checked = settings.vibration;
  el.vibrationToggle.addEventListener("change", () => {
    settings.vibration = el.vibrationToggle.checked;
    saveSettings();
  });

  el.resetButton.addEventListener("click", () => {
    if (!confirm("すべての押印・行きたい・追加データを削除します。")) return;
    state = createState();
    saveState();
    closeSettingsDialog();
    renderAll();
    showToast("記録をリセットしました");
  });

  el.exportButton.addEventListener("click", exportState);
  el.importInput.addEventListener("change", importState);
  el.clearFilterButton.addEventListener("click", () => {
    selectedPrefecture = "全国";
    renderAll();
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    localStorage.removeItem(INSTALL_DISMISSED_KEY);
    renderInstallPrompt();
  });
  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    localStorage.setItem(INSTALL_DISMISSED_KEY, "installed");
    renderInstallPrompt();
    showToast("ホーム画面に追加しました");
  });
  window.addEventListener("resize", renderInstallPrompt);
  el.installButton.addEventListener("click", handleInstallClick);
  el.installDismissButton.addEventListener("click", () => {
    localStorage.setItem(INSTALL_DISMISSED_KEY, "dismissed");
    renderInstallPrompt();
  });
  el.installFromSettingsButton.addEventListener("click", () => {
    localStorage.removeItem(INSTALL_DISMISSED_KEY);
    if (isStandaloneMode()) {
      showToast("すでにホーム画面表示です");
      return;
    }
    handleInstallClick();
    renderInstallPrompt();
  });
  el.closeInstallHelpButton.addEventListener("click", () => el.installHelpDialog.close());
  el.closeAchievementButton.addEventListener("click", () => el.achievementDialog.close());
  el.achievementOkButton.addEventListener("click", () => el.achievementDialog.close());
  bindSwipeMenu();
}

function openSettingsDialog() {
  if (el.settingsDialog.open) return;
  if (typeof el.settingsDialog.showModal === "function") {
    el.settingsDialog.showModal();
    return;
  }
  el.settingsDialog.setAttribute("open", "");
}

function closeSettingsDialog() {
  if (!el.settingsDialog.open) return;
  if (typeof el.settingsDialog.close === "function") {
    el.settingsDialog.close();
    return;
  }
  el.settingsDialog.removeAttribute("open");
}

function bindSwipeMenu() {
  document.addEventListener("touchstart", (event) => {
    if (!MOBILE_MENU_QUERY.matches || event.touches.length !== 1) {
      menuSwipeStart = null;
      return;
    }
    const touch = event.touches[0];
    const target = event.target instanceof Element ? event.target : document.body;
    if (!el.settingsDialog.open) {
      if (!isMenuOpenSwipeStart(touch, target)) {
        menuSwipeStart = null;
        return;
      }
      menuSwipeStart = { mode: "open", x: touch.clientX, y: touch.clientY };
      return;
    }
    if (target.closest("input, textarea, select, button, a")) {
      menuSwipeStart = null;
      return;
    }
    menuSwipeStart = { mode: "close", x: touch.clientX, y: touch.clientY };
  }, { passive: true });

  document.addEventListener("touchend", (event) => {
    if (!menuSwipeStart || !event.changedTouches.length) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - menuSwipeStart.x;
    const dy = Math.abs(touch.clientY - menuSwipeStart.y);
    const mode = menuSwipeStart.mode;
    menuSwipeStart = null;
    if (dy > MENU_SWIPE_MAX_VERTICAL) return;
    if (mode === "open" && dx <= -MENU_SWIPE_DISTANCE) openSettingsDialog();
    if (mode === "close" && dx >= MENU_SWIPE_DISTANCE) closeSettingsDialog();
  }, { passive: true });
}

function isMenuOpenSwipeStart(touch, target) {
  if (touch.clientX < window.innerWidth - MENU_EDGE_WIDTH) return false;
  if (isBottomNavTouch(touch.clientY)) return false;
  return !target.closest("input, textarea, select, button, a, .bottom-nav, .category-strip, .pref-strip, .passport-scope-strip, .source-row, .gear-category-strip");
}

function isBottomNavTouch(clientY) {
  const nav = document.querySelector(".bottom-nav");
  if (!nav) return false;
  const rect = nav.getBoundingClientRect();
  return clientY >= rect.top - 12 && clientY <= rect.bottom + 12;
}

function setView(view) {
  if (!VIEW_META[view]) view = "Explore";
  activeView = view;
  applyActiveView(view);
  pushViewUrl(view);
  renderAll();
  el.main.scrollTo({ top: 0, behavior: "smooth" });
}

function applyActiveView(view) {
  document.querySelectorAll(".view").forEach((section) => {
    section.classList.toggle("view-active", section.id === `view${view}`);
  });
  document.querySelectorAll("[data-view]").forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle("nav-active", active);
    button.toggleAttribute("aria-current", active);
  });
}

function renderAll() {
  renderSummary();
  renderExplore();
  renderPassport();
  renderStats();
  renderGearPage();
  renderGuidePage();
}

function renderSummary() {
  const facilities = getFacilities();
  const visitedTotal = Object.keys(state.visited).length;
  const wishlistTotal = Object.keys(state.wishlist).length;
  const rawPercent = facilities.length ? (visitedTotal / facilities.length) * 100 : 0;
  const percent = rawPercent > 0 && rawPercent < 1 ? rawPercent.toFixed(1) : Math.round(rawPercent).toString();
  const nextTitle = getNextTitle(visitedTotal);
  const coveredPrefTotal = Object.keys(countFacilitiesByPrefecture()).length;

  el.visitedCount.textContent = visitedTotal;
  el.progressPercent.textContent = `${percent}%`;
  el.progressRing.style.setProperty("--progress", `${rawPercent}%`);
  el.nextMilestone.textContent = nextTitle ? `あと${nextTitle.count - visitedTotal}湯で${nextTitle.title}` : "最高称号に到達済み";
  el.collectionScope.textContent = `${facilities.length}候補 / ${PREFECTURES.length}都道府県`;
  el.totalCandidateCount.textContent = facilities.length;
  el.coveredPrefCount.textContent = coveredPrefTotal;
  el.heroWishlistCount.textContent = wishlistTotal;
  renderRewardNudge(visitedTotal, wishlistTotal);
}

function renderRewardNudge(visitedTotal, wishlistTotal) {
  if (!el.rewardNudge) return;
  const nextTitle = getNextTitle(visitedTotal);
  const titleGoal = nextTitle
    ? { label: "次の称号", value: `あと${nextTitle.count - visitedTotal}湯`, hint: nextTitle.title }
    : { label: "称号", value: "到達済み", hint: "最高称号" };
  const prefGoal = getNearestPrefectureGoal();
  const wishlistGoal = wishlistTotal > 0
    ? { label: "行きたい", value: `${wishlistTotal}件`, hint: "未来の一湯" }
    : { label: "行きたい", value: "あと1件", hint: "候補を残す" };
  const goals = [titleGoal, prefGoal, wishlistGoal];
  el.rewardNudge.innerHTML = goals.map((goal) => `
    <div class="reward-pill">
      <span>${escapeHtml(goal.label)}</span>
      <strong>${escapeHtml(goal.value)}</strong>
      <em>${escapeHtml(goal.hint)}</em>
    </div>
  `).join("");
}

function renderExplore() {
  renderPrefStrip();
  renderSourceRow();
  renderSpotlight();
  const facilities = getFilteredFacilities();

  if (!facilities.length) {
    const addButton = searchTerm
      ? `<button class="ghost-button empty-add-button" type="button" data-action="prefill-add">このサウナを候補に追加</button>`
      : "";
    el.facilityList.innerHTML = `
      <div class="empty-state">
        <p>${searchTerm ? "該当する候補が見つかりません。候補にないサウナは自分で登録できます。" : `${escapeHtml(selectedPrefecture)}の候補はまだありません。参照リンクで探して、追加タブから登録できます。`}</p>
        ${addButton}
      </div>
    `;
    return;
  }

  const visibleFacilities = selectedPrefecture === "全国" ? facilities.slice(0, visibleLimit) : facilities;
  const moreCount = Math.max(0, facilities.length - visibleFacilities.length);
  const moreButton = moreCount
    ? `<button class="load-more-button" type="button" data-show-more="true">さらに${Math.min(36, moreCount)}件表示</button>`
    : "";
  el.facilityList.innerHTML = visibleFacilities.map(renderFacilityCard).join("") + moreButton;
}

function renderPrefStrip() {
  const countsByPref = countVisitedByPrefecture();
  const candidatesByPref = countFacilitiesByPrefecture();
  const allVisited = Object.keys(state.visited).length;
  const allCandidates = getFacilities().length;
  const chips = [
    `<button class="pref-chip ${selectedPrefecture === "全国" ? "pref-chip-active" : ""}" type="button" data-prefecture="全国">全国 ${allVisited}/${allCandidates}</button>`,
    ...PREFECTURES.map((pref) => {
      const active = selectedPrefecture === pref.name;
      const visitedCount = countsByPref[pref.name] || 0;
      const candidateCount = candidatesByPref[pref.name] || 0;
      return `<button class="pref-chip ${active ? "pref-chip-active" : ""}" type="button" data-prefecture="${escapeAttr(pref.name)}">${escapeHtml(shortPrefName(pref.name))} ${visitedCount}/${candidateCount}</button>`;
    }),
  ];
  el.prefStrip.innerHTML = chips.join("");
}

function renderSourceRow() {
  const pref = PREFECTURES.find((item) => item.name === selectedPrefecture);
  const ikitaiUrl = pref ? `https://sauna-ikitai.com/${pref.slug}` : "https://sauna-ikitai.com/";
  const saunaTimeUrl = pref ? `https://saunatime.jp/${pref.saunaTimeSlug || pref.slug}/` : "https://saunatime.jp/";
  const links = [
    ["サウナイキタイ", ikitaiUrl],
    ["SaunaTime", saunaTimeUrl],
    ["サウナマップ", "https://sauna-map.com/"],
    ["スーパー銭湯全国検索", "https://www.supersento.com/"],
    ["Instabase", "https://www.instabase.jp/sauna"],
    ["SAUNACHELIN", "https://www.saunachelin.com/"],
  ];
  el.sourceRow.innerHTML = links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`).join("");
}

function renderSpotlight() {
  const pool = getFilteredFacilities().filter((facility) => !state.visited[facility.id] && !getFacilityStatus(facility));
  const facility = pool[0];
  if (!facility) {
    el.spotlight.innerHTML = "";
    return;
  }
  const wished = Boolean(state.wishlist[facility.id]);
  el.spotlight.innerHTML = `
    <article class="spotlight-card">
      <div>
        <span class="spotlight-label">次の一湯</span>
        <h3>${escapeHtml(facility.name)}</h3>
        <p>${escapeHtml(getFacilityMeta(facility))}</p>
      </div>
      ${renderStamp(facility, false)}
      <div class="spotlight-actions">
        <button class="primary-button" type="button" data-action="stamp" data-id="${escapeAttr(facility.id)}">押印</button>
        <button class="secondary-button ${wished ? "is-active" : ""}" type="button" data-action="wishlist" data-id="${escapeAttr(facility.id)}">${wished ? "候補入り" : "行きたい"}</button>
        <button class="facility-share-button" type="button" data-action="share-facility" data-id="${escapeAttr(facility.id)}">Xでおすすめ</button>
      </div>
      ${renderFacilityGearNudge(facility)}
    </article>
  `;
}

function renderFacilityGearNudge(facility) {
  const picks = getFacilityGearProducts(facility).slice(0, 2);
  return `
    <div class="spotlight-gear">
      <div class="spotlight-gear-head">
        <span>GEAR CHECK</span>
        <strong>次の一湯に持っていく</strong>
        <button class="mini-button" type="button" data-open-view="Gear">一覧</button>
      </div>
      <div class="spotlight-gear-links">
        ${picks.map(renderCompactGearLink).join("")}
      </div>
    </div>
  `;
}

function renderFacilityCard(facility) {
  const visited = state.visited[facility.id];
  const wished = Boolean(state.wishlist[facility.id]);
  const status = getFacilityStatus(facility);
  const meta = getFacilityMeta(facility);
  const displayTags = getDisplayTags(facility);
  const tags = displayTags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
  const sourceLabel = getFacilitySourceLabel(facility);
  const sourceBadge = facility.sourceUrl
    ? `<a class="source-badge" href="${escapeAttr(facility.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(sourceLabel)}</a>`
    : `<span class="source-badge">${escapeHtml(sourceLabel)}</span>`;
  const headBadge = visited
    ? `<span class="visited-badge">押印済</span>`
    : status
      ? `<span class="status-badge">${escapeHtml(status.badge)}</span>`
      : sourceBadge;
  const actions = visited
    ? `
      <button class="primary-button complete-button" type="button" disabled>押印済み</button>
      <button class="undo-button" type="button" data-action="unstamp" data-id="${escapeAttr(facility.id)}">取り消す</button>
    `
    : `
      <button class="primary-button" type="button" data-action="stamp" data-id="${escapeAttr(facility.id)}" ${status ? "disabled" : ""}>${status ? escapeHtml(status.action) : "押印する"}</button>
      <button class="secondary-button ${wished ? "is-active" : ""}" type="button" data-action="wishlist" data-id="${escapeAttr(facility.id)}" aria-pressed="${wished}">${wished ? "候補入り" : "行きたい"}</button>
    `;

  return `
    <article class="facility-card">
      ${renderStamp(facility, Boolean(visited))}
      <div class="card-body">
        <div class="card-head">
          <h3 class="facility-name">${escapeHtml(facility.name)}</h3>
          ${headBadge}
        </div>
        <p class="facility-meta">${escapeHtml(meta)}</p>
        ${tags ? `<div class="tag-row">${tags}</div>` : ""}
        <div class="card-actions ${visited ? "card-actions-visited" : ""}">${actions}</div>
        <button class="facility-share-button" type="button" data-action="share-facility" data-id="${escapeAttr(facility.id)}">Xでおすすめ</button>
        ${renderMemoPanel(facility)}
      </div>
    </article>
  `.trim();
}

function renderPassport() {
  renderPassportPrefStrip();
  renderTitleProgress();
  const facilities = getFacilities().filter((facility) => selectedPrefecture === "全国" || facility.prefecture === selectedPrefecture);
  const sorted = [...facilities].sort((a, b) => {
    const aTime = state.visited[a.id]?.at || "";
    const bTime = state.visited[b.id]?.at || "";
    return bTime.localeCompare(aTime);
  });

  if (!sorted.length) {
    el.stampGrid.innerHTML = `<div class="empty-state"><p>候補を追加すると、ここにサ印帳が育ちます。</p></div>`;
    return;
  }

  el.stampGrid.innerHTML = sorted.map((facility) => {
    const visited = state.visited[facility.id];
    const memo = getFacilityMemo(facility.id);
    const date = visited ? formatDate(visited.at) : "未押印";
    return `
      <article class="stamp-tile">
        ${renderStamp(facility, Boolean(visited))}
        <p class="stamp-title">${escapeHtml(facility.name)}</p>
        <span class="stamp-date">${escapeHtml(date)}</span>
        ${memo ? `<p class="stamp-note">${escapeHtml(memo.text)}</p>` : ""}
        <button class="tiny-share-button" type="button" data-action="share-facility" data-id="${escapeAttr(facility.id)}">施設を共有</button>
        ${memo ? `<button class="tiny-share-button" type="button" data-action="share-note" data-id="${escapeAttr(facility.id)}">Xで共有</button>` : ""}
        ${visited ? `<button class="tiny-undo-button" type="button" data-action="unstamp" data-id="${escapeAttr(facility.id)}">取り消す</button>` : ""}
      </article>
    `;
  }).join("");
}

function renderPassportPrefStrip() {
  const countsByPref = countVisitedByPrefecture();
  const candidatesByPref = countEligibleFacilitiesByPrefecture();
  const allVisited = Object.keys(state.visited).length;
  const allEligible = countEligibleFacilities().length;
  const chips = [
    `<button class="pref-chip ${selectedPrefecture === "全国" ? "pref-chip-active" : ""}" type="button" data-passport-prefecture="全国">全国 ${allVisited}/${allEligible}</button>`,
    ...PREFECTURES.map((pref) => {
      const active = selectedPrefecture === pref.name;
      const visitedCount = countsByPref[pref.name] || 0;
      const candidateCount = candidatesByPref[pref.name] || 0;
      const mastered = candidateCount > 0 && visitedCount >= candidateCount;
      return `<button class="pref-chip ${active ? "pref-chip-active" : ""} ${mastered ? "pref-chip-mastered" : ""}" type="button" data-passport-prefecture="${escapeAttr(pref.name)}">${escapeHtml(shortPrefName(pref.name))} ${visitedCount}/${candidateCount}</button>`;
    }),
  ];
  el.passportPrefStrip.innerHTML = chips.join("");
}

function renderTitleProgress() {
  const visitedTotal = Object.keys(state.visited).length;
  const current = getCurrentTitle(visitedTotal);
  const next = getNextTitle(visitedTotal);
  const remaining = next ? next.count - visitedTotal : 0;
  const titlePercent = next
    ? Math.min(100, Math.round(((visitedTotal - current.count) / Math.max(1, next.count - current.count)) * 100))
    : 100;
  const prefProgress = selectedPrefecture === "全国" ? null : getPrefectureMasterProgress(selectedPrefecture);
  const prefCopy = prefProgress
    ? `${selectedPrefecture}: ${prefProgress.visited}/${prefProgress.eligible}湯${prefProgress.mastered ? " / マスター認定済み" : ` / あと${prefProgress.remaining}湯`}`
    : `${getMasteredPrefectures().length}/${PREFECTURES.length}県をマスター`;

  el.titleProgressPanel.innerHTML = `
    <article class="title-card">
      <img src="./assets/achievement-mascot.png" width="180" height="120" alt="" />
      <div class="title-card-body">
        <span class="title-kicker">現在の称号</span>
        <strong>${escapeHtml(current.title)}</strong>
        <p>${next ? `あと${remaining}湯で${escapeHtml(next.title)}` : "最高称号に到達済み"}</p>
        <div class="title-progress" aria-label="次の称号までの進捗">
          <span style="width:${titlePercent}%"></span>
        </div>
        <em>${escapeHtml(prefCopy)}</em>
      </div>
    </article>
  `;
}

function renderMemoPanel(facility) {
  const memo = getFacilityMemo(facility.id);
  const updatedAt = memo?.updatedAt ? formatDate(memo.updatedAt) : "";
  return `
    <details class="memo-panel" ${memo ? "open" : ""}>
      <summary>
        <span>メモ</span>
        <strong>${memo ? "保存済み" : "追加"}</strong>
      </summary>
      <div class="memo-body">
        ${memo ? `<p class="memo-text">${escapeHtml(memo.text)}</p>` : ""}
        ${updatedAt ? `<span class="memo-date">${escapeHtml(updatedAt)} 更新</span>` : ""}
        <textarea data-note-input="${escapeAttr(facility.id)}" maxlength="240" rows="3" placeholder="感想、気付き、水風呂、再訪したい理由">${memo ? escapeHtml(memo.text) : ""}</textarea>
        <div class="memo-actions">
          <button class="secondary-button" type="button" data-action="save-note" data-id="${escapeAttr(facility.id)}">${memo ? "更新" : "保存"}</button>
          ${memo ? `<button class="undo-button" type="button" data-action="delete-note" data-id="${escapeAttr(facility.id)}">取り消す</button>` : ""}
          ${memo ? `<button class="share-button" type="button" data-action="share-note" data-id="${escapeAttr(facility.id)}">Xで共有</button>` : ""}
        </div>
      </div>
    </details>
  `;
}

function renderStats() {
  const visitedTotal = Object.keys(state.visited).length;
  const prefectureTotal = Object.keys(countVisitedByPrefecture()).length;
  const wishlistTotal = Object.keys(state.wishlist).length;
  const masteredTotal = getMasteredPrefectures().length;
  const currentTitle = getCurrentTitle(visitedTotal).title;

  el.statsGrid.innerHTML = [
    ["押印", `${visitedTotal}`],
    ["訪問県", `${prefectureTotal}`],
    ["行きたい", `${wishlistTotal}`],
    ["称号", currentTitle],
  ].map(([label, value]) => `
    <div class="stat-box ${label === "称号" ? "stat-box-title" : ""}">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");

  const countsByPref = countVisitedByPrefecture();
  const candidatesByPref = countEligibleFacilitiesByPrefecture();
  el.prefBoard.innerHTML = PREFECTURES.map((pref) => {
    const count = countsByPref[pref.name] || 0;
    const candidateCount = candidatesByPref[pref.name] || 0;
    const badge = candidateCount > 0 && count >= candidateCount ? "マスター" : `あと${Math.max(0, candidateCount - count)}`;
    return `
      <button class="pref-progress" type="button" data-prefecture="${escapeAttr(pref.name)}">
        <strong>${escapeHtml(shortPrefName(pref.name))}</strong>
        <span>${count}/${candidateCount}湯 / ${badge}</span>
      </button>
    `;
  }).join("");
  el.prefBoard.insertAdjacentHTML("afterbegin", `
    <button class="pref-progress pref-progress-master" type="button" data-prefecture="全国">
      <strong>県マスター</strong>
      <span>${masteredTotal}/${PREFECTURES.length}県</span>
    </button>
  `);
  renderLeaderboard();
}

function renderProfilePanel() {
  el.profileNickname.value = profile.nickname || "";
  el.profileEmail.value = profile.email || "";
  el.profileStatus.textContent = isProfileComplete() ? "参加中" : "未登録";
}

function renderLeaderboard() {
  const visitedTotal = Object.keys(state.visited).length;
  const currentTitle = getCurrentTitle(visitedTotal).title;
  const localEntry = isProfileComplete()
    ? {
      id: profile.id,
      nickname: profile.nickname,
      stamps: visitedTotal,
      title: currentTitle,
      local: true,
      updatedAt: new Date().toISOString(),
    }
    : null;
  const entries = mergeRankingEntries(leaderboardEntries, localEntry);
  const sorted = [...entries]
    .sort((a, b) => b.stamps - a.stamps || a.nickname.localeCompare(b.nickname, "ja"))
    .slice(0, 10);
  const ownRank = localEntry ? sorted.findIndex((entry) => entry.id === profile.id) + 1 : 0;
  const entryAbove = ownRank > 1 ? sorted[ownRank - 2] : null;
  const gapToAbove = entryAbove ? Math.max(1, entryAbove.stamps - visitedTotal + 1) : 0;
  const topTenEdge = sorted.length >= 10 ? sorted[9] : null;
  const gapToTopTen = topTenEdge && !ownRank ? Math.max(1, topTenEdge.stamps - visitedTotal + 1) : 0;

  if (!isProfileComplete()) {
    el.leaderboardSummary.textContent = "登録すると上位10名ランキングに同期されます。メールは表示されません。";
  } else if (rankingConfigured) {
    el.leaderboardSummary.textContent = ownRank > 1
      ? `あなたは${ownRank}位。あと${gapToAbove}湯で${ownRank - 1}位が見えます。`
      : ownRank === 1
        ? `あなたは1位。${visitedTotal}湯で首位キープ中です。`
        : gapToTopTen
          ? `上位10名まであと${gapToTopTen}湯。${visitedTotal}湯で追走中です。`
          : `${visitedTotal}湯で同期中`;
  } else {
    el.leaderboardSummary.textContent = "共有ランキングは未接続です。登録内容は端末内で保持しています。";
  }

  if (!sorted.length) {
    el.leaderboardList.innerHTML = `<div class="leaderboard-empty">最初の参加者を待っています。</div>`;
  } else {
    el.leaderboardList.innerHTML = sorted.map((entry, index) => `
      <article class="leaderboard-row ${entry.id === profile.id ? "is-you" : ""} ${index < 3 ? `is-top-${index + 1}` : ""}">
        <strong>${index + 1}</strong>
        <div>
          <span>${escapeHtml(entry.nickname)}</span>
          <em>${escapeHtml(entry.title)}</em>
        </div>
        <b>${entry.stamps}湯</b>
      </article>
    `).join("");
  }
  const latest = sorted.map((entry) => entry.updatedAt).filter(Boolean).sort().at(-1);
  el.leaderboardUpdatedAt.textContent = rankingConfigured
    ? `10秒ごとに自動更新${latest ? ` / ${formatDateTime(latest)}` : ""}`
    : "Cloudflare KV接続後に全ユーザーランキングが有効になります";
}

function renderShopPanel() {
  el.shopGrid.innerHTML = PRODUCT_RECOMMENDATIONS.map((item) => renderGearCard(item, "compact")).join("");
}

function renderGearPage() {
  const categories = ["すべて", ...uniqueStrings(GEAR_PRODUCTS.map((item) => item.category))];
  if (!categories.includes(selectedGearCategory)) selectedGearCategory = "すべて";
  const products = selectedGearCategory === "すべて"
    ? GEAR_PRODUCTS
    : GEAR_PRODUCTS.filter((item) => item.category === selectedGearCategory);

  el.gearCount.textContent = `${products.length}/${GEAR_PRODUCTS.length}件`;
  el.gearCategoryStrip.innerHTML = categories.map((category) => `
    <button class="pref-chip ${selectedGearCategory === category ? "pref-chip-active" : ""}" type="button" data-gear-category="${escapeAttr(category)}">
      ${escapeHtml(category)}
    </button>
  `).join("");
  el.gearGrid.innerHTML = products.map((item) => renderGearCard(item, "full")).join("");
}

function renderGuidePage() {
  const categories = ["すべて", ...uniqueStrings(SAUNA_ARTICLES.map((item) => item.category))];
  if (!categories.includes(selectedArticleCategory)) selectedArticleCategory = "すべて";
  const articles = selectedArticleCategory === "すべて"
    ? SAUNA_ARTICLES
    : SAUNA_ARTICLES.filter((item) => item.category === selectedArticleCategory);

  el.articleCount.textContent = `${articles.length}/${SAUNA_ARTICLES.length}記事`;
  el.articleCategoryStrip.innerHTML = categories.map((category) => `
    <button class="pref-chip ${selectedArticleCategory === category ? "pref-chip-active" : ""}" type="button" data-article-category="${escapeAttr(category)}">
      ${escapeHtml(category)}
    </button>
  `).join("");
  renderGuideGearRail(articles);
  el.articleList.innerHTML = articles.map(renderArticleCard).join("");
  el.guideReferences.innerHTML = SAUNA_REFERENCES.map((item) => `
    <a href="${escapeAttr(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.label)}</a>
  `).join("");
  renderGuideFaq();
}

function renderGuideFaq() {
  if (!el.guideFaq) return;
  el.guideFaq.innerHTML = GUIDE_FAQS.map((item, index) => `
    <article class="faq-card">
      <details ${index < 2 ? "open" : ""}>
        <summary>${escapeHtml(item.question)}</summary>
        <p>${escapeHtml(item.answer)}</p>
      </details>
    </article>
  `).join("");
}

function renderGuideGearRail(articles) {
  const products = getGuideGearProducts(articles).slice(0, 4);
  el.guideGearRail.innerHTML = `
    <div class="guide-gear-head">
      <div>
        <span>READ TO GEAR</span>
        <strong>読んだら、次のサウナを快適にする</strong>
      </div>
      <button class="mini-button" type="button" data-open-view="Gear">Gear 30件</button>
    </div>
    <div class="guide-gear-grid">
      ${products.map((item) => renderGuideGearCard(item)).join("")}
    </div>
  `;
}

function renderGearCard(item, mode) {
  const links = getGearLinks(item);
  return `
    <article class="shop-card ${mode === "full" ? "gear-card-full" : ""}">
      <span>${escapeHtml(item.category)}</span>
      <h4>${escapeHtml(item.title)}</h4>
      <p>${escapeHtml(item.reason)}</p>
      <em>${escapeHtml(item.proof)}</em>
      <div class="shop-card-actions">
        <a href="${escapeAttr(links.amazon)}" target="_blank" rel="nofollow sponsored noreferrer">Amazon</a>
        <a href="${escapeAttr(links.rakuten)}" target="_blank" rel="nofollow sponsored noreferrer">楽天 高評価順</a>
      </div>
    </article>
  `;
}

function renderArticleCard(article, index) {
  const products = getArticleGearProducts(article).slice(0, 2);
  return `
    <article class="article-card">
      <details ${index === 0 ? "open" : ""}>
        <summary>
          <span>${escapeHtml(article.category)}</span>
          <strong>${escapeHtml(article.title)}</strong>
        </summary>
        <div class="article-body">
          <p>${escapeHtml(article.lead)}</p>
          <ul>
            ${article.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
          </ul>
          <div class="article-action">
            <b>実践</b>
            <span>${escapeHtml(article.action)}</span>
          </div>
          <div class="article-caution">
            <b>注意</b>
            <span>${escapeHtml(article.caution)}</span>
          </div>
          <div class="article-gear">
            <div class="article-gear-head">
              <b>関連Gear</b>
              <button class="mini-button" type="button" data-open-view="Gear">一覧へ</button>
            </div>
            ${products.map((item) => renderArticleGearItem(item)).join("")}
          </div>
        </div>
      </details>
    </article>
  `;
}

function renderGuideGearCard(item) {
  const links = getGearLinks(item);
  return `
    <article>
      <span>${escapeHtml(item.category)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <div>
        <a href="${escapeAttr(links.amazon)}" target="_blank" rel="nofollow sponsored noreferrer">Amazon</a>
        <a href="${escapeAttr(links.rakuten)}" target="_blank" rel="nofollow sponsored noreferrer">楽天</a>
      </div>
    </article>
  `;
}

function renderArticleGearItem(item) {
  const links = getGearLinks(item);
  return `
    <div class="article-gear-item">
      <span>${escapeHtml(item.title)}</span>
      <div>
        <a href="${escapeAttr(links.amazon)}" target="_blank" rel="nofollow sponsored noreferrer">Amazon</a>
        <a href="${escapeAttr(links.rakuten)}" target="_blank" rel="nofollow sponsored noreferrer">楽天</a>
      </div>
    </div>
  `;
}

function renderCompactGearLink(item) {
  const links = getGearLinks(item);
  return `
    <article>
      <span>${escapeHtml(item.category)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <div>
        <a href="${escapeAttr(links.amazon)}" target="_blank" rel="nofollow sponsored noreferrer">Amazon</a>
        <a href="${escapeAttr(links.rakuten)}" target="_blank" rel="nofollow sponsored noreferrer">楽天</a>
      </div>
    </article>
  `;
}

function getFacilityGearProducts(facility) {
  const features = getFacilityFeatures(facility);
  const categories = new Set(["水分補給", "サウナハット", "マット"]);
  if (features.some((feature) => ["テントサウナ", "薪サウナ", "バレルサウナ"].includes(feature))) {
    categories.add("ウェア");
    categories.add("足元");
    categories.add("バッグ");
  }
  if (features.some((feature) => ["水着必須", "男女共用"].includes(feature))) categories.add("ウェア");
  if (features.some((feature) => ["セルフロウリュ", "アロマロウリュ", "熱波師あり"].includes(feature))) categories.add("香り");
  if (features.some((feature) => ["個室", "貸切可"].includes(feature))) categories.add("香り");
  if (features.includes("宿泊可")) categories.add("遠征");
  return uniqueProducts([...categories].flatMap(productsByCategory));
}

function getGuideGearProducts(articles) {
  if (selectedArticleCategory === "すべて") return PRODUCT_RECOMMENDATIONS;
  const categories = uniqueStrings(articles.map((article) => article.category));
  const picked = categories.flatMap((category) => getProductsForArticleCategory(category));
  return uniqueProducts(picked.length ? picked : PRODUCT_RECOMMENDATIONS);
}

function getArticleGearProducts(article) {
  const byCategory = getProductsForArticleCategory(article.category);
  if (byCategory.length) return byCategory;
  const text = normalizeText([article.title, article.lead, article.action].join(" "));
  if (/水分|水風呂|汗|夏|遠征|移動/.test(text)) return productsByCategory("水分補給");
  if (/ハット|髪|頭|熱/.test(text)) return productsByCategory("サウナハット");
  if (/マット|座面|衛生/.test(text)) return productsByCategory("マット");
  if (/タオル|拭く|洗う/.test(text)) return productsByCategory("タオル");
  return PRODUCT_RECOMMENDATIONS;
}

function getProductsForArticleCategory(category) {
  const map = {
    基本: ["サウナハット", "マット", "タオル", "水分補給"],
    安全: ["水分補給", "視界", "計測"],
    水風呂: ["水分補給", "タオル"],
    休憩: ["サウナハット", "タオル", "水分補給"],
    水分: ["水分補給", "ボトル"],
    マナー: ["タオル", "マット", "バッグ"],
    ロウリュ: ["香り", "サウナハット", "水分補給"],
    道具: ["サウナハット", "マット", "タオル", "バッグ", "視界"],
    施設選び: ["バッグ", "タオル", "水分補給", "視界"],
    種類: ["サウナハット", "マット", "水分補給"],
    体調: ["水分補給", "計測"],
    季節: ["水分補給", "ウェア"],
    女性: ["ケア", "タオル", "バッグ"],
    記録: ["計測", "遠征"],
    用語: ["水分補給", "サウナハット"],
    混雑: ["耳栓", "バッグ"],
    ソロ: ["バッグ", "リラックス"],
    遠征: ["遠征", "バッグ", "水分補給"],
    サ飯: ["水分補給"],
    買い物: ["サウナハット", "マット", "タオル", "水分補給"],
    チェック: ["水分補給", "タオル", "マット"],
    上達: ["計測", "水分補給"],
  };
  const productCategories = map[category] || [];
  const firstPicks = productCategories.map((item) => productsByCategory(item)[0]).filter(Boolean);
  return uniqueProducts([...firstPicks, ...productCategories.flatMap(productsByCategory)]);
}

function productsByCategory(category) {
  if (category === "耳栓") {
    return GEAR_PRODUCTS.filter((item) => /耳栓/.test(item.title));
  }
  return GEAR_PRODUCTS.filter((item) => item.category === category);
}

function uniqueProducts(products) {
  const seen = new Set();
  return products.filter((item) => {
    if (!item || seen.has(item.title)) return false;
    seen.add(item.title);
    return true;
  });
}

function renderPrefSelect() {
  el.prefSelect.innerHTML = PREFECTURES.map((pref) => `<option value="${escapeAttr(pref.name)}">${escapeHtml(pref.name)}</option>`).join("");
}

function renderFeatureControls() {
  renderFeatureFilterGrid();
  el.addFeatureGrid.innerHTML = FEATURE_GROUPS.map((group) => `
    <div class="feature-group" aria-label="${escapeAttr(group.label)}">
      ${group.options.map((feature) => `
        <label class="feature-option">
          <input type="checkbox" name="features" value="${escapeAttr(feature)}" />
          <span>${escapeHtml(feature)}</span>
        </label>
      `).join("")}
    </div>
  `).join("");
}

function renderFeatureFilterGrid() {
  const selectedCount = selectedFeatureFilters.size;
  el.featureFilterCount.textContent = selectedCount ? `${selectedCount}件選択中` : "指定なし";
  el.featureFilterGrid.innerHTML = FEATURE_OPTIONS.map((feature) => {
    const active = selectedFeatureFilters.has(feature);
    return `<button class="feature-chip ${active ? "is-active" : ""}" type="button" data-feature-filter="${escapeAttr(feature)}" aria-pressed="${active}">${escapeHtml(feature)}</button>`;
  }).join("");
}

function renderSearchClearButton() {
  el.searchClearButton.hidden = !el.searchInput.value;
}

function hydrateSearchFromUrl() {
  if (!location.protocol.startsWith("http")) return;
  const query = new URLSearchParams(location.search).get("q");
  if (!query) return;
  el.searchInput.value = query.slice(0, 80);
  setSearchTerm(el.searchInput.value);
  moveToSearchPrefecture(el.searchInput.value);
}

function renderStamp(facility, unlocked) {
  const style = STAMP_STYLES[facility.trait] || STAMP_STYLES.custom;
  const className = unlocked ? "stamp-art" : "stamp-art locked";
  const inlineStyle = `--stamp-color:${style.color};--stamp-bg:${style.bg};`;
  return `
    <div class="${className}" style="${inlineStyle}" aria-label="${escapeAttr(facility.name)}のスタンプ">
      <span class="stamp-kanji">${escapeHtml(style.kanji)}</span>
    </div>
  `;
}

function stampFacility(facility) {
  const status = getFacilityStatus(facility);
  if (state.visited[facility.id] || status) {
    if (status) showToast(`${facility.name} は${status.badge}のため押印できません`);
    return;
  }
  const beforeVisitedTotal = Object.keys(state.visited).length;
  const beforeTitle = getCurrentTitle(beforeVisitedTotal);
  const wasPrefMastered = isPrefectureMastered(facility.prefecture);
  const aroma = AROMAS[Math.floor(Math.random() * AROMAS.length)];
  state.visited[facility.id] = {
    at: new Date().toISOString(),
    aroma,
  };
  delete state.wishlist[facility.id];
  saveState();
  queueRankingSync();
  if (settings.vibration && "vibrate" in navigator) navigator.vibrate([20, 30, 20]);
  renderAll();
  const afterVisitedTotal = beforeVisitedTotal + 1;
  const afterTitle = getCurrentTitle(afterVisitedTotal);
  const prefMastered = !wasPrefMastered && isPrefectureMastered(facility.prefecture);
  showToast(`${facility.name} を押印。今日の余韻は${aroma}`);
  if (prefMastered) {
    window.setTimeout(() => showAchievement({
      eyebrow: "PREFECTURE MASTER",
      title: `${facility.prefecture}のマスターサウナー認定`,
      body: "開業予定・要確認を除くサ印をすべて集めました。",
    }), 220);
  } else if (afterTitle.count > beforeTitle.count) {
    window.setTimeout(() => showAchievement({
      eyebrow: "NEW TITLE",
      title: `${afterTitle.title} 認定`,
      body: `${afterVisitedTotal}湯のサ印を集めました。次の一湯がまた近づいています。`,
    }), 220);
  }
}

function unstampFacility(facility) {
  if (!state.visited[facility.id]) return;
  delete state.visited[facility.id];
  saveState();
  queueRankingSync();
  renderAll();
  showToast(`${facility.name} の押印を取り消しました`);
}

function toggleWishlist(facility) {
  if (state.wishlist[facility.id]) {
    delete state.wishlist[facility.id];
    showToast(`${facility.name} を候補から外しました`);
  } else {
    state.wishlist[facility.id] = { at: new Date().toISOString() };
    showToast(`${facility.name} を行きたい候補に入れました`);
  }
  saveState();
  renderAll();
}

function saveFacilityMemo(facility, button) {
  const panel = button.closest(".memo-panel");
  const input = panel?.querySelector(`[data-note-input="${cssEscape(facility.id)}"]`);
  const text = input?.value.trim() || "";
  if (!text) {
    deleteFacilityMemo(facility);
    return;
  }
  state.facilityMemos[facility.id] = {
    text,
    updatedAt: new Date().toISOString(),
  };
  saveState();
  renderAll();
  showToast(`${facility.name} のメモを保存しました`);
}

function deleteFacilityMemo(facility) {
  if (!state.facilityMemos[facility.id]) return;
  delete state.facilityMemos[facility.id];
  saveState();
  renderAll();
  showToast(`${facility.name} のメモを取り消しました`);
}

function shareFacilityMemo(facility) {
  const memo = getFacilityMemo(facility.id);
  if (!memo) {
    showToast("共有するメモがありません");
    return;
  }
  const text = [
    `サ印帳: ${facility.name}`,
    [facility.prefecture, facility.city].filter(Boolean).join(" / "),
    memo.text,
    "#サ印帳 #サウナ",
  ].filter(Boolean).join("\n");
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function shareFacility(facility) {
  const detail = [facility.prefecture, facility.city].filter(Boolean).join(" / ");
  const tags = normalizeFeatures(facility.tags || []).slice(0, 4);
  const text = [
    `サ印帳でおすすめ: ${facility.name}`,
    detail,
    tags.length ? `特徴: ${tags.join("・")}` : "",
    "#サ印帳 #サウナ",
  ].filter(Boolean).join("\n");
  const params = new URLSearchParams({ text });
  params.set("url", facility.sourceUrl || "https://saincho-sauna-stamp-rally.pages.dev/");
  window.open(`https://twitter.com/intent/tweet?${params.toString()}`, "_blank", "noopener,noreferrer");
}

async function shareApp() {
  const shareData = {
    title: "サ印帳 | サウナスタンプラリー",
    text: APP_SHARE_TEXT,
    url: getCurrentShareUrl(),
  };
  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error?.name === "AbortError") return;
    }
  }
  const params = new URLSearchParams({ text: shareData.text, url: shareData.url });
  window.open(`https://twitter.com/intent/tweet?${params.toString()}`, "_blank", "noopener,noreferrer");
}

async function copyAppUrl() {
  const url = getCurrentShareUrl();
  try {
    await navigator.clipboard.writeText(url);
    showToast("URLをコピーしました");
  } catch {
    window.prompt("URLをコピーしてください", url);
  }
}

function shareToLine() {
  const url = new URL("https://social-plugins.line.me/lineit/share");
  url.searchParams.set("url", getCurrentShareUrl());
  window.open(url.href, "_blank", "noopener,noreferrer");
}

function getCurrentShareUrl() {
  if (location.protocol.startsWith("http")) return location.href;
  return APP_URL;
}

async function loadSharedFacilities() {
  try {
    const response = await fetch(SHARED_FACILITIES_ENDPOINT, { headers: { accept: "application/json" } });
    if (!response.ok) return;
    const payload = await response.json();
    sharedFacilitiesConfigured = payload.configured !== false;
    sharedFacilities = normalizeSharedFacilities(payload.facilities || []);
    renderAll();
  } catch {
    sharedFacilitiesConfigured = false;
  } finally {
    renderSharedHint();
  }
}

async function publishSharedFacility(facility) {
  const response = await fetch(SHARED_FACILITIES_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      name: facility.name,
      prefecture: facility.prefecture,
      city: facility.city,
      features: facility.features || [],
    }),
  });
  if (!response.ok) throw new Error("shared-save-failed");
  const payload = await response.json();
  return { facility: normalizeSharedFacility(payload.facility), duplicate: Boolean(payload.duplicate) };
}

function mergeSharedFacility(facility) {
  if (!facility) return;
  const key = facilityDuplicateKey(facility);
  sharedFacilities = [
    ...sharedFacilities.filter((item) => facilityDuplicateKey(item) !== key),
    facility,
  ].sort((a, b) => a.prefecture.localeCompare(b.prefecture, "ja") || a.name.localeCompare(b.name, "ja"));
}

function normalizeSharedFacilities(values) {
  if (!Array.isArray(values)) return [];
  const normalized = values.map(normalizeSharedFacility).filter(Boolean);
  return dedupeFacilities(normalized);
}

function normalizeSharedFacility(value) {
  if (!value || typeof value !== "object") return null;
  const name = String(value.name || "").trim().slice(0, 64);
  const prefecture = String(value.prefecture || "").trim();
  if (!name || !PREFECTURES.some((pref) => pref.name === prefecture)) return null;
  const features = normalizeFeatures(value.features || value.tags || []);
  return {
    id: typeof value.id === "string" ? value.id : `shared-${Date.now().toString(36)}`,
    name,
    prefecture,
    city: String(value.city || "").trim().slice(0, 40),
    trait: value.trait || inferTraitFromFeatures(features),
    tags: ["みんなの追加", ...features],
    features,
    source: "みんなの追加",
    sourceUrl: "",
    shared: true,
  };
}

function renderSharedHint() {
  if (!el.sharedAddHint) return;
  el.sharedAddHint.textContent = sharedFacilitiesConfigured
    ? "追加した施設は、公開候補として他のユーザーにも表示されます。"
    : "共有ストレージ未接続時は、この端末の候補として保存します。";
}

function getFilteredFacilities() {
  return getFacilities().filter((facility) => {
    const selected = selectedPrefecture === "全国" || facility.prefecture === selectedPrefecture;
    const memo = getFacilityMemo(facility.id);
    const features = getFacilityFeatures(facility);
    const haystack = buildSearchBlob([
      facility.name,
      facility.prefecture,
      facility.city,
      facility.source,
      facility.note,
      memo?.text,
      ...features,
      ...features.flatMap((feature) => FEATURE_ALIASES[feature] || []),
      ...facility.tags,
    ]);
    const matchesSearch = !searchNeedles.length || searchNeedles.every((needle) => haystack.includes(needle));
    const matchesFeatures = [...selectedFeatureFilters].every((feature) => features.includes(feature));
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "unvisited" && !state.visited[facility.id]) ||
      (activeFilter === "wishlist" && state.wishlist[facility.id]);
    return selected && matchesSearch && matchesFeatures && matchesFilter;
  });
}

function getFacilities() {
  const custom = state.customFacilities.map((facility) => ({
    ...facility,
    features: normalizeFeatures(facility.features || facility.tags || []),
    trait: facility.trait || inferTraitFromFeatures(facility.features || facility.tags || []),
    tags: facility.tags?.length ? facility.tags : ["マイサウナ"],
  }));
  return dedupeFacilities([...SEED_FACILITIES, ...sharedFacilities, ...custom]);
}

function getFacilityMeta(facility) {
  return [facility.prefecture, facility.city, getFacilitySourceLabel(facility)].filter(Boolean).join(" / ");
}

function getFacilitySourceLabel(facility) {
  const source = String(facility.source || "").trim();
  const url = String(facility.sourceUrl || "");
  if (/指定リスト|地域照合|営業要確認/.test(source)) {
    if (/sauna-ikitai\.com/.test(url)) return "サウナイキタイ";
    if (/saunatime\.jp/.test(url)) return "SaunaTime";
    if (/supersento\.com/.test(url)) return "スーパー銭湯全国検索";
    if (/sauna-map\.com/.test(url)) return "サウナマップ";
    if (/yoriyu\.com/.test(url)) return "より湯";
    return url ? "参照元" : "";
  }
  return source || (url ? "参照元" : "");
}

function getDisplayTags(facility) {
  const features = getFacilityFeatures(facility);
  const sourceTags = (facility.tags || []).filter((tag) => !NON_DISPLAY_TAGS.has(tag) && !features.includes(tag) && !features.includes(normalizeFeature(tag)));
  const tags = uniqueStrings([...features, ...sourceTags]).slice(0, 8);
  return tags;
}

function getFacilityFeatures(facility) {
  const explicit = normalizeFeatures(facility.features || []);
  if ((facility.tags || []).includes("ユーザー指定追加") || (facility.tags || []).includes("みんなの追加")) {
    return normalizeFeatures([...explicit, ...(facility.tags || [])]);
  }

  const inferred = new Set([...explicit, ...(TRAIT_FEATURES[facility.trait] || [])]);
  const text = normalizeText([
    facility.name,
    facility.city,
    facility.note,
    ...(facility.tags || []),
  ].join(" "));

  if (/(天然温泉|温泉|源泉)/.test(text)) inferred.add("温泉付き");
  if (/(個室|完全個室|プライベート|private|貸切|貸し切り)/.test(text)) inferred.add("個室");
  if (/(貸切|貸し切り|一棟貸|予約制)/.test(text)) inferred.add("貸切可");
  if (/(ドライサウナ|高温サウナ|昭和ストロング|遠赤外線)/.test(text)) inferred.add("ドライサウナ");
  if (/遠赤外線/.test(text)) inferred.add("遠赤外線サウナ");
  if (/(薪サウナ|薪|まきサウナ|wood)/.test(text)) inferred.add("薪サウナ");
  if (/(スチーム|ミスト|蒸し|薬草|漢方)/.test(text)) inferred.add("スチーム(ミスト)サウナ");
  if (/塩サウナ/.test(text)) inferred.add("塩サウナ");
  if (/テントサウナ/.test(text)) inferred.add("テントサウナ");
  if (/バレルサウナ/.test(text)) inferred.add("バレルサウナ");
  if (/(熱波|アウフグース)/.test(text)) inferred.add("熱波師あり");
  if (/セルフロウリュ/.test(text)) inferred.add("セルフロウリュ");
  if (/アロマロウリュ/.test(text)) inferred.add("アロマロウリュ");
  if (/(水風呂|天然水|冷水)/.test(text)) inferred.add("水風呂あり");
  if (/(水着必須|水着着用|男女共用)/.test(text)) inferred.add("水着必須");
  if (/男女共用/.test(text)) inferred.add("男女共用");
  if (/(宿泊|カプセル|ホテル|旅館)/.test(text)) inferred.add("宿泊可");
  if (/(タオルレンタルあり|タオルあり|手ぶら)/.test(text)) inferred.add("タオルレンタルあり");
  if (/(タオルレンタルなし|タオルなし|要持参)/.test(text)) inferred.add("タオルレンタルなし");
  if (/(外気浴なし|外気なし)/.test(text)) inferred.add("外気なし");
  if (!inferred.has("外気なし") && /(外気浴|外気あり|露天|テラス|川|森|海|湖)/.test(text)) inferred.add("外気あり");
  if (/(サ飯なし|食事なし|レストランなし)/.test(text)) inferred.add("サ飯なし");
  if (!inferred.has("サ飯なし") && /(サ飯|食堂|レストラン|カフェ|蕎麦|ごはん|食事)/.test(text)) inferred.add("サ飯あり");
  if (/(飲み放題|ドリンク飲み放題)/.test(text)) inferred.add("サウナドリンク飲み放題");
  if (/サウナハット禁止/.test(text)) inferred.add("サウナハット禁止");

  return normalizeFeatures([...inferred]);
}

function normalizeFeatures(values) {
  if (!Array.isArray(values)) return [];
  const selected = [];
  values.forEach((value) => {
    const feature = normalizeFeature(value);
    if (!feature) return;
    const conflict = FEATURE_CONFLICTS.get(feature);
    if (conflict) {
      const conflictIndex = selected.indexOf(conflict);
      if (conflictIndex >= 0) selected.splice(conflictIndex, 1);
    }
    if (!selected.includes(feature)) selected.push(feature);
  });
  return FEATURE_OPTIONS.filter((feature) => selected.includes(feature));
}

function normalizeFeature(value) {
  return FEATURE_NORMALIZE_MAP.get(normalizeText(value)) || "";
}

function inferTraitFromFeatures(values) {
  const features = normalizeFeatures(values);
  if (features.some((feature) => ["薪サウナ", "テントサウナ", "バレルサウナ"].includes(feature))) return "wood";
  if (features.includes("温泉付き")) return "onsen";
  if (features.includes("水風呂あり")) return "water";
  if (features.some((feature) => ["ドライサウナ", "遠赤外線サウナ", "熱波師あり"].includes(feature))) return "urban";
  return "custom";
}

function uniqueStrings(values) {
  return [...new Set(values.filter(Boolean))];
}

function moveToSearchPrefecture(value) {
  const term = normalizeText(value);
  const needles = createSearchNeedles(value);
  if (!term) return false;

  const prefMatch = PREFECTURES.find((pref) => {
    const full = buildSearchBlob([pref.name]);
    const short = buildSearchBlob([shortPrefName(pref.name)]);
    return full === term || short === term || (term.length >= 2 && (full.includes(term) || short.includes(term)));
  });
  if (prefMatch) return setSelectedPrefecture(prefMatch.name);

  if (term.length < 2) return false;
  const facilities = getFacilities();
  const nameMatch = facilities.find((facility) => matchesSearchNeedles([facility.name], needles));
  if (nameMatch) return setSelectedPrefecture(nameMatch.prefecture);

  const matchingFacilities = facilities.filter((facility) => {
    const memo = getFacilityMemo(facility.id);
    const features = getFacilityFeatures(facility);
    const haystack = buildSearchBlob([
      facility.name,
      facility.prefecture,
      facility.city,
      facility.source,
      facility.note,
      memo?.text,
      ...features,
      ...features.flatMap((feature) => FEATURE_ALIASES[feature] || []),
      ...facility.tags,
    ]);
    return needles.every((needle) => haystack.includes(needle));
  });
  const matchedPrefectures = [...new Set(matchingFacilities.map((facility) => facility.prefecture))];
  if (matchedPrefectures.length === 1) return setSelectedPrefecture(matchedPrefectures[0]);
  return false;
}

function setSelectedPrefecture(prefecture) {
  if (!prefecture || selectedPrefecture === prefecture) return false;
  selectedPrefecture = prefecture;
  visibleLimit = 36;
  return true;
}

function prefillAddFormFromSearch() {
  const name = el.searchInput.value.trim();
  setView("Add");
  if (name) el.addForm.elements.name.value = name;
  if (selectedPrefecture !== "全国") el.addForm.elements.prefecture.value = selectedPrefecture;
  window.setTimeout(() => el.addForm.elements.name.focus(), 80);
}

function findDuplicateFacility(candidate) {
  const candidateName = normalizeFacilityName(candidate.name);
  return getFacilities().find((facility) => (
    facility.prefecture === candidate.prefecture &&
    normalizeFacilityName(facility.name) === candidateName
  ));
}

function countVisitedByPrefecture() {
  return getFacilities().reduce((acc, facility) => {
    if (!state.visited[facility.id]) return acc;
    acc[facility.prefecture] = (acc[facility.prefecture] || 0) + 1;
    return acc;
  }, {});
}

function countFacilitiesByPrefecture() {
  return getFacilities().reduce((acc, facility) => {
    acc[facility.prefecture] = (acc[facility.prefecture] || 0) + 1;
    return acc;
  }, {});
}

function countEligibleFacilities() {
  return getFacilities().filter((facility) => !getFacilityStatus(facility));
}

function countEligibleFacilitiesByPrefecture() {
  return countEligibleFacilities().reduce((acc, facility) => {
    acc[facility.prefecture] = (acc[facility.prefecture] || 0) + 1;
    return acc;
  }, {});
}

function getPrefectureMasterProgress(prefecture) {
  const eligible = countEligibleFacilities().filter((facility) => facility.prefecture === prefecture);
  const visited = eligible.filter((facility) => state.visited[facility.id]).length;
  return {
    eligible: eligible.length,
    visited,
    remaining: Math.max(0, eligible.length - visited),
    mastered: eligible.length > 0 && visited >= eligible.length,
  };
}

function getNearestPrefectureGoal() {
  const scopedPrefecture = selectedPrefecture !== "全国" ? selectedPrefecture : "";
  const progresses = PREFECTURES.map((pref) => ({
    prefecture: pref.name,
    ...getPrefectureMasterProgress(pref.name),
  })).filter((item) => item.eligible > 0 && !item.mastered);
  const current = scopedPrefecture
    ? progresses.find((item) => item.prefecture === scopedPrefecture)
    : null;
  const target = current || progresses
    .filter((item) => item.visited > 0)
    .sort((a, b) => a.remaining - b.remaining || b.visited - a.visited)[0] || progresses[0];
  if (!target) return { label: "県マスター", value: "完走", hint: "全県認定" };
  if (target.visited === 0 && !current) {
    return { label: "県マスター", value: "あと1湯", hint: "最初の県へ" };
  }
  return {
    label: shortPrefName(target.prefecture),
    value: `あと${target.remaining}湯`,
    hint: "県マスター",
  };
}

function isPrefectureMastered(prefecture) {
  return getPrefectureMasterProgress(prefecture).mastered;
}

function getMasteredPrefectures() {
  return PREFECTURES.filter((pref) => isPrefectureMastered(pref.name));
}

function getCurrentTitle(count) {
  return TITLE_MILESTONES.reduce((current, milestone) => (
    count >= milestone.count ? milestone : current
  ), TITLE_MILESTONES[0]);
}

function getNextTitle(count) {
  return TITLE_MILESTONES.find((milestone) => milestone.count > count) || null;
}

function startRankingPolling() {
  clearInterval(rankingPollTimer);
  rankingPollTimer = window.setInterval(loadRanking, RANKING_REFRESH_MS);
}

async function loadRanking() {
  try {
    const response = await fetch(RANKING_ENDPOINT, { headers: { accept: "application/json" } });
    if (!response.ok) throw new Error("ranking-load-failed");
    const payload = await response.json();
    rankingConfigured = payload.configured !== false;
    leaderboardEntries = normalizeRankingEntries(payload.entries || []);
  } catch {
    rankingConfigured = false;
    leaderboardEntries = [];
  } finally {
    renderLeaderboard();
  }
}

function queueRankingSync() {
  if (!isProfileComplete()) return;
  clearTimeout(rankingSyncTimer);
  rankingSyncTimer = window.setTimeout(() => syncRanking({ announce: false }), 700);
}

async function syncRanking({ announce } = { announce: false }) {
  if (!isProfileComplete()) {
    if (announce) showToast("ランキング参加登録をしてください");
    return;
  }
  if (rankingConfigured === false) {
    renderLeaderboard();
    if (announce) showToast("共有ランキングは未接続です");
    return;
  }
  const stamps = Object.keys(state.visited).length;
  const title = getCurrentTitle(stamps).title;
  try {
    const response = await fetch(RANKING_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        participantId: profile.id,
        nickname: profile.nickname,
        email: profile.email,
        stamps,
        title,
      }),
    });
    if (!response.ok) throw new Error("ranking-save-failed");
    const payload = await response.json();
    rankingConfigured = true;
    leaderboardEntries = normalizeRankingEntries(payload.entries || []);
    renderLeaderboard();
    if (announce) showToast("ランキングを更新しました");
  } catch {
    rankingConfigured = false;
    renderLeaderboard();
    if (announce) showToast("共有ランキングは未接続です");
  }
}

function normalizeRankingEntries(values) {
  if (!Array.isArray(values)) return [];
  return values.map((entry) => ({
    id: typeof entry.id === "string" ? entry.id : "",
    nickname: typeof entry.nickname === "string" ? entry.nickname.slice(0, 16) : "匿名サウナー",
    stamps: Number.isFinite(Number(entry.stamps)) ? Math.max(0, Math.floor(Number(entry.stamps))) : 0,
    title: typeof entry.title === "string" ? entry.title.slice(0, 20) : getCurrentTitle(0).title,
    updatedAt: typeof entry.updatedAt === "string" ? entry.updatedAt : "",
  })).filter((entry) => entry.id && entry.nickname)
    .sort((a, b) => b.stamps - a.stamps || a.nickname.localeCompare(b.nickname, "ja"))
    .slice(0, 50);
}

function mergeRankingEntries(entries, localEntry) {
  const merged = new Map();
  entries.forEach((entry) => merged.set(entry.id, entry));
  if (localEntry) merged.set(localEntry.id, localEntry);
  return [...merged.values()];
}

function exportState() {
  const payload = {
    exportedAt: new Date().toISOString(),
    app: "saincho",
    version: 1,
    state,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `saincho-${new Date().toISOString().slice(0, 10)}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

async function handleInstallClick() {
  if (isStandaloneMode()) {
    showToast("すでにホーム画面表示です");
    return;
  }
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    if (choice.outcome === "accepted") {
      localStorage.setItem(INSTALL_DISMISSED_KEY, "installed");
      renderInstallPrompt();
      return;
    }
    renderInstallPrompt();
    return;
  }
  showInstallHelp();
}

function renderInstallPrompt() {
  if (!el.installCard) return;
  const dismissed = localStorage.getItem(INSTALL_DISMISSED_KEY);
  const installable = Boolean(deferredInstallPrompt);
  const mobileLike = window.matchMedia("(max-width: 720px), (pointer: coarse)").matches;
  if (isStandaloneMode() || dismissed || (!installable && !mobileLike)) {
    el.installCard.hidden = true;
    return;
  }
  el.installHint.textContent = installable ? "次から1タップで開けます" : getInstallHint();
  el.installButton.textContent = installable ? "追加" : "手順";
  el.installCard.hidden = false;
}

function showInstallHelp() {
  if (el.settingsDialog.open) closeSettingsDialog();
  if (typeof el.installHelpDialog.showModal === "function") {
    el.installHelpDialog.showModal();
    return;
  }
  alert("共有ボタンから「ホーム画面に追加」を選び、追加を押してください。");
}

function getInstallHint() {
  if (isAppleTouchDevice()) return "共有からホーム画面に追加";
  return "ブラウザのメニューから追加";
}

function isStandaloneMode() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function isAppleTouchDevice() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

async function importState(event) {
  const [file] = event.target.files;
  if (!file) return;
  try {
    const payload = JSON.parse(await file.text());
    const imported = payload.state || payload;
    state = normalizeState(imported);
    saveState();
    renderAll();
    showToast("記録を読み込みました");
  } catch {
    showToast("読み込みに失敗しました");
  } finally {
    event.target.value = "";
  }
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
    return normalizeState(JSON.parse(stored));
  } catch {
    return createState();
  }
}

function normalizeState(value) {
  const fallback = createState();
  if (!value || typeof value !== "object") return fallback;
  return {
    visited: isPlainObject(value.visited) ? value.visited : fallback.visited,
    wishlist: isPlainObject(value.wishlist) ? value.wishlist : fallback.wishlist,
    facilityMemos: isPlainObject(value.facilityMemos) ? normalizeFacilityMemos(value.facilityMemos) : fallback.facilityMemos,
    customFacilities: Array.isArray(value.customFacilities) ? value.customFacilities.filter(isValidCustomFacility) : [],
  };
}

function createState() {
  return {
    visited: {},
    wishlist: {},
    facilityMemos: {},
    customFacilities: [],
  };
}

function normalizeFacilityMemos(value) {
  return Object.fromEntries(Object.entries(value).filter(([, memo]) => (
    memo &&
    typeof memo === "object" &&
    typeof memo.text === "string" &&
    memo.text.trim()
  )).map(([id, memo]) => [id, {
    text: memo.text.trim().slice(0, 240),
    updatedAt: typeof memo.updatedAt === "string" ? memo.updatedAt : new Date().toISOString(),
  }]));
}

function isValidCustomFacility(value) {
  return value && typeof value === "object" && typeof value.id === "string" && typeof value.name === "string" && typeof value.prefecture === "string";
}

function isPlainObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadProfile() {
  try {
    const value = JSON.parse(localStorage.getItem(PROFILE_KEY));
    if (!value || typeof value !== "object") return createProfile();
    return {
      id: typeof value.id === "string" && value.id ? value.id : createClientId(),
      nickname: typeof value.nickname === "string" ? value.nickname.trim().slice(0, 16) : "",
      email: typeof value.email === "string" ? value.email.trim().slice(0, 80) : "",
      registeredAt: typeof value.registeredAt === "string" ? value.registeredAt : "",
    };
  } catch {
    return createProfile();
  }
}

function createProfile() {
  return {
    id: createClientId(),
    nickname: "",
    email: "",
    registeredAt: "",
  };
}

function saveProfile() {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

function isProfileComplete() {
  return Boolean(profile.id && profile.nickname && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email));
}

function createClientId() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return `client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function loadSettings() {
  try {
    const stored = localStorage.getItem(SETTINGS_KEY) || localStorage.getItem(LEGACY_SETTINGS_KEY);
    const value = JSON.parse(stored);
    return { vibration: value?.vibration !== false };
  } catch {
    return { vibration: true };
  }
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function showToast(message) {
  clearTimeout(toastTimer);
  el.toast.textContent = message;
  el.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    el.toast.classList.remove("is-visible");
  }, 2600);
}

function showAchievement({ eyebrow, title, body }) {
  el.achievementEyebrow.textContent = eyebrow;
  el.achievementTitle.textContent = title;
  el.achievementBody.textContent = body;
  if (typeof el.achievementDialog.showModal === "function") {
    el.achievementDialog.showModal();
    return;
  }
  showToast(title);
}

function shortPrefName(name) {
  if (name === "北海道") return name;
  return name.replace(/[都道府県]$/, "");
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function formatDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("ja-JP", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function getViewFromLocation() {
  const path = location.pathname.replace(/\/+$/, "/") || "/";
  const found = Object.entries(VIEW_META).find(([, meta]) => meta.path === path);
  return found?.[0] || "Explore";
}

function pushViewUrl(view) {
  updateDocumentMetaForView(view);
  if (!location.protocol.startsWith("http")) return;
  const path = VIEW_META[view]?.path || "/";
  if (location.pathname === path) return;
  history.pushState({ view }, "", path);
}

function updateDocumentMetaForView(view) {
  const meta = VIEW_META[view] || VIEW_META.Explore;
  const url = new URL(meta.path, APP_URL).href;
  document.title = meta.title;
  updateMeta("name", "description", meta.description);
  updateMeta("property", "og:title", meta.title);
  updateMeta("property", "og:description", meta.description);
  updateMeta("property", "og:url", url);
  updateMeta("name", "twitter:title", meta.title.replace(" | サ印帳", ""));
  updateMeta("name", "twitter:description", meta.description);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = url;
}

function updateMeta(attribute, key, content) {
  const node = document.querySelector(`meta[${attribute}="${cssEscape(key)}"]`);
  if (node) node.setAttribute("content", content);
}

function getGearLinks(item) {
  return {
    amazon: item.amazonUrl ? buildAmazonUrl(item.amazonUrl) : buildAmazonSearchUrl(item.amazonQuery || item.title),
    rakuten: item.rakutenUrl || buildRakutenAffiliateUrl(item.rakutenQuery || item.title),
  };
}

function buildAmazonUrl(value) {
  const url = new URL(value);
  if (AMAZON_ASSOCIATE_TAG) url.searchParams.set("tag", AMAZON_ASSOCIATE_TAG);
  return url.href;
}

function buildAmazonSearchUrl(query) {
  const url = new URL("https://www.amazon.co.jp/s");
  url.searchParams.set("k", query);
  url.searchParams.set("s", "review-rank");
  if (AMAZON_ASSOCIATE_TAG) url.searchParams.set("tag", AMAZON_ASSOCIATE_TAG);
  return url.href;
}

function buildRakutenAffiliateUrl(query) {
  const target = new URL(`https://search.rakuten.co.jp/search/mall/${encodeURIComponent(query)}/`);
  target.searchParams.set("s", "6");
  const url = new URL(RAKUTEN_AFFILIATE_URL);
  url.searchParams.set("pc", target.href);
  url.searchParams.set("link_type", "text");
  url.searchParams.set("ut", RAKUTEN_AFFILIATE_UT);
  return url.href;
}

function getFacilityMemo(id) {
  const memo = state.facilityMemos[id];
  if (!memo?.text) return null;
  return memo;
}

function getFacilityStatus(facility) {
  return FACILITY_STATUS[facility.status] || null;
}

function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function setSearchTerm(value) {
  searchTerm = normalizeText(value);
  searchNeedles = createSearchNeedles(value);
}

function createSearchNeedles(value) {
  const base = normalizeText(value);
  if (!base) return [];
  return base.split(" ")
    .flatMap(expandSearchTerm)
    .map(normalizeSearchToken)
    .filter((term) => term.length >= 1)
    .filter((term, index, all) => all.indexOf(term) === index);
}

function matchesSearchNeedles(parts, needles) {
  if (!needles.length) return true;
  const blob = buildSearchBlob(parts);
  return needles.every((needle) => blob.includes(needle));
}

function buildSearchBlob(parts) {
  const source = parts.filter(Boolean).join(" ");
  const terms = [
    source,
    toHiragana(source),
    toKatakana(source),
    normalizeCompact(source),
    ...source.split(/\s+/).flatMap(expandSearchTerm),
  ];
  return terms.map(normalizeSearchToken).join(" ");
}

function expandSearchTerm(term) {
  const normalized = normalizeText(term);
  const compact = normalizeCompact(normalized);
  const variants = [normalized, toHiragana(normalized), toKatakana(normalized), compact];
  SEARCH_SYNONYM_GROUPS.forEach((group) => {
    const normalizedGroup = group.map(normalizeSearchToken);
    if (normalizedGroup.some((item) => compact.includes(item) || normalizeSearchToken(normalized).includes(item))) {
      variants.push(...group);
    }
  });
  return variants;
}

function normalizeSearchToken(value) {
  return normalizeCompact(toKatakana(value));
}

function normalizeCompact(value) {
  return normalizeText(value).replace(/[ \u3000・･＆&.．\-ー－〜～~（）()【】[\]「」『』：:]/g, "");
}

function toKatakana(value) {
  return String(value).replace(/[\u3041-\u3096]/g, (char) => String.fromCharCode(char.charCodeAt(0) + 0x60));
}

function toHiragana(value) {
  return String(value).replace(/[\u30a1-\u30f6]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60));
}

function normalizeFacilityName(value) {
  return normalizeText(value)
    .replace(/[ \u3000・･＆&.．\-ー－〜～~（）()【】\[\]「」『』：:]/g, "")
    .replace(/天然温泉かけ流し/g, "")
    .replace(/プレミア/g, "");
}

function dedupeFacilities(facilities) {
  const seen = new Set();
  return facilities.filter((facility) => {
    const key = facilityDuplicateKey(facility);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function facilityDuplicateKey(facility) {
  return `${facility.prefecture}:${normalizeFacilityName(facility.name)}`;
}

function cssEscape(value) {
  return window.CSS?.escape ? CSS.escape(value) : String(value).replaceAll('"', '\\"');
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || location.protocol === "file:") return;
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
