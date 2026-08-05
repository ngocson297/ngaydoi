# NGÀY ĐÔI — MASTER PRODUCT & DELIVERY PLAN

> **Delivery status 2026-08-05:** Release Phase 1 đến Phase 14 đã hoàn tất. Dự án đang ở **v0.15.1 — Phase 15 Sprint 15.2 Navigation & Information Architecture**, tạm đóng băng tính năng mới để chuẩn hóa UI/UX trước Closed Beta.

> Kế hoạch tổng thể từ ý tưởng, xây dựng MVP, thương mại hóa, vận hành production đến mở rộng hệ sinh thái thiệp cưới và quản lý khách mời.

---

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Tên sản phẩm tạm thời | **Ngày Đôi** |
| Loại sản phẩm | SaaS thiệp cưới online và quản lý khách mời |
| Thị trường ưu tiên | Việt Nam |
| Kênh sử dụng chính | Mobile web, desktop web, Zalo, Messenger, QR |
| Mô hình ban đầu | Dịch vụ hỗ trợ kết hợp phần mềm |
| Mô hình mục tiêu | SaaS B2C kết hợp B2B2C qua đối tác |
| Kiến trúc khởi đầu | Next.js + NestJS + PostgreSQL + Prisma |
| Đối tượng sử dụng | Cặp đôi, gia đình, nhân viên vận hành, admin, studio/wedding planner |
| Trạng thái hiện tại | v0.15.1 đã hoàn tất Sprint 15.2: role-based navigation, collapsible groups, command palette, breadcrumbs và mobile drawer accessibility; chưa lên production và chưa thêm feature mới |

---

# PHẦN I — PRODUCT STRATEGY

## 2. Tầm nhìn sản phẩm

Xây dựng một nền tảng giúp các cặp đôi Việt Nam:

1. Tạo thiệp cưới online đẹp, nhanh và chuyên nghiệp.
2. Cá nhân hóa thiệp theo từng khách mời.
3. Quản lý nhà trai, nhà gái và nhiều nghi lễ trên cùng hệ thống.
4. Thu thập RSVP và dự tính số người tham dự.
5. Quản lý bàn tiệc, check-in và ảnh do khách đóng góp.
6. Giảm công việc thủ công trước, trong và sau đám cưới.

Sản phẩm không chỉ bán một trang web thiệp cưới. Sản phẩm bán **sự tiện lợi, khả năng quản lý và trải nghiệm trang trọng dành cho khách mời**.

## 3. Định vị

> **Nền tảng thiệp cưới và quản lý khách mời dành riêng cho quy trình tổ chức đám cưới Việt Nam.**

### 3.1. Lợi thế cạnh tranh cần xây dựng

- Cá nhân hóa tên và cách xưng hô cho từng khách.
- Phân tách nhà trai, nhà gái, người mời và nhóm khách.
- Hỗ trợ nhiều lễ, nhiều thời gian và nhiều địa điểm.
- Import danh sách khách bằng Excel.
- Theo dõi đã gửi, đã mở, đã RSVP và số người dự kiến.
- Thiệp tối ưu khi gửi qua Zalo và Messenger.
- Quản lý bàn và QR check-in.
- Dịch vụ hỗ trợ hoàn thiện thiệp cho khách không rành công nghệ.
- Cổng đối tác cho studio ảnh cưới, wedding planner và nhà hàng.

### 3.2. Không cạnh tranh chủ yếu bằng

- Số lượng template rất lớn.
- Giá rẻ nhất thị trường.
- Trình thiết kế phức tạp giống Canva ngay từ đầu.
- Quá nhiều tính năng wedding planner không liên quan tới thiệp và khách mời.

## 4. Khách hàng mục tiêu

### 4.1. B2C

- Cặp đôi 22–35 tuổi.
- Có thói quen sử dụng điện thoại, Zalo và mạng xã hội.
- Muốn thiệp hiện đại nhưng vẫn phù hợp văn hóa gia đình.
- Có từ 100–700 khách mời.
- Muốn biết số khách tham dự để đặt bàn chính xác hơn.

### 4.2. Người mua nhưng không trực tiếp sử dụng

- Cha mẹ cô dâu hoặc chú rể.
- Anh chị em hỗ trợ tổ chức.
- Người phụ trách danh sách khách của gia đình.

### 4.3. B2B/B2B2C

- Studio ảnh cưới.
- Wedding planner.
- Nhà hàng tiệc cưới.
- Dịch vụ trang trí cưới.
- Freelancer thiết kế và chụp ảnh.
- Cửa hàng thiệp giấy.

## 5. Vấn đề cần giải quyết

| Vấn đề hiện tại | Giải pháp của Ngày Đôi |
|---|---|
| Gửi một ảnh thiệp chung cho tất cả mọi người | Link riêng hiển thị đúng tên khách |
| Khó biết ai có tham dự | RSVP và dashboard trạng thái |
| Danh sách khách nằm rải rác trong Excel, giấy và tin nhắn | Danh sách khách tập trung, import/export |
| Nhà trai và nhà gái có nội dung khác nhau | Thiệp và sự kiện theo từng bên |
| Nhiều nghi lễ ở nhiều địa điểm | Timeline và lựa chọn sự kiện theo khách |
| Khó dự tính số bàn | Tổng số người dự kiến và quản lý bàn |
| Đón khách thủ công | QR check-in và tra cứu bàn |
| Ảnh khách chụp bị thất lạc | Album đóng góp bằng QR |

## 6. Nguyên tắc sản phẩm

1. **Mobile-first:** đa số khách mở thiệp bằng điện thoại.
2. **Nhanh hơn đẹp phức tạp:** thiệp phải tải nhanh ngay cả khi mạng yếu.
3. **Không làm lộ dữ liệu khách:** dữ liệu cá nhân không xuất hiện trong API công khai.
4. **Thân thiện với người không rành công nghệ:** quy trình tạo thiệp phải đơn giản.
5. **Phù hợp văn hóa Việt Nam:** ngôn ngữ, xưng hô, nghi lễ và vai trò gia đình phải được hỗ trợ tốt.
6. **Có thể vận hành thủ công trước khi tự động hóa:** ưu tiên bán được sớm.
7. **Mọi thao tác quan trọng phải có lịch sử:** publish, thanh toán, đổi gói, sửa RSVP và check-in.

---

# PHẦN II — BUSINESS MODEL

## 7. Mô hình kinh doanh

### 7.1. Giai đoạn đầu — Assisted Service

Khách chọn mẫu và gửi thông tin. Nhân viên Ngày Đôi hỗ trợ:

- Nhập nội dung.
- Chỉnh ảnh.
- Thiết lập sự kiện.
- Import khách.
- Kiểm tra trên điện thoại.
- Publish và bàn giao.

Mục tiêu là có doanh thu, hiểu hành vi khách hàng và thu thập yêu cầu thực tế trước khi đầu tư editor phức tạp.

### 7.2. Giai đoạn giữa — Self-service SaaS

Khách tự đăng ký, chọn mẫu, chỉnh sửa, thanh toán và publish. Dịch vụ hỗ trợ vẫn được bán dưới dạng add-on.

### 7.3. Giai đoạn mở rộng — Partner Platform

Đối tác có thể:

- Tạo và quản lý thiệp cho khách của họ.
- Dùng template mang thương hiệu đối tác.
- Theo dõi đơn hàng.
- Nhận hoa hồng.
- Mua theo gói số lượng.

## 8. Gói giá mục tiêu

| Gói | Giá tham khảo | Phạm vi chính |
|---|---:|---|
| Demo | Miễn phí | Dùng thử một template, có watermark, chưa publish chính thức |
| Basic | 199.000đ | Thiệp, album, bản đồ, countdown |
| Standard | 399.000đ | RSVP, QR mừng cưới, link cá nhân hóa |
| Premium | 699.000đ | Nhà trai/nhà gái, Excel, nhóm khách, quản lý bàn cơ bản |
| Custom | Từ 1.500.000đ | Thiết kế riêng và nhập dữ liệu hộ |
| Partner | Theo thỏa thuận | Mua số lượng, branding, hoa hồng và dashboard đối tác |

### 8.1. Add-on

- Tên miền riêng.
- Thiết kế logo tên cặp đôi.
- Chỉnh sửa ảnh và video.
- Nhập danh sách khách hộ.
- Quản lý bàn nâng cao.
- QR check-in.
- Lưu trữ album dài hạn.
- Thiệp báo hỷ.
- Template độc quyền.
- Hỗ trợ ưu tiên.

## 9. Trạng thái đơn hàng

```text
DRAFT
→ PENDING_PAYMENT
→ PAID
→ INFORMATION_COLLECTION
→ DESIGNING
→ CUSTOMER_REVIEW
→ REVISION
→ READY_TO_PUBLISH
→ PUBLISHED
→ EVENT_COMPLETED
→ ARCHIVED
```

