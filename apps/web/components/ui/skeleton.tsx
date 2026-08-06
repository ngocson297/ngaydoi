import { cn } from "./cn";

export function Skeleton({ className, width, height }: { className?: string; width?: string | number; height?: string | number }) {
  return <span className={cn("ui-skeleton", className)} style={{ width, height }} aria-hidden="true" />;
}

export function CardSkeleton({ lines = 3 }: { lines?: number }) {
  return <div className="ui-skeleton-card" aria-hidden="true"><Skeleton className="ui-skeleton-title" />{Array.from({ length: lines }, (_, index) => <Skeleton key={index} className={index === lines - 1 ? "ui-skeleton-line short" : "ui-skeleton-line"} />)}</div>;
}

export function MetricSkeleton({ count = 4 }: { count?: number }) {
  return <div className="ui-metric-skeleton" aria-hidden="true">{Array.from({ length: count }, (_, index) => <div key={index}><Skeleton width="48%" height={13} /><Skeleton width="34%" height={31} /></div>)}</div>;
}

export function ListSkeleton({ rows = 4, withAvatar = true }: { rows?: number; withAvatar?: boolean }) {
  return <div className="ui-list-skeleton" aria-hidden="true">{Array.from({ length: rows }, (_, index) => <div key={index}>{withAvatar ? <Skeleton className="ui-list-skeleton-avatar" /> : null}<span><Skeleton width={`${70 - (index % 3) * 8}%`} height={15} /><Skeleton width={`${46 + (index % 2) * 9}%`} height={12} /></span><Skeleton width={74} height={28} /></div>)}</div>;
}

export function TableSkeleton({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return <div className="ui-table-skeleton" aria-hidden="true">{Array.from({ length: rows }, (_, row) => <div key={row}>{Array.from({ length: columns }, (_, column) => <Skeleton key={column} width={`${64 + ((row + column) % 3) * 8}%`} height={13} />)}</div>)}</div>;
}

export function DetailPageSkeleton() {
  return <div className="ui-detail-skeleton" role="status" aria-label="Đang tải chi tiết" aria-busy="true"><div className="ui-detail-skeleton-head"><span><Skeleton width={110} height={12} /><Skeleton width="min(520px, 84vw)" height={38} /><Skeleton width={260} height={14} /></span><CardSkeleton lines={2} /></div><div className="ui-detail-skeleton-grid"><CardSkeleton lines={5} /><CardSkeleton lines={4} /></div><span className="sr-only">Đang tải chi tiết…</span></div>;
}

export function PageSkeleton({ cards = 3 }: { cards?: number }) {
  return <div className="ui-page-skeleton" role="status" aria-label="Đang tải nội dung" aria-busy="true"><div><Skeleton className="ui-skeleton-kicker" /><Skeleton className="ui-skeleton-heading" /><Skeleton className="ui-skeleton-copy" /></div><MetricSkeleton /><div className="ui-skeleton-grid">{Array.from({ length: cards }, (_, index) => <CardSkeleton key={index} />)}</div><span className="sr-only">Đang tải nội dung…</span></div>;
}
