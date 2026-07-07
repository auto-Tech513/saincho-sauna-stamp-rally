import { pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const templatePath = resolve(rootDir, "tools", "og-template.html");
const outputPath = resolve(rootDir, "assets", "saincho-og-v2.png");

const result = spawnSync(
  "npm",
  [
    "exec",
    "--package",
    "playwright",
    "--",
    "playwright",
    "screenshot",
    "--viewport-size=1200,630",
    pathToFileURL(templatePath).href,
    outputPath,
    "--timeout=30000",
  ],
  { cwd: rootDir, stdio: "inherit" }
);

if (result.status !== 0) {
  process.exit(result.status || 1);
}

console.log(`Generated ${outputPath}`);
