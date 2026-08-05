"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Button } from "./button";
import { ConfirmDialog } from "./dialog";

export interface FormIssue {
  fieldId?: string;
  message: string;
}

export function FormErrorSummary({ title = "Vui lòng kiểm tra lại thông tin", issues }: { title?: string; issues: FormIssue[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const key = useMemo(() => issues.map((item) => `${item.fieldId ?? ""}:${item.message}`).join("|"), [issues]);

  useEffect(() => {
    if (issues.length) ref.current?.focus();
  }, [issues.length, key]);

  if (!issues.length) return null;

  function focusField(fieldId?: string): void {
    if (!fieldId) return;
    const field = document.getElementById(fieldId);
    field?.focus();
    field?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="ui-form-error-summary" role="alert" aria-live="assertive" tabIndex={-1} ref={ref}>
      <div className="ui-form-error-summary-icon" aria-hidden="true">!</div>
      <div>
        <strong>{title}</strong>
        <ul>
          {issues.map((issue, index) => (
            <li key={`${issue.fieldId ?? "form"}-${index}`}>
              {issue.fieldId ? (
                <button type="button" onClick={() => focusField(issue.fieldId)}>{issue.message}</button>
              ) : issue.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function FormSaveState({ dirty, saving = false, savedAt }: { dirty: boolean; saving?: boolean; savedAt?: Date | null }) {
  const label = saving
    ? "Đang lưu thay đổi…"
    : dirty
      ? "Có thay đổi chưa lưu"
      : savedAt
        ? `Đã lưu lúc ${savedAt.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit", hour12: false })}`
        : "Mọi thay đổi đã được lưu";
  return <span className={`ui-form-save-state ${saving ? "saving" : dirty ? "dirty" : "saved"}`} aria-live="polite"><span aria-hidden="true" />{label}</span>;
}

export function FormActions({
  children,
  dirty,
  saving = false,
  savedAt,
}: {
  children: ReactNode;
  dirty?: boolean;
  saving?: boolean;
  savedAt?: Date | null;
}) {
  return (
    <div className="ui-form-actions">
      {typeof dirty === "boolean" ? <FormSaveState dirty={dirty} saving={saving} savedAt={savedAt} /> : <span />}
      <div className="ui-form-actions-buttons">{children}</div>
    </div>
  );
}

interface PendingNavigation {
  href: string;
}

export function useUnsavedChangesGuard(dirty: boolean, options?: { enabled?: boolean }) {
  const enabled = options?.enabled ?? true;
  const [pending, setPending] = useState<PendingNavigation | null>(null);
  const bypassRef = useRef(false);
  const pendingActionRef = useRef<(() => void) | null>(null);
  const dirtyRef = useRef(dirty);
  dirtyRef.current = dirty;

  useEffect(() => {
    if (!enabled) return;
    const onBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!dirtyRef.current || bypassRef.current) return;
      event.preventDefault();
      event.returnValue = "";
    };
    const onDocumentClick = (event: MouseEvent) => {
      if (!dirtyRef.current || bypassRef.current || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target instanceof Element ? event.target.closest("a[href]") as HTMLAnchorElement | null : null;
      if (!target || target.target === "_blank" || target.hasAttribute("download")) return;
      const next = new URL(target.href, window.location.href);
      if (next.origin !== window.location.origin || next.href === window.location.href || next.hash && next.pathname === window.location.pathname && next.search === window.location.search) return;
      event.preventDefault();
      setPending({ href: next.href });
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    document.addEventListener("click", onDocumentClick, true);
    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
      document.removeEventListener("click", onDocumentClick, true);
    };
  }, [enabled]);

  const allowNavigation = useCallback((navigate?: () => void) => {
    bypassRef.current = true;
    setPending(null);
    navigate?.();
  }, []);

  const stay = useCallback(() => { pendingActionRef.current = null; setPending(null); }, []);
  const requestAction = useCallback((action: () => void) => {
    if (!dirtyRef.current || bypassRef.current) { action(); return; }
    pendingActionRef.current = action;
    setPending({ href: "" });
  }, []);
  const leave = useCallback(() => {
    if (!pending) return;
    bypassRef.current = true;
    const action = pendingActionRef.current;
    pendingActionRef.current = null;
    setPending(null);
    if (action) { bypassRef.current = false; action(); return; }
    window.location.assign(pending.href);
  }, [pending]);

  const dialog = (
    <ConfirmDialog
      open={Boolean(pending)}
      title="Bạn có thay đổi chưa lưu"
      description="Nếu rời trang lúc này, những thông tin vừa chỉnh sửa sẽ không được lưu lại."
      confirmLabel="Rời mà không lưu"
      cancelLabel="Tiếp tục chỉnh sửa"
      tone="danger"
      onConfirm={leave}
      onClose={stay}
    />
  );

  return { allowNavigation, requestAction, dialog, pending: Boolean(pending) };
}

export function UnsavedChangesNotice({ dirty }: { dirty: boolean }) {
  if (!dirty) return null;
  return <div className="ui-unsaved-notice" role="status"><span aria-hidden="true">●</span><strong>Chưa lưu</strong><span>Hãy lưu trước khi chuyển sang phần khác.</span></div>;
}
