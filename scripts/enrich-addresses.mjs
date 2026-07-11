import { readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { DATASET_META, PREFECTURES, SEED_FACILITIES } from "../data.js";

const args = new Map(process.argv.slice(2).map((arg) => {
  const [key, value = "true"] = arg.replace(/^--/, "").split("=");
  return [key, value];
}));
const limit = Math.max(1, Number(args.get("limit")) || Number.POSITIVE_INFINITY);
const concurrency = Math.min(12, Math.max(1, Number(args.get("concurrency")) || 8));
const cachePath = join(tmpdir(), "saincho-address-enrichment-v1.json");
const cache = await readCache(cachePath);
const targets = SEED_FACILITIES.filter((facility) => (
  !facility.address && /^https:\/\/sauna-ikitai\.com\/saunas\/\d+\/?$/.test(facility.sourceUrl || "")
)).slice(0, limit);

let completed = 0;
let enriched = 0;
let unavailable = 0;
let failed = 0;

await runPool(targets, concurrency, async (facility) => {
  const cachedValue = cache[facility.sourceUrl];
  const cached = cachedValue?.address || cachedValue?.status === 404 ? cachedValue : null;
  let result = cached;
  if (!result) {
    result = await fetchAddress(facility);
    cache[facility.sourceUrl] = result;
    if (completed % 25 === 0) await writeFile(cachePath, JSON.stringify(cache), "utf8");
  }

  if (result.address) {
    facility.address = result.address;
    facility.addressSource = "サウナイキタイ参照ページ";
    enriched += 1;
  } else if (result.error) {
    failed += 1;
  } else {
    unavailable += 1;
  }
  completed += 1;
  if (completed % 100 === 0 || completed === targets.length) {
    console.log(`progress ${completed}/${targets.length} enriched=${enriched} unavailable=${unavailable} failed=${failed}`);
  }
});

await writeFile(cachePath, JSON.stringify(cache), "utf8");
DATASET_META.catalogReviewedAt = new Date().toISOString().slice(0, 10);
DATASET_META.addressEnrichedAt = new Date().toISOString();
DATASET_META.addressMethod = "公開参照ページの住所欄を取得し、都道府県一致を検証。推測値は不使用。";

const output = [
  "// Generated data for サ印帳. Edit source lists carefully; keep sourceUrl as the verification page.",
  `export const DATASET_META = ${JSON.stringify(DATASET_META, null, 2)};`,
  "",
  `export const PREFECTURES = ${JSON.stringify(PREFECTURES, null, 2)};`,
  "",
  `export const SEED_FACILITIES = ${JSON.stringify(SEED_FACILITIES, null, 2)};`,
  "",
].join("\n");

await writeFile(new URL("../data.js", import.meta.url), output, "utf8");
console.log(JSON.stringify({ targets: targets.length, enriched, unavailable, failed, cachePath }, null, 2));

async function runPool(items, size, worker) {
  let cursor = 0;
  await Promise.all(Array.from({ length: Math.min(size, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      await worker(items[index]);
      await wait(60);
    }
  }));
}

async function fetchAddress(facility) {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(facility.sourceUrl, {
        headers: {
          accept: "text/html,application/xhtml+xml",
          "user-agent": "SainchoDataAudit/1.0 (+https://saincho-sauna-stamp-rally.pages.dev/)",
        },
        signal: AbortSignal.timeout(20000),
      });
      if (response.status === 404) return { address: "", status: 404 };
      if (response.status !== 200) throw new Error(`HTTP ${response.status}`);
      const html = await response.text();
      if (html.length < 1000) throw new Error("empty-response");
      const match = html.match(/<th[^>]*>\s*住所\s*<\/th>\s*<td[^>]*>([\s\S]*?)<\/td>/i);
      const address = normalizeAddress(match?.[1] || "", facility.prefecture);
      if (address && !address.includes(facility.prefecture)) {
        return { address: "", error: "prefecture-mismatch" };
      }
      return { address, status: response.status };
    } catch (error) {
      if (attempt === 3) return { address: "", error: String(error?.message || error) };
      await wait(350 * attempt);
    }
  }
  return { address: "", error: "unknown" };
}

function normalizeAddress(value, prefecture) {
  const decoded = decodeEntities(String(value || "").replace(/<[^>]+>/g, " "))
    .normalize("NFKC")
    .replace(/\s+/g, " ")
    .trim();
  if (!decoded || decoded.length < 5 || decoded.length > 160) return "";
  return decoded.replace(new RegExp(`^${escapeRegex(prefecture)}\\s+${escapeRegex(prefecture)}`), prefecture);
}

function decodeEntities(value) {
  return value
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)));
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function readCache(path) {
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch {
    return {};
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
