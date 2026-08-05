"use client";

import { useEffect, useRef, useState } from "react";
import { apiRequest, ApiError } from "../../lib/api";

export default function VerifyEmailPage() {
  const started = useRef(false);
  const [state, setState] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("Đang xác minh email...");

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const token = new URLSearchParams(window.location.search).get("token");
    if (!token) { setState("error"); setMessage("Liên kết xác minh thiếu token."); return; }
    void apiRequest<{ message: string }>("/auth/verify-email", { method: "POST", body: JSON.stringify({ token }) })
      .then((result) => { setState("success"); setMessage(result.message); })
      .catch((cause: unknown) => { setState("error"); setMessage(cause instanceof ApiError ? cause.message : "Không thể xác minh email"); });
  }, []);

  return <main className="auth-shell"><section className="auth-card auth-status"><a className="brand auth-brand" href="/">Ngày <span>Đôi</span></a><div className={`status-icon ${state}`}>{state === "loading" ? "…" : state === "success" ? "✓" : "!"}</div><h2>{state === "success" ? "Xác minh thành công" : state === "error" ? "Không thể xác minh" : "Đang xử lý"}</h2><p>{message}</p><a className="btn btn-primary" href="/login">Đi đến đăng nhập</a></section></main>;
}
