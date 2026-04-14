#!/usr/bin/env node

import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const mode = process.argv.includes("--staged") ? "staged" : "all";

const ignoredPaths = [
  ".next/",
  "out/",
  "node_modules/",
  ".git/",
  "package-lock.json",
  "next-env.d.ts",
];

const textExtensions = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".json",
  ".md",
  ".mdx",
  ".yml",
  ".yaml",
  ".css",
  ".txt",
  ".env",
]);

const patterns = [
  { label: "Private key block", regex: /-----BEGIN (RSA |EC |DSA |OPENSSH )?PRIVATE KEY-----/g },
  { label: "AWS access key", regex: /\bAKIA[0-9A-Z]{16}\b/g },
  { label: "OpenAI style secret", regex: /\bsk-[A-Za-z0-9]{20,}\b/g },
  { label: "Generic API key assignment", regex: /\b(api[_-]?key)\b\s*[:=]\s*["'][^"'\n]{8,}["']/gi },
  { label: "Generic token assignment", regex: /\b(token)\b\s*[:=]\s*["'][^"'\n]{8,}["']/gi },
  { label: "Generic password assignment", regex: /\b(password|passwd)\b\s*[:=]\s*["'][^"'\n]{6,}["']/gi },
];

function isIgnored(file) {
  return ignoredPaths.some((ignored) => file.startsWith(ignored) || file.includes(`/${ignored}`));
}

function shouldScan(file) {
  const ext = path.extname(file);
  return textExtensions.has(ext) || file.endsWith(".env");
}

function getFiles() {
  const cmd =
    mode === "staged"
      ? "git diff --cached --name-only --diff-filter=ACMRTUXB"
      : "git ls-files";
  const out = execSync(cmd, { encoding: "utf8" }).trim();
  if (!out) return [];
  return out
    .split("\n")
    .map((f) => f.trim())
    .filter(Boolean)
    .filter((f) => !isIgnored(f))
    .filter((f) => shouldScan(f));
}

function scanFile(file) {
  const abs = path.join(repoRoot, file);
  if (!fs.existsSync(abs)) return [];
  const content = fs.readFileSync(abs, "utf8");
  const findings = [];

  for (const pattern of patterns) {
    const matches = [...content.matchAll(pattern.regex)];
    for (const match of matches) {
      const idx = match.index ?? 0;
      const line = content.slice(0, idx).split("\n").length;
      findings.push({
        file,
        line,
        label: pattern.label,
        sample: String(match[0]).slice(0, 120),
      });
    }
  }

  return findings;
}

const files = getFiles();
let findings = [];

for (const file of files) {
  findings = findings.concat(scanFile(file));
}

if (findings.length > 0) {
  console.error("\nSecurity scan failed. Potential sensitive content found:\n");
  for (const finding of findings) {
    console.error(`- ${finding.file}:${finding.line} [${finding.label}] ${finding.sample}`);
  }
  console.error(
    "\nIf a match is false-positive, refactor the text or rename variables to avoid secret-like patterns."
  );
  process.exit(1);
}

console.log(`Security scan passed (${files.length} files checked, mode: ${mode}).`);
