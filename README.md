# Ngày Đôi v0.15.0

Current milestone: **Phase 15 — Sprint 15.1 Design System Foundations**.

## Điểm mới trong Sprint 15.1

- Design tokens tập trung cho màu sắc, typography, spacing, radius, shadow, focus và motion.
- Shared UI components: Button, FormField, Alert, Dialog, Skeleton, Empty/Error State và Toast.
- Chuẩn hóa trang đăng nhập, đăng ký, quên/đặt lại mật khẩu, xác minh email và tài khoản.
- Dialog xác nhận truy cập được bằng bàn phím thay cho `window.confirm` ở luồng xóa tài khoản.
- Request ID được tách riêng khỏi thông báo lỗi để user dễ đọc và support dễ tra cứu.
- Global loading, error và 404 dùng trạng thái thân thiện, không hiển thị stack trace.
- Thêm `npm run source:pack` để tạo `~/Downloads/ngaydoi-current.zip` mà không đóng gói secret hoặc build output.

## Chạy local

```bash
npm run db:up
npm run dev:api
```

Terminal khác:

```bash
npm run dev:web
```

## Đóng gói source cho sprint tiếp theo

Chạy tại folder gốc `~/Downloads/ngaydoi`:

```bash
npm run source:pack
```

File được tạo tại:

```text
~/Downloads/ngaydoi-current.zip
```

Script tự loại bỏ `.env`, secret, `node_modules`, `.next`, `dist`, `.git`, dữ liệu local và log.

Xem `docs/DESIGN_SYSTEM.md` và `docs/SPRINT_15_1_RUN_GUIDE.md`.
