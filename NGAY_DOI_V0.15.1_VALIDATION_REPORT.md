# Ngày Đôi v0.15.1 — Sprint 15.2 Validation Report

## Scope

Validation covers the role-aware navigation model, desktop sidebar, mobile drawer, breadcrumbs, command palette, version metadata and source packaging changes.

## Results

- Root/API/Web versions synchronized at `0.15.1`.
- Production Compose and active environment examples use `APP_VERSION=0.15.1`.
- 193 TypeScript/TSX source files parsed with 0 syntax diagnostics.
- Duplicate object fields: 0.
- Missing relative imports: 0 after `.js` to TypeScript source resolution.
- Targeted strict TypeScript semantic check for `app-shell.tsx` and `navigation-model.ts`: pass.
- Navigation behavior checks passed for CUSTOMER, FAMILY_EDITOR, PARTNER, ADMIN, STAFF and CHECKIN_STAFF.
- Customer navigation does not expose Admin entries.
- Partner navigation exposes Partner Portal and does not expose owner billing.
- Wedding tools are withheld until a wedding context is available.
- Desktop and mobile navigation panel IDs use separate prefixes; no duplicate navigation IDs.
- JSON manifests parsed successfully.
- `globals.css`: 2,066 opening and 2,066 closing blocks.
- `design-system.css`: 274 opening and 274 closing blocks.
- `git diff --check`: pass.
- Release patch was applied successfully to a clean Sprint 15.1 baseline.
- `scripts/pack-source.mjs`: Node syntax check pass.
- Prisma schema/migration diff: none.
- `source:pack` produced a valid ZIP with 299 files.
- Source ZIP forbidden entries: 0 for `.env`, `.git`, `node_modules`, `.next`, `dist` and generated Prisma Client.

## Accessibility checks implemented

- Command palette dialog semantics and labelled search control.
- Keyboard shortcut `Meta/Ctrl + K`.
- Arrow-key and Enter navigation in command results.
- Escape close and focus restoration.
- Focus trap in command palette and mobile drawer.
- Body scroll lock while overlays are open.
- `aria-expanded`, `aria-controls`, `aria-current` and breadcrumb landmark labels.
- Reduced-motion overrides for overlays and navigation transitions.

## Runtime limitation

A full Next.js/NestJS production build could not be run in the artifact environment because the internal npm registry returned `404` for `zeptomatch@2.1.0`. No claim is made that framework build or browser runtime was executed here.

Required confirmation on the user's machine:

```bash
npm run build
```

No database command is required for this sprint.
