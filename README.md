# Ngày Đôi v0.15.4

Current milestone: **Phase 15 — Sprint 15.5 Accessibility & Inclusive UX Audit**.

## Điểm mới trong Sprint 15.5

- Skip link, main landmark và thông báo chuyển trang cho screen reader.
- Tab chuẩn dùng được bằng Arrow, Home, End và bàn phím.
- Dialog, mobile drawer và command palette giữ focus, đóng bằng Escape và trả focus đúng.
- RSVP, progress bar, icon button, checkbox, camera/video có semantic và nhãn hỗ trợ.
- Focus contrast, touch target, forced-colors và `prefers-reduced-motion` được chuẩn hóa.
- Có lệnh `npm run a11y:audit` để kiểm tra accessibility tĩnh trước khi build.

## Chạy local

```bash
npm run db:up
npm run dev:api
```

Terminal khác:

```bash
npm run dev:web
```

## Kiểm tra accessibility

```bash
npm run a11y:audit
npm run build
```

## Đóng gói source cho sprint tiếp theo

```bash
npm run source:pack
```

File tạo tại `~/Downloads/ngaydoi-current.zip`.

Xem `docs/DESIGN_SYSTEM.md` và `docs/SPRINT_15_5_RUN_GUIDE.md`.

### Sprint 15.6 UX regression check

```bash
npm run ux:audit
npm run a11y:audit
npm run build
```

Public contact links are configured in `apps/web/.env.local` using `NEXT_PUBLIC_FACEBOOK_CONTACT_URL`, `NEXT_PUBLIC_ZALO_CONTACT_URL` and `NEXT_PUBLIC_SUPPORT_EMAIL`.
