"use client";

import { FormEvent, useState } from "react";
import { apiRequest, ApiError } from "../../lib/api";

interface ForgotResponse { message: string; developmentResetUrl?: string }

export default function ForgotPasswordPage() {
  const [result, setResult] = useState<ForgotResponse | null>(null);
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError("");
    const data = new FormData(event.currentTarget);
    try { setResult(await apiRequest<ForgotResponse>("/auth/forgot-password", { method: "POST", body: JSON.stringify({ email: data.get("email") }) })); }
    catch (cause) { setError(cause instanceof ApiError ? cause.message : "Không thể gửi yêu cầu"); }
  }
  return <main className="auth-shell"><section className="auth-card"><a className="brand auth-brand" href="/">Ngày <span>Đôi</span></a><div className="eyebrow">Khôi phục tài khoản</div><h1>Quên mật khẩu</h1><p className="auth-lead">Nhập email đã đăng ký để tạo liên kết đặt lại mật khẩu.</p>{error && <div className="alert alert-error">{error}</div>}{result ? <div className="success-panel"><h3>Đã ghi nhận</h3><p>{result.message}</p>{result.developmentResetUrl && <a className="btn btn-primary" href={result.developmentResetUrl}>Mở liên kết reset local</a>}</div> : <form className="auth-form" onSubmit={submit}><label>Email<input name="email" type="email" autoComplete="email" required /></label><button className="btn btn-primary auth-submit">Tạo liên kết đặt lại</button></form>}<p className="auth-foot"><a href="/login">← Quay lại đăng nhập</a></p></section></main>;
}
