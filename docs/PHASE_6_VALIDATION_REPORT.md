# NGÀY ĐÔI v0.6.0 — VALIDATION REPORT

## 1. Phạm vi kiểm tra

- Source inheritance từ v0.5.1.
- Prisma schema và migration Phase 6.
- Commercial/Admin module wiring.
- TypeScript/TSX syntax.
- Duplicate object-literal fields.
- Relative imports.
- JSON package files.
- CSS structural balance.
- Destructive SQL scan.
- Known compile-error patterns từ Phase 4/5.
- ZIP content and secret exclusion.

## 2. Kết quả kiểm tra tĩnh

| Kiểm tra | Kết quả |
|---|---|
| TypeScript/TSX parser | 117 files, 0 syntax error |
| Duplicate object literal fields | 0 |
| Relative imports ngoài Prisma generated | 0 missing |
| Package JSON | 3/3 hợp lệ |
| CSS braces | 1.115 mở / 1.115 đóng |
| Phase 6 migration `DROP TABLE` | 0 |
| Phase 6 migration `DROP COLUMN` | 0 |
| Phase 6 migration `DELETE FROM` | 0 |
| TS4053 declaration pattern | Không phát hiện trong semantic scan |
| TS2783 duplicate-property pattern | Không phát hiện |
| TS1484 type-only import pattern | Không phát hiện trong source mới |
| Upload File typing | Đã khai báo `File[]` tường minh |

## 3. Kiểm tra logic đã thực hiện

- Matching duplicate checkout gồm plan + coupon + add-on set.
- Payment confirmation uses conditional claim.
- Payment idempotency/provider transaction keys are unique.
- Repeated add-ons are accumulated.
- Guest restore checks capacity.
- Refund chooses the most recent remaining paid plan.
- Publish approval creates an invitation release snapshot.
- Admin overview returns complete user/wedding fields required by UI.
- Publish-review dialog requires explanation for change requests.

## 4. Migration safety

Migration `20260804223000_phase6_commercial_mvp`:

- Tạo enum và bảng thương mại mới.
- Thêm commercial/publish-review fields vào `Wedding`.
- Không xóa bảng.
- Không xóa cột.
- Không xóa dữ liệu.
- Có index cho order/payment/admin queue.
- Có unique key cho order number, coupon code, payment idempotency và provider transaction.

## 5. Bảo mật và privacy

- Customer order routes lọc theo `userId`.
- Wedding entitlement route yêu cầu owner.
- Admin routes yêu cầu JWT + ADMIN/STAFF.
- Payment actions tạo audit.
- Publish review tạo audit.
- Bank configuration đọc từ environment.
- `.env` không được đóng gói.
- Sandbox có environment flag.
- Payment production chưa được giả vờ là đã tích hợp.

## 6. Giới hạn môi trường kiểm tra

Môi trường tạo artifact không có Docker và npm registry nội bộ trả lỗi/timeout cho dependency framework. Vì vậy không thể chạy tại đây:

- `npm install` hoàn chỉnh.
- Prisma generate với dependency thật.
- Nest build thực tế.
- Next build thực tế.
- PostgreSQL migration thực tế.
- End-to-end commercial smoke test.

Các kiểm tra cuối phải chạy trên máy người dùng:

```bash
npm install
npm run db:setup
npm run build
npm run commercial:smoke
```

## 7. Kết luận

Source đạt điều kiện bàn giao để người dùng thực hiện build/migration runtime trên môi trường local đã chạy thành công Phase 5. Bản này không được coi là payment-production-ready cho đến khi Production Readiness hoàn tất provider thật, signed webhook, monitoring, backup và security review.
