# Ngày Đôi v0.15.13 — Sprint 15.14 Run Guide

## Apply patch on v0.15.12

```bash
git apply --check ~/Downloads/ngaydoi-v0.15.13-sprint15.14-album-control-download-archive.patch
git apply ~/Downloads/ngaydoi-v0.15.13-sprint15.14-album-control-download-archive.patch
```

## Upgrade DB

```bash
npm install
npm run db:up
npm run db:generate
npm run db:deploy
```

Do **not** run `db:reset` or `db:clean`.

## Run

Terminal 1:
```bash
npm run dev:api
```

Terminal 2:
```bash
npm run dev:web
```

## Validate

```bash
npm run quality:check
npm run build
```

With API + DB running:
```bash
npm run memories:smoke
```

Public album: comment appears immediately, own comment can be deleted, select media → ZIP, or download all ZIP.
Owner: `/weddings/:id/memories` → **Lời chúc & bình luận** / **Cài đặt**.
