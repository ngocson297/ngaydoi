# Phase 2 Database Startup Hotfix

## Problem

`npm run db:seed` could fail with `ECONNREFUSED` when PostgreSQL was stopped, still starting, bound to another port, or `localhost` resolved unexpectedly.

## Fix

Version 0.2.1 adds a readiness check before seed and a complete setup command.

```bash
npm run db:setup
```

The command performs:

1. Start PostgreSQL.
2. Wait until its TCP port is reachable.
3. Generate Prisma Client.
4. Deploy migrations.
5. Seed demo data.

## Existing installation

Set this value in `apps/api/.env`:

```env
DATABASE_URL=postgresql://ngaydoi:ngaydoi_dev_password@127.0.0.1:5432/ngaydoi
```

Then run:

```bash
npm run db:up
npm run db:wait
npm run db:deploy
npm run db:seed
```
