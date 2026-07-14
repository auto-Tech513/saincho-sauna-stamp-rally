import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import { DATASET_META, PREFECTURES, SEED_FACILITIES } from "../data.js";
import { GEAR_PRODUCTS, SAUNA_ARTICLES } from "../content.js";

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
const { facilities: CANONICAL_FACILITIES, aliases: FACILITY_ALIASES } = dedupeFacilitiesForSeo(SEED_FACILITIES);
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
  data: await getGitLastModified(["data.js"]),
  content: await getGitLastModified(["content.js"]),
};

const sourceIndex = await read("index.html");
const sourceStyles = await read("styles.css");
const sourceData = await read("data.js");
const sourceContent = await read("content.js");
const sourceNearby = await read("nearby.js");
const sourceSw = await read("sw.js");
const dataFile = `data.${hash(sourceData)}.js`;
const contentFile = `content.${hash(sourceContent)}.js`;
const stylesFile = `styles.${hash(sourceStyles)}.css`;
const nearbyFile = `nearby.${hash(sourceNearby)}.js`;
const appSource = (await read("app.js"))
  .replace('from "./nearby.js";', `from "./${nearbyFile}";`)
  .replace('const DATA_MODULE_PATH = "./data.js";', `const DATA_MODULE_PATH = "./${dataFile}";`)
  .replace('const CONTENT_MODULE_PATH = "./content.js";', `const CONTENT_MODULE_PATH = "./${contentFile}";`);
const appFile = `app.${hash(appSource)}.js`;

await write(dataFile, sourceData);
await write(contentFile, sourceContent);
await write(stylesFile, sourceStyles);
await write(nearbyFile, sourceNearby);
await write(appFile, appSource);
await write("sw.js", sourceSw);
await write(`${INDEXNOW_KEY}.txt`, INDEXNOW_KEY);

