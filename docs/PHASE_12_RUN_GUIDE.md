# Ngày Đôi v0.12.0 — Upgrade & Run Guide

This guide upgrades a working **v0.11.0 Phase 11** installation to **v0.12.0 Phase 12** without deleting existing data.

## 1. Stop running services

In the API terminal:

```text
Ctrl + C
```

In the Web terminal:

```text
Ctrl + C
```

Keep Docker Desktop and the PostgreSQL container. Do not run:

```bash
npm run db:clean
npm run db:reset
```

## 2. Extract the new release

```bash
cd ~/Downloads
unzip ngaydoi-v0.12.0-phase12-shared-memories.zip
cd ngaydoi-v0.12.0-phase12-shared-memories
```

Do not overwrite the v0.11.0 folder.

## 3. Copy environment files from Phase 11

```bash
cp ../ngaydoi-v0.11.0-phase11-event-operations/.env .env
cp ../ngaydoi-v0.11.0-phase11-event-operations/apps/api/.env apps/api/.env
cp ../ngaydoi-v0.11.0-phase11-event-operations/apps/web/.env.local apps/web/.env.local
```

Confirm the files exist:

```bash
ls -la .env apps/api/.env apps/web/.env.local
```

Confirm the database URL:

```bash
grep '^DATABASE_URL=' apps/api/.env
```

Expected local value:

```text
DATABASE_URL=postgresql://ngaydoi:ngaydoi_dev_password@127.0.0.1:5432/ngaydoi
```

Phase 12 does not require a new mandatory environment variable.

## 4. Install dependencies

```bash
npm install
```

Each release folder has its own `node_modules`.

## 5. Upgrade the database in the correct order

Because this project previously encountered missing-table errors, run each command separately.

### 5.1 Start/reuse PostgreSQL

```bash
npm run db:up
```

### 5.2 Generate Prisma Client

```bash
npm run db:generate
```

### 5.3 Apply all pending migrations

```bash
npm run db:deploy
```

This must finish before seed.

### 5.4 Seed/update demo data

```bash
npm run db:seed
```

The Phase 12 seed creates or updates the demo memory album and preserves user-created data.

## 6. Build before starting development servers

```bash
npm run build
```

Continue only after both workspaces pass:

```text
@ngaydoi/api
@ngaydoi/web
```

## 7. Start the application

### Terminal 1 — API

```bash
cd ~/Downloads/ngaydoi-v0.12.0-phase12-shared-memories
npm run db:up
npm run dev:api
```

Check:

```text
http://localhost:4000/api/health
```

### Terminal 2 — Web

```bash
cd ~/Downloads/ngaydoi-v0.12.0-phase12-shared-memories
npm run dev:web
```

Open:

```text
http://localhost:3000
```

### Terminal 3 — Phase 12 smoke test

Keep API and PostgreSQL running:

```bash
cd ~/Downloads/ngaydoi-v0.12.0-phase12-shared-memories
npm run memories:smoke
```

Expected result:

```text
Shared Memories smoke test passed for minh-anh.
```

## Demo accounts

```text
Customer
Email: demo@ngaydoi.vn
Password: Demo@12345

Admin
Email: admin@ngaydoi.vn
Password: Demo@12345

Partner
Email: partner@ngaydoi.vn
Password: Demo@12345

Collaborator
Email: family@ngaydoi.vn
Password: Demo@12345
```

## Main Phase 12 URLs

Owner album workspace:

```text
http://localhost:3000/weddings/<WEDDING_ID>/memories
```

Public album:

```text
http://localhost:3000/memories/<ALBUM_TOKEN>
```

Public wedding invitation:

```text
http://localhost:3000/i/minh-anh
```

The public invitation displays **Góp ảnh vào album** when the album is public.

## Manual test checklist

### Album settings
1. Log in with `demo@ngaydoi.vn`.
2. Open the demo wedding.
3. Select **Album kỷ niệm**.
4. Edit title, description and thank-you message.
5. Toggle public visibility, upload and moderation.
6. Refresh and confirm the values remain.

### Guest upload
1. Open **Chia sẻ & QR**.
2. Open the public album in an incognito window.
3. Select one image and one short video.
4. Enter an optional name/message.
5. Submit.
6. Confirm the friendly success message.

### Moderation
1. Return to the owner album.
2. Open **Kiểm duyệt**.
3. Approve one item.
4. Reject another item with a reason.
5. Open the public album and verify only approved content appears.
6. Test bulk approval.
7. Archive and permanently delete a test item.

### Link and QR
1. Copy the album link.
2. Download/open the QR SVG.
3. Scan it with a phone.
4. Regenerate the album token.
5. Confirm the old link no longer works and the new link works.

### Responsive UI
Test at:

```text
390 px
768 px
1440 px
```

Confirm:
- no full-page horizontal scrollbar;
- cards do not overlap;
- long file names wrap;
- inputs and buttons remain easy to tap;
- sidebar is readable on desktop;
- forms become one column on mobile;
- gallery uses one column on small screens.

## Run on later days

### Terminal 1

```bash
cd ~/Downloads/ngaydoi-v0.12.0-phase12-shared-memories
npm run db:up
npm run dev:api
```

### Terminal 2

```bash
cd ~/Downloads/ngaydoi-v0.12.0-phase12-shared-memories
npm run dev:web
```

Do not run migrations every day.

## Stop at the end of the day

Stop API and Web with:

```text
Ctrl + C
```

You may keep PostgreSQL running. To stop PostgreSQL while preserving data:

```bash
npm run db:down
```

Start it again later:

```bash
npm run db:up
```

## Optional album limits

Local defaults already work without adding variables. To customize limits, add to `apps/api/.env`:

```env
MEMORY_ALBUM_MAX_ITEMS=1000
MEMORY_ALBUM_MAX_BYTES=5368709120
```

The byte value above is 5 GB per wedding album. Individual file limits remain 10 MB for images and 30 MB for videos.
