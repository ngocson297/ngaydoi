# Ngày Đôi v0.15.11 — Sprint 15.12 Run Guide

## Upgrade from v0.15.10

Stop API and Web first with `Ctrl + C`.

From the fixed local project folder:

```bash
cd ~/Downloads/ngaydoi

git apply --check ~/Downloads/ngaydoi-v0.15.11-sprint15.12-wedding-social.patch
git apply ~/Downloads/ngaydoi-v0.15.11-sprint15.12-wedding-social.patch
```

Sprint 15.12 has an additive Prisma migration:

```bash
npm run db:up
npm run db:generate
npm run db:deploy
```

Do **not** run:

```bash
npm run db:clean
npm run db:reset
```

No seed is required for this sprint.

## Validation

```bash
npm run quality:check
npm run build
```

With API + database running, also run:

```bash
npm run memories:smoke
```

## Start locally

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

## Suggested self-test

1. Open the owner album for `minh-anh`.
2. Confirm the new social settings are visible.
3. Open the public album QR/link in another browser/private window.
4. Upload several images.
5. Approve pending media from owner view.
6. Scroll the public album and confirm additional pages load near the bottom.
7. Heart an image and refresh; the reaction count should persist for that browser actor.
8. Add a comment. If moderation is enabled, confirm it does not appear until owner approval.
9. Submit an RSVP wish with **Hiển thị trong Sổ lưu bút** enabled.
10. Approve the wish and confirm it appears on the invitation and album Guestbook.
11. Submit another RSVP without public-wish permission and confirm it remains private.
12. Test at 390 px, 430 px, 768 px and desktop.

## LOCAL vs production upload

LOCAL self-test keeps proxy upload through the API.

For future S3/R2 configuration, the web uses direct presigned upload automatically when the API reports `DIRECT` strategy. Browser CORS must allow the web origin and PUT requests to the storage bucket.

Production flow:

```text
Guest phone
    ↓
Object Storage (S3 / Cloudflare R2)
    ↓
CDN
    ↓
Album
```

Relevant optional API environment variables are documented in `apps/api/.env.example`.

## Commit after self-test

```bash
cd ~/Downloads/ngaydoi
git add .
git commit -m "feat: complete sprint 15.12 wedding social experience"
git tag -a v0.15.11 -m "Sprint 15.12 Wedding Social Experience"
```
