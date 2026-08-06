# Ngày Đôi v0.15.5 — Sprint 15.6 Completion

## Scope
Sprint 15.6 combines the planned Home performance pass with targeted UX polish requested after Sprint 15.5. No API contract, database schema, Prisma migration, authorization rule, payment logic, invitation logic, guest logic or planning business rule was changed.

## Delivered

### Navigation and sidebar
- Desktop sidebar is fixed to the viewport on pages with long content.
- Only one navigation group is expanded at a time; the current page group opens automatically.
- Repeated descriptions are hidden from the sidebar but remain available in the command palette and accessible labels.
- Sidebar width, spacing and active state were simplified for stronger focus.

### Planning and template controls
- Planning completion control preserves a square touch target and exposes `aria-pressed`.
- Template favorite controls preserve a true circle on mouse and coarse-pointer devices.

### Readability
- Raised legacy typography in Guests, Planning, Commerce and dense panel content.
- Kept headings and status hierarchy intact while increasing supporting copy and table readability.

### Commerce and receipt
- Rebuilt the pricing total summary with a stable amount hierarchy.
- Rebuilt the order total card for responsive layouts.
- Replaced the old receipt card with a professional electronic receipt containing header, receipt number, wedding context, payment method, line items, discounts, final total and support note.
- Added an A4 print stylesheet that prints the receipt only.

### Home performance and polish
- Fixed the “Khám phá 24 mẫu” CTA to remain pill-shaped.
- Added low-power/mobile motion mode.
- Pauses decorative animation while the browser tab is hidden.
- Uses `content-visibility` containment for below-the-fold Home sections.
- Keeps reveal animations intersection-based and disables pointer parallax on constrained devices.

### Contact page
- Added public `/contact` page.
- Added Facebook, Zalo and email contact cards.
- Added Contact links to Home navigation and footer.
- Added environment variables for official contact URLs.

### Regression tooling
- Added `npm run ux:audit`.
- Existing `npm run a11y:audit` continues to pass.

## Version
- Root: `0.15.5`
- Web: `0.15.5`
- API: `0.15.5`
