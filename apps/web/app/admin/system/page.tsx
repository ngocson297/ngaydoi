"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { AppShell } from "../../../components/app-shell";
import { AuthGate } from "../../../components/auth-gate";
import { useAuth } from "../../../components/auth-provider";
import { Alert, InlineErrorState, PageSkeleton, PermissionState, Tabs, tabPanelProps } from "../../../components/ui";
import { toUiError, type UiError } from "../../../lib/api";
import styles from "../admin-console.module.css";

interface EnvironmentCheck { key: string; status: "ok" | "warning" | "error"; message: string }
interface MailItem { id: string; recipient: string; subject: string; status: string; provider: string; attemptCount: number; lastError: string | null; createdAt: string; sentAt: string | null }
interface SystemOverview {
  live: { version: string; release: string; uptimeSeconds: number; timestamp: string };
  readiness: { status: string; checks: { database: { ok: boolean; latencyMs?: number; detail: string }; storage: { ok: boolean; provider: string; detail: string }; configuration: { ok: boolean } } };
  environment: EnvironmentCheck[];
  mail: { provider: string; metrics: Record<string, number>; recent: MailItem[] };
  webhooks: { metrics: Record<string, number> };
  database: { sizeLabel: string };
  runtime: { node: string; platform: string; rssMb: number; heapUsedMb: number; jobRunnerEnabled: boolean };
}
interface WebhookEndpoint { id: string; name: string; url: string; events: string[]; active: boolean; failureCount: number; lastDeliveredAt: string | null; lastFailedAt: string | null; deliveryCount?: number }
interface Delivery { id: string; eventType: string; status: string; attemptCount: number; responseStatus: number | null; lastError: string | null; createdAt: string; endpoint: { name: string; url: string } }

type Tab = "overview" | "email" | "webhooks";

