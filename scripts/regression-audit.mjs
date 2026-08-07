import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ts = require("typescript");

const root = process.cwd();
const failures = [];
const notes = [];

function fail(message) {
  failures.push(message);
}

function read(path) {
  const absolute = join(root, path);
  if (!existsSync(absolute)) {
    fail(`${path}: missing required file`);
    return "";
  }
  return readFileSync(absolute, "utf8");
}

function requireText(path, pattern, message) {
  const source = read(path);
  if (source && !pattern.test(source)) fail(`${path}: ${message}`);
}

function walk(directory, extensions, output = []) {
  if (!existsSync(directory)) return output;
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (["node_modules", ".next", "dist", "generated", "coverage"].includes(entry.name)) continue;
    const absolute = join(directory, entry.name);
    if (entry.isDirectory()) walk(absolute, extensions, output);
    else if (extensions.includes(extname(entry.name))) output.push(absolute);
  }
  return output;
}

function resolveRelativeImport(file, specifier) {
  const base = resolve(dirname(file), specifier);
  const withoutRuntimeExtension = base.replace(/\.(?:js|jsx|mjs|cjs)$/, "");
  const candidates = [
    base,
    withoutRuntimeExtension,
    `${withoutRuntimeExtension}.ts`,
    `${withoutRuntimeExtension}.tsx`,
    `${withoutRuntimeExtension}.js`,
    `${withoutRuntimeExtension}.jsx`,
    join(base, "index.ts"),
    join(base, "index.tsx"),
    join(withoutRuntimeExtension, "index.ts"),
    join(withoutRuntimeExtension, "index.tsx"),
  ];
  return candidates.some((candidate) => existsSync(candidate));
}

const rootPackage = JSON.parse(read("package.json") || "{}");
const apiPackage = JSON.parse(read("apps/api/package.json") || "{}");
const webPackage = JSON.parse(read("apps/web/package.json") || "{}");
const lockPackage = JSON.parse(read("package-lock.json") || "{}");
const versions = [rootPackage.version, apiPackage.version, webPackage.version, lockPackage.version, lockPackage.packages?.[""]?.version, lockPackage.packages?.["apps/api"]?.version, lockPackage.packages?.["apps/web"]?.version];
if (new Set(versions).size !== 1) fail(`package versions are not aligned: ${versions.join(" / ")}`);
if (rootPackage.version !== "0.15.11") fail(`root package version must be 0.15.11 for Sprint 15.12, found ${rootPackage.version ?? "missing"}`);

for (const script of ["a11y:audit", "ux:audit", "regression:audit", "invitation-experience:audit", "guest-first-ux:audit", "quality:check", "release:check", "source:pack"]) {
  if (!rootPackage.scripts?.[script]) fail(`package.json: missing ${script} script`);
}

const requiredRoutes = [
  "apps/web/app/page.tsx",
  "apps/web/app/contact/page.tsx",
  "apps/web/app/dashboard/page.tsx",
  "apps/web/app/weddings/[id]/page.tsx",
  "apps/web/app/weddings/[id]/planning/page.tsx",
  "apps/web/app/weddings/[id]/guests/page.tsx",
  "apps/web/app/weddings/[id]/invitation/page.tsx",
  "apps/web/app/weddings/[id]/event-operations/page.tsx",
  "apps/web/app/weddings/[id]/memories/page.tsx",
  "apps/web/app/billing/page.tsx",
  "apps/web/app/orders/[id]/page.tsx",
  "apps/web/app/admin/page.tsx",
  "apps/web/app/partner/page.tsx",
  "apps/web/app/error.tsx",
  "apps/web/app/global-error.tsx",
  "apps/web/app/not-found.tsx",
];
for (const path of requiredRoutes) read(path);

const loadingBoundaries = [
  "apps/web/app/loading.tsx",
  "apps/web/app/dashboard/loading.tsx",
  "apps/web/app/account/loading.tsx",
  "apps/web/app/billing/loading.tsx",
  "apps/web/app/pricing/loading.tsx",
  "apps/web/app/orders/[id]/loading.tsx",
  "apps/web/app/admin/loading.tsx",
  "apps/web/app/partner/loading.tsx",
  "apps/web/app/weddings/[id]/loading.tsx",
];
for (const path of loadingBoundaries) read(path);

