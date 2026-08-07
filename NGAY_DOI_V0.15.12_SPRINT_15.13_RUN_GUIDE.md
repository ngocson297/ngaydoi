# Ngày Đôi v0.15.12 — Sprint 15.13 Run Guide

## Upgrade existing local DB

```bash
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

Owner path: `/weddings/:id/memories` → **Cài đặt** → bật **Chế độ trang kỷ niệm**.
Public URL remains `/thiep/:slug`.
