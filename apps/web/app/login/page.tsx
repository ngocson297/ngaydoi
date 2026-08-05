"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ApiError } from "../../lib/api";
import { useAuth } from "../../components/auth-provider";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const data = new FormData(event.currentTarget);
    try {
      await login(String(data.get("email")), String(data.get("password")));
      const next = new URLSearchParams(window.location.search).get("next");
      router.replace(next?.startsWith("/") ? next : "/dashboard");
    } catch (cause) {
      setError(cause instanceof ApiError ? cause.message : "Không thể đăng nhập");
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
        <p className="auth-lead">Tiếp tục quản lý thiệp và danh sách khách mời của bạn.</p>
        {error && <div className="alert alert-error">{error}</div>}
        <form className="auth-form" onSubmit={submit}>
          <label>Email<input name="email" type="email" autoComplete="email" defaultValue="demo@ngaydoi.vn" required /></label>
          <label>Mật khẩu<input name="password" type="password" autoComplete="current-password" defaultValue="Demo@12345" required /></label>
          <div className="auth-row auth-row-end"><a href="/forgot-password">Quên mật khẩu?</a></div>
          <button className="btn btn-primary auth-submit" disabled={submitting}>{submitting ? "Đang đăng nhập..." : "Đăng nhập"}</button>
        </form>
        <p className="auth-foot">Chưa có tài khoản? <a href="/register">Tạo tài khoản miễn phí</a></p>
      </section>
    </main>
  );
}
