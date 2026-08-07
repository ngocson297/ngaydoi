# Ngày Đôi v0.15.11

Current milestone: **Phase 15 Extension — Sprint 15.12 Wedding Social Experience & Album Scalability**.

## Current product status

Core product development and Sprint 15.8–15.11 are complete. Sprint 15.12 upgrades Shared Memories into a wedding-scoped social album with cursor pagination, Guestbook wishes, reactions, comments, moderation and a production-ready direct-upload path for S3/R2. Phase 16 and Phase 17 remain paused.

## Sprint 15.12 highlights

- Wedding album feed now uses cursor pagination and infinite scroll instead of loading every asset at once.
- Guests can react with a heart, comment on approved media and browse approved Guestbook wishes within the same wedding space.
- RSVP wishes are private by default and only enter the public Guestbook when the guest explicitly opts in; moderation can remain required.
- Album owners can moderate comments and Guestbook entries and control reactions, comments, downloads and Guestbook visibility.
- Upload quotas protect local self-test and future production usage.
- LOCAL keeps the existing API upload path; S3/R2 can use presigned direct browser uploads so media bypasses the API process.
- Sprint 15.12 includes an additive Prisma migration; existing wedding/media data is preserved.

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
