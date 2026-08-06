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

requirePattern("apps/web/app/create/page.tsx", /Tạo trước · đăng ký sau/, "guest-first builder headline missing");
requirePattern("apps/web/app/create/page.tsx", /saveGuestDraft/, "local draft persistence missing");
requirePattern("apps/web/app/create/continue/page.tsx", /importedWeddingId/, "idempotent draft import guard missing");
requirePattern("apps/web/app/login/page.tsx", /nextPath/, "login does not preserve continuation route");
requirePattern("apps/web/app/register/page.tsx", /nextPath/, "registration does not preserve continuation route");
requirePattern("apps/web/app/page.tsx", /href="\/create"/, "Home primary CTA does not open guest-first builder");
requirePattern("apps/web/app/templates/page.tsx", /\/create\?template=/, "template cards do not preserve selected template");

requirePattern("apps/api/prisma/schema.prisma", /model GiftQrAsset/, "uploaded gift QR model missing");
requirePattern("apps/api/prisma/migrations\/20260806180000_sprint15_guest_first_qr_upload\/migration.sql", /CREATE TABLE "GiftQrAsset"/, "additive gift QR migration missing");
requirePattern("apps/api/src/invitation/invitation.controller.ts", /@Post\("weddings\/:id\/gift-qr"\)/, "gift QR upload endpoint missing");
requirePattern("apps/api/src/invitation/invitation.controller.ts", /fileSize:\s*4 \* 1024 \* 1024/, "gift QR upload size limit missing");
requirePattern("apps/api/src/invitation/invitation.service.ts", /GIFT_QR_UPLOADED/, "gift QR upload audit log missing");
requirePattern("apps/web/app/weddings\/\[id\]\/invitation\/page.tsx", /pendingGiftQrDeleteRef/, "safe post-save QR cleanup missing");
requirePattern("apps/web/app/weddings\/\[id\]\/invitation\/page.tsx", /Tải QR ngân hàng/, "upload-first QR mode missing");
requirePattern("apps/web/app/weddings\/\[id\]\/invitation\/page.tsx", /Tạo QR tự động/, "automatic VietQR fallback mode missing");
requirePattern("apps/web/lib/invitations.ts", /giftAccountQrUrl/, "unified uploaded/VietQR renderer missing");

requirePattern("apps/web/app/weddings\/\[id\]\/guests\/page.tsx", /Đã sao chép link mời/, "copy-link toast missing");
requirePattern("apps/web/app/weddings\/\[id\]\/guests\/page.tsx", /guest-sent-confirmed/, "sent status does not replace the action");
requirePattern("apps/web/app/design-system.css", /select:not\(\[multiple\]\)/, "select affordance styling missing");
requirePattern("apps/web/app/design-system.css", /cursor:\s*pointer/, "pointer cursor styling missing");
requirePattern("apps/web/app/design-system.css", /\.app-main-content \.editor-page\s*\{[\s\S]*?margin:\s*0;/, "Invitation Studio header overlap fix missing");
requirePattern("apps/web/components/app-shell.tsx", /Object\.fromEntries\(groups\.map\(\(group\) => \[group\.id, opening && group\.id === id\]\)\)/, "sidebar must use one-open-group accordion behavior");

const migration = read("apps/api/prisma/migrations/20260806180000_sprint15_guest_first_qr_upload/migration.sql");
if (/DROP\s+(?:TABLE|COLUMN)|TRUNCATE|DELETE\s+FROM/i.test(migration)) failures.push("gift QR migration contains a destructive statement");

if (failures.length) {
  console.error(`Guest-first UX audit failed (${failures.length}):\n${failures.join("\n")}`);
  process.exit(1);
}
console.log("Guest-first UX audit passed: create-first flow, QR upload, feedback toast, refined selects, stable editor header, sent-state clarity and one-open sidebar verified.");
