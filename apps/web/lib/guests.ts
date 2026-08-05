import type { WeddingAccess, WeddingEvent, WeddingSide, WeddingStatus } from "./weddings";

export type GuestRsvpStatus = "ATTENDING" | "DECLINED" | "MAYBE";
export type InvitationStatus = "CREATED" | "SENT" | "VIEWED" | "RESPONDED" | "REVOKED";

export interface GuestRsvp {
  id: string;
  status: GuestRsvpStatus;
  adultCount: number;
  childCount: number;
  vegetarianCount: number;
  needsTransport: boolean;
  message: string | null;
  respondedAt: string;
  updatedAt: string;
  selectedEvents: Array<{ eventId: string }>;
}

export interface GuestInvitation {
  id: string;
  token: string;
  greeting: string | null;
  status: InvitationStatus;
  sentAt: string | null;
  firstViewedAt: string | null;
  lastViewedAt: string | null;
  viewCount: number;
  revokedAt: string | null;
  visibleEvents: Array<{ eventId: string }>;
  rsvp: GuestRsvp | null;
}

export interface GuestItem {
  id: string;
  weddingId: string;
  fullName: string;
  salutation: string | null;
  phone: string | null;
  email: string | null;
  groupName: string | null;
  side: WeddingSide;
  invitedBy: string | null;
  tableName: string | null;
  maxAdultCount: number;
  maxChildCount: number;
  note: string | null;
  tags: string[];
  archivedAt: string | null;
  createdAt: string;
  updatedAt: string;
  invitation: GuestInvitation | null;
}

export interface GuestListResponse {
  wedding: {
    id: string;
    title: string;
    slug: string;
    status: WeddingStatus;
    access: WeddingAccess;
    events: WeddingEvent[];
  };
  items: GuestItem[];
  pagination: { page: number; pageSize: number; total: number; totalPages: number };
  groups: Array<{ name: string; count: number }>;
}

export interface GuestAnalytics {
  wedding: { id: string; title: string; slug: string; access: WeddingAccess };
  metrics: {
    invited: number;
    sent: number;
    viewed: number;
    responded: number;
    attending: number;
    declined: number;
    maybe: number;
    pending: number;
    estimatedHeadcount: number;
    vegetarianMeals: number;
    transportRequests: number;
    viewToRsvpRate: number;
  };
  bySide: AnalyticsBreakdown[];
  byGroup: AnalyticsBreakdown[];
  byInviter: AnalyticsBreakdown[];
  byEvent: Array<{ id: string; title: string; headcount: number }>;
}

export interface AnalyticsBreakdown {
  label: string;
  total: number;
  attending: number;
  headcount: number;
}

export interface GuestDraft {
  fullName: string;
  salutation: string;
  phone: string;
  email: string;
  groupName: string;
  side: WeddingSide;
  invitedBy: string;
  tableName: string;
  maxAdultCount: number;
  maxChildCount: number;
  note: string;
  tags: string;
  greeting: string;
  eventIds: string[];
}

export const emptyGuestDraft: GuestDraft = {
  fullName: "",
  salutation: "Anh/Chị",
  phone: "",
  email: "",
  groupName: "",
  side: "SHARED",
  invitedBy: "",
  tableName: "",
  maxAdultCount: 1,
  maxChildCount: 0,
  note: "",
  tags: "",
  greeting: "",
  eventIds: [],
};

export function invitationStatusLabel(item: GuestItem): string {
  if (item.archivedAt) return "Đã lưu trữ";
  if (item.invitation?.rsvp?.status === "ATTENDING") return "Sẽ tham dự";
  if (item.invitation?.rsvp?.status === "DECLINED") return "Không tham dự";
  if (item.invitation?.rsvp?.status === "MAYBE") return "Chưa chắc chắn";
  if (!item.invitation) return "Chưa tạo link";
  if (item.invitation.status === "REVOKED") return "Đã thu hồi";
  if (item.invitation.firstViewedAt) return "Đã xem";
  if (item.invitation.sentAt) return "Đã gửi";
  return "Chưa gửi";
}

export function invitationStatusClass(item: GuestItem): string {
  if (item.archivedAt) return "archived";
  if (item.invitation?.rsvp?.status === "ATTENDING") return "attending";
  if (item.invitation?.rsvp?.status === "DECLINED") return "declined";
  if (item.invitation?.rsvp?.status === "MAYBE") return "maybe";
  if (item.invitation?.status === "REVOKED") return "revoked";
  if (item.invitation?.firstViewedAt) return "viewed";
  if (item.invitation?.sentAt) return "sent";
  return "pending";
}

export function parseCsv(text: string): Array<Record<string, string>> {
  const firstLine = text.split(/\r?\n/, 1)[0] ?? "";
  const delimiter = ([",", ";", "\t"] as const).map((candidate) => {
    let count = 0;
    let quoted = false;
    for (let index = 0; index < firstLine.length; index += 1) {
      if (firstLine[index] === '"') quoted = !quoted;
      else if (!quoted && firstLine[index] === candidate) count += 1;
    }
    return { candidate, count };
  }).sort((left, right) => right.count - left.count)[0]?.candidate ?? ",";
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (char === '"' && quoted && next === '"') { cell += '"'; index += 1; continue; }
    if (char === '"') { quoted = !quoted; continue; }
    if (char === delimiter && !quoted) { row.push(cell.trim()); cell = ""; continue; }
    if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell.trim()); cell = "";
      if (row.some(Boolean)) rows.push(row);
      row = [];
      continue;
    }
    cell += char;
  }
  row.push(cell.trim());
  if (row.some(Boolean)) rows.push(row);
  const headers = rows.shift()?.map((header) => header.replace(/^\uFEFF/, "").trim()) ?? [];
  return rows.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
}

export function toCsv(rows: Array<Record<string, unknown>>): string {
  if (!rows.length) return "";
  const headers = Object.keys(rows[0]);
  const escape = (value: unknown) => {
    const text = String(value ?? "");
    return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
  };
  return [headers.map(escape).join(","), ...rows.map((row) => headers.map((header) => escape(row[header])).join(","))].join("\r\n");
}

export function downloadText(filename: string, content: string, type = "text/csv;charset=utf-8"): void {
  const anchor = document.createElement("a");
  anchor.href = URL.createObjectURL(new Blob(["\uFEFF", content], { type }));
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(anchor.href);
}
