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

export function Alert({ tone = "info", title, children, requestId, className }: { tone?: AlertTone; title?: string; children: ReactNode; requestId?: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  async function copyRequestId() {
    if (!requestId) return;
    try {
      await navigator.clipboard.writeText(requestId);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }
  return (
    <div className={cn("ui-alert", `ui-alert-${tone}`, className)} role={tone === "error" ? "alert" : "status"} aria-live={tone === "error" ? "assertive" : "polite"}>
      <span className="ui-alert-icon" aria-hidden="true">{alertIcons[tone]}</span>
      <div className="ui-alert-content">
        {title ? <strong>{title}</strong> : null}
        <div>{children}</div>
        {requestId ? <div className="ui-request-id"><code>Mã hỗ trợ: {requestId}</code><button type="button" onClick={() => void copyRequestId()}>{copied ? "Đã sao chép" : "Sao chép"}</button></div> : null}
      </div>
    </div>
  );
}

export function EmptyState({ icon = "◇", title, description, primaryAction, secondaryAction, className }: {
  icon?: ReactNode;
  title: string;
  description: ReactNode;
  primaryAction?: { label: string; href?: string; onClick?: () => void };
  secondaryAction?: { label: string; href?: string; onClick?: () => void };
  className?: string;
}) {
  const action = (item: NonNullable<typeof primaryAction>, primary: boolean) => item.href
    ? <ButtonLink href={item.href} variant={primary ? "primary" : "secondary"}>{item.label}</ButtonLink>
    : <Button variant={primary ? "primary" : "secondary"} onClick={item.onClick}>{item.label}</Button>;
  return <section className={cn("ui-empty-state", className)}><div className="ui-empty-icon" aria-hidden="true">{icon}</div><h2>{title}</h2><p>{description}</p>{primaryAction || secondaryAction ? <div className="ui-empty-actions">{primaryAction ? action(primaryAction, true) : null}{secondaryAction ? action(secondaryAction, false) : null}</div> : null}</section>;
}

export function ErrorState({ title = "Chưa thể tải nội dung", description, onRetry, requestId, homeHref = "/dashboard" }: {
  title?: string;
  description: ReactNode;
  onRetry?: () => void;
  requestId?: string;
  homeHref?: string;
}) {
  return <section className="ui-error-state"><div className="ui-error-state-icon" aria-hidden="true">!</div><h1>{title}</h1><p>{description}</p>{requestId ? <code>Mã hỗ trợ: {requestId}</code> : null}<div className="ui-error-state-actions">{onRetry ? <Button onClick={onRetry}>Thử lại</Button> : null}<ButtonLink href={homeHref} variant="secondary">Về Dashboard</ButtonLink></div></section>;
}
