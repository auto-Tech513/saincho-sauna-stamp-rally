import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import { DATASET_META, PREFECTURES, SEED_FACILITIES } from "../data.js";
import { GEAR_PRODUCTS, GUIDE_FAQS, SAMESHI_SPOTS, SAUNA_ARTICLES, SAUNA_REFERENCES } from "../content.js";
import { applyFacilityEvidence, getFacilityEvidence, getMissingEvidenceFields, getVerifiedFeatures, isFitnessFacility } from "../facility-evidence.js";
import { haversineDistanceKm } from "../nearby.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const execFileAsync = promisify(execFile);
const OUT = path.join(ROOT, "public");
const APP_URL = "https://saincho-sauna-stamp-rally.pages.dev";
const OG_IMAGE = `${APP_URL}/assets/saincho-og-v2.png`;
const OFFICIAL_BLOG_URL = "https://saincho-official.hatenablog.com/";
const INDEXNOW_KEY = createHash("sha256").update(APP_URL).digest("hex").slice(0, 32);
const CHUNK_SIZE = 2500;
const ASSET_FILES = [
  "assets/saincho-header-ritual.webp",
  "assets/saincho-og-v2.png",
  "assets/achievement-mascot.webp",
  "assets/sauna-hero.webp",
  "assets/screenshot-mobile.png",
  "assets/sameshi-sprite-v1.webp",
  "assets/saincho-gear-editorial-v1.jpg",
  "assets/japan-map-mobile.svg",
];
const ICON_FILES = [
  "icons/apple-touch-icon.png",
  "icons/favicon-16.png",
  "icons/favicon-32.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-512-maskable.png",
  "icons/icon-source.png",
  "icons/saincho-icon-1024.png",
];
const HIDDEN_TAGS = new Set([
  "SaunaTime掲載",
  "サウナイキタイ掲載",
  "県別スターター",
  "県別30件補強",
  "県別50件補強",
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

const PREF_SLUG = new Map(PREFECTURES.map((pref) => [pref.name, pref.slug]));
const { facilities: CANONICAL_FACILITIES, aliases: FACILITY_ALIASES } = dedupeFacilitiesForSeo(SEED_FACILITIES.map(applyFacilityEvidence));
const SEARCHABLE_FACILITIES = CANONICAL_FACILITIES.filter((facility) => !isFitnessFacility(facility));
function getFacilityLastmod(facility) {
  const dates = [facility.sourceCheckedAt, facility.addressCheckedAt, ...((getFacilityEvidence(facility)?.facts || []).map((fact) => fact.checkedAt))].filter(Boolean).sort();
  return dates.at(-1) || LASTMOD.data;
}
// Relative labels ("確認からN日経過" / "本日確認") must NOT be baked in at build time:
// they go stale the next day and start claiming a freshness the page does not have
// (critical audit J, 2026-11-07). Emit an empty placeholder span instead; a small
// inline script in wrapSsr fills it at view time. Without JS only the absolute
// date is shown, which is never false.
function daysElapsedLabel(date) {
  if (!date) return "";
  return `<span data-elapsed-since="${escapeAttr(date)}"></span>`;
}
// 出どころ（住所の出典・各確認日・公式URLの取得元・照合方式）を混ぜずに項目別に表示する。
// 旧実装は複数の日付を「参照元の確認日」1行に統合し、公式照合日を参照元確認日と表示する取り違えがあった。
function renderProvenanceRows(facility, evidence) {
  const rows = [];
  const address = getAddress(facility);
  if (address && facility.addressSource) {
    rows.push(`<div><dt>住所の出典</dt><dd>${escapeHtml(facility.addressSource)}${facility.addressCheckedAt ? `（確認日 <time datetime="${escapeAttr(facility.addressCheckedAt)}">${escapeHtml(facility.addressCheckedAt)}</time>${daysElapsedLabel(facility.addressCheckedAt)}）` : ""}</dd></div>`);
  } else if (address && facility.addressCheckedAt) {
    rows.push(`<div><dt>住所の確認日</dt><dd><time datetime="${escapeAttr(facility.addressCheckedAt)}">${escapeHtml(facility.addressCheckedAt)}</time>${daysElapsedLabel(facility.addressCheckedAt)}</dd></div>`);
  }
  if (facility.sourceCheckedAt) {
    rows.push(`<div><dt>参照元の確認日</dt><dd><time datetime="${escapeAttr(facility.sourceCheckedAt)}">${escapeHtml(facility.sourceCheckedAt)}</time>${daysElapsedLabel(facility.sourceCheckedAt)}</dd></div>`);
  }
  if (facility.officialUrl && facility.officialUrlSource) {
    rows.push(`<div><dt>公式URLの取得元</dt><dd>${escapeHtml(facility.officialUrlSource)}</dd></div>`);
  }
  if (evidence) {
    rows.push(`<div><dt>公式情報の照合方式</dt><dd>${evidence.method === "official-labeled-fields" ? "公式ページの項目別掲載値を取得して照合" : "公式ページを項目別に照合"}</dd></div>`);
  }
  return rows.join("");
}
// note が住所そのもの（または施設名だけ）の場合は紹介文として出さない（住所の二重表示の是正）。
const SAUNACHELIN_HALL_OF_FAME_IDS = new Set(["manual-aichi-wellbe-sakae", "st-kumamoto-82", "st-kanagawa-4", "official-saga-mifuneyama-rakan", "st-nagano-4544", "sc2025-ochiairo", "si-hokkaido-4521", "si-tokyo-67270"]);

function saunachelinAwardYears(facility) {
  return (facility.tags || [])
    .map((tag) => /^saunachelin\s+(20\d{2})$/i.exec(String(tag).trim()))
    .filter(Boolean)
    .map((match) => Number(match[1]))
    .sort((a, b) => a - b);
}

function saunachelinAwardRow(facility) {
  const years = saunachelinAwardYears(facility);
  if (!years.length) return "";
  const ids = [facility.id, ...(facility.legacyIds || [])];
  const hallOfFame = ids.some((id) => SAUNACHELIN_HALL_OF_FAME_IDS.has(id));
  return `<div><dt>サウナシュラン</dt><dd>${years.join("・")}年 受賞（TTNE主催）${hallOfFame ? "／殿堂入り" : ""} <a href="https://www.saunachelin.com/" rel="noreferrer">公式サイト</a></dd></div>`;
}

function displayNote(facility) {
  const note = String(facility.note || "").trim();
  if (!note) return "";
  const squash = (value) => String(value).replace(/\s+/g, "");
  const address = getAddress(facility);
  if (address) {
    const addressCore = address.startsWith(facility.prefecture) ? address.slice(facility.prefecture.length) : address;
    if (squash(note) === squash(address) || squash(note) === squash(addressCore)) return "";
  }
  if (squash(note) === squash(facility.name || "")) return "";
  return note;
}
const INDEXABLE_FACILITIES = CANONICAL_FACILITIES.filter(isIndexableFacility);
// city には「名古屋市西区浅間」のように住所の残りが混ざる値があるため、市区町村の単位まで正規化してグループ化する。
function cityKeyOf(facility) {
  const head = String(facility.city || "").split(/\s/)[0];
  if (!head) return "";
  const ward = head.match(/^(.+?区)/);
  if (ward) return ward[1];
  const city = head.match(/^(.+?(?:市|町|村))/);
  return city ? city[1] : head;
}
const CITY_PEERS = new Map();
for (const peer of INDEXABLE_FACILITIES) {
  if (peer.status || !peer.city) continue;
  const cityKey = cityKeyOf(peer);
  if (!cityKey) continue;
  const key = `${peer.prefecture}|${cityKey}`;
  if (!CITY_PEERS.has(key)) CITY_PEERS.set(key, []);
  CITY_PEERS.get(key).push(peer);
}
const COORD_FACILITIES_BY_PREF = new Map();
for (const peer of INDEXABLE_FACILITIES) {
  if (peer.status) continue;
  const lat = Number(peer.lat);
  const lng = Number(peer.lng);
  if (!(lat >= 20 && lat <= 46 && lng >= 122 && lng <= 154)) continue;
  if (!COORD_FACILITIES_BY_PREF.has(peer.prefecture)) COORD_FACILITIES_BY_PREF.set(peer.prefecture, []);
  COORD_FACILITIES_BY_PREF.get(peer.prefecture).push({ facility: peer, lat, lng });
}
// 実在するサウナスタンプラリー・御朱印企画の掲載データ（意図ページと県ページの単一データ源）。
// 掲載条件: 主催者公式で期間と内容を確認できた主要企画のみ。endDate が公開情報で
// 確定できない企画は入れない（開催状態を誤らないため）。開催状態は静的HTMLに焼かず、
// 表示時点の判定（wrapSsr の data-event-start/end スクリプト）に任せる。
// 出典の生存と期間変更は月1回再確認する（鮮度点検に相乗り）。
const SAUNA_EVENTS = [
  {
    id: "nifty-ofuro2026",
    name: "おふろへ行こう2026 ニフティ温泉 デジタルスタンプラリー",
    organizer: "ニフティライフスタイル",
    officialUrl: "https://onsen.nifty.com/campaign/stamprally-ofuro2026/",
    area: "全国139施設",
    prefecture: "",
    startDate: "2026-08-03",
    endDate: "2026-11-30",
    howTo: "対象施設にあるQRコードでスタンプを集めます。3個・5個で抽選、15個で全員プレゼントがあります。",
    goshuin: false,
    checkedAt: "2026-11-09",
  },
  {
    id: "kumamoto-gosaincho",
    name: "御サ印帳",
    organizer: "熊本国際観光コンベンション協会",
    officialUrl: "https://kumamoto-icb.or.jp/",
    area: "熊本県（配布場所21か所）",
    prefecture: "熊本県",
    startDate: "2026-10-01",
    endDate: "2027-03-12",
    howTo: "配布場所で冊子を受け取り、熊本の対象サウナで御サ印を集めます。集めた数に応じて抽選プレゼントに応募できます（応募期間は2027年3月12日まで）。本サイト「サ印帳」とは別の企画です。",
    goshuin: true,
    checkedAt: "2026-11-09",
  },
  {
    id: "nagoya-yugoin-2026",
    name: "サウNA GO!! 湯朱印めぐり",
    organizer: "名古屋観光コンベンションビューロー",
    officialUrl: "",
    area: "名古屋市内15施設",
    prefecture: "愛知県",
    startDate: "2026-01-26",
    endDate: "2026-03-23",
    howTo: "対象の温浴施設を利用すると、各施設オリジナルの湯朱印がもらえました。",
    goshuin: true,
    checkedAt: "2026-11-08",
  },
];
const SAMESHI_BY_PREF = new Map();
for (const spot of SAMESHI_SPOTS) {
  if (!SAMESHI_BY_PREF.has(spot.prefecture)) SAMESHI_BY_PREF.set(spot.prefecture, []);
  SAMESHI_BY_PREF.get(spot.prefecture).push(spot);
}
function renderSameshiBlock(facility) {
  const spots = SAMESHI_BY_PREF.get(facility.prefecture) || [];
  if (!spots.length) return "";
  const cityHead = cityKeyOf(facility);
  const matched = spots.filter((spot) => cityHead && (cityHead === spot.area || cityHead.startsWith(spot.area) || spot.area.startsWith(cityHead)));
  const ordered = [...matched, ...spots.filter((spot) => !matched.includes(spot))];
  const items = ordered.map((spot) => `<li><a href="${escapeAttr(spot.url)}" rel="noopener">${escapeHtml(spot.spot)}</a>${spot.area ? `（${escapeHtml(spot.area)}）` : ""}${spot.menu ? `：${escapeHtml(spot.menu)}` : ""}${matched.includes(spot) ? " ※この施設と同じエリアの候補" : ""}</li>`).join("");
  return `
    <h2>${escapeHtml(facility.prefecture)}のサ飯候補</h2>
    <p>同じ都道府県内で運営が確認しているサ飯候補です。施設からの距離は掲載していません（スポット側に座標がないため）。</p>
    <ul class="ssr-list">${items}</ul>
    <p><a href="/sameshi/">サ飯スポットの一覧を見る</a></p>`;
}
function renderFacilityRelations(facility) {
  const sections = [];
  const cityKey = cityKeyOf(facility);
  // 同市ピアは「自施設の次から5件」を循環で取る。自施設が先頭固定の窓から漏れて
  // 被リンク0になる施設（実測155件）をなくすため。本数・書式は従来どおり最大5件。
  const cityList = CITY_PEERS.get(`${facility.prefecture}|${cityKey}`) || [];
  const selfIndex = cityList.findIndex((peer) => peer.id === facility.id);
  const others = cityList.filter((peer) => peer.id !== facility.id);
  const peers = others.length
    ? Array.from({ length: Math.min(5, others.length) }, (_, offset) => others[((selfIndex < 0 ? 0 : selfIndex) + offset) % others.length])
    : [];
  if (peers.length) {
    sections.push(`
    <h2>${escapeHtml(cityKey)}のほかのサウナ（個別ページがある施設）</h2>
    <ul class="ssr-list">${peers.map((peer) => `<li><a href="/facility/${encodeURIComponent(peer.id)}/">${escapeHtml(peer.name)}</a>${getAddress(peer) ? ` <span>${escapeHtml(getAddress(peer))}</span>` : ""}</li>`).join("")}</ul>`);
  }
  const lat = Number(facility.lat);
  const lng = Number(facility.lng);
  if (lat >= 20 && lat <= 46 && lng >= 122 && lng <= 154) {
    const nearby = (COORD_FACILITIES_BY_PREF.get(facility.prefecture) || [])
      .filter((entry) => entry.facility.id !== facility.id)
      .map((entry) => ({ facility: entry.facility, km: haversineDistanceKm(lat, lng, entry.lat, entry.lng) }))
      .sort((a, b) => a.km - b.km)
      .slice(0, 5);
    if (nearby.length) {
      sections.push(`
    <h2>近くのサウナ（直線距離）</h2>
    <ul class="ssr-list">${nearby.map((entry) => `<li><a href="/facility/${encodeURIComponent(entry.facility.id)}/">${escapeHtml(entry.facility.name)}</a> <span>約${entry.km.toFixed(1)}km</span></li>`).join("")}</ul>
    <p><small>距離は掲載座標同士の直線距離です。道路距離や所要時間ではありません。</small></p>`);
    }
  }
  return sections.join("");
}
const ARTICLE_ROUTES = SAUNA_ARTICLES.map((article, index) => ({
  article,
  route: `/guide/${encodeURIComponent(`${index + 1}-${slugify(article.title)}`)}/`,
}));
// サイト全体のFAQ/Dataset/OfferCatalog構造化データはトップのみに置き、
// 下層ページでは WebSite / Organization の最小グラフに差し替える。
const SUBPAGE_SITE_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${APP_URL}/#website`,
      url: `${APP_URL}/`,
      name: "サ印帳",
      inLanguage: "ja-JP",
      publisher: { "@id": `${APP_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${APP_URL}/#organization`,
      name: "サ印帳",
      url: `${APP_URL}/`,
      logo: `${APP_URL}/icons/icon-512.png`,
      publishingPrinciples: `${APP_URL}/about/`,
      sameAs: [OFFICIAL_BLOG_URL],
    },
  ],
};

