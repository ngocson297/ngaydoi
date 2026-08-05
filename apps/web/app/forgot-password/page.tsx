"use client";

import { FormEvent, useState } from "react";
import { apiRequest, ApiError } from "../../lib/api";
import { Alert, Button, ButtonLink, FormField } from "../../components/ui";

interface ForgotResponse { message: string; developmentResetUrl?: string }

export default function ForgotPasswordPage() {
  const [result, setResult] = useState<ForgotResponse | null>(null);
  const [error, setError] = useState<ApiError | Error | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);
    const data = new FormData(event.currentTarget);
    try {
      setResult(await apiRequest<ForgotResponse>("/auth/forgot-password", { method: "POST", body: JSON.stringify({ email: data.get("email") }) }));
    } catch (cause) {
      setError(cause instanceof Error ? cause : new Error("Không thể gửi yêu cầu"));
    } finally {
      setSubmitting(false);
    }
  }

  return <main className="auth-shell"><section className="auth-card">
    <a className="brand auth-brand" href="/">Ngày <span>Đôi</span></a>
    <div className="eyebrow">Khôi phục tài khoản</div><h1>Quên mật khẩu</h1>
    <p className="auth-lead">Nhập email đã đăng ký. Nếu tài khoản tồn tại, bạn sẽ nhận được hướng dẫn đặt lại mật khẩu.</p>
    {error ? <Alert tone="error" title="Chưa thể gửi yêu cầu" requestId={error instanceof ApiError ? error.requestId : undefined}>{error.message}</Alert> : null}
    {result ? <div className="success-panel" role="status"><h3>Đã ghi nhận</h3><p>{result.message}</p>{result.developmentResetUrl ? <ButtonLink href={result.developmentResetUrl} fullWidth>Mở liên kết reset local</ButtonLink> : null}<ButtonLink href="/login" variant="secondary" fullWidth>Quay lại đăng nhập</ButtonLink></div> : <form className="auth-form" onSubmit={submit}><FormField id="forgot-email" label="Email" required helperText="Ví dụ: ban@example.com"><input name="email" type="email" autoComplete="email" required /></FormField><Button type="submit" fullWidth loading={submitting} loadingLabel="Đang gửi yêu cầu…">Tạo liên kết đặt lại</Button></form>}
    <p className="auth-foot"><a href="/login">← Quay lại đăng nhập</a></p>
  </section></main>;
}
