import assert from "node:assert/strict";
import test from "node:test";
import {
  NEWS_CATEGORIES,
  SAUNA_NEWS,
  countNewsH2,
  getPublishedNews,
  hasNewsFigureBlock,
  newsBodyTextLength,
  renderNewsBlocks,
} from "../news.js";

test("ニュースは公開日の新しい順、同日は slug 昇順に並ぶ", () => {
  const fixture = [
    { slug: "b-news", status: "published", publishedAt: "2026-11-10" },
    { slug: "a-news", status: "published", publishedAt: "2026-11-10" },
    { slug: "c-news", status: "published", publishedAt: "2026-11-12" },
  ];
  const sorted = getPublishedNews(fixture, "2026-11-12");
  assert.deepEqual([...sorted].map((a) => a.slug), ["c-news", "a-news", "b-news"]);
});

test("draft と未来日の記事は公開対象から外れる", () => {
  const fixture = [
    { slug: "draft-one", status: "draft", publishedAt: "2026-11-01" },
    { slug: "future-one", status: "published", publishedAt: "2026-12-01" },
    { slug: "live-one", status: "published", publishedAt: "2026-11-11" },
  ];
  const sorted = getPublishedNews(fixture, "2026-11-12");
  assert.deepEqual([...sorted].map((a) => a.slug), ["live-one"]);
});

test("ブロック描画は HTML をエスケープし、表と factbox を描く", () => {
  const html = renderNewsBlocks([
    { type: "p", text: "<script>alert(1)</script>" },
    { type: "h2", text: "見出し" },
    { type: "table", caption: "表題", head: ["項目", "値"], rows: [["<b>太字</b>", "1,000"]] },
    { type: "factbox", title: "概要", rows: [{ label: "場所", value: "東京" }] },
    { type: "figure", src: "https://example.com/x.png", alt: "外部画像は不可" },
    { type: "figure", src: "/assets/news/sample.webp", alt: "自作図版", caption: "説明" },
  ], { h2IdPrefix: "news-h2-" });
  assert(!html.includes("<script>alert(1)"), "p の HTML がエスケープされていません");
  assert(html.includes("&lt;script&gt;"), "p のエスケープ結果が想定と違います");
  assert(html.includes('<h2 id="news-h2-1">見出し</h2>'), "h2 のアンカー id が付きません");
  assert(html.includes("<th scope=\"col\">項目</th>"), "表の見出しが描かれていません");
  assert(!html.includes("<b>太字</b>"), "表セルの HTML がエスケープされていません");
  assert(html.includes("news-factbox"), "factbox が描かれていません");
  assert(!html.includes("example.com"), "/assets/news/ 以外の figure が描かれています");
  assert(html.includes("/assets/news/sample.webp"), "自作 figure が描かれていません");
});

test("第1弾の記事データが厚み基準とカテゴリを満たす", () => {
  assert(SAUNA_NEWS.length >= 7, "第1弾は7本以上です");
  const slugs = new Set(SAUNA_NEWS.map((a) => a.slug));
  assert.equal(slugs.size, SAUNA_NEWS.length, "slug が重複しています");
  for (const article of SAUNA_NEWS) {
    assert(NEWS_CATEGORIES[article.category], `カテゴリ不正: ${article.slug}`);
    const isShortForm = article.category === "closure" || String(article.statusNote || "").includes("短報");
    assert(newsBodyTextLength(article) >= (isShortForm ? 1200 : 1500), `本文不足: ${article.slug}`);
    assert(countNewsH2(article) >= (isShortForm ? 3 : 4), `見出し不足: ${article.slug}`);
    assert(hasNewsFigureBlock(article), `図表なし: ${article.slug}`);
    assert(article.sources.length >= 1, `出典なし: ${article.slug}`);
    assert(article.facilityIds.length >= 1, `関連施設なし: ${article.slug}`);
  }
});
