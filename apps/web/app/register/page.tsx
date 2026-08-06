"use client";

import { FormEvent, useState } from "react";
import { apiRequest, ApiError } from "../../lib/api";
import { Alert, Button, ButtonLink, FormField, FormRequiredNote } from "../../components/ui";

interface RegisterResponse { message: string; developmentVerificationUrl?: string }

export default function RegisterPage() {
  const [result, setResult] = useState<RegisterResponse | null>(null);
  const [error, setError] = useState<ApiError | Error | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    const data = new FormData(event.currentTarget);
    try {
      setResult(await apiRequest<RegisterResponse>("/auth/register", {
        method: "POST",
        body: JSON.stringify({ displayName: data.get("displayName"), email: data.get("email"), password: data.get("password") }),
      }));
    } catch (cause) {
      setError(cause instanceof Error ? cause : new Error("Không thể tạo tài khoản"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main id="main-content" tabIndex={-1} className="auth-shell">
      <section className="auth-card">
        <a className="brand auth-brand" href="/">Ngày <span>Đôi</span></a>
        <div className="eyebrow">Bắt đầu ngày đôi</div>
        <h1>Tạo tài khoản</h1>
        <p className="auth-lead">Tạo tài khoản miễn phí, sau đó bắt đầu dựng thiệp cưới theo từng bước rõ ràng.</p>
        {error ? <Alert tone="error" title="Chưa thể tạo tài khoản" requestId={error instanceof ApiError ? error.requestId : undefined}>{error.message}</Alert> : null}
        {result ? (
          <div className="success-panel" role="status">
            <h3>Đã tạo tài khoản</h3><p>{result.message}</p>
            {result.developmentVerificationUrl ? <ButtonLink href={result.developmentVerificationUrl} fullWidth>Xác minh email trong môi trường local</ButtonLink> : null}
            <ButtonLink href="/login" variant="secondary" fullWidth>Đi đến đăng nhập</ButtonLink>
          </div>
        ) : (
          <form className="auth-form" onSubmit={submit}>
            <FormRequiredNote />
            <FormField id="register-name" label="Tên hiển thị" required helperText="Tên này xuất hiện trong tài khoản của bạn; có thể đổi sau.">
              <input name="displayName" autoComplete="name" placeholder="Ví dụ: Minh & Anh" minLength={2} required />
            </FormField>
            <FormField id="register-email" label="Email" required helperText="Chúng tôi sẽ gửi liên kết xác minh đến email này.">
              <input name="email" type="email" autoComplete="email" placeholder="ban@example.com" required />
            </FormField>
            <FormField id="register-password" label="Mật khẩu" required helperText="Ít nhất 8 ký tự, có chữ hoa, chữ thường và một chữ số.">
              <input name="password" type="password" autoComplete="new-password" placeholder="Tối thiểu 8 ký tự" minLength={8} required />
            </FormField>
            <Button className="auth-submit ui-button-mobile-full" type="submit" fullWidth loading={submitting} loadingLabel="Đang tạo tài khoản…">Tạo tài khoản</Button>
          </form>
        )}
        <p className="auth-foot">Đã có tài khoản? <a href="/login">Đăng nhập</a></p>
      </section>
    </main>
  );
}
