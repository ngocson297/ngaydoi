"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { AppShell } from "../../components/app-shell";
import { AuthGate } from "../../components/auth-gate";
import { useAuth } from "../../components/auth-provider";
import { Alert, ConfirmDialog, FormField, InlineErrorState, PageSkeleton, PermissionState, Tabs, tabPanelProps, useConfirm } from "../../components/ui";
import { toUiError, type UiError } from "../../lib/api";
import { formatMoney, orderStatusLabels, paymentStatusLabels } from "../../lib/commercial";

interface AdminOverview {
  metrics: { users: number; weddings: number; awaitingPayment: number; paymentReview: number; paidOrders: number; revenue: number; publishQueue: number };
  recentOrders: AdminOrder[];
}
interface AdminOrder {
  id: string; orderNumber: string; totalAmount: number; status: string; paymentStatus: string; fulfillmentStatus: string; createdAt: string;
  plan: { name: string; code: string };
  user: { id: string; displayName: string; email: string };
  wedding: { id: string; title: string; slug: string; status: string; publishReviewStatus: string };
  payments: Array<{ id: string; status: string; reference: string | null; submittedAt: string | null }>;
}
interface AdminOrderDetail extends AdminOrder {
  customerNote: string | null;
  items: Array<{ id: string; name: string; itemType: string; totalAmount: number }>;
  notes: Array<{ id: string; body: string; visibility: string; createdAt: string; author: { displayName: string; email: string } | null }>;
}
interface AdminUser { id: string; displayName: string; email: string; role: string; status: string; createdAt: string; _count: { weddings: number; customerOrders: number } }
interface AdminWedding { id: string; title: string; slug: string; status: string; publishReviewStatus: string; mainDate: string | null; owner: { displayName: string; email: string }; activePlan: { name: string; code: string } | null; _count: { guests: number; events: number; orders: number } }

type Tab = "overview" | "orders" | "users" | "weddings";
type PublishDecision = "APPROVE" | "CHANGES_REQUESTED";

