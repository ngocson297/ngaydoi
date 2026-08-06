# Validation Report — v0.15.7

## Passed

- `npm run quality:check`
  - Accessibility audit: pass, 90 Web source files.
  - UX polish audit: pass.
  - Regression audit: pass.
  - Invitation experience audit: pass.
- 24 template metadata entries.
- 6 layout families.
- 4 countdown styles.
- 4 event programme styles.
- 212 TypeScript/TSX files parsed by regression audit with 0 syntax diagnostics.
- 515 relative imports resolved by regression audit.
- CSS brace balance: pass for both CSS files.
- Migration reviewed as additive/non-destructive.
- QR URL audit confirms no prefilled amount.

## Build environment limitation

`npm run build` could not complete in the artifact environment because the uploaded source intentionally excludes `node_modules`; the command stopped at `nest: not found`. This is not a source-code build result. Run `db:generate`, `db:deploy` and `npm run build` on the local machine.

## Production/runtime checks still required locally

- Prisma Client regeneration.
- Migration deployment against local PostgreSQL.
- API and Web production build.
- Live VietQR image rendering and bank directory response.
- QR scan with at least two Vietnamese banking applications.
- Invitation responsive regression at 390 px, 768 px and desktop.
