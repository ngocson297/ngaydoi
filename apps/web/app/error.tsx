"use client";

import { useEffect } from "react";
import { ErrorState } from "../components/ui";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return <main id="main-content" tabIndex={-1} className="friendly-error"><ErrorState title="Trang này vừa gặp sự cố" description="Dữ liệu của bạn vẫn được giữ an toàn. Hãy thử lại; nếu lỗi tiếp tục, gửi mã hỗ trợ cho đội ngũ Ngày Đôi." requestId={error.digest} onRetry={reset} /></main>;
}
