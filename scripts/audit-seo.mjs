import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SEED_FACILITIES } from "../data.js";
import { isFitnessFacility } from "../facility-evidence.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "public");
const rootHtml = await read("index.html");
const stampHtml = await read("sauna-stamp-rally/index.html");
const guideHtml = await firstGuideHtml();
const feed = await read("feed.xml");
const sitemapIndex = await read("sitemap.xml");
const pageSitemap = await read("sitemap-pages.xml");
const redirects = await read("_redirects");
const sourceRedirects = await fs.readFile(path.join(root, "_redirects"), "utf8");
const headers = await fs.readFile(path.join(root, "_headers"), "utf8");
const retiredFunctions = ["functions/llms.txt.js", "functions/sitemap-facilities-2.xml.js"];
const version = JSON.parse(await read("version.json"));
assert(/^app\.[a-f0-9]+\.js$/.test(version.app), "更新確認用のアセット名が不正です");
assert(rootHtml.includes(`src="./${version.app}"`), "更新メタデータとHTMLのappアセットが一致しません");
await fs.access(path.join(out, version.app));
assert(/^styles\.[a-f0-9]+\.css$/.test(version.styles), "更新確認用のCSS名が不正です");
assert(rootHtml.includes(`href="./${version.styles}"`), "更新メタデータとHTMLのCSSが一致しません");

assert(!rootHtml.includes('name="keywords"'), "廃止済みのmeta keywordsが残っています");
assert(!rootHtml.includes('"@type": "SearchAction"'), "廃止済みのサイト内検索表示を意図したSearchActionが残っています");
assert(!rootHtml.includes("/llms.txt"), "Googleが使用しないllms.txtをSEO発見リンクとして宣言しています");
assert(rootHtml.includes('type="application/rss+xml"'), "RSSフィードの発見リンクがありません");
assert(headers.includes("Permissions-Policy: geolocation=(self)"), "位置情報がPermissions-Policyで許可されていません");
assert(headers.includes("/version.json\n  Cache-Control: no-store, max-age=0"), "更新確認メタデータのキャッシュが禁止されていません");
for (const route of ["/sitemap.xml", "/sitemap-*.xml", "/robots.txt", "/feed.xml"]) {
  assert(headers.includes(`${route}\n  Cache-Control: no-cache, must-revalidate`), `${route}の再検証キャッシュ指定がありません`);
}
assert(!sourceRedirects.includes("/* /index.html 200"), "ソースのSPAフォールバックがsoft 404を再発させます");
assert(!redirects.includes("/* /index.html 200"), "公開物のSPAフォールバックがsoft 404を再発させます");
for (const [label, value] of [["ソース", sourceRedirects], ["公開物", redirects]]) {
  const rules = value.split("\n").map((line) => line.trim()).filter((line) => line && !line.startsWith("#"));
  for (const rule of rules) {
    const status = Number(rule.split(/\s+/).at(-1));
    assert([200, 301, 302, 303, 307, 308].includes(status), `${label}_redirectsにCloudflare Pagesで無効なステータスがあります: ${rule}`);
  }
}
for (const relative of retiredFunctions) {
  const source = await fs.readFile(path.join(root, relative), "utf8");
  assert(source.includes("status: 410"), `${relative}が廃止URLを410で終了していません`);
  assert(source.includes('"Cache-Control": "no-store, max-age=0"'), `${relative}がキャッシュを禁止していません`);
  assert(source.includes('"X-Robots-Tag": "noindex, nofollow"'), `${relative}が検索除外を明示していません`);
}

const rootLd = structuredData(rootHtml);
const allTypes = collectTypes(rootLd);
for (const obsolete of ["FAQPage", "HowTo", "Dataset", "OfferCatalog"]) {
  assert(!allTypes.has(obsolete), `トップに不正確または検索表示対象外の${obsolete}が残っています`);
}
for (const required of ["WebSite", "Organization", "WebApplication", "ItemList"]) {
  assert(allTypes.has(required), `トップの${required}構造化データがありません`);
}
const organization = findNode(rootLd, "Organization");
assert(organization?.sameAs?.includes("https://saincho-official.hatenablog.com/"), "公式ブログがOrganization.sameAsにありません");
assert((await read("about/index.html")).includes("https://saincho-official.hatenablog.com/"), "運営ページに公式ブログの可視リンクがありません");

