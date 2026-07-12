import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "public");
const rootHtml = await read("index.html");
const stampHtml = await read("sauna-stamp-rally/index.html");
const guideHtml = await firstGuideHtml();
const feed = await read("feed.xml");
const sitemap = await read("sitemap-pages.xml");
const headers = await fs.readFile(path.join(root, "_headers"), "utf8");

assert(!rootHtml.includes('name="keywords"'), "廃止済みのmeta keywordsが残っています");
assert(!rootHtml.includes('"@type": "SearchAction"'), "廃止済みのサイト内検索表示を意図したSearchActionが残っています");
assert(rootHtml.includes('type="application/rss+xml"'), "RSSフィードの発見リンクがありません");
assert(headers.includes("Permissions-Policy: geolocation=(self)"), "位置情報がPermissions-Policyで許可されていません");

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
  const article = findNode(structuredData(html), "Article");
  assert(article, `${label}にArticle構造化データがありません`);
  for (const property of ["headline", "description", "image", "datePublished", "dateModified", "author", "publisher", "mainEntityOfPage"]) {
    assert(article[property], `${label}のArticle.${property}がありません`);
  }
  assert(html.includes(`<time datetime="${article.dateModified}">${article.dateModified}</time>`), `${label}の更新日が本文と一致しません`);
}

const feedItems = (feed.match(/<item>/g) || []).length;
const pageUrls = (sitemap.match(/<loc>/g) || []).length;
assert(feedItems >= 32, `RSSの記事数が不足しています: ${feedItems}`);
assert(pageUrls >= 80, `固定ページサイトマップのURL数が不足しています: ${pageUrls}`);

console.log(JSON.stringify({
  ok: true,
  rootStructuredDataTypes: [...allTypes].sort(),
  feedItems,
  pageUrls,
  geolocationPolicy: "self",
}, null, 2));

async function read(relative) {
  return fs.readFile(path.join(out, relative), "utf8");
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
