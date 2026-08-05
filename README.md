# Ngày Đôi v0.15.2

Current milestone: **Phase 15 — Sprint 15.3 Form System & Unsaved Changes Protection**.

## Điểm mới trong Sprint 15.3

- Form error summary có focus và liên kết tới field lỗi.
- Trạng thái form: chưa lưu, đang lưu và đã lưu.
- Cảnh báo khi rời trang hoặc chuyển tab khi còn thay đổi chưa lưu.
- Date/time field và upload kéo-thả dùng chung.
- Confirmation dialog toàn hệ thống; không còn `window.confirm` trong Web app.
- Các luồng tạo wedding, planning, wedding workspace và upload album đã chuyển sang form system mới.

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

```bash
npm run source:pack
```

File tạo tại `~/Downloads/ngaydoi-current.zip`.

Xem `docs/DESIGN_SYSTEM.md` và `docs/SPRINT_15_3_RUN_GUIDE.md`.
