import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PREFECTURES, SEED_FACILITIES } from "../data.js";
import { GEAR_PRODUCTS, SAUNA_ARTICLES } from "../content.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "public");
const APP_URL = "https://saincho-sauna-stamp-rally.pages.dev";
const OG_IMAGE = `${APP_URL}/assets/saincho-og-v2.png`;
const CHUNK_SIZE = 2500;
const ASSET_FILES = [
  "assets/saincho-header-ritual.webp",
  "assets/saincho-og-v2.png",
  "assets/achievement-mascot.webp",
  "assets/sauna-hero.webp",
  "assets/screenshot-mobile.png",
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
    },
  ],
};

await rotatePreviousOutput();
await fs.mkdir(OUT, { recursive: true });

const sourceIndex = await read("index.html");
const sourceStyles = await read("styles.css");
const sourceData = await read("data.js");
const sourceContent = await read("content.js");
const sourceSw = await read("sw.js");
const dataFile = `data.${hash(sourceData)}.js`;
const contentFile = `content.${hash(sourceContent)}.js`;
const stylesFile = `styles.${hash(sourceStyles)}.css`;
const appSource = (await read("app.js"))
  .replace('const DATA_MODULE_PATH = "./data.js";', `const DATA_MODULE_PATH = "./${dataFile}";`)
  .replace('const CONTENT_MODULE_PATH = "./content.js";', `const CONTENT_MODULE_PATH = "./${contentFile}";`);
const appFile = `app.${hash(appSource)}.js`;

await write(dataFile, sourceData);
await write(contentFile, sourceContent);
await write(stylesFile, sourceStyles);
await write(appFile, appSource);
await write("sw.js", sourceSw);

await copyFile("manifest.webmanifest");
await copyFile("llms.txt");
await copyFile("google4f1c271dfaceddbb.html");
await copyAssetFiles(ASSET_FILES);
await copyAssetFiles(ICON_FILES);
await copyFile("_headers");
await write("_redirects", [
  "/api/* /api/:splat 200",
  "/sitemap.xml /sitemap.xml 200",
  "/robots.txt /robots.txt 200",
  "/404.html /404.html 404",
  "",
].join("\n"));

const template = sourceIndex
  .replace(/href="\.\/styles\.css\?v=[^"]+"/, `href="./${stylesFile}"`)
  .replace(/src="\.\/app\.js\?v=[^"]+"/, `src="./${appFile}"`);

const urls = [];
await emitPage("/", pageMeta("サ印帳 | 全国サウナスタンプラリー・サ活記録アプリ", "全国約5000件のサウナ候補から行った施設を押印。サウナ検索、サウナ御朱印、サ活記録、県別マスター、ランキング、サ飯、Gearをスマホで使える無料PWAです。"), renderHomeSsr());
await emitStaticRoute("/gear/", "Gear | サ印帳", "サウナハット、サウナマット、水分補給、サウナバッグなど、サウナ前後に役立つ30カテゴリのGearをAmazon・楽天のレビュー検索導線で比較できます。", renderGearSsr());
await emitStaticRoute("/guide/", "サウナ入門 | サ印帳", "初めてのサウナでも迷いにくい入り方、安全、マナー、水分補給、持ち物、メモの残し方を30記事で確認できます。", renderGuideSsr(SAUNA_ARTICLES));
await emitStaticRoute("/ranking/", "サ印ランキング | サ印帳", "サ印数と称号で上位10名を表示するランキング。押印の上達実感と次の一湯の動機づくりに使えます。", renderGenericSsr("サ印ランキング", "ニックネーム、サ印数、称号で全国のサウナーと進捗を比べられます。"));
await emitStaticRoute("/passport/", "サ印 | サ印帳", "全国と都道府県別のサ印収集状況を確認。県マスター、称号、押印済み施設を一目で振り返れます。", renderGenericSsr("サ印", "全国・県別のサ印進捗と称号を確認できます。"));
await emitStaticRoute("/add/", "サウナを追加 | サ印帳", "候補にないサウナを都道府県、住所、特徴付きで登録できます。KV接続時は他ユーザーにも公開候補として表示されます。", renderGenericSsr("候補にないサウナを追加", "施設名、都道府県、住所、特徴を追加して、自分と他のユーザーのサウナ探索を育てられます。"));
await emitStaticRoute("/sameshi/", "サ飯 | サ印帳", "サウナーに人気のサ飯候補を県別に確認。施設周辺の飲食店検索にもつながるサ活後の導線です。", renderGenericSsr("サ飯", "都道府県別のサ飯候補と、施設周辺の飲食店検索でサウナ後の一食を探せます。"));
await emitStaticRoute("/stay/", "サウナ合宿先 | サ印帳", "サウナ付き宿や遠征先を探す専用ページ。施設詳細とは分けて、宿泊先選びの比較導線をまとめています。", renderGenericSsr("サウナ合宿先", "Airbnbなどのサウナ付き宿を、施設詳細とは別ページで比較できます。"));
await emitStaticRoute("/contact/", "掲載・お問い合わせ | サ印帳", "サウナ施設、旅館、民泊、飲食店向けに広告バナー、プレミアム個別ページ、サ飯送客、サウナ合宿先掲載の相談を受け付けます。", renderGenericSsr("掲載・お問い合わせ", "広告掲載、プレミアム個別ページ、内容修正、権利連絡、サ飯掲載の相談窓口です。"));

