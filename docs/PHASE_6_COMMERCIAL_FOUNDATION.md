# NGÀY ĐÔI — RELEASE PHASE 6: COMMERCIAL FOUNDATION

**Version:** 0.6.0  
**Master Plan mapping:** Phase 7 — Commercial MVP, manual-payment scope  
**Upgrade source:** v0.5.1 Phase 5 TypeScript hotfix  
**Migration strategy:** incremental, no database reset

## 1. Mục tiêu

Phase 6 đưa Ngày Đôi từ một sản phẩm tạo thiệp/RSVP thành một hệ thống có thể:

1. Công khai bảng giá và quyền lợi.
2. Tính giá phía server.
3. Tạo và theo dõi đơn hàng.
4. Nhận thông tin chuyển khoản.
5. Đưa thanh toán vào hàng đợi đối soát.
6. Kích hoạt quyền lợi sau khi xác nhận.
7. Kiểm duyệt publish theo gói.
8. Hoàn tiền, thu hồi quyền lợi và audit.
9. Cho khách hàng và nhân viên thấy trạng thái rõ ràng.

## 2. Gói dịch vụ seed mặc định

| Gói | Giá demo | Khách | Ảnh | Template | Review publish |
|---|---:|---:|---:|---:|---|
| FREE / Khởi đầu | 0đ | 30 | 5 | 1 | Có |
| STARTER / Cơ bản | 199.000đ | 100 | 20 | 2 | Không, tự publish khi đạt điều kiện |
| STANDARD / Tiêu chuẩn | 399.000đ | 350 | 80 | 4 | Có |
| PREMIUM / Cao cấp | 699.000đ | 1.000 | 250 | 5 | Có |

Add-on seed:

- `GUEST_100`: thêm 100 khách.
- `MEDIA_50`: thêm 50 ảnh.

Coupon seed:

- `WELCOME10`: giảm 10%, áp dụng STARTER/STANDARD/PREMIUM.

Các giá trên chỉ là dữ liệu demo để kiểm tra luồng, chưa phải quyết định giá thương mại cuối cùng.

## 3. Backend đã triển khai

### Catalog và entitlement

- `GET /api/plans`
- `GET /api/weddings/:id/entitlements`
- Fallback về FREE khi wedding chưa có gói.
- Cộng dồn add-on từ các order đã thanh toán và còn hiệu lực.
- Tính số khách/ảnh còn lại.
- Kiểm tra template theo gói.

### Order và payment

- `POST /api/orders/quote`
- `POST /api/orders`
- `GET /api/orders`
- `GET /api/orders/:id`
- `POST /api/orders/:id/payment-reference`
- `POST /api/orders/:id/sandbox-pay`

Order lưu snapshot:

- Gói.
- Add-on.
- Coupon.
- Subtotal.
- Discount.
- Total.
- Currency.
- Customer note.

### Admin Operations

- `GET /api/admin/overview`
- `GET /api/admin/orders`
- `GET /api/admin/orders/:id`
- `POST /api/admin/orders/:id/confirm-payment`
- `POST /api/admin/orders/:id/reject-payment`
- `POST /api/admin/orders/:id/refund`
- `POST /api/admin/orders/:id/notes`
- `GET /api/admin/users`
- `GET /api/admin/weddings`
- `POST /api/admin/weddings/:id/publish-review`

### Publish flow

- Customer gửi yêu cầu publish từ Wedding Workspace.
- FREE không được publish.
- STARTER có thể tự publish khi checklist hợp lệ.
- STANDARD/PREMIUM vào hàng đợi review.
- Admin có thể approve hoặc yêu cầu chỉnh sửa.
- Approve tạo snapshot `PUBLISH_APPROVED` trong lịch sử Invitation Studio.

## 4. Enforcement

- Thêm khách: kiểm tra guest limit.
- Import khách: kiểm tra số khách mới trước khi ghi DB.
- Restore khách: kiểm tra lại guest limit.
- Upload ảnh: kiểm tra media limit.
- Chọn template: kiểm tra template access.
- Publish: kiểm tra plan và publish-review requirement.

## 5. Idempotency và tính đúng dữ liệu

- Xác nhận payment dùng conditional order claim; request lặp không kích hoạt hai lần.
- Payment có `idempotencyKey` và `providerTransactionId` unique.
- Coupon chỉ tăng lượt dùng trong transaction thắng.
- Double-click tạo order chỉ trả order cũ khi plan, coupon và tập add-on giống nhau.
- Refund order cũ không hạ wedding nếu đang có order mới hơn còn hiệu lực.
- Refund order gói đang hiệu lực sẽ tìm order hợp lệ gần nhất; chỉ về FREE khi không còn order thay thế.
- Nếu về FREE trong lúc thiệp đang published, thiệp chuyển `SUSPENDED`.

## 6. UI/UX

### Customer

- Pricing page theo từng bước.
- Chọn wedding trước khi mua.
- Plan cards hiển thị giới hạn rõ ràng.
- Add-on cards và coupon.
- Server quote trước khi tạo đơn.
- Billing dashboard và trạng thái đơn.
- Order timeline.
- Hướng dẫn chuyển khoản.
- Submit mã giao dịch.
- Sandbox payment cho development.
- Biên nhận điện tử có thể in.

### Admin

- KPI doanh thu và hàng đợi.
- Priority queue.
- Danh sách và chi tiết order dạng split view.
- Confirm/reject/refund.
- Internal/customer notes.
- User directory.
- Wedding directory.
- Publish review bằng dialog thân thiện, không dùng browser prompt.
- Responsive cho tablet/mobile.

## 7. Tài khoản demo

Customer:

```text
Email: demo@ngaydoi.vn
Password: Demo@12345
```

Collaborator:

```text
Email: family@ngaydoi.vn
Password: Demo@12345
```

Admin:

```text
Email: admin@ngaydoi.vn
Password: Demo@12345
```

## 8. Exit criteria

- [x] Customer chọn gói và nhận server quote.
- [x] Customer tạo order mà không chỉnh DB.
- [x] Customer gửi payment reference.
- [x] Admin thấy order trong queue.
- [x] Admin confirm và entitlement tự kích hoạt.
- [x] Payment confirm lặp không kích hoạt hai lần.
- [x] Guest/media/template bị chặn đúng giới hạn.
- [x] Customer gửi yêu cầu publish.
- [x] Admin approve/request changes.
- [x] Refund có audit và tính lại plan.
- [x] UI có responsive/empty/loading/error/success state cơ bản.
- [x] Có commercial smoke test.

## 9. Giới hạn có chủ đích

Phase này **không phải hệ thống thanh toán production**:

- Chưa kết nối VNPay, MoMo, Stripe hoặc ngân hàng thật.
- Chưa có signed payment webhook từ nhà cung cấp bên ngoài.
- Chưa có đối soát tự động theo sao kê.
- Chưa phát hành hóa đơn thuế.
- Chưa gửi email qua SMTP/provider production.
- `customDomain` mới là entitlement flag, chưa tự cấp DNS/SSL.
- Bank account trong `.env.example` là dữ liệu demo.

Các phần trên thuộc Release Phase 7 — Production Readiness.
