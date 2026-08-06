# Ngày Đôi — Sprint 15.8 Completion

## Release

- Version: `v0.15.7`
- Sprint: Invitation Experience Overhaul & Gift Transfer QR
- Database migration: Có, không phá dữ liệu

## Hoàn thành

- 24 template được phân thành 6 layout family khác nhau thật sự.
- Ảnh do chủ thiệp upload được dùng ở hero full-bleed, split, arch, framed hoặc collage.
- 4 kiểu countdown và 4 kiểu trình bày chương trình.
- Tab `Mừng cưới` trong Invitation Studio.
- Tối đa 3 tài khoản: nhà trai, nhà gái hoặc dùng chung.
- QR chuyển khoản, sao chép số tài khoản và fallback thông tin thủ công.
- Danh sách ngân hàng VietQR có cache 24 giờ; lỗi mạng không chặn chỉnh thiệp.
- Chỉ công khai tài khoản khi dữ liệu BIN, số tài khoản và chủ tài khoản hợp lệ.
- Không điền sẵn số tiền, không tự xác nhận và không liên kết với thanh toán gói dịch vụ.
- Autosave, version snapshot và restore đều hỗ trợ dữ liệu mừng cưới.
- Thêm quality audit riêng cho invitation experience.

## Không thay đổi

- Không thay đổi logic đơn hàng/thanh toán hiện tại.
- Không tự đọc giao dịch ngân hàng.
- Không yêu cầu API key VietQR.
- Không sử dụng ảnh cưới hoặc template sao chép từ website khác.
- Guest-first/signup-later chưa thuộc Sprint này; dự kiến Sprint 15.9.