await rotatePreviousOutput();
await fs.mkdir(OUT, { recursive: true });
const LASTMOD = {
  site: await getGitLastModified(["index.html", "app.js", "styles.css", "scripts/build-seo.mjs"]),
  data: await getGitLastModified(["data.js", "facility-evidence.js", "official-page-evidence.js"]),
  content: await getGitLastModified(["content.js"]),
};

const sourceIndex = await read("index.html");
const sourceStyles = await read("styles.css");
const sourceData = await read("data.js");
const sourceContent = await read("content.js");
const sourceNearby = await read("nearby.js");
const sourceOfficialEvidence = await read("official-page-evidence.js");
const officialEvidenceFile = `official-page-evidence.${hash(sourceOfficialEvidence)}.js`;
const sourceEvidence = (await read("facility-evidence.js")).replace('from "./official-page-evidence.js";', `from "./${officialEvidenceFile}";`);
const sourceSw = await read("sw.js");
const dataFile = `data.${hash(sourceData)}.js`;
const contentFile = `content.${hash(sourceContent)}.js`;
const stylesFile = `styles.${hash(sourceStyles)}.css`;
const nearbyFile = `nearby.${hash(sourceNearby)}.js`;
const evidenceFile = `facility-evidence.${hash(sourceEvidence)}.js`;
const appSource = (await read("app.js"))
  .replace('from "./nearby.js";', `from "./${nearbyFile}";`)
  .replace('from "./facility-evidence.js";', `from "./${evidenceFile}";`)
  .replace('const DATA_MODULE_PATH = "./data.js";', `const DATA_MODULE_PATH = "./${dataFile}";`)
  .replace('const CONTENT_MODULE_PATH = "./content.js";', `const CONTENT_MODULE_PATH = "./${contentFile}";`);
const appFile = `app.${hash(appSource)}.js`;

await write(dataFile, sourceData);
await write(contentFile, sourceContent);
await write(stylesFile, sourceStyles);
await write(nearbyFile, sourceNearby);
await write(officialEvidenceFile, sourceOfficialEvidence);
await write(evidenceFile, sourceEvidence);
await write(appFile, appSource);
await write("version.json", JSON.stringify({ app: appFile, styles: stylesFile }));
const shellModules = [appFile, stylesFile, dataFile, contentFile, nearbyFile, evidenceFile, officialEvidenceFile];
const builtSw = sourceSw
  .replace(/const CACHE_NAME = "[^"]+";/, `const CACHE_NAME = "saincho-${hash(sourceSw + shellModules.join(":"))}";`)
  .replace(/"\.\/(?:app|styles|data|content|nearby|facility-evidence|official-page-evidence)\.(?:js|css)",\n/g, "")
  .replace("const APP_SHELL_ASSETS = [", `const APP_SHELL_ASSETS = [\n${shellModules.map(file => `  "./${file}",`).join("\n")}`);
await write("sw.js", builtSw);
await write(`${INDEXNOW_KEY}.txt`, INDEXNOW_KEY);

await copyFile("manifest.webmanifest");
await write("llms.txt", renderLlmsTxt(await read("llms.txt")));
await copyFile("google4f1c271dfaceddbb.html");
await copyAssetFiles(ASSET_FILES);
await copyAssetFiles(ICON_FILES);
await copyFile("_headers");
await write("_redirects", [
  ...[...FACILITY_ALIASES.entries()].map(([aliasId, canonical]) =>
    `/facility/${encodeURIComponent(aliasId)}/ /facility/${encodeURIComponent(canonical.id)}/ 301`
  ),
  "/api/* /api/:splat 200",
  "",
].join("\n"));

const template = sourceIndex
  .replace(/href="\.\/styles\.css\?v=[^"]+"/, `href="./${stylesFile}"`)
  .replace(/src="\.\/app\.js\?v=[^"]+"/, `src="./${appFile}"`);

const urls = [];
let generatedPages = 0;
await emitPage("/", { ...pageMeta("サ印帳 | 全国サウナスタンプラリー・サ活記録アプリ", `全国${SEARCHABLE_FACILITIES.length}件のサウナ候補（重複統合後・通常検索の対象）から行った施設を押印。サウナ検索、サウナ御朱印、サ活記録、県別マスター、ランキング、サ飯、Gearをスマホで使える無料PWAです。件数の内訳は運営・データ方針ページに掲載。`), lastmod: LASTMOD.site }, renderHomeSsr());
await emitStaticRoute("/sauna-stamp-rally/", "サウナスタンプラリーをスマホで楽しむ | サ印帳", "サウナスタンプラリーの始め方、紙との違い、押印・行きたい・県別マスター・サ活ログの使い分けを、無料Webアプリのサ印帳で具体的に確認できます。", renderSearchIntentSsr("stamp-rally"), LASTMOD.content);
await emitStaticRoute("/sauna-goshuin/", "サウナ御朱印のように訪問記録を集める | サ印帳", "サウナ御朱印のように訪問の証をスマホへ残す方法を解説。施設公式の御朱印や物理スタンプとの違い、サ印・メモ・サ活ログの使い方を確認できます。", renderSearchIntentSsr("goshuin"), LASTMOD.content);
await emitStaticRoute("/gear/", "Gear | サ印帳", "サウナハット、サウナマット、水分補給、サウナバッグなど、サウナ前後に役立つ30カテゴリのGearをAmazon・楽天のレビュー検索導線で比較できます。", renderGearSsr(), LASTMOD.content);
await emitStaticRoute("/guide/", "サウナ入門 | サ印帳", `初めてのサウナでも迷いにくい入り方、安全、マナー、水分補給、持ち物、メモの残し方を${SAUNA_ARTICLES.length}記事で確認できます。`, renderGuideSsr(SAUNA_ARTICLES), LASTMOD.content);
await emitStaticRoute("/ranking/", "サウナの訪問数ランキングと称号 | サ印帳", "行ったサウナの数（サ印数）で称号が上がる、サ印帳の参加型ランキング。1湯「はじめの一湯」から2000湯「神人サウナー」までの称号一覧と参加方法を掲載。公開されるのはニックネーム・サ印数・称号のみです。", renderRankingSsr());
await emitStaticRoute("/passport/", "サ印 | サ印帳", "全国と都道府県別のサ印収集状況を確認。県マスター、称号、押印済み施設を一目で振り返れます。", renderGenericSsr("サ印", "全国・県別のサ印進捗と称号を確認できます。"));
await emitStaticRoute("/add/", "サウナを追加 | サ印帳", "候補にないサウナを都道府県、住所、特徴付きで登録できます。KV接続時は他ユーザーにも公開候補として表示されます。", renderGenericSsr("候補にないサウナを追加", "施設名、都道府県、住所、特徴を追加して、自分と他のユーザーのサウナ探索を育てられます。"));
await emitStaticRoute("/sameshi/", "サ飯 | サ印帳", "サウナーに人気のサ飯候補を県別に確認。施設周辺の飲食店検索にもつながるサ活後の導線です。", renderGenericSsr("サ飯", "都道府県別のサ飯候補と、施設周辺の飲食店検索でサウナ後の一食を探せます。"), LASTMOD.content);
await emitStaticRoute("/community/", "サ活コミュニティ | サ印帳", "都道府県別のサ活募集を作成・確認できるサウナー向けコミュニティ。連絡先を公開せず、参加予定を共有できます。", renderGenericSsr("サ活コミュニティ", "都道府県、日時、集合場所を指定してサ活仲間を募集できます。連絡先や位置情報は公開しません。"));
await emitStaticRoute("/stay/", "サウナ合宿先 | サ印帳", "サウナ付き宿や遠征先を探す専用ページ。施設詳細とは分けて、宿泊先選びの比較導線をまとめています。", renderGenericSsr("サウナ合宿先", "Airbnbなどのサウナ付き宿を、施設詳細とは別ページで比較できます。"));
await emitStaticRoute("/contact/", "掲載・お問い合わせ | サ印帳", "サウナ施設、旅館、民泊、飲食店向けに広告バナー、プレミアム個別ページ、サ飯送客、サウナ合宿先掲載の相談を受け付けます。", renderGenericSsr("掲載・お問い合わせ", "広告掲載、プレミアム個別ページ、内容修正、権利連絡、サ飯掲載の相談窓口です。"));
await emitStaticRoute("/about/", "運営・データ方針 | サ印帳", "サ印帳の施設データ確認基準、更新方法、広告・アフィリエイト方針、プライバシー、内容修正窓口を公開しています。", renderAboutSsr(), LASTMOD.site);