function AdminContent() {
  const { confirm } = useConfirm();
  const { user, authRequest } = useAuth();
  const [tab, setTab] = useState<Tab>("overview");
  const [overview, setOverview] = useState<AdminOverview | null>(null);
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [selected, setSelected] = useState<AdminOrderDetail | null>(null);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [weddings, setWeddings] = useState<AdminWedding[]>([]);
  const [search, setSearch] = useState("");
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<UiError | null>(null);
  const [message, setMessage] = useState("");
  const [publishDialog, setPublishDialog] = useState<{ weddingId: string; weddingTitle: string; decision: PublishDecision } | null>(null);
  const [publishNote, setPublishNote] = useState("");

  const loadCore = useCallback(async () => {
    const [overviewResult, orderResult] = await Promise.all([authRequest<AdminOverview>("/admin/overview"), authRequest<AdminOrder[]>("/admin/orders")]);
    setOverview(overviewResult); setOrders(orderResult);
  }, [authRequest]);
  useEffect(() => { if (user && ["ADMIN", "STAFF"].includes(user.role)) void loadCore().catch((reason: unknown) => setError(toUiError(reason, "Không thể tải trang vận hành."))); }, [loadCore, user]);

  async function loadOrder(id: string): Promise<void> { setSelected(await authRequest<AdminOrderDetail>(`/admin/orders/${id}`)); }
  async function action(path: string, success: string): Promise<void> {
    if (!selected) return; setBusy(true); setError(null); setMessage("");
    try { const result = await authRequest<AdminOrderDetail>(`/admin/orders/${selected.id}/${path}`, { method: "POST", body: JSON.stringify({ note: note.trim() || undefined }) }); setSelected(result); setNote(""); setMessage(success); await loadCore(); }
    catch (reason) { setError(toUiError(reason, "Không thể xử lý đơn hàng.")); }
    finally { setBusy(false); }
  }
  async function addNote(event: FormEvent): Promise<void> {
    event.preventDefault(); if (!selected || !note.trim()) return; setBusy(true);
    try { await authRequest(`/admin/orders/${selected.id}/notes`, { method: "POST", body: JSON.stringify({ body: note, visibility: "CUSTOMER" }) }); setNote(""); await loadOrder(selected.id); setMessage("Đã gửi cập nhật cho khách hàng."); }
    catch (reason) { setError(toUiError(reason, "Không thể thêm ghi chú.")); } finally { setBusy(false); }
  }
  async function searchUsers(): Promise<void> { setUsers(await authRequest<AdminUser[]>(`/admin/users?search=${encodeURIComponent(search)}`)); }
  async function searchWeddings(): Promise<void> { setWeddings(await authRequest<AdminWedding[]>(`/admin/weddings?search=${encodeURIComponent(search)}`)); }
  function openPublishReview(weddingId: string, weddingTitle: string, decision: PublishDecision): void {
    setPublishNote("");
    setPublishDialog({ weddingId, weddingTitle, decision });
  }
  async function reviewPublish(): Promise<void> {
    if (!publishDialog) return;
    if (publishDialog.decision === "CHANGES_REQUESTED" && publishNote.trim().length < 5) {
      setError({ message: "Vui lòng mô tả rõ nội dung khách hàng cần chỉnh sửa." });
      return;
    }
    setBusy(true); setError(null);
    try {
      await authRequest(`/admin/weddings/${publishDialog.weddingId}/publish-review`, { method: "POST", body: JSON.stringify({ decision: publishDialog.decision, note: publishNote.trim() || undefined }) });
      setPublishDialog(null); setPublishNote("");
      await searchWeddings(); await loadCore(); setMessage("Đã cập nhật trạng thái kiểm duyệt.");
    }
    catch (reason) { setError(toUiError(reason, "Không thể cập nhật kiểm duyệt.")); }
    finally { setBusy(false); }
  }

  const queue = useMemo(() => orders.filter((item) => item.paymentStatus === "SUBMITTED" || item.wedding.publishReviewStatus === "REQUESTED"), [orders]);
  if (!user || !["ADMIN", "STAFF"].includes(user.role)) return <AppShell active="admin"><div className="page-state-panel"><PermissionState description="Trung tâm vận hành chỉ dành cho Admin và Staff." /></div></AppShell>;
  if (!overview && !error) return <AppShell active="admin"><PageSkeleton cards={3} /></AppShell>;

  function changeTab(item: Tab): void {
    setTab(item); setSelected(null); setSearch("");
    if (item === "users") void searchUsers();
    if (item === "weddings") void searchWeddings();
  }

  return <AppShell active="admin">
    <div className="admin-head"><div><div className="eyebrow">Operations console</div><h1>Trung tâm vận hành</h1><p>Xử lý đơn hàng, đối soát thanh toán và kiểm duyệt xuất bản trong một hàng đợi thống nhất.</p></div><div className="admin-live"><i/>Sandbox operations</div></div>
    {error ? <InlineErrorState description={error.message} requestId={error.requestId} onRetry={() => void loadCore()} /> : null}{message ? <Alert tone="success" title="Đã cập nhật">{message}</Alert> : null}
    <Tabs<Tab> id="admin-tabs" label="Khu vực quản trị" className="admin-tabs" value={tab} onChange={changeTab} items={[{ value: "overview", label: "Tổng quan" }, { value: "orders", label: "Đơn hàng" }, { value: "users", label: "Khách hàng" }, { value: "weddings", label: "Wedding" }]} />

    {tab === "overview" && <div {...tabPanelProps("admin-tabs", "overview")}>
      <div className="admin-metrics"><article><span>Doanh thu xác nhận</span><strong>{formatMoney(overview?.metrics.revenue ?? 0)}</strong><small>{overview?.metrics.paidOrders ?? 0} đơn đã thanh toán</small></article><article><span>Chờ đối soát</span><strong>{overview?.metrics.paymentReview ?? 0}</strong><small>Cần xử lý thanh toán</small></article><article><span>Chờ duyệt publish</span><strong>{overview?.metrics.publishQueue ?? 0}</strong><small>Wedding cần review</small></article><article><span>Người dùng / Wedding</span><strong>{overview?.metrics.users ?? 0} / {overview?.metrics.weddings ?? 0}</strong><small>Toàn hệ thống</small></article></div>
      <div className="admin-overview-grid"><section className="admin-queue-card"><div className="panel-head"><div><h2>Hàng đợi ưu tiên</h2><p className="muted-small">Thanh toán hoặc publish đang chờ phản hồi.</p></div><span>{queue.length}</span></div>{queue.length ? <div className="admin-mini-list">{queue.slice(0, 8).map((order) => <button onClick={() => { setTab("orders"); void loadOrder(order.id); }} key={order.id}><i>{order.paymentStatus === "SUBMITTED" ? "₫" : "✓"}</i><div><strong>{order.orderNumber}</strong><span>{order.user.displayName} · {order.wedding.title}</span></div><em>{order.paymentStatus === "SUBMITTED" ? "Đối soát" : "Duyệt thiệp"}</em></button>)}</div> : <div className="admin-empty"><strong>Hàng đợi đã sạch</strong><p>Không có tác vụ khẩn cấp.</p></div>}</section>
      <section className="admin-process-card"><small>QUY TRÌNH VẬN HÀNH</small><h2>Một đơn được xử lý như thế nào?</h2><ol><li><b>1</b><div><strong>Khách tạo đơn</strong><span>Hệ thống khóa giá, coupon và quyền lợi.</span></div></li><li><b>2</b><div><strong>Đối soát thanh toán</strong><span>Kiểm tra mã giao dịch trước khi xác nhận.</span></div></li><li><b>3</b><div><strong>Kích hoạt entitlement</strong><span>Giới hạn khách, ảnh và template cập nhật tự động.</span></div></li><li><b>4</b><div><strong>Duyệt xuất bản</strong><span>Gói có review sẽ vào hàng đợi kiểm duyệt.</span></div></li></ol></section></div>
    </div>}

    {tab === "orders" && <div className="admin-order-layout" {...tabPanelProps("admin-tabs", "orders")}><section className="admin-order-list"><div className="admin-list-tools"><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Tìm mã đơn, email, wedding..."/><button className="btn btn-secondary" onClick={async () => setOrders(await authRequest<AdminOrder[]>(`/admin/orders?search=${encodeURIComponent(search)}`))}>Tìm</button></div>{orders.map((order) => <button className={selected?.id === order.id ? "active" : ""} onClick={() => void loadOrder(order.id)} key={order.id}><div><small>{order.orderNumber}</small><strong>{order.user.displayName}</strong><span>{order.wedding.title} · {order.plan.name}</span></div><aside><b>{formatMoney(order.totalAmount)}</b><em className={`commerce-status ${order.paymentStatus.toLowerCase()}`}>{paymentStatusLabels[order.paymentStatus]}</em></aside></button>)}</section>
      <section className="admin-order-detail">{selected ? <><header><div><small>{selected.orderNumber}</small><h2>{selected.user.displayName}</h2><p>{selected.user.email} · {selected.wedding.title}</p></div><strong>{formatMoney(selected.totalAmount)}</strong></header><div className="admin-detail-status"><span>Đơn hàng<b>{orderStatusLabels[selected.status]}</b></span><span>Thanh toán<b>{paymentStatusLabels[selected.paymentStatus]}</b></span><span>Kích hoạt<b>{selected.fulfillmentStatus}</b></span></div><div className="admin-payment-proof"><h3>Thông tin đối soát</h3><dl><div><dt>Mã giao dịch</dt><dd>{selected.payments[0]?.reference ?? "Chưa cung cấp"}</dd></div><div><dt>Gửi lúc</dt><dd>{selected.payments[0]?.submittedAt ? new Date(selected.payments[0].submittedAt).toLocaleString("vi-VN") : "—"}</dd></div></dl></div><label className="admin-note-input">Ghi chú xử lý<textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="Lý do xác nhận, từ chối hoặc hoàn tiền"/></label><div className="admin-order-actions">{selected.paymentStatus !== "CONFIRMED" && <><button className="btn btn-primary" disabled={busy} onClick={() => void action("confirm-payment", "Đã xác nhận thanh toán và kích hoạt gói.")}>Xác nhận thanh toán</button><button className="btn btn-secondary danger-text" disabled={busy} onClick={() => void action("reject-payment", "Đã yêu cầu khách bổ sung thông tin.")}>Yêu cầu bổ sung</button></>}{selected.paymentStatus === "CONFIRMED" && <button className="btn btn-secondary danger-text" disabled={busy} onClick={() => void (async () => { if (await confirm({ title: "Hoàn tiền và thu hồi quyền lợi?", description: "Wedding sẽ bị hạ về gói miễn phí và có thể bị tạm ngưng ngay sau thao tác này.", confirmLabel: "Hoàn tiền", tone: "danger" })) await action("refund", "Đã ghi nhận hoàn tiền và thu hồi quyền lợi."); })()}>Hoàn tiền & thu hồi</button>}</div><form className="admin-customer-note" onSubmit={(event) => void addNote(event)}><strong>Gửi cập nhật cho khách</strong><p>Nội dung sẽ hiển thị trong trang chi tiết đơn hàng.</p><button className="btn btn-secondary" disabled={busy || !note.trim()}>Gửi cập nhật</button></form><div className="admin-note-history">{selected.notes.map((item) => <article key={item.id}><small>{item.visibility} · {new Date(item.createdAt).toLocaleString("vi-VN")}</small><p>{item.body}</p></article>)}</div></> : <div className="admin-empty large"><div>◇</div><h3>Chọn một đơn hàng</h3><p>Chi tiết đối soát và thao tác vận hành sẽ xuất hiện tại đây.</p></div>}</section></div>}

    {(tab === "users" || tab === "weddings") && <section className="admin-directory" {...tabPanelProps("admin-tabs", tab)}><div className="admin-list-tools"><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={tab === "users" ? "Tên hoặc email khách hàng" : "Tên wedding, slug hoặc email owner"}/><button className="btn btn-primary" onClick={() => void (tab === "users" ? searchUsers() : searchWeddings())}>Tìm kiếm</button></div>{tab === "users" ? <div className="admin-directory-list">{users.map((item) => <article key={item.id}><div className="avatar-circle">{item.displayName.charAt(0)}</div><div><strong>{item.displayName}</strong><span>{item.email}</span></div><em>{item.role}</em><small>{item._count.weddings} wedding · {item._count.customerOrders} đơn</small><b>{item.status}</b></article>)}</div> : <div className="admin-directory-list wedding-dir">{weddings.map((item) => <article key={item.id}><div className="avatar-circle">♥</div><div><strong>{item.title}</strong><span>/{item.slug} · {item.owner.email}</span></div><em>{item.activePlan?.name ?? "Khởi đầu"}</em><small>{item._count.guests} khách · {item._count.events} sự kiện</small><div className="publish-actions">{item.publishReviewStatus === "REQUESTED" ? <><button disabled={busy} onClick={() => openPublishReview(item.id, item.title, "APPROVE")}>Duyệt</button><button disabled={busy} onClick={() => openPublishReview(item.id, item.title, "CHANGES_REQUESTED")}>Yêu cầu sửa</button></> : <b>{item.publishReviewStatus}</b>}</div></article>)}</div>}</section>}

    <ConfirmDialog
      open={Boolean(publishDialog)}
      title={publishDialog?.decision === "APPROVE" ? "Duyệt thiệp để xuất bản?" : "Yêu cầu khách hàng chỉnh sửa"}
      description={publishDialog ? <><strong>{publishDialog.weddingTitle}</strong>{publishDialog.decision === "APPROVE" ? " sẽ được xuất bản ngay và lưu một phiên bản phát hành." : " sẽ quay về trạng thái cần chỉnh sửa."}</> : ""}
      confirmLabel={publishDialog?.decision === "APPROVE" ? "Duyệt & xuất bản" : "Gửi yêu cầu sửa"}
      loading={busy}
      confirmDisabled={publishDialog?.decision === "CHANGES_REQUESTED" && publishNote.trim().length < 5}
      onClose={() => { setPublishDialog(null); setPublishNote(""); }}
      onConfirm={() => void reviewPublish()}
    >
      <FormField
        id="publish-review-note"
        label={publishDialog?.decision === "APPROVE" ? "Ghi chú cho khách hàng" : "Nội dung cần chỉnh sửa"}
        required={publishDialog?.decision === "CHANGES_REQUESTED"}
        helperText={publishDialog?.decision === "APPROVE" ? "Không bắt buộc." : "Nhập ít nhất 5 ký tự để khách hàng hiểu cần sửa gì."}
        error={publishDialog?.decision === "CHANGES_REQUESTED" && publishNote.length > 0 && publishNote.trim().length < 5 ? "Nội dung cần có ít nhất 5 ký tự." : undefined}
      >
        <textarea rows={4} value={publishNote} onChange={(event) => setPublishNote(event.target.value)} placeholder={publishDialog?.decision === "APPROVE" ? "Ví dụ: Thiệp đã đạt yêu cầu và sẵn sàng chia sẻ." : "Ví dụ: Vui lòng bổ sung địa chỉ tiệc cưới và kiểm tra lại thời gian."} />
      </FormField>
    </ConfirmDialog>
  </AppShell>;
}

export default function AdminPage() { return <AuthGate><AdminContent /></AuthGate>; }
