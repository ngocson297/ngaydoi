"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return <main className="friendly-error"><div className="friendly-error-card"><span>Ngày <b>Đôi</b></span><div className="friendly-error-icon">!</div><h1>Trang này vừa gặp sự cố</h1><p>Dữ liệu của bạn vẫn được giữ an toàn. Hãy thử tải lại; nếu lỗi tiếp tục, gửi mã bên dưới cho đội ngũ hỗ trợ.</p>{error.digest ? <code>Mã lỗi: {error.digest}</code> : null}<div><button className="btn btn-primary" onClick={reset}>Thử lại</button><a className="btn btn-secondary" href="/dashboard">Về Dashboard</a></div></div></main>;
}
