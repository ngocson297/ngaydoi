# Ngày Đôi v0.15.4 — Sprint 15.5 Validation Report

## Scope

Sprint 15.5 — Accessibility & Inclusive UX Audit.

## Automated and static checks

- TypeScript/TSX files parsed: **210**
- TypeScript syntax diagnostics: **0**
- Duplicate object-literal fields: **0**
- Missing relative source imports: **0**
- Web files checked by `npm run a11y:audit`: **88**
- Accessibility audit result: **PASS**
- Invalid JSON files: **0 of 8**
- `globals.css` braces: **2066 open / 2066 close**
- `design-system.css` braces: **391 open / 391 close**
- Shared tab workspaces migrated: **8**
- Unsafe `window.alert`, `window.confirm`, `window.prompt`: **0**
- `_blank` links missing `noreferrer/noopener`: **0**
- Root/API/Web/lock versions: **0.15.4**
- Prisma schema or migration changes: **none**
- New runtime/development dependencies: **none**
- `git diff --check`: **PASS**

## Functional areas reviewed

- Skip navigation, main landmarks and route announcements.
- Admin operations, system, growth and pilot tabs.
- Wedding workspace, guests, memories and event-operations tabs.
- Dialogs, mobile drawer, command palette and guest editor focus behavior.
- Public RSVP radio semantics and invitation media controls.
- Guest response, planning and seating-capacity progress indicators.
- Checkbox, icon button, camera/video and status labels.
- Focus contrast, coarse-pointer touch targets, forced colors and reduced motion.
- Static accessibility regression command.

## Patch verification

The release patch was applied successfully to a clean v0.15.3 source snapshot. The patched source was compared with the v0.15.4 working tree before packaging.

## Environment limitation

The source package intentionally excludes `node_modules`. Dependency installation in the artifact environment failed because its internal npm registry returned `404` for `zeptomatch@2.1.0`; therefore the complete Next.js/NestJS production build could not be executed here.

Required final verification on the user's machine:

```bash
npm run a11y:audit
npm run build
```

No database command is required for this sprint.
