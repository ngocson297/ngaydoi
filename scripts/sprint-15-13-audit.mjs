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
if (!["0.15.12", "0.15.13", "0.15.14", "0.15.15"].includes(pkg.version)) failures.push(`package.json: expected 0.15.12+ compatible release, found ${pkg.version}`);
requirePattern("apps/api/prisma/schema.prisma", /memoryModeEnabled\s+Boolean\s+@default\(false\)/, "post-wedding mode field missing");
requirePattern("apps/api/prisma/schema.prisma", /thankYouSignature\s+String\?/, "thank-you signature field missing");
requirePattern("apps/api/prisma/schema.prisma", /featuredOrder\s+Int\?/, "featured memory ordering missing");
requirePattern("apps/api/src/memories/memories.controller.ts", /assets\/:assetId\/featured/, "featured-memory endpoint missing");
requirePattern("apps/api/src/memories/memories.service.ts", /count >= 12/, "featured-memory limit missing");
requirePattern("apps/api/src/memories/memories.service.ts", /memoryModeEnabled: body\.memoryModeEnabled/, "memory-mode owner setting missing");
requirePattern("apps/api/src/rsvp/rsvp.service.ts", /RSVP hiện đã đóng/, "RSVP API is not closed in post-wedding mode");
requirePattern("apps/api/src/weddings/weddings.service.ts", /memoryAlbum: \{ is: \{ memoryModeEnabled: true \} \}/, "public invitation can still expire while memory mode is enabled");
requirePattern("apps/api/src/guests/guests.service.ts", /!wedding\.memoryAlbum\?\.memoryModeEnabled/, "personalized invitation can still expire while memory mode is enabled");
requirePattern("apps/web/components/public-invitation.tsx", /PostWeddingRsvpClosedSection/, "post-wedding RSVP closed state missing");
requirePattern("apps/web/components/public-invitation.tsx", /MemoryThankYouSection/, "thank-you section missing");
requirePattern("apps/web/components/public-invitation.tsx", /FeaturedMemoriesSection/, "featured memories section missing");
requirePattern("apps/web/components/public-invitation.tsx", /!memoryMode && design\.showCountdown/, "countdown is not disabled in memory mode");
requirePattern("apps/web/app/weddings/\[id\]/memories/page\.tsx", /Chế độ trang kỷ niệm/, "owner memory-mode control missing");
requirePattern("apps/web/app/weddings/\[id\]/memories/page\.tsx", /toggleFeatured/, "owner featured-memory action missing");
requirePattern("apps/web/app/globals.css", /inv-memory-thank-you/, "post-wedding styles missing");
requirePattern("apps/api/scripts/memories-smoke.ts", /Post-wedding memory mode is not exposed/, "post-wedding smoke coverage missing");

const migration = read("apps/api/prisma/migrations/20260807103000_sprint15_post_wedding_memory/migration.sql");
if (/\bDROP\s+(?:TABLE|COLUMN|TYPE)\b/i.test(migration)) failures.push("Sprint 15.13 migration contains a destructive DROP statement");

if (failures.length) {
  console.error(`Sprint 15.13 audit failed (${failures.length}):\n${failures.join("\n")}`);
  process.exit(1);
}
console.log("Sprint 15.13 audit passed: same-link post-wedding mode, thank-you experience, featured memories, RSVP closure and additive migration verified.");
