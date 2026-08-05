export interface PlanSummary {
  id: string;
  code: string;
  name: string;
  description: string;
  priceAmount: number;
  currency: string;
  guestLimit: number;
  mediaLimit: number;
  templateKeys: string[];
  customDomain: boolean;
  prioritySupport: boolean;
  requiresPublishReview: boolean;
  recommended: boolean;
}

export interface AddOnSummary {
  id: string;
  code: string;
  name: string;
  description: string;
  priceAmount: number;
  currency: string;
  guestLimitBonus: number;
  mediaLimitBonus: number;
}

export interface CatalogResponse {
  plans: PlanSummary[];
  addOns: AddOnSummary[];
  payment: { method: string; bankName: string; accountName: string; accountNumber: string; note: string };
}

export interface OrderSummary {
  id: string;
  orderNumber: string;
  subtotalAmount: number;
  discountAmount: number;
  totalAmount: number;
  currency: string;
  status: string;
  paymentStatus: string;
  fulfillmentStatus: string;
  customerNote: string | null;
  createdAt: string;
  plan: PlanSummary;
  wedding: { id: string; title: string; slug: string };
  payments: Array<{ id: string; status: string; method: string; reference: string | null; submittedAt: string | null; confirmedAt: string | null; note: string | null }>;
}

export interface WeddingEntitlements {
  weddingId: string;
  plan: PlanSummary;
  guestLimit: number;
  mediaLimit: number;
  guestCount: number;
  mediaCount: number;
  remainingGuests: number;
  remainingMedia: number;
  templateKeys: string[];
  customDomain: boolean;
  prioritySupport: boolean;
  addOns: Array<{ code: string; name: string; guestLimitBonus: number; mediaLimitBonus: number }>;
}

export const orderStatusLabels: Record<string, string> = {
  AWAITING_PAYMENT: "Chờ thanh toán",
  PAYMENT_REVIEW: "Đang đối soát",
  PAID: "Đã thanh toán",
  FULFILLING: "Đang kích hoạt",
  COMPLETED: "Hoàn tất",
  CANCELED: "Đã hủy",
  REFUNDED: "Đã hoàn tiền",
};

export const paymentStatusLabels: Record<string, string> = {
  PENDING: "Chưa thanh toán",
  SUBMITTED: "Đã gửi thông tin",
  CONFIRMED: "Đã xác nhận",
  REJECTED: "Cần bổ sung",
  REFUNDED: "Đã hoàn tiền",
};

export function formatMoney(value: number, currency = "VND"): string {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
}
