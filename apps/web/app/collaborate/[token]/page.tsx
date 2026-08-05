"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { AuthGate } from "../../../components/auth-gate";
import { useAuth } from "../../../components/auth-provider";
import { ApiError } from "../../../lib/api";

function AcceptCollaborationContent() {
  const { token } = useParams<{ token: string }>();
  const router = useRouter();
  const { user, authRequest } = useAuth();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function accept(): Promise<void> {
    setBusy(true);
    setError("");
    try {
      await authRequest(`/weddings/collaborations/${token}/accept`, { method: "POST" });
      router.replace("/dashboard");
    } catch (reason) {
      setError(reason instanceof ApiError ? reason.message : "Không thể chấp nhận lời mời");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="auth-shell">
      <section className="auth-card auth-status">
        <a className="brand auth-brand" href="/">Ngày <span>Đôi</span></a>
        <div className="status-icon success">✦</div>
        <h1>Lời mời cộng tác</h1>
        <p className="auth-lead">Bạn đang đăng nhập bằng <strong>{user?.email}</strong>. Hệ thống chỉ chấp nhận khi email này trùng với email được mời.</p>
        {error && <div className="alert alert-error">{error}</div>}
        <button className="btn btn-primary auth-submit" disabled={busy} onClick={() => void accept()}>{busy ? "Đang xác nhận..." : "Chấp nhận lời mời"}</button>
        <p className="auth-foot"><a href="/dashboard">Về dashboard</a></p>
      </section>
    </main>
  );
}

export default function AcceptCollaborationPage() {
  return <AuthGate><AcceptCollaborationContent /></AuthGate>;
}
