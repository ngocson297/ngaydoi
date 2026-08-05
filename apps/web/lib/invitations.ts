import { API_URL } from "./api";
import type { WeddingAccess, WeddingEvent, WeddingStatus } from "./weddings";

export type TemplateKey = string;
export type InvitationSectionKey = "hero" | "family" | "story" | "gallery" | "countdown" | "events" | "footer";
export type EditorTab = "templates" | "content" | "style" | "media" | "settings" | "history";

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
  footerMessage: string;
  showHero: boolean;
  showFamily: boolean;
  showStory: boolean;
  showGallery: boolean;
  showEvents: boolean;
  showCountdown: boolean;
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
  footerMessage: "Cảm ơn bạn đã trở thành một phần trong ngày đặc biệt của chúng mình.",
  showHero: true,
  showFamily: true,
  showStory: true,
  showGallery: true,
  showEvents: true,
  showCountdown: true,
  showFooter: true,
  musicEnabled: false,
  musicUrl: null,
  sectionOrder: ["hero", "family", "story", "gallery", "countdown", "events", "footer"],
  revision: 1,
};

export function withDefaultDesign(data: PublicInvitationData): PublicInvitationData & { invitationDesign: InvitationDesign } {
  const now = new Date().toISOString();
  return {
    ...data,
    invitationDesign: data.invitationDesign ?? {
      ...defaultInvitationDesign,
      id: "default",
      weddingId: data.id,
      createdAt: now,
      updatedAt: now,
      autosavedAt: now,
    },
  };
}

export function resolveMediaUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  if (/^https?:\/\//i.test(url) || url.startsWith("data:")) return url;
  return `${API_URL}${url.startsWith("/") ? url : `/${url}`}`;
}