await copyFile("manifest.webmanifest");
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
await emitPage("/", { ...pageMeta("サ印帳 | 全国サウナスタンプラリー・サ活記録アプリ", "全国約5000件のサウナ候補から行った施設を押印。サウナ検索、サウナ御朱印、サ活記録、県別マスター、ランキング、サ飯、Gearをスマホで使える無料PWAです。"), lastmod: LASTMOD.site }, renderHomeSsr());
await emitStaticRoute("/sauna-stamp-rally/", "サウナスタンプラリーをスマホで楽しむ | サ印帳", "サウナスタンプラリーの始め方、紙との違い、押印・行きたい・県別マスター・サ活ログの使い分けを、無料Webアプリのサ印帳で具体的に確認できます。", renderSearchIntentSsr("stamp-rally"), LASTMOD.content);
await emitStaticRoute("/sauna-goshuin/", "サウナ御朱印のように訪問記録を集める | サ印帳", "サウナ御朱印のように訪問の証をスマホへ残す方法を解説。施設公式の御朱印や物理スタンプとの違い、サ印・メモ・サ活ログの使い方を確認できます。", renderSearchIntentSsr("goshuin"), LASTMOD.content);
await emitStaticRoute("/gear/", "Gear | サ印帳", "サウナハット、サウナマット、水分補給、サウナバッグなど、サウナ前後に役立つ30カテゴリのGearをAmazon・楽天のレビュー検索導線で比較できます。", renderGearSsr(), LASTMOD.content);
await emitStaticRoute("/guide/", "サウナ入門 | サ印帳", "初めてのサウナでも迷いにくい入り方、安全、マナー、水分補給、持ち物、メモの残し方を30記事で確認できます。", renderGuideSsr(SAUNA_ARTICLES), LASTMOD.content);
await emitStaticRoute("/ranking/", "サ印ランキング | サ印帳", "サ印数と称号で上位10名を表示するランキング。押印の上達実感と次の一湯の動機づくりに使えます。", renderGenericSsr("サ印ランキング", "ニックネーム、サ印数、称号で全国のサウナーと進捗を比べられます。"));
await emitStaticRoute("/passport/", "サ印 | サ印帳", "全国と都道府県別のサ印収集状況を確認。県マスター、称号、押印済み施設を一目で振り返れます。", renderGenericSsr("サ印", "全国・県別のサ印進捗と称号を確認できます。"));
await emitStaticRoute("/add/", "サウナを追加 | サ印帳", "候補にないサウナを都道府県、住所、特徴付きで登録できます。KV接続時は他ユーザーにも公開候補として表示されます。", renderGenericSsr("候補にないサウナを追加", "施設名、都道府県、住所、特徴を追加して、自分と他のユーザーのサウナ探索を育てられます。"));
await emitStaticRoute("/sameshi/", "サ飯 | サ印帳", "サウナーに人気のサ飯候補を県別に確認。施設周辺の飲食店検索にもつながるサ活後の導線です。", renderGenericSsr("サ飯", "都道府県別のサ飯候補と、施設周辺の飲食店検索でサウナ後の一食を探せます。"), LASTMOD.content);
await emitStaticRoute("/community/", "サ活コミュニティ | サ印帳", "都道府県別のサ活募集を作成・確認できるサウナー向けコミュニティ。連絡先を公開せず、参加予定を共有できます。", renderGenericSsr("サ活コミュニティ", "都道府県、日時、集合場所を指定してサ活仲間を募集できます。連絡先や位置情報は公開しません。"));
await emitStaticRoute("/stay/", "サウナ合宿先 | サ印帳", "サウナ付き宿や遠征先を探す専用ページ。施設詳細とは分けて、宿泊先選びの比較導線をまとめています。", renderGenericSsr("サウナ合宿先", "Airbnbなどのサウナ付き宿を、施設詳細とは別ページで比較できます。"));
await emitStaticRoute("/contact/", "掲載・お問い合わせ | サ印帳", "サウナ施設、旅館、民泊、飲食店向けに広告バナー、プレミアム個別ページ、サ飯送客、サウナ合宿先掲載の相談を受け付けます。", renderGenericSsr("掲載・お問い合わせ", "広告掲載、プレミアム個別ページ、内容修正、権利連絡、サ飯掲載の相談窓口です。"));
await emitStaticRoute("/about/", "運営・データ方針 | サ印帳", "サ印帳の施設データ確認基準、更新方法、広告・アフィリエイト方針、プライバシー、内容修正窓口を公開しています。", renderAboutSsr(), LASTMOD.site);

for (const pref of PREFECTURES) {
  const facilities = CANONICAL_FACILITIES.filter((facility) => facility.prefecture === pref.name);
  const verifiedFacilities = facilities.filter(isIndexableFacility).length;
  await emitStaticRoute(`/pref/${pref.slug}/`, `${pref.name}のサウナ検索 | サ印帳`, `${pref.name}のサウナ候補${facilities.length}件をアプリ内で検索。番地住所・公式URL・固有の宿情報を確認できた${verifiedFacilities}件は検索エンジン向け一覧から個別ページへ移動できます。`, renderPrefSsr(pref, facilities), LASTMOD.data);
}

for (const { article, route } of ARTICLE_ROUTES) {
  await emitStaticRoute(route, `${article.title} | サウナ入門 | サ印帳`, `${article.title}。${article.lead} サ印帳のサウナ入門記事として、初心者が安全に楽しむための要点をまとめています。`, renderArticleSsr(article, route), LASTMOD.content);
}

