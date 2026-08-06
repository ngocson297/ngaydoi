# Ngày Đôi v0.15.9 — Sprint 15.10 Run Guide

## Apply patch

Stop API and Web with `Ctrl + C`, then:

```bash
cd ~/Downloads/ngaydoi

git apply --check ~/Downloads/ngaydoi-v0.15.9-sprint15.10-template-mobile.patch
git apply ~/Downloads/ngaydoi-v0.15.9-sprint15.10-template-mobile.patch
```

## Update template entitlements

There is no migration in this sprint. Run seed only:

```bash
npm run db:up
npm run db:seed
```

Do not run:

```bash
npm run db:clean
npm run db:reset
```

## Validate

```bash
npm run quality:check
npm run build
```

When API and Web are running:

```bash
npm run template:smoke
npm run invitation:smoke
```

## Run

Terminal 1:

```bash
cd ~/Downloads/ngaydoi
npm run dev:api
```

Terminal 2:

```bash
cd ~/Downloads/ngaydoi
npm run dev:web
```

## Self-test focus

- Open Invitation Studio with two uploaded gift QR accounts; wait for autosave and confirm no `qrImageUrl should not exist` error.
- Test public invitation at 390px, 430px, 768px and desktop widths.
- Test countdown, 1/2/3 QR cards, long account names, long transfer notes and event addresses.
- Open a public invitation in a new browser session and confirm fireworks appear once, then disappear.
- Enable Reduce Motion and confirm fireworks do not appear.
- Check Dashboard “Xem thiệp” and “Quản lý” actions.
- Check Home three-step guide, differentiation section and mobile bottom CTA.
- Open `/templates` and confirm 36 templates.
- Log in as the Standard demo user and confirm 24 templates are unlocked after seed.
