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

## Sprint 15.2 — Navigation system

Navigation is generated from `apps/web/components/navigation/navigation-model.ts` so desktop sidebar, mobile drawer and command palette share the same labels, destinations and role visibility.

Rules:

- `CUSTOMER` and `FAMILY_EDITOR` see the wedding workspace. Billing is owner/admin only.
- `PARTNER` sees Partner Portal rather than customer wedding tools.
- `ADMIN` and `STAFF` see operational groups.
- `CHECKIN_STAFF` receives a minimal account/support navigation surface.
- Wedding-specific tools are progressively disclosed after a wedding context is selected.
- Navigation groups are collapsible and remember their state per role in browser storage.
- `⌘ K` / `Ctrl K` opens the keyboard-accessible command palette.
- Mobile drawer traps focus, closes with Escape and restores focus to the menu trigger.
- Deep workspace pages render breadcrumbs before the page content.


## Sprint 15.3 — Form system

Components mới:

- `FormErrorSummary`: hiển thị lỗi tổng hợp, tự focus và đưa người dùng tới field lỗi.
- `FormActions`, `FormSaveState`: thống nhất trạng thái chưa lưu/đang lưu/đã lưu và vùng CTA cuối form.
- `DateTimeField`: wrapper chuẩn cho `date`, `time`, `datetime-local`.
- `FileUploadField`: chọn file hoặc kéo-thả, hỗ trợ error/helper/selected summary.
- `useUnsavedChangesGuard`: cảnh báo khi bấm link nội bộ hoặc đóng/refresh trang khi còn dữ liệu chưa lưu.
- `ConfirmProvider`, `useConfirm`: dialog xác nhận dùng chung cho thao tác nguy hiểm.

Quy tắc:

- Form nhiều field phải có `FormErrorSummary` khi submit lỗi.
- Form có dữ liệu chỉnh sửa phải hiển thị save state và dùng unsaved guard.
- Không dùng `window.confirm`; dùng `useConfirm` hoặc `ConfirmDialog`.
- Date/time phải dùng native input chuẩn hoặc `DateTimeField`, không tự format bằng chuỗi không kiểm tra.
- Upload phải nêu định dạng, dung lượng, số lượng và lỗi cụ thể trước khi gửi.


## Sprint 15.5 — Accessibility & Inclusive UX

### Navigation and landmarks

- Mỗi trang độc lập phải có một `main` landmark với `id="main-content"`.
- `SkipLink` là phần tử focusable đầu tiên và đưa bàn phím thẳng tới nội dung chính.
- `AccessibilityAnnouncer` thông báo tên trang sau khi route thay đổi.
- Không lồng nhiều `main` landmark trong cùng một trang.

### Tabs

- Dùng `Tabs` và `tabPanelProps`; không tự tạo nhóm button giả tab.
- Phím Arrow chuyển tab, Home tới tab đầu và End tới tab cuối.
- Tab đang chọn có `aria-selected="true"`; panel liên kết bằng `aria-controls` và `aria-labelledby`.
- Khi tab chứa form chưa lưu, phải kiểm tra unsaved-change guard trước khi đổi tab.

### Dialogs, drawers and command palette

- Dialog nguy hiểm dùng `role="alertdialog"`; dialog thông thường dùng `role="dialog"`.
- Focus phải bị giữ trong lớp phủ, Escape đóng khi an toàn, body bị khóa cuộn và focus được trả về trigger.
- Heading/description phải dùng ID duy nhất từ `useId`; không dùng ID cố định khi component có thể xuất hiện nhiều lần.
- Không dùng `window.alert`, `window.confirm` hoặc `window.prompt`.
- Nút xác nhận phải bị vô hiệu hóa khi dữ liệu trong dialog chưa hợp lệ.

### Controls and status

- Icon-only button bắt buộc có tên truy cập qua `aria-label` hoặc component `IconButton`.
- Checkbox/radio cần label mô tả đối tượng cụ thể, không chỉ dựa vào vị trí trong bảng.
- Thanh tiến độ dùng `role="progressbar"` với `aria-valuemin`, `aria-valuemax` và `aria-valuenow`.
- Video/camera preview phải có `aria-label` hoặc mô tả tương đương.
- Trạng thái không chỉ dùng màu; phải có icon, text hoặc pattern bổ sung.

### Motion, contrast and touch

- Touch target tối thiểu 44 × 44 px trên thiết bị coarse pointer.
- Focus ring phải nhìn rõ trên cả nền sáng và tối.
- Hỗ trợ `prefers-contrast: more`, `forced-colors: active` và `prefers-reduced-motion: reduce`.
- Parallax, autoplay/reveal và animation trang trí phải dừng khi tab ẩn hoặc Reduce Motion bật.

### Static audit

Chạy trước mỗi release UI:

```bash
npm run a11y:audit
```

Audit hiện kiểm tra browser dialog không an toàn, link mở tab mới thiếu `noreferrer/noopener`, ảnh thiếu `alt`, video thiếu nhãn và một số icon button không có accessible name.
