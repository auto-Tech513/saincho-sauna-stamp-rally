import { createHash } from "node:crypto";

const appUrl = "https://saincho-sauna-stamp-rally.pages.dev";
const key = createHash("sha256").update(appUrl).digest("hex").slice(0, 32);
const prefectureSlugs = [
  "hokkaido", "aomori", "iwate", "miyagi", "akita", "yamagata", "fukushima", "ibaraki", "tochigi", "gunma",
  "saitama", "chiba", "tokyo", "kanagawa", "niigata", "toyama", "ishikawa", "fukui", "yamanashi", "nagano",
  "gifu", "shizuoka", "aichi", "mie", "shiga", "kyoto", "osaka", "hyogo", "nara", "wakayama", "tottori",
  "shimane", "okayama", "hiroshima", "yamaguchi", "tokushima", "kagawa", "ehime", "kochi", "fukuoka", "saga",
  "nagasaki", "kumamoto", "oita", "miyazaki", "kagoshima", "okinawa",
];
const routes = [
  "/", "/sauna-stamp-rally/", "/sauna-goshuin/", "/guide/", "/about/", "/sameshi/", "/stay/", "/community/",
  ...prefectureSlugs.map((slug) => `/pref/${slug}/`),
];
const urlList = routes.map((route) => `${appUrl}${route}`);

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(appUrl).host,
    key,
    keyLocation: `${appUrl}/${key}.txt`,
    urlList,
  }),
});

console.log(JSON.stringify({ status: response.status, ok: response.ok, submitted: urlList.length, keyLocation: `${appUrl}/${key}.txt` }, null, 2));
if (!response.ok) {
  console.error(await response.text());
  process.exitCode = 1;
}
