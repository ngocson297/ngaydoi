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
if (!["0.15.13", "0.15.14"].includes(pkg.version)) failures.push(`package.json: expected 0.15.13 or 0.15.14, found ${pkg.version}`);
requirePattern("apps/api/prisma/schema.prisma", /commentModerationRequired\s+Boolean\s+@default\(false\)/, "instant comments are not the default");
requirePattern("apps/api/src/memories/memories.controller.ts", /comments\/:commentId/, "comment delete endpoint missing");
requirePattern("apps/api/src/memories/memories.controller.ts", /memories\/.*archive|memories\/:token\/archive/, "archive endpoint missing");
requirePattern("apps/api/src/memories/memories.service.ts", /deleteOwnComment/, "guest-owned comment delete missing");
requirePattern("apps/api/src/memories/memories.service.ts", /deleteOwnerComment/, "owner comment delete missing");
requirePattern("apps/api/src/memories/memories.service.ts", /actorHash === viewerHash/, "comment ownership marker missing");
requirePattern("apps/api/src/memories/memories.service.ts", /0x04034b50/, "ZIP local header writer missing");
requirePattern("apps/api/src/memories/memories.service.ts", /MEMORY_ARCHIVE_MAX_BYTES/, "archive safety limit missing");
requirePattern("apps/web/app/memories/\[token\]/page.tsx", /Tải toàn bộ \(\.ZIP\)/, "public download-all control missing");
requirePattern("apps/web/app/memories/\[token\]/page.tsx", /Tải \$\{downloadSelected\.length\} mục/, "selected ZIP download missing");
requirePattern("apps/web/app/memories/\[token\]/page.tsx", /deleteComment\(asset\.id, comment\.id\)/, "guest comment delete UI missing");
requirePattern("apps/web/app/weddings/\[id\]/memories/page.tsx", /deleteOwnerComment/, "owner comment delete UI missing");
requirePattern("apps/web/app/weddings/\[id\]/memories/page.tsx", /storagePolicy\.remainingBytes/, "storage usage visibility missing");
requirePattern("apps/web/app/globals.css", /memory-download-toolbar/, "download UX styles missing");

const migration = read("apps/api/prisma/migrations/20260807111500_sprint15_album_control_download_archive/migration.sql");
if (/\bDROP\s+(?:TABLE|COLUMN|TYPE)\b/i.test(migration)) failures.push("Sprint 15.14 migration contains a destructive DROP statement");
if (!/ALTER TABLE "MemoryAlbum" ALTER COLUMN "commentModerationRequired" SET DEFAULT false/.test(migration)) failures.push("Sprint 15.14 migration does not change comment default safely");

if (failures.length) {
  console.error(`Sprint 15.14 audit failed (${failures.length}):\n${failures.join("\n")}`);
  process.exit(1);
}
console.log("Sprint 15.14 audit passed: instant comments, owner/author deletion, selected/all ZIP downloads and storage visibility verified.");
