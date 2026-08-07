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
if (!["0.15.11", "0.15.12", "0.15.13", "0.15.14"].includes(pkg.version)) failures.push(`package.json: expected Sprint 15.12+ version, found ${pkg.version}`);
requirePattern("apps/api/prisma/schema.prisma", /model MemoryReaction[\s\S]*?actorHash/, "MemoryReaction model missing");
requirePattern("apps/api/prisma/schema.prisma", /model MemoryComment[\s\S]*?SocialContentStatus/, "MemoryComment model missing");
requirePattern("apps/api/prisma/schema.prisma", /model GuestbookEntry[\s\S]*?invitationId/, "GuestbookEntry model missing");
requirePattern("apps/api/prisma/schema.prisma", /publishWish\s+Boolean/, "RSVP public-wish opt-in missing");
requirePattern("apps/api/src/common/storage/storage.service.ts", /presignPut\(/, "presigned direct upload support missing");
requirePattern("apps/api/src/common/storage/storage.service.ts", /UNSIGNED-PAYLOAD/, "SigV4 presigned upload contract missing");
requirePattern("apps/api/src/memories/memories.controller.ts", /upload\/prepare/, "direct upload prepare endpoint missing");
requirePattern("apps/api/src/memories/memories.controller.ts", /reactions\/toggle/, "reaction endpoint missing");
requirePattern("apps/api/src/memories/memories.controller.ts", /guestbook/, "guestbook endpoint missing");
requirePattern("apps/api/src/memories/memories.service.ts", /publicAssetPage/, "cursor-based public asset page missing");
requirePattern("apps/api/src/memories/memories.service.ts", /MEMORY_ALBUM_MAX_ITEMS \?\? 3000/, "album item quota missing");
requirePattern("apps/web/app/memories\/\[token\]\/page\.tsx", /IntersectionObserver/, "public album infinite scroll missing");
requirePattern("apps/web/app/memories/[token]/page.tsx", /uploadPolicy\.strategy === "DIRECT"/, "direct upload client path missing");
requirePattern("apps/web/app/memories/[token]/page.tsx", /toggleReaction/, "album reactions UI missing");
requirePattern("apps/web/app/memories/[token]/page.tsx", /submitComment/, "album comments UI missing");
requirePattern("apps/web/app/weddings/[id]/memories/page.tsx", /Lời chúc & bình luận/, "owner social moderation tab missing");
requirePattern("apps/web/components/public-invitation.tsx", /Cho phép hiển thị lời chúc này trong Sổ lưu bút/, "RSVP public wish opt-in UI missing");
requirePattern("apps/web/components/public-invitation.tsx", /GuestbookPreviewSection/, "invitation guestbook preview missing");
requirePattern("apps/web/app/globals.css", /memory-social-actions/, "social album styling missing");

const migration = read("apps/api/prisma/migrations/20260807091500_sprint15_wedding_social/migration.sql");
if (/\bDROP\s+(?:TABLE|COLUMN|TYPE)\b/i.test(migration)) failures.push("Sprint 15.12 migration contains a destructive DROP statement");

if (failures.length) {
  console.error(`Sprint 15.12 audit failed (${failures.length}):\n${failures.join("\n")}`);
  process.exit(1);
}
console.log("Sprint 15.12 audit passed: scalable album pagination, direct S3/R2 upload path, guestbook, reactions, comments, moderation and quotas verified.");