for (const [label, html] of [["検索意図ページ", stampHtml], ["入門記事", guideHtml]]) {
  const data = structuredData(html);
  const page = findNode(data, "WebPage");
  assert(page, `${label}にWebPage構造化データがありません`);
  for (const property of ["url", "name", "description", "inLanguage", "isPartOf", "image", "dateModified"]) {
    assert(page[property], `${label}のWebPage.${property}がありません`);
  }
  const article = findNode(data, "Article");
  assert(article, `${label}にArticle構造化データがありません`);
  for (const property of ["headline", "description", "image", "datePublished", "dateModified", "author", "publisher", "mainEntityOfPage"]) {
    assert(article[property], `${label}のArticle.${property}がありません`);
  }
  assert(html.includes(`<time datetime="${article.dateModified}">${article.dateModified}</time>`), `${label}の更新日が本文と一致しません`);
}

const feedItems = (feed.match(/<item>/g) || []).length;
const pageUrls = xmlLocs(pageSitemap).length;
assert(feedItems >= 32, `RSSの記事数が不足しています: ${feedItems}`);
assert(pageUrls >= 80, `固定ページサイトマップのURL数が不足しています: ${pageUrls}`);

assert(sitemapIndex.includes("<sitemapindex"), "ルートサイトマップがsitemapindexではありません");
const childRecords = [...sitemapIndex.matchAll(/<sitemap><loc>([^<]+)<\/loc><lastmod>([^<]+)<\/lastmod><\/sitemap>/g)]
  .map((match) => ({ url: decodeXml(match[1]), lastmod: match[2] }));
assert(childRecords.length >= 2, `子サイトマップが不足しています: ${childRecords.length}`);
for (const child of childRecords) {
  assert(/^\d{4}-\d{2}-\d{2}$/.test(child.lastmod), `子サイトマップのlastmodが不正です: ${child.url}`);
}

const allUrls = [];
for (const child of childRecords) {
  const filename = path.basename(new URL(child.url).pathname);
  const xml = await read(filename);
  assert(xml.includes("<urlset"), `${filename}がurlsetではありません`);
  allUrls.push(...xmlLocs(xml));
}
assert.equal(new Set(allUrls).size, allUrls.length, "サイトマップ内に重複URLがあります");

const facilityUrls = allUrls.filter((url) => new URL(url).pathname.startsWith("/facility/"));
assert(facilityUrls.length >= 1000, `確認済み施設URLが想定より少なすぎます: ${facilityUrls.length}`);
const titles = new Set();
const descriptions = new Set();
const evidence = { address: 0, official: 0, stay: 0 };
for (const url of facilityUrls) {
  const html = await readUrl(url);
  const title = capture(html, /<title>([^<]+)<\/title>/, `title: ${url}`);
  const description = capture(html, /<meta name="description" content="([^"]+)"/, `description: ${url}`);
  const canonical = capture(html, /<link rel="canonical" href="([^"]+)"/, `canonical: ${url}`);
  assert.equal(canonical, url, `自己参照canonicalではありません: ${url}`);
  assert(!html.includes('content="noindex, follow"'), `サイトマップURLがnoindexです: ${url}`);
  assert(html.includes("<h1>"), `施設ページに可視h1がありません: ${url}`);
  assert(!titles.has(title), `施設titleが重複しています: ${title}`);
  assert(!descriptions.has(description), `施設descriptionが重複しています: ${description}`);
  titles.add(title);
  descriptions.add(description);

  const data = structuredData(html);
  const business = findNode(data, "LocalBusiness") || findNode(data, "LodgingBusiness");
  assert(business, `施設の構造化データがありません: ${url}`);
  if (business.address) evidence.address += 1;
  else if (Array.isArray(business.sameAs) && business.sameAs.length) evidence.official += 1;
  else if (business["@type"] === "LodgingBusiness" && business.subjectOf?.url && String(business.description || "").length >= 60) evidence.stay += 1;
  else assert.fail(`住所・公式URL・固有の宿情報のいずれもない施設がindex対象です: ${url}`);
}

