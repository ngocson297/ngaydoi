# Ngày Đôi — Sprint 15.9 Completion

Version: **v0.15.8**
Sprint: **15.9 — Guest-first Creation & UX Refinement**

## Goal

Reduce the largest remaining invitation-conversion friction: visitors can now experience and draft an invitation before creating an account. The sprint also closes the user feedback items around bank QR upload, copy feedback, select controls, Invitation Studio positioning, guest sent-state clarity and sidebar behavior.

## Delivered

### 1. Create first, register later

- Added public route `/create`.
- Visitors can select a template, enter couple names, date and greeting, and see a live preview without authentication.
- Drafts persist in browser storage.
- Save/continue routes unauthenticated users through registration and email verification, then imports the draft into a real wedding.
- `next` is preserved through login, registration and verification.
- Import is designed to avoid creating duplicate weddings on retry or reload.
- If a visitor selected a template unavailable on the resulting plan, names/date/greeting are preserved and the system applies a free fallback template with a transparent notice.

### 2. Upload QR from a banking app

- Uploading an existing bank QR is the default mode.
- JPEG, PNG and WebP are accepted, with a 4 MB limit.
- BIN and bank selection are not required in upload mode.
- Optional display fields remain available: label, account holder, account number, bank name and message.
- Automatic VietQR generation remains available as an advanced alternative.
- Up to three gift-transfer accounts remain supported.
- Uploaded files are wedding-scoped; the public URL is resolved by the server rather than trusted from the client.
- Replaced QR assets are removed only after the latest invitation autosave succeeds, preventing broken public invitations during editing.

### 3. Copy-link feedback

Fixed-position toast feedback now appears after copying:

- Guest invitation links.
- Collaborator links.
- Shared album links.

The feedback remains visible even when the user is scrolled deep in a page.

### 4. Select and dropdown controls

- Native select triggers now share one visual treatment.
- Added a consistent chevron, right padding, hover/focus states and pointer cursor.
- Disabled controls use a not-allowed cursor.
- Native option menus remain browser/OS-native for accessibility and stability.

### 5. Invitation Studio header

- Removed legacy negative positioning that could place the editor under the authenticated header.
- Desktop and mobile offsets now respect the surrounding application shell.

### 6. Guest invitation sent-state

- An unsent guest shows a clear `Đã gửi?` action.
- After confirmation, the action disappears.
- A non-interactive `Đã gửi` status pill replaces it.
- Existing API behavior and guest data logic were preserved.

### 7. Sidebar decision

The menu remains a focused accordion:

- Only one group is open at a time.
- The group containing the active page opens automatically.
- Opening another group closes the previous one.
- Expand-all is intentionally not the default because the project now has many modules and expanded groups recreate the original clutter and scanning problem.

## Database impact

One additive migration creates `GiftQrAsset` and its wedding foreign key. It does not drop, truncate, rename or reset existing data.

## Compatibility

- Existing Sprint 15.8 automatically generated QR configurations remain valid.
- Existing invitations without `mode` are interpreted as automatic VietQR records.
- No runtime package dependency was added.
- Existing order/payment QR logic is not changed.
- Gift-transfer QR never marks an order as paid or confirms that money was received.

## Status after Sprint 15.9

- Core Phase 1–15 product: complete.
- Sprint 15.8 invitation overhaul: complete.
- Sprint 15.9 guest-first UX: complete.
- Sprint 15.10 template expansion pack: pending.
- Phase 16 closed beta and Phase 17 production launch: intentionally paused.
