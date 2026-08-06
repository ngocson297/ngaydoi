# Ngày Đôi v0.15.6 — Validation Report

## Static quality gates

- `a11y:audit`: passed.
- `ux:audit`: passed.
- `regression:audit`: passed.
- 36 Next.js page routes verified.
- 9 required loading boundaries verified.
- 212 TypeScript/TSX source files parsed.
- 515 relative imports resolved.
- 2 Web CSS files have balanced braces.
- Root, API and Web package versions aligned at 0.15.6.

## Safety

- No database schema or migration changes.
- No runtime dependency changes.
- No API DTO, controller or service behavior changes.
- No blocking `window.alert`, `window.confirm` or `window.prompt` calls.
- Root and route error experiences do not render stack traces.

## Environment limitation

The packaged artifact excludes `node_modules`, so the complete NestJS/Next.js build must be confirmed on the user's local project with `npm run build` or `npm run release:check`.

## Packaging verification

- Final patch applies cleanly to the untouched v0.15.5 baseline with `git apply --check`.
- The patched baseline matches the v0.15.6 release source byte-for-byte, excluding Git metadata.
- Full ZIP integrity test passed.
- Extracted ZIP passed `npm run quality:check`.
- ZIP contains 454 source/documentation entries and excludes real `.env` files, secrets, `node_modules`, `.next`, `dist`, generated Prisma Client, `.git`, local data and logs. Committed `.env.example` templates remain intentionally included.