const facilityUrlSet = new Set(facilityUrls);
for (const facility of SEED_FACILITIES.filter(isFitnessFacility)) {
  const route = `/facility/${encodeURIComponent(facility.id)}/`;
  assert(!facilityUrlSet.has(`https://saincho-sauna-stamp-rally.pages.dev${route}`), `ジム併設施設がサイトマップに残っています: ${facility.name}`);
  if (!redirects.includes(`${route} /facility/`)) {
    const html = await readUrl(`https://saincho-sauna-stamp-rally.pages.dev${route}`);
    assert(html.includes('content="noindex, follow"'), `記録用ジムページがnoindexではありません: ${facility.name}`);
  }
}
assert(redirects.includes("/facility/si-60076/ /facility/manual-aichi-kiwami-honten/ 301"), "KIWAMI本店の別名301がありません");
for (const id of ["manual-aichi-kiwami-honten", "sc2025-kiwami-osu"]) {
  assert(facilityUrlSet.has(`https://saincho-sauna-stamp-rally.pages.dev/facility/${id}/`), `KIWAMIの店舗がサイトマップにありません: ${id}`);
}
const prefDirectory = path.join(out, "pref");
for (const entry of await fs.readdir(prefDirectory, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const html = await fs.readFile(path.join(prefDirectory, entry.name, "index.html"), "utf8");
  for (const href of [...html.matchAll(/href="(\/facility\/[^"]+\/)"/g)].map((match) => match[1])) {
    assert(facilityUrlSet.has(`https://saincho-sauna-stamp-rally.pages.dev${href}`), `県ページがnoindex施設へリンクしています: ${href}`);
  }
}

const aliasRedirects = redirects.split("\n").filter((line) => /^\/facility\/\S+\/ \/facility\/\S+\/ 301$/.test(line));
assert(aliasRedirects.length >= 1, "施設別名の301リダイレクトがありません");
const apiRuleIndex = redirects.split("\n").findIndex((line) => line === "/api/* /api/:splat 200");
assert(apiRuleIndex > redirects.split("\n").findLastIndex((line) => line.endsWith(" 301")), "APIのsplatルールが施設別名301より前にあります");
for (const line of aliasRedirects) {
  const [from, to] = line.split(" ");
  await fs.access(urlToOutputPath(`https://saincho-sauna-stamp-rally.pages.dev${to}`));
  await assert.rejects(fs.access(urlToOutputPath(`https://saincho-sauna-stamp-rally.pages.dev${from}`)), undefined, `別名HTMLが残っています: ${from}`);
}

console.log(JSON.stringify({
  ok: true,
  rootStructuredDataTypes: [...allTypes].sort(),
  feedItems,
  pageUrls,
  facilityUrls: facilityUrls.length,
  indexEvidence: evidence,
  aliasRedirects: aliasRedirects.length,
  sitemapChildren: childRecords.map((child) => child.url),
  geolocationPolicy: "self",
}, null, 2));

async function read(relative) {
  return fs.readFile(path.join(out, relative), "utf8");
}

async function readUrl(url) {
  return fs.readFile(urlToOutputPath(url), "utf8");
}

function urlToOutputPath(url) {
  const pathname = decodeURIComponent(new URL(url).pathname).replace(/^\/+/, "");
  return path.join(out, pathname, "index.html");
}

function xmlLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decodeXml(match[1]));
}

function decodeXml(value) {
  return value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&apos;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
}

function capture(value, pattern, label) {
  const match = value.match(pattern);
  assert(match, `${label}がありません`);
  return decodeXml(match[1]);
}

async function firstGuideHtml() {
  const entries = await fs.readdir(path.join(out, "guide"), { withFileTypes: true });
  const entry = entries.find((item) => item.isDirectory());
  assert(entry, "生成済み入門記事がありません");
  return read(path.join("guide", entry.name, "index.html"));
}

function structuredData(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
}

function collectTypes(values) {
  const result = new Set();
  walk(values, (node) => {
    const types = Array.isArray(node?.["@type"]) ? node["@type"] : [node?.["@type"]];
    types.filter(Boolean).forEach((type) => result.add(type));
  });
  return result;
}

function findNode(values, type) {
  let found = null;
  walk(values, (node) => {
    if (!found && (Array.isArray(node?.["@type"]) ? node["@type"].includes(type) : node?.["@type"] === type)) found = node;
  });
  return found;
}

function walk(value, visit) {
  if (Array.isArray(value)) return value.forEach((item) => walk(item, visit));
  if (!value || typeof value !== "object") return;
  visit(value);
  Object.values(value).forEach((item) => walk(item, visit));
}
