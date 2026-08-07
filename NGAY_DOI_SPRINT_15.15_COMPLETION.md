# Ngày Đôi — Sprint 15.15 Completion

Version: **v0.15.14**
Sprint: **Production Pilot Readiness & Hardening**

## Delivered

- Added strict production environment template and preflight validation for HTTPS, secrets, email verification, R2/S3 + CDN, release SHA, proxy trust and production payment safety.
- Added web security headers, backup restore drill, performance smoke test, `npm run production:report` and a single `npm run production:check` release gate.
- Reused the existing System Health/Admin observability surface for DB latency, storage, mail, webhooks and runtime health.
- Added pilot Privacy Policy and Terms pages plus public invitation/media-upload disclosures.
- Fixed **Phân bàn & check-in → Thẻ QR** so every guest has a printable QR; guests without invitation tokens use an opaque guest QR fallback that the check-in station can scan.
- Fixed **Invitation Studio → Mừng cưới** preview data shape and embedded mobile/desktop layout.
- Added **Admin → Mã giảm giá** to list, create, edit, scope and activate/deactivate coupons. `WELCOME10` no longer requires code/seed changes for ongoing coupon management.
- No Prisma migration is required for Sprint 15.15; coupon/storage/system models already existed.
- Added `npm run sprint15.15:audit` to `quality:check`.
