# NGÀY ĐÔI v0.7.0 — Validation Report

## Validation scope

Validation was performed against the packaged Phase 7 source before delivery.

## Passed static checks

- 135 TypeScript/TSX implementation files parsed: **0 syntax errors**.
- Duplicate object-literal field scan: **0 duplicates**.
- API declaration/semantic check with framework-compatible stubs: **PASS**.
- Web semantic/nullability/property check with React/Next-compatible stubs: **PASS**.
- Relative local imports, excluding generated Prisma Client: **0 missing**.
- JSON files: valid.
- Root and workspace package manifests: valid.
- Node `.mjs` scripts: `node --check` passed.
- Docker Compose YAML files: parsed successfully.
- CSS braces: balanced.
- Phase 7 migration: no destructive `DROP TABLE`, `DROP COLUMN`, `TRUNCATE` or `DELETE FROM` operations.
- Webhook event array is non-null in migration.
- Production browser/internal API URLs are separated.
- Background email/webhook jobs recover stale `PROCESSING` records.
- Manual retry resets attempt counters, including dead-letter records.

## Packaging checks

The final archive must exclude:

- `.env`, `.env.local`, `.env.production`;
- `node_modules`;
- `.next`;
- `dist`;
- generated Prisma Client;
- temporary `.typecheck` output;
- local uploads, backups and database volumes.

## Runtime limitation of this environment

A full `npm install`, NestJS build, Next.js build, PostgreSQL migration and Docker smoke test could not be completed in the artifact-generation environment because external npm registry requests timed out. This limitation is environmental, not proof that runtime tests passed.

The required final validation on the user machine is:

```bash
npm install
npm run db:setup
npm run build
npm run operations:smoke
npm run backup:create
npm run backup:list
```

Do not treat the release as ready for public production until those commands pass and a restore drill has been completed.
