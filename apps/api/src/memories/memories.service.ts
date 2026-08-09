import { BadRequestException, ForbiddenException, Injectable, NotFoundException, StreamableFile } from "@nestjs/common";
import { createHash, createHmac, randomBytes, randomUUID, timingSafeEqual } from "node:crypto";
import { extname } from "node:path";
import { Readable } from "node:stream";
import QRCode from "qrcode";
import type { AuthenticatedUser } from "../auth/auth.types.js";
import { RateLimitService } from "../auth/rate-limit.service.js";
import { StorageService } from "../common/storage/storage.service.js";
import { PrismaService } from "../prisma/prisma.service.js";

const cleanText = (value: unknown, max: number): string => String(value ?? "").trim().slice(0, max);
const albumToken = (): string => randomBytes(32).toString("base64url");
const clampLimit = (value: unknown, fallback = 24, max = 60): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.min(max, Math.max(1, Math.trunc(parsed))) : fallback;
};
const ALLOWED_MIME = new Set(["image/jpeg", "image/png", "image/webp", "video/mp4", "video/webm", "video/quicktime"]);
const MIME_EXTENSIONS: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "video/mp4": ".mp4",
  "video/webm": ".webm",
  "video/quicktime": ".mov",
};

const CRC32_TABLE = Array.from({ length: 256 }, (_, value) => {
  let crc = value;
  for (let bit = 0; bit < 8; bit += 1) crc = (crc & 1) ? (0xedb88320 ^ (crc >>> 1)) : (crc >>> 1);
  return crc >>> 0;
});