Trạng thái phụ:

```text
CANCELLED
REFUNDED
SUSPENDED
EXPIRED
```

## 10. Chính sách vận hành cần chốt trước khi bán

- Thời gian lưu thiệp sau ngày cưới.
- Số lần chỉnh sửa miễn phí.
- Điều kiện hoàn tiền.
- Quy định nội dung và hình ảnh bị cấm.
- Trách nhiệm của khách đối với thông tin ngân hàng/QR.
- Chính sách quyền riêng tư đối với khách mời.
- Cách xử lý khi khách yêu cầu xóa dữ liệu.
- SLA hỗ trợ theo từng gói.

---

# PHẦN III — PRODUCT SCOPE

## 11. Vai trò người dùng

| Role | Quyền chính |
|---|---|
| VISITOR | Xem landing page, template và bảng giá |
| CUSTOMER | Tạo, chỉnh sửa và quản lý đám cưới của mình |
| FAMILY_EDITOR | Được customer mời hỗ trợ một đám cưới cụ thể |
| STAFF | Hỗ trợ nhập dữ liệu, thiết kế và vận hành đơn |
| ADMIN | Quản trị toàn hệ thống |
| PARTNER | Quản lý khách hàng và đơn hàng thuộc đối tác |
| CHECKIN_STAFF | Chỉ truy cập màn hình check-in của sự kiện được cấp quyền |

## 12. Module sản phẩm hoàn chỉnh

### 12.1. Public Website

- Trang chủ.
- Giới thiệu tính năng.
- Thư viện template.
- Chi tiết template.
- Bảng giá.
- FAQ.
- Blog/SEO content.
- Liên hệ.
- Điều khoản sử dụng.
- Chính sách quyền riêng tư.

### 12.2. Authentication & Account

- Đăng ký.
- Xác minh email hoặc OTP.
- Đăng nhập.
- Refresh token.
- Quên mật khẩu.
- Đặt lại mật khẩu.
- Đổi mật khẩu.
- Đăng xuất tất cả thiết bị.
- Hồ sơ cá nhân.
- Lịch sử phiên đăng nhập.
- Xóa tài khoản.

### 12.3. Wedding Management

- Tạo đám cưới.
- Thông tin cô dâu/chú rể.
- Thông tin cha mẹ hai bên.
- Ngày cưới chính.
- Slug/link thiệp.
- Trạng thái draft/published/expired.
- Mời người thân cùng chỉnh sửa.
- Sao chép đám cưới thử nghiệm.

### 12.4. Event Management

- Lễ dạm ngõ.
- Lễ ăn hỏi/đính hôn.
- Lễ gia tiên.
- Lễ thành hôn.
- Tiệc cưới.
- Báo hỷ.
- Sự kiện tùy chỉnh.
- Phân loại nhà trai, nhà gái hoặc chung.
- Ngày giờ và múi giờ.
- Địa điểm và Google Maps.
- Hướng dẫn di chuyển.
- Dress code.
- Ghi chú riêng.

### 12.5. Template & Invitation Editor

- Chọn template.
- Chỉnh nội dung từng section.
- Bật/tắt section.
- Chọn bảng màu.
- Chọn font trong danh sách được kiểm soát.
- Chọn nhạc.
- Upload ảnh bìa và album.
- Sắp xếp ảnh.
- Preview mobile/desktop.
- Autosave.
- Lịch sử phiên bản cơ bản.
- Khôi phục phiên bản gần nhất.

### 12.6. Public Invitation

- Greeting theo khách.
- Hero section.
- Thông tin cặp đôi.
- Câu chuyện tình yêu.
- Album.
- Timeline sự kiện.
- Countdown.
- Bản đồ.
- Add to Calendar.
- RSVP.
- Lời chúc.
- QR mừng cưới tùy chọn.
- Chia sẻ link.
- Open Graph preview khi gửi mạng xã hội.
- Trang hết hạn hoặc tạm khóa.

### 12.7. Guest Management

- CRUD khách mời.
- Xưng hô.
- Số điện thoại/email tùy chọn.
- Nhóm khách.
- Nhà trai/nhà gái.
- Người mời.
- Số người dự kiến.
- Trẻ em.
- Ghi chú.
- Tag tùy chỉnh.
- Phân quyền xem sự kiện.
- Import/export Excel.
- Phát hiện trùng lặp.
- Bulk edit.
- Bulk generate link.

### 12.8. Personalized Invitation

- Token riêng cho từng lời mời.
- Greeting cá nhân hóa.
- Link có thể thu hồi.
- Ngày gửi.
- Ngày mở đầu tiên.
- Ngày mở gần nhất.
- Tổng lượt mở.
- Trạng thái phản hồi.
- Không hiển thị dữ liệu cá nhân nhạy cảm trong URL.

### 12.9. RSVP

- Tham dự/từ chối/chưa chắc chắn.
- Chọn sự kiện tham dự.
- Số người lớn.
- Số trẻ em.
- Số suất chay.
- Nhu cầu xe đưa đón.
- Lời chúc.
- Cho phép sửa RSVP bằng link cũ.
- Chặn gửi trùng không kiểm soát.
- Nhật ký thay đổi RSVP.

### 12.10. Dashboard & Analytics

- Tổng khách được mời.
- Đã gửi.
- Đã mở.
- Đã RSVP.
- Tham dự.
- Từ chối.
- Chưa phản hồi.
- Tổng số người dự kiến.
- Theo nhóm khách.
- Theo nhà trai/nhà gái.
- Theo người mời.
- Theo sự kiện.
- Tỷ lệ chuyển đổi mở thiệp → RSVP.
- Export báo cáo.

### 12.11. Table Management

- Tạo khu vực bàn.
- Tạo bàn và sức chứa.
- Gán khách vào bàn.
- Cảnh báo vượt sức chứa.
- Danh sách khách chưa xếp bàn.
- Tìm kiếm khách.
- Export danh sách bàn.
- In bảng tên/bàn hoặc QR.
- Drag-and-drop ở phiên bản nâng cao.

### 12.12. QR Check-in

- QR riêng cho lời mời.
- Camera scan trên mobile.
- Tra cứu thủ công theo tên/số điện thoại.
- Hiển thị số bàn.
- Đánh dấu đã đến.
- Chống check-in trùng.
- Hoàn tác có audit log.
- Chế độ mạng yếu/offline có hàng đợi đồng bộ ở giai đoạn nâng cao.
- Dashboard số khách đã tới theo thời gian thực.

### 12.13. Guest Photo Collection

- QR album tại sự kiện.
- Khách upload ảnh/video.
- Giới hạn loại file và dung lượng.
- Hàng chờ kiểm duyệt.
- Album public/private.
- Download toàn bộ.
- Hết hạn upload.
- Báo cáo nội dung không phù hợp.

### 12.14. Billing & Payment

- Danh mục gói.
- Coupon.
- Đơn hàng.
- Thanh toán chuyển khoản thủ công ở MVP.
- Cổng thanh toán ở phase sau.
- Webhook idempotent.
- Biên nhận.
- Nâng cấp gói.
- Add-on.
- Hoàn tiền thủ công có audit.

### 12.15. Admin Portal

- Dashboard vận hành.
- Quản lý user.
- Quản lý wedding.
- Quản lý đơn hàng.
- Quản lý thanh toán.
- Quản lý template.
- Quản lý media.
- Publish/suspend.
- Ghi chú hỗ trợ nội bộ.
- Quản lý coupon.
- Quản lý đối tác.
- Audit log.
- Cấu hình hệ thống.

### 12.16. Partner Portal

- Hồ sơ đối tác.
- Nhân viên của đối tác.
- Tạo customer/wedding.
- Theo dõi đơn.
- Gói số lượng.
- Mã giới thiệu.
- Hoa hồng.
- Báo cáo doanh số.
- Template riêng có branding.

### 12.17. Notification

- Email xác minh.
- Email reset password.
- Xác nhận thanh toán.
- Thông báo đơn hàng.
- Thông báo RSVP mới.
- Nhắc khách chưa phản hồi, chỉ khi customer chủ động gửi.
- Thông báo gần ngày cưới.
- Thông báo gần hết hạn lưu trữ.
- Template notification có version.

---

# PHẦN IV — TECHNICAL ARCHITECTURE

## 13. Stack đề xuất

| Thành phần | Công nghệ |
|---|---|
| Web frontend | Next.js, React, TypeScript |
| API backend | NestJS, TypeScript |
| Database | PostgreSQL |
| ORM | Prisma |
| Cache/queue khi cần | Redis |
| Object storage | S3-compatible storage |
| CDN | CDN của nhà cung cấp hoặc Cloudflare |
| Email | Transactional email provider |
| Authentication | JWT access token + rotating refresh token |
| API documentation | OpenAPI/Swagger |
| Testing | Unit, integration, API và Playwright E2E |
| Infrastructure | Docker, CI/CD, managed database |
| Monitoring | Error tracking, logs, uptime và metrics |

