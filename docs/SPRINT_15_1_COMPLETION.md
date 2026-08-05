# Ngày Đôi — Sprint 15.1 Completion Report

**Version:** v0.15.0
**Scope:** Phase 15 — Design System Foundations
**Database migration:** Không có

## Hoàn thành

### Design tokens

Đã bổ sung lớp token tập trung cho:

- Màu nền, surface, text, muted và border.
- Primary, danger, success, warning và information.
- Focus ring.
- Spacing.
- Radius.
- Shadow.
- Control height và touch target.
- Motion duration.

### Shared components

Đã thêm:

- `Button`, `ButtonLink`, `IconButton`.
- `FormField`, `FormRequiredNote`.
- `Alert` có Request ID và copy support code.
- `EmptyState`, `ErrorState`.
- `ConfirmDialog` có Escape, focus trap và focus restore.
- `Skeleton`, `CardSkeleton`, `PageSkeleton`.
- `ToastProvider`, `useToast`.

### Màn hình đã chuyển sang Design System

- Login.
- Register.
- Forgot Password.
- Reset Password.
- Verify Email.
- Account Settings.
- Global Loading.
- Global Error.
- Not Found.
- Auth Gate loading state.

### Account UX

- Dùng sidebar ứng dụng chung.
- Save Profile có loading state.
- Thành công hiển thị toast.
- Email disabled có lý do rõ ràng.
- Đổi mật khẩu có helper text.
- Session actions sử dụng button chuẩn.
- Xóa tài khoản sử dụng accessible confirmation dialog.

### Error handling

- Request ID không còn bị ghép trực tiếp vào error message.
- UI có thể hiển thị Request ID riêng và sao chép.
- Global error không hiện stack trace cho user.

### Source workflow

Đã thêm:

```bash
npm run source:pack
```

Script tạo `ngaydoi-current.zip` ở folder cha và tự loại bỏ secret, dependencies, build output, Git history, log và dữ liệu local.

## Chưa thuộc Sprint 15.1

Các hạng mục sau sẽ tiếp tục ở sprint kế tiếp:

- Chuyển toàn bộ màn hình nghiệp vụ sang shared components.
- Command palette và menu search.
- Collapsible sidebar groups.
- Breadcrumb toàn hệ thống.
- Unsaved changes guard.
- Shared upload field.
- Shared date/time picker.
- Audit loading/empty/error của từng module.
- Accessibility audit end-to-end.
- Home performance audit chuyên sâu.
