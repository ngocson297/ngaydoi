"use client";

import { useCallback, useEffect, useState } from "react";
import { AppShell } from "../../../components/app-shell";
import { AuthGate } from "../../../components/auth-gate";
import { useAuth } from "../../../components/auth-provider";
import { EmptyState, InlineErrorState, ListSkeleton, PageSkeleton, PermissionState } from "../../../components/ui";
import { toUiError, type UiError } from "../../../lib/api";
import styles from "../admin-console.module.css";

type Data = {
  partners: Array<{ id: string; name: string; status: string; contactEmail: string; commissionRateBps: number; minimumPayout: number; createdAt: string }>;
  payouts: Array<{ id: string; partnerId: string; amount: number; status: string; bankName: string; accountName: string; accountNumberMasked: string; requestedAt: string }>;
  commissions: Array<{ status: string; _sum: { commissionAmount: number | null }; _count: { _all: number } }>;
};
const money = (value: number) => `${new Intl.NumberFormat("vi-VN").format(value)}đ`;

function Content() {
  const { user, authRequest } = useAuth();
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<UiError | null>(null);
  const allowed = Boolean(user && ["ADMIN", "STAFF"].includes(user.role));

  const load = useCallback(async () => {
    if (!allowed) { setLoading(false); return; }
    setLoading(true); setError(null);
    try { setData(await authRequest<Data>("/admin/partners")); }
    catch (reason) { setError(toUiError(reason, "Không thể tải danh sách đối tác.")); }
    finally { setLoading(false); }
  }, [allowed, authRequest]);

  useEffect(() => { void load(); }, [load]);

  async function updatePartner(id: string, status: string) {
    try { await authRequest(`/admin/partners/${id}`, { method: "PATCH", body: JSON.stringify({ status }) }); await load(); }
    catch (reason) { setError(toUiError(reason, "Không thể cập nhật đối tác.")); }
  }
  async function updatePayout(id: string, status: string) {
    try { await authRequest(`/admin/partner-payouts/${id}`, { method: "PATCH", body: JSON.stringify({ status }) }); await load(); }
    catch (reason) { setError(toUiError(reason, "Không thể cập nhật payout.")); }
  }

  if (!allowed) return <AppShell active="partnersAdmin"><div className="page-state-panel"><PermissionState description="Khu vực Đối tác & Hoa hồng chỉ dành cho Admin và Staff." /></div></AppShell>;
  if (loading && !data) return <AppShell active="partnersAdmin"><PageSkeleton cards={2} /></AppShell>;

  return <AppShell active="partnersAdmin"><div className={styles.consolePage}>
    <div className={`${styles.consoleHeader} page-heading`}><div><p className="eyebrow">PARTNER OPERATIONS</p><h1>Đối tác & Hoa hồng</h1><p>Duyệt hồ sơ, theo dõi hoa hồng và xử lý thanh toán đối tác minh bạch, nhất quán.</p></div></div>
    {error ? <InlineErrorState description={error.message} requestId={error.requestId} onRetry={() => void load()} /> : null}
    <div className="kpi-grid">{data?.commissions.map((commission) => <article key={commission.status}><span>{commission.status}</span><strong>{money(commission._sum.commissionAmount || 0)}</strong><small>{commission._count._all} giao dịch</small></article>)}</div>
    <div className="partner-grid">
      <section className="panel state-section"><h2>Hồ sơ đối tác</h2><div className="growth-list">{loading ? <ListSkeleton rows={4} withAvatar={false} /> : data?.partners.length ? data.partners.map((partner) => <article key={partner.id}><div><strong>{partner.name}</strong><p>{partner.contactEmail} · {(partner.commissionRateBps / 100).toFixed(1)}%</p></div><div className="inline-actions"><span className={`status-pill ${partner.status.toLowerCase()}`}>{partner.status}</span>{partner.status !== "ACTIVE" ? <button className={`btn btn-primary ${styles.compactButton}`} onClick={() => void updatePartner(partner.id, "ACTIVE")}>Duyệt</button> : <button className={`btn btn-secondary ${styles.compactButton} ${styles.dangerButton}`} onClick={() => void updatePartner(partner.id, "SUSPENDED")}>Tạm dừng</button>}</div></article>) : <EmptyState compact icon="◇" title="Chưa có hồ sơ đối tác" description="Hồ sơ đăng ký mới sẽ xuất hiện tại đây để được xét duyệt." />}</div></section>
      <section className="panel state-section"><h2>Yêu cầu thanh toán</h2><div className="growth-list">{loading ? <ListSkeleton rows={4} withAvatar={false} /> : data?.payouts.length ? data.payouts.map((payout) => <article key={payout.id}><div><strong>{money(payout.amount)}</strong><p>{payout.bankName} · {payout.accountName} · {payout.accountNumberMasked}</p></div><div className="inline-actions"><span className={`status-pill ${payout.status.toLowerCase()}`}>{payout.status}</span>{payout.status === "REQUESTED" ? <button className={`btn btn-secondary ${styles.compactButton}`} onClick={() => void updatePayout(payout.id, "APPROVED")}>Duyệt</button> : null}{payout.status === "APPROVED" ? <button className={`btn btn-primary ${styles.compactButton}`} onClick={() => void updatePayout(payout.id, "PAID")}>Đã trả</button> : null}</div></article>) : <EmptyState compact icon="✓" title="Không có payout chờ xử lý" description="Yêu cầu thanh toán mới sẽ xuất hiện tại đây." />}</div></section>
    </div>
  </div></AppShell>;
}
export default function Page() { return <AuthGate><Content /></AuthGate>; }
