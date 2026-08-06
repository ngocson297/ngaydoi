# Ngày Đôi v0.15.4 — Sprint 15.5 Run Guide

## 1. Download

Download `ngaydoi-v0.15.4-sprint15.5-accessibility.patch` into `~/Downloads`.

## 2. Stop the running apps

Press `Ctrl + C` in the API and Web terminals. Keep Docker/PostgreSQL data unchanged.

## 3. Apply the patch

```bash
cd ~/Downloads/ngaydoi

git apply --check ~/Downloads/ngaydoi-v0.15.4-sprint15.5-accessibility.patch
git apply ~/Downloads/ngaydoi-v0.15.4-sprint15.5-accessibility.patch

npm run a11y:audit
npm run build
```

This sprint has no new package dependency and no database change. Do not run `db:clean` or `db:reset`.

## 4. Run locally

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

Open `http://localhost:3000`.

## 5. Manual checks

- Press `Tab` on a page and confirm the skip link appears and moves focus to the main content.
- Open Admin/Wedding tabs and use Arrow Left/Right, Home and End.
- Open a confirmation dialog, command palette and mobile drawer; confirm focus stays inside, Escape closes, and focus returns to the trigger.
- Test public RSVP options with keyboard arrows and Space/Enter.
- Confirm icon buttons, checkboxes and camera/video controls expose meaningful labels.
- Enable Reduce Motion in the operating system and confirm parallax/reveal/shimmer effects are reduced.
- Check 390 px mobile layout and confirm small controls remain easy to tap.

## 6. Commit after verification

```bash
cd ~/Downloads/ngaydoi
git add .
git commit -m "refactor: complete sprint 15.5 accessibility audit"
git tag -a v0.15.4 -m "Sprint 15.5 Accessibility"
```
