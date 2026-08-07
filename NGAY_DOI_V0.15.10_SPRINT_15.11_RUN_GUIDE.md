# Ngày Đôi v0.15.10 — Sprint 15.11 Run Guide

## Apply patch

Stop API and Web, then run:

```bash
cd ~/Downloads/ngaydoi
git apply --check ~/Downloads/ngaydoi-v0.15.10-sprint15.11-stabilization.patch
git apply ~/Downloads/ngaydoi-v0.15.10-sprint15.11-stabilization.patch
npm run quality:check
npm run build
```

No `npm install`, Prisma migration, deploy or seed is required.

## Run

Terminal 1:

```bash
cd ~/Downloads/ngaydoi
npm run db:up
npm run dev:api
```

Terminal 2:

```bash
cd ~/Downloads/ngaydoi
npm run dev:web
```

## Self-test

- Invitation Studio → switch to **Điện thoại · 390 px** and scroll through all sections.
- Test QR with one, two and three accounts.
- Test countdown, gallery, family and programme sections on at least four layout families.
- Open `/thiep/minh-anh` and verify `/i/minh-anh` redirects correctly.
- Verify My Weddings monogram remains one line.
- Verify the Planning search icon is centered and readable.
