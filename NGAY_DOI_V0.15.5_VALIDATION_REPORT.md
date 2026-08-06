# Ngày Đôi v0.15.5 — Validation Report

## Passed
- `npm run ux:audit`: passed.
- `npm run a11y:audit`: passed; 89 Web source files checked.
- TypeScript syntax/transpile validation: passed; 210 TS/TSX files.
- CSS brace validation: passed for `globals.css` and `design-system.css`.
- JSON parsing: passed for root, Web, API and lock package files.
- No browser `alert`, `confirm` or `prompt` introduced.
- No database schema, Prisma migration, API route or backend business logic changed.
- No dependency added.
- Public external links use `rel="noreferrer noopener"`.

## Build environment note
`npm run build` could not run in the packaging environment because the source ZIP intentionally excludes `node_modules`; the command stopped at `nest: not found`. Run `npm run build` in the existing local `~/Downloads/ngaydoi` folder where dependencies are installed.

## Regression focus
- Fixed sidebar layout does not alter route or role authorization.
- Accordion state only changes presentation; navigation destinations remain sourced from the existing role-aware navigation model.
- Planning status update calls and favorite storage logic were not changed.
- Pricing/order calculations still use existing API values; only visual structure changed.
- Receipt displays existing order/payment values without modifying payment state.

## Packaging validation
- Release patch was applied with `git apply --check` and `git apply` on a clean v0.15.4 baseline.
- The patched tree matched the v0.15.5 release tree.
- Both `ux:audit` and `a11y:audit` passed again on the patched baseline.
- Full source ZIP passed integrity testing.
- ZIP contained 445 entries and no `.env`, `.env.local`, `node_modules`, `.git`, `.next`, `dist`, coverage or local data output.
