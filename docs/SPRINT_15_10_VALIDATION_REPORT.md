# Ngày Đôi v0.15.9 — Validation Report

## Automated static validation

- Accessibility audit: passed, 93 Web source files.
- UX audit: passed.
- Regression audit: passed.
  - 38 page routes.
  - 9 loading boundaries.
  - 215 TypeScript/TSX files parsed.
  - 529 relative imports resolved.
  - 2 CSS files balanced.
- Invitation Experience audit: passed.
  - 36 template definitions.
  - 6 layout families.
  - 4 countdown styles.
  - 4 programme styles.
- Guest-first UX audit: passed.
- Sprint 15.10 audit: passed.

## Safety checks

- No destructive SQL.
- No Prisma schema change.
- No migration.
- Existing gift QR assets remain unchanged.
- Client strips derived `qrImageUrl`; API accepts it only for backwards compatibility and ignores it when normalizing persisted gift accounts.
- Fireworks are decorative, pointer-events disabled, session-limited and disabled for Reduce Motion.
- No external image or copied commercial template asset was added.

## Build environment limitation

The packaging environment does not contain `node_modules`. `npm run build` reached the API build and stopped at:

```text
nest: not found
```

This is an environment dependency absence, not a source validation result. Final build confirmation must be run on the user's existing local project where dependencies are installed.
