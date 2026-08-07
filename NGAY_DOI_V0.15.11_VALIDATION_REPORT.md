# Ngày Đôi v0.15.11 — Validation Report

## Static quality gate

Command:

```bash
NODE_PATH=$(npm root -g) npm run quality:check
```

Result: **PASS**

- Accessibility audit: 95 Web source files checked.
- UX audit: PASS.
- Regression audit: 39 page routes, 9 loading boundaries, 217 TS/TSX files parsed, 530 relative imports resolved, 2 CSS files balanced.
- Invitation Experience audit: 36 templates / 6 layout families / 4 countdown styles / 4 programme styles.
- Guest-first UX audit: PASS.
- Sprint 15.10 audit: PASS.
- Sprint 15.11 audit: PASS.
- Sprint 15.12 audit: PASS.

## Migration review

Migration:

`apps/api/prisma/migrations/20260807091500_sprint15_wedding_social/migration.sql`

Review result:
- additive types/columns/tables/indexes/foreign keys only,
- no `DROP TABLE`, `DROP COLUMN`, truncate or reset,
- existing wedding, invitation, RSVP and memory rows are retained.

## Upload hardening review

- Proxy upload validates allowed MIME, size and basic file signature.
- Direct S3/R2 upload uses a signed short-lived upload ticket.
- Direct completion verifies object size exactly matches the ticket.
- Direct completion verifies storage Content-Type when provided by the object store.
- Album quota is checked before prepare/upload and again before direct completion.
- Object is deleted when direct completion detects an invalid size/type.

## Runtime build status in artifact environment

`npm run db:validate` could not execute because the artifact source intentionally excludes installed dependencies:

```text
prisma: not found
```

`npm run build` could not execute for the same environment reason:

```text
nest: not found
```

These are environment/dependency-availability failures, not observed source compiler failures. The final build and Prisma validation must be run on the user's existing local project where dependencies are installed.

## Runtime smoke

`apps/api/scripts/memories-smoke.ts` was expanded to exercise the new social API. It requires a running local database/API, so the final runtime result is intentionally left to the local self-test step.

## Known production follow-ups

- Configure storage bucket CORS for browser direct PUT uploads.
- Put a CDN in front of production media.
- Consider image thumbnail generation and video transcoding for very large deployments.
- Consider private/signed CDN delivery if album media must not be shareable outside the wedding link.
- Consider background malware/content scanning before public approval for higher-risk deployments.
