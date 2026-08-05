# NGÀY ĐÔI — BÁO CÁO HOÀN THÀNH RELEASE PHASE 4

**Phiên bản:** v0.4.0  
**Release phase:** Phase 4 — Invitation Builder  
**Master Plan mapping:** Master Phase 5 — Invitation Builder  
**Ngày bàn giao:** 04/08/2026  
**Migration:** tăng dần từ v0.3.0, không xóa dữ liệu Phase 3

## 1. Mục tiêu phase

Biến dữ liệu Wedding Core thành một thiệp cưới có thể thiết kế, xem trước, lưu phiên bản và xuất bản. Người dùng không cần biết lập trình hoặc thiết kế vẫn có thể hoàn chỉnh thiệp bằng các lựa chọn trực quan.

## 2. Phạm vi đã hoàn thành

### 2.1 Template catalog

- 5 template khởi đầu:
  - Rượu vang cổ điển.
  - Vườn xanh dịu dàng.
  - Hồng phấn lãng mạn.
  - Noir hiện đại.
  - Biển xanh tối giản.
- Mỗi template có bảng màu, heading font, body font và định vị phong cách riêng.
- Landing page có khu vực khám phá mẫu trước khi đăng ký.
- Chọn template một chạm trong Invitation Studio.

### 2.2 Invitation Studio

- Route quản trị riêng cho từng wedding: `/weddings/:id/invitation`.
- Nhóm chức năng rõ ràng:
  - Mẫu thiệp.
  - Nội dung.
  - Phong cách.
  - Hình ảnh.
  - Cài đặt section.
  - Lịch sử phiên bản.
- Live preview đồng bộ trong cùng màn hình.
- Chuyển khung xem trước Mobile/Desktop.
- Autosave sau khi ngừng chỉnh trong thời gian ngắn.
- Trạng thái lưu: chưa lưu, đang lưu, đã lưu, lỗi.
- Người có quyền `VIEW` chỉ được xem; `EDIT` và `OWNER` được chỉnh.

### 2.3 Nội dung và trình bày

- Chỉnh:
  - Eyebrow của hero.
  - Lời mời.
  - Tiêu đề câu chuyện.
  - Tiêu đề album.
  - Tiêu đề countdown.
  - Tiêu đề chương trình.
  - Lời cảm ơn cuối thiệp.
- Chọn màu chính, màu nhấn, nền, surface và màu chữ.
- Chọn heading font và body font trong danh sách an toàn.
- Bật/tắt từng section.
- Đổi thứ tự section.
- Bật/tắt nhạc và nhập URL nhạc; nhạc không tự phát khi chưa có thao tác người dùng.

### 2.4 Media management

- Upload JPEG, PNG và WebP.
- Giới hạn 6 MB trên API.
- Frontend tự thu nhỏ ảnh tối đa 1.800 px và chuyển WebP trước khi tải lên khi trình duyệt hỗ trợ.
- Upload nhiều ảnh theo lượt.
- Ảnh đầu tiên tự làm ảnh bìa.
- Đặt ảnh bất kỳ làm ảnh bìa.
- Sắp xếp thứ tự album.
- Xóa ảnh và tự chọn ảnh bìa tiếp theo.
- Alt text cho khả năng truy cập.
- File local được lưu ngoài folder source tại `ngaydoi-local-data/uploads`, giúp đổi phiên bản source mà không mất ảnh.

### 2.5 Preview và public invitation

- Link preview bảo mật có token ngẫu nhiên.
- Preview hết hạn sau 24 giờ.
- Link preview cũ của cùng người tạo được revoke khi tạo link mới.
- Preview hiển thị banner và không được index.
- Public invitation chỉ mở khi wedding đang `PUBLISHED` và chưa hết hạn.
- Public invitation responsive gồm:
  - Hero.
  - Thông tin hai gia đình.
  - Câu chuyện.
  - Album ảnh.
  - Countdown.
  - Danh sách sự kiện.
  - Google Maps.
  - Add to Calendar bằng file ICS.
  - Chia sẻ bằng Web Share hoặc sao chép link dự phòng.
  - Điều khiển nhạc theo thao tác người dùng.

### 2.6 Version history

- Tạo snapshot thủ công.
- Version number tăng tuần tự theo wedding.
- Lưu thiết kế và thứ tự media.
- Hiển thị 12 phiên bản gần nhất.
- Khôi phục thiết kế và thứ tự ảnh từ phiên bản cũ.
- Ghi audit log cho lưu phiên bản và khôi phục.

### 2.7 UI/UX polish

