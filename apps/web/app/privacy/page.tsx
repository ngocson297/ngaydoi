export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <a className="legal-back" href="/">← Ngày Đôi</a>
        <span className="eyebrow">Quyền riêng tư</span>
        <h1>Chính sách bảo mật</h1>
        <p className="legal-lead">Bản dành cho giai đoạn pilot của Ngày Đôi. Chính sách này mô tả dữ liệu cần thiết để vận hành thiệp cưới, RSVP, check-in và album kỷ niệm.</p>
        <section><h2>Dữ liệu được xử lý</h2><p>Ngày Đôi có thể xử lý thông tin tài khoản của chủ thiệp, thông tin khách mời do chủ thiệp cung cấp, phản hồi RSVP, dữ liệu check-in, lời chúc, bình luận và ảnh/video được gửi vào album.</p></section>
        <section><h2>Mục đích sử dụng</h2><p>Dữ liệu được dùng để cung cấp đúng tính năng mà chủ thiệp và khách mời sử dụng, bảo vệ hệ thống, hỗ trợ vận hành và xử lý sự cố. Không nên tải lên nội dung mà bạn không có quyền chia sẻ.</p></section>
        <section><h2>Ảnh, video và nội dung của khách</h2><p>Khi gửi ảnh, video, bình luận hoặc lời chúc, bạn xác nhận mình có quyền chia sẻ nội dung đó trong không gian đám cưới. Chủ thiệp có thể quản lý, ẩn hoặc xóa nội dung trong wedding space của họ.</p></section>
        <section><h2>Lưu trữ và bảo mật</h2><p>Production được thiết kế để lưu media trên object storage và phân phối qua CDN; quyền truy cập, khóa bí mật, HTTPS và kiểm soát vận hành được kiểm tra trước khi release. Thời gian lưu có thể phụ thuộc vào gói dịch vụ và cấu hình của wedding space.</p></section>
        <section><h2>Yêu cầu liên quan đến dữ liệu</h2><p>Trong giai đoạn pilot, chủ thiệp có thể liên hệ đội vận hành để yêu cầu hỗ trợ xem, chỉnh sửa hoặc xóa dữ liệu thuộc wedding space của mình.</p></section>
        <section><h2>Cập nhật</h2><p>Chính sách có thể được cập nhật khi sản phẩm tiến từ pilot sang production chính thức. Phiên bản áp dụng sẽ được công bố trên trang này.</p></section>
        <div className="legal-actions"><a href="/terms">Xem Điều khoản sử dụng</a><a href="/contact">Liên hệ</a></div>
      </div>
    </main>
  );
}