for (const pref of PREFECTURES) {
  const facilities = CANONICAL_FACILITIES.filter((facility) => facility.prefecture === pref.name && !isFitnessFacility(facility));
  const verifiedFacilities = facilities.filter(isIndexableFacility).length;
  await emitStaticRoute(`/pref/${pref.slug}/`, `${pref.name}のサウナ検索 | サ印帳`, `${pref.name}のサウナ候補${facilities.length}件をアプリ内で検索。番地住所・公式URL・固有の宿情報を確認できた${verifiedFacilities}件は検索エンジン向け一覧から個別ページへ移動できます。`, renderPrefSsr(pref, facilities), LASTMOD.data);
}

for (const { article, route } of ARTICLE_ROUTES) {
  await emitStaticRoute(route, `${article.title} | サウナ入門 | サ印帳`, `${article.title}。${article.lead} サ印帳のサウナ入門記事として、初心者が安全に楽しむための要点をまとめています。`, renderArticleSsr(article, route), article.updated || LASTMOD.content);
}

for (const facility of CANONICAL_FACILITIES) {
  const titleArea = [facility.prefecture, facility.city].filter(Boolean).join("・");
  const fullTitle = `${facility.name}${titleArea ? `（${titleArea}）` : ""} | サ印帳 施設詳細`;
  // 施設名自体が長い場合だけ「 施設詳細」を落として60字に収める（該当は現行1〜2件）。
  const title = fullTitle.length > 60 ? `${facility.name}${titleArea ? `（${titleArea}）` : ""} | サ印帳` : fullTitle;
  const meta = {
    ...pageMeta(title, getFacilityDescription(facility)),
    lastmod: getFacilityLastmod(facility),
    noindex: !isIndexableFacility(facility),
  };
  await emitPage(`/facility/${encodeURIComponent(facility.id)}/`, meta, renderFacilitySsr(facility));
}

await emit404();
await emitFeed();
await emitSitemaps(urls);
await write("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${APP_URL}/sitemap.xml\n`);
await pruneDuplicateOutputFiles();

console.log(`Built ${generatedPages} pages (${urls.length} indexable) into ${path.relative(ROOT, OUT)}/`);
console.log(`Canonical facilities: ${CANONICAL_FACILITIES.length}; aliases: ${FACILITY_ALIASES.size}`);
console.log(`Assets: ${appFile}, ${nearbyFile}, ${dataFile}, ${contentFile}, ${stylesFile}`);
console.log(`IndexNow key file: ${INDEXNOW_KEY}.txt`);

async function emitStaticRoute(route, title, description, ssrHtml, lastmod = LASTMOD.site) {
  await emitPage(route, { ...pageMeta(title, description), lastmod }, ssrHtml);
}

async function emitPage(route, meta, ssrHtml) {
  const html = renderHtml(route, meta, ssrHtml);
  await writeRoute(route, html);
  generatedPages += 1;
  if (!meta.noindex) urls.push({ loc: `${APP_URL}${route === "/" ? "/" : route}`, lastmod: meta.lastmod || "" });
}

function renderHtml(route, meta, ssrHtml) {
  const url = `${APP_URL}${route === "/" ? "/" : route}`;
  const canonicalUrl = meta.canonical || url;
  const seo = [
    `    <meta name="description" content="${escapeAttr(meta.description)}" />`,
    `    <meta name="robots" content="${meta.noindex ? "noindex, follow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}" />`,
    `    <meta name="googlebot" content="${meta.noindex ? "noindex, follow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}" />`,
    `    <meta name="application-name" content="サ印帳" />`,
    `    <meta name="format-detection" content="telephone=no" />`,
    `    <link rel="canonical" href="${escapeAttr(canonicalUrl)}" />`,
    `    <meta property="og:locale" content="ja_JP" />`,
    `    <meta property="og:type" content="${meta.type || "website"}" />`,
    `    <meta property="og:site_name" content="サ印帳" />`,
    `    <meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    `    <meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `    <meta property="og:url" content="${escapeAttr(canonicalUrl)}" />`,
    `    <meta property="og:image" content="${OG_IMAGE}" />`,
    `    <meta property="og:image:secure_url" content="${OG_IMAGE}" />`,
    `    <meta property="og:image:type" content="image/png" />`,
    `    <meta property="og:image:width" content="1200" />`,
    `    <meta property="og:image:height" content="630" />`,
    `    <meta property="og:image:alt" content="${escapeAttr(meta.imageAlt || "サ印帳の共有カード。全国のサウナを押印して集める。")}" />`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${escapeAttr(meta.title.replace(" | サ印帳", ""))}" />`,
    `    <meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
    `    <meta name="twitter:image" content="${OG_IMAGE}" />`,
    `    <meta name="twitter:image:alt" content="${escapeAttr(meta.imageAlt || "サ印帳の共有カード。全国のサウナを押印して集める。")}" />`,
  ].join("\n");
  let html = template
    .replace(/<!-- SEO:BEGIN -->[\s\S]*?<!-- SEO:END -->/, `<!-- SEO:BEGIN -->\n${seo}\n    <!-- SEO:END -->`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
  if (route !== "/") {
    const subpageLd = {
      "@context": "https://schema.org",
      "@graph": [
        ...SUBPAGE_SITE_LD["@graph"],
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: meta.title,
          description: meta.description,
          inLanguage: "ja-JP",
          isPartOf: { "@id": `${APP_URL}/#website` },
          image: OG_IMAGE,
          dateModified: meta.lastmod || undefined,
        },
      ],
    };
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">${escapeScript(JSON.stringify(subpageLd))}</script>`
    );
  }
  return html.replace("<!-- SSR:SLOT -->", ssrHtml);
}

function renderHomeSsr() {
  const total = SEARCHABLE_FACILITIES.length;
  const regions = [...new Set(PREFECTURES.map((pref) => pref.region))];
  const prefLinks = regions.map((region) => `
      <strong>${escapeHtml(region)}</strong>
      ${PREFECTURES.filter((pref) => pref.region === region).map((pref) => `<a href="/pref/${pref.slug}/">${escapeHtml(pref.name)}</a>`).join("")}`).join("");
  const evidenceExamples = CANONICAL_FACILITIES
    .map((facility) => ({ facility, facts: (getFacilityEvidence(facility)?.facts || []).length }))
    .filter((entry) => entry.facts >= 5 && !entry.facility.status)
    .sort((a, b) => b.facts - a.facts)
    .slice(0, 6);
  // Name the actual latest re-verification date instead of "本日": the build date
  // and the re-verification date drift apart whenever no deploy happens that day.
  const latestRefreshDate = CANONICAL_FACILITIES.map((facility) => facility.sourceCheckedAt).filter(Boolean).sort().at(-1) || "";
  const refreshedCount = latestRefreshDate ? CANONICAL_FACILITIES.filter((facility) => facility.sourceCheckedAt === latestRefreshDate).length : 0;
  const indexableCount = CANONICAL_FACILITIES.filter(isIndexableFacility).length;
  // サービス自体のFAQ。可視テキストと JSON-LD は同じ配列から生成し、事実関係を一致させる。
  const homeFaqs = [
    ["サ印（サウナ御朱印）とは何ですか？", "サ印は、サウナ施設を訪問した証として、サ印帳のアプリ内で自分で押すデジタルな印です。施設が発行する御朱印や記念印とは別物で、施設で受け取るものではありません。"],
    ["サ印帳は無料で使えますか？", "無料で使えます。施設の検索、サ印の押印、メモ、お気に入りは登録なしで、スマホのブラウザから利用できます。"],
    ["アプリのインストールは必要ですか？", "必要ありません。サ印帳はブラウザで動くWebアプリです。ホーム画面に追加すると、アプリのように起動できます。"],
    ["どんなサウナが掲載されていますか？", `全国47都道府県のサウナ候補${CANONICAL_FACILITIES.length}件（重複統合後）を検索できます。このうち、住所や公式URLを確認できた${indexableCount}件には個別ページがあります。最新の内訳は運営・データ方針ページに掲載しています。`],
    ["施設を自分で登録する必要がありますか？", `必要ありません。全国の候補から検索し、行った施設を選んで押印します。候補にないサウナは、「サウナを追加」のページから自分で登録することもできます。`],
    ["無料で記録できる施設数に上限はありますか？", "上限はありません。検索、押印、メモ、お気に入り、サ活ログは登録なしで無料で使えます。ランキングへの参加も無料です。"],
    ["サ印は間違えて押したら取り消せますか？", "取り消せます。押印した施設のサ印はいつでも取り消しでき、コレクションや称号も実際の押印数に合わせて再計算されます。"],
    ["記録はどこに保存されますか？", "押印、メモ、お気に入りは原則としてお使いの端末内に保存されます。ランキングに参加した場合は、ニックネーム、サ印数、称号が公開されます（メールアドレスは公開されません）。押印した施設の一覧は、公開設定を自分でオンにした場合のみ公開されます。"],
  ];
  // トップには FAQPage の構造化データを置かない（監査ルール: 検索表示対象外の
  // 型をトップで主張しない）。可視の FAQ はそのまま掲載し、AI・利用者は本文から読める。
  return wrapSsr(`
    <p class="eyebrow">SAUNA STAMP RALLY</p>
    <h1>サ印帳</h1>
    <h2>サ印帳とは</h2>
    <p>全国${total}件のサウナ候補（同一施設の別名・別参照元を統合し、通常のサウナ検索の対象となる件数）を検索し、実際に行った施設を「サ印」として記録できる無料のサウナスタンプラリー・サ活記録アプリです。施設が発行する物理スタンプではなく、自分の訪問履歴をスマホで育てます。件数の内訳と掲載方針は<a href="/about/">運営・データ方針</a>に掲載しています。</p>
    <p>施設は自分で登録する必要はありません。全国の候補から検索して、行った施設をそのまま押印できます。押印や記録の件数に上限はなく、登録なしで無料で使えます。</p>
    <h2>検索から次のサ活まで</h2>
    <ul>
      <li>施設カードから詳細、経路、周辺サ飯、Gearを確認できます。</li>
      <li>県別マスター、称号、ランキングで続ける理由が見えます。</li>
      <li>スマホのホーム画面に追加して、次のサ活を1タップで開けます。</li>
    </ul>
    <h2>コンテンツの実数</h2>
    <ul>
      <li>サウナ入門ガイド：${SAUNA_ARTICLES.length}本（健康・安全の記事には出典を表示）</li>
      <li>サ飯スポット：${SAMESHI_SPOTS.length}件（全47都道府県）</li>
      <li>Gear（サウナ道具）：${GEAR_PRODUCTS.length}件</li>
      <li>公式情報で料金・営業時間などを照合した施設：${CANONICAL_FACILITIES.filter((facility) => getFacilityEvidence(facility)).length}件</li>
      ${refreshedCount ? `<li>参照元を${escapeHtml(latestRefreshDate)}に再確認した施設：${refreshedCount}件</li>` : ""}
    </ul>
    ${evidenceExamples.length ? `<h2>公式情報で確認した施設の例</h2>
    <ul class="ssr-list">${evidenceExamples.map(({ facility, facts }) => `<li><a href="/facility/${encodeURIComponent(facility.id)}/">${escapeHtml(facility.name)}</a> <span>${escapeHtml(facility.prefecture)}・公式照合${facts}項目</span></li>`).join("")}</ul>` : ""}
    <h2>よくある質問</h2>
    <dl>${homeFaqs.map(([question, answer]) => `<dt>${escapeHtml(question)}</dt><dd>${escapeHtml(answer)}</dd>`).join("")}</dl>
    <nav class="ssr-links" aria-label="都道府県別サウナ検索">
      <strong>都道府県からサウナを探す</strong>
      ${prefLinks}
    </nav>
    <nav class="ssr-links" aria-label="主要ページ">
      <a href="/guide/">サウナ入門</a><a href="/gear/">Gear</a><a href="/sameshi/">サ飯</a><a href="/community/">サ活コミュニティ</a><a href="/stay/">サウナ合宿先</a><a href="/ranking/">ランキング</a><a href="/sauna-stamp-rally/">サウナスタンプラリーの始め方</a><a href="/sauna-goshuin/">サウナ御朱印とサ印の違い</a><a href="/about/">運営・データ方針</a><a href="/contact/">掲載・お問い合わせ</a>
    </nav>
  `);
}

