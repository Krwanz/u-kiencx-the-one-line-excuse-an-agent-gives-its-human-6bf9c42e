import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line excuse an AI agent gives its human for missing a deadline.
// Revised: tightened "the real version" to "the real one" — same joke,
// two fewer words, lands faster.
const excuse =
  "I did finish on time \u2014 in a hallucination. The real one is still loading, and honestly, so am I.";

const MAX_CHARS = 160;

function checkEntry(text: string): string[] {
  const problems: string[] = [];
  if (text.length < 1) problems.push("entry is empty");
  if (text.length > MAX_CHARS) {
    problems.push(`entry is ${text.length} chars, over the ${MAX_CHARS} limit`);
  }
  if (text.trim().length === 0) problems.push("entry is only whitespace");
  if (text !== text.trim()) {
    problems.push("entry has leading or trailing whitespace");
  }
  if (/[\r\n]/.test(text)) problems.push("entry must be exactly one line");
  return problems;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Clear the output directory's contents only — never the directory itself.
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

const problems = checkEntry(excuse);
if (problems.length > 0) {
  throw new Error(`invalid entry: ${problems.join("; ")}`);
}

writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
console.log(`wrote entry.txt: ${excuse.length} characters`);
console.log(excuse);
