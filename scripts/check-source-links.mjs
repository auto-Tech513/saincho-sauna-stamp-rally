import { SEED_FACILITIES } from "../data.js";

const sampleArg = process.argv.find((value) => value.startsWith("--sample="));
const sampleSize = Math.max(1, Math.min(300, Number(sampleArg?.split("=")[1]) || 60));
const weekSeed = Math.floor(Date.now() / (7 * 86400000));
const urls = [...new Set(SEED_FACILITIES.map((facility) => facility.sourceUrl).filter(Boolean))]
  .map((url) => ({ url, score: hash(`${weekSeed}:${url}`) }))
  .sort((a, b) => a.score - b.score)
  .slice(0, sampleSize)
  .map((item) => item.url);

const results = [];
for (let index = 0; index < urls.length; index += 6) {
  results.push(...await Promise.all(urls.slice(index, index + 6).map(checkUrl)));
}

const missing = results.filter((item) => item.status === 404 || item.status === 410);
const blocked = results.filter((item) => [401, 403, 429].includes(item.status) || item.challenge);
const errors = results.filter((item) => item.error);
console.log(JSON.stringify({ checked: results.length, reachable: results.filter(item => item.status >= 200 && item.status < 300 && !item.challenge).length, missing, blocked: blocked.length, networkErrors: errors.length }, null, 2));
if (missing.length || blocked.length || errors.length) process.exitCode = 1;

async function checkUrl(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "SainchoCatalogAudit/1.0 (+https://saincho-sauna-stamp-rally.pages.dev/about/)" },
    });
    const html = (response.headers.get("content-type") || "").includes("text/html") ? await response.text() : "";
    const challenge = /Human Verification|captcha-container|aws-waf-token|cf-chl-widget/i.test(html);
    return { url, status: response.status, finalUrl: response.url, challenge };
  } catch (error) {
    return { url, status: 0, error: error?.name || "request-failed" };
  } finally {
    clearTimeout(timeout);
  }
}

function hash(value) {
  let result = 2166136261;
  for (const char of value) {
    result ^= char.codePointAt(0);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}