- Mobile app bar cho khu vực đăng nhập.
- Invitation Studio có responsive layout:
  - Desktop: thanh công cụ, navigation, control panel, preview.
  - Tablet: giữ editor và hỗ trợ cuộn ngang an toàn.
  - Mobile: navigation dạng tab ngang, control và preview xếp dọc.
- Nút disabled có trạng thái rõ ràng.
- Loading, empty state và error state thân thiện hơn.
- CTA “Thiết kế thiệp” được đưa vào wedding workspace.
- Landing page có template catalog và mô tả autosave/live preview.
- Sửa các lỗi UI logic:
  - Cập nhật ảnh bìa không tạo state trùng.
  - Preview mở bằng URL tuyệt đối.
  - Copy link có fallback cho trình duyệt không hỗ trợ Clipboard API.
  - FormData không bị gán nhầm `Content-Type: application/json`.
  - Preview mobile không vượt viewport nhỏ.

## 3. Database thay đổi

### Bảng mới

- `InvitationDesign`.
- `InvitationVersion`.
- `InvitationPreviewToken`.

### Bảng được mở rộng

`MediaAsset` bổ sung:

- `mimeType`.
- `sizeBytes`.
- `width`.
- `height`.
- `isCover`.
- `updatedAt`.

### Data migration

- Tất cả wedding từ Phase 3 được tự tạo một `InvitationDesign` mặc định.
- Không xóa User, Wedding, Event, Collaborator hoặc dữ liệu Authentication.

## 4. API đã thêm

```text
GET    /api/templates
GET    /api/invitations/preview/:token
GET    /api/media/public/:mediaId
GET    /api/weddings/:id/invitation
PATCH  /api/weddings/:id/invitation
POST   /api/weddings/:id/invitation/preview-token
DELETE /api/weddings/:id/invitation/preview-token
POST   /api/weddings/:id/invitation/versions
POST   /api/weddings/:id/invitation/versions/:versionId/restore
POST   /api/weddings/:id/media
PATCH  /api/weddings/:id/media/:mediaId
POST   /api/weddings/:id/media/reorder
DELETE /api/weddings/:id/media/:mediaId
```

## 5. Security và data ownership

- Editor, media, version và preview-token đều kiểm tra ownership/collaborator.
- Cộng tác viên `VIEW` không thể thay đổi thiết kế.
- Media ID phải thuộc đúng wedding.
- Chỉ chấp nhận MIME JPEG, PNG, WebP.
- Tên file lưu trữ dùng UUID thay vì tên file người dùng.
- Preview token có expiry và revoke.
- Public API không trả invitation đang Draft/Suspended/Archived/Expired.
- Upload directory không nằm trong Git repository.

## 6. Automated verification

Có thêm lệnh:

```bash
npm run invitation:smoke
```

Smoke test kiểm tra:

1. Đăng nhập owner demo.
2. Nhận tối thiểu 5 template.
3. Mở Invitation Studio.
4. Autosave và revision tăng.
5. Upload một ảnh Web-compatible.
6. Đọc file media qua public endpoint.
7. Tạo và truy cập secure preview.
8. Tạo version.
9. Xóa media test.

## 7. Exit criteria

| Tiêu chí | Trạng thái |
|---|---|
| Có ít nhất 5 template | Hoàn thành |
| User có thể chỉnh nội dung và style | Hoàn thành |
| Autosave có trạng thái rõ | Hoàn thành |
| Upload, cover, reorder, delete ảnh | Hoàn thành |
| Preview mobile và desktop | Hoàn thành |
| Secure preview | Hoàn thành |
| Public invitation lấy dữ liệu thật | Hoàn thành |
| Version và restore | Hoàn thành |
| Ownership/collaborator permissions | Hoàn thành |
| Migration tăng dần | Hoàn thành |
| Smoke test được đóng gói | Hoàn thành |

## 8. Không thuộc Phase 4

Các nội dung sau được giữ cho phase kế tiếp:

- Guest import/export Excel.
- Link cá nhân hóa theo từng khách.
- RSVP builder nâng cao.
- Nhóm khách và người mời.
- Table planning.
- Payment/plan enforcement thật.
- Cloud object storage/CDN production.

## 9. Phase tiếp theo

**Release Phase 5 — Guest Management & RSVP Core**:

- CRUD khách mời.
- Nhóm nhà trai/nhà gái/bạn bè/đồng nghiệp.
- Import và export Excel.
- Invitation token riêng từng khách.
- Tên khách cá nhân hóa trên thiệp.
- RSVP thực tế và dashboard metrics.
