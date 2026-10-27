import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const roots = ["src", "e2e"];
const extra = ["vite.config.ts", "vitest.config.ts", "playwright.config.ts"];
const explicitAny = /(?::\s*any\b|\bas\s+any\b|<any\b|any\[\])/g;

async function filesIn(dir) {
  const found = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...(await filesIn(path)));
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      found.push(path);
    }
  }
  return found;
}

const files = [...extra];
for (const root of roots) {
  files.push(...(await filesIn(root)));
}

const hits = [];
for (const file of files) {
  const text = await readFile(file, "utf8");
  const lines = text.split("\n");
  lines.forEach((line, index) => {
    if (explicitAny.test(line)) {
      hits.push(`${file}:${index + 1}: ${line.trim()}`);
    }
    explicitAny.lastIndex = 0;
  });
}

if (hits.length > 0) {
  console.error("Explicit any is not allowed:");
  for (const hit of hits) console.error(hit);
  process.exit(1);
}

console.log(`No explicit any in ${files.length} files.`);
