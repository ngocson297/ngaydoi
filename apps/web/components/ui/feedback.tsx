"use client";

import { useState, type ReactNode } from "react";
import { Button, ButtonLink } from "./button";
import { cn } from "./cn";

type AlertTone = "info" | "success" | "warning" | "error";

const alertIcons: Record<AlertTone, string> = {
  info: "i",
  success: "✓",
  warning: "!",
  error: "!",
};

export function RequestId({ value, compact = false }: { value: string; compact?: boolean }) {
  const [copied, setCopied] = useState(false);
  async function copyRequestId() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }
  return (
    <div className={cn("ui-request-id", compact && "compact")}>
      <code>Mã hỗ trợ: {value}</code>
      <button type="button" onClick={() => void copyRequestId()} aria-label={`Sao chép mã hỗ trợ ${value}`}>
        {copied ? "Đã sao chép" : "Sao chép"}
      </button>
    </div>
  );
}

export function Alert({ tone = "info", title, children, requestId, className }: { tone?: AlertTone; title?: string; children: ReactNode; requestId?: string; className?: string }) {
  return (
    <div className={cn("ui-alert", `ui-alert-${tone}`, className)} role={tone === "error" ? "alert" : "status"} aria-live={tone === "error" ? "assertive" : "polite"}>
      <span className="ui-alert-icon" aria-hidden="true">{alertIcons[tone]}</span>
      <div className="ui-alert-content">
        {title ? <strong>{title}</strong> : null}
        <div>{children}</div>
        {requestId ? <RequestId value={requestId} compact /> : null}
      </div>
    </div>
  );
}

type StateAction = { label: string; href?: string; onClick?: () => void };

function StateActionButton({ item, primary }: { item: StateAction; primary: boolean }) {
  return item.href
    ? <ButtonLink href={item.href} variant={primary ? "primary" : "secondary"}>{item.label}</ButtonLink>
    : <Button variant={primary ? "primary" : "secondary"} onClick={item.onClick}>{item.label}</Button>;
}

export function EmptyState({ icon = "◇", title, description, primaryAction, secondaryAction, className, compact = false }: {
  icon?: ReactNode;
  title: string;
  description: ReactNode;
  primaryAction?: StateAction;
  secondaryAction?: StateAction;
  className?: string;
  compact?: boolean;
}) {
  return (
    <section className={cn("ui-empty-state", compact && "compact", className)}>
      <div className="ui-empty-icon" aria-hidden="true">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      {primaryAction || secondaryAction ? (
        <div className="ui-empty-actions">
          {primaryAction ? <StateActionButton item={primaryAction} primary /> : null}
          {secondaryAction ? <StateActionButton item={secondaryAction} primary={false} /> : null}
        </div>
      ) : null}
    </section>
  );
}

export function ErrorState({ title = "Chưa thể tải nội dung", description, onRetry, requestId, homeHref = "/dashboard", homeLabel = "Về Dashboard", compact = false }: {
  title?: string;
  description: ReactNode;
  onRetry?: () => void;
  requestId?: string;
  homeHref?: string;
  homeLabel?: string;
  compact?: boolean;
}) {
  return (
    <section className={cn("ui-error-state", compact && "compact")} role="alert" aria-live="assertive">
      <div className="ui-error-state-icon" aria-hidden="true">!</div>
      <h1>{title}</h1>
      <p>{description}</p>
      {requestId ? <RequestId value={requestId} /> : null}
      <div className="ui-error-state-actions">
        {onRetry ? <Button onClick={onRetry}>Thử lại</Button> : null}
        <ButtonLink href={homeHref} variant="secondary">{homeLabel}</ButtonLink>
      </div>
    </section>
  );
}

export function PermissionState({ description = "Tài khoản hiện tại không có quyền truy cập khu vực này.", homeHref = "/dashboard" }: { description?: ReactNode; homeHref?: string }) {
  return (
    <EmptyState
      icon="⌁"
      title="Không có quyền truy cập"
      description={description}
      primaryAction={{ label: "Về Dashboard", href: homeHref }}
      secondaryAction={{ label: "Mở tài khoản", href: "/account" }}
    />
  );
}

export function InlineErrorState({ description, onRetry, requestId }: { description: ReactNode; onRetry?: () => void; requestId?: string }) {
  return (
    <div className="ui-inline-error" role="alert">
      <span aria-hidden="true">!</span>
      <div><strong>Chưa thể tải dữ liệu</strong><p>{description}</p>{requestId ? <RequestId value={requestId} compact /> : null}</div>
      {onRetry ? <Button variant="secondary" size="sm" onClick={onRetry}>Thử lại</Button> : null}
    </div>
  );
}
