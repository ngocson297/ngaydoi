# Ngày Đôi v0.15.5 — Sprint 15.6 Run Guide

## Apply the patch
Stop API and Web with `Ctrl + C`, then:

```bash
cd ~/Downloads/ngaydoi

git apply --check ~/Downloads/ngaydoi-v0.15.5-sprint15.6-ux-polish.patch
git apply ~/Downloads/ngaydoi-v0.15.5-sprint15.6-ux-polish.patch

npm run ux:audit
npm run a11y:audit
npm run build
```

Sprint 15.6 does not add dependencies or database changes. Do not run `db:reset` or `db:clean`.

## Configure real contact links
Add the official URLs to `apps/web/.env.local`:

```env
NEXT_PUBLIC_FACEBOOK_CONTACT_URL=https://www.facebook.com/YOUR_PAGE
NEXT_PUBLIC_ZALO_CONTACT_URL=https://zalo.me/YOUR_ZALO_ID_OR_PHONE
NEXT_PUBLIC_SUPPORT_EMAIL=YOUR_SUPPORT_EMAIL
```

Restart Web after changing `.env.local`.

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

## Main checks
- Open a long page such as `/weddings/<id>/planning`: sidebar remains visible while scrolling.
- Only the current navigation group opens by default.
- Planning checkbox is square and template favorite button is circular.
- Guests content is easier to read.
- Open `/pricing`: total payment card is stable on desktop and mobile.
- Open a confirmed order and print the receipt: only the professional A4 receipt prints.
- Open `/templates`: favorite icons are circular.
- Open Home: “Khám phá 24 mẫu” is pill-shaped.
- Open `/contact`: Facebook, Zalo and email cards display correctly.
- Test 390px, 768px and 1440px viewport widths.

## Commit after validation

```bash
git add .
git commit -m "refactor: complete sprint 15.6 ux polish"
git tag -a v0.15.5 -m "Sprint 15.6 UX Polish"
```
