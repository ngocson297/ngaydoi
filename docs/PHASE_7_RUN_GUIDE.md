# NGÀY ĐÔI v0.7.0 — Phase 7 Run & Upgrade Guide

This guide upgrades a working **v0.6.1** installation to **v0.7.0** without deleting users, weddings, guests, RSVP, orders, payments or media.

## A. What to stop and keep

### Stop

In the API terminal:

```text
Ctrl + C
```

In the Web terminal:

```text
Ctrl + C
```

### Keep

- Keep Docker Desktop running.
- Keep the `ngaydoi-postgres` container and volume.
- Keep `~/Downloads/ngaydoi-local-data`.
- Keep the v0.6.1 source folder as a rollback reference.

### Never run during this upgrade

```bash
npm run db:clean
npm run db:reset
```

Those commands are unnecessary and can destroy local data.

## B. Extract the new source

```bash
cd ~/Downloads
unzip ngaydoi-v0.7.0-phase7-production-readiness.zip
cd ngaydoi-v0.7.0-phase7-production-readiness
```

Do not copy the new source over the v0.6.1 folder.

## C. Copy existing environment files

```bash
export PREVIOUS_DIR="$HOME/Downloads/ngaydoi-v0.6.1-phase6-build-hotfix"
export NEW_DIR="$HOME/Downloads/ngaydoi-v0.7.0-phase7-production-readiness"

cp "$PREVIOUS_DIR/.env" "$NEW_DIR/.env"
cp "$PREVIOUS_DIR/apps/api/.env" "$NEW_DIR/apps/api/.env"
cp "$PREVIOUS_DIR/apps/web/.env.local" "$NEW_DIR/apps/web/.env.local"
```

## D. Add local Phase 7 settings

Run this block once:

```bash
cat >> "$NEW_DIR/apps/api/.env" <<'EOF'

# Phase 7 — local operations
APP_VERSION=0.7.0
RELEASE_SHA=development
TRUST_PROXY_HOPS=1
JOB_RUNNER_ENABLED=true
JOB_POLL_INTERVAL_MS=10000
OPERATIONS_ENCRYPTION_KEY=local-development-operations-key-change-me
WEBHOOK_TIMEOUT_MS=10000
MAIL_PROVIDER=CONSOLE
MAIL_FROM=Ngày Đôi <hello@localhost>
STORAGE_PROVIDER=LOCAL
EOF

cat >> "$NEW_DIR/apps/web/.env.local" <<'EOF'
INTERNAL_API_URL=http://localhost:4000/api
PUBLIC_APP_URL=http://localhost:3000
EOF
```

Duplicate keys should be avoided. Check them:

```bash
grep -E '^(APP_VERSION|JOB_RUNNER_ENABLED|OPERATIONS_ENCRYPTION_KEY|MAIL_PROVIDER|STORAGE_PROVIDER)=' "$NEW_DIR/apps/api/.env"
grep -E '^(NEXT_PUBLIC_API_URL|INTERNAL_API_URL|PUBLIC_APP_URL)=' "$NEW_DIR/apps/web/.env.local"
```

Expected local values include:

```text
MAIL_PROVIDER=CONSOLE
STORAGE_PROVIDER=LOCAL
NEXT_PUBLIC_API_URL=http://localhost:4000/api
INTERNAL_API_URL=http://localhost:4000/api
PUBLIC_APP_URL=http://localhost:3000
```

## E. Install dependencies

```bash
cd "$NEW_DIR"
npm install
```

## F. Upgrade database

```bash
npm run db:setup
```

This command:

1. starts/reuses `ngaydoi-postgres`;
2. generates Prisma Client;
3. deploys the Phase 7 migration;
4. runs idempotent demo seed.

It does **not** require a database reset.

## G. Build before development run

```bash
npm run build
```

Do not continue until both NestJS and Next.js builds pass.

## H. Start the application

### Terminal 1 — API

```bash
cd ~/Downloads/ngaydoi-v0.7.0-phase7-production-readiness
npm run db:up
npm run dev:api
```

Check:

```text
http://localhost:4000/api/health
http://localhost:4000/api/health/live
http://localhost:4000/api/health/ready
```

`/ready` should return `status: "ready"` locally.

### Terminal 2 — Web

```bash
cd ~/Downloads/ngaydoi-v0.7.0-phase7-production-readiness
npm run dev:web
```