requireText("apps/web/app/global-error.tsx", /<html\s+lang="vi">/, "global error must render its own localized html element");
requireText("apps/web/app/global-error.tsx", /error\.digest/, "global error must expose the safe support digest");
requireText("apps/web/app/error.tsx", /onRetry=\{reset\}/, "route error must offer retry");
requireText("apps/web/app/not-found.tsx", /(?:EmptyState|ErrorState)/, "not-found route must use a shared friendly state");
requireText("apps/web/app/design-system.css", /Sprint 15\.7 — final regression/, "final regression CSS layer is missing");
requireText("apps/web/app/design-system.css", /\.app-main-content \.guest-table th\s*\{[^}]*font-size:\s*12px/s, "guest table headings must remain readable");
requireText("apps/web/app/design-system.css", /\.app-main-content \.admin-order-list strong\s*\{[^}]*font-size:\s*14px/s, "admin order titles must remain readable");
requireText("apps/web/app/design-system.css", /\.guest-table-wrap\s*\{[^}]*scrollbar-gutter:\s*stable/s, "guest table wrapper must preserve stable responsive scrolling");
requireText("apps/web/app/design-system.css", /\.admin-order-list\s*\{[^}]*overscroll-behavior:/s, "admin queue must contain its own scroll behavior");
requireText("scripts/pack-source.mjs", /apps\/api\/src\/generated\/prisma/, "source pack must exclude generated Prisma Client");

const sourceFiles = walk(join(root, "apps"), [".ts", ".tsx"]);
let importCount = 0;
let parsedCount = 0;
for (const file of sourceFiles) {
  const source = readFileSync(file, "utf8");
  const name = relative(root, file);
  const parsed = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.ES2022,
    true,
    file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
  const syntaxErrors = parsed.parseDiagnostics.filter((diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error);
  if (syntaxErrors.length) {
    const message = ts.flattenDiagnosticMessageText(syntaxErrors[0].messageText, " ");
    fail(`${name}: TypeScript/TSX parse failed: ${message}`);
  } else {
    parsedCount += 1;
  }
  if (/window\.(?:alert|confirm|prompt)\s*\(/.test(source)) fail(`${name}: contains a blocking browser dialog`);
  for (const match of source.matchAll(/(?:from\s+|import\s*\()(["'])(\.\.?\/[^"']+)\1/g)) {
    importCount += 1;
    if (match[2].includes("generated/prisma")) continue;
    if (!resolveRelativeImport(file, match[2])) fail(`${name}: unresolved relative import ${match[2]}`);
  }
}

const pageFiles = walk(join(root, "apps", "web", "app"), [".tsx"]).filter((file) => file.endsWith(`${join("", "page.tsx")}`));
const routeNames = pageFiles.map((file) => relative(join(root, "apps", "web", "app"), dirname(file)).replaceAll("\\", "/") || "/");
if (new Set(routeNames).size !== routeNames.length) fail("duplicate Next.js page route detected");
const cssFiles = walk(join(root, "apps", "web"), [".css"]);
for (const file of cssFiles) {
  const source = readFileSync(file, "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
  let depth = 0;
  for (const character of source) {
    if (character === "{") depth += 1;
    if (character === "}") depth -= 1;
    if (depth < 0) break;
  }
  if (depth !== 0) fail(`${relative(root, file)}: unbalanced CSS braces`);
}
notes.push(`${pageFiles.length} page routes`);
notes.push(`${loadingBoundaries.length} required loading boundaries`);
notes.push(`${parsedCount} TypeScript/TSX files parsed`);
notes.push(`${importCount} relative imports resolved`);
notes.push(`${cssFiles.length} CSS files balanced`);

if (failures.length) {
  console.error(`Regression audit failed (${failures.length}):\n${failures.join("\n")}`);
  process.exit(1);
}

console.log(`Regression audit passed: ${notes.join(" · ")}.`);