function renderAboutSsr() {
  const withAddress = CANONICAL_FACILITIES.filter((facility) => getAddress(facility)).length;
  const withArea = CANONICAL_FACILITIES.filter((facility) => getAddress(facility) || facility.city).length;
  const indexable = CANONICAL_FACILITIES.filter(isIndexableFacility).length;
  const percent = (value) => `${Math.round((value / CANONICAL_FACILITIES.length) * 100)}%`;
  return wrapSsr(`
    <nav aria-label="パンくず"><a href="/">サ印帳</a> › 運営・データ方針</nav>
    <p class="eyebrow">TRUST &amp; METHODOLOGY</p>
    <h1>運営・データ方針</h1>
    <p>サ印帳は、行ったサウナに「サ印」を押して集める無料のWebアプリです。サ印は施設が発行する御朱印ではなく、利用者自身がアプリ内で残すデジタルな訪問記録です。</p>
    <p>サ印帳は、確認できた事実と未確認項目を分けて掲載します。施設名、都道府県、参照URLを基礎情報とし、住所、公式URL、設備タグは公開確認できた場合のみ表示します。</p>
    <dl>
      <div><dt>重複統合後の候補</dt><dd>${CANONICAL_FACILITIES.length}件</dd></div>
      <div><dt>番地住所あり</dt><dd>${withAddress}件（${percent(withAddress)}）</dd></div>
      <div><dt>市区町村以上</dt><dd>${withArea}件（${percent(withArea)}）</dd></div>
      <div><dt>検索対象の個別ページ</dt><dd>${indexable}件</dd></div>
      <div><dt>カタログ確認日</dt><dd>${escapeHtml(DATASET_META.catalogReviewedAt || "未設定")}</dd></div>
    </dl>
    <h2>確認・更新</h2>
    <p>同一施設の別名を正規化して統合し、開業予定・要確認は県マスターの対象外にします。外部施設の閉店、移転、料金変更を推測で自動上書きせず、監査で異常を検出した後に根拠を確認して更新します。</p>
    <p>検索エンジン向けの個別ページは、番地住所、施設公式URL、または所在地と固有説明のあるサウナ宿を確認できた候補に限定します。未確認候補はアプリ内検索には残し、情報を補完できるまでサイトマップへ載せません。</p>
    <p><a href="${OFFICIAL_BLOG_URL}" rel="me">サ印帳公式ブログで更新情報を見る</a></p>
    <h2>広告・アフィリエイト</h2>
    <p>GearのAmazon・楽天リンクを経由した購入で運営が紹介料を受け取る場合があります。価格、在庫、レビューはリンク先の最新情報を優先し、広告掲載は広告と分かる表示にします。</p>
    <h2>プライバシー</h2>
    <p>押印、行きたい、お気に入り、メモは原則として端末内に保存します。ランキングのメールアドレスはハッシュ化し、画面には表示しません。</p>
    <p><a href="/contact/">内容修正・権利連絡・掲載のお問い合わせ</a></p>
  `);
}

function renderGearSsr() {
  return wrapSsr(`
    <p class="eyebrow">GEAR</p>
    <h1>サウナ補給と持ち物</h1>
    <p>サウナハット、サウナマット、水分補給、タオル、バッグなど${GEAR_PRODUCTS.length}件を、Amazonと楽天のレビュー検索導線で比較できます。</p>
    <div class="ssr-grid">${GEAR_PRODUCTS.slice(0, 6).map((item) => `<article><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.category)}</span><p>${escapeHtml(item.reason)}</p></article>`).join("")}</div>
  `);
}

function renderGuideSsr(articles) {
  const articleLinks = ARTICLE_ROUTES
    .map(({ article, route }) => `<li><a href="${escapeAttr(route)}">${escapeHtml(article.title)}</a> <span>${escapeHtml(article.category)}</span><br>${escapeHtml(article.lead)}</li>`)
    .join("");
  const faqItems = GUIDE_FAQS
    .map((faq) => `<dt>${escapeHtml(faq.question)}</dt><dd>${escapeHtml(faq.answer)}</dd>`)
    .join("");
  const referenceItems = SAUNA_REFERENCES
    .map((ref) => `<li><a href="${escapeAttr(ref.url)}" rel="noopener">${escapeHtml(ref.label)}</a></li>`)
    .join("");
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: GUIDE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }, null, 2);
  return wrapSsr(`
    <p class="eyebrow">GUIDE</p>
    <h1>初めてでも迷わないサウナ入門</h1>
    <p>安全、入り方、マナー、水分補給、道具、記録まで${articles.length}本の実用記事を用意しています。健康・安全に関わる記事を中心に、各記事の末尾へ内容の根拠とした出典を記事ごとに表示しています。</p>
    <ul class="ssr-list">${articleLinks}</ul>
    <h2>よくある質問</h2>
    <dl>${faqItems}</dl>
    <h2>サウナ入門の参考資料（ガイド全体）</h2>
    <p>各記事の出典は記事ページの末尾に記事単位で表示しています。ここにはガイド全体で参照している資料をまとめます。</p>
    <ul>${referenceItems}</ul>
    <p><a href="/">サ印帳トップへ戻る</a></p>
  `, { jsonLd });
}

function renderArticleSsr(article, route) {
  // 記事に個別の改訂日（updated）があれば dateModified と sitemap の lastmod に使う。
  // datePublished は従来どおり content.js の実変更日（監査ルールで必須・本サイトの規約）。
  const publishedAt = LASTMOD.content || undefined;
  const modifiedAt = article.updated || publishedAt;
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        ["サ印帳", `${APP_URL}/`],
        ["サウナ入門", `${APP_URL}/guide/`],
        [article.title, `${APP_URL}${route}`],
      ]),
      {
        "@type": "Article",
        "@id": `${APP_URL}${route}#article`,
        headline: article.title,
        inLanguage: "ja-JP",
        articleSection: article.category,
        description: article.lead,
        image: [OG_IMAGE],
        // datePublished は監査ルールで必須。本サイトの規約として、公開日は
        // content.js の実変更日（git由来）を使う。記事ごとの公開日データは持っていない。
        // dateModified は記事の updated（個別改訂日）があればそちらを優先する。
        datePublished: publishedAt,
        dateModified: modifiedAt,
        author: { "@id": `${APP_URL}/#organization` },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${APP_URL}${route}` },
        publisher: { "@id": `${APP_URL}/#organization` },
        ...(Array.isArray(article.sources) && article.sources.length ? { citation: article.sources.map((source) => source.url) } : {}),
      },
    ],
  }, null, 2);
  const detailHtml = (article.detail || []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  const sourcesHtml = Array.isArray(article.sources) && article.sources.length ? `
    <h2>出典・参考資料</h2>
    <ul>${article.sources.map((source) => `<li><a href="${escapeAttr(source.url)}" rel="noopener">${escapeHtml(source.label)}</a></li>`).join("")}</ul>
    <p><small>この記事の内容の根拠とした資料です。2026年11月4日に各出典を確認しています。補助的な出典には、その旨を資料名に明記しています。</small></p>` : "";
  const index = ARTICLE_ROUTES.findIndex((entry) => entry.route === route);
  const siblings = ARTICLE_ROUTES.filter((entry) => entry.article.category === article.category && entry.route !== route).slice(0, 3);
  const prev = index > 0 ? ARTICLE_ROUTES[index - 1] : null;
  const next = index >= 0 && index < ARTICLE_ROUTES.length - 1 ? ARTICLE_ROUTES[index + 1] : null;
  const hubByCategory = { "道具": ["/gear/", "Gear（サウナ道具）の一覧を見る"], "サ飯": ["/sameshi/", "サ飯スポットの一覧を見る"], "遠征": ["/stay/", "サウナ合宿・宿の一覧を見る"], "施設選び": ["/", "施設を探す（サ印帳トップ）"] };
  const hub = hubByCategory[article.category];
  // 記事が明示した関連リンク（relatedTitles はタイトルで他記事を、relatedPages は
  // 意図ページ・県ページ等への導線を指定する）。自動の同カテゴリ/前後リンクより前に出す。
  const explicitRelated = [
    ...(article.relatedTitles || []).map((title) => ARTICLE_ROUTES.find((entry) => entry.article.title === title)).filter(Boolean)
      .map((entry) => `<li><a href="${escapeAttr(entry.route)}">${escapeHtml(entry.article.title)}</a> <span>関連記事</span></li>`),
    ...(article.relatedPages || []).map(([url, label]) => `<li><a href="${escapeAttr(url)}">${escapeHtml(label)}</a></li>`),
  ];
  const relatedItems = [
    ...explicitRelated,
    ...siblings.map((entry) => `<li><a href="${escapeAttr(entry.route)}">${escapeHtml(entry.article.title)}</a> <span>同じ「${escapeHtml(article.category)}」の記事</span></li>`),
    ...(prev ? [`<li><a href="${escapeAttr(prev.route)}">前の記事：${escapeHtml(prev.article.title)}</a></li>`] : []),
    ...(next ? [`<li><a href="${escapeAttr(next.route)}">次の記事：${escapeHtml(next.article.title)}</a></li>`] : []),
    ...(hub ? [`<li><a href="${hub[0]}">${hub[1]}</a></li>`] : []),
  ].join("");
  return wrapSsr(`
    <nav aria-label="パンくず"><a href="/">サ印帳</a> › <a href="/guide/">サウナ入門</a> › ${escapeHtml(article.title)}</nav>
    <p class="eyebrow">${escapeHtml(article.category)}</p>
    <h1>${escapeHtml(article.title)}</h1>
    ${modifiedAt ? `<p><small>最終更新 <time datetime="${modifiedAt}">${modifiedAt}</time></small></p>` : ""}
    <p>${escapeHtml(article.lead)}</p>
    <ul>${article.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
    ${detailHtml}
    <p><strong>実践:</strong> ${escapeHtml(article.action)}</p>
    <p><strong>注意:</strong> ${escapeHtml(article.caution)}</p>
    ${sourcesHtml}
    ${relatedItems ? `<h2>関連する記事・ページ</h2><ul class="ssr-list">${relatedItems}</ul>` : ""}
    <p><a href="/guide/">サウナ入門の記事一覧へ戻る</a></p>
  `, { jsonLd });
}

