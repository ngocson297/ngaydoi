import { API_URL } from "./api";
import type { WeddingAccess, WeddingEvent, WeddingStatus } from "./weddings";

export type TemplateKey = string;
export type InvitationSectionKey = "hero" | "family" | "story" | "gallery" | "countdown" | "events" | "gift" | "footer";
export type EditorTab = "templates" | "content" | "style" | "media" | "gift" | "settings" | "history";

export interface InvitationTemplate {
  key: TemplateKey;
  name: string;
  description: string;
  style: string;
  category: string;
  plan: "FREE" | "STARTER" | "STANDARD" | "PREMIUM";
  badge: string | null;
  featured: boolean;
  isNew: boolean;
  tags: string[];
  motif: string;
  motion: string;
  layout: "portrait" | "split" | "editorial" | "arch" | "story" | "minimal";
  photoTreatment: "full-bleed" | "split" | "framed" | "collage" | "soft" | "optional";
  countdownStyle: "cards" | "editorial" | "rings" | "minimal";
  eventStyle: "timeline" | "cards" | "agenda" | "steps";
  palette: {
    primaryColor: string;
    accentColor: string;
    backgroundColor: string;
    surfaceColor: string;
    textColor: string;
  };
  headingFont: string;
  bodyFont: string;
}

export interface GiftTransferAccount {
  id: string;
  side: "BRIDE" | "GROOM" | "SHARED";
  label: string;
  mode: "UPLOAD" | "VIETQR";
  qrAssetId: string;
  qrImageUrl: string;
  bankBin: string;
  bankCode: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
  transferNote: string;
}

export interface GiftTransferBank {
  bin: string;
  code: string;
  shortName: string;
  name: string;
  logo: string | null;
}

export interface TemplateExperience {
  layout: InvitationTemplate["layout"];
  photoTreatment: InvitationTemplate["photoTreatment"];
  countdownStyle: InvitationTemplate["countdownStyle"];
  eventStyle: InvitationTemplate["eventStyle"];
}

