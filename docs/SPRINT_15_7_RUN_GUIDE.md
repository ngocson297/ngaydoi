# Ngày Đôi v0.15.6 — Sprint 15.7 Run Guide

## Apply the patch

Stop API and Web, then run from `~/Downloads/ngaydoi`:

```bash
git apply --check ~/Downloads/ngaydoi-v0.15.6-sprint15.7-regression.patch
git apply ~/Downloads/ngaydoi-v0.15.6-sprint15.7-regression.patch
npm run quality:check
npm run build
```

No dependency, Prisma schema, migration or seed changes are included.

## Run locally

Terminal 1:

```bash
npm run db:up
npm run dev:api
```

Terminal 2:

```bash
npm run dev:web
```

## Final release gates

Static and build gate:

```bash
npm run release:check
```

With API and database running, full smoke aggregation:

```bash
npm run smoke:all
```

## Manual focus areas

- Guests page at 390px: filter layout, horizontal table scroll and sticky selection/name columns.
- Admin orders: readable queue/detail text and contained scrolling.
- Pricing/order: total hierarchy and print receipt.
- Planning: square task completion control and mobile task actions.
- Root error recovery: no blank page or stack trace.
