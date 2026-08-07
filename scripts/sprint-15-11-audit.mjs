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

requirePattern("apps/web/components/public-invitation.tsx", /previewViewport\?: "mobile" \| "desktop"/, "mobile preview contract missing");
requirePattern("apps/web/app/weddings/[id]/invitation/page.tsx", /previewViewport=\{device\}/, "editor does not pass the selected preview viewport");
requirePattern("apps/web/app/design-system.css", /\.inv4\.preview-mobile[\s\S]*?overflow-x:\s*hidden/, "mobile preview reflow layer missing");
requirePattern("apps/web/app/design-system.css", /\.inv4\.preview-mobile \.inv8-gift-card[\s\S]*?grid-template-columns:\s*minmax\(0, 1fr\)/, "gift QR mobile preview must collapse to one column");
requirePattern("apps/web/app/design-system.css", /\.inv4\.preview-mobile \.inv8-countdown[\s\S]*?repeat\(2/, "countdown mobile preview must use two columns");
requirePattern("apps/web/components/public-invitation.tsx", /Lời ngỏ từ gia đình/, "family announcement enhancement missing");
requirePattern("apps/web/components/public-invitation.tsx", /inv11-family-couple/, "couple focal point missing in family section");
requirePattern("apps/web/app/design-system.css", /\.inv8-events\.style-timeline \.inv8-event-content/, "refined programme timeline card missing");
requirePattern("apps/web/components/public-invitation.tsx", /inv11-event-meta/, "timeline metadata hierarchy missing");
requirePattern("apps/web/app/dashboard/page.tsx", /couple-monogram[\s\S]*?<b>\{wedding\.groomName/, "dashboard monogram should use fixed child elements");
requirePattern("apps/web/app/design-system.css", /\.couple-monogram[\s\S]*?white-space:\s*nowrap/, "dashboard monogram wrap protection missing");
requirePattern("apps/web/app/weddings/[id]/planning/page.tsx", /planning-search-icon[\s\S]*?<svg/, "planning search icon must use a stable SVG");
requirePattern("apps/web/app/thiep/[slug]/page.tsx", /PublicInvitation/, "canonical Vietnamese invitation route missing");
requirePattern("apps/web/app/i/[slug]/page.tsx", /redirect\(`\/thiep\//, "legacy /i route does not redirect to /thiep");
requirePattern("apps/web/app/dashboard/page.tsx", /ngaydoi\.vn\/thiep\//, "dashboard still exposes the technical /i URL");

const runtimeFiles = [
  "apps/web/app/page.tsx",
  "apps/web/app/dashboard/page.tsx",
  "apps/web/app/templates/page.tsx",
  "apps/web/app/weddings/new/page.tsx",
  "apps/web/app/weddings/[id]/page.tsx",
  "apps/web/app/weddings/[id]/invitation/page.tsx",
];
for (const file of runtimeFiles) {
  if (/\/(?:i)\//.test(read(file))) failures.push(`${file}: old /i/ public URL remains in user-facing runtime code`);
}

if (failures.length) {
  console.error(`Sprint 15.11 audit failed (${failures.length}):\n${failures.join("\n")}`);
  process.exit(1);
}
console.log("Sprint 15.11 audit passed: mobile preview, family announcement, programme timeline, clean public URL, dashboard monogram and planning search icon verified.");