export interface InvitationDesign {
  id: string;
  weddingId: string;
  templateKey: TemplateKey;
  paletteKey: string;
  primaryColor: string;
  accentColor: string;
  backgroundColor: string;
  surfaceColor: string;
  textColor: string;
  headingFont: "elegant-serif" | "romantic-serif" | "editorial-serif" | "heritage-serif" | "minimal-serif" | "display-serif";
  bodyFont: "clean-sans" | "modern-sans" | "humanist-sans" | "soft-sans";
  heroEyebrow: string;
  greeting: string;
  storyTitle: string;
  galleryTitle: string;
  eventsTitle: string;
  countdownTitle: string;
  giftTitle: string;
  giftMessage: string;
  giftAccounts: GiftTransferAccount[];
  footerMessage: string;
  showHero: boolean;
  showFamily: boolean;
  showStory: boolean;
  showGallery: boolean;
  showEvents: boolean;
  showCountdown: boolean;
  showGift: boolean;
  showFooter: boolean;
  musicEnabled: boolean;
  musicUrl: string | null;
  sectionOrder: InvitationSectionKey[];
  revision: number;
  autosavedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface InvitationMedia {
  id: string;
  weddingId?: string;
  type: string;
  publicUrl: string;
  mimeType: string;
  sizeBytes?: number;
  width: number | null;
  height: number | null;
  isCover: boolean;
  altText: string | null;
  sortOrder: number;
  createdAt?: string;
}

export interface InvitationVersionSummary {
  id: string;
  versionNumber: number;
  reason: string;
  createdAt: string;
}


export interface PersonalizedRsvp {
  status: "ATTENDING" | "DECLINED" | "MAYBE";
  adultCount: number;
  childCount: number;
  vegetarianCount: number;
  needsTransport: boolean;
  message: string | null;
  selectedEventIds: string[];
  respondedAt: string;
  updatedAt: string;
}

export interface InvitationPersonalization {
  token: string;
  guestName: string;
  salutation: string | null;
  displayName: string;
  greeting: string | null;
  maxAdultCount: number;
  maxChildCount: number;
  invitationStatus: string;
  viewCount: number;
  currentRsvp: PersonalizedRsvp | null;
}

export interface PublicInvitationData {
  id: string;
  slug: string;
  title: string;
  brideName: string;
  groomName: string;
  mainDate: string | null;
  brideFatherName: string | null;
  brideMotherName: string | null;
  groomFatherName: string | null;
  groomMotherName: string | null;
  showBrideParents: boolean;
  showGroomParents: boolean;
  story: string | null;
  status: WeddingStatus;
  timezone: string;
  invitationDesign: InvitationDesign | null;
  events: WeddingEvent[];
  mediaAssets: InvitationMedia[];
  memoryAlbum?: { token: string; publicEnabled: boolean } | null;
  personalization?: InvitationPersonalization;
}

export interface InvitationEditorData extends PublicInvitationData {
  access: WeddingAccess;
  templateKey: TemplateKey;
  invitationVersions: InvitationVersionSummary[];
  entitlements: {
    plan: { code: string; name: string };
    templateKeys: string[];
    mediaLimit: number;
    mediaCount: number;
    remainingMedia: number;
  };
}

export const defaultInvitationDesign: Omit<InvitationDesign, "id" | "weddingId" | "createdAt" | "updatedAt" | "autosavedAt"> = {
  templateKey: "classic-wine",
  paletteKey: "wine",
  primaryColor: "#7C2D3B",
  accentColor: "#B28A4A",
  backgroundColor: "#FBF7F1",
  surfaceColor: "#FFFDF9",
  textColor: "#29231F",
  headingFont: "elegant-serif",
  bodyFont: "clean-sans",
  heroEyebrow: "Trân trọng báo tin vui",
  greeting: "Trân trọng kính mời bạn đến chung vui trong ngày trọng đại của chúng mình.",
  storyTitle: "Ngày mình chung đôi",
  galleryTitle: "Khoảnh khắc của chúng mình",
  eventsTitle: "Chương trình ngày cưới",
  countdownTitle: "Đếm ngược đến ngày chung đôi",
  giftTitle: "Gửi lời chúc đến đôi mình",
  giftMessage: "Sự hiện diện của bạn là món quà quý giá nhất. Nếu muốn gửi thêm một lời chúc mừng, bạn có thể dùng thông tin bên dưới.",
  giftAccounts: [],
  footerMessage: "Cảm ơn bạn đã trở thành một phần trong ngày đặc biệt của chúng mình.",
  showHero: true,
  showFamily: true,
  showStory: true,
  showGallery: true,
  showEvents: true,
  showCountdown: true,
  showGift: false,
  showFooter: true,
  musicEnabled: false,
  musicUrl: null,
  sectionOrder: ["hero", "family", "story", "gallery", "countdown", "events", "gift", "footer"],
  revision: 1,
};

export function withDefaultDesign(data: PublicInvitationData): PublicInvitationData & { invitationDesign: InvitationDesign } {
  const now = new Date().toISOString();
  const fallback = {
    ...defaultInvitationDesign,
    id: "default",
    weddingId: data.id,
    createdAt: now,
    updatedAt: now,
    autosavedAt: now,
  };
  const source = data.invitationDesign ? { ...fallback, ...data.invitationDesign } : fallback;
  const order = Array.isArray(source.sectionOrder) ? source.sectionOrder.filter((key): key is InvitationSectionKey => ["hero", "family", "story", "gallery", "countdown", "events", "gift", "footer"].includes(key)) : [...defaultInvitationDesign.sectionOrder];
  if (!order.includes("gift")) {
    const footerIndex = order.indexOf("footer");
    order.splice(footerIndex >= 0 ? footerIndex : order.length, 0, "gift");
  }
  return {
    ...data,
    invitationDesign: { ...source, sectionOrder: order, giftAccounts: normalizeGiftAccounts(source.giftAccounts) },
  };
}

export function resolveMediaUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  if (/^https?:\/\//i.test(url) || url.startsWith("data:")) return url;
  return `${API_URL}${url.startsWith("/") ? url : `/${url}`}`;
}

const TEMPLATE_EXPERIENCE: Record<string, TemplateExperience> = {
  "classic-wine": { layout: "portrait", photoTreatment: "framed", countdownStyle: "cards", eventStyle: "timeline" },
  "garden-sage": { layout: "story", photoTreatment: "collage", countdownStyle: "rings", eventStyle: "cards" },
  "blush-romance": { layout: "split", photoTreatment: "split", countdownStyle: "cards", eventStyle: "timeline" },
  "modern-noir": { layout: "editorial", photoTreatment: "full-bleed", countdownStyle: "editorial", eventStyle: "agenda" },
  "ocean-minimal": { layout: "minimal", photoTreatment: "soft", countdownStyle: "minimal", eventStyle: "cards" },
  "lotus-vietnamese": { layout: "arch", photoTreatment: "framed", countdownStyle: "rings", eventStyle: "steps" },
  "imperial-red": { layout: "arch", photoTreatment: "framed", countdownStyle: "cards", eventStyle: "steps" },
  "ivory-gold": { layout: "portrait", photoTreatment: "full-bleed", countdownStyle: "rings", eventStyle: "agenda" },
  "lavender-dream": { layout: "story", photoTreatment: "collage", countdownStyle: "cards", eventStyle: "timeline" },
  "terracotta-sunset": { layout: "split", photoTreatment: "split", countdownStyle: "rings", eventStyle: "cards" },
  "pearl-minimal": { layout: "minimal", photoTreatment: "optional", countdownStyle: "minimal", eventStyle: "agenda" },
  "midnight-blue": { layout: "portrait", photoTreatment: "full-bleed", countdownStyle: "editorial", eventStyle: "timeline" },
  "tropical-palm": { layout: "story", photoTreatment: "collage", countdownStyle: "rings", eventStyle: "cards" },
  "cherry-blossom": { layout: "split", photoTreatment: "soft", countdownStyle: "cards", eventStyle: "timeline" },
  "rustic-kraft": { layout: "story", photoTreatment: "framed", countdownStyle: "cards", eventStyle: "steps" },
  "art-deco-emerald": { layout: "editorial", photoTreatment: "framed", countdownStyle: "editorial", eventStyle: "agenda" },
  "champagne-glow": { layout: "portrait", photoTreatment: "full-bleed", countdownStyle: "rings", eventStyle: "timeline" },
  "celestial-night": { layout: "portrait", photoTreatment: "full-bleed", countdownStyle: "editorial", eventStyle: "cards" },
  "coastal-sand": { layout: "split", photoTreatment: "split", countdownStyle: "minimal", eventStyle: "cards" },
  "tea-ceremony": { layout: "arch", photoTreatment: "framed", countdownStyle: "rings", eventStyle: "steps" },
  "monochrome-editorial": { layout: "editorial", photoTreatment: "full-bleed", countdownStyle: "editorial", eventStyle: "agenda" },
  "peach-bloom": { layout: "story", photoTreatment: "collage", countdownStyle: "cards", eventStyle: "timeline" },
  "heritage-indigo": { layout: "arch", photoTreatment: "framed", countdownStyle: "rings", eventStyle: "steps" },
  "botanical-white": { layout: "minimal", photoTreatment: "soft", countdownStyle: "minimal", eventStyle: "cards" },
};

export function resolveTemplateExperience(templateKey: string): TemplateExperience {
  return TEMPLATE_EXPERIENCE[templateKey] ?? TEMPLATE_EXPERIENCE["classic-wine"];
}

export function normalizeGiftAccounts(value: unknown): GiftTransferAccount[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((item): GiftTransferAccount[] => {
    if (!item || typeof item !== "object") return [];
    const account = item as Partial<GiftTransferAccount>;
    const mode = account.mode === "UPLOAD" ? "UPLOAD" : "VIETQR";
    const qrImageUrl = String(account.qrImageUrl ?? "").trim();
    const qrAssetId = String(account.qrAssetId ?? "").trim();
    const bankBin = String(account.bankBin ?? "").replace(/\D/g, "");
    const accountNumber = String(account.accountNumber ?? "").replace(/\D/g, "");
    const accountName = String(account.accountName ?? "").trim().toUpperCase();
    if (mode === "UPLOAD" && !qrImageUrl) return [];
    if (mode === "VIETQR" && (!/^\d{6}$/.test(bankBin) || !/^\d{6,19}$/.test(accountNumber) || !accountName)) return [];
    return [{
      id: String(account.id ?? `${mode}-${qrAssetId || bankBin}-${accountNumber}`),
      side: account.side === "BRIDE" || account.side === "GROOM" ? account.side : "SHARED",
      label: String(account.label ?? "Tài khoản mừng cưới").trim(),
      mode,
      qrAssetId,
      qrImageUrl,
      bankBin,
      bankCode: String(account.bankCode ?? "").trim().toUpperCase(),
      bankName: String(account.bankName ?? account.bankCode ?? "Ngân hàng").trim(),
      accountNumber,
      accountName,
      transferNote: String(account.transferNote ?? "MUNG CUOI").trim().slice(0, 25),
    }];
  }).slice(0, 3);
}

export function giftAccountQrUrl(account: GiftTransferAccount): string {
  return account.mode === "UPLOAD" && account.qrImageUrl
    ? resolveMediaUrl(account.qrImageUrl) ?? account.qrImageUrl
    : buildVietQrImageUrl(account);
}

export function buildVietQrImageUrl(account: GiftTransferAccount): string {
  const bankId = account.bankBin || account.bankCode;
  const query = new URLSearchParams();
  if (account.transferNote) query.set("addInfo", account.transferNote);
  if (account.accountName) query.set("accountName", account.accountName);
  return `https://img.vietqr.io/image/${encodeURIComponent(bankId)}-${encodeURIComponent(account.accountNumber)}-compact2.png?${query.toString()}`;
}
