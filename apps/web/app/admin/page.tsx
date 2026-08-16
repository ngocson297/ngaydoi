"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { AppShell } from "../../components/app-shell";
import { AuthGate } from "../../components/auth-gate";
import { useAuth } from "../../components/auth-provider";
import { Alert, ConfirmDialog, FormField, InlineErrorState, PageSkeleton, PermissionState, Tabs, tabPanelProps, useConfirm } from "../../components/ui";
import { toUiError, type UiError } from "../../lib/api";
import { formatMoney, orderStatusLabels, paymentStatusLabels } from "../../lib/commercial";
import styles from "./admin-console.module.css";

interface AdminOverview {
  metrics: { users: number; weddings: number; awaitingPayment: number; paymentReview: number; paidOrders: number; revenue: number; publishQueue: number; activeCoupons: number; openSupportTickets: number; pendingDomains: number; pilotBlockers: number; pendingPartners: number; pendingPayouts: number };
  recentOrders: AdminOrder[];
}
interface AdminSystemOverview {
  readiness: { status: string; checks: { database: { ok: boolean }; storage: { ok: boolean } } };
  mail: { metrics: Record<string, number> };
  webhooks: { metrics: Record<string, number> };
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
interface AdminCoupon { id: string; code: string; name: string; discountType: "FIXED" | "PERCENTAGE"; discountValue: number; startsAt: string | null; endsAt: string | null; usageLimit: number | null; usedCount: number; active: boolean; planCodes: string[]; createdAt: string; }
type CouponForm = { code: string; name: string; discountType: "FIXED" | "PERCENTAGE"; discountValue: string; startsAt: string; endsAt: string; usageLimit: string; active: boolean; planCodes: string[] };
const emptyCouponForm: CouponForm = { code: "", name: "", discountType: "PERCENTAGE", discountValue: "10", startsAt: "", endsAt: "", usageLimit: "", active: true, planCodes: ["STARTER", "STANDARD", "PREMIUM"] };
const planOptions = ["FREE", "STARTER", "STANDARD", "PREMIUM"] as const;

type Tab = "overview" | "orders" | "users" | "weddings" | "coupons";
type PublishDecision = "APPROVE" | "CHANGES_REQUESTED";

const publishReviewStatusLabels: Record<string, string> = {
  NOT_REQUESTED: "Chưa yêu cầu",
  REQUESTED: "Chờ duyệt",
  IN_REVIEW: "Đang xem xét",
  APPROVED: "Đã duyệt",
  REJECTED: "Từ chối",
};
const weddingStatusLabels: Record<string, string> = {
  DRAFT: "Bản nháp",
  PUBLISHED: "Đã xuất bản",
  ARCHIVED: "Đã lưu trữ",
  ACTIVE: "Đang hoạt động",
};
const roleLabels: Record<string, string> = {
  ADMIN: "Quản trị viên",
  STAFF: "Nhân viên vận hành",
  CUSTOMER: "Khách hàng",
  FAMILY_EDITOR: "Biên tập gia đình",
  PARTNER: "Đối tác",
};
const userStatusLabels: Record<string, string> = {
  ACTIVE: "Đang hoạt động",
  INVITED: "Chờ kích hoạt",
  SUSPENDED: "Tạm khóa",
  DISABLED: "Đã vô hiệu hóa",
};
const fulfillmentStatusLabels: Record<string, string> = {
  PENDING: "Chờ kích hoạt",
  FULFILLING: "Đang kích hoạt",
  ACTIVE: "Đang hoạt động",
  COMPLETED: "Hoàn tất",
  REFUNDED: "Đã thu hồi",
};
const planLabels: Record<string, string> = {
  FREE: "Miễn phí",
  STARTER: "Khởi đầu",
  STANDARD: "Tiêu chuẩn",
  PREMIUM: "Cao cấp",
};

function statusLabel(labels: Record<string, string>, value: string): string {
  return labels[value] ?? value.replaceAll("_", " ");
}

function AdminScreenHeading({ eyebrow, title, description, count }: { eyebrow: string; title: string; description: string; count?: number }) {
  return <div className="admin-screen-heading"><div><span className="admin-screen-eyebrow">{eyebrow}</span><h2>{title}</h2><p>{description}</p></div>{count != null ? <span className="admin-screen-count">{count}</span> : null}</div>;
}

function AdminContent() {
  const { confirm } = useConfirm();
  const { user, authRequest } = useAuth();
  const [tab, setTab] = useState<Tab>("overview");
  const [overview, setOverview] = useState<AdminOverview | null>(null);
  const [system, setSystem] = useState<AdminSystemOverview | null>(null);
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [selected, setSelected] = useState<AdminOrderDetail | null>(null);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [weddings, setWeddings] = useState<AdminWedding[]>([]);
  const [coupons, setCoupons] = useState<AdminCoupon[]>([]);
  const [couponEditingId, setCouponEditingId] = useState<string | null>(null);
  const [couponForm, setCouponForm] = useState<CouponForm>(emptyCouponForm);
  const [search, setSearch] = useState("");
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<UiError | null>(null);
  const [message, setMessage] = useState("");
  const [publishDialog, setPublishDialog] = useState<{ weddingId: string; weddingTitle: string; decision: PublishDecision } | null>(null);
  const [publishNote, setPublishNote] = useState("");

  const loadCore = useCallback(async () => {
    const [overviewResult, orderResult, weddingResult, systemResult] = await Promise.all([
      authRequest<AdminOverview>("/admin/overview"),
      authRequest<AdminOrder[]>("/admin/orders"),
      authRequest<AdminWedding[]>("/admin/weddings"),
      authRequest<AdminSystemOverview>("/admin/system/overview").catch(() => null),
    ]);
    setOverview(overviewResult); setOrders(orderResult); setWeddings(weddingResult); setSystem(systemResult);
  }, [authRequest]);
  useEffect(() => { if (user && ["ADMIN", "STAFF"].includes(user.role)) void loadCore().catch((reason: unknown) => setError(toUiError(reason, "Không thể tải trang vận hành."))); }, [loadCore, user]);
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("tab");
    if (["overview", "orders", "users", "weddings", "coupons"].includes(requested ?? "")) { setTab(requested as Tab); if (requested === "coupons") void loadCoupons(); }
  }, []);

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
  async function searchWeddings(query = search): Promise<void> { setWeddings(await authRequest<AdminWedding[]>(`/admin/weddings?search=${encodeURIComponent(query)}`)); }
  async function loadCoupons(): Promise<void> { setCoupons(await authRequest<AdminCoupon[]>("/admin/coupons")); }
  function editCoupon(item?: AdminCoupon): void {
    if (!item) { setCouponEditingId(null); setCouponForm(emptyCouponForm); return; }
    const localDate = (value: string | null) => value ? new Date(value).toISOString().slice(0, 16) : "";
    setCouponEditingId(item.id);
    setCouponForm({ code: item.code, name: item.name, discountType: item.discountType, discountValue: String(item.discountValue), startsAt: localDate(item.startsAt), endsAt: localDate(item.endsAt), usageLimit: item.usageLimit ? String(item.usageLimit) : "", active: item.active, planCodes: item.planCodes });
  }
  async function saveCoupon(event: FormEvent): Promise<void> {
    event.preventDefault(); if (user?.role !== "ADMIN") return;
    setBusy(true); setError(null); setMessage("");
    try {
      const body = {
        code: couponForm.code.trim().toUpperCase(), name: couponForm.name.trim(), discountType: couponForm.discountType,
        discountValue: Number(couponForm.discountValue), startsAt: couponForm.startsAt ? new Date(couponForm.startsAt).toISOString() : null,
        endsAt: couponForm.endsAt ? new Date(couponForm.endsAt).toISOString() : null, usageLimit: couponForm.usageLimit ? Number(couponForm.usageLimit) : null,
        active: couponForm.active, planCodes: couponForm.planCodes,
      };
      await authRequest(couponEditingId ? `/admin/coupons/${couponEditingId}` : "/admin/coupons", { method: couponEditingId ? "PATCH" : "POST", body: JSON.stringify(body) });
      await loadCoupons(); editCoupon(); setMessage(couponEditingId ? "Đã cập nhật mã giảm giá." : "Đã tạo mã giảm giá.");
    } catch (reason) { setError(toUiError(reason, "Không thể lưu mã giảm giá.")); }
    finally { setBusy(false); }
  }
  async function toggleCoupon(item: AdminCoupon): Promise<void> {
    if (user?.role !== "ADMIN") return; setBusy(true); setError(null);
    try { await authRequest(`/admin/coupons/${item.id}`, { method: "PATCH", body: JSON.stringify({ active: !item.active }) }); await loadCoupons(); setMessage(item.active ? "Đã tạm dừng mã giảm giá." : "Đã kích hoạt mã giảm giá."); }
    catch (reason) { setError(toUiError(reason, "Không thể cập nhật mã giảm giá.")); }
    finally { setBusy(false); }
  }
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
  const reviewWeddings = useMemo(() => weddings
    .filter((item) => item.publishReviewStatus === "REQUESTED" || item.publishReviewStatus === "IN_REVIEW")
    .slice(0, 6), [weddings]);
  const emailIssues = system?.mail.metrics.deadLetter ?? 0;
  const webhookIssues = (system?.webhooks.metrics.failed ?? 0) + (system?.webhooks.metrics.deadLetter ?? 0);
  if (!user || !["ADMIN", "STAFF"].includes(user.role)) return <AppShell active="admin"><div className="page-state-panel"><PermissionState description="Trung tâm vận hành chỉ dành cho Admin và Staff." /></div></AppShell>;
  if (!overview && !error) return <AppShell active="dashboard"><PageSkeleton cards={3} /></AppShell>;

  function changeTab(item: Tab): void {
    setTab(item); setSelected(null); setSearch("");
    const url = new URL(window.location.href);
    if (item === "overview") url.searchParams.delete("tab"); else url.searchParams.set("tab", item);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    if (item === "users") void searchUsers();
    if (item === "weddings") void searchWeddings();
    if (item === "coupons") void loadCoupons();
  }

  function openWeddingDirectory(slug: string): void {
    setTab("weddings"); setSelected(null); setSearch(slug);
    const url = new URL(window.location.href);
    url.searchParams.set("tab", "weddings");
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    void searchWeddings(slug);
  }

  return <AppShell active={tab === "overview" ? "dashboard" : tab === "coupons" ? "couponsAdmin" : "admin"} breadcrumbs={tab === "overview" ? [{ label: "Tổng quan" }] : undefined}><div className={styles.consolePage}>
    <div className={`${styles.consoleHeader} ${styles.overviewHeader} admin-head`}><div><div className="eyebrow">TRUNG TÂM QUẢN TRỊ</div><h1>Trung tâm quản trị</h1><p>Theo dõi và xử lý các hoạt động quan trọng của Ngày Đôi.</p></div><div className={styles.headerActions}><div className="admin-live"><i/>Môi trường thử nghiệm</div></div></div>
    {error ? <InlineErrorState description={error.message} requestId={error.requestId} onRetry={() => void loadCore()} /> : null}{message ? <Alert tone="success" title="Đã cập nhật">{message}</Alert> : null}
    <Tabs<Tab> id="admin-tabs" label="Khu vực quản trị" className={`${styles.consoleTabs} admin-tabs`} value={tab} onChange={changeTab} items={[{ value: "overview", label: "Tổng quan" }, { value: "orders", label: "Đơn hàng" }, { value: "users", label: "Khách hàng" }, { value: "weddings", label: "Wedding" }, { value: "coupons", label: "Mã giảm giá" }]} />

    {tab === "overview" && <div {...tabPanelProps("admin-tabs", "overview")}>
      <div className={`admin-metrics ${styles.overviewMetrics}`}><article><span>Tổng wedding</span><strong>{overview?.metrics.weddings ?? 0}</strong><small>Toàn hệ thống</small></article><article className={overview?.metrics.publishQueue ? styles.metricAttention : undefined}><span>Wedding chờ duyệt</span><strong>{overview?.metrics.publishQueue ?? 0}</strong><small>Cần Admin kiểm duyệt</small></article><article><span>Người dùng / khách hàng</span><strong>{overview?.metrics.users ?? 0}</strong><small>Tài khoản đang hoạt động</small></article><article><span>Đơn đã thanh toán</span><strong>{overview?.metrics.paidOrders ?? 0}</strong><small>Đã xác nhận</small></article><article><span>Doanh thu xác nhận</span><strong>{formatMoney(overview?.metrics.revenue ?? 0)}</strong><small>Từ đơn đã thanh toán</small></article><article><span>Mã giảm giá hoạt động</span><strong>{overview?.metrics.activeCoupons ?? 0}</strong><small>Đang bật</small></article></div>
      <section className={styles.attentionPanel}><div className={styles.sectionHead}><div><div className="eyebrow">ƯU TIÊN HÔM NAY</div><h2>Việc cần xử lý</h2><p>Các mục đang chờ hành động từ đội ngũ quản trị.</p></div><span className={styles.attentionCount}>{(overview?.metrics.publishQueue ?? 0) + (overview?.metrics.paymentReview ?? 0) + (overview?.metrics.openSupportTickets ?? 0) + (overview?.metrics.pilotBlockers ?? 0)}</span></div><div className={styles.actionList}>
        {overview?.metrics.publishQueue ? <a href="/admin?tab=weddings" className={styles.actionItem}><span className={styles.actionIcon}>↗</span><span><strong>{overview.metrics.publishQueue} wedding chờ duyệt</strong><small>Mở hàng đợi kiểm duyệt xuất bản</small></span><b>→</b></a> : null}
        {overview?.metrics.paymentReview ? <a href="/admin?tab=orders" className={styles.actionItem}><span className={styles.actionIcon}>₫</span><span><strong>{overview.metrics.paymentReview} đơn chờ đối soát</strong><small>Kiểm tra thanh toán đã gửi</small></span><b>→</b></a> : null}
        {overview?.metrics.openSupportTickets ? <a href="/admin/growth" className={styles.actionItem}><span className={styles.actionIcon}>?</span><span><strong>{overview.metrics.openSupportTickets} yêu cầu hỗ trợ đang mở</strong><small>Đi tới Tăng trưởng & CSKH</small></span><b>→</b></a> : null}
        {overview?.metrics.pilotBlockers ? <a href="/admin/pilot" className={styles.actionItem}><span className={styles.actionIcon}>!</span><span><strong>{overview.metrics.pilotBlockers} vấn đề chặn Pilot/UAT</strong><small>Kiểm tra danh sách trước khi ra mắt</small></span><b>→</b></a> : null}
        {!overview?.metrics.publishQueue && !overview?.metrics.paymentReview && !overview?.metrics.openSupportTickets && !overview?.metrics.pilotBlockers ? <div className={styles.actionEmpty}><strong>Không có việc tồn đọng</strong><span>Hệ thống đang trong trạng thái ổn định.</span></div> : null}
      </div></section>
      <section className={styles.reviewPanel}><div className={styles.sectionHead}><div><div className="eyebrow">KIỂM DUYỆT</div><h2>Wedding chờ duyệt</h2><p>Ưu tiên các yêu cầu xuất bản mới nhất.</p></div><a className="btn btn-secondary" href="/admin?tab=weddings">Xem tất cả</a></div>{reviewWeddings.length ? <div className={styles.reviewTable}><div className={styles.reviewTableHead}><span>Wedding</span><span>Chủ sở hữu</span><span>Gói</span><span>Trạng thái</span><span>Khách / sự kiện</span><span>Thao tác</span></div>{reviewWeddings.map((item) => <div className={styles.reviewRow} key={item.id}><div><strong>{item.title}</strong><small>/{item.slug}</small></div><span>{item.owner.displayName}</span><span>{item.activePlan?.name ?? "Khởi đầu"}</span><em>{item.publishReviewStatus === "IN_REVIEW" ? "Đang xem xét" : "Chờ duyệt"}</em><span>{item._count.guests} khách · {item._count.events} sự kiện</span><div className={styles.reviewActions}><button type="button" className={`btn btn-secondary ${styles.compactButton}`} onClick={() => openWeddingDirectory(item.slug)}>Xem</button><button type="button" className={`btn btn-primary ${styles.compactButton}`} onClick={() => openPublishReview(item.id, item.title, "APPROVE")}>Duyệt</button></div></div>)}</div> : <div className={styles.actionEmpty}><strong>Không có wedding chờ duyệt</strong><span>Hàng đợi xuất bản hiện đã sạch.</span></div>}</section>
      {system ? <section className={styles.systemPanel}><div className={styles.sectionHead}><div><div className="eyebrow">TRẠNG THÁI HỆ THỐNG</div><h2>Vận hành</h2><p>Kiểm tra nhanh các dịch vụ đang hỗ trợ Ngày Đôi.</p></div><a className="btn btn-secondary" href="/admin/system">Mở vận hành</a></div><div className={styles.systemStatusGrid}><article><span>API</span><strong className={styles.statusGood}>Đang hoạt động</strong><small>Đã phản hồi</small></article><article><span>Database</span><strong className={system.readiness.checks.database.ok ? styles.statusGood : styles.statusBad}>{system.readiness.checks.database.ok ? "Đang hoạt động" : "Cần kiểm tra"}</strong><small>Kiểm tra sẵn sàng</small></article><article><span>Email</span><strong className={emailIssues ? styles.statusWarning : styles.statusGood}>{emailIssues ? `${emailIssues} lỗi` : "Đang hoạt động"}</strong><small>Thư lỗi cần xử lý</small></article><article><span>Webhook</span><strong className={webhookIssues ? styles.statusWarning : styles.statusGood}>{webhookIssues ? `${webhookIssues} lỗi` : "Đang hoạt động"}</strong><small>Lỗi gửi hoặc thư lỗi</small></article></div></section> : null}
      <div className={styles.roleScope}><span>◎</span><div><strong>Phạm vi ADMIN: toàn hệ thống</strong><br/>Tổng quan hiển thị dữ liệu tổng hợp của mọi khu vực. Các màn chuyên sâu vẫn tách riêng để tránh nhồi toàn bộ bảng dữ liệu vào một trang.</div></div>
      <section className={styles.quickAccessPanel}><div className={styles.sectionHead}><div><div className="eyebrow">TRUY CẬP NHANH</div><h2>Truy cập nhanh</h2><p>Các khu vực quản trị thường dùng.</p></div></div><div className={styles.commandGrid}>
        <a className={styles.commandCard} href="/admin?tab=coupons"><span className={styles.commandIcon}>%</span><div><strong>Mã giảm giá</strong><small>Tạo, sửa, bật/tắt mã và theo dõi lượt dùng.</small></div><span className={styles.commandValue}><b>{overview?.metrics.activeCoupons ?? 0}</b><span>đang bật</span></span></a>
        <a className={styles.commandCard} href="/admin/system"><span className={styles.commandIcon}>◉</span><div><strong>Hệ thống</strong><small>Sức khỏe, lưu trữ, email, webhook và mức sẵn sàng.</small></div><span className={styles.commandValue}><b>↗</b><span>mở</span></span></a>
        <a className={styles.commandCard} href="/admin/pilot"><span className={styles.commandIcon}>◫</span><div><strong>Pilot & UAT</strong><small>Danh sách kiểm tra ra mắt và vấn đề mức cao.</small></div><span className={styles.commandValue}><b>{overview?.metrics.pilotBlockers ?? 0}</b><span>vấn đề</span></span></a>
        <a className={styles.commandCard} href="/admin/growth"><span className={styles.commandIcon}>↗</span><div><strong>Tăng trưởng & CSKH</strong><small>Hỗ trợ, tên miền riêng, phễu và giới thiệu.</small></div><span className={styles.commandValue}><b>{overview?.metrics.openSupportTickets ?? 0}</b><span>yêu cầu mở</span></span></a>
        <a className={styles.commandCard} href="/admin/growth"><span className={styles.commandIcon}>◎</span><div><strong>Tên miền riêng</strong><small>Yêu cầu DNS đang chờ xác minh hoặc kích hoạt.</small></div><span className={styles.commandValue}><b>{overview?.metrics.pendingDomains ?? 0}</b><span>đang chờ</span></span></a>
        <a className={styles.commandCard} href="/admin/partners"><span className={styles.commandIcon}>◇</span><div><strong>Đối tác & hoa hồng</strong><small>Duyệt đối tác và xử lý chi trả.</small></div><span className={styles.commandValue}><b>{(overview?.metrics.pendingPartners ?? 0) + (overview?.metrics.pendingPayouts ?? 0)}</b><span>cần xử lý</span></span></a>
      </div></section>
      <div className="admin-overview-grid"><section className={`admin-queue-card ${queue.length ? "" : styles.queueEmpty}`}><div className="panel-head"><div><h2>Hàng đợi ưu tiên</h2><p className="muted-small">Thanh toán hoặc publish đang chờ phản hồi.</p></div><span>{queue.length}</span></div>{queue.length ? <div className="admin-mini-list">{queue.slice(0, 8).map((order) => <button onClick={() => { setTab("orders"); void loadOrder(order.id); }} key={order.id}><i>{order.paymentStatus === "SUBMITTED" ? "₫" : "✓"}</i><div><strong>{order.orderNumber}</strong><span>{order.user.displayName} · {order.wedding.title}</span></div><em>{order.paymentStatus === "SUBMITTED" ? "Đối soát" : "Duyệt thiệp"}</em></button>)}</div> : <div className="admin-empty"><strong>Hàng đợi đã sạch</strong><p>Không có tác vụ khẩn cấp.</p></div>}</section>
      <section className={`admin-process-card ${styles.processGuide}`}><small>QUY TRÌNH VẬN HÀNH</small><h2>Một đơn được xử lý như thế nào?</h2><ol><li><b>1</b><div><strong>Khách tạo đơn</strong><span>Hệ thống khóa giá, mã giảm giá và quyền lợi.</span></div></li><li><b>2</b><div><strong>Đối soát thanh toán</strong><span>Kiểm tra mã giao dịch trước khi xác nhận.</span></div></li><li><b>3</b><div><strong>Kích hoạt quyền lợi</strong><span>Giới hạn khách, ảnh và mẫu thiệp được cập nhật tự động.</span></div></li><li><b>4</b><div><strong>Duyệt xuất bản</strong><span>Gói cần kiểm duyệt sẽ vào hàng đợi xử lý.</span></div></li></ol></section>
    </div></div>}

    {tab === "orders" && <div className="admin-tab-panel" {...tabPanelProps("admin-tabs", "orders")}><AdminScreenHeading eyebrow="THANH TOÁN & ĐƠN HÀNG" title="Đơn hàng" description="Theo dõi thanh toán, kích hoạt gói và các yêu cầu hoàn tiền." count={orders.length} /><div className="admin-order-layout"><section className="admin-order-list"><div className="admin-list-tools"><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Tìm mã đơn, email hoặc wedding" aria-label="Tìm đơn hàng"/><button className="btn btn-secondary" onClick={async () => setOrders(await authRequest<AdminOrder[]>(`/admin/orders?search=${encodeURIComponent(search)}`))}>Tìm kiếm</button></div>{orders.length ? orders.map((order) => <button className={selected?.id === order.id ? "active" : ""} onClick={() => void loadOrder(order.id)} key={order.id}><div><small>{order.orderNumber} · {new Date(order.createdAt).toLocaleDateString("vi-VN")}</small><strong>{order.user.displayName}</strong><span>{order.wedding.title} · {order.plan.name}</span></div><aside><b>{formatMoney(order.totalAmount)}</b><em className={`commerce-status ${order.paymentStatus.toLowerCase()}`}>{paymentStatusLabels[order.paymentStatus] ?? statusLabel(paymentStatusLabels, order.paymentStatus)}</em></aside></button>) : <div className="admin-empty"><strong>Không có đơn hàng</strong><p>Thử tìm theo mã đơn, email hoặc wedding khác.</p></div>}</section>
      <section className="admin-order-detail">{selected ? <><header><div><small>{selected.orderNumber} · {new Date(selected.createdAt).toLocaleString("vi-VN")}</small><h2>{selected.user.displayName}</h2><p>{selected.user.email} · {selected.wedding.title}</p></div><strong>{formatMoney(selected.totalAmount)}</strong></header><div className="admin-detail-status"><span>Đơn hàng<b>{orderStatusLabels[selected.status] ?? statusLabel(orderStatusLabels, selected.status)}</b></span><span>Thanh toán<b>{paymentStatusLabels[selected.paymentStatus] ?? statusLabel(paymentStatusLabels, selected.paymentStatus)}</b></span><span>Kích hoạt<b>{statusLabel(fulfillmentStatusLabels, selected.fulfillmentStatus)}</b></span></div><div className="admin-payment-proof"><h3>Thông tin đối soát</h3><dl><div><dt>Mã giao dịch</dt><dd>{selected.payments[0]?.reference ?? "Chưa cung cấp"}</dd></div><div><dt>Gửi lúc</dt><dd>{selected.payments[0]?.submittedAt ? new Date(selected.payments[0].submittedAt).toLocaleString("vi-VN") : "—"}</dd></div></dl></div><label className="admin-note-input">Ghi chú xử lý<textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="Lý do xác nhận, từ chối hoặc hoàn tiền"/></label><div className="admin-order-actions">{selected.paymentStatus !== "CONFIRMED" && <><button className="btn btn-primary" disabled={busy} onClick={() => void action("confirm-payment", "Đã xác nhận thanh toán và kích hoạt gói.")}>Xác nhận thanh toán</button><button className="btn btn-secondary danger-text" disabled={busy} onClick={() => void action("reject-payment", "Đã yêu cầu khách bổ sung thông tin.")}>Yêu cầu bổ sung</button></>}{selected.paymentStatus === "CONFIRMED" && <button className="btn btn-secondary danger-text" disabled={busy} onClick={() => void (async () => { if (await confirm({ title: "Hoàn tiền và thu hồi quyền lợi?", description: "Wedding sẽ bị hạ về gói miễn phí và có thể bị tạm ngưng ngay sau thao tác này.", confirmLabel: "Hoàn tiền", tone: "danger" })) await action("refund", "Đã ghi nhận hoàn tiền và thu hồi quyền lợi."); })()}>Hoàn tiền & thu hồi</button>}</div><form className="admin-customer-note" onSubmit={(event) => void addNote(event)}><strong>Gửi cập nhật cho khách</strong><p>Nội dung sẽ hiển thị trong trang chi tiết đơn hàng.</p><button className="btn btn-secondary" disabled={busy || !note.trim()}>Gửi cập nhật</button></form><div className="admin-note-history">{selected.notes.map((item) => <article key={item.id}><small>{item.visibility} · {new Date(item.createdAt).toLocaleString("vi-VN")}</small><p>{item.body}</p></article>)}</div></> : <div className="admin-empty large"><div>◇</div><h3>Chọn một đơn hàng</h3><p>Chi tiết đối soát và thao tác vận hành sẽ xuất hiện tại đây.</p></div>}</section></div></div>}

    {(tab === "users" || tab === "weddings") && <section className="admin-directory admin-tab-panel" {...tabPanelProps("admin-tabs", tab)}><AdminScreenHeading eyebrow={tab === "users" ? "TÀI KHOẢN" : "KHÔNG GIAN CƯỚI"} title={tab === "users" ? "Khách hàng & người dùng" : "Quản lý đám cưới"} description={tab === "users" ? "Tra cứu tài khoản, vai trò và hoạt động của khách hàng." : "Theo dõi chủ sở hữu, gói dịch vụ và trạng thái kiểm duyệt."} count={tab === "users" ? users.length : weddings.length} /><div className="admin-list-tools"><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={tab === "users" ? "Tên hoặc email khách hàng" : "Tên đám cưới, slug hoặc email chủ sở hữu"} aria-label={tab === "users" ? "Tìm khách hàng" : "Tìm đám cưới"}/><button className="btn btn-primary" onClick={() => void (tab === "users" ? searchUsers() : searchWeddings())}>Tìm kiếm</button></div>{tab === "users" ? <div className="admin-directory-list">{users.length ? users.map((item) => <article key={item.id}><div className="avatar-circle">{item.displayName.charAt(0)}</div><div><strong>{item.displayName}</strong><span>{item.email}</span></div><em className="admin-role-badge">{roleLabels[item.role] ?? statusLabel(roleLabels, item.role)}</em><small>{item._count.weddings} đám cưới · {item._count.customerOrders} đơn · Tạo {new Date(item.createdAt).toLocaleDateString("vi-VN")}</small><b className={`admin-status-badge status-${item.status.toLowerCase()}`}>{userStatusLabels[item.status] ?? statusLabel(userStatusLabels, item.status)}</b></article>) : <div className="admin-empty"><strong>Không tìm thấy tài khoản</strong><p>Thử tìm bằng tên hoặc email khác.</p></div>}</div> : <div className="admin-directory-list wedding-dir">{weddings.length ? weddings.map((item) => <article key={item.id}><div className="avatar-circle">♥</div><div><strong>{item.title}</strong><span>/{item.slug} · {item.owner.displayName} · {item.owner.email}</span></div><em>{item.activePlan?.name ?? "Khởi đầu"}</em><small>{item._count.guests} khách · {item._count.events} sự kiện · {item._count.orders} đơn</small><div className="publish-actions">{item.publishReviewStatus === "REQUESTED" || item.publishReviewStatus === "IN_REVIEW" ? <><span className="admin-status-badge status-review">{statusLabel(publishReviewStatusLabels, item.publishReviewStatus)}</span><button className={`btn btn-primary ${styles.compactButton}`} disabled={busy} onClick={() => openPublishReview(item.id, item.title, "APPROVE")}>Duyệt</button><button className={`btn btn-secondary ${styles.compactButton}`} disabled={busy} onClick={() => openPublishReview(item.id, item.title, "CHANGES_REQUESTED")}>Yêu cầu sửa</button></> : <><span className={`admin-status-badge status-${item.publishReviewStatus.toLowerCase()}`}>{statusLabel(publishReviewStatusLabels, item.publishReviewStatus)}</span><span className="admin-wedding-state">{statusLabel(weddingStatusLabels, item.status)}</span></>}</div></article>) : <div className="admin-empty"><strong>Không có đám cưới phù hợp</strong><p>Thử tìm bằng tên, slug hoặc email chủ sở hữu khác.</p></div>}</div>}</section>}


    {tab === "coupons" && <div className="coupon-admin-layout" {...tabPanelProps("admin-tabs", "coupons")}>
      <section className="panel coupon-admin-list"><div className="panel-head"><div><h2>Mã giảm giá</h2><p className="muted-small">Quản lý mã áp dụng tại trang bảng giá. Theo dõi ưu đãi, lượt dùng và thời hạn.</p></div><button className="btn btn-primary" type="button" onClick={() => editCoupon()}>+ Tạo mã</button></div>
        {coupons.length ? <div className="coupon-admin-rows">{coupons.map((item) => <article key={item.id} className={!item.active ? "inactive" : ""}><div><span className="coupon-code">{item.code}</span><strong>{item.name}</strong><small>{item.discountType === "PERCENTAGE" ? `${item.discountValue}%` : formatMoney(item.discountValue)} · {item.planCodes.length ? item.planCodes.map((plan) => planLabels[plan] ?? plan).join(" · ") : "Tất cả gói"}</small></div><div><b>{item.usedCount}{item.usageLimit ? `/${item.usageLimit}` : ""} lượt dùng</b><small>{item.startsAt ? `Từ ${new Date(item.startsAt).toLocaleDateString("vi-VN")}` : "Bắt đầu ngay"} · {item.endsAt ? `đến ${new Date(item.endsAt).toLocaleDateString("vi-VN")}` : "Không giới hạn"}</small></div><div><span className={`admin-status-badge ${item.active ? "status-active" : "status-inactive"}`}>{item.active ? "Đang hoạt động" : "Đang tạm dừng"}</span><div className="coupon-admin-actions"><button className={`btn btn-secondary ${styles.compactButton}`} type="button" onClick={() => editCoupon(item)}>Sửa</button><button className={`btn btn-secondary ${styles.compactButton}`} type="button" disabled={busy || user?.role !== "ADMIN"} onClick={() => void toggleCoupon(item)}>{item.active ? "Tạm dừng" : "Kích hoạt"}</button></div></div></article>)}</div> : <div className="admin-empty"><strong>Chưa có mã giảm giá</strong><p>Tạo mã đầu tiên để áp dụng tại bảng giá.</p></div>}
      </section>
      <form className="panel coupon-admin-form" onSubmit={(event) => void saveCoupon(event)}><div><span className="eyebrow">{couponEditingId ? "CHỈNH SỬA" : "MÃ MỚI"}</span><h2>{couponEditingId ? "Cập nhật mã giảm giá" : "Tạo mã giảm giá"}</h2><p className="muted-small">Chỉ Admin được thay đổi mã; Staff vẫn có thể xem trạng thái sử dụng.</p></div><label>Mã giảm giá<input required minLength={3} maxLength={32} value={couponForm.code} disabled={user?.role !== "ADMIN"} onChange={(event) => setCouponForm({ ...couponForm, code: event.target.value.toUpperCase().replace(/[^A-Z0-9_-]/g, "") })} placeholder="WELCOME10" /></label><label>Tên chương trình<input required maxLength={120} value={couponForm.name} disabled={user?.role !== "ADMIN"} onChange={(event) => setCouponForm({ ...couponForm, name: event.target.value })} placeholder="Ưu đãi khách hàng mới" /></label><div className="form-grid two"><label>Loại giảm<select value={couponForm.discountType} disabled={user?.role !== "ADMIN"} onChange={(event) => setCouponForm({ ...couponForm, discountType: event.target.value as CouponForm["discountType"] })}><option value="PERCENTAGE">Phần trăm (%)</option><option value="FIXED">Số tiền cố định</option></select></label><label>Giá trị<input required type="number" min={1} max={couponForm.discountType === "PERCENTAGE" ? 100 : undefined} value={couponForm.discountValue} disabled={user?.role !== "ADMIN"} onChange={(event) => setCouponForm({ ...couponForm, discountValue: event.target.value })} /></label><label>Bắt đầu<input type="datetime-local" value={couponForm.startsAt} disabled={user?.role !== "ADMIN"} onChange={(event) => setCouponForm({ ...couponForm, startsAt: event.target.value })} /></label><label>Kết thúc<input type="datetime-local" value={couponForm.endsAt} disabled={user?.role !== "ADMIN"} onChange={(event) => setCouponForm({ ...couponForm, endsAt: event.target.value })} /></label><label>Giới hạn lượt<input type="number" min={1} value={couponForm.usageLimit} disabled={user?.role !== "ADMIN"} onChange={(event) => setCouponForm({ ...couponForm, usageLimit: event.target.value })} placeholder="Không giới hạn" /></label><label className="check-inline"><input type="checkbox" checked={couponForm.active} disabled={user?.role !== "ADMIN"} onChange={(event) => setCouponForm({ ...couponForm, active: event.target.checked })} /> Đang hoạt động</label></div><fieldset className="coupon-plan-fieldset" disabled={user?.role !== "ADMIN"}><legend>Áp dụng cho gói</legend>{planOptions.map((plan) => <label key={plan}><input type="checkbox" checked={couponForm.planCodes.includes(plan)} onChange={(event) => setCouponForm({ ...couponForm, planCodes: event.target.checked ? [...couponForm.planCodes, plan] : couponForm.planCodes.filter((item) => item !== plan) })} /> {planLabels[plan]}</label>)}</fieldset><button className="btn btn-primary full-button" disabled={busy || user?.role !== "ADMIN"}>{busy ? "Đang lưu..." : couponEditingId ? "Lưu thay đổi" : "Tạo mã"}</button></form>
    </div>}

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
  </div></AppShell>;
}

export default function AdminPage() { return <AuthGate><AdminContent /></AuthGate>; }
