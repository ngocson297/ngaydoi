export type ActiveNavKey =
  | "dashboard"
  | "weddings"
  | "invitation"
  | "guests"
  | "billing"
  | "account"
  | "admin"
  | "system"
  | "pilot"
  | "growth"
  | "growthAdmin"
  | "onboarding"
  | "support"
  | "partner"
  | "partnersAdmin"
  | "eventOps"
  | "memories"
  | "planning"
  | "templates";

export type NavigationRole = "CUSTOMER" | "FAMILY_EDITOR" | "STAFF" | "ADMIN" | "PARTNER" | "CHECKIN_STAFF" | string;

export interface NavigationItem {
  key: ActiveNavKey;
  label: string;
  description: string;
  href: string;
  icon: string;
  badge?: string;
  keywords: string[];
  unavailableReason?: string;
}

export interface NavigationGroup {
  id: "overview" | "wedding" | "services" | "partner" | "admin" | "account";
  label: string;
  description: string;
  items: NavigationItem[];
  contextMessage?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

const customerWorkspaceRoles = new Set(["CUSTOMER", "FAMILY_EDITOR", "ADMIN", "STAFF"]);
const billingRoles = new Set(["CUSTOMER", "ADMIN", "STAFF"]);
const partnerRoles = new Set(["PARTNER", "ADMIN", "STAFF"]);
const adminRoles = new Set(["ADMIN", "STAFF"]);

const labels: Record<ActiveNavKey, string> = {
  dashboard: "Tổng quan",
  weddings: "Đám cưới của tôi",
  invitation: "Thiệp cưới",
  guests: "Khách mời & RSVP",
  billing: "Gói & thanh toán",
  account: "Tài khoản",
  admin: "Vận hành",
  system: "Hệ thống",
  pilot: "Pilot launch",
  growth: "Growth Hub",
  growthAdmin: "Growth operations",
  onboarding: "Bắt đầu nhanh",
  support: "Hỗ trợ",
  partner: "Đối tác",
  partnersAdmin: "Partner operations",
  eventOps: "Phân bàn & check-in",
  memories: "Album kỷ niệm",
  planning: "Kế hoạch cưới",
  templates: "Kho mẫu thiệp",
};

function item(
  key: ActiveNavKey,
  href: string,
  icon: string,
  description: string,
  keywords: string[],
  badge?: string,
  unavailableReason?: string,
): NavigationItem {
  return { key, label: labels[key], href, icon, description, keywords, badge, unavailableReason };
}

export function roleLabel(role: NavigationRole | undefined): string {
  switch (role) {
    case "ADMIN": return "Quản trị viên";
    case "STAFF": return "Nhân viên vận hành";
    case "PARTNER": return "Đối tác";
    case "FAMILY_EDITOR": return "Cộng tác viên gia đình";
    case "CHECKIN_STAFF": return "Nhân viên check-in";
    default: return "Chủ đám cưới";
  }
}

export function buildNavigation(role: NavigationRole | undefined, weddingId?: string): NavigationGroup[] {
  const currentRole = role ?? "CUSTOMER";
  const groups: NavigationGroup[] = [];

  const overviewItems: NavigationItem[] = [
    item("dashboard", "/dashboard", "⌂", "Tình trạng chung và việc cần làm tiếp theo.", ["home", "dashboard", "tổng quan"]),
  ];

  if (customerWorkspaceRoles.has(currentRole)) {
    overviewItems.push(
      item("onboarding", "/getting-started", "✦", "Hướng dẫn thiết lập đám cưới theo từng bước.", ["bắt đầu", "onboarding", "hướng dẫn"], "Guide"),
      item("weddings", "/dashboard#my-weddings", "♡", "Chọn hoặc quản lý không gian đám cưới.", ["wedding", "đám cưới", "workspace"]),
    );
  }

  groups.push({
    id: "overview",
    label: "Tổng quan",
    description: "Điểm bắt đầu và trạng thái chung",
    items: overviewItems,
  });

  if (customerWorkspaceRoles.has(currentRole)) {
    const weddingItems = weddingId
      ? [
          item("planning", `/weddings/${weddingId}/planning`, "✓", "Timeline, deadline và nhắc việc.", ["kế hoạch", "timeline", "task"], "Timeline"),
          item("invitation", `/weddings/${weddingId}/invitation`, "✉", "Thiết kế, xem trước và xuất bản thiệp.", ["thiệp", "studio", "invitation"], "Studio"),
          item("guests", `/weddings/${weddingId}/guests`, "◎", "Danh sách khách, thiệp cá nhân và RSVP.", ["khách", "rsvp", "guest"], "RSVP"),
          item("eventOps", `/weddings/${weddingId}/event-operations`, "⌖", "Sơ đồ bàn, QR và check-in ngày cưới.", ["bàn", "checkin", "qr", "event"], "Event"),
          item("memories", `/weddings/${weddingId}/memories`, "▧", "Album chung và lời cảm ơn sau cưới.", ["album", "ảnh", "video", "memories"], "Album"),
        ]
      : [];

    groups.push({
      id: "wedding",
      label: "Không gian cưới",
      description: "Các công cụ dành riêng cho một wedding",
      items: weddingItems,
      contextMessage: weddingId ? undefined : "Chọn một đám cưới để mở các công cụ nâng cao.",
    });
  }

  const serviceItems: NavigationItem[] = [
    item("templates", "/templates", "✦", "Khám phá 36 mẫu thiệp theo phong cách và gói.", ["template", "mẫu", "theme"], "36 mẫu"),
  ];
  if (billingRoles.has(currentRole)) {
    serviceItems.push(item("billing", "/billing", "◇", "Gói dịch vụ, đơn hàng và thanh toán.", ["billing", "gói", "thanh toán", "order"]));
  }
  if (customerWorkspaceRoles.has(currentRole)) {
    serviceItems.push(item("growth", "/growth", "↗", "Referral, custom domain và tăng trưởng.", ["growth", "domain", "referral"]));
  }
  groups.push({ id: "services", label: "Dịch vụ", description: "Mẫu thiệp và tiện ích bổ sung", items: serviceItems });

  if (partnerRoles.has(currentRole)) {
    groups.push({
      id: "partner",
      label: "Đối tác",
      description: "Khách hàng, thương hiệu và hoa hồng",
      items: [item("partner", "/partner", "♢", "Partner Portal, commission và payout.", ["partner", "đối tác", "hoa hồng", "payout"], "Portal")],
    });
  }

  if (adminRoles.has(currentRole)) {
    groups.push({
      id: "admin",
      label: "Quản trị",
      description: "Vận hành, giám sát và kiểm soát launch",
      items: [
        item("admin", "/admin", "⚙", "Tổng quan vận hành và đơn hàng.", ["admin", "vận hành", "operations"]),
        item("system", "/admin/system", "◉", "Health, email outbox, webhook và backup.", ["system", "health", "webhook", "email"], "Ops"),
        item("pilot", "/admin/pilot", "◫", "Checklist go-live và UAT blocker.", ["pilot", "uat", "launch"], "UAT"),
        item("growthAdmin", "/admin/growth", "↗", "Funnel, support inbox và custom domain.", ["growth admin", "funnel", "support"]),
        item("partnersAdmin", "/admin/partners", "♢", "Duyệt đối tác, commission và payout.", ["partner admin", "revenue", "payout"]),
      ],
    });
  }

  groups.push({
    id: "account",
    label: "Tài khoản",
    description: "Hỗ trợ và bảo mật cá nhân",
    items: [
      item("support", "/support", "?", "Gửi và theo dõi yêu cầu hỗ trợ.", ["support", "hỗ trợ", "ticket"], "Inbox"),
      item("account", "/account", "◎", "Hồ sơ, mật khẩu và phiên đăng nhập.", ["account", "tài khoản", "profile", "security"]),
    ],
  });

  return groups;
}

export function activeGroupId(groups: NavigationGroup[], active: ActiveNavKey): NavigationGroup["id"] | undefined {
  return groups.find((group) => group.items.some((entry) => entry.key === active))?.id;
}

export function buildBreadcrumbs(active: ActiveNavKey, weddingId?: string): BreadcrumbItem[] {
  if (active === "dashboard") return [];
  const current = labels[active];
  const weddingKeys = new Set<ActiveNavKey>(["planning", "invitation", "guests", "eventOps", "memories"]);
  if (weddingKeys.has(active)) {
    return [
      { label: "Tổng quan", href: "/dashboard" },
      { label: "Đám cưới", href: weddingId ? `/weddings/${weddingId}` : "/dashboard#my-weddings" },
      { label: current },
    ];
  }
  const adminKeys = new Set<ActiveNavKey>(["admin", "system", "pilot", "growthAdmin", "partnersAdmin"]);
  if (adminKeys.has(active)) {
    return [
      { label: "Tổng quan", href: "/dashboard" },
      ...(active === "admin" ? [] : [{ label: "Quản trị", href: "/admin" }]),
      { label: current },
    ];
  }
  return [{ label: "Tổng quan", href: "/dashboard" }, { label: current }];
}

export function activeLabel(active: ActiveNavKey): string {
  return labels[active];
}
