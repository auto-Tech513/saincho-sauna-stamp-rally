import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const QUEUE = path.join(ROOT, "promotion", "hatena-queue");
const entries = (await fs.readdir(QUEUE))
  .filter((name) => /^\d{2}-.+\.md$/.test(name))
  .sort();

if (!entries.length) throw new Error("Hatena queue is empty");

const titles = new Set();
const schedules = new Set();
for (const name of entries) {
  const source = await fs.readFile(path.join(QUEUE, name), "utf8");
  const title = source.match(/^title:\s*(.+)$/m)?.[1]?.trim();
  const schedule = source.match(/^schedule:\s*(.+)$/m)?.[1]?.trim();
  const body = source.replace(/^---[\s\S]*?---\s*/, "").trim();
  if (!title || titles.has(title)) throw new Error(`${name}: missing or duplicate title`);
  if (!schedule || schedules.has(schedule) || Number.isNaN(Date.parse(schedule))) throw new Error(`${name}: invalid or duplicate schedule`);
  if (body.length < 900) throw new Error(`${name}: body too short (${body.length})`);
  if (!/https:\/\/saincho-sauna-stamp-rally\.pages\.dev\//.test(body)) throw new Error(`${name}: missing Saincho link`);
  if (/manapick/i.test(body)) throw new Error(`${name}: must not reference Manapick`);
  titles.add(title);
  schedules.add(schedule);
}

console.log(`Hatena queue OK: ${entries.length} unique articles, ${Math.min(...await Promise.all(entries.map(async (name) => (await fs.readFile(path.join(QUEUE, name), "utf8")).replace(/^---[\s\S]*?---\s*/, "").trim().length)))}+ characters`);
