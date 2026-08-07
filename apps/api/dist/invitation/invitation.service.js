var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { extname } from "node:path";
import { randomBytes, randomUUID } from "node:crypto";
import { BadRequestException, ForbiddenException, Injectable, NotFoundException, StreamableFile } from "@nestjs/common";
import { EntitlementsService } from "../commercial/entitlements.service.js";
import { StorageService } from "../common/storage/storage.service.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { DEFAULT_SECTION_ORDER, INVITATION_TEMPLATES, VALID_SECTION_KEYS } from "./invitation.constants.js";
import { CreateVersionDto } from "./dto/create-version.dto.js";
import { ReorderMediaDto } from "./dto/reorder-media.dto.js";
import { UpdateInvitationDesignDto } from "./dto/update-invitation-design.dto.js";
import { UpdateMediaDto } from "./dto/update-media.dto.js";
import { UploadMediaDto } from "./dto/upload-media.dto.js";
let InvitationService = class InvitationService {
    prisma;
    entitlements;
    storage;
    giftBanksCache = null;
    constructor(prisma, entitlements, storage) {
        this.prisma = prisma;
        this.entitlements = entitlements;
        this.storage = storage;
    }
    normalizeEmail(email) {
        return email.trim().toLowerCase();
    }
    async getAccess(weddingId, user) {
        const wedding = await this.prisma.wedding.findUnique({
            where: { id: weddingId },
            include: {
                collaborators: {
                    where: {
                        status: "ACCEPTED",
                        OR: [{ userId: user.id }, { email: this.normalizeEmail(user.email) }],
                    },
                    take: 1,
                },
            },
        });
        if (!wedding)
            throw new NotFoundException("Wedding not found");
        if (wedding.ownerId === user.id)
            return { wedding, access: "OWNER" };
        const collaboration = wedding.collaborators[0];
        if (!collaboration)
            throw new NotFoundException("Wedding not found");
        return { wedding, access: collaboration.permission };
    }
    requireEdit(access) {
        if (access === "VIEW")
            throw new ForbiddenException("You only have view access to this invitation");
    }
    cleanSectionOrder(value) {
        if (!value)
            return undefined;
        const unique = [...new Set(value.filter((key) => VALID_SECTION_KEYS.has(key)))];
        for (const key of DEFAULT_SECTION_ORDER)
            if (!unique.includes(key))
                unique.push(key);
        return unique;
    }
    async ensureDesign(weddingId, templateKey = "classic-wine") {
        return this.prisma.invitationDesign.upsert({
            where: { weddingId },
            update: {},
            create: { weddingId, templateKey },
        });
    }
    getTemplates() {
        return INVITATION_TEMPLATES;
    }
    async getEditor(weddingId, user) {
        const { access } = await this.getAccess(weddingId, user);
        await this.ensureDesign(weddingId);
        const wedding = await this.prisma.wedding.findUnique({
            where: { id: weddingId },
            select: {
                id: true,
                slug: true,
                title: true,
                brideName: true,
                groomName: true,
                mainDate: true,
                brideFatherName: true,
                brideMotherName: true,
                groomFatherName: true,
                groomMotherName: true,
                showBrideParents: true,
                showGroomParents: true,
                story: true,
                status: true,
                timezone: true,
                templateKey: true,
                invitationDesign: true,
                memoryAlbum: { select: {
                        token: true, publicEnabled: true, guestbookEnabled: true, memoryModeEnabled: true, thankYouTitle: true, thankYouMessage: true,
                        thankYouSignature: true, showCouplePhoto: true, showWeddingDate: true,
                        assets: {
                            where: { status: "APPROVED", featuredOrder: { not: null } },
                            orderBy: [{ featuredOrder: "asc" }, { featuredAt: "asc" }],
                            take: 12,
                            select: { id: true, type: true, publicUrl: true, mimeType: true, featuredOrder: true, uploaderMessage: true },
                        },
                    } },
                guestbookEntries: { where: { status: "APPROVED" }, orderBy: [{ approvedAt: "desc" }, { createdAt: "desc" }], take: 6, select: { id: true, authorName: true, message: true, approvedAt: true, createdAt: true } },
                events: { orderBy: [{ sortOrder: "asc" }, { startsAt: "asc" }] },
                mediaAssets: { orderBy: [{ isCover: "desc" }, { sortOrder: "asc" }, { createdAt: "asc" }] },
                invitationVersions: {
                    orderBy: { versionNumber: "desc" },
                    take: 12,
                    select: { id: true, versionNumber: true, reason: true, createdAt: true },
                },
            },
        });
        if (!wedding)
            throw new NotFoundException("Wedding not found");
        const entitlements = await this.entitlements.getWeddingEntitlements(weddingId);
        return { ...wedding, access, entitlements };
    }
    async updateDesign(weddingId, dto, user) {
        const { access } = await this.getAccess(weddingId, user);
        this.requireEdit(access);
        const currentDesign = await this.ensureDesign(weddingId);
        if (dto.templateKey && dto.templateKey !== currentDesign.templateKey) {
            await this.entitlements.assertTemplateAccess(weddingId, dto.templateKey);
        }
        const sectionOrder = this.cleanSectionOrder(dto.sectionOrder);
        const { giftAccounts, ...designPatch } = dto;
        const requestedGiftQrIds = [...new Set((giftAccounts ?? []).flatMap((account) => account.mode !== "VIETQR" && account.qrAssetId ? [account.qrAssetId] : []))];
        const giftQrAssets = requestedGiftQrIds.length
            ? await this.prisma.giftQrAsset.findMany({ where: { weddingId, id: { in: requestedGiftQrIds } } })
            : [];
        const giftQrById = new Map(giftQrAssets.map((asset) => [asset.id, asset]));
        const normalizedGiftAccounts = giftAccounts?.map((account) => {
            const mode = account.mode === "UPLOAD" || account.qrAssetId ? "UPLOAD" : "VIETQR";
            const qrAsset = mode === "UPLOAD" && account.qrAssetId ? giftQrById.get(account.qrAssetId) : undefined;
            return {
                id: account.id.trim(),
                side: account.side,
                label: account.label.trim(),
                mode,
                qrAssetId: qrAsset?.id ?? "",
                qrImageUrl: qrAsset?.publicUrl ?? "",
                bankBin: account.bankBin.replace(/\D/g, ""),
                bankCode: account.bankCode.trim().toUpperCase(),
                bankName: account.bankName.trim(),
                accountNumber: account.accountNumber.replace(/\D/g, ""),
                accountName: account.accountName.trim().toUpperCase(),
                transferNote: account.transferNote.trim().slice(0, 25),
            };
        });
        const updated = await this.prisma.$transaction(async (tx) => {
            const design = await tx.invitationDesign.update({
                where: { weddingId },
                data: {
                    ...designPatch,
                    ...(normalizedGiftAccounts ? { giftAccounts: normalizedGiftAccounts } : {}),
                    sectionOrder,
                    musicUrl: dto.musicUrl === "" ? null : dto.musicUrl,
                    revision: { increment: 1 },
                    autosavedAt: new Date(),
                },
            });
            if (dto.templateKey) {
                await tx.wedding.update({ where: { id: weddingId }, data: { templateKey: dto.templateKey } });
            }
            return design;
        });
        await this.writeAudit(user.id, "INVITATION_AUTOSAVED", { weddingId, revision: updated.revision });
        return updated;
    }
    async createPreviewToken(weddingId, user) {
        const { access } = await this.getAccess(weddingId, user);
        if (!access)
            throw new ForbiddenException();
        const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
        const token = randomBytes(32).toString("base64url");
        await this.prisma.invitationPreviewToken.updateMany({
            where: { weddingId, createdById: user.id, revokedAt: null },
            data: { revokedAt: new Date() },
        });
        const record = await this.prisma.invitationPreviewToken.create({
            data: { weddingId, token, expiresAt, createdById: user.id },
        });
        await this.writeAudit(user.id, "INVITATION_PREVIEW_CREATED", { weddingId, previewTokenId: record.id });
        return { token, expiresAt, path: `/preview/${token}` };
    }
    async revokePreviewTokens(weddingId, user) {
        const { access } = await this.getAccess(weddingId, user);
        this.requireEdit(access);
        const result = await this.prisma.invitationPreviewToken.updateMany({
            where: { weddingId, revokedAt: null },
            data: { revokedAt: new Date() },
        });
        return { success: true, revoked: result.count };
    }
    async getPreview(token) {
        const record = await this.prisma.invitationPreviewToken.findUnique({ where: { token } });
        if (!record || record.revokedAt || record.expiresAt <= new Date()) {
            throw new NotFoundException("Preview link has expired or was revoked");
        }
        return this.buildInvitation(record.weddingId);
    }
    async createVersion(weddingId, dto, user) {
        const { access } = await this.getAccess(weddingId, user);
        this.requireEdit(access);
        const version = await this.saveVersion(weddingId, user.id, dto.reason?.trim() || "MANUAL");
        await this.writeAudit(user.id, "INVITATION_VERSION_CREATED", { weddingId, versionNumber: version.versionNumber });
        return version;
    }
    async restoreVersion(weddingId, versionId, user) {
        const { access } = await this.getAccess(weddingId, user);
        this.requireEdit(access);
        const version = await this.prisma.invitationVersion.findFirst({ where: { id: versionId, weddingId } });
        if (!version)
            throw new NotFoundException("Invitation version not found");
        const snapshot = version.snapshot;
        const design = snapshot.design;
        if (!design)
            throw new BadRequestException("This version does not contain invitation design data");
        const allowedKeys = [
            "templateKey", "paletteKey", "primaryColor", "accentColor", "backgroundColor", "surfaceColor", "textColor",
            "headingFont", "bodyFont", "heroEyebrow", "greeting", "storyTitle", "galleryTitle", "eventsTitle",
            "countdownTitle", "giftTitle", "giftMessage", "giftAccounts", "footerMessage", "showHero", "showFamily", "showStory", "showGallery", "showEvents",
            "showCountdown", "showGift", "showFooter", "musicEnabled", "musicUrl", "sectionOrder",
        ];
        const data = {};
        for (const key of allowedKeys)
            if (key in design)
                data[key] = design[key];
        await this.prisma.$transaction(async (tx) => {
            await tx.invitationDesign.upsert({
                where: { weddingId },
                update: { ...data, revision: { increment: 1 }, autosavedAt: new Date() },
                create: { ...data, weddingId },
            });
            if (typeof data.templateKey === "string") {
                await tx.wedding.update({ where: { id: weddingId }, data: { templateKey: data.templateKey } });
            }
            const mediaOrder = Array.isArray(snapshot.mediaOrder) ? snapshot.mediaOrder.filter((item) => typeof item === "string") : [];
            for (const [index, mediaId] of mediaOrder.entries()) {
                await tx.mediaAsset.updateMany({ where: { id: mediaId, weddingId }, data: { sortOrder: index } });
            }
        });
        await this.writeAudit(user.id, "INVITATION_VERSION_RESTORED", { weddingId, versionNumber: version.versionNumber });
        return this.getEditor(weddingId, user);
    }
    async saveVersion(weddingId, createdById, reason) {
        const data = await this.buildInvitation(weddingId);
        const latest = await this.prisma.invitationVersion.aggregate({
            where: { weddingId },
            _max: { versionNumber: true },
        });
        const snapshot = JSON.parse(JSON.stringify({
            design: data.invitationDesign,
            mediaOrder: data.mediaAssets.map((item) => item.id),
            savedAt: new Date().toISOString(),
        }));
        return this.prisma.invitationVersion.create({
            data: {
                weddingId,
                versionNumber: (latest._max.versionNumber ?? 0) + 1,
                reason,
                snapshot,
                createdById,
            },
            select: { id: true, versionNumber: true, reason: true, createdAt: true },
        });
    }
    async uploadGiftQr(weddingId, file, user) {
        if (!file)
            throw new BadRequestException("Choose a QR image to upload");
        const { access } = await this.getAccess(weddingId, user);
        this.requireEdit(access);
        const mimeExtensions = { "image/jpeg": ".jpg", "image/png": ".png", "image/webp": ".webp" };
        const extension = mimeExtensions[file.mimetype] ?? ".png";
        const storageKey = `gift-qr/${weddingId}/${randomUUID()}${extension}`;
        const stored = await this.storage.put(storageKey, file.buffer, file.mimetype);
        try {
            const created = await this.prisma.giftQrAsset.create({
                data: { weddingId, storageKey, publicUrl: stored.publicUrl, mimeType: file.mimetype, sizeBytes: file.size },
            });
            const publicUrl = stored.publicUrl || `/gift-transfer/media/${created.id}`;
            const asset = stored.publicUrl ? created : await this.prisma.giftQrAsset.update({ where: { id: created.id }, data: { publicUrl } });
            await this.writeAudit(user.id, "GIFT_QR_UPLOADED", { weddingId, giftQrAssetId: asset.id, sizeBytes: file.size });
            return { id: asset.id, publicUrl: asset.publicUrl, mimeType: asset.mimeType, sizeBytes: asset.sizeBytes };
        }
        catch (error) {
            await this.storage.delete(storageKey).catch(() => undefined);
            throw error;
        }
    }
    async deleteGiftQr(weddingId, assetId, user) {
        const { access } = await this.getAccess(weddingId, user);
        this.requireEdit(access);
        const asset = await this.prisma.giftQrAsset.findFirst({ where: { id: assetId, weddingId } });
        if (!asset)
            throw new NotFoundException("Gift QR image not found");
        await this.prisma.giftQrAsset.delete({ where: { id: asset.id } });
        await this.storage.delete(asset.storageKey).catch(() => undefined);
        await this.writeAudit(user.id, "GIFT_QR_DELETED", { weddingId, giftQrAssetId: asset.id });
        return { success: true };
    }
    async getGiftQrFile(assetId) {
        const asset = await this.prisma.giftQrAsset.findUnique({ where: { id: assetId } });
        if (!asset)
            throw new NotFoundException("Gift QR image not found");
        try {
            const buffer = await this.storage.read(asset.storageKey);
            return new StreamableFile(buffer, {
                type: asset.mimeType,
                disposition: `inline; filename="gift-qr${extname(asset.storageKey)}"`,
            });
        }
        catch {
            throw new NotFoundException("Gift QR image file not found");
        }
    }
    async uploadMedia(weddingId, file, dto, user) {
        if (!file)
            throw new BadRequestException("Choose an image to upload");
        const { access } = await this.getAccess(weddingId, user);
        this.requireEdit(access);
        const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
        if (!allowedTypes.has(file.mimetype))
            throw new BadRequestException("Only JPEG, PNG and WebP images are supported");
        if (file.size > 6 * 1024 * 1024)
            throw new BadRequestException("Image must be 6 MB or smaller");
        await this.entitlements.assertMediaCapacity(weddingId, 1);
        const extension = file.mimetype === "image/png" ? ".png" : file.mimetype === "image/webp" ? ".webp" : ".jpg";
        const storageKey = `${weddingId}/${randomUUID()}${extension}`;
        const stored = await this.storage.put(storageKey, file.buffer, file.mimetype);
        try {
            const count = await this.prisma.mediaAsset.count({ where: { weddingId } });
            const asset = await this.prisma.mediaAsset.create({
                data: {
                    weddingId,
                    type: "IMAGE",
                    storageKey,
                    publicUrl: stored.publicUrl || "pending",
                    mimeType: file.mimetype,
                    sizeBytes: file.size,
                    width: dto.width,
                    height: dto.height,
                    altText: dto.altText?.trim() || `${file.originalname} - ảnh cưới`,
                    sortOrder: count,
                    isCover: count === 0,
                },
            });
            const publicUrl = stored.publicUrl || `/media/public/${asset.id}`;
            const updated = await this.prisma.$transaction(async (tx) => {
                if (asset.isCover) {
                    await tx.mediaAsset.updateMany({ where: { weddingId, id: { not: asset.id } }, data: { isCover: false } });
                    await tx.wedding.update({ where: { id: weddingId }, data: { coverImageUrl: publicUrl } });
                }
                return tx.mediaAsset.update({ where: { id: asset.id }, data: { publicUrl } });
            });
            await this.writeAudit(user.id, "INVITATION_MEDIA_UPLOADED", { weddingId, mediaId: asset.id, sizeBytes: file.size });
            return updated;
        }
        catch (error) {
            await this.storage.delete(storageKey).catch(() => undefined);
            throw error;
        }
    }
    async updateMedia(weddingId, mediaId, dto, user) {
        const { access } = await this.getAccess(weddingId, user);
        this.requireEdit(access);
        const asset = await this.prisma.mediaAsset.findFirst({ where: { id: mediaId, weddingId } });
        if (!asset)
            throw new NotFoundException("Image not found");
        const updated = await this.prisma.$transaction(async (tx) => {
            if (dto.isCover) {
                await tx.mediaAsset.updateMany({ where: { weddingId }, data: { isCover: false } });
                await tx.wedding.update({ where: { id: weddingId }, data: { coverImageUrl: asset.publicUrl } });
            }
            return tx.mediaAsset.update({
                where: { id: mediaId },
                data: { altText: dto.altText?.trim(), sortOrder: dto.sortOrder, isCover: dto.isCover },
            });
        });
        return updated;
    }
    async reorderMedia(weddingId, dto, user) {
        const { access } = await this.getAccess(weddingId, user);
        this.requireEdit(access);
        const existing = await this.prisma.mediaAsset.findMany({ where: { weddingId }, select: { id: true } });
        const validIds = new Set(existing.map((item) => item.id));
        if (dto.mediaIds.some((id) => !validIds.has(id)))
            throw new BadRequestException("Media order contains an unknown image");
        await this.prisma.$transaction(dto.mediaIds.map((id, index) => this.prisma.mediaAsset.update({ where: { id }, data: { sortOrder: index } })));
        return { success: true };
    }
    async deleteMedia(weddingId, mediaId, user) {
        const { access } = await this.getAccess(weddingId, user);
        this.requireEdit(access);
        const asset = await this.prisma.mediaAsset.findFirst({ where: { id: mediaId, weddingId } });
        if (!asset)
            throw new NotFoundException("Image not found");
        await this.prisma.mediaAsset.delete({ where: { id: mediaId } });
        await this.storage.delete(asset.storageKey);
        if (asset.isCover) {
            const next = await this.prisma.mediaAsset.findFirst({ where: { weddingId }, orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }] });
            await this.prisma.$transaction(async (tx) => {
                if (next)
                    await tx.mediaAsset.update({ where: { id: next.id }, data: { isCover: true } });
                await tx.wedding.update({ where: { id: weddingId }, data: { coverImageUrl: next?.publicUrl ?? null } });
            });
        }
        await this.writeAudit(user.id, "INVITATION_MEDIA_DELETED", { weddingId, mediaId });
        return { success: true };
    }
    async getMediaFile(mediaId) {
        const asset = await this.prisma.mediaAsset.findUnique({ where: { id: mediaId } });
        if (!asset)
            throw new NotFoundException("Image not found");
        try {
            const buffer = await this.storage.read(asset.storageKey);
            return new StreamableFile(buffer, {
                type: asset.mimeType,
                disposition: `inline; filename="wedding-image${extname(asset.storageKey)}"`,
            });
        }
        catch {
            throw new NotFoundException("Image file not found");
        }
    }
    async getGiftTransferBanks() {
        if (this.giftBanksCache && this.giftBanksCache.expiresAt > Date.now()) {
            return { banks: this.giftBanksCache.banks, source: "LIVE" };
        }
        try {
            const response = await fetch("https://api.vietqr.io/v2/banks", { signal: AbortSignal.timeout(5000) });
            if (!response.ok)
                throw new Error(`VietQR bank directory returned ${response.status}`);
            const payload = await response.json();
            const banks = (payload.data ?? []).flatMap((item) => {
                const bin = String(item.bin ?? "").replace(/\D/g, "");
                const code = String(item.code ?? item.shortName ?? "").trim().toUpperCase();
                const shortName = String(item.shortName ?? item.code ?? "").trim();
                const name = String(item.name ?? shortName).trim();
                if (!/^\d{6}$/.test(bin) || !code || !name)
                    return [];
                return [{ bin, code, shortName, name, logo: typeof item.logo === "string" ? item.logo : null }];
            }).sort((left, right) => left.shortName.localeCompare(right.shortName, "vi"));
            this.giftBanksCache = { banks, expiresAt: Date.now() + 24 * 60 * 60 * 1000 };
            return { banks, source: "LIVE" };
        }
        catch {
            return { banks: [], source: "UNAVAILABLE" };
        }
    }
    async buildInvitation(weddingId) {
        await this.ensureDesign(weddingId);
        const wedding = await this.prisma.wedding.findUnique({
            where: { id: weddingId },
            select: {
                id: true, slug: true, title: true, brideName: true, groomName: true, mainDate: true,
                brideFatherName: true, brideMotherName: true, groomFatherName: true, groomMotherName: true,
                showBrideParents: true, showGroomParents: true, story: true, status: true, timezone: true,
                invitationDesign: true,
                memoryAlbum: { select: {
                        token: true, publicEnabled: true, guestbookEnabled: true, memoryModeEnabled: true, thankYouTitle: true, thankYouMessage: true,
                        thankYouSignature: true, showCouplePhoto: true, showWeddingDate: true,
                        assets: {
                            where: { status: "APPROVED", featuredOrder: { not: null } },
                            orderBy: [{ featuredOrder: "asc" }, { featuredAt: "asc" }],
                            take: 12,
                            select: { id: true, type: true, publicUrl: true, mimeType: true, featuredOrder: true, uploaderMessage: true },
                        },
                    } },
                guestbookEntries: { where: { status: "APPROVED" }, orderBy: [{ approvedAt: "desc" }, { createdAt: "desc" }], take: 6, select: { id: true, authorName: true, message: true, approvedAt: true, createdAt: true } },
                events: { orderBy: [{ sortOrder: "asc" }, { startsAt: "asc" }] },
                mediaAssets: { orderBy: [{ isCover: "desc" }, { sortOrder: "asc" }, { createdAt: "asc" }] },
            },
        });
        if (!wedding)
            throw new NotFoundException("Wedding not found");
        return wedding;
    }
    async writeAudit(userId, action, metadata) {
        await this.prisma.auditLog.create({ data: { userId, action, metadata, success: true } });
    }
};
InvitationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        EntitlementsService,
        StorageService])
], InvitationService);
export { InvitationService };
//# sourceMappingURL=invitation.service.js.map