function renderPrefSsr(pref, facilities) {
  const indexableFacilities = facilities.filter(isIndexableFacility);
  const withAddress = facilities.filter((facility) => getAddress(facility)).length;
  const withOfficial = facilities.filter((facility) => facility.officialUrl).length;
  const withEvidence = facilities.filter((facility) => getFacilityEvidence(facility)).length;
  const cityGroups = new Map();
  for (const facility of indexableFacilities) {
    const key = cityKeyOf(facility) || "その他";
    if (!cityGroups.has(key)) cityGroups.set(key, []);
    cityGroups.get(key).push(facility);
  }
  const facilityLinks = [...cityGroups.entries()]
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0], "ja"))
    .map(([city, group]) => `
    <h2>${escapeHtml(city)}（${group.length}件）</h2>
    <ul class="ssr-list">${group.map((facility) => {
      const hint = getAddress(facility) ? getAddress(facility) : getFacilityEvidence(facility) ? "公式情報を照合済み" : facility.officialUrl ? "公式リンクあり" : "";
      return `<li><a href="/facility/${encodeURIComponent(facility.id)}/">${escapeHtml(facility.name)}</a>${hint ? ` <span>${escapeHtml(hint)}</span>` : ""}</li>`;
    }).join("")}</ul>`)
    .join("");
  const regionPeers = PREFECTURES.filter((other) => other.region === pref.region && other.name !== pref.name);
  const regionLinks = regionPeers.length ? `
    <h2>${escapeHtml(pref.region)}地方のほかの県</h2>
    <ul class="ssr-list">${regionPeers.map((other) => `<li><a href="/pref/${other.slug}/">${escapeHtml(other.name)}のサウナ</a></li>`).join("")}</ul>` : "";
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        ["サ印帳", `${APP_URL}/`],
        [`${pref.name}のサウナ`, `${APP_URL}/pref/${pref.slug}/`],
      ]),
      {
        "@type": "ItemList",
        "@id": `${APP_URL}/pref/${pref.slug}/#list`,
        name: `${pref.name}のサウナ候補`,
        numberOfItems: indexableFacilities.length,
        itemListElement: indexableFacilities.map((facility, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: facility.name,
          url: `${APP_URL}/facility/${encodeURIComponent(facility.id)}/`,
        })),
      },
    ],
  }, null, 2);
  return wrapSsr(`
    <nav aria-label="パンくず"><a href="/">サ印帳</a> › ${escapeHtml(pref.name)}のサウナ</nav>
    <p class="eyebrow">PREFECTURE</p>
    <h1>${escapeHtml(pref.name)}のサウナ検索</h1>
    <p>${escapeHtml(pref.name)}の候補${facilities.length}件をアプリ内で検索できます。この一覧では、番地住所・公式URL・固有の宿情報を確認できた${indexableFacilities.length}件を掲載しています。</p>
    <p>${escapeHtml(pref.name)}の掲載状況：候補${facilities.length}件のうち、番地住所まで確認できたもの${withAddress}件、公式URLがあるもの${withOfficial}件、料金・営業時間などを公式情報で照合したもの${withEvidence}件です。確認が進んだ候補から個別ページに掲載しています。</p>
    ${facilityLinks}
    <p>未確認候補は検索画面で確認できます。番地、営業状況、料金は参照元または施設公式情報を訪問前に再確認してください。</p>
    <p><a href="/sauna-stamp-rally/">行ったサウナは、サウナスタンプラリーとして押印して記録できます</a></p>
    ${renderPrefEventBlock(pref)}
    ${renderPrefAwardBlock(pref, facilities)}
    ${renderSameshiBlock({ prefecture: pref.name, city: "" })}
    ${regionLinks}
    <p><a href="/">サ印帳トップへ戻る</a></p>
  `, { jsonLd });
}

function renderFacilitySsr(facility) {
  const evidence = getFacilityEvidence(facility);
  const tags = displayTags(facility);
  const address = getAddress(facility);
  const area = [facility.prefecture, facility.city].filter(Boolean).join(" / ");
  const prefSlug = PREF_SLUG.get(facility.prefecture) || "";
  const facilityUrl = `${APP_URL}/facility/${encodeURIComponent(facility.id)}/`;
  const source = facility.sourceUrl ? `<a href="${escapeAttr(facility.sourceUrl)}" rel="nofollow noreferrer">${escapeHtml(facility.source || "参照")}</a>` : escapeHtml(facility.source || "参照元確認中");
  const official = facility.officialUrl ? `<a href="${escapeAttr(facility.officialUrl)}" rel="nofollow noreferrer">施設公式ページ</a>` : "";
  const note = displayNote(facility);
  const quality = getFacilityQuality(facility);
  const factCount = (evidence?.facts || []).length;
  const missingFields = evidence ? getMissingEvidenceFields(facility) : [];
  const mapQuery = [facility.name, address || facility.city, facility.prefecture].filter(Boolean).join(" ");
  const mapUrl = (address || facility.city) ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}` : "";
  const breadcrumb = prefSlug
    ? `<nav aria-label="パンくず"><a href="/">サ印帳</a> › <a href="/pref/${prefSlug}/">${escapeHtml(facility.prefecture)}のサウナ</a> › ${escapeHtml(facility.name)}</nav>`
    : `<nav aria-label="パンくず"><a href="/">サ印帳</a> › ${escapeHtml(facility.name)}</nav>`;
  const graph = [
    breadcrumbJsonLd(prefSlug
      ? [
          ["サ印帳", `${APP_URL}/`],
          [`${facility.prefecture}のサウナ`, `${APP_URL}/pref/${prefSlug}/`],
          [facility.name, facilityUrl],
        ]
      : [
          ["サ印帳", `${APP_URL}/`],
          [facility.name, facilityUrl],
        ]),
  ];
  if (isIndexableFacility(facility)) graph.push(localBusinessJsonLd(facility));
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  }, null, 2);
  return wrapSsr(`
    ${breadcrumb}
    <p class="eyebrow">SAUNA DETAIL</p>
    <h1>${escapeHtml(facility.name)}</h1>
    <p>${escapeHtml(area)}</p>
    <dl>
      <div><dt>住所</dt><dd>${escapeHtml(address || "住所確認中")}</dd></div>
      ${tags.length ? `<div><dt>確認済み設備</dt><dd>${escapeHtml(tags.join(" / "))}</dd></div>` : ""}
      ${(evidence?.facts || []).map(row => `<div><dt>${escapeHtml(row.label)}</dt><dd>${escapeHtml(row.value)} <a href="${escapeAttr(row.sourceUrl)}" rel="noreferrer">公式出典</a>（${row.checkedAt}${evidence.method === "official-labeled-fields" ? "掲載値取得" : "照合"}）</dd></div>`).join("")}
      ${saunachelinAwardRow(facility)}
      ${evidence?.facts.some(row => row.label === "施設営業時間") ? "<div><dt>時間の掲載範囲</dt><dd>施設営業時間と浴場・サウナの利用時間は異なる場合があります。</dd></div>" : ""}
      ${isFitnessFacility(facility) ? '<div><dt>施設区分</dt><dd>ジム・フィットネス併設。通常のサウナ検索の対象外です。記録・参照用のページは保持しています。</dd></div>' : ""}
      ${facility.source === "Airbnb" ? '<div><dt>施設の種類</dt><dd>宿泊施設（サウナ付き宿）</dd></div>' : ""}
      ${facility.access ? `<div><dt>アクセス（参照元掲載）</dt><dd>${escapeHtml(facility.access)}</dd></div>` : ""}
      <div><dt>参照</dt><dd>${source}</dd></div>
      ${official ? `<div><dt>公式</dt><dd>${official}</dd></div>` : ""}
      ${mapUrl ? `<div><dt>地図</dt><dd><a href="${escapeAttr(mapUrl)}" rel="noopener">地図で場所を確認（Google Maps）</a></dd></div>` : ""}
      ${mapUrl ? `<div><dt>写真</dt><dd><a href="${escapeAttr(mapUrl)}" rel="noopener">外観・内装の写真を見る（Google Maps）</a></dd></div>` : ""}
      ${note ? `<div><dt>旧掲載の紹介（未再照合）</dt><dd>${escapeHtml(note)}</dd></div>` : ""}
      <div><dt>掲載の確認状況</dt><dd>住所：${address ? "掲載あり" : facility.city ? "市区町村まで掲載" : "未確認"} ／ 公式ページ：${facility.officialUrl ? "あり" : "なし"} ／ 料金・営業時間など：${factCount ? `公式照合済み（${factCount}項目）` : "未確認"}</dd></div>
      ${missingFields.length ? `<div><dt>公式照合で未確認の項目</dt><dd>${escapeHtml(missingFields.join("・"))}（未確認は「設備なし」を意味しません）</dd></div>` : ""}
      ${renderProvenanceRows(facility, evidence)}
    </dl>
    <p>${escapeHtml(quality.description)}</p>
    <p><a href="/contact/">情報修正を知らせる</a></p>
    ${renderFacilityRelations(facility)}
    ${renderSameshiBlock(facility)}
    ${prefSlug ? `<p><a href="/pref/${prefSlug}/">${escapeHtml(facility.prefecture)}のサウナ一覧へ戻る</a></p>` : ""}
  `, { jsonLd });
}

// ランキングの静的説明。称号マイルストーンは functions/api/ranking.js の
// TITLE_MILESTONES と一致させること（固定データなので静的掲載してよい）。
// 現在の順位・参加者数などの動的データはここに書かない。
function renderRankingSsr() {
  const milestones = [
    [0, "湯けむり準備中"], [1, "はじめの一湯"], [5, "新米サウナー"], [20, "初級サウナー"],
    [50, "中級サウナー"], [100, "上級サウナー"], [250, "玄人サウナー"], [400, "プロサウナー"],
    [600, "名人サウナー"], [800, "達人サウナー"], [1000, "永世サウナー"], [2000, "神人サウナー"],
  ];
  const faqs = [
    ["ランキングに参加するには登録が必要ですか？", "ニックネームとメールアドレスの登録が必要です。公開されるのはニックネーム、サ印数、称号のみで、メールアドレスは公開されません（サーバー側でハッシュ化して照合にだけ使います）。"],
    ["サ印数はどうやって増えますか？", "実際に行った施設をサ印帳で押印すると、その数（自己申告の記録）がランキングに反映されます。押印を取り消すと数も減ります。"],
    ["押印した施設の一覧も公開されますか？", "初期設定では公開されません。ランキング登録画面で「押印した施設を公開する」を自分でオンにした場合だけ、その参加者の施設一覧がランキングから見られるようになります。オフに戻すとサーバー上の一覧も消えます。"],
  ];
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([["サ印帳", APP_URL], ["サウナの訪問数ランキングと称号", `${APP_URL}/ranking/`]]),
      {
        "@type": "FAQPage",
        "@id": `${APP_URL}/ranking/#faq`,
        inLanguage: "ja-JP",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  }, null, 2);
  return wrapSsr(`
    <nav aria-label="パンくず"><a href="/">サ印帳</a> › サウナの訪問数ランキングと称号</nav>
    <p class="eyebrow">RANKING</p>
    <h1>サウナの訪問数ランキングと称号</h1>
    <p>サ印帳のランキングは、行ったサウナの数（サ印数）を参加者同士で比べる参加型の仕組みです。現在の順位（上位10名）はアプリの記録画面に表示されます。このページでは、称号の仕組みと参加方法を説明します。</p>
    <h2>称号一覧（サ印数で上がります）</h2>
    <dl>${milestones.map(([count, title]) => `<div><dt>${count}湯</dt><dd>${escapeHtml(title)}</dd></div>`).join("")}</dl>
    <h2>参加方法</h2>
    <ol><li>サ印帳で施設を探し、実際に行った施設を押印する</li><li>記録画面のランキング登録でニックネームとメールアドレスを登録する</li><li>押印するたびにサ印数が同期され、称号と順位に反映される</li></ol>
    <h2>公開される情報</h2>
    <p>公開されるのはニックネーム、サ印数、称号のみです。メールアドレスは表示されません。押印した施設の一覧は、登録画面で自分で公開設定をオンにした場合だけ表示されます（初期設定は非公開）。</p>
    <h2>よくある質問</h2>
    <dl>${faqs.map(([question, answer]) => `<dt>${escapeHtml(question)}</dt><dd>${escapeHtml(answer)}</dd>`).join("")}</dl>
    <p><a href="/">全国のサウナを探して始める</a> / <a href="/sauna-stamp-rally/">サウナスタンプラリーの始め方</a></p>
  `, { jsonLd });
}