for (const pref of PREFECTURES) {
  const facilities = SEED_FACILITIES.filter((facility) => facility.prefecture === pref.name);
  await emitStaticRoute(`/pref/${pref.slug}/`, `${pref.name}のサウナ検索 | サ印帳`, `${pref.name}のサウナ候補${facilities.length}件をサ印帳で検索。押印、行きたい、経路、住所検索、特徴タグから次の一湯を探せます。`, renderPrefSsr(pref, facilities));
}

for (const { article, route } of ARTICLE_ROUTES) {
  await emitStaticRoute(route, `${article.title} | サウナ入門 | サ印帳`, `${article.title}。${article.lead} サ印帳のサウナ入門記事として、初心者が安全に楽しむための要点をまとめています。`, renderArticleSsr(article, route));
}

for (const facility of SEED_FACILITIES) {
  await emitStaticRoute(`/facility/${encodeURIComponent(facility.id)}/`, `${facility.name} | サ印帳 施設詳細`, getFacilityDescription(facility), renderFacilitySsr(facility));
}

await emit404();
await emitSitemaps(urls);
await write("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${APP_URL}/sitemap.xml\n`);

console.log(`Built ${urls.length} SEO pages into ${path.relative(ROOT, OUT)}/`);
console.log(`Assets: ${appFile}, ${dataFile}, ${contentFile}, ${stylesFile}`);

async function emitStaticRoute(route, title, description, ssrHtml) {
  await emitPage(route, pageMeta(title, description), ssrHtml);
}

async function emitPage(route, meta, ssrHtml) {
  const html = renderHtml(route, meta, ssrHtml);
  await writeRoute(route, html);
  urls.push({ loc: `${APP_URL}${route === "/" ? "/" : route}`, lastmod: today() });
}

function renderHtml(route, meta, ssrHtml) {
  const url = `${APP_URL}${route === "/" ? "/" : route}`;
  const seo = [
    `    <meta name="description" content="${escapeAttr(meta.description)}" />`,
    `    <meta name="robots" content="${meta.noindex ? "noindex, follow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}" />`,
    `    <meta name="googlebot" content="${meta.noindex ? "noindex, follow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}" />`,
    `    <meta name="application-name" content="サ印帳" />`,
    `    <meta name="format-detection" content="telephone=no" />`,
    `    <meta name="keywords" content="${escapeAttr(meta.keywords || "サ印帳,サウナ,サウナスタンプラリー,サウナ御朱印,サウナ検索,サウナ記録,サ活")}" />`,
    `    <link rel="canonical" href="${escapeAttr(url)}" />`,
    `    <meta property="og:locale" content="ja_JP" />`,
    `    <meta property="og:type" content="${meta.type || "website"}" />`,
    `    <meta property="og:site_name" content="サ印帳" />`,
    `    <meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    `    <meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `    <meta property="og:url" content="${escapeAttr(url)}" />`,
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
    // サイト全体のFAQ/Dataset/OfferCatalog構造化データはトップのみに置き、
    // 下層ページでは WebSite / Organization の最小グラフに差し替える。
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">${escapeScript(JSON.stringify(SUBPAGE_SITE_LD))}</script>`
    );
  }
  return html.replace("<!-- SSR:SLOT -->", ssrHtml);
}

