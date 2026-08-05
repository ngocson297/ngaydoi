"use client";

import { useCallback, useEffect, useState } from "react";
import { AppShell } from "../../components/app-shell";
import { AuthGate } from "../../components/auth-gate";
import { useAuth } from "../../components/auth-provider";
import { Alert, ErrorState, PageSkeleton } from "../../components/ui";
import { ApiError, toUiError, type UiError } from "../../lib/api";

type Step = { key: string; label: string; done: boolean };
type Progress = { steps: Step[]; completedAt: string | null };

const stepDescriptions = [
  "Thêm tên và số điện thoại để hỗ trợ thuận tiện hơn.",
  "Tạo workspace và nhập ngày cưới.",
  "Chọn mẫu, màu sắc, ảnh bìa và nội dung.",
  "Nhập khách, tạo link cá nhân và thử RSVP.",
  "Kiểm tra lần cuối rồi xuất bản thiệp.",
];

function Content() {
  const { authRequest } = useAuth();
  const [data, setData] = useState<Progress | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<UiError | null>(null);
  const [actionError, setActionError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      setData(await authRequest<Progress>("/growth/onboarding"));
      setLoadError(null);
    } catch (reason) {
      setLoadError(toUiError(reason, "Không thể tải hướng dẫn bắt đầu."));
    } finally {
      setLoading(false);
    }
  }, [authRequest]);

  useEffect(() => { void load(); }, [load]);

  async function toggle(key: string) {
    if (!data) return;
    const previous = data;
    const steps = data.steps.map((step) => step.key === key ? { ...step, done: !step.done } : step);
    setData({ ...data, steps });
    setActionError("");
    try {
      await authRequest("/growth/onboarding", { method: "PATCH", body: JSON.stringify({ steps }) });
    } catch (reason) {
      setData(previous);
      setActionError(reason instanceof ApiError ? reason.message : "Không thể lưu tiến độ.");
    }
  }

  if (loading && !data) return <AppShell active="onboarding"><PageSkeleton cards={2} /></AppShell>;
  if (!data) return <AppShell active="onboarding"><ErrorState title="Không thể tải hướng dẫn" description={loadError?.message ?? "Dữ liệu hướng dẫn chưa sẵn sàng."} requestId={loadError?.requestId} onRetry={() => void load()} /></AppShell>;

  const done = data.steps.filter((step) => step.done).length;
  const total = data.steps.length || 5;
  const pct = Math.round((done / total) * 100);

  return (
    <AppShell active="onboarding">
      <div className="page-heading">
        <div><p className="eyebrow">BẮT ĐẦU NHANH</p><h1>Đưa thiệp đầu tiên lên online</h1><p>Một lộ trình ngắn, rõ ràng để bạn không bỏ sót bước quan trọng.</p></div>
        <div className="progress-orb"><strong>{pct}%</strong><span>hoàn thành</span></div>
      </div>
      {loadError ? <Alert tone="error" title="Tiến độ chưa được làm mới" requestId={loadError.requestId}>{loadError.message}</Alert> : null}
      {actionError ? <Alert tone="error">{actionError}</Alert> : null}
      <section className="panel launch-guide">
        <div className="launch-progress"><span style={{ width: `${pct}%` }} /></div>
        {data.steps.map((step, index) => (
          <button type="button" className={`launch-step ${step.done ? "done" : ""}`} onClick={() => void toggle(step.key)} key={step.key} aria-pressed={step.done}>
            <span>{step.done ? "✓" : index + 1}</span>
            <div><strong>{step.label}</strong><p>{stepDescriptions[index] ?? "Hoàn thành bước này để tiếp tục."}</p></div>
          </button>
        ))}
      </section>
      <div className="friendly-actions"><a className="btn btn-primary" href="/weddings/new">Tạo đám cưới</a><a className="btn btn-secondary" href="/support">Cần hỗ trợ</a></div>
    </AppShell>
  );
}

export default function Page() { return <AuthGate><Content /></AuthGate>; }
