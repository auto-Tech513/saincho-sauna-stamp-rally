import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { load } from "cheerio";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const $ = load(html);

test("search-first markup retains unique controls and collapses secondary content", () => {
  const ids = $("[id]").map((_, element) => $(element).attr("id")).get();
  assert.equal(new Set(ids).size, ids.length, "all IDs must be unique");
  assert.equal($("#searchForm[role=search] input[enterkeyhint=search]").length, 1);
  assert.equal($("#searchPrefectureSelect").length, 1);
  assert.equal($("#featureFilterPanel[hidden]").length, 1);
  assert.equal($("#exploreExtras[open]").length, 0);
  for (const id of ["progressRing", "questPanel", "spotlight"]) {
    assert.equal($(`#${id}`).closest("#exploreExtras").length, 1, `${id} must stay available in the disclosure`);
  }
  assert.equal($("#searchResultsStatus[tabindex='-1']").length, 1);
  assert.equal($("#searchResultsStatus").next().attr("id"), "facilityList");
});
