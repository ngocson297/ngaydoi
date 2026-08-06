"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AppShell } from "../../components/app-shell";
import { AuthGate } from "../../components/auth-gate";
import { useAuth } from "../../components/auth-provider";
import { EmptyState, InlineErrorState, ListSkeleton, MetricSkeleton } from "../../components/ui";
import { toUiError, type UiError } from "../../lib/api";
import { formatDate, statusClasses, statusLabels } from "../../lib/weddings";
import type { WeddingSummary } from "../../lib/weddings";

function DashboardContent() {
  const { authRequest } = useAuth();
  const [weddings, setWeddings] = useState<WeddingSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<UiError | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setWeddings(await authRequest<WeddingSummary[]>("/weddings"));
    } catch (reason) {
      setError(toUiError(reason, "Không thể tải danh sách đám cưới."));
    } finally {
      setLoading(false);
    }
  }, [authRequest]);

  useEffect(() => { void load(); }, [load]);

  const stats = useMemo(() => ({
    total: weddings.length,
    draft: weddings.filter((item) => item.status === "DRAFT" || item.status === "READY_FOR_REVIEW").length,
    published: weddings.filter((item) => item.status === "PUBLISHED").length,
    events: weddings.reduce((sum, item) => sum + item._count.events, 0),
  }), [weddings]);

  return (
    <AppShell active="dashboard">
      <div className="dash-top">
        <div>
          <div className="eyebrow">Wedding workspace</div>
          <h1>Đám cưới của bạn</h1>
          <p className="dash-user">Tạo, hoàn thiện và quản lý toàn bộ sự kiện trên một nơi.</p>
        </div>
        <div className="dash-head-actions"><a className="btn btn-secondary" href="/pricing">Xem bảng giá</a><a className="btn btn-primary" href="/weddings/new">+ Tạo đám cưới</a></div>
      </div>

      {loading ? <MetricSkeleton /> : (
        <div className="metric-grid">
          <article className="metric"><span>Tổng workspace</span><strong>{stats.total}</strong></article>
          <article className="metric"><span>Đang chuẩn bị</span><strong>{stats.draft}</strong></article>
          <article className="metric"><span>Đã xuất bản</span><strong>{stats.published}</strong></article>
          <article className="metric"><span>Tổng sự kiện</span><strong>{stats.events}</strong></article>
        </div>
      )}

      <section id="my-weddings" className="workspace-section state-section">
        <div className="panel-head">
          <div><h2>Danh sách đám cưới</h2><p className="muted-small">Workspace bạn sở hữu hoặc được mời cộng tác.</p></div>
        </div>
        {error ? <InlineErrorState description={error.message} requestId={error.requestId} onRetry={() => void load()} /> : null}
        {loading ? (
          <ListSkeleton rows={3} />
        ) : !error && weddings.length === 0 ? (
          <EmptyState
            icon="✦"
            title="Bắt đầu đám cưới đầu tiên"
            description="Wizard chỉ yêu cầu thông tin cơ bản. Bạn có thể bổ sung sự kiện, khách mời và gia đình sau."
            primaryAction={{ label: "Tạo workspace", href: "/weddings/new" }}
            secondaryAction={{ label: "Xem mẫu thiệp", href: "/templates" }}
            compact
          />
        ) : !error ? (
          <div className="wedding-card-grid">
            {weddings.map((wedding) => (
              <article className="wedding-card" key={wedding.id}>
                <a className="wedding-card-main" href={`/weddings/${wedding.id}`} aria-label={`Quản lý đám cưới ${wedding.groomName} và ${wedding.brideName}`}>
                  <div className="wedding-card-top">
                    <span className={`status-pill ${statusClasses[wedding.status]}`}>{statusLabels[wedding.status]}</span>
                    <div className="wedding-card-chips"><span className="plan-chip">{wedding.activePlan?.name ?? "Khởi đầu"}</span><span className="access-chip">{wedding.access === "OWNER" ? "Chủ sở hữu" : wedding.access === "EDIT" ? "Cộng tác chỉnh sửa" : "Chỉ xem"}</span></div>
                  </div>
                  <div className="couple-monogram">{wedding.groomName.charAt(0)} <span>&</span> {wedding.brideName.charAt(0)}</div>
                  <h3>{wedding.groomName} & {wedding.brideName}</h3>
                  <p>{wedding.title}</p>
                  <div className="wedding-card-meta">
                    <span>Ngày chính<strong>{formatDate(wedding.mainDate)}</strong></span>
                    <span>Sự kiện<strong>{wedding._count.events}</strong></span>
                    <span>Khách<strong>{wedding._count.guests}</strong></span>
                  </div>
                  <div className="card-footer">ngaydoi.vn/i/{wedding.slug}</div>
                </a>
                <div className="wedding-card-actions">
                  {wedding.status === "PUBLISHED" && <a className="btn btn-secondary wedding-view-button" href={`/i/${wedding.slug}`} target="_blank" rel="noreferrer"><span aria-hidden="true">◉</span> Xem thiệp</a>}
                  <a className="btn btn-primary" href={`/weddings/${wedding.id}`}>{wedding.access === "OWNER" && !wedding.activePlan ? "Chọn gói" : "Quản lý"} →</a>
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </section>
    </AppShell>
  );
}

export default function DashboardPage() {
  return <AuthGate><DashboardContent /></AuthGate>;
}
