"use client";

import { FormEvent, useState } from "react";
import { apiRequest, ApiError } from "../../lib/api";

export default function ResetPasswordPage() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError("");
    const token = new URLSearchParams(window.location.search).get("token");
    const data = new FormData(event.currentTarget);
    if (!token) { setError("Liên kết thiếu token."); return; }
    if (data.get("password") !== data.get("confirmPassword")) { setError("Mật khẩu xác nhận không khớp."); return; }
    try { const result = await apiRequest<{ message: string }>("/auth/reset-password", { method: "POST", body: JSON.stringify({ token, password: data.get("password") }) }); setMessage(result.message); }
    catch (cause) { setError(cause instanceof ApiError ? cause.message : "Không thể đổi mật khẩu"); }
  }
  return <main className="auth-shell"><section className="auth-card"><a className="brand auth-brand" href="/">Ngày <span>Đôi</span></a><div className="eyebrow">Bảo mật tài khoản</div><h1>Đặt mật khẩu mới</h1>{error && <div className="alert alert-error">{error}</div>}{message ? <div className="success-panel"><h3>Hoàn tất</h3><p>{message}</p><a className="btn btn-primary" href="/login">Đăng nhập lại</a></div> : <form className="auth-form" onSubmit={submit}><label>Mật khẩu mới<input name="password" type="password" autoComplete="new-password" minLength={8} required /></label><label>Nhập lại mật khẩu<input name="confirmPassword" type="password" autoComplete="new-password" minLength={8} required /></label><p className="field-help">Cần có chữ hoa, chữ thường và chữ số.</p><button className="btn btn-primary auth-submit">Đổi mật khẩu</button></form>}</section></main>;
}
