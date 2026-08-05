# Ngày Đôi v0.15.2 — Sprint 15.3 Run Guide

## Apply patch

Stop API and Web, then:

```bash
cd ~/Downloads/ngaydoi
git status
git apply --check ~/Downloads/ngaydoi-v0.15.2-sprint15.3-form-system.patch
git apply ~/Downloads/ngaydoi-v0.15.2-sprint15.3-form-system.patch
npm run build
```

No database commands are required.

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

## Manual checks

- `/weddings/new`: validation summary, field focus, unsaved warning.
- `/weddings/<id>/planning`: save-state, date-time field, delete dialog.
- `/weddings/<id>`: tab switch warning and destructive dialogs.
- `/memories/<token>`: drag/drop upload, file errors and upload loading.
- Confirm that no browser-native confirm dialog appears.

## Commit after validation

```bash
git add .
git commit -m "refactor: complete sprint 15.3 form system"
git tag -a v0.15.2 -m "Sprint 15.3 Form System"
```
