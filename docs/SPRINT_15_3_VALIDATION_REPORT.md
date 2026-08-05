# Ngày Đôi v0.15.2 — Sprint 15.3 Validation Report

## Scope

Sprint 15.3 — Form System & Unsaved Changes Protection.

## Automated/static checks

- TypeScript/TSX files parsed: **196**
- TypeScript syntax diagnostics: **0**
- Duplicate object-literal fields: **0**
- Targeted TypeScript semantic check with compatible framework stubs: **PASS**
- Missing relative imports: **0**
- Invalid JSON files: **0**
- `design-system.css` braces: **321 open / 321 close**
- Remaining `window.confirm` calls in `apps/web`: **0**
- Root/API/Web versions: **0.15.2**
- Prisma schema or migration changes: **none**
- New runtime dependencies: **none**

## Functional areas reviewed

- Create wedding wizard validation and unsaved-state handling.
- Planning task validation, date-time input, save state and delete confirmation.
- Wedding workspace details/event dirty-state handling and tab-switch confirmation.
- Public memory upload drag/drop, selected-file summary and loading feedback.
- Shared confirmation provider used by check-in, guests, invitation media/version restore, memories, event operations and admin refund.
- Keyboard focus, Escape handling, focus restoration and reduced-motion compatibility for shared dialog/form components.

## Environment limitation

A full `npm install`/Next.js/NestJS build could not run in the artifact environment because the internal npm proxy returned `404` for `zeptomatch@2.1.0`.

The required final verification on the user's machine is:

```bash
npm run build
```

No database command is required for this sprint.
