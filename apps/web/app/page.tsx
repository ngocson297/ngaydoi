import { HomeMotion } from "../components/home-motion";

const features = [
  ["✉", "Thiệp cá nhân hóa", "Mỗi khách nhận đúng tên và cách xưng hô qua một liên kết riêng."],
  ["✓", "RSVP thông minh", "Theo dõi người tham dự, số người đi cùng, món chay và lời chúc."],
  ["⌁", "Đúng nghi lễ Việt", "Quản lý riêng nhà trai, nhà gái, lễ gia tiên, lễ cưới và tiệc cưới."],
  ["▦", "Danh sách khách", "Import Excel, chia nhóm khách, theo dõi người mời và số bàn."],
  ["⌖", "Bản đồ và lịch", "Chỉ đường chính xác và thêm lịch cưới vào điện thoại chỉ với một chạm."],
  ["◫", "Dashboard rõ ràng", "Biết ai đã xem, ai phản hồi và tổng số người dự kiến theo thời gian thực."],
];


const invitationTemplates = [
  { key: "lotus-vietnamese", name: "Sen Việt thanh nhã", style: "Á Đông", layout: "arch", colors: ["#315B4A", "#C8A35F", "#F8F1E4"], symbol: "❀" },
  { key: "imperial-red", name: "Hỷ sắc cung đình", style: "Truyền thống", layout: "portrait", colors: ["#9E1F2F", "#D5AE58", "#FFF4E7"], symbol: "囍" },
  { key: "garden-sage", name: "Vườn xanh dịu dàng", style: "Thiên nhiên", layout: "story", colors: ["#566B55", "#A58354", "#F4F5EF"], symbol: "❦" },
  { key: "modern-noir", name: "Noir hiện đại", style: "Hiện đại", layout: "editorial", colors: ["#161616", "#C5A46D", "#EEECE8"], symbol: "ND" },
  { key: "art-deco-emerald", name: "Emerald Art Deco", style: "Art Deco", layout: "split", colors: ["#0F5448", "#D2B46C", "#F1F5F0"], symbol: "◇" },
  { key: "ocean-minimal", name: "Biển xanh tối giản", style: "Tối giản", layout: "minimal", colors: ["#315E6C", "#C59A65", "#F1F6F7"], symbol: "≈" },
  { key: "celestial-night", name: "Thiên hà đêm cưới", style: "Fantasy", layout: "portrait", colors: ["#312A59", "#D6B6EA", "#F2EFFA"], symbol: "✦" },
  { key: "heritage-indigo", name: "Chàm Việt di sản", style: "Di sản", layout: "arch", colors: ["#294A66", "#C9A45C", "#F2F0E8"], symbol: "ND" },
  { key: "polaroid-memories", name: "Polaroid ngày mình", style: "Photo story", layout: "story", colors: ["#7B5B4B", "#D59C78", "#F8EEE2"], symbol: "FILM" },
  { key: "saigon-sunrise", name: "Sài Gòn sớm mai", style: "Urban editorial", layout: "editorial", colors: ["#713E35", "#E1A366", "#FFF6EC"], symbol: "SG" },
  { key: "cinematic-veil", name: "Voan cưới điện ảnh", style: "Cinematic", layout: "portrait", colors: ["#40363B", "#D0B08C", "#F5F0ED"], symbol: "CINE" },
  { key: "dragon-phoenix", name: "Long phụng giao duyên", style: "Lễ Việt", layout: "arch", colors: ["#8B1728", "#D8B15F", "#FFF2DF"], symbol: "囍" },
];

