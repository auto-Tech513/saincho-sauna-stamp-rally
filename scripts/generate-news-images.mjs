// サウニュ〜の記事タイトルカード（hero / og）を生成する。
// 使い方: node scripts/generate-news-images.mjs [slug ...]
// 画像は assets/news/ に出力し、manifest.json を更新する（コミット運用）。
import { spawnSync } from "node:child_process";
import { existsSync, promises as fs } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { NEWS_CATEGORIES, SAUNA_NEWS, getPublishedNews } from "../news.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "assets", "news");
const TEMPLATE = path.join(ROOT, "tools", "news-hero-template.html");

const CATEGORY_COLORS = {
  opening: "#006d64",
  event: "#344840",
  renewal: "#596763",
  closure: "#111817",
  award: "#8a6a24",
};

function loadPlaywright() {
  const candidates = [
    path.join(ROOT, "node_modules", "playwright-core"),
    path.join(process.env.HOME, "workspace", "pwtest", "node_modules", "playwright-core"),
  ];
  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      const require = createRequire(path.join(ROOT, "package.json"));
      return require(candidate);
    }
  }
  throw new Error("playwright-core が見つかりません（repo / pwtest の node_modules を確認）");
}

async function findChromium() {
  const base = path.join(process.env.HOME, ".cache", "ms-playwright");
  const entries = await fs.readdir(base).catch(() => []);
  for (const entry of entries.sort().reverse()) {
    const candidate = path.join(base, entry, "chrome-headless-shell-linux64", "chrome-headless-shell");
    if (existsSync(candidate)) return candidate;
    const full = path.join(base, entry, "chrome-linux64", "chrome");
    if (existsSync(full)) return full;
  }
  return undefined;
}

function formatJaDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}

const onlySlugs = process.argv.slice(2);
const articles = getPublishedNews(SAUNA_NEWS).filter((a) => onlySlugs.length === 0 || onlySlugs.includes(a.slug));
await fs.mkdir(OUT_DIR, { recursive: true });

const { chromium } = loadPlaywright();
const executablePath = await findChromium();
const browser = await chromium.launch(executablePath ? { executablePath } : {});
const manifestPath = path.join(OUT_DIR, "manifest.json");
const manifest = existsSync(manifestPath) ? JSON.parse(await fs.readFile(manifestPath, "utf8")) : {};

try {
  for (const article of articles) {
    const params = new URLSearchParams({
      title: article.title,
      category: NEWS_CATEGORIES[article.category] || "ニュース",
      color: CATEGORY_COLORS[article.category] || "#006d64",
      date: formatJaDate(article.publishedAt),
    });
    const url = `${pathToFileURL(TEMPLATE).href}?${params.toString()}`;
    const heroPng = path.join(OUT_DIR, `${article.slug}-hero.png`);
    const heroWebp = path.join(OUT_DIR, `${article.slug}-hero.webp`);
    const ogPng = path.join(OUT_DIR, `${article.slug}-og.png`);

    const heroPage = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    await heroPage.goto(url, { waitUntil: "load" });
    await heroPage.screenshot({ path: heroPng });
    await heroPage.close();
    const conv = spawnSync("ffmpeg", ["-y", "-loglevel", "error", "-i", heroPng, "-c:v", "libwebp", "-quality", "82", heroWebp], { stdio: "inherit" });
    if (conv.status !== 0) throw new Error(`ffmpeg webp 変換に失敗: ${article.slug}`);
    await fs.rm(heroPng);

    const ogPage = await browser.newPage({ viewport: { width: 1200, height: 630 } });
    await ogPage.goto(url, { waitUntil: "load" });
    await ogPage.screenshot({ path: ogPng });
    await ogPage.close();

    manifest[article.slug] = {
      hero: `/assets/news/${article.slug}-hero.webp`,
      og: `/assets/news/${article.slug}-og.png`,
      generatedAt: new Date().toISOString().slice(0, 10),
    };
    console.log(`generated ${article.slug}`);
  }
} finally {
  await browser.close();
}

await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`manifest updated: ${Object.keys(manifest).length} articles`);
