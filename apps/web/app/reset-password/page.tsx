"use client";

import { FormEvent, useState } from "react";
import { apiRequest, ApiError } from "../../lib/api";
import { Alert, Button, ButtonLink, FormField } from "../../components/ui";

export default function ResetPasswordPage() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState<ApiError | Error | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const token = new URLSearchParams(window.location.search).get("token");
    const data = new FormData(event.currentTarget);
    if (!token) { setError(new Error("Liên kết đặt lại mật khẩu không hợp lệ hoặc thiếu token.")); return; }
    if (data.get("password") !== data.get("confirmPassword")) { setError(new Error("Mật khẩu xác nhận không khớp. Vui lòng nhập lại.")); return; }
    setSubmitting(true);
    try {
      const result = await apiRequest<{ message: string }>("/auth/reset-password", { method: "POST", body: JSON.stringify({ token, password: data.get("password") }) });
      setMessage(result.message);
    } catch (cause) {
      setError(cause instanceof Error ? cause : new Error("Không thể đổi mật khẩu"));
    } finally {
      setSubmitting(false);
    }
  }

  return <main id="main-content" tabIndex={-1} className="auth-shell"><section className="auth-card">
    <a className="brand auth-brand" href="/">Ngày <span>Đôi</span></a>
    <div className="eyebrow">Bảo mật tài khoản</div><h1>Đặt mật khẩu mới</h1>
    <p className="auth-lead">Chọn mật khẩu mới đủ mạnh và khác mật khẩu bạn đã dùng trước đây.</p>
    {error ? <Alert tone="error" title="Chưa thể đổi mật khẩu" requestId={error instanceof ApiError ? error.requestId : undefined}>{error.message}</Alert> : null}
    {message ? <div className="success-panel" role="status"><h3>Hoàn tất</h3><p>{message}</p><ButtonLink href="/login" fullWidth>Đăng nhập lại</ButtonLink></div> : <form className="auth-form" onSubmit={submit}><FormField id="reset-password" label="Mật khẩu mới" required helperText="Ít nhất 8 ký tự, có chữ hoa, chữ thường và chữ số."><input name="password" type="password" autoComplete="new-password" minLength={8} required /></FormField><FormField id="reset-confirm" label="Nhập lại mật khẩu" required><input name="confirmPassword" type="password" autoComplete="new-password" minLength={8} required /></FormField><Button type="submit" fullWidth loading={submitting} loadingLabel="Đang đổi mật khẩu…">Đổi mật khẩu</Button></form>}
  </section></main>;
}
