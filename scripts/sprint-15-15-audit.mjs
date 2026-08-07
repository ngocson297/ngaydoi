import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const failures = [];
const read = (file) => {
  const path = join(root, file);
  if (!existsSync(path)) { failures.push(`${file}: missing`); return ""; }
  return readFileSync(path, "utf8");
};
const requirePattern = (file, pattern, message) => {
  const source = read(file);
  if (source && !pattern.test(source)) failures.push(`${file}: ${message}`);
};

const pkg = JSON.parse(read("package.json") || "{}");
if (pkg.version !== "0.15.14") failures.push(`package.json: expected 0.15.14, found ${pkg.version}`);
for (const script of ["production:config-check", "production:check", "production:report", "backup:drill", "performance:smoke", "sprint15.15:audit"]) {
  if (!pkg.scripts?.[script]) failures.push(`package.json: ${script} script missing`);
}
if (!String(pkg.scripts?.["quality:check"] ?? "").includes("sprint15.15:audit")) failures.push("package.json: Sprint 15.15 audit is not in quality:check");

requirePattern("apps/api/.env.production.example", /NODE_ENV=production/, "production template missing NODE_ENV");
requirePattern("apps/api/.env.production.example", /STORAGE_PROVIDER=R2/, "production object storage template missing");
requirePattern("apps/api/.env.production.example", /RELEASE_SHA=/, "release SHA gate missing");
requirePattern("scripts/production-config-check.mjs", /Production configuration check passed/, "production configuration gate missing");
requirePattern("scripts/backup-drill.mjs", /Restore drill passed/, "backup restore drill missing");
requirePattern("scripts/performance-smoke.mjs", /Performance smoke passed/, "performance smoke missing");
requirePattern("scripts/production-readiness-report.mjs", /Production Pilot Readiness/, "production readiness report missing");
requirePattern("apps/web/next.config.ts", /X-Content-Type-Options/, "security headers missing");
requirePattern("apps/web/next.config.ts", /Permissions-Policy/, "permissions policy missing");
requirePattern("apps/api/src/common/config/environment.service.ts", /MEMORY_SECURITY_SECRETS/, "memory secret isolation production gate missing");
requirePattern("apps/api/src/common/config/environment.service.ts", /REQUIRE_EMAIL_VERIFICATION/, "email verification production gate missing");

// QR printing regression: all guests must receive a printable QR, even without invitation tokens.
requirePattern("apps/api/src/event-operations/event-operations.controller.ts", /guest-id-qr\/:guestId\.svg/, "guest-id QR fallback endpoint missing");
requirePattern("apps/api/src/event-operations/event-operations.service.ts", /NDGUEST:\$\{guest\.id\}/, "guest-id QR payload missing");
requirePattern("apps/web/app/weddings/[id]/event-operations/page.tsx", /data\?\.guests \?\? \[\]/, "print view still filters out guests without invitation tokens");
requirePattern("apps/web/app/weddings/[id]/event-operations/page.tsx", /guest-id-qr/, "print view QR fallback missing");
requirePattern("apps/web/app/checkin/[token]/page.tsx", /NDGUEST:/, "check-in scanner does not understand fallback guest QR");

// Gift preview regression.
requirePattern("apps/web/app/weddings/[id]/invitation/page.tsx", /mode:\s*"UPLOAD"/, "new gift account is missing mode");
requirePattern("apps/web/app/weddings/[id]/invitation/page.tsx", /qrAssetId:\s*""/, "new gift account is missing qrAssetId");
requirePattern("apps/web/app/weddings/[id]/invitation/page.tsx", /qrImageUrl:\s*""/, "new gift account is missing qrImageUrl");
requirePattern("apps/web/app/globals.css", /preview-desktop[\s\S]*inv8-gift-card/, "embedded desktop gift preview hardening missing");
requirePattern("apps/web/app/globals.css", /preview-mobile[\s\S]*inv8-gift-card/, "embedded mobile gift preview hardening missing");

// Coupon configuration moved from seed-only to Admin.
requirePattern("apps/api/src/admin/admin.controller.ts", /@Get\("coupons"\)/, "coupon list API missing");
requirePattern("apps/api/src/admin/admin.controller.ts", /@Post\("coupons"\)/, "coupon create API missing");
requirePattern("apps/api/src/admin/admin.controller.ts", /@Patch\("coupons\/:id"\)/, "coupon update API missing");
requirePattern("apps/web/app/admin/page.tsx", /Mã giảm giá/, "Admin coupon management UI missing");
requirePattern("apps/web/app/admin/page.tsx", /planOptions/, "coupon plan scoping controls missing");
requirePattern("apps/web/components/navigation/navigation-model.ts", /couponsAdmin/, "coupon navigation entry missing");
requirePattern("apps/web/app/admin/page.tsx", /ADMIN COMMAND CENTER/, "Admin full-system overview missing");
requirePattern("apps/web/app/admin/page.tsx", /openSupportTickets/, "Admin overview does not summarize cross-module operations");
requirePattern("apps/web/app/admin/admin-console.module.css", /commandGrid/, "Admin console visual system missing");
for (const page of ["system", "pilot", "growth", "partners"]) {
  requirePattern(`apps/web/app/admin/${page}/page.tsx`, /admin-console\.module\.css/, `${page} Admin page is not using the shared Admin console UI`);
}

// Pilot privacy/legal surfaces.
requirePattern("apps/web/app/privacy/page.tsx", /Chính sách bảo mật/, "privacy page missing");
requirePattern("apps/web/app/terms/page.tsx", /Điều khoản sử dụng/, "terms page missing");
requirePattern("apps/web/app/memories/[token]/page.tsx", /\/privacy/, "media upload privacy disclosure link missing");
requirePattern("apps/web/components/public-invitation.tsx", /inv4-legal-links/, "public invitation legal links missing");

if (failures.length) {
  console.error(`Sprint 15.15 audit failed (${failures.length}):\n${failures.join("\n")}`);
  process.exit(1);
}
console.log("Sprint 15.15 audit passed: production gates, QR print fallback, gift preview, coupon Admin, full-system command center and unified Admin UI verified.");
