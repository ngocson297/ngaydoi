# Ngày Đôi v0.15.10

Current milestone: **Phase 15 Extension — Sprint 15.11 Self-test Stabilization**.

## Current product status

Core product development and Sprint 15.8–15.10 are complete. Sprint 15.11 fixes the self-test feedback around mobile invitation preview, family announcement, programme timeline, dashboard monogram, public invitation URL and planning search affordance. Phase 16 and Phase 17 remain paused.

## Sprint 15.11 highlights

- Stable 390px Invitation Studio preview across all 36 templates.
- Richer two-family announcement and redesigned wedding-day programme timeline.
- Canonical public URLs at `/thiep/:slug`; legacy `/i/:slug` links continue to work through redirects.
- Fixed My Weddings monogram and Planning search icon.
- No migration, seed or dependency update required.

## Run local

Terminal 1:

```bash
npm run db:up
npm run dev:api
```

Terminal 2:

```bash
npm run dev:web
```

## Quality and release checks

```bash
npm run quality:check
npm run build
```

Complete local release gate:

```bash
npm run release:check
```

With API and database running:

```bash
npm run smoke:all
```

## Package source for the next change set

```bash
npm run source:pack
```

The package is created at `~/Downloads/ngaydoi-current.zip` without secrets, dependencies, build output or generated Prisma Client.

See `docs/REGRESSION_MATRIX.md`, `docs/DESIGN_SYSTEM.md` and `docs/SPRINT_15_7_RUN_GUIDE.md`.
