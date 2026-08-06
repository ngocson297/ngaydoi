import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const failures = [];
const read = (file) => {
  const absolute = join(root, file);
  if (!existsSync(absolute)) { failures.push(`${file}: missing`); return ""; }
  return readFileSync(absolute, "utf8");
};
const requirePattern = (file, pattern, message) => {
  const source = read(file);
  if (source && !pattern.test(source)) failures.push(`${file}: ${message}`);
};

const constants = read("apps/api/src/invitation/invitation.constants.ts");
const experienceBlock = constants.match(/const TEMPLATE_EXPERIENCE:[\s\S]*?\n};/)?.[0] ?? "";
const templateExperienceCount = [...experienceBlock.matchAll(/^\s*"[^"]+":\s*\{/gm)].length;
const layouts = new Set([...experienceBlock.matchAll(/layout:\s*"([^"]+)"/g)].map((match) => match[1]));
const countdowns = new Set([...experienceBlock.matchAll(/countdownStyle:\s*"([^"]+)"/g)].map((match) => match[1]));
const eventStyles = new Set([...experienceBlock.matchAll(/eventStyle:\s*"([^"]+)"/g)].map((match) => match[1]));
if (templateExperienceCount !== 24) failures.push(`template experience metadata expected 24 entries, received ${templateExperienceCount}`);
for (const layout of ["portrait", "split", "editorial", "arch", "story", "minimal"]) if (!layouts.has(layout)) failures.push(`missing template layout ${layout}`);
for (const style of ["cards", "editorial", "rings", "minimal"]) if (!countdowns.has(style)) failures.push(`missing countdown style ${style}`);
for (const style of ["timeline", "cards", "agenda", "steps"]) if (!eventStyles.has(style)) failures.push(`missing event programme style ${style}`);

requirePattern("apps/api/prisma/schema.prisma", /giftAccounts\s+Json/, "gift account JSON field missing");
requirePattern("apps/api/prisma/schema.prisma", /showGift\s+Boolean/, "gift visibility field missing");
requirePattern("apps/api/prisma/schema.prisma", /sectionOrder[\s\S]*"gift"/, "gift section missing from default order");
requirePattern("apps/api/prisma/migrations/20260806150000_phase15_invitation_experience/migration.sql", /ADD COLUMN "giftAccounts" JSONB/, "gift migration missing");
requirePattern("apps/api/src/invitation/invitation.controller.ts", /@Get\("gift-transfer\/banks"\)/, "bank directory endpoint missing");
requirePattern("apps/api/src/invitation/invitation.service.ts", /api\.vietqr\.io\/v2\/banks/, "official bank directory integration missing");
requirePattern("apps/web/lib/invitations.ts", /img\.vietqr\.io\/image\//, "VietQR QuickLink builder missing");
requirePattern("apps/web/lib/invitations.ts", /query\.set\("addInfo"/, "transfer note is not encoded in QR");
if (/query\.set\("amount"/.test(read("apps/web/lib/invitations.ts"))) failures.push("QR must not prefill an amount for wedding gifts");
requirePattern("apps/web/app/weddings/[id]/invitation/page.tsx", /activeTab === "gift"/, "gift editor tab missing");
requirePattern("apps/web/components/public-invitation.tsx", /GiftTransferSection/, "public gift section missing");
requirePattern("apps/web/components/public-invitation.tsx", /variant-\$\{variant\}/, "countdown variants missing");
requirePattern("apps/web/components/public-invitation.tsx", /style-\$\{experience\.eventStyle\}/, "event programme variants missing");
requirePattern("apps/web/app/design-system.css", /Sprint 15\.8 — Invitation Experience Overhaul/, "Sprint 15.8 visual layer missing");
requirePattern("apps/web/app/design-system.css", /\.inv8-gift-card/, "gift card styles missing");
requirePattern("apps/web/app/design-system.css", /\.inv8-hero\.layout-split/, "split invitation layout missing");
requirePattern("apps/web/app/design-system.css", /\.inv8-hero\.layout-story/, "photo story invitation layout missing");
requirePattern("apps/web/app/page.tsx", /landing-template-preview layout-\$\{template\.layout\}/, "Home template showcase does not reflect layout diversity");

if (failures.length) {
  console.error(`Invitation experience audit failed (${failures.length}):\n${failures.join("\n")}`);
  process.exit(1);
}
console.log(`Invitation experience audit passed: 24 templates · ${layouts.size} layout families · ${countdowns.size} countdown styles · ${eventStyles.size} programme styles · gift transfer QR ready.`);