Open:

```text
http://localhost:3000
http://localhost:3000/status
```

### Terminal 3 — Automated tests

Keep PostgreSQL and API running:

```bash
cd ~/Downloads/ngaydoi-v0.7.0-phase7-production-readiness

npm run security:test
npm run auth:smoke
npm run wedding:smoke
npm run invitation:smoke
npm run guest:smoke
npm run commercial:smoke
npm run operations:smoke
```

The final expected line is similar to:

```text
Production operations smoke test passed.
```

## I. Admin operations verification

Admin account:

```text
Email: admin@ngaydoi.vn
Password: Demo@12345
```

1. Log in at `http://localhost:3000/login`.
2. Open `http://localhost:3000/admin/system`.
3. Verify Readiness is `READY`.
4. Open **Email Outbox** and process the queue.
5. Open **Webhooks** and create a local/test endpoint only when you have a receiver.
6. Use **Test** and verify a delivery appears.
7. Open `http://localhost:3000/status` in another tab.

## J. Backup commands

Create and verify a backup while PostgreSQL is running:

```bash
npm run backup:create
```

List backups:

```bash
npm run backup:list
```

Backups are stored outside the version folder by default:

```text
~/Downloads/ngaydoi-local-data/backups
```

### Restore safety procedure

Restore is destructive to the target database.

1. Stop API and Web with `Ctrl + C`.
2. Keep PostgreSQL running.
3. List backups.
4. Restore only a known backup:

```bash
npm run backup:list
npm run backup:restore -- <BACKUP_FOLDER_NAME> --yes
npm run db:generate
```

5. Start API and Web again.

A production restore must first be rehearsed in a disposable environment.

## K. Daily startup after the upgrade

### Terminal 1

```bash
cd ~/Downloads/ngaydoi-v0.7.0-phase7-production-readiness
npm run db:up
npm run dev:api
```

### Terminal 2

```bash
cd ~/Downloads/ngaydoi-v0.7.0-phase7-production-readiness
npm run dev:web
```

You do not need `db:setup` every day.

## L. Daily shutdown

Stop API and Web with:

```text
Ctrl + C
```

PostgreSQL may remain running. To stop it without deleting data:

```bash
npm run db:down
```

Start it later with:

```bash
npm run db:up
```

## M. Production deployment template

Do not use demo secrets or demo bank details.

```bash
cp .env.production.example .env.production
```

Edit every `replace-*`, domain, email, storage and banking value. Production startup is intentionally blocked if unsafe settings remain.

Build and start:

```bash
docker compose   -f docker-compose.production.yml   --env-file .env.production   up -d --build
```

Check:

```bash
docker compose -f docker-compose.production.yml --env-file .env.production ps
docker compose -f docker-compose.production.yml --env-file .env.production logs api --tail=100
curl -i http://localhost:8080/api/health/ready
```

The included gateway listens on plain HTTP for infrastructure testing. Before public launch, put it behind a real HTTPS load balancer/reverse proxy or configure TLS termination. `FRONTEND_URL`, cookies and public URLs must use the final HTTPS domain.

Stop production containers while preserving data:

```bash
docker compose -f docker-compose.production.yml --env-file .env.production down
```

Do not add `-v`, because that would remove the database volume.

## N. Common issues

### Readiness returns 503 locally

Check:

```bash
docker compose ps
grep '^DATABASE_URL=' apps/api/.env
grep -E '^(MAIL_PROVIDER|STORAGE_PROVIDER|OPERATIONS_ENCRYPTION_KEY)=' apps/api/.env
```

For local development, use `MAIL_PROVIDER=CONSOLE` and `STORAGE_PROVIDER=LOCAL`.

### Production API refuses to start

This is an intentional deployment gate. Read the API log; it identifies each unsafe environment key. Do not weaken the gate. Correct `.env.production`.

### Web works but server-rendered invitation metadata fails

Confirm Web runtime has:

```text
INTERNAL_API_URL=http://api:4000/api
PUBLIC_APP_URL=https://your-real-domain
```

### Email remains failed/dead-letter

Open `/admin/system`, correct provider settings, then click Retry or process the queue.

### Webhook test fails

Check HTTPS URL, receiver availability, HMAC verification over the exact raw body, timestamp and signing secret.
