# Ngày Đôi v0.15.14 — Sprint 15.15 Run Guide

## Upgrade local source

Sprint 15.15 has **no Prisma schema migration**. Keep the existing DB.

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

## Validate local

```bash
npm run quality:check
npm run build
```

Optional with API running:
```bash
npm run event-ops:smoke
npm run commercial:smoke
npm run performance:smoke
```

## Production pilot gate

Copy `apps/api/.env.production.example` to a private production env file and replace every placeholder, then:

```bash
npm run production:config-check -- --env=apps/api/.env.production
npm run production:report
npm run production:check
```

Backup restore drill:
```bash
npm run backup:create
npm run backup:drill
```

Coupon config: **Admin → Mã giảm giá**.
