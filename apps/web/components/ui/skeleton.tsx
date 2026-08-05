import { cn } from "./cn";

export function Skeleton({ className, width, height }: { className?: string; width?: string | number; height?: string | number }) {
  return <span className={cn("ui-skeleton", className)} style={{ width, height }} aria-hidden="true" />;
}

export function CardSkeleton({ lines = 3 }: { lines?: number }) {
  return <div className="ui-skeleton-card" aria-hidden="true"><Skeleton className="ui-skeleton-title" />{Array.from({ length: lines }, (_, index) => <Skeleton key={index} className={index === lines - 1 ? "ui-skeleton-line short" : "ui-skeleton-line"} />)}</div>;
}

export function PageSkeleton() {
  return <main className="ui-page-skeleton" aria-label="Đang tải nội dung" aria-busy="true"><div><Skeleton className="ui-skeleton-kicker" /><Skeleton className="ui-skeleton-heading" /><Skeleton className="ui-skeleton-copy" /></div><div className="ui-skeleton-grid"><CardSkeleton /><CardSkeleton /><CardSkeleton /></div><span className="sr-only">Đang tải nội dung…</span></main>;
}
