# Ngày Đôi v0.15.1

Current milestone: **Phase 15 — Sprint 15.2 Navigation & Information Architecture**.

## Điểm mới trong Sprint 15.2

- Navigation sinh từ một cấu hình dùng chung cho desktop, mobile và command palette.
- Menu được lọc theo role: Customer, Family Editor, Partner, Staff, Admin và Check-in Staff.
- Các nhóm menu có thể thu gọn và ghi nhớ trạng thái theo role.
- Công cụ wedding chỉ hiện đầy đủ sau khi user chọn một đám cưới.
- Thêm command palette bằng `⌘ K` hoặc `Ctrl K`.
- Thêm breadcrumb cho trang sâu và workspace wedding.
- Mobile drawer có focus trap, Escape, khóa scroll và trả focus đúng.
- Script `source:pack` loại thêm generated Prisma Client để ZIP nhẹ hơn.

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

Script tự loại bỏ `.env`, secret, `node_modules`, `.next`, `dist`, generated Prisma Client, `.git`, dữ liệu local và log.

Xem `docs/DESIGN_SYSTEM.md` và `docs/SPRINT_15_2_RUN_GUIDE.md`.
