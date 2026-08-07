var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { randomBytes } from "node:crypto";
import { RateLimitService } from "../auth/rate-limit.service.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { WebhookService } from "../operations/webhook.service.js";
import { CreateRsvpDto } from "./create-rsvp.dto.js";
let RsvpService = class RsvpService {
    prisma;
    rateLimit;
    webhooks;
    constructor(prisma, rateLimit, webhooks) {
        this.prisma = prisma;
        this.rateLimit = rateLimit;
        this.webhooks = webhooks;
    }
    async submit(token, dto) {
        this.rateLimit.consume(`rsvp:${token}`, 15, 15 * 60 * 1000);
        const invitation = await this.prisma.invitation.findUnique({
            where: { token },
            include: {
                guest: { include: { wedding: { select: { id: true, ownerId: true, status: true, expiresAt: true, memoryAlbum: { select: { memoryModeEnabled: true } } } } } },
                visibleEvents: { select: { eventId: true } },
                rsvp: { include: { selectedEvents: { select: { eventId: true } } } },
            },
        });
        const now = new Date();
        if (!invitation || invitation.status === "REVOKED" || invitation.revokedAt || invitation.guest.archivedAt) {
            throw new NotFoundException("Invitation not found");
        }
        if (invitation.guest.wedding.status !== "PUBLISHED" || (invitation.guest.wedding.expiresAt && invitation.guest.wedding.expiresAt <= now)) {
            throw new NotFoundException("Invitation not found");
        }
        if (invitation.guest.wedding.memoryAlbum?.memoryModeEnabled) {
            throw new ForbiddenException("Lễ cưới đã diễn ra. RSVP hiện đã đóng.");
        }
        const total = dto.status === "DECLINED" ? 0 : dto.adultCount + dto.childCount;
        if (dto.status !== "DECLINED" && total < 1)
            throw new BadRequestException("Please enter at least one attendee");
        if (dto.adultCount > invitation.guest.maxAdultCount || dto.childCount > invitation.guest.maxChildCount) {
            throw new BadRequestException("Party size exceeds the invitation allowance");
        }
        if (dto.vegetarianCount > total)
            throw new BadRequestException("Vegetarian count cannot exceed party size");
        const selectedEventIds = dto.status === "DECLINED" ? [] : [...new Set(dto.selectedEventIds)];
        const allowedIds = invitation.visibleEvents.map((item) => item.eventId);
        const validAllowedIds = allowedIds.length
            ? allowedIds
            : (await this.prisma.event.findMany({ where: { weddingId: invitation.guest.weddingId }, select: { id: true } })).map((event) => event.id);
        if (selectedEventIds.some((eventId) => !validAllowedIds.includes(eventId))) {
            throw new BadRequestException("One or more selected events are not available for this invitation");
        }
        if (dto.status === "ATTENDING" && validAllowedIds.length > 0 && selectedEventIds.length === 0) {
            throw new BadRequestException("Select at least one event you will attend");
        }
        const normalized = {
            status: dto.status,
            adultCount: dto.status === "DECLINED" ? 0 : dto.adultCount,
            childCount: dto.status === "DECLINED" ? 0 : dto.childCount,
            vegetarianCount: dto.status === "DECLINED" ? 0 : dto.vegetarianCount,
            needsTransport: dto.status === "DECLINED" ? false : dto.needsTransport,
            message: dto.message?.trim() || null,
            publishWish: Boolean(dto.publishWish && dto.message?.trim()),
        };
        const result = await this.prisma.$transaction(async (tx) => {
            const rsvp = await tx.rsvp.upsert({
                where: { invitationId: invitation.id },
                create: { invitationId: invitation.id, eventId: selectedEventIds[0] ?? null, ...normalized },
                update: { eventId: selectedEventIds[0] ?? null, ...normalized, respondedAt: now },
            });
            await tx.rsvpEventSelection.deleteMany({ where: { rsvpId: rsvp.id } });
            if (selectedEventIds.length) {
                await tx.rsvpEventSelection.createMany({ data: selectedEventIds.map((eventId) => ({ rsvpId: rsvp.id, eventId })) });
            }
            await tx.rsvpHistory.create({
                data: {
                    rsvpId: rsvp.id,
                    status: normalized.status,
                    adultCount: normalized.adultCount,
                    childCount: normalized.childCount,
                    vegetarianCount: normalized.vegetarianCount,
                    needsTransport: normalized.needsTransport,
                    message: normalized.message,
                    selectedEventIds,
                    source: "GUEST",
                },
            });
            if (normalized.publishWish && normalized.message) {
                const album = await tx.memoryAlbum.upsert({
                    where: { weddingId: invitation.guest.weddingId },
                    update: {},
                    create: { weddingId: invitation.guest.weddingId, token: randomBytes(32).toString("base64url") },
                    select: { guestbookModerationRequired: true },
                });
                const wishStatus = album.guestbookModerationRequired ? "PENDING" : "APPROVED";
                await tx.guestbookEntry.upsert({
                    where: { invitationId: invitation.id },
                    create: {
                        weddingId: invitation.guest.weddingId,
                        invitationId: invitation.id,
                        authorName: invitation.guest.fullName,
                        message: normalized.message,
                        status: wishStatus,
                        approvedAt: wishStatus === "APPROVED" ? now : null,
                    },
                    update: {
                        authorName: invitation.guest.fullName,
                        message: normalized.message,
                        status: wishStatus,
                        approvedAt: wishStatus === "APPROVED" ? now : null,
                        hiddenAt: null,
                    },
                });
            }
            else {
                await tx.guestbookEntry.deleteMany({ where: { invitationId: invitation.id } });
            }
            await tx.invitation.update({
                where: { id: invitation.id },
                data: { status: "RESPONDED", revokedAt: null },
            });
            await tx.notification.create({
                data: {
                    weddingId: invitation.guest.weddingId,
                    userId: invitation.guest.wedding.ownerId,
                    type: "RSVP_RECEIVED",
                    title: `${invitation.guest.fullName} đã phản hồi`,
                    message: dto.status === "ATTENDING"
                        ? `Tham dự với ${normalized.adultCount + normalized.childCount} người.`
                        : dto.status === "DECLINED" ? "Không thể tham dự." : "Chưa chắc chắn có thể tham dự.",
                    metadata: { guestId: invitation.guestId, invitationId: invitation.id, rsvpId: rsvp.id, status: dto.status },
                },
            });
            return tx.rsvp.findUnique({
                where: { id: rsvp.id },
                include: { selectedEvents: { select: { eventId: true } } },
            });
        });
        await this.webhooks.emit("rsvp.updated", {
            weddingId: invitation.guest.weddingId,
            guestId: invitation.guestId,
            invitationId: invitation.id,
            rsvpId: result?.id ?? null,
            status: dto.status,
            adultCount: normalized.adultCount,
            childCount: normalized.childCount,
            selectedEventIds,
        }).catch(() => undefined);
        return {
            success: true,
            message: invitation.rsvp ? "Phản hồi của bạn đã được cập nhật." : "Cảm ơn bạn đã phản hồi.",
            rsvp: result ? { ...result, selectedEventIds: result.selectedEvents.map((item) => item.eventId), selectedEvents: undefined } : null,
        };
    }
};
RsvpService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        RateLimitService,
        WebhookService])
], RsvpService);
export { RsvpService };
//# sourceMappingURL=rsvp.service.js.map