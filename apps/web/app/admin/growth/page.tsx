"use client";

import { useCallback, useEffect, useState } from "react";
import { AppShell } from "../../../components/app-shell";
import { AuthGate } from "../../../components/auth-gate";
import { useAuth } from "../../../components/auth-provider";
import { EmptyState, InlineErrorState, PageSkeleton, PermissionState, TableSkeleton, Tabs, tabPanelProps } from "../../../components/ui";
import { toUiError, type UiError } from "../../../lib/api";

type Ticket = { id: string; subject: string; email: string; category: string; priority: string; status: string };
type Domain = { id: string; hostname: string; weddingId: string; status: string };
type Referral = { id: string; code: string; label: string | null; visitCount: number; signupCount: number; conversionCount: number };
type Data = { funnel: Record<string, number>; tickets: Ticket[]; domains: Domain[]; referrals: Referral[]; events: unknown[] };

function Content() {
  const { user, authRequest } = useAuth();
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<UiError | null>(null);
  type GrowthTab = "funnel" | "support" | "domains" | "referrals";
  const [tab, setTab] = useState<GrowthTab>("funnel");
  const allowed = Boolean(user && ["ADMIN", "STAFF"].includes(user.role));

  const load = useCallback(async () => {
    if (!allowed) { setLoading(false); return; }
    setLoading(true); setError(null);
    try { setData(await authRequest<Data>("/admin/growth")); }
    catch (reason) { setError(toUiError(reason, "Không thể tải Growth Center.")); }
    finally { setLoading(false); }
  }, [allowed, authRequest]);

  useEffect(() => { void load(); }, [load]);

  async function patch(path: string, body: unknown) {
    setError(null);
    try { await authRequest(path, { method: "PATCH", body: JSON.stringify(body) }); await load(); }
    catch (reason) { setError(toUiError(reason, "Không thể cập nhật dữ liệu Growth Center.")); }
  }

  if (!allowed) return <AppShell active="growthAdmin"><div className="page-state-panel"><PermissionState description="Growth & Customer Operations chỉ dành cho Admin và Staff." /></div></AppShell>;
  if (loading && !data) return <AppShell active="growthAdmin"><PageSkeleton cards={3} /></AppShell>;

  const funnel: Array<[string, number]> = [
    ["Landing", data?.funnel.landing ?? 0],
    ["Đăng ký", data?.funnel.signup ?? 0],
    ["Tạo wedding", data?.funnel.wedding ?? 0],
    ["Xuất bản", data?.funnel.publish ?? 0],
    ["Thanh toán", data?.funnel.paid ?? 0],
  ];

  return <AppShell active="growthAdmin">
    <div className="page-heading"><div><p className="eyebrow">PUBLIC LAUNCH</p><h1>Growth & Customer Operations</h1><p>Funnel, referral, support và custom domain trong một không gian vận hành.</p></div></div>
    {error ? <InlineErrorState description={error.message} requestId={error.requestId} onRetry={() => void load()} /> : null}
    <Tabs<GrowthTab> id="growth-tabs" label="Khu vực Growth Center" className="studio-tabs" value={tab} onChange={setTab} items={[{ value: "funnel", label: "Funnel" }, { value: "support", label: "Support" }, { value: "domains", label: "Tên miền" }, { value: "referrals", label: "Referral" }]} />
    {tab === "funnel" ? <section className="panel" {...tabPanelProps("growth-tabs", "funnel")}><h2>Funnel 30 ngày</h2><div className="funnel-grid">{funnel.map(([name, value], index) => <article key={name}><span>{index + 1}</span><div><small>{name}</small><strong>{value}</strong></div></article>)}</div></section> : null}
    {tab === "support" ? <section className="panel table-scroll state-section" {...tabPanelProps("growth-tabs", "support")}><h2>Support inbox</h2>{loading ? <TableSkeleton rows={5} columns={3} /> : data?.tickets.length ? data.tickets.map((ticket) => <article className="ops-row" key={ticket.id}><div><strong>{ticket.subject}</strong><p>{ticket.email} · {ticket.category} · {ticket.priority}</p></div><select value={ticket.status} onChange={(event) => void patch(`/admin/growth/tickets/${ticket.id}`, { status: event.target.value })}><option>OPEN</option><option>IN_PROGRESS</option><option>WAITING_CUSTOMER</option><option>RESOLVED</option><option>CLOSED</option></select></article>) : <EmptyState compact icon="✓" title="Support inbox đang trống" description="Không có yêu cầu hỗ trợ cần xử lý." />}</section> : null}
    {tab === "domains" ? <section className="panel state-section" {...tabPanelProps("growth-tabs", "domains")}><h2>Custom domain queue</h2>{loading ? <TableSkeleton rows={4} columns={3} /> : data?.domains.length ? data.domains.map((domain) => <article className="ops-row" key={domain.id}><div><strong>{domain.hostname}</strong><p>{domain.weddingId} · {domain.status}</p></div><select value={domain.status} onChange={(event) => void patch(`/admin/growth/domains/${domain.id}`, { status: event.target.value })}><option>PENDING_DNS</option><option>VERIFYING</option><option>VERIFIED</option><option>ACTIVE</option><option>FAILED</option><option>DISABLED</option></select></article>) : <EmptyState compact icon="◎" title="Không có tên miền chờ xử lý" description="Yêu cầu tên miền mới sẽ xuất hiện tại đây." />}</section> : null}
    {tab === "referrals" ? <section className="panel state-section" {...tabPanelProps("growth-tabs", "referrals")}><h2>Referral performance</h2>{loading ? <TableSkeleton rows={4} columns={3} /> : data?.referrals.length ? data.referrals.map((referral) => <article className="ops-row" key={referral.id}><div><strong>{referral.code}</strong><p>{referral.label || "Không nhãn"}</p></div><div className="mini-metrics"><span>{referral.visitCount} visit</span><span>{referral.signupCount} signup</span><span>{referral.conversionCount} paid</span></div></article>) : <EmptyState compact icon="↗" title="Chưa có dữ liệu referral" description="Hiệu suất mã giới thiệu sẽ xuất hiện sau khi người dùng bắt đầu chia sẻ." />}</section> : null}
  </AppShell>;
}
export default function Page() { return <AuthGate><Content /></AuthGate>; }
