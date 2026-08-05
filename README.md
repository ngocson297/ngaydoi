# Ngày Đôi v0.15.3

Current milestone: **Phase 15 — Sprint 15.4 Loading, Empty, Error & Retry States**.

## Điểm mới trong Sprint 15.4

- Skeleton loading theo đúng bố cục thay cho spinner toàn trang ở các luồng chính.
- Empty state có hướng dẫn và CTA tiếp theo.
- Error state có retry, mã hỗ trợ và đường quay lại an toàn.
- Lỗi API nội bộ được làm sạch trước khi hiển thị cho người dùng.
- Permission state thống nhất cho Admin/Partner.
- Route-level loading cho các khu vực quan trọng.

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

Xem `docs/DESIGN_SYSTEM.md` và `docs/SPRINT_15_4_RUN_GUIDE.md`.
