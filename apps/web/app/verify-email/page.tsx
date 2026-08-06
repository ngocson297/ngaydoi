"use client";

import { useEffect, useRef, useState } from "react";
import { apiRequest, ApiError } from "../../lib/api";
import { Alert, ButtonLink, Skeleton } from "../../components/ui";

export default function VerifyEmailPage() {
  const started = useRef(false);
  const [state, setState] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("Đang xác minh email...");
  const [requestId, setRequestId] = useState<string | undefined>();
  const [nextPath, setNextPath] = useState("");

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const next = params.get("next");
    setNextPath(next?.startsWith("/") ? next : "");
    if (!token) { setState("error"); setMessage("Liên kết xác minh không hợp lệ hoặc thiếu token."); return; }
    void apiRequest<{ message: string }>("/auth/verify-email", { method: "POST", body: JSON.stringify({ token }) })
      .then((result) => { setState("success"); setMessage(result.message); })
      .catch((cause: unknown) => { setState("error"); setMessage(cause instanceof ApiError ? cause.message : "Không thể xác minh email"); setRequestId(cause instanceof ApiError ? cause.requestId : undefined); });
  }, []);

  return <main id="main-content" tabIndex={-1} className="auth-shell"><section className="auth-card auth-status">
    <a className="brand auth-brand" href="/">Ngày <span>Đôi</span></a>
    {state === "loading" ? <><Skeleton width={58} height={58} className="status-icon" /><h2>Đang xác minh</h2><p>{message}</p></> : <><div className={`status-icon ${state}`} aria-hidden="true">{state === "success" ? "✓" : "!"}</div><h2>{state === "success" ? "Xác minh thành công" : "Không thể xác minh"}</h2>{state === "error" ? <Alert tone="error" requestId={requestId}>{message}</Alert> : <Alert tone="success">{message}</Alert>}</>}
    <ButtonLink href={`/login${nextPath ? `?next=${encodeURIComponent(nextPath)}` : ""}`} fullWidth>Đi đến đăng nhập</ButtonLink>
  </section></main>;
}
