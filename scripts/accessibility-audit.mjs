import { readFileSync, readdirSync } from "node:fs";
import { extname, join, relative } from "node:path";

const root = process.cwd();
const webRoot = join(root, "apps", "web");
const files = [];
function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (["node_modules", ".next", "dist", "generated"].includes(entry.name)) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) walk(path);
    else if ([".ts", ".tsx", ".css"].includes(extname(entry.name))) files.push(path);
  }
}
walk(webRoot);

const failures = [];
for (const file of files) {
  const source = readFileSync(file, "utf8");
  const name = relative(root, file);
  const check = (pattern, message) => { if (pattern.test(source)) failures.push(`${name}: ${message}`); };
  check(/window\.(?:alert|confirm|prompt)\s*\(/, "còn browser dialog chặn luồng; hãy dùng dialog trong design system");
  check(/target=["']_blank["'](?![^>]*rel=["'][^"']*(?:noreferrer|noopener))/g, "target=_blank thiếu rel=noreferrer/noopener");
  check(/<img\b(?![^>]*\balt=)[^>]*>/g, "ảnh thiếu alt");
  check(/<video\b(?![^>]*(?:aria-label|aria-labelledby|title)=)[^>]*>/g, "video thiếu nhãn truy cập");
  check(/<button\b(?![^>]*(?:aria-label|title)=)[^>]*>\s*[×✕✎✓●⌕☰⋮↕↑↓]\s*<\/button>/g, "icon button thiếu aria-label hoặc title");
}

if (failures.length) {
  console.error(`Accessibility audit failed (${failures.length}):\n${failures.join("\n")}`);
  process.exit(1);
}
console.log(`Accessibility audit passed: ${files.length} web source files checked.`);
