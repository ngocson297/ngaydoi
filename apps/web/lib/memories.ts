import { API_URL } from "./api";

export type MemoryStatus = "PENDING" | "APPROVED" | "REJECTED" | "ARCHIVED";
export type MemoryType = "IMAGE" | "VIDEO";
export type SocialContentStatus = "PENDING" | "APPROVED" | "HIDDEN";

export interface MemoryAsset {
  id: string;
  type: MemoryType;
  status?: MemoryStatus;
  mimeType: string;
  sizeBytes: number;
  originalName?: string;
  uploaderName: string | null;
  uploaderMessage: string | null;
  rejectionReason?: string | null;
  moderationNote?: string | null;
  approvedAt?: string | null;
  rejectedAt?: string | null;
  createdAt: string;
  mediaUrl?: string;
  reactionCount?: number;
  commentCount?: number;
  viewerReacted?: boolean;
  invitation?: { guest: { fullName: string } } | null;
}

export interface MemoryComment {
  id: string;
  authorName: string;
  body: string;
  createdAt: string;
  status?: SocialContentStatus;
}

export interface GuestbookEntry {
  id: string;
  authorName: string;
  message: string;
  createdAt: string;
  approvedAt?: string | null;
  status?: SocialContentStatus;
}

export interface CursorPage<T> {
  items: T[];
  nextCursor: string | null;
}

export interface MemoryOwnerOverview {
  id: string;
  weddingId: string;
  token: string;
  title: string;
  description: string;
  thankYouTitle: string;
  thankYouMessage: string;
  uploadEnabled: boolean;
  publicEnabled: boolean;
  moderationRequired: boolean;
  showUploaderName: boolean;
  reactionsEnabled: boolean;
  commentsEnabled: boolean;
  commentModerationRequired: boolean;
  downloadsEnabled: boolean;
  guestbookEnabled: boolean;
  guestbookModerationRequired: boolean;
  closesAt: string | null;
  access: "OWNER" | "EDIT" | "VIEW";
  wedding: { id: string; title: string; brideName: string; groomName: string; mainDate: string | null; slug: string };
  assets: MemoryAsset[];
  assetPageInfo: { nextCursor: string | null; pageSize: number };
  metrics: { total: number; pending: number; approved: number; rejected: number; archived: number; totalBytes: number };
  socialMetrics: { pendingComments: number; pendingGuestbook: number };
}

export interface PublicMemoryAlbum {
  id: string;
  token: string;
  title: string;
  description: string;
  thankYouTitle: string;
  thankYouMessage: string;
  uploadEnabled: boolean;
  showUploaderName: boolean;
  reactionsEnabled: boolean;
  commentsEnabled: boolean;
  downloadsEnabled: boolean;
  guestbookEnabled: boolean;
  closesAt: string | null;
  wedding: { title: string; brideName: string; groomName: string; mainDate: string | null; coverImageUrl: string | null };
  assets: MemoryAsset[];
  assetPageInfo: { nextCursor: string | null; pageSize: number };
  guestbook: GuestbookEntry[];
  guestbookPageInfo: { nextCursor: string | null; pageSize: number };
  uploadPolicy: {
    strategy: "DIRECT" | "PROXY";
    maxImageBytes: number;
    maxVideoBytes: number;
    maxFilesPerBatch: number;
    remainingItems: number;
    remainingBytes: number;
  };
}

export interface SocialModerationOverview {
  comments: Array<{ id: string; authorName: string; body: string; createdAt: string; asset: { id: string; type: MemoryType; uploaderName: string | null } }>;
  guestbook: GuestbookEntry[];
}

export const memoryMediaUrl = (assetId: string, token: string): string => `${API_URL}/memories/assets/${encodeURIComponent(assetId)}?token=${encodeURIComponent(token)}`;
export const resolveMemoryMediaUrl = (asset: Pick<MemoryAsset, "id" | "mediaUrl">, token: string): string => {
  if (asset.mediaUrl?.startsWith("http://") || asset.mediaUrl?.startsWith("https://")) return asset.mediaUrl;
  if (asset.mediaUrl?.startsWith("/")) return `${API_URL}${asset.mediaUrl}`;
  return memoryMediaUrl(asset.id, token);
};
export const memoryDownloadUrl = (assetId: string, token: string): string => `${memoryMediaUrl(assetId, token)}&download=1`;
export const memoryAlbumUrl = (token: string): string => `/memories/${encodeURIComponent(token)}`;
