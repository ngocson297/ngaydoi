import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const checks = [];
const add = (name, ok, detail) => checks.push({ name, status: ok ? "PASS" : "ACTION", detail });
const exists = (file) => existsSync(resolve(root, file));
const pkg = JSON.parse(readFileSync(resolve(root, "package.json"), "utf8"));

add("Release version", pkg.version === "0.15.14", `Current ${pkg.version}`);
add("Production env template", exists("apps/api/.env.production.example"), "Use a private apps/api/.env.production with all placeholders replaced");
add("Production env file", exists("apps/api/.env.production"), exists("apps/api/.env.production") ? "Private production configuration is present locally" : "Create only on the deployment machine/provider; never commit secrets");
add("Security headers", exists("apps/web/next.config.ts"), "Web security header policy is configured");
add("Privacy policy", exists("apps/web/app/privacy/page.tsx"), "/privacy");
add("Terms", exists("apps/web/app/terms/page.tsx"), "/terms");
add("Backup restore drill", exists("scripts/backup-drill.mjs"), "Run npm run backup:create && npm run backup:drill before pilot");
add("Performance smoke", exists("scripts/performance-smoke.mjs"), "Run against the deployed API before opening the pilot");
add("Quality gate", String(pkg.scripts?.["quality:check"] ?? "").includes("sprint15.15:audit"), "Sprint 15.15 is included in quality:check");
add("Release gate", Boolean(pkg.scripts?.["production:check"]), "Run npm run production:check with production configuration in place");

console.log(`\nNgày Đôi Production Pilot Readiness — v${pkg.version}`);
console.table(checks);
const actionCount = checks.filter((item) => item.status === "ACTION").length;
console.log(actionCount ? `${actionCount} item(s) still require environment/deployment action before go-live.` : "Static readiness checklist is complete. Run the live smoke/drill gates before go-live.");