## 14. Kiến trúc triển khai theo giai đoạn

### 14.1. MVP

```text
Browser
  ├── Public Invitation
  ├── Customer Dashboard
  └── Admin Dashboard
          │
          ▼
      Next.js Web
          │ REST API
          ▼
      NestJS API
       ├── PostgreSQL
       └── Object Storage
```

### 14.2. Scale-up

```text
CDN / WAF
    │
Next.js Web ──────────────── Public asset cache
    │
API Gateway / NestJS API
    ├── PostgreSQL
    ├── Redis cache
    ├── Job queue
    ├── Object storage
    ├── Email provider
    └── Payment provider
```

## 15. Domain model chính

- User
- UserSession
- Role/Permission
- Wedding
- WeddingCollaborator
- CoupleProfile
- FamilyProfile
- Event
- Venue
- Template
- TemplateVersion
- WeddingContent
- MediaAsset
- Guest
- GuestGroup
- Invitation
- InvitationEvent
- RSVP
- RSVPHistory
- TableArea
- DiningTable
- TableAssignment
- CheckIn
- GuestUpload
- Plan
- AddOn
- Order
- OrderItem
- Payment
- Coupon
- Partner
- PartnerMember
- Commission
- Notification
- AuditLog

## 16. Quy tắc dữ liệu quan trọng

1. Mỗi wedding phải có owner.
2. Mọi truy cập dashboard phải kiểm tra ownership hoặc collaboration permission.
3. Public API chỉ trả về wedding đã publish.
4. Guest data không được trả về trong public wedding API.
5. Token mời phải khó đoán, có thể thu hồi và không chứa guest ID tuần tự.
6. Một invitation có thể được cấp quyền cho một hoặc nhiều event.
7. RSVP phải lưu lịch sử thay đổi.
8. Payment webhook phải idempotent.
9. Media phải gắn owner/wedding và có trạng thái kiểm duyệt.
10. Thao tác admin quan trọng phải ghi audit log.
11. Xóa dữ liệu nên dùng soft delete khi cần truy vết tài chính và vận hành.
12. Dữ liệu hết hạn phải được xử lý theo retention policy.

## 17. API group dự kiến

```text
/api/auth/*
/api/users/*
/api/weddings/*
/api/events/*
/api/templates/*
/api/media/*
/api/guests/*
/api/invitations/*
/api/rsvp/*
/api/tables/*
/api/checkin/*
/api/uploads/*
/api/plans/*
/api/orders/*
/api/payments/*
/api/admin/*
/api/partners/*
/api/notifications/*
/api/analytics/*
```

## 18. Non-functional requirements

### 18.1. Performance

- Public invitation tải nội dung quan trọng nhanh trên mạng di động.
- Ảnh có thumbnail, responsive size và lazy loading.
- Không tự động tải video dung lượng lớn.
- API list phải phân trang.
- Dashboard aggregate cần index và tối ưu query.

### 18.2. Availability

- Có health check.
- Có uptime monitoring.
- Backup database tự động.
- Có quy trình restore đã được kiểm thử.
- Có trạng thái maintenance thay vì trả lỗi trắng.

### 18.3. Accessibility

- Điều hướng bằng bàn phím.
- Contrast phù hợp.
- Form có label và thông báo lỗi rõ ràng.
- Không phụ thuộc duy nhất vào màu sắc.
- Nhạc không tự phát trái với chính sách trình duyệt và trải nghiệm người dùng.

### 18.4. SEO và chia sẻ mạng xã hội

- Landing/template pages có metadata.
- Public invitation có Open Graph tùy chỉnh.
- Wedding private có thể cấu hình noindex.
- Sitemap chỉ chứa trang public phù hợp.

---

# PHẦN V — COMPLETE DELIVERY ROADMAP

## 19. Tổng quan các phase

| Phase | Tên | Kết quả chính |
|---:|---|---|
| 0 | Discovery & Validation | Xác thực nhu cầu và mô hình bán |
| 1 | Brand & Product Foundation | Chốt thương hiệu, UX và kiến trúc |
| 2 | Engineering Foundation | Repo, môi trường, DB, CI cơ bản |
| 3 | Identity & Access | Tài khoản và phân quyền an toàn |
| 4 | Wedding Core | Tạo wedding và sự kiện |
| 5 | Invitation Builder | Template, nội dung, media và preview |
| 6 | Guest & RSVP | Khách mời, link riêng và phản hồi |
| 7 | Commercial MVP | Gói bán, đơn hàng, admin và publish |
| 8 | Production Readiness | Security, QA, deploy, monitoring |
| 9 | Pilot Launch | Bán thử và vận hành có kiểm soát |
| 10 | Public Launch | Ra mắt chính thức và tối ưu funnel |
| 11 | Event Operations | Bàn tiệc và QR check-in |
| 12 | Post-wedding Experience | Album khách đóng góp và lưu niệm |
| 13 | Partner Platform | Studio/planner/reseller |
| 14 | Scale & Optimization | Tự động hóa, phân tích và tối ưu chi phí |

---

## PHASE 0 — DISCOVERY & VALIDATION

### Mục tiêu

Xác nhận khách hàng sẵn sàng trả tiền cho giải pháp và xác định phạm vi MVP nhỏ nhất có thể bán.

### Công việc

#### P0-01. Khảo sát thị trường

- Liệt kê đối thủ trực tiếp và gián tiếp.
- So sánh template, RSVP, cá nhân hóa, giá, thời gian bàn giao.
- Ghi nhận điểm mạnh/yếu và khoảng trống.

#### P0-02. Phỏng vấn khách hàng

- Phỏng vấn tối thiểu 10 cặp đôi đã hoặc sắp cưới.
- Phỏng vấn 3–5 studio/planner/nhà hàng.
- Xác định cách họ quản lý khách hiện nay.
- Xác định mức giá chấp nhận.

#### P0-03. Kiểm thử bán hàng thủ công

- Tạo 3 landing/demo template.
- Nhận đơn bằng form.
- Làm thiệp thủ công cho 3–5 khách thử nghiệm.
- Đo thời gian hoàn thành và số lần chỉnh sửa.

#### P0-04. Chốt giả thuyết MVP

- Chọn nhóm khách đầu tiên.
- Chọn bộ tính năng bắt buộc.
- Chọn gói giá thử nghiệm.
- Chọn kênh tiếp cận đầu tiên.

### Deliverables

- Competitor matrix.
- Interview notes.
- Customer journey.
- MVP problem statement.
- Pricing hypothesis.
- Danh sách 5 khách pilot tiềm năng.

### Exit criteria

- Có ít nhất 3 khách thực sự đồng ý dùng thử.
- Có bằng chứng rằng RSVP/cá nhân hóa/nhà trai-nhà gái là nhu cầu có thật.
- Chốt được một phân khúc khách đầu tiên.
- Không còn tranh luận lớn về phạm vi MVP.

---

## PHASE 1 — BRAND & PRODUCT FOUNDATION

### Mục tiêu

Tạo nền tảng thương hiệu và UX nhất quán trước khi phát triển nhiều màn hình.

### Tickets

#### ND-002. Brand foundation

- Kiểm tra khả năng sử dụng tên “Ngày Đôi”.
- Kiểm tra tên miền và social handle.
- Thiết kế logo chính, logo rút gọn và favicon.
- Chốt màu thương hiệu.
- Chốt typography.
- Chốt tone of voice.

#### ND-004. Design system

- Color tokens.
- Typography scale.
- Spacing system.
- Radius, shadow và elevation.
- Buttons, inputs, selects, date picker.
- Modal, drawer, toast, empty state, skeleton.
- Table, pagination và filter.
- Mobile navigation.

#### ND-005. UX architecture

- Sitemap.
- User flows.
- Customer dashboard navigation.
- Admin navigation.
- Invitation section structure.
- Error, loading và empty states.

#### ND-006. Product copy foundation

- Landing page copy.
- Pricing copy.
- Form labels.
- Confirmation messages.
- Error messages.
- Email tone.

### Deliverables

- Brand guideline nhẹ.
- UI kit/design tokens.
- Wireframe chính.
- Prototype landing, dashboard và invitation.
- Content glossary Việt/Anh nếu cần.

### Exit criteria

- Các màn hình chính có wireframe được duyệt.
- Không còn thay đổi lớn về navigation.
- Component cơ bản đủ dùng cho MVP.
- Branding có thể áp dụng đồng nhất trên web và thiệp.

---

