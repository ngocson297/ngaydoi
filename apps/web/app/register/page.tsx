"use client";

import { FormEvent, useState } from "react";
import { apiRequest, ApiError } from "../../lib/api";

interface RegisterResponse { message: string; developmentVerificationUrl?: string }

export default function RegisterPage() {
  const [result, setResult] = useState<RegisterResponse | null>(null);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const data = new FormData(event.currentTarget);
    try {
      const response = await apiRequest<RegisterResponse>("/auth/register", {
        method: "POST",
        body: JSON.stringify({
          displayName: data.get("displayName"),
          email: data.get("email"),
          password: data.get("password"),
        }),
      });
      setResult(response);
    } catch (cause) {
      setError(cause instanceof ApiError ? cause.message : "Không thể tạo tài khoản");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <a className="brand auth-brand" href="/">Ngày <span>Đôi</span></a>
        <div className="eyebrow">Bắt đầu ngày đôi</div>
        <h1>Tạo tài khoản</h1>
        <p className="auth-lead">Tạo tài khoản trước, sau đó bạn sẽ bắt đầu dựng thiệp cưới.</p>
        {error && <div className="alert alert-error">{error}</div>}
        {result ? (
          <div className="success-panel">
            <h3>Đã tạo tài khoản</h3><p>{result.message}</p>
            {result.developmentVerificationUrl && <a className="btn btn-primary" href={result.developmentVerificationUrl}>Xác minh email trong môi trường local</a>}
            <a className="text-link" href="/login">Đi đến đăng nhập</a>
          </div>
        ) : (
          <form className="auth-form" onSubmit={submit}>
            <label>Tên hiển thị<input name="displayName" autoComplete="name" placeholder="Minh & Anh" minLength={2} required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" placeholder="ban@example.com" required /></label>
            <label>Mật khẩu<input name="password" type="password" autoComplete="new-password" placeholder="Tối thiểu 8 ký tự" minLength={8} required /></label>
            <p className="field-help">Cần có chữ hoa, chữ thường và ít nhất một chữ số.</p>
            <button className="btn btn-primary auth-submit" disabled={submitting}>{submitting ? "Đang tạo..." : "Tạo tài khoản"}</button>
          </form>
        )}
        <p className="auth-foot">Đã có tài khoản? <a href="/login">Đăng nhập</a></p>
      </section>
    </main>
  );
}