function SystemContent() {
  const { user, authRequest } = useAuth();
  const [tab, setTab] = useState<Tab>("overview");
  const [overview, setOverview] = useState<SystemOverview | null>(null);
  const [endpoints, setEndpoints] = useState<WebhookEndpoint[]>([]);
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<UiError | null>(null);
  const [message, setMessage] = useState("");
  const [createdSecret, setCreatedSecret] = useState("");
  const [form, setForm] = useState({ name: "", url: "", events: "rsvp.updated,payment.confirmed" });

  const load = useCallback(async () => {
    const [health, webhookRows, deliveryRows] = await Promise.all([
      authRequest<SystemOverview>("/admin/system/overview"),
      authRequest<WebhookEndpoint[]>("/admin/system/webhooks"),
      authRequest<Delivery[]>("/admin/system/webhook-deliveries"),
    ]);
    setOverview(health); setEndpoints(webhookRows); setDeliveries(deliveryRows);
  }, [authRequest]);

  useEffect(() => { if (user && ["ADMIN", "STAFF"].includes(user.role)) void load().catch((reason: unknown) => setError(toUiError(reason, "Không thể tải trạng thái hệ thống."))); }, [load, user]);

  async function run(path: string, success: string): Promise<void> {
    setBusy(true); setError(null); setMessage("");
    try { await authRequest(path, { method: "POST" }); setMessage(success); await load(); }
    catch (reason) { setError(toUiError(reason, "Thao tác không thành công.")); }
    finally { setBusy(false); }
  }

  async function createWebhook(event: FormEvent): Promise<void> {
    event.preventDefault(); setBusy(true); setError(null); setCreatedSecret("");
    try {
      const result = await authRequest<WebhookEndpoint & { signingSecret: string }>("/admin/system/webhooks", { method: "POST", body: JSON.stringify({ name: form.name, url: form.url, events: form.events.split(",").map((item) => item.trim()).filter(Boolean) }) });
      setCreatedSecret(result.signingSecret); setForm({ name: "", url: "", events: "rsvp.updated,payment.confirmed" }); setMessage("Webhook đã được tạo. Hãy lưu signing secret ngay."); await load();
    } catch (reason) { setError(toUiError(reason, "Không thể tạo webhook.")); }
    finally { setBusy(false); }
  }

  if (!user || !["ADMIN", "STAFF"].includes(user.role)) return <AppShell active="system"><div className="page-state-panel"><PermissionState description="Trung tâm vận hành hệ thống chỉ dành cho Admin và Staff." /></div></AppShell>;
  if (!overview && !error) return <AppShell active="system"><PageSkeleton cards={3} /></AppShell>;

  const seconds = overview?.live.uptimeSeconds ?? 0;
  const uptime = `${Math.floor(seconds / 86400)} ngày ${Math.floor((seconds % 86400) / 3600)} giờ`;
  return <AppShell active="system"><div className={styles.consolePage}>
    <div className={`${styles.consoleHeader} page-heading system-heading`}><div><p className="eyebrow">PRODUCTION READINESS</p><h1>Trung tâm vận hành hệ thống</h1><p>Theo dõi database, storage, email, webhook và cấu hình triển khai trong một màn hình.</p></div><a className="btn btn-secondary" href="/status" target="_blank" rel="noreferrer">Mở status page ↗</a></div>
    <Tabs<Tab> id="system-tabs" label="Khu vực vận hành hệ thống" className={`${styles.consoleTabs} studio-tabs system-tabs`} value={tab} onChange={setTab} items={[{ value: "overview", label: "Tổng quan" }, { value: "email", label: "Hàng đợi email" }, { value: "webhooks", label: "Webhook" }]} />
    {error ? <InlineErrorState description={error.message} requestId={error.requestId} onRetry={() => void load()} /> : null}{message ? <Alert tone="success" title="Đã cập nhật">{message}</Alert> : null}

    {tab === "overview" && <div {...tabPanelProps("system-tabs", "overview")}>
      <div className="system-kpis"><article><span>Readiness</span><strong className={overview?.readiness.status === "ready" ? "good" : "bad"}>{overview?.readiness.status === "ready" ? "READY" : "NOT READY"}</strong><small>Deployment gate</small></article><article><span>Database</span><strong>{overview?.readiness.checks.database.latencyMs ?? "—"} ms</strong><small>{overview?.database.sizeLabel ?? "—"}</small></article><article><span>Storage</span><strong>{overview?.readiness.checks.storage.provider ?? "—"}</strong><small>{overview?.readiness.checks.storage.ok ? "Kết nối tốt" : "Cần xử lý"}</small></article><article><span>Uptime</span><strong>{uptime}</strong><small>Version {overview?.live.version ?? "—"}</small></article></div>
      <div className="system-grid"><section className="panel system-checks"><div className="panel-head"><div><h2>Deployment checklist</h2><p className="muted-small">Production sẽ từ chối khởi động nếu còn lỗi cấu hình nghiêm trọng.</p></div></div>{overview?.environment.map((check) => <article key={check.key}><span className={`check-icon ${check.status}`}>{check.status === "ok" ? "✓" : check.status === "warning" ? "!" : "×"}</span><div><strong>{check.key}</strong><p>{check.message}</p></div><em>{check.status}</em></article>)}</section>
      <section className="panel runtime-card"><h2>Runtime</h2><dl><div><dt>Node.js</dt><dd>{overview?.runtime.node}</dd></div><div><dt>Nền tảng</dt><dd>{overview?.runtime.platform}</dd></div><div><dt>RSS memory</dt><dd>{overview?.runtime.rssMb} MB</dd></div><div><dt>Heap used</dt><dd>{overview?.runtime.heapUsedMb} MB</dd></div><div><dt>Background jobs</dt><dd>{overview?.runtime.jobRunnerEnabled ? "Đang chạy" : "Đã tắt"}</dd></div><div><dt>Release SHA</dt><dd>{overview?.live.release}</dd></div></dl><button disabled={busy} className="btn btn-secondary full" onClick={() => void load()}>Làm mới kiểm tra</button></section></div>
    </div>}

    {tab === "email" && <section className="panel operations-panel" {...tabPanelProps("system-tabs", "email")}><div className="panel-head"><div><h2>Hàng đợi email</h2><p className="muted-small">Email được lưu trước, gửi nền và tự retry khi provider gián đoạn.</p></div><button disabled={busy} className="btn btn-primary" onClick={() => void run("/admin/system/emails/process", "Đã xử lý hàng đợi email.")}>Xử lý ngay</button></div><div className="mini-kpis"><span>Provider <b>{overview?.mail.provider}</b></span><span>Chờ gửi <b>{overview?.mail.metrics.pending ?? 0}</b></span><span>Đã gửi <b>{overview?.mail.metrics.delivered ?? 0}</b></span><span>Dead letter <b>{overview?.mail.metrics.deadLetter ?? 0}</b></span></div><div className="ops-table">{overview?.mail.recent.map((item) => <article key={item.id}><div><strong>{item.subject}</strong><span>{item.recipient} · {new Date(item.createdAt).toLocaleString("vi-VN")}</span>{item.lastError ? <small>{item.lastError}</small> : null}</div><em className={`delivery-state ${item.status.toLowerCase()}`}>{item.status}</em>{["FAILED", "DEAD_LETTER"].includes(item.status) ? <button className={`btn btn-secondary ${styles.compactButton}`} disabled={busy} onClick={() => void run(`/admin/system/emails/${item.id}/retry`, "Email đã được đưa lại vào hàng đợi.")}>Retry</button> : null}</article>)}</div></section>}

    {tab === "webhooks" && <div className="webhook-layout" {...tabPanelProps("system-tabs", "webhooks")}><section className="panel webhook-create"><h2>Thêm webhook</h2><p>Ngày Đôi ký mỗi request bằng HMAC SHA-256. Secret chỉ hiển thị một lần sau khi tạo.</p><form onSubmit={(event) => void createWebhook(event)}><label>Tên endpoint<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="ERP / CRM / Automation" /></label><label>HTTPS URL<input required type="url" value={form.url} onChange={(event) => setForm({ ...form, url: event.target.value })} placeholder="https://example.com/webhooks/ngaydoi" /></label><label>Sự kiện, cách nhau bằng dấu phẩy<input required value={form.events} onChange={(event) => setForm({ ...form, events: event.target.value })} /></label><button disabled={busy} className="btn btn-primary full">Tạo webhook</button></form>{createdSecret ? <div className="secret-box"><strong>Signing secret — lưu ngay</strong><code>{createdSecret}</code><button className={`btn btn-secondary ${styles.compactButton}`} type="button" onClick={() => void navigator.clipboard.writeText(createdSecret)}>Sao chép</button></div> : null}</section>
      <section className="panel webhook-list"><div className="panel-head"><div><h2>Endpoints</h2><p className="muted-small">Retry tối đa 6 lần với exponential backoff.</p></div><button disabled={busy} className="btn btn-secondary" onClick={() => void run("/admin/system/webhooks/process", "Đã xử lý hàng đợi webhook.")}>Xử lý hàng đợi</button></div>{endpoints.length ? endpoints.map((endpoint) => <article key={endpoint.id}><div className="webhook-main"><span className={`service-dot ${endpoint.active ? "operational" : "outage"}`} /><div><strong>{endpoint.name}</strong><span>{endpoint.url}</span><small>{endpoint.events.join(" · ")} · {endpoint.deliveryCount ?? 0} deliveries</small></div></div><aside><em>{endpoint.failureCount ? `${endpoint.failureCount} lỗi` : "Ổn định"}</em><button className={`btn btn-secondary ${styles.compactButton}`} disabled={busy} onClick={() => void run(`/admin/system/webhooks/${endpoint.id}/test`, "Đã gửi webhook test.")}>Test</button></aside></article>) : <div className="admin-empty"><strong>Chưa có webhook</strong><p>Thêm endpoint để đồng bộ RSVP và thanh toán sang hệ thống khác.</p></div>}</section>
      <section className="panel webhook-deliveries"><h2>50 deliveries gần nhất</h2><div className="ops-table">{deliveries.map((item) => <article key={item.id}><div><strong>{item.eventType}</strong><span>{item.endpoint.name} · {new Date(item.createdAt).toLocaleString("vi-VN")}</span>{item.lastError ? <small>{item.lastError}</small> : null}</div><em className={`delivery-state ${item.status.toLowerCase()}`}>{item.responseStatus ?? item.status}</em>{["FAILED", "DEAD_LETTER"].includes(item.status) ? <button className={`btn btn-secondary ${styles.compactButton}`} disabled={busy} onClick={() => void run(`/admin/system/webhook-deliveries/${item.id}/retry`, "Webhook đã được đưa lại vào hàng đợi.")}>Retry</button> : null}</article>)}</div></section></div>}
  </div></AppShell>;
}

export default function SystemPage() { return <AuthGate><SystemContent /></AuthGate>; }
