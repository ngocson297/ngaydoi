"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { AppShell } from "../../components/app-shell";
import { AuthGate } from "../../components/auth-gate";
import { useAuth } from "../../components/auth-provider";
import { Alert, EmptyState, InlineErrorState, ListSkeleton, PageSkeleton } from "../../components/ui";
import { toUiError, type UiError } from "../../lib/api";
import type { WeddingSummary } from "../../lib/weddings";

type Ref = { id: string; code: string; label: string | null; visitCount: number; signupCount: number; conversionCount: number };
type Domain = { id: string; hostname: string; status: string; verificationToken: string; dnsTarget: string; weddingTitle: string };

function Content() {
  const { authRequest } = useAuth();
  const [weddings, setWeddings] = useState<WeddingSummary[]>([]);
  const [refs, setRefs] = useState<Ref[]>([]);
  const [domains, setDomains] = useState<Domain[]>([]);
  const [code, setCode] = useState("");
  const [label, setLabel] = useState("");
  const [weddingId, setWeddingId] = useState("");
  const [hostname, setHostname] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<UiError | null>(null);
  const [actionError, setActionError] = useState<UiError | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    try {
      const [weddingResult, referralResult, domainResult] = await Promise.all([
        authRequest<WeddingSummary[]>("/weddings"),
        authRequest<Ref[]>("/growth/referrals"),
        authRequest<Domain[]>("/growth/domains"),
      ]);
      setWeddings(weddingResult);
      setRefs(referralResult);
      setDomains(domainResult);
      setWeddingId((current) => current || weddingResult[0]?.id || "");
    } catch (reason) {
      setLoadError(toUiError(reason, "Không thể tải Growth Hub."));
    } finally {
      setLoading(false);
    }
  }, [authRequest]);

  useEffect(() => { void load(); }, [load]);

  async function referral(event: FormEvent) {
    event.preventDefault(); setBusy(true); setActionError(null);
    try { await authRequest("/growth/referrals", { method: "POST", body: JSON.stringify({ code, label }) }); setCode(""); setLabel(""); await load(); }
    catch (reason) { setActionError(toUiError(reason, "Không thể tạo mã giới thiệu.")); }
    finally { setBusy(false); }
  }

  async function domain(event: FormEvent) {
    event.preventDefault(); setBusy(true); setActionError(null);
    try { await authRequest("/growth/domains", { method: "POST", body: JSON.stringify({ weddingId, hostname }) }); setHostname(""); await load(); }
    catch (reason) { setActionError(toUiError(reason, "Không thể gửi tên miền.")); }
    finally { setBusy(false); }
  }

  if (loading && !refs.length && !domains.length && !weddings.length) return <AppShell active="growth"><PageSkeleton cards={2} /></AppShell>;
  return <AppShell active="growth">
    <div className="page-heading"><div><p className="eyebrow">GROWTH HUB</p><h1>Chia sẻ và xây dựng thương hiệu riêng</h1><p>Mã giới thiệu minh bạch, tên miền riêng có hướng dẫn từng bước.</p></div></div>
    {loadError ? <InlineErrorState description={loadError.message} requestId={loadError.requestId} onRetry={() => void load()} /> : null}
    {actionError ? <Alert tone="error" title="Chưa thể hoàn tất thao tác" requestId={actionError.requestId}>{actionError.message}</Alert> : null}
    <div className="support-layout">
      <section className="panel state-section"><h2>Mã giới thiệu</h2><form className="pilot-form" onSubmit={referral}><label>Mã mong muốn<input required minLength={4} value={code} onChange={(event) => setCode(event.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""))} placeholder="NGAYDOI2026" /></label><label>Nhãn nội bộ<input value={label} onChange={(event) => setLabel(event.target.value)} placeholder="Studio Hoa Hồng" /></label><button className="btn btn-primary" disabled={busy}>Tạo mã</button></form><div className="growth-list">{loading ? <ListSkeleton rows={3} withAvatar={false} /> : refs.length ? refs.map((referralItem) => <article key={referralItem.id}><div><strong>{referralItem.code}</strong><p>{referralItem.label || "Mã cá nhân"}</p></div><div className="mini-metrics"><span>{referralItem.visitCount} lượt xem</span><span>{referralItem.signupCount} đăng ký</span><span>{referralItem.conversionCount} mua gói</span></div></article>) : <EmptyState compact icon="↗" title="Chưa có mã giới thiệu" description="Tạo mã đầu tiên để theo dõi lượt truy cập, đăng ký và chuyển đổi." />}</div></section>
      <section className="panel state-section"><h2>Tên miền riêng</h2><form className="pilot-form" onSubmit={domain}><label>Wedding<select required value={weddingId} onChange={(event) => setWeddingId(event.target.value)}>{weddings.map((wedding) => <option key={wedding.id} value={wedding.id}>{wedding.title}</option>)}</select></label><label>Tên miền<input required value={hostname} onChange={(event) => setHostname(event.target.value)} placeholder="thiepcuoi.tenban.vn" /></label><button className="btn btn-primary" disabled={busy || !weddingId}>Gửi yêu cầu</button></form>{!weddings.length ? <EmptyState compact icon="◇" title="Cần tạo wedding trước" description="Tên miền riêng phải được liên kết với một wedding." primaryAction={{ label: "Tạo wedding", href: "/weddings/new" }} /> : domains.length ? domains.map((domainItem) => <article className="domain-card" key={domainItem.id}><div><strong>{domainItem.hostname}</strong><span className={`status-pill ${domainItem.status.toLowerCase()}`}>{domainItem.status}</span></div><p>{domainItem.weddingTitle}</p><ol><li>Tạo bản ghi CNAME trỏ tới <code>{domainItem.dnsTarget}</code></li><li>Tạo TXT <code>_ngaydoi</code> với giá trị <code>{domainItem.verificationToken}</code></li><li>Chờ Admin xác minh và kích hoạt HTTPS.</li></ol></article>) : <EmptyState compact icon="◎" title="Chưa có tên miền riêng" description="Gửi tên miền bạn sở hữu để đội ngũ xác minh DNS và kích hoạt HTTPS." />}</section>
    </div>
  </AppShell>;
}
export default function Page() { return <AuthGate><Content /></AuthGate>; }
