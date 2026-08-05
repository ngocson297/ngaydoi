# Ngày Đôi v0.5.0 — Upgrade and Run Guide

This guide upgrades a working Phase 4 installation to Phase 5 without deleting PostgreSQL data or uploaded images.

## A. Before upgrading

You should already have:

- Docker Desktop running.
- Phase 4 working.
- Node.js 20.9 or newer.
- The existing `ngaydoi-postgres` container.
- Your Phase 4 `.env` files.

Do not run:

```bash
npm run db:clean
```

That command removes the local PostgreSQL volume.

## B. Stop the current application

### Terminal running API

Press:

```text
Ctrl + C
```

### Terminal running Web

Press:

```text
Ctrl + C
```

PostgreSQL may remain running. There is no need to stop or delete it.

## C. Extract Phase 5

```bash
cd ~/Downloads
unzip ngaydoi-v0.5.0-phase5-guest-rsvp.zip
cd ngaydoi-v0.5.0-phase5-guest-rsvp
```

Do not overwrite the Phase 4 source folder. Keep it temporarily as a rollback copy.

## D. Copy environment files

The user may be running either the patched v0.4.0 folder or the v0.4.1 hotfix folder.

### When your current folder is the patched v0.4.0

```bash
export PREVIOUS_DIR="$HOME/Downloads/ngaydoi-v0.4.0-phase4-invitation-builder"
export NEW_DIR="$HOME/Downloads/ngaydoi-v0.5.0-phase5-guest-rsvp"
```

### When your current folder is v0.4.1

```bash
export PREVIOUS_DIR="$HOME/Downloads/ngaydoi-v0.4.1-phase4-build-hotfix"
export NEW_DIR="$HOME/Downloads/ngaydoi-v0.5.0-phase5-guest-rsvp"
```

Copy the files:

```bash
cp "$PREVIOUS_DIR/.env" "$NEW_DIR/.env"
cp "$PREVIOUS_DIR/apps/api/.env" "$NEW_DIR/apps/api/.env"
cp "$PREVIOUS_DIR/apps/web/.env.local" "$NEW_DIR/apps/web/.env.local"
```

Verify the database and upload settings:

```bash
grep -E '^(DATABASE_URL|UPLOAD_DIR)=' "$NEW_DIR/apps/api/.env"
```

Expected shape:

```text
DATABASE_URL=postgresql://ngaydoi:ngaydoi_dev_password@127.0.0.1:5432/ngaydoi
UPLOAD_DIR=../../../ngaydoi-local-data/uploads
```

## E. Install dependencies

```bash
cd "$NEW_DIR"
npm install
```

Run this even if Phase 4 already had `node_modules`; every release folder is independent.

## F. Upgrade the database

```bash
npm run db:setup
```

The command performs:

1. Starts or reuses `ngaydoi-postgres`.
2. Generates Prisma Client.
3. Applies the incremental Phase 5 migration.
4. Runs seed data.

The migration preserves Phase 4 data. Seed recreates only demo guests tagged `seed-demo` and preserves user-created guests.

## G. Build before starting development servers

```bash
npm run build
```

Do not continue until both workspaces build successfully:

```text
@ngaydoi/api
@ngaydoi/web
```

## H. Start the application

### Terminal 1 — API

```bash
cd ~/Downloads/ngaydoi-v0.5.0-phase5-guest-rsvp
npm run dev:api
```

Verify:

```text
http://localhost:4000/api/health
```

### Terminal 2 — Web

```bash
cd ~/Downloads/ngaydoi-v0.5.0-phase5-guest-rsvp
npm run dev:web
```

Open:

```text
http://localhost:3000
```

### Terminal 3 — Automated verification

Keep PostgreSQL and API running:

```bash
cd ~/Downloads/ngaydoi-v0.5.0-phase5-guest-rsvp
npm run security:test
npm run auth:smoke
npm run wedding:smoke
npm run invitation:smoke
npm run guest:smoke
```

Expected final line:

```text
Guest & RSVP smoke test passed for minh-anh.
```

## I. Manual verification

### Login

```text
Email: demo@ngaydoi.vn
Password: Demo@12345
```

### Open Guest Management

1. Open `http://localhost:3000/dashboard`.
2. Select wedding `Minh & Anh`.
3. Select `Quản lý khách & RSVP`.

The URL has this shape:

```text
http://localhost:3000/weddings/<WEDDING_ID>/guests
```

### Basic guest flow

1. Select `+ Thêm khách`.
2. Enter name, group and party allowance.
3. Select invited events.
4. Save.
5. Copy the private link.
6. Open it in a private/incognito window.
7. Submit RSVP.
8. Return to Guest Management.
9. Confirm list, KPI cards, analytics and notification changed.

### CSV flow

1. Open `Import CSV`.
2. Download the template.
3. Add several rows.
4. Upload the file.
5. Review invalid and duplicate rows.
6. Import only when error count is zero.
7. Export CSV and verify personalized links are absolute URLs.

## J. URLs

```text
Landing:             http://localhost:3000
Login:               http://localhost:3000/login
Dashboard:           http://localhost:3000/dashboard
Wedding workspace:   http://localhost:3000/weddings/<WEDDING_ID>
Invitation Studio:   http://localhost:3000/weddings/<WEDDING_ID>/invitation
Guest workspace:     http://localhost:3000/weddings/<WEDDING_ID>/guests
Public invitation:   http://localhost:3000/i/minh-anh
Personalized invite: http://localhost:3000/g/<GUEST_TOKEN>
API health:          http://localhost:4000/api/health
```

## K. Normal daily start

You do not run migration every day.

### Terminal 1

```bash
cd ~/Downloads/ngaydoi-v0.5.0-phase5-guest-rsvp
npm run db:up
npm run dev:api
```

### Terminal 2

```bash
cd ~/Downloads/ngaydoi-v0.5.0-phase5-guest-rsvp
npm run dev:web
```

## L. Normal daily stop

Stop API:

```text
Ctrl + C
```

Stop Web:

```text
Ctrl + C
```

PostgreSQL may stay running. To stop it without deleting data:

```bash
npm run db:down
```

Start it again later:

```bash
npm run db:up
```

## M. Rollback rule

When `db:setup` has not been run yet, rollback is simply returning to the Phase 4 folder.

After the Phase 5 migration has been applied, do not manually delete migration rows or tables. Keep using the v0.5.0 source or restore a database backup. The Phase 4 source does not know the Phase 5 schema, although the new tables are additive.

## N. Troubleshooting

### Container name conflict

```bash
docker ps -a --filter name=ngaydoi-postgres
```

The project helper normally reuses this container. Do not create a second container with the same name.

### PostgreSQL unavailable

```bash
npm run db:up
npm run db:wait
docker compose logs postgres --tail=100
```

### Prisma Client missing

```bash
npm run db:generate
npm run build
```

### Port already used

```bash
lsof -nP -iTCP:3000 -sTCP:LISTEN
lsof -nP -iTCP:4000 -sTCP:LISTEN
lsof -nP -iTCP:5432 -sTCP:LISTEN
```

Stop the conflicting process or use the existing Ngày Đôi PostgreSQL container.