for (const facility of CANONICAL_FACILITIES) {
  const titleArea = [facility.prefecture, facility.city].filter(Boolean).join("・");
  const meta = {
    ...pageMeta(`${facility.name}${titleArea ? `（${titleArea}）` : ""} | サ印帳 施設詳細`, getFacilityDescription(facility)),
    lastmod: LASTMOD.data,
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
  const total = CANONICAL_FACILITIES.length;
  const prefLinks = PREFECTURES
    .map((pref) => `<a href="/pref/${pref.slug}/">${escapeHtml(pref.name)}</a>`)
    .join("");
  return wrapSsr(`
    <p class="eyebrow">SAUNA STAMP RALLY</p>
    <h1>サ印帳</h1>
    <h2>サ印帳とは</h2>
    <p>全国約${total}件のサウナ候補を検索し、実際に行った施設を「サ印」として記録できる無料のサウナスタンプラリー・サ活記録アプリです。施設が発行する物理スタンプではなく、自分の訪問履歴をスマホで育てます。</p>
    <h2>検索から次のサ活まで</h2>
    <ul>
      <li>施設カードから詳細、経路、周辺サ飯、Gearを確認できます。</li>
      <li>県別マスター、称号、ランキングで続ける理由が見えます。</li>
      <li>スマホのホーム画面に追加して、次のサ活を1タップで開けます。</li>
    </ul>
    <nav class="ssr-links" aria-label="都道府県別サウナ検索">
      <strong>都道府県からサウナを探す</strong>
      ${prefLinks}
    </nav>
    <nav class="ssr-links" aria-label="主要ページ">
      <a href="/guide/">サウナ入門</a><a href="/gear/">Gear</a><a href="/sameshi/">サ飯</a><a href="/community/">サ活コミュニティ</a><a href="/stay/">サウナ合宿先</a><a href="/ranking/">ランキング</a><a href="/about/">運営・データ方針</a><a href="/contact/">掲載・お問い合わせ</a>
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
    .map(({ article, route }) => `<li><a href="${escapeAttr(route)}">${escapeHtml(article.title)}</a> <span>${escapeHtml(article.category)}</span></li>`)
    .join("");
  return wrapSsr(`
    <p class="eyebrow">GUIDE</p>
    <h1>初めてでも迷わないサウナ入門</h1>
    <p>安全、入り方、マナー、水分補給、道具、記録まで${articles.length}本の実用記事を用意しています。</p>
    <ul class="ssr-list">${articleLinks}</ul>
    <p><a href="/">サ印帳トップへ戻る</a></p>
  `);
}

function renderArticleSsr(article, route) {
  const modifiedAt = LASTMOD.content || undefined;
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
        datePublished: modifiedAt,
        dateModified: modifiedAt,
        author: { "@id": `${APP_URL}/#organization` },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${APP_URL}${route}` },
        publisher: { "@id": `${APP_URL}/#organization` },
      },
    ],
  }, null, 2);
  return wrapSsr(`
    <nav aria-label="パンくず"><a href="/">サ印帳</a> › <a href="/guide/">サウナ入門</a> › ${escapeHtml(article.title)}</nav>
    <p class="eyebrow">${escapeHtml(article.category)}</p>
    <h1>${escapeHtml(article.title)}</h1>
    ${modifiedAt ? `<p><small>最終更新 <time datetime="${modifiedAt}">${modifiedAt}</time></small></p>` : ""}
    <p>${escapeHtml(article.lead)}</p>
    <ul>${article.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
    <p><strong>実践:</strong> ${escapeHtml(article.action)}</p>
    <p><strong>注意:</strong> ${escapeHtml(article.caution)}</p>
    <p><a href="/guide/">サウナ入門の記事一覧へ戻る</a></p>
  `, { jsonLd });
}

