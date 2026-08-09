# Ngày Đôi v0.15.15

Current milestone: **Sprint 15.16 — Release Candidate & End-to-End Hardening**.

## Current product status

The v0.15.15 release candidate freezes feature expansion and hardens the complete wedding journey for pilot. It includes backend tenant/RBAC release gates, approved-only public album media, direct-upload deadline revalidation, request tracing, production checks and repeatable RC commands.

## Sprint 15.16 release gate

- Public album media is restricted to approved assets; pending/private assets require an authenticated wedding-scoped owner endpoint.
- Direct-upload completion revalidates album availability and upload deadlines.
- `sprint15.16:audit` checks tenant isolation, Admin RBAC, public/private album boundaries, tracing and public rate limits.
- `rc:smoke`, `rc:report` and `rc:check` provide repeatable release-candidate gates.
- Sprint 15.16 requires no Prisma migration and preserves existing data.

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