## PHASE 2 — ENGINEERING FOUNDATION

### Mục tiêu

Tạo codebase ổn định, có thể phát triển, kiểm thử và deploy lặp lại.

### Trạng thái hiện tại

Starter đã có:

- npm workspaces.
- Next.js frontend.
- NestJS backend.
- PostgreSQL Docker.
- Prisma schema và seed cơ bản.
- Landing page mẫu.
- Invitation demo.
- Dashboard demo.

### Tickets

#### ND-001. Repository and local infrastructure — DONE/VERIFY

- Chuẩn hóa cấu trúc monorepo.
- Environment files.
- Docker Compose.
- Scripts local.
- README.

#### ND-007. Code quality baseline

- ESLint.
- Prettier.
- Type-check.
- Commit convention.
- Pre-commit checks phù hợp.
- Shared TypeScript config.

#### ND-008. CI foundation

- Install dependencies.
- Lint.
- Type-check.
- Unit tests.
- Build web và API.
- Prisma schema validation.

#### ND-009. Environment strategy

- Local.
- Development.
- Staging.
- Production.
- Secret management.
- Environment variable documentation.

#### ND-014. API foundation

- Global validation pipe.
- Standard error response.
- Request ID.
- API versioning strategy.
- Swagger/OpenAPI.
- Pagination conventions.

#### ND-015. Database migration strategy

- Migration naming.
- Seed strategy.
- Roll-forward policy.
- Production migration checklist.
- Data backfill approach.

### Deliverables

- Build xanh trên CI.
- Local setup chạy bằng tài liệu.
- API conventions.
- Shared coding standards.
- Environment checklist.

### Exit criteria

- Developer mới có thể chạy dự án từ README.
- Mọi pull/push lên main đều chạy kiểm tra tự động.
- Database migration có thể tái tạo môi trường sạch.
- Không commit secrets.

### Git flow đề xuất cho dự án solo

- Thay đổi nhỏ, an toàn: commit và push thẳng `main`.
- Thay đổi DB lớn, auth, payment hoặc refactor rủi ro: dùng branch tạm.
- Chỉ merge khi lint, test và build pass.
- Tag release theo dạng `v0.x.y` trước launch, `v1.x.y` sau production.

---

## PHASE 3 — IDENTITY & ACCESS

### Mục tiêu

Xây dựng hệ thống tài khoản, session và phân quyền đủ an toàn cho dữ liệu đám cưới.

### Tickets

#### ND-003. Authentication

- Đăng ký email/password.
- Hash password an toàn.
- Xác minh email hoặc OTP.
- Đăng nhập.
- Access token ngắn hạn.
- Refresh token rotation.
- Thu hồi refresh token.
- Đăng xuất.
- Đăng xuất tất cả thiết bị.

#### ND-016. Password recovery

- Forgot password.
- Reset token một lần.
- Hết hạn token.
- Vô hiệu token cũ sau khi dùng.
- Email thông báo đổi mật khẩu.

#### ND-017. RBAC and ownership

- CUSTOMER.
- FAMILY_EDITOR.
- STAFF.
- ADMIN.
- PARTNER.
- CHECKIN_STAFF.
- Ownership guard cho wedding.
- Permission theo resource.

#### ND-018. Account profile

- Tên hiển thị.
- Số điện thoại tùy chọn.
- Avatar tùy chọn.
- Đổi mật khẩu.
- Quản lý session.
- Yêu cầu xóa tài khoản.

#### ND-019. Security controls

- Rate limit login.
- Lock hoặc delay sau nhiều lần sai.
- Audit login success/failure.
- Secure cookie nếu dùng cookie-based refresh.
- CORS và CSRF strategy phù hợp kiến trúc.

### QA trọng tâm

- Token hết hạn.
- Token bị thu hồi.
- User A không truy cập dữ liệu user B.
- Brute-force protection.
- Reset link chỉ dùng một lần.
- Session cũ bị vô hiệu sau đổi mật khẩu nếu policy yêu cầu.

### Exit criteria

- Authentication E2E pass.
- Ownership test pass cho mọi endpoint private hiện có.
- Không có endpoint tạo/sửa wedding công khai.
- Có audit cơ bản cho login và thay đổi quyền.

---

## PHASE 4 — WEDDING CORE

### Mục tiêu

Cho phép customer tạo và quản lý cấu trúc đám cưới thật.

### Tickets

#### ND-010. Create wedding

- Wedding name nội bộ.
- Tên cô dâu/chú rể.
- Slug availability.
- Ngày cưới chính.
- Draft lifecycle.
- Wizard tạo mới.

#### ND-011. Event management

- CRUD event.
- Loại nghi lễ.
- Nhà trai/nhà gái/chung.
- Date/time/timezone.
- Venue và map URL.
- Dress code.
- Note.
- Sort order.

#### ND-025. Couple & family profiles

- Hồ sơ cặp đôi.
- Tên cha mẹ hai bên.
- Cách hiển thị trên thiệp.
- Ẩn trường không dùng.

#### ND-026. Collaborators

- Mời người thân chỉnh sửa.
- Quyền xem/chỉnh sửa.
- Thu hồi quyền.
- Nhật ký lời mời.

#### ND-027. Wedding lifecycle

- Draft.
- Ready for review.
- Published.
- Suspended.
- Expired.
- Archived.
- Duplicate wedding for testing.

### UX chính

- Setup wizard ngắn.
- Checklist phần còn thiếu.
- Autosave trạng thái cơ bản.
- Cảnh báo khi rời form chưa lưu.
- Không bắt buộc nhập tất cả ngay lần đầu.

### Exit criteria

- Customer có thể tạo wedding từ đầu mà không cần can thiệp DB.
- Có ít nhất một event hợp lệ trước khi publish.
- Dữ liệu nhà trai/nhà gái hiển thị đúng.
- Collaborator không thể truy cập wedding khác.

---

## PHASE 5 — INVITATION BUILDER

### Mục tiêu

Cho phép tạo thiệp hoàn chỉnh từ template và publish nội dung đẹp trên mobile.

### Tickets

#### ND-012. Template and content editor

- Chọn template.
- Edit section content.
- Bật/tắt section.
- Theme color.
- Font preset.
- Music selection.
- Mobile/desktop preview.
- Autosave.

#### ND-013. Media management

- Upload ảnh.
- Validate MIME/type/size.
- Tạo thumbnail.
- Nén ảnh.
- Cover image.
- Album ordering.
- Xóa ảnh an toàn.

#### ND-028. Template catalog

- Danh sách template.
- Filter style.
- Preview demo.
- Template availability theo gói.
- Version template.

#### ND-029. Public invitation rendering

- Render theo slug.
- Chỉ wedding published mới truy cập được.
- Countdown.
- Timeline.
- Map.
- Add to Calendar.
- Share button.
- Open Graph.
- Custom 404/expired page.

#### ND-033. Draft preview

- Preview bằng secure preview token.
- Không index search engine.
- Token hết hạn hoặc thu hồi được.

#### ND-034. Version and restore

- Lưu phiên bản khi publish.
- Khôi phục phiên bản trước.
- Không mất dữ liệu đang chỉnh sửa.

### Performance budget ban đầu

- Hero image được tối ưu.
- Không tải toàn bộ album ngay lập tức.
- JS client tối thiểu cho public invitation.
- Layout không nhảy mạnh khi ảnh tải.
- Có fallback khi nhạc hoặc ảnh lỗi.

### Exit criteria

- Có tối thiểu 5 template đạt chất lượng bán thử.
- Customer chỉnh được nội dung không cần sửa code.
- Public invitation hoạt động tốt trên mobile phổ biến.
- Draft preview không public dữ liệu ngoài ý muốn.

---

## PHASE 6 — GUEST & RSVP

### Mục tiêu

Hoàn thiện giá trị cốt lõi khác biệt: danh sách khách, link riêng và phản hồi tham dự.

### Tickets

#### ND-020. Guest list

- CRUD guest.
- Salutation.
- Side.
- Group.
- Inviter.
- Expected headcount.
- Note và tags.
- Bulk actions.

#### ND-021. Excel import/export

- File mẫu.
- Preview trước import.
- Validate từng dòng.
- Phát hiện trùng.
- Cho phép bỏ qua/sửa lỗi.
- Báo cáo kết quả.
- Export đầy đủ.

#### ND-022. Personalized invitation

- Token ngẫu nhiên riêng.
- Greeting cá nhân hóa.
- Event visibility.
- Revoke/regenerate.
- Tracking openedAt/lastOpenedAt/openCount.

#### ND-023. RSVP

- ATTENDING.
- DECLINED.
- MAYBE nếu business chấp nhận.
- Adult/child count.
- Vegetarian count.
- Transport.
- Event selection.
- Message.
- Update RSVP.