function renderHomeSsr() {
  const total = SEED_FACILITIES.length;
  const prefLinks = PREFECTURES
    .map((pref) => `<a href="/pref/${pref.slug}/">${escapeHtml(pref.name)}</a>`)
    .join("");
  return wrapSsr(`
    <p class="eyebrow">SAUNA STAMP RALLY</p>
    <h1>サ印帳</h1>
    <p>全国約${total}件のサウナ候補を検索し、行った施設をサ印として押印できる無料のサウナスタンプラリーです。</p>
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
      <a href="/guide/">サウナ入門</a><a href="/gear/">Gear</a><a href="/sameshi/">サ飯</a><a href="/stay/">サウナ合宿先</a><a href="/ranking/">ランキング</a><a href="/contact/">掲載・お問い合わせ</a>
    </nav>
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
        mainEntityOfPage: `${APP_URL}${route}`,
        publisher: { "@id": `${APP_URL}/#organization` },
      },
    ],
  }, null, 2);
  return wrapSsr(`
    <nav aria-label="パンくず"><a href="/">サ印帳</a> › <a href="/guide/">サウナ入門</a> › ${escapeHtml(article.title)}</nav>
    <p class="eyebrow">${escapeHtml(article.category)}</p>
    <h1>${escapeHtml(article.title)}</h1>
    <p>${escapeHtml(article.lead)}</p>
    <ul>${article.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
    <p><strong>実践:</strong> ${escapeHtml(article.action)}</p>
    <p><strong>注意:</strong> ${escapeHtml(article.caution)}</p>
    <p><a href="/guide/">サウナ入門の記事一覧へ戻る</a></p>
  `, { jsonLd });
}

function renderPrefSsr(pref, facilities) {
  const facilityLinks = facilities
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
        numberOfItems: facilities.length,
        itemListElement: facilities.slice(0, 30).map((facility, index) => ({
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
    <p>${escapeHtml(pref.name)}の候補${facilities.length}件を収録。住所、特徴、参照元を見ながら次の一湯を選べます。</p>
    <ul class="ssr-list">${facilityLinks}</ul>
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
  const breadcrumb = prefSlug
    ? `<nav aria-label="パンくず"><a href="/">サ印帳</a> › <a href="/pref/${prefSlug}/">${escapeHtml(facility.prefecture)}のサウナ</a> › ${escapeHtml(facility.name)}</nav>`
    : `<nav aria-label="パンくず"><a href="/">サ印帳</a> › ${escapeHtml(facility.name)}</nav>`;
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
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
      localBusinessJsonLd(facility),
    ],
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
    </dl>
    <p>${escapeHtml(getFacilityDescription(facility))}</p>
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
  return {
    "@type": facility.source === "Airbnb" ? "LodgingBusiness" : "LocalBusiness",
    "@id": `${APP_URL}/facility/${encodeURIComponent(facility.id)}/#place`,
    name: facility.name,
    url: `${APP_URL}/facility/${encodeURIComponent(facility.id)}/`,
    image: OG_IMAGE,
    address: address ? { "@type": "PostalAddress", streetAddress: address, addressRegion: facility.prefecture, addressCountry: "JP" } : undefined,
    sameAs: [facility.officialUrl, facility.sourceUrl].filter(Boolean),
  };
}

function pageMeta(title, description) {
  return { title, description: cleanMeta(description) };
}

function getFacilityDescription(facility) {
  const address = getAddress(facility);
  const tags = displayTags(facility).slice(0, 4).join("、");
  return cleanMeta(`${facility.name}のサ印帳施設詳細。${facility.prefecture}${facility.city ? ` / ${facility.city}` : ""}の候補です。${address ? `住所は${address}。` : "住所未確認の候補は参照元とGoogle Maps検索で確認できます。"}${tags ? `特徴は${tags}。` : ""}押印、行きたい、メモ、口コミ、経路、周辺サ飯、Gear導線をまとめて確認できます。`);
}

function displayTags(facility) {
  return unique([...(facility.features || []), ...(facility.tags || [])])
    .filter((tag) => tag && !HIDDEN_TAGS.has(tag))
    .slice(0, 6);
}

function getAddress(facility) {
  return String(facility.address || "").trim();
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

function today() {
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
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
  sitemapFiles.push("sitemap-pages.xml");
  for (let index = 0; index < facilityEntries.length; index += CHUNK_SIZE) {
    const file = `sitemap-facilities-${Math.floor(index / CHUNK_SIZE) + 1}.xml`;
    await write(file, urlset(facilityEntries.slice(index, index + CHUNK_SIZE)));
    sitemapFiles.push(file);
  }
  await write("sitemap.xml", [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...sitemapFiles.map((file) => `  <sitemap><loc>${APP_URL}/${file}</loc><lastmod>${today()}</lastmod></sitemap>`),
    '</sitemapindex>',
    '',
  ].join("\n"));
}

function urlset(entries) {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map((entry) => `  <url><loc>${escapeXml(entry.loc)}</loc><lastmod>${entry.lastmod}</lastmod></url>`),
    '</urlset>',
    '',
  ].join("\n");
}

function escapeXml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
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
  return fs.readFile(path.join(ROOT, file), "utf8");
}

async function write(file, content) {
  const target = path.join(OUT, file);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, content);
}

async function copyFile(file) {
  const target = path.join(OUT, file);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.copyFile(path.join(ROOT, file), target);
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
