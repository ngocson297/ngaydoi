# Ngày Đôi — Sprint 15.10 Completion

Version: **v0.15.9**

## Scope completed

- Fixed Invitation Studio autosave validation error caused by derived `giftAccounts[].qrImageUrl`.
- Added backwards-compatible API handling so older open browser tabs do not fail while the new client stops submitting the derived field.
- Stabilized public invitation QR cards, countdown, event programme, hero actions and section widths across mobile, tablet and desktop.
- Added a one-time wedding fireworks welcome effect for public invitations, disabled for preview/editor and `prefers-reduced-motion`.
- Redesigned “Xem thiệp” actions on My Weddings and wedding workspace.
- Improved Home conversion UX with a larger direct value proposition, a three-step getting-started section, a differentiation section and a mobile CTA.
- Expanded template catalog from 24 to 36 named concepts with 12 additional visual directions.
- Added template-specific art direction for cinematic, polaroid, newspaper, long-phụng, museum, winter, sunset and floral concepts.
- Updated plan entitlements to 3 / 12 / 24 / 36 templates.
- Added `npm run sprint15.10:audit` and included it in `quality:check`.
- Added product-wide mobile overflow and control sizing hardening without changing business logic.

## Data impact

- No Prisma schema change.
- No migration.
- `npm run db:seed` is required to update existing Plan template entitlements.
- Existing weddings, guests, invitations, QR assets and orders are preserved.

## Template additions

1. Sài Gòn sớm mai
2. Polaroid ngày mình
3. Sông Hàn xanh
4. Khung vườn hồng
5. Voan cưới điện ảnh
6. Provence xanh tím
7. Bản tin ngày yêu
8. Thước phim hoàng hôn
9. Long phụng giao duyên
10. Bảo tàng ngà
11. Mùa đông ánh bạc
12. Nhà hoa đồng nội
