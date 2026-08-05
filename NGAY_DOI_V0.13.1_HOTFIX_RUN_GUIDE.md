# Ngày Đôi v0.13.1 — Planning Date Format Hotfix

## Lỗi đã sửa

Trang Kế hoạch cưới bị lỗi runtime khi hiển thị hạn công việc vì `Intl.DateTimeFormat` không cho phép dùng `dateStyle` cùng với `hour` và `minute`.

## Phạm vi

- Chỉ sửa Web frontend.
- Không thay đổi Prisma schema.
- Không có migration.
- Không cần seed lại.
- Không làm thay đổi dữ liệu.

## Cách nâng cấp bằng folder mới

1. Dừng Web bằng `Ctrl + C`. API và PostgreSQL có thể giữ nguyên.
2. Giải nén source v0.13.1.
3. Copy `.env.local` từ v0.13.0:

```bash
cp ../ngaydoi-v0.13.0-phase13-planning-automation/apps/web/.env.local apps/web/.env.local
```

4. Vì folder mới không chứa `node_modules`, chạy:

```bash
npm install
npm run build
npm run dev:web
```

Không chạy `db:clean`, `db:reset`, `db:deploy` hoặc `db:seed` cho hotfix này.

## Cách sửa trực tiếp trên folder v0.13.0

Mở:

```text
apps/web/app/weddings/[id]/planning/page.tsx
```

Thay hàm `taskDateLabel` bằng phiên bản trong hotfix, sau đó dừng/chạy lại Web:

```bash
npm run dev:web
```
