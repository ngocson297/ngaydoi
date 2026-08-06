# Ngày Đôi v0.15.7

Current milestone: **Phase 15 — Sprint 15.7 Regression & Release Quality Gate**.

## Phase 15 status

All seven UX-hardening sprints are complete. The product now has a centralized design system, role-aware navigation, form protection, recoverable page states, accessibility hardening, Home/contact polish and repeatable regression gates.

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


## v0.15.7

Invitation Experience Overhaul: 6 layout families, richer countdown/programme sections, photo-driven invitations and optional VietQR gift-transfer cards.