#### ND-024. Dashboard analytics

- Invited.
- Sent.
- Viewed.
- Responded.
- Attending.
- Declined.
- Pending.
- Estimated headcount.
- Breakdown filters.

#### ND-035. Share assistance

- Copy personalized link.
- Bulk mark sent.
- Export links for Zalo/manual send.
- Message template theo cách xưng hô.
- Không tự động spam khách.

#### ND-036. RSVP notifications

- Customer nhận thông báo RSVP mới.
- Daily digest tùy chọn.
- Tắt/mở notification.

### Quy tắc riêng tư

- Không trả danh sách khách trong public API.
- Không cho đoán token tuần tự.
- Không để search engine index link khách.
- Không hiển thị số điện thoại/email trên thiệp.
- Có quyền xóa guest theo yêu cầu của customer.

### Exit criteria

- Import được file thực tế có lỗi và trả báo cáo rõ ràng.
- Link cá nhân hóa hiển thị đúng greeting/event.
- RSVP update không tạo dữ liệu trùng.
- Dashboard khớp dữ liệu database.
- Test ownership và data privacy pass.

---

## PHASE 7 — COMMERCIAL MVP

### Mục tiêu

Biến sản phẩm kỹ thuật thành sản phẩm có thể nhận đơn, thu tiền và vận hành.

### Tickets

#### ND-030. Plans and entitlements

- CRUD plan.
- Feature limits.
- Template access.
- Guest limit.
- Media limit.
- Add-on.
- Upgrade rule.

#### ND-037. Order lifecycle

- Tạo order.
- Order items.
- Payment status.
- Fulfillment status.
- Customer note.
- Staff assignment.
- Revision count.

#### ND-038. Manual payment MVP

- Hiển thị hướng dẫn chuyển khoản.
- Customer upload/reference payment.
- Staff xác nhận.
- Audit xác nhận.
- Kích hoạt quyền theo order.

#### ND-031. Payment integration

- Provider abstraction.
- Payment intent/request.
- Signed webhook validation.
- Idempotency.
- Retry policy.
- Reconciliation report.

#### ND-032. Admin portal

- Dashboard.
- User lookup.
- Wedding lookup.
- Order queue.
- Payment review.
- Publish/suspend.
- Internal notes.
- Template management.

#### ND-039. Publish approval flow

- Customer request publish.
- Validation checklist.
- Staff review tùy gói.
- Publish.
- Rollback.
- Suspend khi vi phạm hoặc chargeback.

#### ND-043. Coupon and promotions

- Fixed/percentage discount.
- Validity period.
- Usage limit.
- Plan restrictions.
- Audit.

#### ND-044. Transactional emails

- Verify email.
- Reset password.
- Order created.
- Payment confirmed.
- Publish complete.
- RSVP notification.

### Admin operational views

- Đơn mới cần xử lý.
- Đơn chờ khách cung cấp thông tin.
- Đơn chờ review.
- Đơn cần chỉnh sửa.
- Đơn sắp tới ngày cưới.
- Thanh toán chưa khớp.
- Wedding bị lỗi publish.

### Exit criteria

- Có thể đi từ đăng ký → mua gói → tạo wedding → publish mà không sửa DB thủ công.
- Admin có thể hỗ trợ toàn bộ vòng đời đơn.
- Entitlement chặn đúng tính năng vượt gói.
- Thanh toán không bị ghi nhận hai lần.
- Có ít nhất một quy trình hoàn tiền/suspend có audit.

---

## PHASE 8 — PRODUCTION READINESS

### Mục tiêu

Đưa hệ thống tới trạng thái đủ an toàn và ổn định để sử dụng dữ liệu khách hàng thật.

### Tickets

#### ND-040. Security hardening

- Input validation.
- Output encoding.
- Rate limiting.
- RBAC/ownership review.
- Secure headers.
- CORS policy.
- CSRF strategy.
- Secret rotation.
- Dependency scanning.
- File upload allowlist.
- Malware scanning strategy.
- Audit logs.

#### ND-041. Quality engineering

- Unit tests.
- Service integration tests.
- API tests.
- E2E critical flows.
- Accessibility audit.
- Responsive testing.
- Browser matrix.
- Regression suite.

#### ND-042. Deployment

- Production hosting.
- Managed PostgreSQL.
- Object storage.
- CDN.
- Domain và HTTPS.
- CI/CD staging/production.
- Migration job.
- Rollback procedure.

#### ND-045. Observability

- Centralized logs.
- Error tracking.
- Uptime monitoring.
- API latency metrics.
- Alert rules.
- Dashboard vận hành.

#### ND-046. Backup and disaster recovery

- Automated backup.
- Retention policy.
- Restore drill.
- Object storage backup/versioning.
- RPO/RTO mục tiêu.

#### ND-047. Privacy and legal readiness

- Terms of Service.
- Privacy Policy.
- Cookie policy nếu cần.
- Data retention.
- Delete/export request process.
- Consent text cho guest data.
- Vendor data processing review.

#### ND-048. Performance and load test

- Public invitation load test.
- RSVP burst test.
- Admin list performance.
- Image delivery test.
- Database index review.

### Minimum test matrix

- iPhone Safari.
- Android Chrome.
- Desktop Chrome.
- Desktop Safari.
- Desktop Edge.
- Small screen.
- Slow mobile network simulation.
- Không cho phép autoplay audio.
- QR scan trên thiết bị thật khi module check-in ra mắt.

### Production go-live checklist

- [ ] Domain và HTTPS hoạt động.
- [ ] Production secrets tách biệt.
- [ ] Database backup đã chạy.
- [ ] Restore test thành công.
- [ ] Error tracking nhận event.
- [ ] Uptime alert hoạt động.
- [ ] Admin account có MFA nếu hỗ trợ.
- [ ] Payment webhook verification pass.
- [ ] Terms/Privacy hiển thị.
- [ ] Critical E2E pass.
- [ ] Seed/demo data không tồn tại trong production.
- [ ] Logging không chứa password/token/guest sensitive data.

### Exit criteria

- Không còn lỗi Critical/High chưa xử lý.
- Có rollback procedure được kiểm thử.
- Có người chịu trách nhiệm nhận alert.
- Backup restore đã được chứng minh.
- Legal pages và data workflow đã sẵn sàng.

---

## PHASE 9 — PILOT LAUNCH

### Mục tiêu

Phục vụ một nhóm nhỏ khách thật, ưu tiên học nhanh và kiểm soát rủi ro.

### Quy mô đề xuất

- 5–10 đám cưới.
- 500–3.000 khách mời tổng cộng.
- 2–3 template chủ lực.
- Hỗ trợ trực tiếp từng khách.

### Công việc

#### ND-049. Pilot onboarding

- Form thu thập thông tin.
- Checklist tài liệu/ảnh.
- Hướng dẫn customer.
- Kênh hỗ trợ.

#### ND-050. Support workflow

- Mẫu trả lời.
- Phân loại issue.
- SLA nội bộ.
- Escalation kỹ thuật.
- Ghi nhận feature request.

#### ND-051. Product analytics baseline

- Signup.
- Wedding created.
- Template selected.
- Previewed.
- Payment completed.
- Published.
- Invitation opened.
- RSVP submitted.

#### ND-052. Feedback loop

- Phỏng vấn sau khi publish.
- Phỏng vấn sau ngày cưới.
- CSAT/NPS nhẹ.
- Theo dõi lý do từ bỏ.

### KPI pilot

- ≥ 80% wedding pilot được publish.
- ≥ 95% public invitation uptime trong thời gian pilot, mục tiêu sau đó cao hơn.
- RSVP submit error < 1%.
- Không có data leak.
- Thời gian nhân viên hoàn thiện một đơn Standard đạt mục tiêu nội bộ.
- Có ít nhất 3 testimonial/case study được phép sử dụng.

### Exit criteria

- Hoàn thành tối thiểu 5 đám cưới thật.
- Không có blocker nghiêm trọng lặp lại.
- Có danh sách cải tiến ưu tiên dựa trên dữ liệu.
- Quy trình hỗ trợ đủ rõ để tăng số đơn.

---

## PHASE 10 — PUBLIC LAUNCH

### Mục tiêu

Ra mắt chính thức, tăng đơn hàng và tối ưu funnel chuyển đổi.

### Tickets

#### ND-053. Marketing website completion

- Landing page hoàn chỉnh.
- Template pages.
- Pricing.
- FAQ.
- Case studies.
- Contact.
- SEO foundations.

#### ND-054. Conversion funnel

- CTA rõ ràng.
- Demo invitation.
- Trial flow.
- Lead form.
- Abandoned onboarding tracking.

#### ND-055. Referral program

- Referral code.
- Reward rules.
- Fraud prevention cơ bản.
- Report.

