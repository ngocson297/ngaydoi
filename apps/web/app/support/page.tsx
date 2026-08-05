"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { AppShell } from "../../components/app-shell";
import { AuthGate } from "../../components/auth-gate";
import { useAuth } from "../../components/auth-provider";
import { Alert, EmptyState, InlineErrorState, ListSkeleton } from "../../components/ui";
import { toUiError, type UiError } from "../../lib/api";

type Ticket = { id: string; subject: string; status: string; priority: string; message: string; resolution: string | null; createdAt: string };

function Content() {
  const { authRequest } = useAuth();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [form, setForm] = useState({ subject: "", category: "GENERAL", priority: "NORMAL", message: "" });
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<UiError | null>(null);
  const [actionError, setActionError] = useState<UiError | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    try { setTickets(await authRequest<Ticket[]>("/support/tickets")); }
    catch (reason) { setLoadError(toUiError(reason, "Không thể tải các yêu cầu hỗ trợ.")); }
    finally { setLoading(false); }
  }, [authRequest]);

  useEffect(() => { void load(); }, [load]);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setActionError(null);
    try {
      await authRequest("/support/tickets", { method: "POST", body: JSON.stringify(form) });
      setForm({ subject: "", category: "GENERAL", priority: "NORMAL", message: "" });
      await load();
    } catch (reason) {
      setActionError(toUiError(reason, "Không thể gửi yêu cầu hỗ trợ."));
    } finally {
      setBusy(false);
    }
  }

  return <AppShell active="support">
    <div className="page-heading"><div><p className="eyebrow">TRUNG TÂM HỖ TRỢ</p><h1>Bạn cần giúp gì?</h1><p>Gửi yêu cầu với đầy đủ bối cảnh để đội vận hành xử lý nhanh hơn.</p></div></div>
    {actionError ? <Alert tone="error" title="Chưa thể gửi yêu cầu" requestId={actionError.requestId}>{actionError.message}</Alert> : null}
    <div className="support-layout">
      <form className="panel pilot-form" onSubmit={submit}><h2>Tạo yêu cầu mới</h2><label>Tiêu đề<input required value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} /></label><div className="form-grid"><label>Danh mục<select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}><option value="GENERAL">Chung</option><option value="INVITATION">Thiệp</option><option value="RSVP">Khách & RSVP</option><option value="BILLING">Thanh toán</option><option value="DOMAIN">Tên miền</option></select></label><label>Mức độ<select value={form.priority} onChange={(event) => setForm({ ...form, priority: event.target.value })}><option value="LOW">Thấp</option><option value="NORMAL">Bình thường</option><option value="HIGH">Cao</option><option value="URGENT">Khẩn cấp</option></select></label></div><label>Mô tả<textarea required minLength={10} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Bạn đang ở màn hình nào, thao tác gì và kết quả mong đợi?" /></label><button className="btn btn-primary" disabled={busy}>{busy ? "Đang gửi..." : "Gửi yêu cầu"}</button></form>
      <section className="panel state-section"><h2>Yêu cầu của bạn</h2>
        {loadError ? <InlineErrorState description={loadError.message} requestId={loadError.requestId} onRetry={() => void load()} /> : null}
        {loading ? <ListSkeleton rows={4} withAvatar={false} /> : !loadError && tickets.length === 0 ? <EmptyState compact icon="?" title="Chưa có yêu cầu hỗ trợ" description="Khi bạn gửi yêu cầu đầu tiên, trạng thái và phản hồi của đội ngũ Ngày Đôi sẽ xuất hiện tại đây." /> : !loadError ? tickets.map((ticket) => <article className="support-ticket" key={ticket.id}><div><strong>{ticket.subject}</strong><p>{ticket.message}</p><small>{new Date(ticket.createdAt).toLocaleString("vi-VN")}</small></div><span className={`status-pill ${ticket.status.toLowerCase()}`}>{ticket.status}</span>{ticket.resolution ? <div className="ticket-resolution"><b>Phản hồi:</b> {ticket.resolution}</div> : null}</article>) : null}
      </section>
    </div>
  </AppShell>;
}
export default function Page() { return <AuthGate><Content /></AuthGate>; }
