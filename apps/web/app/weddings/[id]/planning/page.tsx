"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import { useParams } from "next/navigation";
import { AppShell } from "../../../../components/app-shell";
import { AuthGate } from "../../../../components/auth-gate";
import { useAuth } from "../../../../components/auth-provider";
import { Alert, Button, ConfirmDialog, DateTimeField, FormActions, FormErrorSummary, FormField, PageSkeleton, useToast, useUnsavedChangesGuard, type FormIssue } from "../../../../components/ui";
import { ApiError } from "../../../../lib/api";
import {
  categoryLabels,
  priorityLabels,
  statusLabels,
  toDateTimeLocal,
  type PlanningOverview,
  type PlanningTask,
  type PlanningTaskCategory,
  type PlanningTaskPriority,
  type PlanningTaskStatus,
} from "../../../../lib/planning";

type Filter = "ALL" | "OVERDUE" | "UPCOMING" | "DONE";

interface TaskDraft {
  title: string;
  description: string;
  category: PlanningTaskCategory;
  priority: PlanningTaskPriority;
  dueAt: string;
  assigneeName: string;
  reminderEnabled: boolean;
  reminderDaysBefore: number;
}

const blankDraft = (): TaskDraft => ({
  title: "",
  description: "",
  category: "OTHER",
  priority: "NORMAL",
  dueAt: "",
  assigneeName: "",
  reminderEnabled: true,
  reminderDaysBefore: 3,
});

