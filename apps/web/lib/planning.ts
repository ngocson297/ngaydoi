export type PlanningTaskStatus = "TODO" | "IN_PROGRESS" | "DONE" | "CANCELED";
export type PlanningTaskPriority = "LOW" | "NORMAL" | "HIGH" | "URGENT";
export type PlanningTaskCategory = "FOUNDATION" | "INVITATION" | "GUESTS" | "CEREMONY" | "VENUE" | "VENDORS" | "FINANCE" | "LEGAL" | "PERSONAL" | "AFTER_WEDDING" | "OTHER";
export type PlanningTaskSource = "SYSTEM" | "CUSTOM";

export interface PlanningTask {
  id: string;
  weddingId: string;
  title: string;
  description: string | null;
  category: PlanningTaskCategory;
  priority: PlanningTaskPriority;
  status: PlanningTaskStatus;
  source: PlanningTaskSource;
  dueAt: string | null;
  assigneeName: string | null;
  sortOrder: number;
  reminderEnabled: boolean;
  reminderDaysBefore: number;
  lastReminderAt: string | null;
  completedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PlanningOverview {
  wedding: { id: string; title: string; mainDate: string | null; ownerId: string };
  access: "OWNER" | "EDIT" | "VIEW";
  tasks: PlanningTask[];
  metrics: { total: number; done: number; active: number; overdue: number; dueSoon: number; progress: number };
  categories: PlanningTaskCategory[];
  priorities: PlanningTaskPriority[];
  statuses: PlanningTaskStatus[];
}

export const categoryLabels: Record<PlanningTaskCategory, string> = {
  FOUNDATION: "Nền tảng",
  INVITATION: "Thiệp cưới",
  GUESTS: "Khách mời",
  CEREMONY: "Nghi lễ",
  VENUE: "Địa điểm",
  VENDORS: "Nhà cung cấp",
  FINANCE: "Ngân sách",
  LEGAL: "Thủ tục",
  PERSONAL: "Cá nhân",
  AFTER_WEDDING: "Sau cưới",
  OTHER: "Khác",
};

export const priorityLabels: Record<PlanningTaskPriority, string> = {
  LOW: "Có thể làm sau",
  NORMAL: "Bình thường",
  HIGH: "Quan trọng",
  URGENT: "Ưu tiên cao",
};

export const statusLabels: Record<PlanningTaskStatus, string> = {
  TODO: "Chưa bắt đầu",
  IN_PROGRESS: "Đang thực hiện",
  DONE: "Hoàn tất",
  CANCELED: "Đã hủy",
};

export function toDateTimeLocal(value: string | null): string {
  if (!value) return "";
  const date = new Date(value);
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60_000).toISOString().slice(0, 16);
}
