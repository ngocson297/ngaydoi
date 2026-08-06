# Ngày Đôi v0.15.8

Current milestone: **Phase 15 Extension — Sprint 15.9 Guest-first Creation & UX Refinement**.

## Current product status

The complete core product and the seven UX-hardening sprints are finished. Sprint 15.8 upgraded invitation layouts and gift-transfer QR; Sprint 15.9 now lets visitors create before registering, upload their bank QR directly, and continue safely after authentication. Phase 16 and Phase 17 remain intentionally paused for self-testing and feedback.

## Sprint 15.9 highlights

- Public create-first experience at `/create`.
- Browser-local invitation draft with safe authenticated import.
- Uploaded bank QR as the default gift-transfer method; automatic VietQR remains optional.
- Visible toast feedback for copied links.
- Refined native select controls and fixed Invitation Studio header positioning.
- Clear guest invitation sent-state behavior.
- Focused one-open sidebar accordion.

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