#### ND-056. Customer success

- Onboarding email.
- In-app checklist.
- Help center.
- Video ngắn.
- Support ticket/contact form.

#### ND-057. Product analytics dashboard

- Acquisition.
- Activation.
- Payment conversion.
- Publish rate.
- RSVP usage.
- Retention theo event lifecycle.

### Kênh go-to-market ban đầu

- Facebook/TikTok content về chuẩn bị đám cưới.
- Group cưới hỏi địa phương.
- Studio ảnh cưới.
- Wedding planner.
- Nhà hàng.
- SEO theo từ khóa thiệp cưới online.
- Mẫu demo có thể chia sẻ.
- Referral từ khách cũ.

### KPI 90 ngày sau public launch

- 30 đơn trả phí đầu tiên.
- Publish rate sau mua ≥ 80%.
- Signup → paid conversion được đo và cải thiện liên tục.
- 10 template thương mại.
- 5 đối tác có phát sinh lead hoặc đơn.
- Support issue phổ biến có tài liệu tự phục vụ.

### Exit criteria

- Funnel acquisition → payment → publish được đo đầy đủ.
- Có doanh thu lặp lại theo tháng hoặc pipeline rõ ràng.
- Support không phụ thuộc hoàn toàn vào người phát triển.
- Top lỗi onboarding đã được xử lý.

---

## PHASE 11 — EVENT OPERATIONS

### Mục tiêu

Mở rộng từ “trước ngày cưới” sang vận hành trực tiếp tại buổi tiệc.

### Tickets

#### ND-060. Table management

- Area/zone.
- Table CRUD.
- Capacity.
- Assign guest.
- Unassigned guest list.
- Capacity warning.
- Export/print.

#### ND-061. QR invitation

- QR per invitation.
- Printable QR.
- Regenerate/revoke.
- Signed payload hoặc secure token.

#### ND-062. Check-in application

- Camera scanner.
- Manual search.
- Guest detail.
- Table direction.
- Mark arrived.
- Duplicate warning.
- Undo with permission.

#### ND-063. Check-in access control

- Event-specific access.
- Temporary staff account.
- Expiration.
- Device/session management.

#### ND-064. Live attendance dashboard

- Checked-in count.
- Expected remaining.
- By table/zone.
- By side/group.
- Recent check-ins.

#### ND-065. Offline tolerance

- Cache guest lookup subset.
- Queue check-ins when temporarily offline.
- Conflict resolution.
- Sync status.

### Rủi ro cần xử lý

- Wi-Fi nhà hàng yếu.
- Camera permission bị chặn.
- QR bị chụp lại.
- Khách đến nhưng không có link.
- Nhiều người cùng check-in một khách.
- Nhân viên thao tác nhầm.

### Exit criteria

- Pilot check-in thành công tại ít nhất 2 sự kiện.
- Có fallback tìm tên thủ công.
- Duplicate và undo hoạt động đúng.
- Không làm mất check-in khi mạng chập chờn trong phạm vi đã hỗ trợ.

---

## PHASE 12 — POST-WEDDING EXPERIENCE

### Mục tiêu

Kéo dài giá trị sản phẩm sau ngày cưới và tạo cơ hội upsell.

### Tickets

#### ND-070. Guest photo collection

- Public upload link/QR.
- Image/video validation.
- Upload progress.
- Guest optional name.
- Terms acknowledgment.

#### ND-071. Moderation

- Pending/approved/rejected.
- Report content.
- Admin/customer review.
- Bulk actions.

#### ND-072. Memory page

- Chuyển invitation thành trang kỷ niệm.
- Highlight album.
- Thank-you message.
- Disable RSVP.
- Keep event timeline.

#### ND-073. Download and archive

- Download selected/all media.
- Zip job asynchronous.
- Expiration notice.
- Storage upgrade.

#### ND-074. Thank-you invitation

- Thiệp cảm ơn.
- Chia sẻ album.
- Báo hỷ sau cưới.

### Exit criteria

- Guest upload an toàn và có moderation.
- Customer có thể tải dữ liệu trước khi hết hạn.
- Retention/storage fee được định nghĩa rõ.
- Invitation chuyển trạng thái sau cưới không làm hỏng link cũ.

---

## PHASE 13 — PARTNER PLATFORM

### Mục tiêu

Biến đối tác thành kênh bán hàng có thể mở rộng.

### Tickets

#### ND-080. Partner onboarding

- Partner application.
- Approval.
- Contract status.
- Profile và branding.

#### ND-081. Partner workspace

- Member management.
- Customer management.
- Wedding creation.
- Order tracking.
- Permissions.

#### ND-082. Partner pricing

- Volume package.
- Credit balance hoặc prepaid units.
- Discount tier.
- Feature entitlement.

#### ND-083. Referral and commission

- Referral attribution.
- Commission rules.
- Pending/approved/paid.
- Reconciliation.

#### ND-084. White-label options

- Partner logo.
- Co-branding.
- Custom subdomain.
- Template collection riêng.

#### ND-085. Partner analytics

- Leads.
- Conversion.
- Orders.
- Revenue.
- Commission.

### Exit criteria

- Có ít nhất 3 đối tác hoạt động hàng tháng.
- Đối tác tự tạo và quản lý đơn mà không cần quyền admin.
- Hoa hồng có thể đối soát.
- Dữ liệu giữa các đối tác được cô lập.

---

## PHASE 14 — SCALE & OPTIMIZATION

### Mục tiêu

Tăng khả năng phục vụ, giảm chi phí vận hành và cải thiện lợi nhuận.

### Workstreams

#### ND-090. Performance scaling

- CDN tuning.
- Caching.
- Read replicas khi cần.
- Query optimization.
- Background jobs.
- Image pipeline optimization.

#### ND-091. Operational automation

- Auto reminder nội bộ.
- Auto expiration.
- Auto archive.
- Payment reconciliation.
- Scheduled reports.
- Support macros.

#### ND-092. Advanced analytics

- Cohort.
- Plan profitability.
- Template conversion.
- Partner performance.
- Churn/loss reasons.

#### ND-093. Experimentation

- Pricing tests.
- Landing page tests.
- Onboarding tests.
- Template ranking.
- Upsell experiments.

#### ND-094. Localization

- English/Vietnamese content model.
- Locale-aware dates.
- International phone/address support.
- Currency and payment expansion chỉ khi có nhu cầu thật.

#### ND-095. Advanced editor

- Section drag/drop.
- More layout controls.
- Reusable blocks.
- Custom CSS chỉ dành cho admin/designer nếu cần.
- Không để editor làm giảm performance invitation.

#### ND-096. Mobile app evaluation

Chỉ xây app native khi dữ liệu chứng minh web không đáp ứng tốt, đặc biệt cho check-in hoặc đối tác.

### Exit criteria

- Chi phí hạ tầng trên mỗi wedding được theo dõi.
- Các tác vụ lặp lại lớn đã được tự động hóa.
- Roadmap mới dựa trên dữ liệu thay vì cảm tính.
- Hệ thống chịu được mùa cưới cao điểm theo load test mục tiêu.

---

# PHẦN VI — QA & RELEASE MANAGEMENT

## 20. Test strategy

### 20.1. Test pyramid

- Unit test cho business rules.
- Integration test cho service + database.
- API test cho contract và authorization.
- E2E cho critical customer journeys.
- Manual exploratory cho UX, browser và thiết bị thật.

### 20.2. Critical E2E flows

1. Đăng ký → xác minh → đăng nhập.
2. Tạo wedding → event → chọn template → preview.
3. Thêm/import guest → tạo link → mở invitation.
4. Guest RSVP → dashboard cập nhật.
5. Mua gói → xác nhận thanh toán → publish.
6. Admin suspend/publish đúng quyền.
7. Xếp bàn → scan QR → check-in.
8. Upload ảnh khách → moderation → album.

### 20.3. Security test cases bắt buộc

- IDOR/ownership.
- Broken role authorization.
- Token tampering.
- Brute force.
- File upload bypass.
- XSS qua tên khách/lời chúc/nội dung thiệp.
- SQL injection protections thông qua ORM và validation.
- Webhook signature bypass.
- Duplicate payment/check-in/RSVP.
- Sensitive data in logs.

## 21. Bug severity

| Severity | Mô tả |
|---|---|
| Critical | Data leak, mất dữ liệu, payment sai, hệ thống không dùng được diện rộng |
| High | Luồng chính bị chặn, publish/RSVP/login lỗi nghiêm trọng |
| Medium | Chức năng phụ lỗi, có workaround |
| Low | UI/copy nhỏ, không ảnh hưởng luồng chính |

## 22. Release gates

Một release production chỉ được triển khai khi:

- Lint/type-check/build pass.
- Migration được review.
- Critical E2E pass.
- Không có Critical/High unresolved hoặc có quyết định chấp nhận rủi ro rõ ràng.
- Rollback plan tồn tại.
- Monitoring cho feature quan trọng đã có.
- Feature flag được dùng cho phần rủi ro cao nếu phù hợp.

## 23. Definition of Ready

Một ticket sẵn sàng phát triển khi:

- Có mục tiêu nghiệp vụ.
- Có scope và out of scope.
- Có acceptance criteria.
- Có UI hoặc behavior đủ rõ.
- Có dependency được xác định.
- Có rule validation/error states.
- Có analytics/audit requirement nếu cần.

## 24. Definition of Done

Một ticket hoàn tất khi:

- Code hoàn thành.
- Review/self-review hoàn tất.
- Lint/type-check/test pass.
- Migration/seed cập nhật nếu cần.
- API docs cập nhật.
- UI responsive và error/loading/empty states đầy đủ.
- Authorization được kiểm thử.
- QA pass trên staging.
- Không làm hỏng tính năng cũ.
- Release note hoặc documentation cập nhật.

---

# PHẦN VII — DEVOPS & OPERATIONS

## 25. Environment

### Local

- Docker PostgreSQL.
- Local object storage emulator tùy chọn.
- Seed demo.

### Development

- Tích hợp thường xuyên.
- Có thể dùng dữ liệu giả.
- Không chứa dữ liệu khách thật.

### Staging

- Gần production nhất có thể.
- Dùng cho QA/UAT.
- Payment sandbox.
- Email sandbox hoặc allowlist.

### Production

- Managed database.
- Backup.
- Monitoring.
- Access hạn chế.
- Không bật debug.

## 26. Deployment flow

```text
Code change
→ Lint / Type-check / Test
→ Build
→ Deploy Development
→ Deploy Staging
→ QA/UAT
→ Production approval
→ Database migration
→ Deploy Production
→ Smoke test
→ Monitor
```

## 27. Monitoring dashboard

- Uptime web/API.
- Error rate.
- API latency.
- Database connections.
- Storage usage.
- Queue failure.
- Email failure.
- Payment webhook failure.
- RSVP submit failure.
- Public invitation 4xx/5xx.

## 28. Incident process

1. Phát hiện và xác nhận.
2. Đánh giá severity.
3. Giảm tác động ngay.
4. Giao tiếp với customer nếu cần.
5. Fix hoặc rollback.
6. Xác nhận phục hồi.
7. Postmortem không đổ lỗi.
8. Tạo action items phòng tái diễn.

---

# PHẦN VIII — DATA, PRIVACY & SECURITY

## 29. Phân loại dữ liệu

### Public

- Nội dung landing page.
- Template demo.

### Customer-controlled public

- Nội dung thiệp đã publish.
- Ảnh được customer chọn public.

### Private

- Guest list.
- RSVP details.
- Số điện thoại/email.
- Payment/order details.
- Internal support notes.

### Sensitive authentication data

- Password hash.
- Refresh token hash/session identifiers.
- Reset token.
- Provider secrets.

## 30. Data retention đề xuất

- Account: cho tới khi user xóa hoặc theo policy.
- Wedding content: theo gói và thời gian lưu trữ.
- Guest data: cho phép customer xóa sau sự kiện; có auto-reminder.
- Payment records: giữ theo yêu cầu kế toán/pháp lý phù hợp.
- Audit logs: giữ theo policy vận hành.
- Guest uploads: hết hạn theo gói, customer có thời gian download.

## 31. Security checklist theo feature

### Authentication

- Password hash mạnh.
- Refresh rotation.
- Token revocation.
- Rate limit.

### Media

- Allowlist MIME và extension.
- Kiểm tra magic bytes nếu có.
- Random object key.
- Private bucket cho draft.
- Signed URL.
- Image re-encoding.

### Invitation

- Sanitize rich text.
- Prevent script injection.
- No guest list leakage.
- noindex cho personalized links.

### Payment

- Verify signature.
- Idempotency.
- Store provider reference.
- Reconcile mismatches.

### Admin

- Least privilege.
- Audit log.
- MFA khi khả thi.
- Không cho staff export dữ liệu ngoài phạm vi công việc.

---

# PHẦN IX — ANALYTICS & KPI

## 32. North-star metric

**Số wedding trả phí được publish thành công và có khách thực sự mở thiệp.**

Metric này kết hợp doanh thu, activation và giá trị sử dụng thật.

## 33. Funnel chính

```text
Visitor
→ View template/pricing
→ Signup
→ Create wedding
→ Select template
→ Add event/content
→ Add guest
→ Purchase
→ Publish
→ Invitation opened
→ RSVP received
```

## 34. KPI sản phẩm

- Signup → Create wedding.
- Create wedding → Preview.
- Preview → Purchase.
- Purchase → Publish.
- Publish → First invitation open.
- Invitation open → RSVP.
- Median time to publish.
- Number of support contacts per order.
- Revision count per assisted order.
- Template conversion rate.

## 35. KPI kinh doanh

- Revenue.
- Average order value.
- Gross margin.
- Customer acquisition cost.
- Partner-sourced revenue.
- Refund rate.
- Add-on attach rate.
- Repeat/referral rate.

## 36. KPI vận hành

- Thời gian xử lý đơn.
- Tỷ lệ giao đúng hẹn.
- Số lỗi production trên mỗi wedding.
- Support first response time.
- Payment mismatch rate.
- Backup success rate.

---

# PHẦN X — MARKETING & SALES PLAN

## 37. Nội dung marketing

### Nhóm nội dung 1 — Giá trị thực tế

- Cách quản lý khách mời không bị sót.
- Cách dự tính số bàn.
- Cách gửi thiệp lịch sự qua Zalo.
- Khi nào nên dùng thiệp online và thiệp giấy.

### Nhóm nội dung 2 — Cảm xúc

- Câu chuyện cặp đôi.
- Before/after thiết kế thiệp.
- Khoảnh khắc khách mở thiệp.
- Album sau ngày cưới.

### Nhóm nội dung 3 — Chứng minh sản phẩm

- Demo thiệp thật.
- Demo RSVP.
- Demo cá nhân hóa tên.
- Demo dashboard.
- Case study.

## 38. Quy trình bán hàng assisted service

1. Lead xem demo.
2. Tư vấn gói.
3. Thu thập yêu cầu.
4. Tạo order.
5. Thanh toán.
6. Thu thập ảnh/nội dung.
7. Dựng bản nháp.
8. Customer review.
9. Chỉnh sửa.
10. Publish.
11. Hỗ trợ gửi khách.
12. Theo dõi RSVP.
13. Chuyển sang memory page sau cưới.

## 39. Partner sales

- Bộ demo riêng cho studio.
- Giá reseller.
- Mã giới thiệu.
- Tài liệu giới thiệu một trang.
- Chính sách hoa hồng rõ ràng.
- Hỗ trợ onboarding đối tác.
- Báo cáo đối soát hàng tháng.

---

# PHẦN XI — RISK REGISTER

## 40. Rủi ro chính và cách giảm thiểu

| Rủi ro | Tác động | Giảm thiểu |
|---|---|---|
| Thị trường cạnh tranh bằng giá | Biên lợi nhuận thấp | Tập trung guest management và dịch vụ |
| Khách ít sử dụng RSVP | Giá trị khác biệt giảm | Thiết kế form cực ngắn, hướng dẫn cách gửi |
| Template bị sao chép | Mất lợi thế hình ảnh | Lợi thế vận hành, dữ liệu, đối tác và UX |
| Ảnh làm thiệp tải chậm | Trải nghiệm kém | Nén, CDN, responsive image, lazy load |
| Rò rỉ guest data | Thiệt hại nghiêm trọng | Ownership, token mạnh, public API tối giản |
| Sai thanh toán | Mất tiền/uy tín | Idempotency, webhook signature, reconciliation |
| Mạng yếu khi check-in | Ùn tắc tại sảnh | Manual search, offline queue, pilot thật |
| Support quá tải mùa cưới | Chậm bàn giao | Template hóa quy trình, SLA, partner/staff tools |
| Customer đổi nội dung nhiều lần | Tăng chi phí | Giới hạn revision theo gói, versioning |
| Chi phí storage media cao | Giảm lợi nhuận | Quota, expiration, archive add-on |
| Phụ thuộc nhà cung cấp | Downtime/giá tăng | Provider abstraction và backup plan |
| Quy định pháp lý thay đổi | Rủi ro tuân thủ | Review định kỳ với chuyên gia phù hợp |

---

# PHẦN XII — DELIVERY PRIORITY

## 41. Must / Should / Could / Won't cho phiên bản bán đầu tiên

### Must have

