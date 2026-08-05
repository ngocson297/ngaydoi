"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ApiError } from "../../lib/api";
import { useAuth } from "../../components/auth-provider";
import { Alert, Button, FormField, FormRequiredNote } from "../../components/ui";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<ApiError | Error | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    const data = new FormData(event.currentTarget);
    try {
      await login(String(data.get("email")), String(data.get("password")));
      const next = new URLSearchParams(window.location.search).get("next");
      router.replace(next?.startsWith("/") ? next : "/dashboard");
    } catch (cause) {
      setError(cause instanceof Error ? cause : new Error("Không thể đăng nhập"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <a className="brand auth-brand" href="/">Ngày <span>Đôi</span></a>
        <div className="eyebrow">Chào mừng trở lại</div>
        <h1>Đăng nhập</h1>
        <p className="auth-lead">Tiếp tục quản lý thiệp, khách mời và kế hoạch ngày cưới của bạn.</p>
        {error ? <Alert tone="error" title="Chưa thể đăng nhập" requestId={error instanceof ApiError ? error.requestId : undefined}>{error.message || "Vui lòng kiểm tra lại thông tin và thử lại."}</Alert> : null}
        <form className="auth-form" onSubmit={submit}>
          <FormRequiredNote />
          <FormField id="login-email" label="Email" required helperText="Dùng email bạn đã đăng ký với Ngày Đôi.">
            <input name="email" type="email" autoComplete="email" defaultValue="demo@ngaydoi.vn" required />
          </FormField>
          <FormField id="login-password" label="Mật khẩu" required>
            <input name="password" type="password" autoComplete="current-password" defaultValue="Demo@12345" required />
          </FormField>
          <div className="auth-row auth-row-end"><a href="/forgot-password">Quên mật khẩu?</a></div>
          <Button className="auth-submit ui-button-mobile-full" type="submit" fullWidth loading={submitting} loadingLabel="Đang đăng nhập…">Đăng nhập</Button>
        </form>
        <p className="auth-foot">Chưa có tài khoản? <a href="/register">Tạo tài khoản miễn phí</a></p>
      </section>
    </main>
  );
}