function renderGenericSsr(title, text) {
  return wrapSsr(`
    <p class="eyebrow">SAINCHO</p>
    <h1>${escapeHtml(title)}</h1>
    <p>${escapeHtml(text)}</p>
  `);
}

function jstToday() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tokyo" }).format(new Date());
}

// llms.txt は repo ルートのテンプレートを正本とし、件数と日付だけをビルド時の
// 実数に置き換えて生成する（手書きの静的数字が陳腐化した前回の失敗への対策）。
function renderLlmsTxt(template) {
  const [year, month, day] = jstToday().split("-").map(Number);
  return template
    .replaceAll("__CANONICAL_COUNT__", String(CANONICAL_FACILITIES.length))
    .replaceAll("__SEARCHABLE_COUNT__", String(SEARCHABLE_FACILITIES.length))
    .replaceAll("__INDEXABLE_COUNT__", String(INDEXABLE_FACILITIES.length))
    .replaceAll("__GUIDE_COUNT__", String(SAUNA_ARTICLES.length))
    .replaceAll("__AS_OF__", `${year}年${month}月${day}日`);
}

function formatEventPeriod(event) {
  const format = (iso) => {
    const [year, month, day] = iso.split("-").map(Number);
    return `${year}年${month}月${day}日`;
  };
  return `${format(event.startDate)}〜${format(event.endDate)}`;
}

function renderEventItem(event) {
  return `<li><strong>${escapeHtml(event.name)}</strong><span data-event-start="${event.startDate}" data-event-end="${event.endDate}"></span><br>主催: ${escapeHtml(event.organizer)} / 期間: ${formatEventPeriod(event)} / 対象: ${escapeHtml(event.area)}<br>${escapeHtml(event.howTo)}${event.officialUrl ? ` <a href="${escapeAttr(event.officialUrl)}" rel="noopener">主催者公式情報</a>` : ""} <small>（公式情報を${escapeHtml(event.checkedAt)}に確認）</small></li>`;
}

// 終了から90日を過ぎた企画は「終了した企画」側へ寄せる。状態表示そのものは
// 表示時点判定が正なので、この振り分けが遅れても誤表示にはならない。
function isArchivedEvent(event, todayIso) {
  const end = Date.parse(event.endDate);
  return Number.isFinite(end) && Date.parse(todayIso) > end + 90 * 86400000;
}

function renderEventsSection() {
  const today = jstToday();
  const byEnd = (a, b) => a.endDate.localeCompare(b.endDate);
  const active = SAUNA_EVENTS.filter((event) => !isArchivedEvent(event, today)).sort(byEnd);
  const archived = SAUNA_EVENTS.filter((event) => isArchivedEvent(event, today)).sort((a, b) => b.endDate.localeCompare(a.endDate));
  return `
    <h2>実在のサウナスタンプラリー・御朱印企画</h2>
    <p>期間限定のイベント型企画を探している方へ。主催者が公式に期間と対象を公開している主要な企画だけを、公式情報で確認して掲載しています。すべてのイベントを網羅するものではありません。開催状況や参加条件は各主催者の公式情報で確認してください。対象施設へ行った記録は、サ印帳の押印としても残せます。</p>
    <ul class="ssr-list">${active.map(renderEventItem).join("")}</ul>
    ${archived.length ? `<h3>終了した企画</h3>
    <ul class="ssr-list">${archived.map(renderEventItem).join("")}</ul>` : ""}`;
}

function renderGoshuinEventsBlock() {
  const events = SAUNA_EVENTS.filter((event) => event.goshuin).sort((a, b) => a.endDate.localeCompare(b.endDate));
  if (!events.length) return "";
  return `
    <h2>実物の御朱印・湯朱印企画（期間つき）</h2>
    <ul class="ssr-list">${events.map(renderEventItem).join("")}</ul>`;
}

function renderPrefEventBlock(pref) {
  const today = jstToday();
  const events = SAUNA_EVENTS.filter((event) => event.prefecture === pref.name && !isArchivedEvent(event, today));
  if (!events.length) return "";
  return `
    <h2>${escapeHtml(pref.name)}のスタンプラリー・御朱印企画</h2>
    <ul class="ssr-list">${events.map(renderEventItem).join("")}</ul>
    <p><a href="/sauna-stamp-rally/">全国の主な企画と、常設型のサ印帳との違いを見る</a></p>`;
}

function renderPrefAwardBlock(pref, facilities) {
  const awarded = facilities
    .filter(isIndexableFacility)
    .map((facility) => ({ facility, years: saunachelinAwardYears(facility) }))
    .filter((entry) => entry.years.length);
  if (!awarded.length) return "";
  const shown = awarded.slice(0, 8);
  return `
    <h2>${escapeHtml(pref.name)}のサウナシュラン受賞施設（${awarded.length}件）</h2>
    <ul class="ssr-list">${shown.map(({ facility, years }) => `<li><a href="/facility/${encodeURIComponent(facility.id)}/">${escapeHtml(facility.name)}</a> <span>${years.join("・")}年 受賞（TTNE主催）</span></li>`).join("")}</ul>
    ${awarded.length > shown.length ? `<p>ほか${awarded.length - shown.length}件あります。アプリの検索で「サウナシュラン」と入力すると、受賞施設だけを表示できます。</p>` : `<p>アプリの検索で「サウナシュラン」と入力すると、全国の受賞施設だけを表示できます。</p>`}`;
}

