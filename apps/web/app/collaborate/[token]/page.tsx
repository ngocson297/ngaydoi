"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { AuthGate } from "../../../components/auth-gate";
import { useAuth } from "../../../components/auth-provider";
import { Alert, Button } from "../../../components/ui";
import { toUiError, type UiError } from "../../../lib/api";

function AcceptCollaborationContent() {
  const { token } = useParams<{ token: string }>();
  const router = useRouter();
  const { user, authRequest } = useAuth();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<UiError | null>(null);

  async function accept(): Promise<void> {
    setBusy(true);
    setError(null);
    try {
      await authRequest(`/weddings/collaborations/${token}/accept`, { method: "POST" });
      router.replace("/dashboard");
    } catch (reason) {
      setError(toUiError(reason, "Không thể chấp nhận lời mời cộng tác."));
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
        {error ? <Alert tone="error" requestId={error.requestId}>{error.message}</Alert> : null}
        <Button className="auth-submit" fullWidth loading={busy} loadingLabel="Đang xác nhận…" onClick={() => void accept()}>Chấp nhận lời mời</Button>
        <p className="auth-foot"><a href="/dashboard">Về dashboard</a></p>
      </section>
    </main>
  );
}

export default function AcceptCollaborationPage() { return <AuthGate><AcceptCollaborationContent /></AuthGate>; }
