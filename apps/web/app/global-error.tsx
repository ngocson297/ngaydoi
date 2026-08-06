"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="vi">
      <body style={{ margin: 0, background: "#f7f3ef", color: "#2d2521", fontFamily: "Arial, sans-serif" }}>
        <main
          id="main-content"
          tabIndex={-1}
          style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}
        >
          <section
            role="alert"
            aria-labelledby="global-error-title"
            style={{ width: "min(560px, 100%)", padding: 32, border: "1px solid #dfd4cc", borderRadius: 24, background: "white", boxShadow: "0 20px 60px rgba(57, 42, 34, .10)" }}
          >
            <p style={{ margin: "0 0 10px", color: "#7c2d3b", fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase" }}>Ngày Đôi</p>
            <h1 id="global-error-title" style={{ margin: "0 0 12px", fontFamily: "Georgia, serif", fontSize: "clamp(30px, 6vw, 44px)", lineHeight: 1.08 }}>Ứng dụng vừa gặp sự cố</h1>
            <p style={{ margin: 0, color: "#6f655f", fontSize: 16, lineHeight: 1.65 }}>Dữ liệu của bạn vẫn an toàn. Hãy tải lại trải nghiệm; nếu lỗi tiếp tục, gửi mã hỗ trợ bên dưới cho đội ngũ Ngày Đôi.</p>
            {error.digest ? (
              <p style={{ margin: "18px 0 0", padding: "12px 14px", borderRadius: 12, background: "#f5f1ed", color: "#5f5650", fontFamily: "ui-monospace, monospace", fontSize: 13, overflowWrap: "anywhere" }}>
                Mã hỗ trợ: <strong>{error.digest}</strong>
              </p>
            ) : null}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22 }}>
              <button
                type="button"
                onClick={reset}
                style={{ minHeight: 46, padding: "11px 18px", border: 0, borderRadius: 999, background: "#7c2d3b", color: "white", font: "700 15px Arial, sans-serif", cursor: "pointer" }}
              >
                Thử tải lại
              </button>
              <a
                href="/"
                style={{ minHeight: 46, display: "inline-flex", alignItems: "center", padding: "11px 18px", border: "1px solid #d8ccc4", borderRadius: 999, color: "#4f4540", fontWeight: 700, textDecoration: "none", boxSizing: "border-box" }}
              >
                Về trang chủ
              </a>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