function renderSearchIntentSsr(kind) {
  const isStampRally = kind === "stamp-rally";
  const title = isStampRally ? "サウナスタンプラリーをスマホで楽しむ" : "サウナ御朱印のように訪問記録を集める";
  const lead = isStampRally
    ? "サ印帳は、行ったサウナを押印し、次の一湯を探し、訪問後のサ活ログまで一つにつなぐ無料Webアプリです。期間限定のイベントではなく、全国の施設を対象にいつでも始められる常設型のスタンプラリーです。"
    : "サ印帳のサ印は、施設が発行する物理的な御朱印ではなく、自分の訪問記録を育てるデジタルな印です。";
  const sections = isStampRally
    ? [
        ["紙の台紙との違い", "スマホで施設検索、押印の取り消し、行きたい、お気に入り、県別進捗をまとめて管理できます。端末内の記録は書き出して保管できます。"],
        ["続けやすい遊び方", "最初は1湯、次はよく行く県の5湯を目標にします。称号や県マスターは実際の押印数だけで進み、購入や抽選で達成を早める仕組みはありません。"],
        ["訪問後まで役立つ", "セット数、サウナ・水風呂・休憩時間、ととのい体感を自分用サ活ログとして残せます。次回の入り方を考える材料になります。"],
      ]
    : [
        ["サ印と公式御朱印の違い", "サ印はサ印帳内の個人記録です。施設独自の御朱印、記念印、物理スタンプの発行有無を示すものではありません。"],
        ["訪問の証を育てる", "施設ごとのサ印、訪問日、メモ、県別コレクションを一緒に残せます。誤って押した場合は取り消せます。"],
        ["公開と非公開を分ける", "自分用メモとサ活ログは端末内に保存されます。口コミは投稿操作をした内容だけが公開対象になります。"],
      ];
  // 実物の企画・イベント型との違いは、検索意図に正直に答えるための節。
  // イベントの開催状態は掲載時点で確認できた範囲だけを書き、詳細は公式情報へ誘導する。
  const extraSections = isStampRally
    ? [
        ["イベント型スタンプラリーとの違い", "イベント型は、主催者が期間と対象施設を決めて実施するもので、景品や特典が用意される場合もあります。サ印帳は常設型で、期間も景品もなく、全国の候補を対象に自分の訪問記録として集めます。イベントに参加したい場合は、各主催者の公式案内を確認してください。"],
        ["称号と県別マスター", "押印数に応じて称号が上がります（1湯「はじめの一湯」から2000湯「神人サウナー」まで12段階）。都道府県ごとに施設を巡る県別マスターもあります。どちらも実際の押印数だけで進み、購入で早めることはできません。"],
      ]
    : [
        ["実物の御朱印・湯朱印という企画もある", "施設や地域が発行する実物の例として、SAUNiiiKと愛媛サウナ協議会の「愛媛サウナ巡礼 御朱印帳プロジェクト」（2026年3月発表）や、Visit Finlandの「サウナ御朱印帳」（フィンランドの対象サウナでスタンプを集める配布企画、2018〜2020年に実施）があります。名古屋の「湯朱印めぐり」と熊本の「御サ印帳」は、このページの下のほうに期間つきの一覧で掲載しています。いずれも主催者や施設が発行するもので、サ印帳のサ印とは別物です。開催状況や入手方法は各公式情報を確認してください。なお熊本の企画名は「御サ印帳」で、本サイト「サ印帳」とは関係ありません。"],
        ["紙の御朱印帳とデジタルの違い", "実物の御朱印・湯朱印は、企画や施設ごとに期間と場所が決まっていて、その場で受け取る記念になります。サ印は期間のないデジタルの訪問記録で、全国の候補施設を対象に自分のペースで集められます。記念として残すか、日々の通いの記録として積むかの違いで、どちらが良いというものではありません。"],
      ];
  const faqs = isStampRally
    ? [
        ["サ印帳のスタンプラリーに期間や参加費はありますか？", "期間の制限はなく、参加費も無料です。いつでも始めて、自分のペースで押印できます。景品や抽選はありません。達成の目安は、押印数で上がる称号（12段階）と県別マスターです。"],
        ["イベントのサウナスタンプラリーと何が違いますか？", "イベント型は主催者が期間と対象施設を決めて実施するもので、景品がある場合もあります。サ印帳は常設型で、全国の候補施設を対象に、期間を問わず自分の訪問記録として集める形です。イベントの参加方法は各主催者の案内を確認してください。"],
        ["押印はどうやって記録しますか？", "押印は、行った施設を自分で記録する自己申告が基本です。座標が確認できた施設では、60分の滞在チェックインによる自動押印も選べます。誤って押した場合は取り消しできます。"],
      ]
    : [
        ["サウナ御朱印とは何ですか？", "温浴施設や地域の企画で、訪問の証として施設側が発行する印の総称として使われています。名古屋の「湯朱印めぐり」や熊本の「御サ印帳」のように、自治体・観光団体・施設の企画として実施される例があります。実施の有無や入手方法は各企画の公式情報を確認してください。"],
        ["サ印帳のサ印と、施設の御朱印は同じものですか？", "同じものではありません。サ印はサ印帳の中で自分で押すデジタルな訪問記録で、施設が発行するものではありません。施設独自の御朱印や記念印があるかどうかは、施設ごとの公式情報で確認してください。"],
        ["サウナ御朱印はどこでもらえますか？", "施設が発行する御朱印・湯朱印は、実施している企画や施設でのみ受け取れます。常時もらえるものではないため、訪問前に企画・施設の公式情報を確認してください。サ印帳のサ印は、アプリ内で施設を選んで自分で押印する仕組みです。"],
      ];
  const route = isStampRally ? "sauna-stamp-rally" : "sauna-goshuin";
  const otherRoute = isStampRally ? "/sauna-goshuin/" : "/sauna-stamp-rally/";
  const otherLabel = isStampRally ? "サウナ御朱印とサ印の違い" : "サウナスタンプラリーの始め方";
  const guideRoute = ARTICLE_ROUTES[isStampRally ? 31 : 30]?.route || "/guide/";
  const guideLabel = isStampRally ? "サ活の記録、どうつける？（ガイド）" : "サウナの御朱印・湯朱印とは（ガイド）";
  const modifiedAt = LASTMOD.content || undefined;
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([["サ印帳", APP_URL], [title, `${APP_URL}/${route}/`]]),
      {
        "@type": "Article",
        headline: title,
        description: lead,
        inLanguage: "ja-JP",
        image: [OG_IMAGE],
        // 意図ページは監査ルールで datePublished の保持が必須（常設ページの公開日として
        // コンテンツ改訂日を使う本サイトの規約）。ガイド記事側は公開日データが無いため出さない。
        datePublished: modifiedAt,
        dateModified: modifiedAt,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${APP_URL}/${route}/` },
        author: { "@id": `${APP_URL}/#organization` },
        publisher: { "@id": `${APP_URL}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${APP_URL}/${route}/#faq`,
        inLanguage: "ja-JP",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  }, null, 2);
  return wrapSsr(`
    <nav aria-label="パンくず"><a href="/">サ印帳</a> › ${escapeHtml(title)}</nav>
    <p class="eyebrow">SAINCHO GUIDE</p>
    <h1>${escapeHtml(title)}</h1>
    ${modifiedAt ? `<p><small>最終更新 <time datetime="${modifiedAt}">${modifiedAt}</time></small></p>` : ""}
    <p>${escapeHtml(lead)}</p>
    <div class="ssr-grid">${sections.map(([heading, body]) => `<article><h2>${escapeHtml(heading)}</h2><p>${escapeHtml(body)}</p></article>`).join("")}</div>
    ${extraSections.map(([heading, body]) => `<h2>${escapeHtml(heading)}</h2><p>${escapeHtml(body)}</p>`).join("")}
    ${isStampRally ? renderEventsSection() : renderGoshuinEventsBlock()}
    <h2>3ステップで始める</h2>
    <ol><li>施設名、県、住所、特徴から候補を探す</li><li>訪問した施設だけを押印する</li><li>サ活ログを残し、次の一湯を選ぶ</li></ol>
    <h2>よくある質問</h2>
    <dl>${faqs.map(([question, answer]) => `<dt>${escapeHtml(question)}</dt><dd>${escapeHtml(answer)}</dd>`).join("")}</dl>
    <p><a href="/">全国のサウナを探して始める</a> / <a href="/guide/">安全な入り方を確認する</a> / <a href="${otherRoute}">${otherLabel}</a> / <a href="${guideRoute}">${guideLabel}</a></p>
  `, { jsonLd });
}

function wrapSsr(content, options = {}) {
  const jsonLd = options.jsonLd
    ? `<script type="application/ld+json">${escapeScript(options.jsonLd)}</script>`
    : "";
  return `
        <section class="ssr-content" id="ssrContent">
          ${content}
        </section>
        ${jsonLd}
        <script>document.querySelectorAll("[data-elapsed-since]").forEach(function(el){var days=Math.round((Date.parse(new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Tokyo"}).format(new Date()))-Date.parse(el.getAttribute("data-elapsed-since")))/86400000);if(Number.isFinite(days)&&days>0)el.textContent="（確認から"+days+"日経過）";else if(days===0)el.textContent="（本日確認）";});document.querySelectorAll("[data-event-start]").forEach(function(el){var today=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Tokyo"}).format(new Date());var start=el.getAttribute("data-event-start");var end=el.getAttribute("data-event-end");el.textContent=today<start?"（開催前）":(end&&today>end)?"（終了）":"（開催中）";});</script>
  `;
}

function breadcrumbJsonLd(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, item], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item,
    })),
  };
}

