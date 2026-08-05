# Ngày Đôi Design System — Sprint 15.1

## Mục tiêu

Một nguồn chuẩn cho control, feedback và trạng thái giao diện. Các trang cũ tiếp tục hoạt động nhờ lớp compatibility trong `apps/web/app/design-system.css`, sau đó được chuyển dần sang component mới.

## Nguồn chính

- Tokens và CSS: `apps/web/app/design-system.css`
- Components: `apps/web/components/ui/`
- Global providers: `apps/web/app/providers.tsx`

## Component đã có

- `Button`, `ButtonLink`, `IconButton`
- `FormField`, `FormRequiredNote`
- `Alert`, `EmptyState`, `ErrorState`
- `ConfirmDialog`
- `Skeleton`, `CardSkeleton`, `PageSkeleton`
- `ToastProvider`, `useToast`

## Quy tắc button

- `primary`: một hành động chính trong một vùng giao diện.
- `secondary`: hành động phụ hoặc quay lại.
- `danger`: hành động gây mất dữ liệu hoặc thay đổi nghiêm trọng.
- `ghost`: hành động nhẹ trong toolbar/list.
- `IconButton`: bắt buộc có `label` để tạo `aria-label` và tooltip.
- Dùng `loading` để chặn submit lặp và giữ nguyên chiều rộng nút.

## Quy tắc form

- Mỗi control có label thật, không dùng placeholder thay label.
- Field bắt buộc dùng `required` và hiển thị dấu `*`.
- Helper text giải thích trước khi lỗi xảy ra.
- Error đặt ngay dưới field, có `role="alert"` và `aria-invalid`.
- Disabled field cần `disabledReason` khi lý do không hiển nhiên.
- Control tiêu chuẩn cao tối thiểu 48px; textarea tối thiểu 112px.

## Feedback

- API error dùng `Alert tone="error"`.
- Khi có `ApiError.requestId`, truyền riêng vào `requestId`; không ghép mã hỗ trợ vào message.
- Thao tác thành công ngắn dùng toast.
- Empty state luôn giải thích và có CTA tiếp theo khi phù hợp.
- Destructive action dùng `ConfirmDialog`, không dùng `window.confirm`.

## Accessibility

- Focus ring nhìn rõ trên keyboard.
- Touch target tối thiểu 44px.
- Dialog có Escape, focus trap và trả focus về phần tử trước đó.
- Toast dùng live region.
- Skeleton dừng shimmer khi `prefers-reduced-motion`.
- Trạng thái dùng cả icon và text, không chỉ dùng màu.
