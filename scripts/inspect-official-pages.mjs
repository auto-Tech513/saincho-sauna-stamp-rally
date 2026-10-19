import { load } from "cheerio";
import robotsParser from "robots-parser";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { SEED_FACILITIES } from "../data.js";
import { applyFacilityEvidence } from "../facility-evidence.js";

const userAgent = "SainchoOfficialAudit/1.0";
const headers = { "user-agent": `${userAgent} (+https://saincho-sauna-stamp-rally.pages.dev/about/)`, accept: "text/html,application/json,text/plain" };
const directory = new URL("../output/official-audit/", import.meta.url);
const limit = Number(process.argv.find(arg => arg.startsWith("--limit="))?.split("=")[1]) || Infinity;
const checkedAt = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tokyo" }).format(new Date());
const targets = SEED_FACILITIES.map(applyFacilityEvidence).filter(f => /^https?:\/\//.test(f.officialUrl || "")).slice(0, limit);
const robotsCache = new Map();
const blockedHosts = new Set();
const nextAccess = new Map();
const results = [];
await mkdir(directory, { recursive: true });

async function policy(url) {
  const origin = new URL(url).origin;
  if (!robotsCache.has(origin)) robotsCache.set(origin, (async () => {
    try {
      const path = `${origin}/robots.txt`;
      const response = await fetch(path, { headers, signal: AbortSignal.timeout(6000) });
      if (response.status === 404) return robotsParser(path, "");
      if (!response.ok) throw new Error(`robots-${response.status}`);
      const body = await response.text();
      if (/<html|<!doctype html|Human Verification|Just a moment/i.test(body)) return null;
      return robotsParser(path, body);
    } catch { return null; }
  })());
  return robotsCache.get(origin);
}

async function readPage(url) {
  for (let redirect = 0; redirect < 4; redirect++) {
    const host = new URL(url).host;
    if (blockedHosts.has(host)) throw new Error("host-blocked");
    const rules = await policy(url);
    if (!rules || rules.isAllowed(url, userAgent) !== true) throw new Error("robots-unavailable-or-disallowed");
    const delay = Math.max(1000, (rules.getCrawlDelay(userAgent) || 0) * 1000);
    const readyAt = Math.max(Date.now(), nextAccess.get(host) || 0);
    nextAccess.set(host, readyAt + delay);
    await new Promise(resolve => setTimeout(resolve, Math.max(0, readyAt - Date.now())));
    const response = await fetch(url, { headers, redirect: "manual", signal: AbortSignal.timeout(8000) });
    if ([301,302,303,307,308].includes(response.status)) { url = new URL(response.headers.get("location"), url).href; continue; }
    if ([403,429].includes(response.status)) blockedHosts.add(host);
    if (!response.ok) throw new Error(`HTTP-${response.status}`);
    if (!/html|json/.test(response.headers.get("content-type") || "")) throw new Error("not-html");
    if (Number(response.headers.get("content-length")) > 2000000) throw new Error("page-too-large");
    const html = await response.text();
    if (html.length > 2000000) throw new Error("page-too-large");
    if (/Human Verification|aws-waf|Just a moment\.\.\./i.test(html)) { blockedHosts.add(host); throw new Error("verification-required"); }
    return { html, url };
  }
  throw new Error("redirect-limit");
}

// At most four distinct requests, with a reserved per-host crawl interval.
async function inspect(facility) {
  const cacheKey = createHash("sha256").update(facility.officialUrl).digest("hex");
  const cacheFile = new URL(`${checkedAt}-${cacheKey}.json`, directory);
  try {
    let page;
    try { page = JSON.parse(await readFile(cacheFile, "utf8")); } catch {}
    if (!page) { page = { ...await readPage(facility.officialUrl), checkedAt }; await writeFile(cacheFile, JSON.stringify(page)); }
    const $ = load(page.html);
    const title = $("title").text().trim();
    const labels = [];
    $("dt,th").each((_, element) => {
      const label = $(element).text().replace(/\s+/g, " ").trim();
      if (!/営業時間|入浴料|入泉料|利用料金|入館料|サウナ|水風呂/.test(label) || label.length > 45) return;
      const value = $(element).is("dt") ? $(element).next("dd").text() : $(element).nextAll("td").map((_, td) => $(td).text()).get().join(" / ");
      if (value.trim() && value.length <= 450) labels.push({ label, value: value.replace(/\s+/g, " ").trim() });
    });
    const structured = [];
    $("script[type='application/ld+json']").each((_, element) => { try { structured.push(JSON.parse($(element).text())); } catch {} });
    results.push({ id: facility.id, name: facility.name, sourceUrl: page.url, checkedAt, title, labels, structured, cacheFile: cacheFile.pathname });
  } catch (error) { results.push({ id: facility.id, name: facility.name, sourceUrl: facility.officialUrl, error: error.message }); }
  if (results.length % 25 === 0) {
    await writeFile(new URL("report.json", directory), JSON.stringify({ checkedAt, total: targets.length, results }, null, 2));
    console.log(`Official pages ${results.length}/${targets.length}; fetched=${results.filter(r => !r.error).length}; with labeled fields=${results.filter(r => r.labels?.length).length}`);
  }
}
let cursor = 0;
await Promise.all(Array.from({ length: 4 }, async () => {
  while (cursor < targets.length) await inspect(targets[cursor++]);
}));
await writeFile(new URL("report.json", directory), JSON.stringify({ checkedAt, total: targets.length, results }, null, 2));
console.log(JSON.stringify({ total: targets.length, fetched: results.filter(r => !r.error).length, withLabeledFields: results.filter(r => r.labels?.length).length, report: directory.pathname + "report.json" }));