function crc32(buffer: Buffer): number {
  let crc = 0xffffffff;
  for (const byte of buffer) crc = CRC32_TABLE[(crc ^ byte) & 0xff]! ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function zipDosDateTime(date = new Date()): { date: number; time: number } {
  const year = Math.max(1980, date.getFullYear());
  return {
    date: ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate(),
    time: (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2),
  };
}

function safeArchiveName(value: string, fallback: string): string {
  const cleaned = value.replace(/[\\/:*?"<>|\u0000-\u001f]/g, "-").replace(/\s+/g, " ").trim().slice(0, 140);
  return cleaned || fallback;
}

interface UploadTicketPayload {
  albumId: string;
  weddingId: string;
  invitationId: string | null;
  storageKey: string;
  mimeType: string;
  sizeBytes: number;
  originalName: string;
  uploaderName: string | null;
  uploaderMessage: string | null;
  width: number | null;
  height: number | null;
  expiresAt: number;
}

function fileSignatureMatches(mimeType: string, buffer: Buffer): boolean {
  if (mimeType === "image/jpeg") return buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
  if (mimeType === "image/png") return buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
  if (mimeType === "image/webp") return buffer.subarray(0, 4).toString("ascii") === "RIFF" && buffer.subarray(8, 12).toString("ascii") === "WEBP";
  if (["video/mp4", "video/quicktime"].includes(mimeType)) return buffer.subarray(4, 8).toString("ascii") === "ftyp";
  if (mimeType === "video/webm") return buffer.subarray(0, 4).equals(Buffer.from([0x1a, 0x45, 0xdf, 0xa3]));
  return false;
}

@Injectable()
export class MemoriesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly rateLimit: RateLimitService,
  ) {}

  private async access(weddingId: string, user: AuthenticatedUser, edit = false): Promise<{ ownerId: string; access: "OWNER" | "EDIT" | "VIEW" }> {
    const wedding = await this.prisma.wedding.findUnique({
      where: { id: weddingId },
      select: {
        ownerId: true,
        collaborators: {
          where: { status: "ACCEPTED", OR: [{ userId: user.id }, { email: user.email.toLowerCase() }] },
          select: { permission: true },
          take: 1,
        },
      },
    });
    if (!wedding) throw new NotFoundException("Không tìm thấy đám cưới");
    const permission = wedding.ownerId === user.id ? "OWNER" : wedding.collaborators[0]?.permission;
    if (!permission) throw new NotFoundException("Không tìm thấy đám cưới");
    if (edit && permission === "VIEW") throw new ForbiddenException("Bạn chỉ có quyền xem album");
    return { ownerId: wedding.ownerId, access: permission };
  }

  private async ensureAlbum(weddingId: string): Promise<{ id: string; token: string }> {
    return this.prisma.memoryAlbum.upsert({
      where: { weddingId },
      update: {},
      create: { weddingId, token: albumToken() },
      select: { id: true, token: true },
    });
  }

  private uploadLimits(): { imageBytes: number; videoBytes: number; proxyVideoBytes: number; batchFiles: number; maxItems: number; maxBytes: number } {
    return {
      imageBytes: Math.max(1024 * 1024, Number(process.env.MEMORY_IMAGE_MAX_BYTES ?? 12 * 1024 * 1024)),
      videoBytes: Math.max(10 * 1024 * 1024, Number(process.env.MEMORY_VIDEO_MAX_BYTES ?? 150 * 1024 * 1024)),
      proxyVideoBytes: Math.max(10 * 1024 * 1024, Number(process.env.MEMORY_PROXY_VIDEO_MAX_BYTES ?? 30 * 1024 * 1024)),
      batchFiles: Math.min(20, Math.max(1, Number(process.env.MEMORY_UPLOAD_BATCH_MAX_FILES ?? 10))),
      maxItems: Math.max(1, Number(process.env.MEMORY_ALBUM_MAX_ITEMS ?? 3000)),
      maxBytes: Math.max(100 * 1024 * 1024, Number(process.env.MEMORY_ALBUM_MAX_BYTES ?? 20 * 1024 * 1024 * 1024)),
    };
  }

  private async albumUsage(albumId: string): Promise<{ count: number; bytes: number }> {
    const [count, bytes] = await Promise.all([
      this.prisma.memoryAsset.count({ where: { albumId } }),
      this.prisma.memoryAsset.aggregate({ where: { albumId }, _sum: { sizeBytes: true } }),
    ]);
    return { count, bytes: bytes._sum.sizeBytes ?? 0 };
  }

  private async assertCapacity(albumId: string, incomingBytes: number): Promise<void> {
    const limits = this.uploadLimits();
    const usage = await this.albumUsage(albumId);
    if (usage.count >= limits.maxItems) throw new ForbiddenException("Album đã đạt giới hạn số lượng nội dung.");
    if (usage.bytes + incomingBytes > limits.maxBytes) throw new ForbiddenException("Album đã đạt giới hạn dung lượng.");
  }

  private validateUploadMetadata(mimeType: string, sizeBytes: number, direct: boolean): { extension: string; isVideo: boolean } {
    if (!ALLOWED_MIME.has(mimeType)) throw new BadRequestException("Chỉ hỗ trợ JPEG, PNG, WebP, MP4, WebM và MOV");
    if (!Number.isFinite(sizeBytes) || sizeBytes < 1) throw new BadRequestException("Dung lượng file không hợp lệ");
    const limits = this.uploadLimits();
    const isVideo = mimeType.startsWith("video/");
    const maxSize = isVideo ? (direct ? limits.videoBytes : limits.proxyVideoBytes) : limits.imageBytes;
    if (sizeBytes > maxSize) {
      const maxMb = Math.round(maxSize / 1024 / 1024);
      throw new BadRequestException(`${isVideo ? "Video" : "Ảnh"} phải nhỏ hơn ${maxMb} MB`);
    }
    return { extension: MIME_EXTENSIONS[mimeType]!, isVideo };
  }

  private actorHash(token: string, actorKey: unknown): string {
    const key = cleanText(actorKey, 160);
    if (key.length < 12) throw new BadRequestException("Phiên tương tác không hợp lệ");
    const pepper = process.env.MEMORY_ACTOR_PEPPER ?? process.env.JWT_ACCESS_SECRET ?? "ngaydoi-local-memory-actor";
    return createHash("sha256").update(`${pepper}:${token}:${key}`).digest("hex");
  }

  private ticketSecret(): string {
    return process.env.MEMORY_UPLOAD_SIGNING_SECRET ?? process.env.JWT_ACCESS_SECRET ?? "ngaydoi-local-memory-upload-secret";
  }

  private signUploadTicket(payload: UploadTicketPayload): string {
    const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
    const signature = createHmac("sha256", this.ticketSecret()).update(encoded).digest("base64url");
    return `${encoded}.${signature}`;
  }

  private verifyUploadTicket(value: unknown): UploadTicketPayload {
    const ticket = cleanText(value, 5000);
    const [encoded, provided] = ticket.split(".");
    if (!encoded || !provided) throw new BadRequestException("Upload ticket không hợp lệ");
    const expected = createHmac("sha256", this.ticketSecret()).update(encoded).digest("base64url");
    const a = Buffer.from(provided);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) throw new BadRequestException("Upload ticket không hợp lệ");
    let payload: UploadTicketPayload;
    try { payload = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8")) as UploadTicketPayload; }
    catch { throw new BadRequestException("Upload ticket không hợp lệ"); }
    if (payload.expiresAt <= Date.now()) throw new BadRequestException("Upload ticket đã hết hạn");
    return payload;
  }

  private async resolveInvitation(albumWeddingId: string, invitationToken: unknown): Promise<{ id: string; guestName: string } | null> {
    const token = cleanText(invitationToken, 140);
    if (!token) return null;
    const invitation = await this.prisma.invitation.findUnique({
      where: { token },
      select: { id: true, guest: { select: { weddingId: true, fullName: true } } },
    });
    if (!invitation || invitation.guest.weddingId !== albumWeddingId) throw new BadRequestException("Liên kết khách mời không thuộc album này");
    return { id: invitation.id, guestName: invitation.guest.fullName };
  }

  private assetMediaUrl(asset: { id: string; publicUrl: string }, token: string): string {
    return /^https?:\/\//i.test(asset.publicUrl) ? asset.publicUrl : `/memories/assets/${asset.id}?token=${encodeURIComponent(token)}`;
  }

  private async decoratePublicAssets(token: string, assets: Array<any>, viewerKey?: string): Promise<Array<any>> {
    if (!assets.length) return [];
    const ids = assets.map((item) => item.id);
    const [reactionGroups, commentGroups] = await Promise.all([
      this.prisma.memoryReaction.groupBy({ by: ["assetId"], where: { assetId: { in: ids }, type: "HEART" }, _count: { _all: true } }),
      this.prisma.memoryComment.groupBy({ by: ["assetId"], where: { assetId: { in: ids }, status: "APPROVED" }, _count: { _all: true } }),
    ]);
    const reactions = new Map(reactionGroups.map((item) => [item.assetId, item._count._all]));
    const comments = new Map(commentGroups.map((item) => [item.assetId, item._count._all]));
    let reacted = new Set<string>();
    if (viewerKey) {
      const hash = this.actorHash(token, viewerKey);
      const rows = await this.prisma.memoryReaction.findMany({ where: { assetId: { in: ids }, actorHash: hash, type: "HEART" }, select: { assetId: true } });
      reacted = new Set(rows.map((item) => item.assetId));
    }
    return assets.map(({ publicUrl, ...asset }) => ({
      ...asset,
      mediaUrl: this.assetMediaUrl({ id: asset.id, publicUrl }, token),
      reactionCount: reactions.get(asset.id) ?? 0,
      commentCount: comments.get(asset.id) ?? 0,
      viewerReacted: reacted.has(asset.id),
    }));
  }

  private async publicAssetPage(albumId: string, token: string, cursor: string | undefined, limit: number, viewerKey?: string): Promise<{ items: Array<any>; nextCursor: string | null }> {
    const rows = await this.prisma.memoryAsset.findMany({
      where: { albumId, status: "APPROVED" },
      orderBy: [{ approvedAt: "desc" }, { id: "desc" }],
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      take: limit + 1,
      select: { id: true, type: true, mimeType: true, sizeBytes: true, uploaderName: true, uploaderMessage: true, createdAt: true, approvedAt: true, publicUrl: true },
    });
    const hasMore = rows.length > limit;
    const page = rows.slice(0, limit);
    return { items: await this.decoratePublicAssets(token, page, viewerKey), nextCursor: hasMore ? page.at(-1)?.id ?? null : null };
  }

  async ownerOverview(weddingId: string, user: AuthenticatedUser): Promise<unknown> {
    const { access } = await this.access(weddingId, user);
    await this.ensureAlbum(weddingId);
    const album = await this.prisma.memoryAlbum.findUnique({
      where: { weddingId },
      include: { wedding: { select: { id: true, title: true, brideName: true, groomName: true, mainDate: true, slug: true } } },
    });
    if (!album) throw new NotFoundException("Không tìm thấy album");
    const [groups, bytes, firstPage, pendingComments, pendingGuestbook] = await Promise.all([
      this.prisma.memoryAsset.groupBy({ by: ["status"], where: { albumId: album.id }, _count: { _all: true } }),
      this.prisma.memoryAsset.aggregate({ where: { albumId: album.id }, _sum: { sizeBytes: true } }),
      this.ownerAssetPage(album.id, album.token, undefined, 36, "ALL"),
      this.prisma.memoryComment.count({ where: { asset: { albumId: album.id }, status: "PENDING" } }),
      this.prisma.guestbookEntry.count({ where: { weddingId, status: "PENDING" } }),
    ]);
    const counts = new Map(groups.map((item) => [item.status, item._count._all]));
    const total = [...counts.values()].reduce((sum, value) => sum + value, 0);
    const limits = this.uploadLimits();
    const totalBytes = bytes._sum.sizeBytes ?? 0;
    return {
      ...album,
      access,
      assets: firstPage.items,
      assetPageInfo: { nextCursor: firstPage.nextCursor, pageSize: 36 },
      metrics: {
        total,
        pending: counts.get("PENDING") ?? 0,
        approved: counts.get("APPROVED") ?? 0,
        rejected: counts.get("REJECTED") ?? 0,
        archived: counts.get("ARCHIVED") ?? 0,
        totalBytes,
      },
      storagePolicy: {
        maxItems: limits.maxItems,
        maxBytes: limits.maxBytes,
        remainingItems: Math.max(0, limits.maxItems - total),
        remainingBytes: Math.max(0, limits.maxBytes - totalBytes),
      },
      socialMetrics: { pendingComments, pendingGuestbook },
    };
  }

  private async ownerAssetPage(albumId: string, token: string, cursor: string | undefined, limit: number, status: string): Promise<{ items: Array<any>; nextCursor: string | null }> {
    const where: any = { albumId };
    if (["PENDING", "APPROVED", "REJECTED", "ARCHIVED"].includes(status)) where.status = status;
    const rows = await this.prisma.memoryAsset.findMany({
      where,
      orderBy: [{ createdAt: "desc" }, { id: "desc" }],
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      take: limit + 1,
      include: { invitation: { select: { guest: { select: { fullName: true } } } }, _count: { select: { reactions: true, comments: { where: { status: "APPROVED" } } } } },
    });
    const hasMore = rows.length > limit;
    const page = rows.slice(0, limit).map((asset) => ({
      ...asset,
      mediaUrl: this.assetMediaUrl(asset, token),
      reactionCount: asset._count.reactions,
      commentCount: asset._count.comments,
      _count: undefined,
    }));
    return { items: page, nextCursor: hasMore ? page.at(-1)?.id ?? null : null };
  }

  async ownerAssets(weddingId: string, user: AuthenticatedUser, cursor?: string, limitValue?: unknown, status = "ALL"): Promise<unknown> {
    await this.access(weddingId, user);
    const album = await this.prisma.memoryAlbum.findUnique({ where: { weddingId }, select: { id: true, token: true } });
    if (!album) return { items: [], nextCursor: null };
    return this.ownerAssetPage(album.id, album.token, cleanText(cursor, 100) || undefined, clampLimit(limitValue, 36, 60), cleanText(status, 20).toUpperCase() || "ALL");
  }

  async publicOverview(token: string, viewerKey?: string): Promise<unknown> {
    const album = await this.prisma.memoryAlbum.findUnique({
      where: { token },
      include: { wedding: { select: { title: true, brideName: true, groomName: true, mainDate: true, coverImageUrl: true } } },
    });
    if (!album || !album.publicEnabled) throw new NotFoundException("Album chưa được mở công khai");
    const [assets, usage, guestbook] = await Promise.all([
      this.publicAssetPage(album.id, token, undefined, 24, viewerKey),
      this.albumUsage(album.id),
      album.guestbookEnabled ? this.publicGuestbookPage(album.weddingId, undefined, 8) : Promise.resolve({ items: [], nextCursor: null }),
    ]);
    const limits = this.uploadLimits();
    const direct = this.storage.provider() === "S3";
    return {
      id: album.id,
      token: album.token,
      title: album.title,
      description: album.description,
      thankYouTitle: album.thankYouTitle,
      thankYouMessage: album.thankYouMessage,
      uploadEnabled: album.uploadEnabled && (!album.closesAt || album.closesAt > new Date()),
      showUploaderName: album.showUploaderName,
      reactionsEnabled: album.reactionsEnabled,
      commentsEnabled: album.commentsEnabled,
      downloadsEnabled: album.downloadsEnabled,
      guestbookEnabled: album.guestbookEnabled,
      memoryModeEnabled: album.memoryModeEnabled,
      thankYouSignature: album.thankYouSignature,
      showCouplePhoto: album.showCouplePhoto,
      showWeddingDate: album.showWeddingDate,
      closesAt: album.closesAt,
      wedding: album.wedding,
      assets: assets.items,
      assetPageInfo: { nextCursor: assets.nextCursor, pageSize: 24 },
      guestbook: guestbook.items,
      guestbookPageInfo: { nextCursor: guestbook.nextCursor, pageSize: 8 },
      uploadPolicy: {
        strategy: direct ? "DIRECT" : "PROXY",
        maxImageBytes: limits.imageBytes,
        maxVideoBytes: direct ? limits.videoBytes : limits.proxyVideoBytes,
        maxFilesPerBatch: limits.batchFiles,
        maxItems: limits.maxItems,
        maxBytes: limits.maxBytes,
        totalItems: usage.count,
        totalBytes: usage.bytes,
        remainingItems: Math.max(0, limits.maxItems - usage.count),
        remainingBytes: Math.max(0, limits.maxBytes - usage.bytes),
      },
    };
  }

  async publicAssets(token: string, cursor?: string, limitValue?: unknown, viewerKey?: string): Promise<unknown> {
    const album = await this.prisma.memoryAlbum.findUnique({ where: { token }, select: { id: true, publicEnabled: true } });
    if (!album?.publicEnabled) throw new NotFoundException("Album chưa được mở công khai");
    return this.publicAssetPage(album.id, token, cleanText(cursor, 100) || undefined, clampLimit(limitValue, 24, 48), viewerKey);
  }

  async updateSettings(weddingId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown> {
    await this.access(weddingId, user, true);
    await this.ensureAlbum(weddingId);
    const closesAt = body.closesAt === undefined ? undefined : cleanText(body.closesAt, 40) ? new Date(cleanText(body.closesAt, 40)) : null;
    if (closesAt instanceof Date && Number.isNaN(closesAt.getTime())) throw new BadRequestException("Thời hạn upload không hợp lệ");
    return this.prisma.memoryAlbum.update({
      where: { weddingId },
      data: {
        title: body.title === undefined ? undefined : cleanText(body.title, 120) || "Khoảnh khắc cùng nhau",
        description: body.description === undefined ? undefined : cleanText(body.description, 1000),
        thankYouTitle: body.thankYouTitle === undefined ? undefined : cleanText(body.thankYouTitle, 120) || "Cảm ơn bạn đã chung vui",
        thankYouMessage: body.thankYouMessage === undefined ? undefined : cleanText(body.thankYouMessage, 1200),
        uploadEnabled: body.uploadEnabled === undefined ? undefined : Boolean(body.uploadEnabled),
        publicEnabled: body.publicEnabled === undefined ? undefined : Boolean(body.publicEnabled),
        moderationRequired: body.moderationRequired === undefined ? undefined : Boolean(body.moderationRequired),
        showUploaderName: body.showUploaderName === undefined ? undefined : Boolean(body.showUploaderName),
        reactionsEnabled: body.reactionsEnabled === undefined ? undefined : Boolean(body.reactionsEnabled),
        commentsEnabled: body.commentsEnabled === undefined ? undefined : Boolean(body.commentsEnabled),
        commentModerationRequired: body.commentModerationRequired === undefined ? undefined : Boolean(body.commentModerationRequired),
        downloadsEnabled: body.downloadsEnabled === undefined ? undefined : Boolean(body.downloadsEnabled),
        guestbookEnabled: body.guestbookEnabled === undefined ? undefined : Boolean(body.guestbookEnabled),
        guestbookModerationRequired: body.guestbookModerationRequired === undefined ? undefined : Boolean(body.guestbookModerationRequired),
        memoryModeEnabled: body.memoryModeEnabled === undefined ? undefined : Boolean(body.memoryModeEnabled),
        thankYouSignature: body.thankYouSignature === undefined ? undefined : cleanText(body.thankYouSignature, 160) || null,
        showCouplePhoto: body.showCouplePhoto === undefined ? undefined : Boolean(body.showCouplePhoto),
        showWeddingDate: body.showWeddingDate === undefined ? undefined : Boolean(body.showWeddingDate),
        closesAt,
      },
    });
  }

  async regenerateToken(weddingId: string, user: AuthenticatedUser): Promise<{ token: string }> {
    await this.access(weddingId, user, true);
    await this.ensureAlbum(weddingId);
    return this.prisma.memoryAlbum.update({ where: { weddingId }, data: { token: albumToken() }, select: { token: true } });
  }

  private async createAssetFromMetadata(album: any, metadata: UploadTicketPayload, publicUrl: string): Promise<unknown> {
    const existing = await this.prisma.memoryAsset.findUnique({ where: { storageKey: metadata.storageKey } });
    if (existing) return { id: existing.id, status: existing.status, message: "Khoảnh khắc đã được ghi nhận." };
    const status = album.moderationRequired ? "PENDING" : "APPROVED";
    const asset = await this.prisma.memoryAsset.create({
      data: {
        albumId: album.id,
        invitationId: metadata.invitationId,
        type: metadata.mimeType.startsWith("video/") ? "VIDEO" : "IMAGE",
        status,
        storageKey: metadata.storageKey,
        publicUrl: publicUrl || "pending",
        mimeType: metadata.mimeType,
        sizeBytes: metadata.sizeBytes,
        originalName: metadata.originalName,
        uploaderName: metadata.uploaderName,
        uploaderMessage: metadata.uploaderMessage,
        width: metadata.width,
        height: metadata.height,
        approvedAt: status === "APPROVED" ? new Date() : null,
      },
    });
    const resolvedPublicUrl = publicUrl || `/memories/assets/${asset.id}`;
    if (resolvedPublicUrl !== asset.publicUrl) await this.prisma.memoryAsset.update({ where: { id: asset.id }, data: { publicUrl: resolvedPublicUrl } });
    await this.prisma.notification.create({
      data: {
        weddingId: album.weddingId,
        userId: album.wedding.ownerId,
        type: "MEMORY_UPLOADED",
        title: "Có khoảnh khắc mới được chia sẻ",
        message: status === "PENDING" ? "Một ảnh hoặc video mới đang chờ bạn duyệt." : "Một khoảnh khắc mới đã được thêm vào album.",
        metadata: { memoryAssetId: asset.id, status, uploadStrategy: this.storage.provider() === "S3" ? "DIRECT" : "PROXY" },
      },
    });
    return { id: asset.id, status, message: status === "PENDING" ? "Đã gửi thành công. Nội dung sẽ xuất hiện sau khi được duyệt." : "Đã thêm vào album kỷ niệm." };
  }

  async prepareUpload(token: string, body: Record<string, unknown>): Promise<unknown> {
    const album = await this.prisma.memoryAlbum.findUnique({ where: { token }, include: { wedding: { select: { id: true, ownerId: true } } } });
    if (!album || !album.publicEnabled) throw new NotFoundException("Album chưa được mở công khai");
    if (!album.uploadEnabled || (album.closesAt && album.closesAt <= new Date())) throw new ForbiddenException("Album đang tạm ngừng nhận nội dung mới");
    if (this.storage.provider() !== "S3") return { strategy: "PROXY" };
    const mimeType = cleanText(body.mimeType, 100).toLowerCase();
    const sizeBytes = Number(body.sizeBytes);
    const { extension } = this.validateUploadMetadata(mimeType, sizeBytes, true);
    await this.assertCapacity(album.id, sizeBytes);
    const invitation = await this.resolveInvitation(album.weddingId, body.invitationToken);
    const storageKey = `memories/${album.weddingId}/${randomUUID()}${extension}`;
    const presigned = await this.storage.presignPut(storageKey, mimeType, 900);
    if (!presigned) return { strategy: "PROXY" };
    const payload: UploadTicketPayload = {
      albumId: album.id,
      weddingId: album.weddingId,
      invitationId: invitation?.id ?? null,
      storageKey,
      mimeType,
      sizeBytes,
      originalName: cleanText(body.originalName, 180) || `memory${extension}`,
      uploaderName: cleanText(body.uploaderName, 100) || invitation?.guestName || null,
      uploaderMessage: cleanText(body.uploaderMessage, 500) || null,
      width: Number.isFinite(Number(body.width)) ? Math.max(1, Math.trunc(Number(body.width))) : null,
      height: Number.isFinite(Number(body.height)) ? Math.max(1, Math.trunc(Number(body.height))) : null,
      expiresAt: Date.now() + presigned.expiresInSeconds * 1000,
    };
    return { strategy: "DIRECT", ...presigned, uploadTicket: this.signUploadTicket(payload) };
  }

  async completeUpload(token: string, body: Record<string, unknown>): Promise<unknown> {
    const metadata = this.verifyUploadTicket(body.uploadTicket);
    const album = await this.prisma.memoryAlbum.findUnique({ where: { token }, include: { wedding: { select: { ownerId: true } } } });
    if (!album || album.id !== metadata.albumId || album.weddingId !== metadata.weddingId || !album.publicEnabled) throw new NotFoundException("Album chưa được mở công khai");
    if (!album.uploadEnabled) throw new ForbiddenException("Album đang tạm ngừng nhận nội dung mới");
    if (album.closesAt && album.closesAt <= new Date()) throw new ForbiddenException("Thời gian nhận ảnh đã kết thúc");
    await this.assertCapacity(album.id, metadata.sizeBytes);
    let head;
    try { head = await this.storage.head(metadata.storageKey); }
    catch { throw new BadRequestException("File chưa được upload hoàn tất lên storage"); }
    if (head.sizeBytes < 1 || head.sizeBytes !== metadata.sizeBytes) {
      await this.storage.delete(metadata.storageKey).catch(() => undefined);
      throw new BadRequestException("Dung lượng file trên storage không khớp upload ticket");
    }
    if (head.contentType && head.contentType.split(";", 1)[0]?.trim().toLowerCase() !== metadata.mimeType) {
      await this.storage.delete(metadata.storageKey).catch(() => undefined);
      throw new BadRequestException("Định dạng file trên storage không khớp upload ticket");
    }
    return this.createAssetFromMetadata(album, metadata, this.storage.publicUrl(metadata.storageKey));
  }

  async upload(token: string, file: Express.Multer.File | undefined, body: Record<string, unknown>): Promise<unknown> {
    if (!file) throw new BadRequestException("Vui lòng chọn ảnh hoặc video");
    const album = await this.prisma.memoryAlbum.findUnique({ where: { token }, include: { wedding: { select: { id: true, ownerId: true } } } });
    if (!album || !album.publicEnabled) throw new NotFoundException("Album chưa được mở công khai");
    if (!album.uploadEnabled) throw new ForbiddenException("Album đang tạm ngừng nhận nội dung mới");
    if (album.closesAt && album.closesAt <= new Date()) throw new ForbiddenException("Thời gian nhận ảnh đã kết thúc");
    const { extension } = this.validateUploadMetadata(file.mimetype, file.size, false);
    if (!fileSignatureMatches(file.mimetype, file.buffer)) throw new BadRequestException("Nội dung file không khớp với định dạng đã chọn");
    await this.assertCapacity(album.id, file.size);
    const invitation = await this.resolveInvitation(album.weddingId, body.invitationToken);
    const key = `memories/${album.weddingId}/${randomUUID()}${extension}`;
    const stored = await this.storage.put(key, file.buffer, file.mimetype);
    try {
      return await this.createAssetFromMetadata(album, {
        albumId: album.id,
        weddingId: album.weddingId,
        invitationId: invitation?.id ?? null,
        storageKey: key,
        mimeType: file.mimetype,
        sizeBytes: file.size,
        originalName: cleanText(file.originalname, 180) || `memory${extension}`,
        uploaderName: cleanText(body.uploaderName, 100) || invitation?.guestName || null,
        uploaderMessage: cleanText(body.uploaderMessage, 500) || null,
        width: Number.isFinite(Number(body.width)) ? Math.max(1, Math.trunc(Number(body.width))) : null,
        height: Number.isFinite(Number(body.height)) ? Math.max(1, Math.trunc(Number(body.height))) : null,
        expiresAt: Date.now() + 60_000,
      }, stored.publicUrl);
    } catch (error) {
      await this.storage.delete(key).catch(() => undefined);
      throw error;
    }
  }

  private parseArchiveAssetIds(value: unknown): string[] | undefined {
    const raw = cleanText(value, 12000);
    if (!raw) return undefined;
    const ids = [...new Set(raw.split(",").map((item) => cleanText(item, 100)).filter(Boolean))];
    if (!ids.length) return undefined;
    if (ids.length > 200) throw new BadRequestException("Mỗi lượt chỉ có thể tải tối đa 200 nội dung đã chọn.");
    return ids;
  }

  private async approvedArchiveAssets(albumId: string, assetIds?: string[]): Promise<Array<{ id: string; storageKey: string; originalName: string; sizeBytes: number; createdAt: Date }>> {
    const rows = await this.prisma.memoryAsset.findMany({
      where: { albumId, status: "APPROVED", ...(assetIds ? { id: { in: assetIds } } : {}) },
      orderBy: [{ createdAt: "asc" }, { id: "asc" }],
      select: { id: true, storageKey: true, originalName: true, sizeBytes: true, createdAt: true },
    });
    if (!rows.length) throw new BadRequestException("Không có ảnh hoặc video đã duyệt để tải.");
    const maxEntries = Math.max(1, Number(process.env.MEMORY_ARCHIVE_MAX_ITEMS ?? 1000));
    const maxBytes = Math.min(3_500_000_000, Math.max(100 * 1024 * 1024, Number(process.env.MEMORY_ARCHIVE_MAX_BYTES ?? 2 * 1024 * 1024 * 1024)));
    const totalBytes = rows.reduce((sum, item) => sum + item.sizeBytes, 0);
    if (rows.length > maxEntries || totalBytes > maxBytes) {
      throw new BadRequestException(`Album quá lớn để tạo ZIP trong một lượt. Hãy chọn tối đa ${maxEntries} file và dưới ${Math.round(maxBytes / 1024 / 1024 / 1024)} GB.`);
    }
    return rows;
  }

  private archiveStream(entries: Array<{ id: string; storageKey: string; originalName: string; createdAt: Date }>): Readable {
    const storage = this.storage;
    async function* generate(): AsyncGenerator<Buffer> {
      const central: Buffer[] = [];
      let offset = 0;
      let index = 0;
      for (const entry of entries) {
        index += 1;
        const body = await storage.read(entry.storageKey);
        const checksum = crc32(body);
        const extension = extname(entry.storageKey) || extname(entry.originalName);
        const baseName = safeArchiveName(entry.originalName, `memory-${index}${extension}`);
        const fileName = Buffer.from(`${String(index).padStart(4, "0")}-${baseName}`, "utf8");
        const stamp = zipDosDateTime(entry.createdAt);
        const local = Buffer.alloc(30 + fileName.length);
        local.writeUInt32LE(0x04034b50, 0);
        local.writeUInt16LE(20, 4);
        local.writeUInt16LE(0x0800, 6);
        local.writeUInt16LE(0, 8);
        local.writeUInt16LE(stamp.time, 10);
        local.writeUInt16LE(stamp.date, 12);
        local.writeUInt32LE(checksum, 14);
        local.writeUInt32LE(body.length, 18);
        local.writeUInt32LE(body.length, 22);
        local.writeUInt16LE(fileName.length, 26);
        local.writeUInt16LE(0, 28);
        fileName.copy(local, 30);

        const directory = Buffer.alloc(46 + fileName.length);
        directory.writeUInt32LE(0x02014b50, 0);
        directory.writeUInt16LE(20, 4);
        directory.writeUInt16LE(20, 6);
        directory.writeUInt16LE(0x0800, 8);
        directory.writeUInt16LE(0, 10);
        directory.writeUInt16LE(stamp.time, 12);
        directory.writeUInt16LE(stamp.date, 14);
        directory.writeUInt32LE(checksum, 16);
        directory.writeUInt32LE(body.length, 20);
        directory.writeUInt32LE(body.length, 24);
        directory.writeUInt16LE(fileName.length, 28);
        directory.writeUInt16LE(0, 30);
        directory.writeUInt16LE(0, 32);
        directory.writeUInt16LE(0, 34);
        directory.writeUInt16LE(0, 36);
        directory.writeUInt32LE(0, 38);
        directory.writeUInt32LE(offset, 42);
        fileName.copy(directory, 46);
        central.push(directory);

        offset += local.length + body.length;
        yield local;
        yield body;
      }
      const centralOffset = offset;
      for (const item of central) { offset += item.length; yield item; }
      const end = Buffer.alloc(22);
      end.writeUInt32LE(0x06054b50, 0);
      end.writeUInt16LE(0, 4);
      end.writeUInt16LE(0, 6);
      end.writeUInt16LE(central.length, 8);
      end.writeUInt16LE(central.length, 10);
      end.writeUInt32LE(offset - centralOffset, 12);
      end.writeUInt32LE(centralOffset, 16);
      end.writeUInt16LE(0, 20);
      yield end;
    }
    return Readable.from(generate());
  }

  async publicArchive(token: string, assetIdsValue?: unknown): Promise<StreamableFile> {
    const album = await this.prisma.memoryAlbum.findUnique({ where: { token }, select: { id: true, publicEnabled: true, downloadsEnabled: true } });
    if (!album?.publicEnabled) throw new NotFoundException("Album chưa được mở công khai");
    if (!album.downloadsEnabled) throw new ForbiddenException("Album đang tắt tải file");
    const entries = await this.approvedArchiveAssets(album.id, this.parseArchiveAssetIds(assetIdsValue));
    return new StreamableFile(this.archiveStream(entries), { type: "application/zip", disposition: 'attachment; filename="ngaydoi-memories.zip"' });
  }

  async ownerArchive(weddingId: string, user: AuthenticatedUser, assetIdsValue?: unknown): Promise<StreamableFile> {
    await this.access(weddingId, user);
    const album = await this.prisma.memoryAlbum.findUnique({ where: { weddingId }, select: { id: true } });
    if (!album) throw new NotFoundException("Không tìm thấy album");
    const entries = await this.approvedArchiveAssets(album.id, this.parseArchiveAssetIds(assetIdsValue));
    return new StreamableFile(this.archiveStream(entries), { type: "application/zip", disposition: 'attachment; filename="ngaydoi-memories.zip"' });
  }

  async toggleReaction(token: string, assetId: string, body: Record<string, unknown>): Promise<{ reacted: boolean; count: number }> {
    const album = await this.prisma.memoryAlbum.findUnique({ where: { token }, select: { id: true, publicEnabled: true, reactionsEnabled: true } });
    if (!album?.publicEnabled) throw new NotFoundException("Album chưa được mở công khai");
    if (!album.reactionsEnabled) throw new ForbiddenException("Album đang tắt tương tác cảm xúc");
    const asset = await this.prisma.memoryAsset.findFirst({ where: { id: assetId, albumId: album.id, status: "APPROVED" }, select: { id: true } });
    if (!asset) throw new NotFoundException("Không tìm thấy khoảnh khắc");
    const hash = this.actorHash(token, body.actorKey);
    this.rateLimit.consume(`memory-react:${hash}`, 240, 60 * 60 * 1000);
    const existing = await this.prisma.memoryReaction.findUnique({ where: { assetId_actorHash_type: { assetId, actorHash: hash, type: "HEART" } } });
    if (existing) await this.prisma.memoryReaction.delete({ where: { id: existing.id } });
    else await this.prisma.memoryReaction.create({ data: { assetId, actorHash: hash, type: "HEART" } });
    const count = await this.prisma.memoryReaction.count({ where: { assetId, type: "HEART" } });
    return { reacted: !existing, count };
  }

  async comments(token: string, assetId: string, cursor?: string, limitValue?: unknown, viewerKey?: unknown): Promise<unknown> {
    const album = await this.prisma.memoryAlbum.findUnique({ where: { token }, select: { id: true, publicEnabled: true, commentsEnabled: true } });
    if (!album?.publicEnabled) throw new NotFoundException("Album chưa được mở công khai");
    if (!album.commentsEnabled) return { items: [], nextCursor: null };
    const asset = await this.prisma.memoryAsset.findFirst({ where: { id: assetId, albumId: album.id, status: "APPROVED" }, select: { id: true } });
    if (!asset) throw new NotFoundException("Không tìm thấy khoảnh khắc");
    const limit = clampLimit(limitValue, 12, 30);
    let viewerHash: string | null = null;
    if (cleanText(viewerKey, 160)) {
      try { viewerHash = this.actorHash(token, viewerKey); } catch { viewerHash = null; }
    }
    const rows = await this.prisma.memoryComment.findMany({
      where: { assetId, status: "APPROVED" }, orderBy: [{ createdAt: "desc" }, { id: "desc" }],
      cursor: cursor ? { id: cleanText(cursor, 100) } : undefined, skip: cursor ? 1 : 0, take: limit + 1,
      select: { id: true, authorName: true, body: true, createdAt: true, actorHash: true },
    });
    const hasMore = rows.length > limit;
    const items = rows.slice(0, limit).map(({ actorHash, ...comment }) => ({ ...comment, canDelete: Boolean(viewerHash && actorHash === viewerHash) }));
    return { items, nextCursor: hasMore ? items.at(-1)?.id ?? null : null };
  }

  async addComment(token: string, assetId: string, body: Record<string, unknown>): Promise<unknown> {
    const album = await this.prisma.memoryAlbum.findUnique({ where: { token }, select: { id: true, weddingId: true, publicEnabled: true, commentsEnabled: true, commentModerationRequired: true } });
    if (!album?.publicEnabled) throw new NotFoundException("Album chưa được mở công khai");
    if (!album.commentsEnabled) throw new ForbiddenException("Album đang tắt bình luận");
    const asset = await this.prisma.memoryAsset.findFirst({ where: { id: assetId, albumId: album.id, status: "APPROVED" }, select: { id: true } });
    if (!asset) throw new NotFoundException("Không tìm thấy khoảnh khắc");
    const hash = this.actorHash(token, body.actorKey);
    this.rateLimit.consume(`memory-comment:${hash}`, 40, 60 * 60 * 1000);
    const invitation = await this.resolveInvitation(album.weddingId, body.invitationToken);
    const authorName = cleanText(body.authorName, 100) || invitation?.guestName || "Khách mời";
    const text = cleanText(body.body, 600);
    if (text.length < 2) throw new BadRequestException("Bình luận cần có ít nhất 2 ký tự");
    const status = album.commentModerationRequired ? "PENDING" : "APPROVED";
    const comment = await this.prisma.memoryComment.create({
      data: { assetId, invitationId: invitation?.id ?? null, authorName, actorHash: hash, body: text, status, approvedAt: status === "APPROVED" ? new Date() : null },
      select: { id: true, authorName: true, body: true, status: true, createdAt: true },
    });
    return { ...comment, canDelete: status === "APPROVED", message: status === "PENDING" ? "Bình luận đã gửi và đang chờ duyệt." : "Bình luận đã được đăng ngay." };
  }

  async deleteOwnComment(token: string, assetId: string, commentId: string, body: Record<string, unknown>): Promise<{ deleted: true }> {
    const album = await this.prisma.memoryAlbum.findUnique({ where: { token }, select: { id: true, publicEnabled: true, commentsEnabled: true } });
    if (!album?.publicEnabled) throw new NotFoundException("Album chưa được mở công khai");
    if (!album.commentsEnabled) throw new ForbiddenException("Album đang tắt bình luận");
    const hash = this.actorHash(token, body.actorKey);
    const comment = await this.prisma.memoryComment.findFirst({
      where: { id: commentId, assetId, actorHash: hash, asset: { albumId: album.id } },
      select: { id: true, status: true },
    });
    if (!comment || comment.status === "HIDDEN") throw new NotFoundException("Không tìm thấy bình luận của bạn");
    await this.prisma.memoryComment.update({ where: { id: comment.id }, data: { status: "HIDDEN", hiddenAt: new Date(), approvedAt: null } });
    return { deleted: true };
  }

  private async publicGuestbookPage(weddingId: string, cursor: string | undefined, limit: number): Promise<{ items: Array<any>; nextCursor: string | null }> {
    const rows = await this.prisma.guestbookEntry.findMany({
      where: { weddingId, status: "APPROVED" }, orderBy: [{ approvedAt: "desc" }, { id: "desc" }],
      cursor: cursor ? { id: cursor } : undefined, skip: cursor ? 1 : 0, take: limit + 1,
      select: { id: true, authorName: true, message: true, createdAt: true, approvedAt: true },
    });
    const hasMore = rows.length > limit;
    const items = rows.slice(0, limit);
    return { items, nextCursor: hasMore ? items.at(-1)?.id ?? null : null };
  }

  async guestbook(token: string, cursor?: string, limitValue?: unknown): Promise<unknown> {
    const album = await this.prisma.memoryAlbum.findUnique({ where: { token }, select: { weddingId: true, publicEnabled: true, guestbookEnabled: true } });
    if (!album?.publicEnabled) throw new NotFoundException("Album chưa được mở công khai");
    if (!album.guestbookEnabled) return { items: [], nextCursor: null };
    return this.publicGuestbookPage(album.weddingId, cleanText(cursor, 100) || undefined, clampLimit(limitValue, 12, 30));
  }

  async ownerSocial(weddingId: string, user: AuthenticatedUser): Promise<unknown> {
    await this.access(weddingId, user);
    const [comments, guestbook] = await Promise.all([
      this.prisma.memoryComment.findMany({
        where: { asset: { album: { weddingId } }, status: { in: ["PENDING", "APPROVED"] } }, orderBy: { createdAt: "desc" }, take: 100,
        select: { id: true, authorName: true, body: true, status: true, createdAt: true, asset: { select: { id: true, type: true, uploaderName: true } } },
      }),
      this.prisma.guestbookEntry.findMany({
        where: { weddingId, status: "PENDING" }, orderBy: { createdAt: "desc" }, take: 50,
        select: { id: true, authorName: true, message: true, createdAt: true },
      }),
    ]);
    return { comments, guestbook };
  }

  async moderateSocial(weddingId: string, kind: string, id: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown> {
    await this.access(weddingId, user, true);
    const status = cleanText(body.status, 20).toUpperCase();
    if (!new Set(["APPROVED", "HIDDEN"]).has(status)) throw new BadRequestException("Trạng thái kiểm duyệt không hợp lệ");
    const now = new Date();
    if (kind === "comment") {
      const comment = await this.prisma.memoryComment.findFirst({ where: { id, asset: { album: { weddingId } } } });
      if (!comment) throw new NotFoundException("Không tìm thấy bình luận");
      return this.prisma.memoryComment.update({ where: { id }, data: { status: status as never, approvedAt: status === "APPROVED" ? now : null, hiddenAt: status === "HIDDEN" ? now : null } });
    }
    if (kind === "guestbook") {
      const entry = await this.prisma.guestbookEntry.findFirst({ where: { id, weddingId } });
      if (!entry) throw new NotFoundException("Không tìm thấy lời chúc");
      return this.prisma.guestbookEntry.update({ where: { id }, data: { status: status as never, approvedAt: status === "APPROVED" ? now : null, hiddenAt: status === "HIDDEN" ? now : null } });
    }
    throw new BadRequestException("Loại nội dung không hợp lệ");
  }

  async deleteOwnerComment(weddingId: string, commentId: string, user: AuthenticatedUser): Promise<{ deleted: true }> {
    await this.access(weddingId, user, true);
    const comment = await this.prisma.memoryComment.findFirst({ where: { id: commentId, asset: { album: { weddingId } } }, select: { id: true, status: true } });
    if (!comment || comment.status === "HIDDEN") throw new NotFoundException("Không tìm thấy bình luận");
    await this.prisma.memoryComment.update({ where: { id: comment.id }, data: { status: "HIDDEN", hiddenAt: new Date(), approvedAt: null } });
    return { deleted: true };
  }

  async moderate(weddingId: string, assetId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown> {
    await this.access(weddingId, user, true);
    const asset = await this.prisma.memoryAsset.findFirst({ where: { id: assetId, album: { weddingId } } });
    if (!asset) throw new NotFoundException("Không tìm thấy nội dung");
    const status = cleanText(body.status, 20);
    if (!new Set(["APPROVED", "REJECTED", "ARCHIVED"]).has(status)) throw new BadRequestException("Trạng thái kiểm duyệt không hợp lệ");
    const now = new Date();
    return this.prisma.memoryAsset.update({
      where: { id: assetId },
      data: {
        status: status as never,
        moderationNote: body.moderationNote === undefined ? undefined : cleanText(body.moderationNote, 500) || null,
        rejectionReason: status === "REJECTED" ? cleanText(body.rejectionReason, 300) || "Không phù hợp với album" : null,
        featuredOrder: status === "APPROVED" ? undefined : null,
        featuredAt: status === "APPROVED" ? undefined : null,
        approvedAt: status === "APPROVED" ? now : null,
        rejectedAt: status === "REJECTED" ? now : null,
      },
    });
  }

  async setFeatured(weddingId: string, assetId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown> {
    await this.access(weddingId, user, true);
    const album = await this.prisma.memoryAlbum.findUnique({ where: { weddingId }, select: { id: true } });
    if (!album) throw new NotFoundException("Không tìm thấy album");
    const asset = await this.prisma.memoryAsset.findFirst({ where: { id: assetId, albumId: album.id } });
    if (!asset) throw new NotFoundException("Không tìm thấy nội dung");
    const featured = Boolean(body.featured);
    if (!featured) {
      return this.prisma.memoryAsset.update({ where: { id: assetId }, data: { featuredOrder: null, featuredAt: null } });
    }
    if (asset.status !== "APPROVED") throw new BadRequestException("Chỉ ảnh/video đã duyệt mới có thể đặt làm khoảnh khắc nổi bật");
    if (asset.featuredOrder !== null) return asset;
    const [count, maxOrder] = await Promise.all([
      this.prisma.memoryAsset.count({ where: { albumId: album.id, status: "APPROVED", featuredOrder: { not: null } } }),
      this.prisma.memoryAsset.aggregate({ where: { albumId: album.id, status: "APPROVED", featuredOrder: { not: null } }, _max: { featuredOrder: true } }),
    ]);
    if (count >= 12) throw new BadRequestException("Trang kỷ niệm chỉ hỗ trợ tối đa 12 khoảnh khắc nổi bật");
    return this.prisma.memoryAsset.update({
      where: { id: assetId },
      data: { featuredOrder: (maxOrder._max.featuredOrder ?? 0) + 1, featuredAt: new Date() },
    });
  }

  async bulkModerate(weddingId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<{ updated: number }> {
    await this.access(weddingId, user, true);
    const ids = Array.isArray(body.assetIds) ? [...new Set(body.assetIds.map((value) => cleanText(value, 80)).filter(Boolean))] : [];
    const status = cleanText(body.status, 20);
    if (!ids.length) throw new BadRequestException("Vui lòng chọn ít nhất một nội dung");
    if (!new Set(["APPROVED", "REJECTED", "ARCHIVED"]).has(status)) throw new BadRequestException("Trạng thái kiểm duyệt không hợp lệ");
    const album = await this.prisma.memoryAlbum.findUnique({ where: { weddingId }, select: { id: true } });
    if (!album) return { updated: 0 };
    const now = new Date();
    const result = await this.prisma.memoryAsset.updateMany({
      where: { id: { in: ids }, albumId: album.id },
      data: { status: status as never, rejectionReason: status === "REJECTED" ? cleanText(body.rejectionReason, 300) || "Không phù hợp với album" : null, featuredOrder: status === "APPROVED" ? undefined : null, featuredAt: status === "APPROVED" ? undefined : null, approvedAt: status === "APPROVED" ? now : null, rejectedAt: status === "REJECTED" ? now : null },
    });
    return { updated: result.count };
  }

  async remove(weddingId: string, assetId: string, user: AuthenticatedUser): Promise<{ deleted: true }> {
    await this.access(weddingId, user, true);
    const asset = await this.prisma.memoryAsset.findFirst({ where: { id: assetId, album: { weddingId } } });
    if (!asset) throw new NotFoundException("Không tìm thấy nội dung");
    await this.prisma.memoryAsset.delete({ where: { id: assetId } });
    await this.storage.delete(asset.storageKey).catch(() => undefined);
    return { deleted: true };
  }

  async media(assetId: string, token: string, download = false): Promise<StreamableFile> {
    const asset = await this.prisma.memoryAsset.findUnique({ where: { id: assetId }, include: { album: { select: { token: true, publicEnabled: true, downloadsEnabled: true } } } });
    if (!asset || asset.album.token !== token || !asset.album.publicEnabled || asset.status !== "APPROVED") throw new NotFoundException("Không tìm thấy nội dung");
    if (download && !asset.album.downloadsEnabled) throw new ForbiddenException("Album đang tắt tải file");
    try {
      const buffer = await this.storage.read(asset.storageKey);
      return new StreamableFile(buffer, { type: asset.mimeType, disposition: `${download ? "attachment" : "inline"}; filename="memory${extname(asset.storageKey)}"` });
    } catch { throw new NotFoundException("File không còn tồn tại"); }
  }

  async ownerMedia(weddingId: string, assetId: string, user: AuthenticatedUser): Promise<StreamableFile> {
    await this.access(weddingId, user);
    const asset = await this.prisma.memoryAsset.findFirst({ where: { id: assetId, album: { weddingId } } });
    if (!asset) throw new NotFoundException("Không tìm thấy nội dung");
    try {
      const buffer = await this.storage.read(asset.storageKey);
      return new StreamableFile(buffer, { type: asset.mimeType, disposition: `inline; filename="memory${extname(asset.storageKey)}"` });
    } catch { throw new NotFoundException("File không còn tồn tại"); }
  }

  async qr(token: string): Promise<string> {
    const album = await this.prisma.memoryAlbum.findUnique({ where: { token }, select: { publicEnabled: true } });
    if (!album?.publicEnabled) throw new NotFoundException("Album chưa được mở công khai");
    const appUrl = (process.env.PUBLIC_APP_URL ?? process.env.FRONTEND_URL?.split(",")[0] ?? "http://localhost:3000").replace(/\/$/, "");
    return QRCode.toString(`${appUrl}/memories/${token}`, { type: "svg", width: 420, margin: 2, errorCorrectionLevel: "M", color: { dark: "#4A2635", light: "#FFFFFF" } });
  }
}
