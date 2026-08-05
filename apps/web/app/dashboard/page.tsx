"use client";

import { useEffect, useMemo, useState } from "react";
import { AppShell } from "../../components/app-shell";
import { AuthGate } from "../../components/auth-gate";
import { useAuth } from "../../components/auth-provider";
import { ApiError } from "../../lib/api";
import { formatDate, statusClasses, statusLabels } from "../../lib/weddings";
import type { WeddingSummary } from "../../lib/weddings";

function DashboardContent() {
  const { authRequest } = useAuth();
  const [weddings, setWeddings] = useState<WeddingSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    void authRequest<WeddingSummary[]>("/weddings")
      .then(setWeddings)
      .catch((reason: unknown) => setError(reason instanceof ApiError ? reason.message : "Không thể tải danh sách đám cưới"))
      .finally(() => setLoading(false));
  }, [authRequest]);

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

      {error && <div className="alert alert-error">{error}</div>}

      <div className="metric-grid">
        <article className="metric"><span>Tổng workspace</span><strong>{stats.total}</strong></article>
        <article className="metric"><span>Đang chuẩn bị</span><strong>{stats.draft}</strong></article>
        <article className="metric"><span>Đã xuất bản</span><strong>{stats.published}</strong></article>
        <article className="metric"><span>Tổng sự kiện</span><strong>{stats.events}</strong></article>
      </div>

      <section id="my-weddings" className="workspace-section">
        <div className="panel-head">
          <div><h2>Danh sách đám cưới</h2><p className="muted-small">Workspace bạn sở hữu hoặc được mời cộng tác.</p></div>
        </div>
        {loading ? (
          <div className="empty-panel"><div className="spinner" /><p>Đang tải dữ liệu...</p></div>
        ) : weddings.length === 0 ? (
          <div className="empty-panel">
            <div className="empty-icon">✦</div>
            <h3>Bắt đầu đám cưới đầu tiên</h3>
            <p>Wizard chỉ yêu cầu thông tin cơ bản. Bạn có thể bổ sung sự kiện và gia đình sau.</p>
            <a className="btn btn-primary" href="/weddings/new">Tạo workspace</a>
          </div>
        ) : (
          <div className="wedding-card-grid">
            {weddings.map((wedding) => (
              <a className="wedding-card" href={`/weddings/${wedding.id}`} key={wedding.id}>
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
                <div className="card-footer">ngaydoi.vn/i/{wedding.slug}<span>{wedding.access === "OWNER" && !wedding.activePlan ? "Chọn gói →" : "Quản lý →"}</span></div>
              </a>
            ))}
          </div>
        )}
      </section>
    </AppShell>
  );
}

export default function DashboardPage() {
  return <AuthGate><DashboardContent /></AuthGate>;
}
