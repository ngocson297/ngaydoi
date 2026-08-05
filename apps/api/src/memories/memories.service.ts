import { BadRequestException, ForbiddenException, Injectable, NotFoundException, StreamableFile } from "@nestjs/common";
import { randomBytes, randomUUID } from "node:crypto";
import { extname } from "node:path";
import QRCode from "qrcode";
import type { AuthenticatedUser } from "../auth/auth.types.js";
import { StorageService } from "../common/storage/storage.service.js";
import { PrismaService } from "../prisma/prisma.service.js";

const cleanText = (value: unknown, max: number): string => String(value ?? "").trim().slice(0, max);
const albumToken = (): string => randomBytes(32).toString("base64url");


function fileSignatureMatches(mimeType: string, buffer: Buffer): boolean {
  if (mimeType === "image/jpeg") return buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
  if (mimeType === "image/png") return buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
  if (mimeType === "image/webp") return buffer.subarray(0, 4).toString("ascii") === "RIFF" && buffer.subarray(8, 12).toString("ascii") === "WEBP";
  if (["video/mp4", "video/quicktime"].includes(mimeType)) return buffer.subarray(4, 8).toString("ascii") === "ftyp";
  if (mimeType === "video/webm") return buffer.subarray(0, 4).equals(Buffer.from([0x1a, 0x45, 0xdf, 0xa3]));
  return false;
}
const MIME_EXTENSIONS: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "video/mp4": ".mp4",
  "video/webm": ".webm",
  "video/quicktime": ".mov",
};