const plans = [
  { name: "Cơ bản", price: "199.000đ", items: ["Thiệp responsive", "Album và nhạc nền", "Bản đồ, countdown"], featured: false },
  { name: "Tiêu chuẩn", price: "399.000đ", items: ["Mọi tính năng Cơ bản", "RSVP và lời chúc", "Cá nhân hóa khách", "QR mừng cưới"], featured: true },
  { name: "Chuyên nghiệp", price: "699.000đ", items: ["Mọi tính năng Tiêu chuẩn", "Nhà trai và nhà gái", "Import/export Excel", "Quản lý bàn"], featured: false },
];

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className="home-page">
      <HomeMotion />
      <nav className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#">Ngày <span>Đôi</span></a>
          <div className="nav-links">
            <a href="#features">Tính năng</a>
            <a href="/templates">Kho mẫu thiệp</a>
            <a href="#pricing">Bảng giá</a>
            <a href="/thiep/minh-anh">Xem thiệp mẫu</a>
            <a href="/contact">Liên hệ</a>
            <a href="/login">Đăng nhập</a>
            <a className="btn btn-primary" href="/create">Bắt đầu tạo thiệp</a>
          </div>
        </div>
      </nav>

      <section className="hero home-hero">
        <div className="home-orb home-orb-one" aria-hidden="true" />
        <div className="home-orb home-orb-two" aria-hidden="true" />
        <div className="home-petals" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
        <div className="container hero-grid">
          <div data-reveal className="reveal-up">
            <div className="eyebrow hero-eyebrow"><span>✦</span> Thiệp cưới dành riêng cho người Việt</div>
            <h1>Tạo thiệp cưới đẹp<br />chỉ trong 10 phút.</h1>
            <p className="hero-copy">Chọn mẫu, thêm ảnh và gửi lời mời ngay trên điện thoại. Khách RSVP, xem chương trình và quét QR mừng cưới trong cùng một thiệp.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/create">Tạo thiệp miễn phí ngay</a>
              <a className="btn btn-secondary" href="/thiep/minh-anh">Xem thiệp mẫu →</a>
            </div>
            <div className="hero-proof">
              <div><strong>10 phút</strong>Tạo bản nháp</div>
              <div><strong>Mobile-first</strong>Đẹp trên điện thoại</div>
              <div><strong>36 mẫu</strong>12 thiết kế mới</div>
            </div>
          </div>

          <div className="phone-wrap reveal-scale" data-reveal>
            <div className="phone-glow" />
            <div className="floating-card floating-one"><strong>128 khách đã xác nhận</strong>+12 phản hồi hôm nay</div>
            <div className="phone">
              <div className="phone-flower">❦</div>
              <div className="phone-kicker">Save our date</div>
              <h3>Minh <em>&</em> Anh</h3>
              <div className="phone-date">18 · 10 · 2026</div>
              <div className="phone-card">
                <p>Trân trọng kính mời<br /><strong>Anh Nguyễn Hoàng và gia đình</strong><br />đến chung vui cùng chúng mình.</p>
                <button className="btn btn-primary phone-rsvp">Xác nhận tham dự</button>
              </div>
            </div>
            <div className="floating-card floating-two"><strong>Đã sẵn sàng chia sẻ</strong>ngaydoi.vn/thiep/minh-anh</div>
          </div>
        </div>
      </section>

      <section className="home-trust-strip" aria-label="Quy trình Ngày Đôi">
        <div className="container trust-track" data-reveal>
          <span><b>01</b>Tạo không gian cưới</span><i>→</i><span><b>02</b>Gửi thiệp cá nhân</span><i>→</i><span><b>03</b>Nhận RSVP</span><i>→</i><span><b>04</b>Phân bàn & check-in</span><i>→</i><span><b>05</b>Lưu trọn kỷ niệm</span>
        </div>
      </section>

      <section className="home-start-section" aria-labelledby="home-start-title">
        <div className="container">
          <div className="home-start-heading reveal-up" data-reveal><span className="eyebrow">Bắt đầu cực dễ</span><h2 id="home-start-title">Ba bước để có một thiệp sẵn sàng gửi.</h2><p>Không cần đăng ký ngay. Tạo thử trước, xem đúng giao diện thật rồi mới lưu vào tài khoản.</p></div>
          <div className="home-start-grid">
            <article data-reveal><b>01</b><span>Chọn phong cách</span><p>36 mẫu có ảnh, editorial, truyền thống Việt, garden và tối giản.</p></article>
            <article data-reveal><b>02</b><span>Thêm nội dung</span><p>Điền tên, ngày cưới, ảnh và chương trình bằng form dễ hiểu.</p></article>
            <article data-reveal><b>03</b><span>Gửi cho khách</span><p>Xuất bản một link duy nhất để nhận RSVP, lời chúc và QR mừng cưới.</p></article>
          </div>
          <div className="home-start-cta"><a className="btn btn-primary" href="/create">Bắt đầu tạo thiệp miễn phí</a><small>Không cần thẻ · Chưa cần đăng ký</small></div>
        </div>
      </section>

      <section id="features" className="section section-white">
        <div className="container">
          <div className="section-head reveal-up" data-reveal>
            <div className="eyebrow">Không chỉ là một tấm thiệp</div>
            <h2>Quản lý lời mời gọn gàng, ngày cưới nhẹ nhàng.</h2>
            <p className="section-lead">Tập trung vào những việc thực sự làm cặp đôi mất thời gian: gửi đúng người, nhận phản hồi và ước lượng chính xác số khách.</p>
          </div>
          <div className="feature-grid">
            {features.map(([icon, title, text]) => (
              <article className="feature-card reveal-up" data-reveal key={title}>
                <div className="feature-icon">{icon}</div>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="templates" className="section template-showcase-section">
        <div className="container">
          <div className="section-head template-showcase-head reveal-up" data-reveal>
            <div>
              <div className="eyebrow">Invitation Studio</div>
              <h2>36 thiết kế, mỗi mẫu là một câu chuyện khác nhau.</h2>
              <p className="section-lead">Từ nét Việt truyền thống đến Art Deco, garden wedding, tiệc biển và editorial hiện đại. Chọn mẫu làm điểm bắt đầu, rồi thay màu, kiểu chữ, nội dung, ảnh và bố cục ngay trong Studio.</p>
            </div>
            <a className="btn btn-secondary home-template-cta" href="/templates">Khám phá 36 mẫu →</a>
          </div>
          <div className="landing-template-grid">
            {invitationTemplates.map((template, index) => (
              <article data-reveal className={`landing-template-card reveal-up template-card-${index + 1}`} key={template.key}>
                <div className={`landing-template-preview layout-${template.layout}`} style={{ background: template.colors[2], color: template.colors[0] }}>
                  <div className="landing-template-photo" aria-hidden="true"><span>♥</span><i /><i /></div>
                  {template.layout === "story" && <div className="landing-template-collage" aria-hidden="true"><i /><i /><i /></div>}
                  <div className="landing-template-frame" style={{ borderColor: template.colors[1] }}>
                    <b className="landing-template-symbol">{template.symbol}</b>
                    <span>Save the date</span>
                    <strong>Minh <i>&</i> Anh</strong>
                    <small>18 · 10 · 2026</small>
                  </div>
                  <em className="landing-layout-name">{template.layout === "split" ? "Ảnh chia đôi" : template.layout === "editorial" ? "Editorial" : template.layout === "arch" ? "Khung vòm" : template.layout === "story" ? "Photo story" : template.layout === "minimal" ? "Tối giản" : "Ảnh chân dung"}</em>
                </div>
                <div className="landing-template-info">
                  <div><small>{template.style}</small><h3>{template.name}</h3></div>
                  <div className="landing-palette" aria-label={`Bảng màu ${template.name}`}>{template.colors.map((color) => <i key={color} style={{ background: color }} />)}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="home-template-marquee" aria-hidden="true"><div>{[...invitationTemplates, ...invitationTemplates].map((template, index) => <span key={`${template.key}-${index}`}>{template.symbol} {template.name}</span>)}</div></div>
          <div className="template-showcase-note reveal-up" data-reveal><strong>Không cần biết thiết kế.</strong> 36 mẫu được chia theo gói, có bộ lọc, yêu thích và xem trước tức thì trên điện thoại hoặc desktop.</div>
        </div>
      </section>

      <section className="home-difference-section section" aria-labelledby="difference-title">
        <div className="container home-difference-grid">
          <div className="home-difference-copy reveal-up" data-reveal><span className="eyebrow">Điểm khác biệt của Ngày Đôi</span><h2 id="difference-title">Không chỉ đẹp khi mở thiệp — còn nhẹ việc cho cả hai gia đình.</h2><p>Ngày Đôi kết nối trải nghiệm của khách mời với toàn bộ công việc phía sau, thay vì chỉ tạo một trang giới thiệu tĩnh.</p><a className="btn btn-primary" href="/create">Trải nghiệm ngay</a></div>
          <div className="home-difference-list">
            {[
              ["Tạo trước, đăng ký sau", "Khách hàng thấy được giá trị thật trước khi tạo tài khoản."],
              ["Thiệp cá nhân hóa từng khách", "Mỗi người nhận được lời chào riêng và đúng giới hạn người đi cùng."],
              ["RSVP đi thẳng vào danh sách khách", "Không tổng hợp thủ công từ tin nhắn, biểu mẫu và bảng tính rời."],
              ["QR mừng cưới linh hoạt", "Tải QR từ ngân hàng hoặc tạo VietQR; hỗ trợ nhà trai, nhà gái và dùng chung."],
              ["Từ phân bàn đến check-in", "Dữ liệu khách tiếp tục được dùng trong ngày cưới thay vì kết thúc ở tấm thiệp."],
              ["Thiết kế Việt, mobile-first", "Nội dung nghi lễ, gia đình và trải nghiệm điện thoại được ưu tiên ngay từ đầu."],
            ].map(([title, description], index) => <article key={title} data-reveal><b>{String(index + 1).padStart(2, "0")}</b><div><h3>{title}</h3><p>{description}</p></div></article>)}
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="container">
          <div className="section-head reveal-up" data-reveal>
            <div className="eyebrow">Bảng giá dự kiến</div>
            <h2>Chọn đúng nhu cầu, không trả cho tính năng thừa.</h2>
          </div>
          <div className="price-grid">
            {plans.map((plan) => (
              <article data-reveal className={`price-card reveal-up ${plan.featured ? "featured" : ""}`} key={plan.name}>
                <strong>{plan.name}</strong>
                <div className="price">{plan.price}<small> / đám cưới</small></div>
                <div className="check-list">{plan.items.map((item) => <div key={item}>{item}</div>)}</div>
                <a className={`btn ${plan.featured ? "btn-primary" : "btn-secondary"}`} href="/create">Bắt đầu với gói này</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-final-cta">
        <div className="container home-final-card reveal-scale" data-reveal>
          <div><span className="eyebrow">Bắt đầu thật nhẹ nhàng</span><h2>Ngày trọng đại xứng đáng được chuẩn bị bằng một trải nghiệm đẹp.</h2><p>Tạo bản nháp miễn phí, mời người thân cùng chỉnh sửa và hoàn thiện từng bước theo timeline thông minh.</p></div>
          <div className="home-final-actions"><a className="btn btn-primary" href="/create">Tạo thiệp ngay</a><a className="btn btn-secondary" href="/thiep/minh-anh">Xem trải nghiệm mẫu</a></div>
        </div>
      </section>

      <a className="home-mobile-create" href="/create"><span>Tạo thiệp miễn phí</span><small>Chỉ mất khoảng 10 phút →</small></a>

      <footer className="footer section-white">
        <div className="container footer-inner">
          <div className="brand">Ngày <span>Đôi</span></div>
          <nav className="home-footer-links" aria-label="Liên kết cuối trang"><a href="/templates">Kho mẫu</a><a href="/privacy">Bảo mật</a><a href="/terms">Điều khoản</a><a href="/contact">Liên hệ</a><a href="/login">Đăng nhập</a></nav>
          <div>Working brand — cần kiểm tra tên miền và nhãn hiệu trước khi ra mắt.</div>
        </div>
      </footer>
    </main>
  );
}
