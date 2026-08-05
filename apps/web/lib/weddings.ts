export type WeddingStatus = "DRAFT" | "READY_FOR_REVIEW" | "PUBLISHED" | "SUSPENDED" | "EXPIRED" | "ARCHIVED";
export type WeddingAccess = "OWNER" | "EDIT" | "VIEW";
export type WeddingSide = "SHARED" | "BRIDE" | "GROOM";
export type EventType = "ENGAGEMENT" | "ANCESTOR_CEREMONY" | "WEDDING_CEREMONY" | "RECEPTION" | "OTHER";

export interface WeddingEvent {
  id: string;
  type: EventType;
  side: WeddingSide;
  title: string;
  startsAt: string;
  endsAt: string | null;
  timezone: string;
  venueName: string;
  address: string;
  mapUrl: string | null;
  dressCode: string | null;
  note: string | null;
  sortOrder: number;
}

export interface WeddingSummary {
  id: string;
  ownerId: string;
  slug: string;
  title: string;
  brideName: string;
  groomName: string;
  mainDate: string | null;
  status: WeddingStatus;
  timezone: string;
  updatedAt: string;
  access: WeddingAccess;
  events: WeddingEvent[];
  activePlan: { code: string; name: string; guestLimit: number; mediaLimit: number; requiresPublishReview?: boolean } | null;
  publishReviewStatus: "NOT_REQUESTED" | "REQUESTED" | "IN_REVIEW" | "APPROVED" | "CHANGES_REQUESTED" | "REJECTED";
  _count: { events: number; guests: number; collaborators: number; orders: number };
}

export interface Collaborator {
  id: string;
  email: string;
  permission: "VIEW" | "EDIT";
  status: "PENDING" | "ACCEPTED" | "REVOKED" | "EXPIRED";
  token: string;
  expiresAt: string;
  acceptedAt: string | null;
  revokedAt: string | null;
  createdAt: string;
  user: { id: string; displayName: string; email: string } | null;
}

export interface WeddingDetail extends WeddingSummary {
  brideFatherName: string | null;
  brideMotherName: string | null;
  groomFatherName: string | null;
  groomMotherName: string | null;
  showBrideParents: boolean;
  showGroomParents: boolean;
  story: string | null;
  readyForReviewAt: string | null;
  publishedAt: string | null;
  suspendedAt: string | null;
  expiresAt: string | null;
  archivedAt: string | null;
  duplicatedFromId: string | null;
  collaborators: Collaborator[];
  checklist: {
    completed: number;
    required: number;
    readyToReview: boolean;
    items: Array<{ key: string; label: string; complete: boolean; required: boolean }>;
  };
}

export const statusLabels: Record<WeddingStatus, string> = {
  DRAFT: "Bản nháp",
  READY_FOR_REVIEW: "Chờ duyệt",
  PUBLISHED: "Đã xuất bản",
  SUSPENDED: "Tạm ngưng",
  EXPIRED: "Đã hết hạn",
  ARCHIVED: "Đã lưu trữ",
};

export const statusClasses: Record<WeddingStatus, string> = {
  DRAFT: "neutral",
  READY_FOR_REVIEW: "warning",
  PUBLISHED: "success",
  SUSPENDED: "danger",
  EXPIRED: "neutral",
  ARCHIVED: "neutral",
};

export function formatDate(value: string | null, includeTime = false): string {
  if (!value) return "Chưa thiết lập";
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    ...(includeTime ? { hour: "2-digit", minute: "2-digit" } : {}),
  }).format(new Date(value));
}

export function toLocalInput(value: string | null): string {
  if (!value) return "";
  const date = new Date(value);
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 16);
}

export function toDateInput(value: string | null): string {
  if (!value) return "";
  return new Date(value).toISOString().slice(0, 10);
}
