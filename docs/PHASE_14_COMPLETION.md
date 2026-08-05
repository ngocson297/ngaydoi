# Ngày Đôi — Phase 14 Completion

**Version:** v0.14.0  
**Phase:** Template Library, Theme Marketplace & Final Product Polish  
**Upgrade source:** v0.13.1

## Kết quả chính

Phase 14 giải quyết trực tiếp giới hạn chỉ có 5 template ở các phiên bản trước. Thư viện hiện có **24 template**, được tổ chức theo phong cách và quyền sử dụng theo gói.

### Phân bổ template theo gói

| Gói | Số mẫu |
|---|---:|
| Khởi đầu | 3 |
| Cơ bản | 8 |
| Tiêu chuẩn | 16 |
| Cao cấp | 24 |

Wedding demo `minh-anh` dùng gói Tiêu chuẩn nên có 16 lựa chọn sau khi chạy seed Phase 14.

## Nhóm phong cách

- Phong cách Việt và nghi lễ truyền thống.
- Cổ điển.
- Lãng mạn.
- Botanical và ngoài trời.
- Tối giản.
- Hiện đại và editorial.
- Sang trọng và Art Deco.
- Destination và tiệc biển.

## Mẫu mới nổi bật

- Sen Việt thanh nhã.
- Hỷ sắc cung đình.
- Ngà và ánh kim.
- Giấc mơ lavender.
- Hoàng hôn đất nung.
- Ngọc trai tối giản.
- Dạ lam ánh sao.
- Nhiệt đới xanh mát.
- Anh đào ban mai.
- Mộc mạc kraft.
- Emerald Art Deco.
- Champagne rạng rỡ.
- Thiên hà đêm cưới.
- Cát biển an nhiên.
- Trà lễ sum vầy.
- Editorial đơn sắc.
- Đào nở dịu êm.
- Chàm Việt di sản.
- Botanical trắng xanh.

Năm template nền tảng cũ vẫn được giữ để không làm hỏng wedding hiện tại.

## Template Catalog

Trang mới:

```text
/templates
```

Có:

- Tìm theo tên, màu, chủ đề hoặc tag.
- Lọc theo nhóm phong cách.
- Lọc theo gói.
- Chỉ xem mẫu mới.
- Danh sách yêu thích lưu trong trình duyệt.
- Badge mẫu mới, phổ biến và phong cách nổi bật.
- CTA tạo thiệp và xem bảng giá.
- Responsive trên mobile, tablet và desktop.

## Invitation Studio

Tab Mẫu thiệp được nâng cấp:

- Hiển thị số mẫu đã mở trên tổng số mẫu.
- Tìm kiếm template.
- Lọc theo phong cách.
- Lọc mẫu đã mở, đang khóa và yêu thích.
- Link mở thư viện toàn màn hình.
- Thẻ template lớn hơn, dễ đọc hơn.
- Tag mô tả chủ đề.
- Badge mẫu mới.
- Preview motif và animation nhẹ.

## Entitlement hardening

Trước Phase 14, UI có khóa template nhưng API chưa kiểm tra đầy đủ khi đổi mẫu. Phase 14 thêm guard phía API:

- Template mới chỉ được áp dụng khi nằm trong gói hiện tại.
- Gọi API trực tiếp với template bị khóa trả về lỗi 400.
- Wedding đang dùng một template cũ vẫn có thể sửa nội dung sau khi gói thay đổi; guard chỉ chạy khi đổi sang template khác.

## Home animation và showcase

- Showcase tăng từ 5 lên 8 mẫu nổi bật.
- Nội dung nêu rõ thư viện có 24 template.
- Marquee tự động chạy tên các mẫu.
- Parallax nhẹ theo vị trí con trỏ ở Hero.
- Card template có hover motion.
- Catalog Hero có stack card chuyển động.
- Toàn bộ animation tôn trọng `prefers-reduced-motion`.

## UI/UX polish

- Sidebar thêm Kho mẫu thiệp.
- Mobile drawer thêm Kho mẫu thiệp.
- Input tìm kiếm và select cao, dễ đọc.
- Filter pill cuộn ngang trên màn hình nhỏ.
- Template card không tràn khi tên/tag dài.
- Button favorite có label hỗ trợ screen reader.
- Empty state và lỗi tải API thân thiện.
- Catalog grid chuyển 4 → 3 → 2 → 1 cột.

## Database

Phase 14 **không thay đổi Prisma schema và không có migration mới**.

`db:seed` vẫn cần chạy để cập nhật `Plan.templateKeys` từ 1/2/4/5 mẫu lên 3/8/16/24 mẫu. Seed sử dụng upsert và giữ dữ liệu người dùng hiện tại.

## Regression

Thêm:

```bash
npm run template:smoke
```

Smoke test kiểm tra:

- API trả đúng 24 template.
- Template key không trùng.
- Có nhóm phong cách Việt.
- Mỗi template có tag tìm kiếm.
- Gói Tiêu chuẩn mở đúng 16 mẫu.
- Template đã mở áp dụng được.
- Template bị khóa bị API từ chối.
- Template ban đầu được khôi phục sau test.
