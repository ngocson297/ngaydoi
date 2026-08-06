# Ngày Đôi v0.15.8 — Validation Report

## Scope

Sprint 15.9 Guest-first Creation & UX Refinement.

## Automated checks

`npm run quality:check` passed:

- Accessibility audit: 93 Web source files.
- UX polish audit: passed.
- Regression audit: 38 page routes, 9 loading boundaries, 215 TypeScript/TSX files parsed, 529 relative imports resolved and 2 CSS files balanced.
- Invitation Experience audit: 24 templates, 6 layout families, 4 countdown styles, 4 programme styles and gift-transfer support.
- Guest-first UX audit: public create flow, QR upload, copy toast, refined selects, editor header, sent-state and sidebar behavior.

Additional static validation:

- `git diff --check`: passed.
- New migration contains only CREATE TABLE, indexes and an additive foreign key.
- No DROP, TRUNCATE, destructive reset or seed requirement.
- No new runtime dependency.
- User-facing QR media reads convert a missing storage object to a safe 404 response.

## Build status in the packaging environment

`npm run build` reached the API workspace and stopped at:

```text
sh: 1: nest: not found
```

The source package intentionally excludes `node_modules`, so the Nest CLI is not available in this environment. This is an environment limitation, not a reported TypeScript or application failure. The final build must be confirmed on the user's existing local workspace with dependencies installed.

## Regression risk controls

- Existing automatic VietQR records remain backward-compatible.
- Uploaded QR assets are restricted to the owning wedding.
- Public asset URLs are server-derived.
- Old QR files are queued for deletion only after a successful autosave.
- Guest-first import saves the created wedding ID before later steps to reduce duplicate creation on retry.
- Existing invitation, guest, order, payment and publication logic was not replaced.

## Required local confirmation

```bash
npm run db:generate
npm run db:deploy
npm run quality:check
npm run build
```

Then self-test `/create`, registration continuation, QR upload and automatic QR, copy toast, guest sent-state and the Invitation Studio header.