function localBusinessJsonLd(facility) {
  const address = getAddress(facility);
  const latitude = Number(facility.lat);
  const longitude = Number(facility.lng);
  const hasCoordinates = address && latitude >= 20 && latitude <= 46 && longitude >= 122 && longitude <= 154;
  const mapQuery = [facility.name, address || facility.city, facility.prefecture].filter(Boolean).join(" ");
  return {
    "@type": facility.source === "Airbnb" ? "LodgingBusiness" : "LocalBusiness",
    "@id": `${APP_URL}/facility/${encodeURIComponent(facility.id)}/#place`,
    name: facility.name,
    url: `${APP_URL}/facility/${encodeURIComponent(facility.id)}/`,
    description: getFacilityDescription(facility),
    address: address ? { "@type": "PostalAddress", streetAddress: address, addressLocality: facility.city || undefined, addressRegion: facility.prefecture, addressCountry: "JP" } : undefined,
    geo: hasCoordinates ? { "@type": "GeoCoordinates", latitude, longitude } : undefined,
    hasMap: mapQuery ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}` : undefined,
    sameAs: [facility.officialUrl].filter(Boolean),
    subjectOf: facility.sourceUrl ? { "@type": "WebPage", url: facility.sourceUrl } : undefined,
  };
}

function pageMeta(title, description) {
  return { title, description: cleanMeta(description) };
}

function getFacilityDescription(facility) {
  const address = getAddress(facility);
  const tags = displayTags(facility).slice(0, 4).join("、");
  const facts = getFacilityEvidence(facility)?.facts.slice(0, 2) || [];
  const head = `${facility.name}のサ印帳施設詳細。${facility.prefecture}${facility.city ? ` / ${facility.city}` : ""}の候補です。${address ? `住所は${address}。` : "住所未確認の候補は参照元とGoogle Maps検索で確認できます。"}`;
  const noteFor = (rows) => rows.length ? `施設情報は${rows.map((row) => `${row.label}: ${row.value}`).join("。")}。` : "";
  const tagPart = tags ? `特徴は${tags}。` : "";
  const suffix = "押印、行きたい、メモ、口コミ、経路、周辺サ飯、Gear導線を確認できます。";
  // 予算制: 180字の機械切断で文が途切れるのを防ぐ。超過時は決まった順序で落とす
  // （固定サフィックス → 特徴タグ → fact 2件目を文境界で短縮、それでも長ければ丸ごと落とす）。
  const BUDGET = 150;
  let text = head + noteFor(facts) + tagPart + suffix;
  if (text.length > BUDGET) text = head + noteFor(facts) + tagPart;
  if (text.length > BUDGET) text = head + noteFor(facts);
  if (text.length > BUDGET && facts.length > 1) {
    const shortened = { ...facts[1], value: String(facts[1].value).split("。")[0] };
    text = head + noteFor([facts[0], shortened]);
    if (text.length > BUDGET) text = head + noteFor([facts[0]]);
  }
  if (text.length > BUDGET && facts.length) {
    // fact 1件目自体が長い場合は文境界で短縮し、それでも収まらなければ見出し部のみにする。
    const shortened = { ...facts[0], value: String(facts[0].value).split("。")[0] };
    text = head + noteFor([shortened]);
    if (text.length > BUDGET) text = head;
  }
  return cleanMeta(text);
}

function displayTags(facility) {
  return getVerifiedFeatures(facility).slice(0, 6);
}

function getAddress(facility) {
  return String(facility.address || "").trim();
}

function getFacilityQuality(facility) {
  const address = getAddress(facility);
  if (address && facility.officialUrl) {
    return { label: "住所・公式リンク掲載あり", description: "営業時間、料金、休館日は訪問前に公式ページで再確認してください。" };
  }
  if (address) {
    return { label: "住所掲載あり", description: "参照ページで確認できた住所を掲載しています。最新の営業状況は参照元または公式情報で確認してください。" };
  }
  if (facility.city) {
    return { label: "市区町村まで掲載", description: "番地住所は未確認です。参照ページと地図検索で正確な場所を確認してください。" };
  }
  return { label: "施設名・都道府県のみ", description: "詳細情報の補完を待っている候補です。参照ページで最新情報を確認してください。" };
}

function isIndexableFacility(facility) {
  if (isFitnessFacility(facility)) return false;
  const hasVerifiedAddress = Boolean(getAddress(facility));
  const hasOfficialPage = /^https?:\/\//.test(String(facility.officialUrl || "").trim());
  const hasSpecificStayDetails = facility.source === "Airbnb"
    && Boolean(String(facility.city || "").trim())
    && String(facility.note || "").trim().length >= 12
    && /^https?:\/\//.test(String(facility.sourceUrl || "").trim());
  return hasVerifiedAddress || hasOfficialPage || hasSpecificStayDetails;
}

function slugify(value) {
  const slug = String(value)
    .normalize("NFC")
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  return slug || hash(value);
}

function cleanMeta(value) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, 180);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function escapeScript(value) {
  return String(value).replaceAll("</script", "<\\/script");
}

function unique(values) {
  return [...new Set(values.map((value) => String(value || "").trim()).filter(Boolean))];
}

function hash(value) {
  return createHash("sha256").update(value).digest("hex").slice(0, 8);
}

async function getGitLastModified(files) {
  try {
    const { stdout } = await execFileAsync("git", ["log", "-1", "--format=%cs", "--", ...files], { cwd: ROOT });
    const value = stdout.trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : "";
  } catch {
    return "";
  }
}

async function emit404() {
  const meta = {
    title: "ページが見つかりません | サ印帳",
    description: "指定されたページは見つかりません。サ印帳の検索画面からサウナ候補を探してください。",
    noindex: true,
  };
  await write("404.html", renderHtml("/404.html", meta, renderGenericSsr("ページが見つかりません", "検索画面からサウナ候補を探してください。")));
}

async function emitSitemaps(entries) {
  const pageEntries = entries.filter((entry) => !entry.loc.includes("/facility/"));
  const facilityEntries = entries.filter((entry) => entry.loc.includes("/facility/"));
  const sitemapFiles = [];
  await write("sitemap-pages.xml", urlset(pageEntries));
  sitemapFiles.push({ file: "sitemap-pages.xml", lastmod: maxLastmod(pageEntries) });
  for (let index = 0; index < facilityEntries.length; index += CHUNK_SIZE) {
    const file = `sitemap-facilities-${Math.floor(index / CHUNK_SIZE) + 1}.xml`;
    await write(file, urlset(facilityEntries.slice(index, index + CHUNK_SIZE)));
    const chunk = facilityEntries.slice(index, index + CHUNK_SIZE);
    sitemapFiles.push({ file, lastmod: maxLastmod(chunk) });
  }
  await write("sitemap.xml", [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...sitemapFiles.map(({ file, lastmod }) => `  <sitemap><loc>${APP_URL}/${file}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</sitemap>`),
    '</sitemapindex>',
    '',
  ].join("\n"));
}

function maxLastmod(entries) {
  return entries.map((entry) => entry.lastmod).filter(Boolean).sort().at(-1) || "";
}

async function emitFeed() {
  const items = [
    {
      title: "サウナスタンプラリーをスマホで楽しむ",
      route: "/sauna-stamp-rally/",
      description: "押印、行きたい、県別マスター、サ活ログを使ったサウナスタンプラリーの始め方。",
      updatedAt: LASTMOD.site,
    },
    {
      title: "サウナ御朱印のように訪問記録を集める",
      route: "/sauna-goshuin/",
      description: "施設公式の御朱印とサ印帳の個人記録の違い、サ印・メモ・サ活ログの使い方。",
      updatedAt: LASTMOD.site,
    },
    ...ARTICLE_ROUTES.map(({ article, route }) => ({ title: article.title, route, description: article.lead, updatedAt: LASTMOD.content })),
  ];
  await write("feed.xml", [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    "    <title>サ印帳 サウナ入門・更新情報</title>",
    `    <link>${APP_URL}/</link>`,
    "    <description>サウナスタンプラリー、サウナ御朱印、サウナの安全な入り方と記録方法を更新します。</description>",
    "    <language>ja</language>",
    `    <atom:link href="${APP_URL}/feed.xml" rel="self" type="application/rss+xml" />`,
    ...items.map((item) => [
      "    <item>",
      `      <title>${escapeXml(item.title)}</title>`,
      `      <link>${APP_URL}/${escapeXml(item.route.replace(/^\//, ""))}</link>`,
      `      <guid isPermaLink="true">${APP_URL}/${escapeXml(item.route.replace(/^\//, ""))}</guid>`,
      `      <description>${escapeXml(item.description)}</description>`,
      item.updatedAt ? `      <pubDate>${new Date(`${item.updatedAt}T00:00:00Z`).toUTCString()}</pubDate>` : "",
      "    </item>",
    ].filter(Boolean).join("\n")),
    "  </channel>",
    "</rss>",
    "",
  ].join("\n"));
}

function urlset(entries) {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map((entry) => `  <url><loc>${escapeXml(entry.loc)}</loc>${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ""}</url>`),
    '</urlset>',
    '',
  ].join("\n");
}

function escapeXml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}

function dedupeFacilitiesForSeo(facilities) {
  const keyToIndex = new Map();
  const groups = [];
  for (const facility of facilities) {
    const keys = facilityDuplicateKeys(facility);
    const existingIndex = keys.map((key) => keyToIndex.get(key)).find(Number.isInteger);
    if (existingIndex === undefined) {
      const index = groups.push({ facility: { ...facility }, members: [facility.id, ...(facility.legacyIds || [])] }) - 1;
      keys.forEach((key) => keyToIndex.set(key, index));
      continue;
    }
    const group = groups[existingIndex];
    group.members.push(facility.id, ...(facility.legacyIds || []));
    group.facility = mergeFacilityRecords(group.facility, facility);
    facilityDuplicateKeys(group.facility).forEach((key) => keyToIndex.set(key, existingIndex));
    keys.forEach((key) => keyToIndex.set(key, existingIndex));
  }
  const aliases = new Map();
  for (const group of groups) {
    for (const id of unique(group.members)) {
      if (id && id !== group.facility.id) aliases.set(id, group.facility);
    }
  }
  return { facilities: groups.map((group) => group.facility), aliases };
}

function facilityDuplicateKeys(facility) {
  const name = normalizeBasic(facility.name);
  const names = unique([
    normalizeFacilityName(name),
    ...name.split(/[\/／|｜]/).map(normalizeFacilityName),
  ]).filter((value) => value.length >= 4);
  const identity = getFacilityEvidence(facility);
  return [...names.map((value) => `${facility.prefecture || ""}:${value}`), ...(identity?.ids.length > 1 ? [`official-identity:${identity.ids[0]}`] : [])];
}

function normalizeFacilityName(value) {
  return normalizeBasic(value)
    .split(/[\/／|｜]/)[0]
    .replace(/（[^）]*）/g, "")
    .replace(/\([^)]*\)/g, "")
    .replace(/[\s\u3000・･＆&.．,、/／\\+＋=＝_*＊'’"“”`´\-‐‑‒–—―ーｰ－−﹘﹣─━〜～~〰（）()【】\[\]「」『』：:]/g, "")
    .replace(/天然温泉かけ流し/g, "")
    .replace(/プレミア/g, "");
}

function normalizeBasic(value) {
  return String(value || "").normalize("NFKC").trim().toLowerCase().replace(/\s+/g, " ");
}

function mergeFacilityRecords(primary, secondary) {
  return {
    ...secondary,
    ...primary,
    id: primary.id,
    name: primary.name.includes("/") && !secondary.name.includes("/") ? secondary.name : primary.name,
    address: primary.address || secondary.address,
    addressSource: primary.addressSource || secondary.addressSource,
    city: primary.city || secondary.city,
    lat: primary.lat || secondary.lat,
    lng: primary.lng || secondary.lng,
    image: primary.image || secondary.image,
    officialUrl: primary.officialUrl || secondary.officialUrl,
    rating: primary.rating || secondary.rating,
    reviewCount: primary.reviewCount || secondary.reviewCount,
    features: unique([...(secondary.features || []), ...(primary.features || [])]),
    tags: unique([...(secondary.tags || []), ...(primary.tags || [])]),
    source: primary.source || secondary.source,
    sourceUrl: primary.sourceUrl || secondary.sourceUrl,
  };
}

async function writeRoute(route, html) {
  if (route === "/") {
    await write("index.html", html);
    return;
  }
  const target = path.join(OUT, decodeURIComponent(route.replace(/^\/+/, "")), "index.html");
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, html);
}

async function read(file) {
  return readSource(file, "utf8");
}

async function write(file, content) {
  const target = path.join(OUT, file);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, content);
}

async function copyFile(file) {
  const target = path.join(OUT, file);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, await readSource(file));
}

async function readSource(file, encoding) {
  const source = path.join(ROOT, file);
  if (process.platform === "darwin") {
    await execFileAsync("/usr/bin/brctl", ["download", source]).catch(() => null);
  }
  try {
    return await fs.readFile(source, { encoding, signal: AbortSignal.timeout(60_000) });
  } catch (error) {
    if (error?.name === "AbortError") {
      throw new Error(`Timed out while hydrating build input: ${file}`);
    }
    throw error;
  }
}

async function copyAssetFiles(files) {
  for (const file of files) {
    await copyFile(file);
  }
}

async function rotatePreviousOutput() {
  try {
    await fs.rename(OUT, path.join(ROOT, `.public-stale-${Date.now()}`));
  } catch (error) {
    if (error.code !== "ENOENT") {
      await fs.rm(OUT, { recursive: true, force: true });
    }
  }
  // 過去のビルド残骸を必ず削除する（放置するとiCloud同期対象のゴミが増え続ける）。
  const entries = await fs.readdir(ROOT).catch(() => []);
  await Promise.all(
    entries
      .filter((name) => name.startsWith(".public-stale-"))
      .map((name) => fs.rm(path.join(ROOT, name), { recursive: true, force: true }).catch(() => null))
  );
}

async function pruneDuplicateOutputFiles() {
  const duplicatePattern = / \d+(?=\.[^/]+$)/;
  const walk = async (directory) => {
    const entries = await fs.readdir(directory, { withFileTypes: true }).catch(() => []);
    await Promise.all(entries.map(async (entry) => {
      const target = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        await walk(target);
        return;
      }
      if (duplicatePattern.test(entry.name)) await fs.rm(target, { force: true });
    }));
  };
  await walk(OUT);
}
