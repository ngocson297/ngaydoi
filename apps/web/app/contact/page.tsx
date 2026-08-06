import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ — Ngày Đôi",
  description: "Liên hệ đội ngũ Ngày Đôi qua Facebook, Zalo hoặc email.",
};

const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_CONTACT_URL?.trim() || "https://www.facebook.com/";
const zaloUrl = process.env.NEXT_PUBLIC_ZALO_CONTACT_URL?.trim() || "https://zalo.me/";
const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() || "support@ngaydoi.vn";
const showConfigurationNote = process.env.NODE_ENV !== "production" && (!process.env.NEXT_PUBLIC_FACEBOOK_CONTACT_URL || !process.env.NEXT_PUBLIC_ZALO_CONTACT_URL);

const channels = [
  {
    name: "Facebook Messenger",
    eyebrow: "Phản hồi trực tuyến",
    description: "Phù hợp khi bạn cần gửi ảnh chụp màn hình, trao đổi về giao diện hoặc theo dõi một yêu cầu hỗ trợ.",
    href: facebookUrl,
    icon: "f",
    action: "Mở Facebook",
    note: "Liên kết mở trong tab mới.",
  },
  {
    name: "Zalo",
    eyebrow: "Trao đổi nhanh",
    description: "Phù hợp với câu hỏi ngắn, hỗ trợ sử dụng và trao đổi trực tiếp trong quá trình chuẩn bị đám cưới.",
    href: zaloUrl,
    icon: "Z",
    action: "Mở Zalo",
    note: "Có thể mở ứng dụng Zalo trên điện thoại.",
  },
];

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="contact-page">
      <nav className="nav contact-nav" aria-label="Điều hướng trang liên hệ">
        <div className="container nav-inner">
          <a className="brand" href="/">Ngày <span>Đôi</span></a>
          <div className="nav-links">
            <a href="/templates">Kho mẫu thiệp</a>
            <a href="/#pricing">Bảng giá</a>
            <a href="/login">Đăng nhập</a>
            <a className="btn btn-primary" href="/register">Bắt đầu tạo thiệp</a>
          </div>
        </div>
      </nav>

      <section className="contact-hero">
        <div className="contact-orb contact-orb-one" aria-hidden="true" />
        <div className="contact-orb contact-orb-two" aria-hidden="true" />
        <div className="container contact-hero-grid">
          <div>
            <span className="eyebrow">LIÊN HỆ NGÀY ĐÔI</span>
            <h1>Chúng tôi ở đây để giúp hành trình chuẩn bị cưới nhẹ nhàng hơn.</h1>
            <p>Chọn kênh phù hợp với bạn. Khi cần hỗ trợ kỹ thuật, hãy gửi kèm ảnh chụp màn hình, đường dẫn trang và mã hỗ trợ nếu hệ thống có hiển thị.</p>
          </div>
          <aside className="contact-service-note" aria-label="Cam kết hỗ trợ">
            <span aria-hidden="true">♡</span>
            <div><strong>Hỗ trợ rõ ràng, tôn trọng và riêng tư</strong><p>Ngày Đôi chỉ yêu cầu thông tin cần thiết để xử lý vấn đề. Không gửi mật khẩu hoặc mã xác thực qua tin nhắn.</p></div>
          </aside>
        </div>
      </section>

      <section className="contact-channel-section">
        <div className="container">
          <div className="contact-channel-grid">
            {channels.map((channel) => (
              <article className="contact-channel-card" key={channel.name}>
                <div className="contact-channel-icon" aria-hidden="true">{channel.icon}</div>
                <span className="eyebrow">{channel.eyebrow}</span>
                <h2>{channel.name}</h2>
                <p>{channel.description}</p>
                <a className="btn btn-primary contact-channel-action" href={channel.href} target="_blank" rel="noreferrer noopener">
                  {channel.action}<span aria-hidden="true">↗</span>
                </a>
                <small>{channel.note}</small>
              </article>
            ))}
          </div>

          <section className="contact-email-card">
            <div><span className="eyebrow">EMAIL HỖ TRỢ</span><h2>Cần gửi thông tin chi tiết?</h2><p>Email phù hợp với yêu cầu cần mô tả dài, đính kèm tài liệu hoặc cần lưu lại nội dung trao đổi.</p></div>
            <a className="btn btn-secondary" href={`mailto:${supportEmail}`}>{supportEmail}</a>
          </section>

          {showConfigurationNote ? <div className="contact-config-note">
            <strong>Chế độ phát triển:</strong> cập nhật <code>NEXT_PUBLIC_FACEBOOK_CONTACT_URL</code>, <code>NEXT_PUBLIC_ZALO_CONTACT_URL</code> và <code>NEXT_PUBLIC_SUPPORT_EMAIL</code> bằng thông tin chính thức của Ngày Đôi trước khi phát hành.
          </div> : null}
        </div>
      </section>

      <footer className="footer section-white">
        <div className="container footer-inner"><div className="brand">Ngày <span>Đôi</span></div><a href="/">← Về trang chủ</a></div>
      </footer>
    </main>
  );
}
