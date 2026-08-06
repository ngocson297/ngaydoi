# Ngày Đôi v0.15.8 — Sprint 15.9 Run Guide

## 1. Stop the running applications

Press `Ctrl + C` in the API and Web terminals. Keep Docker Desktop and the existing PostgreSQL volume.

## 2. Apply the patch

```bash
cd ~/Downloads/ngaydoi

git apply --check ~/Downloads/ngaydoi-v0.15.8-sprint15.9-guest-first-ux.patch
git apply ~/Downloads/ngaydoi-v0.15.8-sprint15.9-guest-first-ux.patch
```

## 3. Apply the additive database migration

```bash
npm run db:up
npm run db:generate
npm run db:deploy
```

Do not run:

```bash
npm run db:clean
npm run db:reset
```

No seed is required. No new npm dependency was added, so `npm install` is unnecessary when the existing `node_modules` is intact.

## 4. Validate

```bash
npm run quality:check
npm run build
```

## 5. Run locally

Terminal 1:

```bash
cd ~/Downloads/ngaydoi
npm run dev:api
```

Terminal 2:

```bash
cd ~/Downloads/ngaydoi
npm run dev:web
```

Open:

- `http://localhost:3000/create`
- `http://localhost:3000/templates`
- `http://localhost:3000/dashboard`

## Self-test checklist

### Guest-first creation

1. Open `/create` in a private/incognito window.
2. Choose a template and enter the couple names, date and greeting.
3. Refresh and confirm the draft remains.
4. Continue, register and complete email verification.
5. Confirm the draft becomes a wedding and opens Invitation Studio.
6. Reload the continuation page and confirm no duplicate wedding is created.
7. Try a paid template from a free account and confirm content remains while a free template fallback is explained.

### Gift-transfer QR upload

1. Open Invitation Studio → `Mừng cưới`.
2. Add an account; confirm `Tải QR ngân hàng` is the default.
3. Upload JPEG, PNG or WebP up to 4 MB without entering BIN.
4. Confirm the preview and public invitation render the uploaded QR.
5. Replace the image and wait for autosave; confirm the new QR still works.
6. Switch to `Tạo QR tự động` and confirm the existing VietQR flow still works.
7. Scan the public QR in a banking app before sharing the invitation.

### Feedback refinements

- Copy guest, collaborator and album links while scrolled down; confirm a fixed toast appears.
- Check select controls on desktop and mobile.
- Open Invitation Studio and confirm its header is not covered.
- Mark a guest as invited; confirm the action becomes a non-clickable `Đã gửi` status.
- Navigate the sidebar; confirm only the active/opened group expands.

## Commit after successful self-test

```bash
cd ~/Downloads/ngaydoi
git add .
git commit -m "feat: complete sprint 15.9 guest-first creation and UX refinement"
git tag -a v0.15.8 -m "Sprint 15.9 Guest-first Creation and UX Refinement"
```