- Authentication.
- Wedding CRUD.
- Event CRUD.
- Template selection.
- Invitation content editor cơ bản.
- Media upload.
- Public invitation.
- Guest list.
- Excel import/export.
- Personalized link.
- RSVP.
- Dashboard.
- Plans/order/manual payment.
- Admin support flow.
- Publish.
- Security/backup/monitoring cơ bản.

### Should have

- QR mừng cưới.
- Collaborator.
- Coupon.
- Email notifications.
- Version restore.
- Basic analytics.
- Customer onboarding checklist.

### Could have

- Table management.
- QR check-in.
- Guest photo album.
- Partner portal.
- Custom domain.
- Advanced editor.

### Won't have trong MVP đầu tiên

- Native mobile app.
- Marketplace vendor đầy đủ.
- AI tạo toàn bộ thiệp.
- Editor tự do như Canva.
- Livestream.
- Hệ thống kế toán đầy đủ.

---

# PHẦN XIII — SUGGESTED TIMELINE

## 42. Timeline tham khảo cho một người phát triển chính

> Đây là thứ tự và phạm vi tham khảo, không phải cam kết thời gian cố định. Thời lượng thực tế phụ thuộc mức độ hoàn thiện UI, thanh toán, hạ tầng và thời gian QA.

| Giai đoạn | Khoảng thời gian tham khảo |
|---|---:|
| Phase 0–2: Validation, design, foundation | 3–5 tuần |
| Phase 3–6: Auth, wedding, builder, guest/RSVP | 8–12 tuần |
| Phase 7–8: Commercial MVP và production readiness | 5–8 tuần |
| Phase 9: Pilot | 3–6 tuần theo lịch cưới khách thật |
| Phase 10: Public launch optimization | Liên tục 8–12 tuần đầu |
| Phase 11–12: Check-in và post-wedding | 6–10 tuần |
| Phase 13: Partner platform | 6–10 tuần |
| Phase 14: Scale | Liên tục theo dữ liệu |

### Milestone đề xuất

- **M0:** Starter chạy local.
- **M1:** Customer đăng nhập và tạo wedding.
- **M2:** Thiệp được chỉnh sửa và publish.
- **M3:** Guest import + personalized link + RSVP.
- **M4:** Nhận thanh toán và vận hành đơn trên admin.
- **M5:** Production pilot.
- **M6:** Public launch.
- **M7:** Table/check-in.
- **M8:** Partner platform.

---

# PHẦN XIV — IMMEDIATE EXECUTION ORDER

## 43. Thứ tự ticket nên thực hiện ngay từ code hiện tại

### Sprint/Batch 1 — Stabilize foundation

1. ND-007 Code quality baseline.
2. ND-008 CI foundation.
3. ND-014 API conventions.
4. ND-015 Migration strategy.
5. Rà soát schema hiện tại.

### Sprint/Batch 2 — Authentication

1. ND-003 Authentication.
2. ND-016 Password recovery.
3. ND-017 RBAC and ownership.
4. ND-018 Account profile.
5. ND-019 Security controls.

### Sprint/Batch 3 — Wedding core

1. ND-010 Create wedding.
2. ND-011 Event management.
3. ND-025 Couple/family profiles.
4. ND-027 Wedding lifecycle.

### Sprint/Batch 4 — Invitation builder

1. ND-028 Template catalog.
2. ND-012 Content editor.
3. ND-013 Media management.
4. ND-029 Public rendering.
5. ND-033 Draft preview.

### Sprint/Batch 5 — Guest and RSVP

1. ND-020 Guest list.
2. ND-021 Excel import/export.
3. ND-022 Personalized invitation.
4. ND-023 RSVP.
5. ND-024 Dashboard analytics.

### Sprint/Batch 6 — Commercial operation

1. ND-030 Plans/entitlements.
2. ND-037 Order lifecycle.
3. ND-038 Manual payment.
4. ND-032 Admin portal.
5. ND-039 Publish approval.
6. ND-044 Transactional email.

### Sprint/Batch 7 — Production

1. ND-040 Security.
2. ND-041 Test automation.
3. ND-042 Deployment.
4. ND-045 Monitoring.
5. ND-046 Backup/restore.
6. ND-047 Privacy/legal pages.
7. ND-048 Performance test.

### Sau khi pilot thành công

1. Table management.
2. QR check-in.
3. Guest photo collection.
4. Partner portal.
5. Advanced automation và analytics.

---

# PHẦN XV — FINAL COMPLETION CRITERIA

## 44. Khi nào có thể xem sản phẩm “hoàn tất” theo tầm nhìn hiện tại?

Sản phẩm đạt phiên bản hoàn chỉnh khi đáp ứng tất cả điều kiện sau:

### Product

- Customer tự tạo và publish thiệp.
- Hỗ trợ đầy đủ nhà trai/nhà gái và nhiều event.
- Guest import, cá nhân hóa và RSVP ổn định.
- Dashboard, bàn tiệc và check-in hoạt động.
- Album sau cưới hoạt động.
- Partner có thể tự vận hành khách hàng của họ.

### Business

- Có gói giá, thanh toán, order lifecycle và refund process.
- Có doanh thu từ B2C và partner.
- Theo dõi được CAC, AOV, margin và conversion.
- Quy trình support và vận hành có thể chuyển giao cho nhân viên.

### Engineering

- CI/CD tự động.
- Test critical flows.
- Monitoring và alert.
- Backup/restore được kiểm thử.
- Security và data privacy review định kỳ.
- Hệ thống chịu tải mùa cưới theo mục tiêu đã đặt.

### Operations

- Admin quản lý được user, wedding, order, payment và template.
- Có audit log.
- Có incident process.
- Có documentation và runbook.
- Không cần chỉnh DB thủ công cho quy trình bình thường.

### Customer experience

- Thiệp tải nhanh và đẹp trên mobile.
- Customer hiểu cách tạo/publish.
- Guest RSVP dễ dàng.
- Check-in có fallback.
- Customer lấy lại được ảnh và dữ liệu trước khi hết hạn.

---

# PHẦN XVI — MASTER CHECKLIST

## 45. Checklist toàn dự án

### Strategy

- [ ] Xác thực nhu cầu.
- [ ] Chốt phân khúc đầu tiên.
- [ ] Chốt pricing thử nghiệm.
- [ ] Chốt brand/tên miền.

### Product & Design

- [ ] Design system.
- [ ] Landing.
- [ ] Customer dashboard.
- [ ] Admin portal.
- [ ] Invitation templates.
- [ ] Mobile and accessibility review.

### Core Engineering

- [ ] CI.
- [ ] Auth.
- [ ] RBAC/ownership.
- [ ] Wedding/events.
- [ ] Template/editor.
- [ ] Media.
- [ ] Public invitation.
- [ ] Guests.
- [ ] Excel.
- [ ] Personalized links.
- [ ] RSVP.
- [ ] Analytics.

### Commerce

- [ ] Plans.
- [ ] Entitlements.
- [ ] Orders.
- [ ] Manual payment.
- [ ] Payment gateway.
- [ ] Coupons.
- [ ] Refund/suspend.

### Launch Readiness

- [ ] Security review.
- [ ] Critical E2E.
- [ ] Performance test.
- [ ] Production deploy.
- [ ] Monitoring.
- [ ] Backup/restore.
- [ ] Terms and Privacy.
- [ ] Support workflow.

### Growth

- [ ] Pilot.
- [ ] Testimonials.
- [ ] Public launch.
- [ ] Funnel analytics.
- [ ] Referral.
- [ ] Partner onboarding.

### Event & Post-event

- [ ] Table management.
- [ ] QR check-in.
- [ ] Offline fallback.
- [ ] Guest album.
- [ ] Memory page.
- [ ] Archive/download.

### Scale

- [ ] Partner portal.
- [ ] Commission reconciliation.
- [ ] Operational automation.
- [ ] Cost monitoring.
- [ ] Load scaling.
- [ ] Experimentation framework.

---

## 46. Kết luận

Thứ tự quan trọng nhất là:

```text
Xác thực nhu cầu
→ Foundation
→ Authentication
→ Wedding/Event
→ Invitation Builder
→ Guest/RSVP
→ Orders/Admin/Payment
→ Security/Production
→ Pilot
→ Public Launch
→ Table/Check-in
→ Guest Album
→ Partner Platform
→ Scale
```

Không nên phát triển check-in, partner portal hoặc editor nâng cao trước khi luồng cốt lõi **tạo thiệp → thêm khách → gửi link → nhận RSVP → thu tiền → publish** hoạt động ổn định và đã được khách thật sử dụng.

---

**Tài liệu này là master plan chính. Khi bắt đầu từng phase, nên tách các ticket tương ứng thành backlog chi tiết với User Story, Business Rules, Acceptance Criteria, API contract, database change và test cases.**