function renderPrefSsr(pref, facilities) {
  const indexableFacilities = facilities.filter(isIndexableFacility);
  const facilityLinks = indexableFacilities
    .map((facility) => `<li><a href="/facility/${encodeURIComponent(facility.id)}/">${escapeHtml(facility.name)}</a>${facility.city ? ` <span>${escapeHtml(facility.city)}</span>` : ""}</li>`)
    .join("");
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
        itemListElement: indexableFacilities.slice(0, 30).map((facility, index) => ({
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
    <ul class="ssr-list">${facilityLinks}</ul>
    <p>未確認候補は検索画面で確認できます。番地、営業状況、料金は参照元または施設公式情報を訪問前に再確認してください。</p>
    <p><a href="/">サ印帳トップへ戻る</a></p>
  `, { jsonLd });
}

function renderFacilitySsr(facility) {
  const tags = displayTags(facility);
  const address = getAddress(facility);
  const area = [facility.prefecture, facility.city].filter(Boolean).join(" / ");
  const prefSlug = PREF_SLUG.get(facility.prefecture) || "";
  const facilityUrl = `${APP_URL}/facility/${encodeURIComponent(facility.id)}/`;
  const source = facility.sourceUrl ? `<a href="${escapeAttr(facility.sourceUrl)}" rel="nofollow noreferrer">${escapeHtml(facility.source || "参照")}</a>` : escapeHtml(facility.source || "参照元確認中");
  const official = facility.officialUrl ? `<a href="${escapeAttr(facility.officialUrl)}" rel="nofollow noreferrer">施設公式ページ</a>` : "";
  const note = String(facility.note || "").trim();
  const quality = getFacilityQuality(facility);
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
      <div><dt>特徴</dt><dd>${escapeHtml(tags.length ? tags.join(" / ") : "施設詳細")}</dd></div>
      <div><dt>参照</dt><dd>${source}</dd></div>
      ${official ? `<div><dt>公式</dt><dd>${official}</dd></div>` : ""}
      ${note ? `<div><dt>施設情報</dt><dd>${escapeHtml(note)}</dd></div>` : ""}
      <div><dt>確認状態</dt><dd>${escapeHtml(quality.label)}</dd></div>
    </dl>
    <p>${escapeHtml(getFacilityDescription(facility))}</p>
    <p>${escapeHtml(quality.description)}</p>
    <p><a href="/contact/">情報修正を知らせる</a></p>
    ${prefSlug ? `<p><a href="/pref/${prefSlug}/">${escapeHtml(facility.prefecture)}のサウナ一覧へ戻る</a></p>` : ""}
  `, { jsonLd });
}

function renderGenericSsr(title, text) {
  return wrapSsr(`
    <p class="eyebrow">SAINCHO</p>
    <h1>${escapeHtml(title)}</h1>
    <p>${escapeHtml(text)}</p>
  `);
}

function renderSearchIntentSsr(kind) {
  const isStampRally = kind === "stamp-rally";
  const title = isStampRally ? "サウナスタンプラリーをスマホで楽しむ" : "サウナ御朱印のように訪問記録を集める";
  const lead = isStampRally
    ? "サ印帳は、行ったサウナを押印し、次の一湯を探し、訪問後のサ活ログまで一つにつなぐ無料Webアプリです。"
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
  const route = isStampRally ? "sauna-stamp-rally" : "sauna-goshuin";
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
        datePublished: modifiedAt,
        dateModified: modifiedAt,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${APP_URL}/${route}/` },
        author: { "@id": `${APP_URL}/#organization` },
        publisher: { "@id": `${APP_URL}/#organization` },
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
    <h2>3ステップで始める</h2>
    <ol><li>施設名、県、住所、特徴から候補を探す</li><li>訪問した施設だけを押印する</li><li>サ活ログを残し、次の一湯を選ぶ</li></ol>
    <p><a href="/">全国のサウナを探して始める</a> / <a href="/guide/">安全な入り方を確認する</a></p>
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
  const hasCoordinates = address && Number.isFinite(latitude) && Number.isFinite(longitude);
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
  const note = String(facility.note || "").trim();
  return cleanMeta(`${facility.name}のサ印帳施設詳細。${facility.prefecture}${facility.city ? ` / ${facility.city}` : ""}の候補です。${address ? `住所は${address}。` : "住所未確認の候補は参照元とGoogle Maps検索で確認できます。"}${note ? `施設情報は${note}。` : ""}${tags ? `特徴は${tags}。` : ""}押印、行きたい、メモ、口コミ、経路、周辺サ飯、Gear導線を確認できます。`);
}

function displayTags(facility) {
  return unique([...(facility.features || []), ...(facility.tags || [])])
    .filter((tag) => tag && !HIDDEN_TAGS.has(tag))
    .slice(0, 6);
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
  return names.map((value) => `${facility.prefecture || ""}:${value}`);
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