function taskDateLabel(value: string | null): string {
  if (!value) return "Chưa đặt hạn";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Ngày không hợp lệ";

  return date.toLocaleString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function PlanningContent() {
  const params = useParams<{ id: string }>();
  const weddingId = params.id;
  const { authRequest } = useAuth();
  const [data, setData] = useState<PlanningOverview | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [filter, setFilter] = useState<Filter>("ALL");
  const [category, setCategory] = useState<PlanningTaskCategory | "ALL">("ALL");
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState<TaskDraft>(blankDraft());
  const [draftBaseline, setDraftBaseline] = useState<TaskDraft>(blankDraft());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [issues, setIssues] = useState<FormIssue[]>([]);
  const [deleteTarget, setDeleteTarget] = useState<PlanningTask | null>(null);
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const { notify } = useToast();

  const load = useCallback(async () => {
    try {
      const response = await authRequest<PlanningOverview>(`/weddings/${weddingId}/planning`);
      setData(response);
      setError("");
    } catch (reason) {
      setError(reason instanceof ApiError ? reason.message : "Không thể tải kế hoạch cưới");
    } finally {
      setLoading(false);
    }
  }, [authRequest, weddingId]);

  useEffect(() => { void load(); }, [load]);

  const canEdit = data?.access === "OWNER" || data?.access === "EDIT";
  const draftDirty = useMemo(() => JSON.stringify(draft) !== JSON.stringify(draftBaseline), [draft, draftBaseline]);
  const guard = useUnsavedChangesGuard(Boolean(canEdit) && draftDirty && !busy);
  const now = useMemo(() => new Date(), []);
  const upcomingLimit = useMemo(() => new Date(now.getTime() + 14 * 86_400_000), [now]);

  const filtered = useMemo(() => {
    if (!data) return [];
    const needle = query.trim().toLocaleLowerCase("vi-VN");
    return data.tasks.filter((task) => {
      if (category !== "ALL" && task.category !== category) return false;
      if (needle && !`${task.title} ${task.description ?? ""} ${task.assigneeName ?? ""}`.toLocaleLowerCase("vi-VN").includes(needle)) return false;
      const due = task.dueAt ? new Date(task.dueAt) : null;
      if (filter === "OVERDUE") return !["DONE", "CANCELED"].includes(task.status) && due && due < now;
      if (filter === "UPCOMING") return !["DONE", "CANCELED"].includes(task.status) && due && due >= now && due <= upcomingLimit;
      if (filter === "DONE") return task.status === "DONE";
      return task.status !== "CANCELED";
    });
  }, [category, data, filter, now, query, upcomingLimit]);

  function flash(message: string): void {
    setSuccess(message);
    notify({ tone: "success", title: message });
    window.setTimeout(() => setSuccess(""), 3500);
  }

  async function bootstrap(): Promise<void> {
    setBusy(true); setError("");
    try {
      const result = await authRequest<{ created: number; skipped: number }>(`/weddings/${weddingId}/planning/bootstrap`, { method: "POST" });
      await load();
      flash(result.created ? `Đã thêm ${result.created} công việc theo ngày cưới.` : "Timeline chuẩn đã có đầy đủ.");
    } catch (reason) {
      setError(reason instanceof ApiError ? reason.message : "Không thể tạo timeline tự động");
    } finally { setBusy(false); }
  }

  async function saveTask(event: FormEvent): Promise<void> {
    event.preventDefault();
    const nextIssues: FormIssue[] = [];
    if (draft.title.trim().length < 3) nextIssues.push({ fieldId: "planning-title", message: "Tên công việc cần ít nhất 3 ký tự." });
    if (draft.dueAt && Number.isNaN(new Date(draft.dueAt).getTime())) nextIssues.push({ fieldId: "planning-dueAt", message: "Hạn hoàn thành không hợp lệ." });
    setIssues(nextIssues);
    if (nextIssues.length) return;
    setBusy(true); setError("");
    const wasEditing = Boolean(editingId);
    try {
      const payload = { ...draft, dueAt: draft.dueAt ? new Date(draft.dueAt).toISOString() : null };
      await authRequest(`/weddings/${weddingId}/planning/tasks${editingId ? `/${editingId}` : ""}`, {
        method: editingId ? "PATCH" : "POST",
        body: JSON.stringify(payload),
      });
      const empty = blankDraft();
      setDraft(empty);
      setDraftBaseline(empty);
      setEditingId(null);
      setSavedAt(new Date());
      await load();
      flash(wasEditing ? "Đã cập nhật công việc." : "Đã thêm công việc mới.");
    } catch (reason) {
      setError(reason instanceof ApiError ? reason.message : "Không thể lưu công việc");
    } finally { setBusy(false); }
  }

  function edit(task: PlanningTask): void {
    setEditingId(task.id);
    const nextDraft = {
      title: task.title,
      description: task.description ?? "",
      category: task.category,
      priority: task.priority,
      dueAt: toDateTimeLocal(task.dueAt),
      assigneeName: task.assigneeName ?? "",
      reminderEnabled: task.reminderEnabled,
      reminderDaysBefore: task.reminderDaysBefore,
    };
    setDraft(nextDraft);
    setDraftBaseline(nextDraft);
    setIssues([]);
    document.getElementById("planning-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function updateStatus(task: PlanningTask, status: PlanningTaskStatus): Promise<void> {
    setBusy(true); setError("");
    try {
      await authRequest(`/weddings/${weddingId}/planning/tasks/${task.id}`, { method: "PATCH", body: JSON.stringify({ status }) });
      await load();
      flash(status === "DONE" ? "Tuyệt vời! Công việc đã hoàn tất." : `Đã chuyển sang “${statusLabels[status]}”.`);
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể cập nhật trạng thái"); }
    finally { setBusy(false); }
  }

  async function confirmRemove(): Promise<void> {
    if (!deleteTarget) return;
    setBusy(true); setError("");
    try {
      await authRequest(`/weddings/${weddingId}/planning/tasks/${deleteTarget.id}`, { method: "DELETE" });
      if (editingId === deleteTarget.id) {
        const empty = blankDraft();
        setEditingId(null); setDraft(empty); setDraftBaseline(empty);
      }
      setDeleteTarget(null);
      await load();
      flash("Đã xóa công việc.");
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể xóa công việc"); }
    finally { setBusy(false); }
  }

  if (loading) return <AppShell active="planning" weddingId={weddingId}><PageSkeleton /></AppShell>;
  if (!data) return <AppShell active="planning" weddingId={weddingId}><div className="friendly-error-card"><h1>Chưa thể mở kế hoạch</h1><p>{error || "Vui lòng thử lại sau."}</p><Button onClick={() => void load()}>Thử lại</Button></div></AppShell>;

  return <AppShell active="planning" weddingId={weddingId}>
    <header className="planning-hero">
      <div>
        <a className="back-link" href={`/weddings/${weddingId}`}>← Quay lại wedding workspace</a>
        <span className="eyebrow">Wedding Planning</span>
        <h1>Kế hoạch cưới của bạn</h1>
        <p>{data.wedding.title} · Theo dõi từng việc quan trọng mà không bị quá tải.</p>
      </div>
      {canEdit ? <Button disabled={busy} leadingIcon={<span aria-hidden="true">✦</span>} onClick={() => void bootstrap()}>Tạo timeline thông minh</Button> : null}
    </header>

    {error ? <Alert tone="error" title="Chưa thể hoàn tất thao tác">{error}</Alert> : null}
    {success ? <Alert tone="success">{success}</Alert> : null}

    <section className="planning-metrics" aria-label="Tiến độ kế hoạch">
      <article className="planning-progress-card"><div className="planning-progress-ring" role="progressbar" aria-label="Tiến độ kế hoạch cưới" aria-valuemin={0} aria-valuemax={100} aria-valuenow={data.metrics.progress} style={{ "--progress": `${data.metrics.progress * 3.6}deg` } as CSSProperties}><strong>{data.metrics.progress}%</strong><span>hoàn thành</span></div><div><span>Tiến độ tổng thể</span><strong>{data.metrics.done}/{Math.max(0, data.metrics.total)}</strong><p>Mỗi việc nhỏ được hoàn thành sẽ giúp ngày cưới nhẹ nhàng hơn.</p></div></article>
      <article><span>Đang thực hiện</span><strong>{data.metrics.active}</strong><small>công việc còn lại</small></article>
      <article className={data.metrics.overdue ? "attention" : ""}><span>Quá hạn</span><strong>{data.metrics.overdue}</strong><small>{data.metrics.overdue ? "cần ưu tiên xử lý" : "mọi việc đúng tiến độ"}</small></article>
      <article><span>14 ngày tới</span><strong>{data.metrics.dueSoon}</strong><small>công việc sắp đến hạn</small></article>
    </section>

    <div className="planning-layout">
      <section className="planning-board panel">
        <div className="planning-toolbar">
          <div><h2>Danh sách công việc</h2><p className="muted-small">Lọc nhanh theo hạn, nhóm việc hoặc người phụ trách.</p></div>
          <div className="planning-filter-tabs" role="group" aria-label="Lọc kế hoạch">
            {([ ["ALL", "Tất cả"], ["OVERDUE", "Quá hạn"], ["UPCOMING", "Sắp đến hạn"], ["DONE", "Hoàn tất"] ] as Array<[Filter, string]>).map(([value, label]) => <button type="button" aria-pressed={filter === value} className={filter === value ? "active" : ""} onClick={() => setFilter(value)} key={value}>{label}</button>)}
          </div>
        </div>
        <div className="planning-search-row">
          <label className="search-field"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm công việc hoặc người phụ trách..." aria-label="Tìm công việc" /></label>
          <select value={category} onChange={(event) => setCategory(event.target.value as PlanningTaskCategory | "ALL")} aria-label="Lọc nhóm công việc"><option value="ALL">Tất cả nhóm việc</option>{data.categories.map((item) => <option key={item} value={item}>{categoryLabels[item]}</option>)}</select>
        </div>

        <div className="planning-task-list">
          {filtered.map((task) => {
            const overdue = task.dueAt && !["DONE", "CANCELED"].includes(task.status) && new Date(task.dueAt) < now;
            return <article className={`planning-task ${task.status === "DONE" ? "done" : ""} ${overdue ? "overdue" : ""}`} key={task.id}>
              <button type="button" className="planning-check" disabled={!canEdit || busy} aria-pressed={task.status === "DONE"} aria-label={task.status === "DONE" ? "Mở lại công việc" : "Đánh dấu hoàn tất"} onClick={() => void updateStatus(task, task.status === "DONE" ? "TODO" : "DONE")}><span aria-hidden="true">{task.status === "DONE" ? "✓" : ""}</span></button>
              <div className="planning-task-main">
                <div className="planning-task-title"><strong>{task.title}</strong><span className={`priority priority-${task.priority.toLowerCase()}`}>{priorityLabels[task.priority]}</span></div>
                {task.description && <p>{task.description}</p>}
                <div className="planning-task-meta"><span>◷ {taskDateLabel(task.dueAt)}</span><span>▦ {categoryLabels[task.category]}</span>{task.assigneeName && <span>◎ {task.assigneeName}</span>}{task.reminderEnabled && <span>⌁ nhắc trước {task.reminderDaysBefore} ngày</span>}</div>
              </div>
              {canEdit && <div className="planning-task-actions"><select aria-label={`Trạng thái ${task.title}`} value={task.status} disabled={busy} onChange={(event) => void updateStatus(task, event.target.value as PlanningTaskStatus)}><option value="TODO">Chưa bắt đầu</option><option value="IN_PROGRESS">Đang làm</option><option value="DONE">Hoàn tất</option><option value="CANCELED">Đã hủy</option></select><button type="button" onClick={() => edit(task)}>Sửa</button><button type="button" className="danger" onClick={() => setDeleteTarget(task)}>Xóa</button></div>}
            </article>;
          })}
        </div>
        {!filtered.length && <div className="empty-panel"><div className="empty-icon">✓</div><h3>Không có công việc phù hợp</h3><p>Thử đổi bộ lọc hoặc thêm một công việc mới ở biểu mẫu bên cạnh.</p></div>}
      </section>

      <aside className="planning-form-card panel" id="planning-form">
        <div className="panel-head"><div><span className="eyebrow">{editingId ? "Chỉnh sửa" : "Thêm nhanh"}</span><h2>{editingId ? "Cập nhật công việc" : "Công việc mới"}</h2><p className="muted-small">Ghi rõ việc cần làm, hạn và người phụ trách.</p></div></div>
        <form className="planning-form" onSubmit={(event) => void saveTask(event)} noValidate>
          <FormErrorSummary issues={issues} />
          <FormField id="planning-title" label="Tên công việc" required error={issues.find((item) => item.fieldId === "planning-title")?.message} helperText="Viết ngắn gọn, bắt đầu bằng một động từ để dễ hành động.">
            <input minLength={3} maxLength={120} value={draft.title} onChange={(event) => { setDraft({ ...draft, title: event.target.value }); setIssues((current) => current.filter((item) => item.fieldId !== "planning-title")); }} placeholder="Ví dụ: Chốt danh sách khách nhà gái" />
          </FormField>
          <FormField id="planning-description" label="Mô tả" helperText="Ghi chú đủ để người phụ trách hiểu việc cần làm.">
            <textarea rows={4} maxLength={1000} value={draft.description} onChange={(event) => setDraft({ ...draft, description: event.target.value })} placeholder="Mô tả đầu việc, tài liệu hoặc kết quả mong đợi…" />
          </FormField>
          <div className="form-grid two">
            <FormField id="planning-category" label="Nhóm việc" required><select value={draft.category} onChange={(event) => setDraft({ ...draft, category: event.target.value as PlanningTaskCategory })}>{data.categories.map((item) => <option value={item} key={item}>{categoryLabels[item]}</option>)}</select></FormField>
            <FormField id="planning-priority" label="Mức ưu tiên" required><select value={draft.priority} onChange={(event) => setDraft({ ...draft, priority: event.target.value as PlanningTaskPriority })}>{data.priorities.map((item) => <option value={item} key={item}>{priorityLabels[item]}</option>)}</select></FormField>
          </div>
          <DateTimeField id="planning-dueAt" label="Hạn hoàn thành" value={draft.dueAt} onChange={(event) => { setDraft({ ...draft, dueAt: event.target.value }); setIssues((current) => current.filter((item) => item.fieldId !== "planning-dueAt")); }} error={issues.find((item) => item.fieldId === "planning-dueAt")?.message} helperText="Thời gian hiển thị theo múi giờ trên thiết bị của bạn." />
          <FormField id="planning-assignee" label="Người phụ trách"><input maxLength={100} value={draft.assigneeName} onChange={(event) => setDraft({ ...draft, assigneeName: event.target.value })} placeholder="Ví dụ: Minh, Anh, chị Lan…" /></FormField>
          <label className="planning-reminder-toggle"><input type="checkbox" checked={draft.reminderEnabled} onChange={(event) => setDraft({ ...draft, reminderEnabled: event.target.checked })} /><span><strong>Bật nhắc việc</strong><small>Gửi thông báo và email trước ngày đến hạn.</small></span></label>
          {draft.reminderEnabled ? <FormField id="planning-reminder" label="Nhắc trước"><select value={draft.reminderDaysBefore} onChange={(event) => setDraft({ ...draft, reminderDaysBefore: Number(event.target.value) })}><option value={0}>Đúng ngày đến hạn</option><option value={1}>1 ngày</option><option value={3}>3 ngày</option><option value={7}>7 ngày</option><option value={14}>14 ngày</option><option value={30}>30 ngày</option></select></FormField> : null}
          <FormActions dirty={draftDirty} saving={busy} savedAt={savedAt}>
            {editingId ? <Button type="button" variant="secondary" onClick={() => { const empty = blankDraft(); setEditingId(null); setDraft(empty); setDraftBaseline(empty); setIssues([]); }}>Hủy chỉnh sửa</Button> : null}
            <Button type="submit" loading={busy} loadingLabel="Đang lưu công việc…" disabled={!canEdit}>{editingId ? "Lưu thay đổi" : "Thêm công việc"}</Button>
          </FormActions>
        </form>
        {!canEdit && <div className="view-only-note">Bạn đang ở chế độ chỉ xem. Hãy liên hệ chủ wedding để được cấp quyền chỉnh sửa.</div>}
      </aside>
    </div>
    <ConfirmDialog open={Boolean(deleteTarget)} title="Xóa công việc?" description={deleteTarget ? <>Công việc <strong>“{deleteTarget.title}”</strong> sẽ bị xóa vĩnh viễn khỏi kế hoạch cưới.</> : ""} confirmLabel="Xóa công việc" tone="danger" loading={busy} onConfirm={() => void confirmRemove()} onClose={() => setDeleteTarget(null)} />
    {guard.dialog}
  </AppShell>;
}

export default function PlanningPage() {
  return <AuthGate><PlanningContent /></AuthGate>;
}