@Injectable()
export class MemoriesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
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

  async ownerOverview(weddingId: string, user: AuthenticatedUser): Promise<unknown> {
    const { access } = await this.access(weddingId, user);
    await this.ensureAlbum(weddingId);
    const album = await this.prisma.memoryAlbum.findUnique({
      where: { weddingId },
      include: {
        wedding: { select: { id: true, title: true, brideName: true, groomName: true, mainDate: true, slug: true } },
        assets: {
          orderBy: { createdAt: "desc" },
          include: { invitation: { select: { guest: { select: { fullName: true } } } } },
        },
      },
    });
    if (!album) throw new NotFoundException("Không tìm thấy album");
    const counts = album.assets.reduce<Record<string, number>>((result, item) => {
      result[item.status] = (result[item.status] ?? 0) + 1;
      return result;
    }, {});
    return {
      ...album,
      access,
      metrics: {
        total: album.assets.length,
        pending: counts.PENDING ?? 0,
        approved: counts.APPROVED ?? 0,
        rejected: counts.REJECTED ?? 0,
        archived: counts.ARCHIVED ?? 0,
        totalBytes: album.assets.reduce((sum, item) => sum + item.sizeBytes, 0),
      },
    };
  }

  async publicOverview(token: string): Promise<unknown> {
    const album = await this.prisma.memoryAlbum.findUnique({
      where: { token },
      include: {
        wedding: { select: { title: true, brideName: true, groomName: true, mainDate: true, coverImageUrl: true } },
        assets: {
          where: { status: "APPROVED" },
          orderBy: { approvedAt: "desc" },
          select: { id: true, type: true, mimeType: true, sizeBytes: true, uploaderName: true, uploaderMessage: true, createdAt: true },
        },
      },
    });
    if (!album || !album.publicEnabled) throw new NotFoundException("Album chưa được mở công khai");
    return {
      id: album.id,
      token: album.token,
      title: album.title,
      description: album.description,
      thankYouTitle: album.thankYouTitle,
      thankYouMessage: album.thankYouMessage,
      uploadEnabled: album.uploadEnabled && (!album.closesAt || album.closesAt > new Date()),
      showUploaderName: album.showUploaderName,
      closesAt: album.closesAt,
      wedding: album.wedding,
      assets: album.assets,
    };
  }

  async updateSettings(weddingId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown> {
    await this.access(weddingId, user, true);
    await this.ensureAlbum(weddingId);
    const closesAt = body.closesAt === undefined
      ? undefined
      : cleanText(body.closesAt, 40)
        ? new Date(cleanText(body.closesAt, 40))
        : null;
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
        closesAt,
      },
    });
  }

  async regenerateToken(weddingId: string, user: AuthenticatedUser): Promise<{ token: string }> {
    await this.access(weddingId, user, true);
    await this.ensureAlbum(weddingId);
    return this.prisma.memoryAlbum.update({ where: { weddingId }, data: { token: albumToken() }, select: { token: true } });
  }

  async upload(token: string, file: Express.Multer.File | undefined, body: Record<string, unknown>): Promise<unknown> {
    if (!file) throw new BadRequestException("Vui lòng chọn ảnh hoặc video");
    const album = await this.prisma.memoryAlbum.findUnique({
      where: { token },
      include: { wedding: { select: { id: true, ownerId: true } } },
    });
    if (!album || !album.publicEnabled) throw new NotFoundException("Album chưa được mở công khai");
    if (!album.uploadEnabled) throw new ForbiddenException("Album đang tạm ngừng nhận nội dung mới");
    if (album.closesAt && album.closesAt <= new Date()) throw new ForbiddenException("Thời gian nhận ảnh đã kết thúc");
    const extension = MIME_EXTENSIONS[file.mimetype];
    if (!extension) throw new BadRequestException("Chỉ hỗ trợ JPEG, PNG, WebP, MP4, WebM và MOV");
    const isVideo = file.mimetype.startsWith("video/");
    const maxSize = isVideo ? 30 * 1024 * 1024 : 10 * 1024 * 1024;
    if (file.size > maxSize) throw new BadRequestException(isVideo ? "Video phải nhỏ hơn 30 MB" : "Ảnh phải nhỏ hơn 10 MB");
    if (!fileSignatureMatches(file.mimetype, file.buffer)) throw new BadRequestException("Nội dung file không khớp với định dạng đã chọn");

    const [assetCount, storageUsage] = await Promise.all([
      this.prisma.memoryAsset.count({ where: { albumId: album.id } }),
      this.prisma.memoryAsset.aggregate({ where: { albumId: album.id }, _sum: { sizeBytes: true } }),
    ]);
    const maxItems = Math.max(1, Number(process.env.MEMORY_ALBUM_MAX_ITEMS ?? 1000));
    const maxBytes = Math.max(10 * 1024 * 1024, Number(process.env.MEMORY_ALBUM_MAX_BYTES ?? 5 * 1024 * 1024 * 1024));
    if (assetCount >= maxItems) throw new ForbiddenException("Album đã đạt giới hạn nội dung. Vui lòng liên hệ hỗ trợ để mở rộng.");
    if ((storageUsage._sum.sizeBytes ?? 0) + file.size > maxBytes) throw new ForbiddenException("Album đã đạt giới hạn dung lượng. Vui lòng liên hệ hỗ trợ để mở rộng.");

    const invitationToken = cleanText(body.invitationToken, 140);
    const invitation = invitationToken
      ? await this.prisma.invitation.findUnique({ where: { token: invitationToken }, select: { id: true, guest: { select: { weddingId: true, fullName: true } } } })
      : null;
    if (invitation && invitation.guest.weddingId !== album.weddingId) throw new BadRequestException("Liên kết khách mời không thuộc album này");

    const key = `memories/${album.weddingId}/${randomUUID()}${extension}`;
    const stored = await this.storage.put(key, file.buffer, file.mimetype);
    try {
      const status = album.moderationRequired ? "PENDING" : "APPROVED";
      const asset = await this.prisma.memoryAsset.create({
        data: {
          albumId: album.id,
          invitationId: invitation?.id ?? null,
          type: isVideo ? "VIDEO" : "IMAGE",
          status,
          storageKey: key,
          publicUrl: stored.publicUrl || "pending",
          mimeType: file.mimetype,
          sizeBytes: file.size,
          originalName: cleanText(file.originalname, 180) || `memory${extension}`,
          uploaderName: cleanText(body.uploaderName, 100) || invitation?.guest.fullName || null,
          uploaderMessage: cleanText(body.uploaderMessage, 500) || null,
          width: Number.isFinite(Number(body.width)) ? Math.max(1, Math.trunc(Number(body.width))) : null,
          height: Number.isFinite(Number(body.height)) ? Math.max(1, Math.trunc(Number(body.height))) : null,
          approvedAt: status === "APPROVED" ? new Date() : null,
        },
      });
      const publicUrl = stored.publicUrl || `/memories/assets/${asset.id}`;
      await this.prisma.memoryAsset.update({ where: { id: asset.id }, data: { publicUrl } });
      await this.prisma.notification.create({
        data: {
          weddingId: album.weddingId,
          userId: album.wedding.ownerId,
          type: "MEMORY_UPLOADED",
          title: "Có khoảnh khắc mới được chia sẻ",
          message: status === "PENDING" ? "Một ảnh hoặc video mới đang chờ bạn duyệt." : "Một khoảnh khắc mới đã được thêm vào album.",
          metadata: { memoryAssetId: asset.id, status },
        },
      });
      return {
        id: asset.id,
        status,
        message: status === "PENDING" ? "Đã gửi thành công. Nội dung sẽ xuất hiện sau khi được duyệt." : "Đã thêm vào album kỷ niệm.",
      };
    } catch (error) {
      await this.storage.delete(key).catch(() => undefined);
      throw error;
    }
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
        approvedAt: status === "APPROVED" ? now : null,
        rejectedAt: status === "REJECTED" ? now : null,
      },
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
      data: {
        status: status as never,
        rejectionReason: status === "REJECTED" ? cleanText(body.rejectionReason, 300) || "Không phù hợp với album" : null,
        approvedAt: status === "APPROVED" ? now : null,
        rejectedAt: status === "REJECTED" ? now : null,
      },
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

  async media(assetId: string, token: string): Promise<StreamableFile> {
    const asset = await this.prisma.memoryAsset.findUnique({ where: { id: assetId }, include: { album: { select: { token: true, publicEnabled: true } } } });
    if (!asset || asset.album.token !== token || !asset.album.publicEnabled) throw new NotFoundException("Không tìm thấy nội dung");
    if (asset.status !== "APPROVED" && asset.status !== "PENDING") throw new NotFoundException("Nội dung không khả dụng");
    try {
      const buffer = await this.storage.read(asset.storageKey);
      return new StreamableFile(buffer, { type: asset.mimeType, disposition: `inline; filename="memory${extname(asset.storageKey)}"` });
    } catch {
      throw new NotFoundException("File không còn tồn tại");
    }
  }

  async qr(token: string): Promise<string> {
    const album = await this.prisma.memoryAlbum.findUnique({ where: { token }, select: { publicEnabled: true } });
    if (!album?.publicEnabled) throw new NotFoundException("Album chưa được mở công khai");
    const appUrl = (process.env.PUBLIC_APP_URL ?? process.env.FRONTEND_URL?.split(",")[0] ?? "http://localhost:3000").replace(/\/$/, "");
    return QRCode.toString(`${appUrl}/memories/${token}`, { type: "svg", width: 420, margin: 2, errorCorrectionLevel: "M", color: { dark: "#4A2635", light: "#FFFFFF" } });
  }
}
