# Ngày Đôi v0.15.3 — Sprint 15.4 Run Guide

## Apply patch

Stop API and Web with `Ctrl + C`, then:

```bash
cd ~/Downloads/ngaydoi

git status
git apply --check ~/Downloads/ngaydoi-v0.15.3-sprint15.4-page-states.patch
git apply ~/Downloads/ngaydoi-v0.15.3-sprint15.4-page-states.patch

npm run build
```

No dependency installation or database command is required.

## Run

Terminal 1:

```bash
cd ~/Downloads/ngaydoi
npm run db:up
npm run dev:api
```

Terminal 2:

```bash
cd ~/Downloads/ngaydoi
npm run dev:web
```

## Essential manual checks

1. Open `/dashboard`, `/billing`, `/pricing`, `/support`, `/growth` and `/templates`.
2. Open a wedding workspace and test Invitation Studio, Guests, Event Operations and Memories.
3. Temporarily stop the API, press **Thử lại**, and verify a friendly error appears instead of an endless spinner.
4. Confirm that a support request ID can be copied when the API returns one.
5. Confirm Admin/Partner pages show a clear permission state for an unauthorized account.
6. Check public invitation, preview, memory and check-in token pages with an invalid token.
7. Confirm no stack trace, Prisma code, SQL detail or local file path appears in the browser.

## Commit after validation

```bash
cd ~/Downloads/ngaydoi
git add .
git commit -m "refactor: complete sprint 15.4 page states"
git tag -a v0.15.3 -m "Sprint 15.4 Page States"
```
