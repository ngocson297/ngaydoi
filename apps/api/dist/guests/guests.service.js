var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { randomBytes } from "node:crypto";
import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { EntitlementsService } from "../commercial/entitlements.service.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { BulkGuestsDto } from "./dto/bulk-guests.dto.js";
import { CreateGuestDto } from "./dto/create-guest.dto.js";
import { ImportGuestsDto } from "./dto/import-guests.dto.js";
import { UpdateGuestInvitationDto } from "./dto/update-invitation.dto.js";
import { UpdateGuestDto } from "./dto/update-guest.dto.js";
let GuestsService = class GuestsService {
    prisma;
    entitlements;
    constructor(prisma, entitlements) {
        this.prisma = prisma;
        this.entitlements = entitlements;
    }
    normalizeEmail(value) {
        const normalized = value?.trim().toLowerCase();
        return normalized || undefined;
    }
    normalizePhone(value) {
        const normalized = value?.replace(/[^0-9+]/g, "").trim();
        return normalized || undefined;
    }
    cleanText(value) {
        const normalized = value?.trim();
        return normalized || undefined;
    }
    cleanTags(values) {
        return [...new Set((values ?? []).map((value) => value.trim()).filter(Boolean))].slice(0, 20);
    }
    createInvitationToken() {
        return randomBytes(32).toString("base64url");
    }
    async getAccess(weddingId, user) {
        const wedding = await this.prisma.wedding.findUnique({
            where: { id: weddingId },
            include: {
                events: { orderBy: [{ sortOrder: "asc" }, { startsAt: "asc" }] },
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
            throw new ForbiddenException("You only have view access to the guest list");
    }
    async ensureGuest(weddingId, guestId) {
        const guest = await this.prisma.guest.findFirst({ where: { id: guestId, weddingId } });
        if (!guest)
            throw new NotFoundException("Guest not found");
        return guest;
    }
    async validateEventIds(weddingId, eventIds) {
        if (!eventIds) {
            const events = await this.prisma.event.findMany({ where: { weddingId }, select: { id: true }, orderBy: { sortOrder: "asc" } });
            return events.map((event) => event.id);
        }
        const unique = [...new Set(eventIds)];
        if (unique.length === 0)
            return [];
        const count = await this.prisma.event.count({ where: { weddingId, id: { in: unique } } });
        if (count !== unique.length)
            throw new BadRequestException("One or more selected events do not belong to this wedding");
        return unique;
    }
    guestInclude() {
        return {
            invitations: {
                orderBy: { createdAt: "desc" },
                take: 1,
                include: {
                    visibleEvents: { select: { eventId: true } },
                    rsvp: { include: { selectedEvents: { select: { eventId: true } } } },
                },
            },
        };
    }
    async list(weddingId, user, query) {
        const { access, wedding } = await this.getAccess(weddingId, user);
        const page = Math.max(1, Number(query.page ?? 1) || 1);
        const pageSize = Math.min(100, Math.max(10, Number(query.pageSize ?? 25) || 25));
        const search = this.cleanText(query.search);
        const status = this.cleanText(query.status);
        const side = ["SHARED", "BRIDE", "GROOM"].includes(query.side ?? "") ? query.side : undefined;
        const groupName = this.cleanText(query.groupName);
        const archived = query.archived === "true";
        const where = {
            weddingId,
            archivedAt: archived ? { not: null } : null,
            ...(side ? { side: side } : {}),
            ...(groupName ? { groupName } : {}),
            ...(search ? {
                OR: [
                    { fullName: { contains: search, mode: "insensitive" } },
                    { phone: { contains: search } },
                    { email: { contains: search, mode: "insensitive" } },
                    { groupName: { contains: search, mode: "insensitive" } },
                    { invitedBy: { contains: search, mode: "insensitive" } },
                    { tags: { has: search } },
                ],
            } : {}),
        };
        if (status === "PENDING")
            where.invitations = { none: { rsvp: { isNot: null } } };
        else if (["ATTENDING", "DECLINED", "MAYBE"].includes(status ?? "")) {
            where.invitations = { some: { rsvp: { is: { status: status } } } };
        }
        else if (status === "SENT")
            where.invitations = { some: { status: { in: ["SENT", "VIEWED", "RESPONDED"] } } };
        else if (status === "VIEWED")
            where.invitations = { some: { firstViewedAt: { not: null } } };
        else if (status === "CREATED")
            where.invitations = { some: { status: "CREATED" } };
        else if (status === "REVOKED")
            where.invitations = { some: { status: "REVOKED" } };
        const [items, total, groups] = await Promise.all([
            this.prisma.guest.findMany({
                where,
                include: this.guestInclude(),
                orderBy: [{ groupName: "asc" }, { fullName: "asc" }],
                skip: (page - 1) * pageSize,
                take: pageSize,
            }),
            this.prisma.guest.count({ where }),
            this.prisma.guest.groupBy({
                by: ["groupName"],
                where: { weddingId, archivedAt: null },
                _count: { _all: true },
                orderBy: { groupName: "asc" },
            }),
        ]);
        return {
            wedding: { id: wedding.id, title: wedding.title, slug: wedding.slug, status: wedding.status, access, events: wedding.events },
            items: items.map((guest) => ({ ...guest, invitation: guest.invitations[0] ?? null, invitations: undefined })),
            pagination: { page, pageSize, total, totalPages: Math.max(1, Math.ceil(total / pageSize)) },
            groups: groups.map((group) => ({ name: group.groupName ?? "Chưa phân nhóm", count: group._count._all })),
        };
    }
    async create(weddingId, dto, user) {
        const { access } = await this.getAccess(weddingId, user);
        this.requireEdit(access);
        await this.entitlements.assertGuestCapacity(weddingId, 1);
        const fullName = dto.fullName.trim();
        if (fullName.length < 2)
            throw new BadRequestException("Guest name must contain at least two characters");
        const email = this.normalizeEmail(dto.email);
        const phone = this.normalizePhone(dto.phone);
        await this.assertNoDuplicate(weddingId, { fullName, email, phone });
        const eventIds = await this.validateEventIds(weddingId, dto.eventIds);
        const guest = await this.prisma.$transaction(async (tx) => {
            const created = await tx.guest.create({
                data: {
                    weddingId,
                    fullName,
                    salutation: this.cleanText(dto.salutation),
                    phone,
                    email,
                    groupName: this.cleanText(dto.groupName),
                    side: dto.side ?? "SHARED",
                    invitedBy: this.cleanText(dto.invitedBy),
                    tableName: this.cleanText(dto.tableName),
                    maxAdultCount: dto.maxAdultCount ?? 1,
                    maxChildCount: dto.maxChildCount ?? 0,
                    note: this.cleanText(dto.note),
                    tags: this.cleanTags(dto.tags),
                },
            });
            const invitation = await tx.invitation.create({
                data: {
                    guestId: created.id,
                    token: this.createInvitationToken(),
                    greeting: this.cleanText(dto.greeting) ?? `Trân trọng kính mời ${this.cleanText(dto.salutation) ? `${this.cleanText(dto.salutation)} ` : ""}${fullName}`,
                    visibleEvents: { create: eventIds.map((eventId) => ({ eventId })) },
                },
                include: { visibleEvents: { select: { eventId: true } }, rsvp: true },
            });
            return { ...created, invitation };
        });
        await this.writeAudit(user.id, "GUEST_CREATED", { weddingId, guestId: guest.id });
        return guest;
    }
    async update(weddingId, guestId, dto, user) {
        const { access } = await this.getAccess(weddingId, user);
        this.requireEdit(access);
        const current = await this.ensureGuest(weddingId, guestId);
        const fullName = dto.fullName?.trim() ?? current.fullName;
        const email = dto.email === undefined ? current.email ?? undefined : this.normalizeEmail(dto.email);
        const phone = dto.phone === undefined ? current.phone ?? undefined : this.normalizePhone(dto.phone);
        await this.assertNoDuplicate(weddingId, { fullName, email, phone }, guestId);
        const updated = await this.prisma.guest.update({
            where: { id: guestId },
            data: {
                fullName: dto.fullName?.trim(),
                salutation: dto.salutation === undefined ? undefined : this.cleanText(dto.salutation) ?? null,
                phone: dto.phone === undefined ? undefined : phone ?? null,
                email: dto.email === undefined ? undefined : email ?? null,
                groupName: dto.groupName === undefined ? undefined : this.cleanText(dto.groupName) ?? null,
                side: dto.side,
                invitedBy: dto.invitedBy === undefined ? undefined : this.cleanText(dto.invitedBy) ?? null,
                tableName: dto.tableName === undefined ? undefined : this.cleanText(dto.tableName) ?? null,
                maxAdultCount: dto.maxAdultCount,
                maxChildCount: dto.maxChildCount,
                note: dto.note === undefined ? undefined : this.cleanText(dto.note) ?? null,
                tags: dto.tags ? this.cleanTags(dto.tags) : undefined,
            },
        });
        if (dto.eventIds !== undefined || dto.greeting !== undefined) {
            await this.updateInvitation(weddingId, guestId, { eventIds: dto.eventIds, greeting: dto.greeting }, user, false);
        }
        await this.writeAudit(user.id, "GUEST_UPDATED", { weddingId, guestId });
        return updated;
    }
    async remove(weddingId, guestId, user) {
        const { access } = await this.getAccess(weddingId, user);
        this.requireEdit(access);
        await this.ensureGuest(weddingId, guestId);
        await this.prisma.guest.delete({ where: { id: guestId } });
        await this.writeAudit(user.id, "GUEST_DELETED", { weddingId, guestId });
        return { success: true };
    }
    async updateInvitation(weddingId, guestId, dto, user, writeAudit = true) {
        const { access } = await this.getAccess(weddingId, user);
        this.requireEdit(access);
        const guest = await this.ensureGuest(weddingId, guestId);
        const eventIds = dto.eventIds === undefined ? undefined : await this.validateEventIds(weddingId, dto.eventIds);
        let invitation = await this.prisma.invitation.findFirst({ where: { guestId }, orderBy: { createdAt: "desc" } });
        if (!invitation) {
            const defaults = eventIds ?? await this.validateEventIds(weddingId, undefined);
            invitation = await this.prisma.invitation.create({
                data: {
                    guestId,
                    token: this.createInvitationToken(),
                    greeting: this.cleanText(dto.greeting) ?? `Trân trọng kính mời ${guest.salutation ? `${guest.salutation} ` : ""}${guest.fullName}`,
                    visibleEvents: { create: defaults.map((eventId) => ({ eventId })) },
                },
            });
        }
        else {
            invitation = await this.prisma.$transaction(async (tx) => {
                const updated = await tx.invitation.update({
                    where: { id: invitation.id },
                    data: { greeting: dto.greeting === undefined ? undefined : this.cleanText(dto.greeting) ?? null },
                });
                if (eventIds !== undefined) {
                    await tx.invitationEvent.deleteMany({ where: { invitationId: invitation.id } });
                    if (eventIds.length)
                        await tx.invitationEvent.createMany({ data: eventIds.map((eventId) => ({ invitationId: invitation.id, eventId })) });
                    const rsvp = await tx.rsvp.findUnique({ where: { invitationId: invitation.id }, select: { id: true } });
                    if (rsvp) {
                        await tx.rsvpEventSelection.deleteMany({
                            where: { rsvpId: rsvp.id, ...(eventIds.length ? { eventId: { notIn: eventIds } } : {}) },
                        });
                        const firstSelection = await tx.rsvpEventSelection.findFirst({ where: { rsvpId: rsvp.id }, orderBy: { createdAt: "asc" } });
                        await tx.rsvp.update({ where: { id: rsvp.id }, data: { eventId: firstSelection?.eventId ?? null } });
                    }
                }
                return updated;
            });
        }
        if (writeAudit)
            await this.writeAudit(user.id, "GUEST_INVITATION_UPDATED", { weddingId, guestId, invitationId: invitation.id });
        return this.prisma.invitation.findUnique({
            where: { id: invitation.id },
            include: { visibleEvents: { select: { eventId: true } }, rsvp: { include: { selectedEvents: { select: { eventId: true } } } } },
        });
    }
    async markSent(weddingId, guestId, user) {
        const { access } = await this.getAccess(weddingId, user);
        this.requireEdit(access);
        await this.ensureGuest(weddingId, guestId);
        const invitation = await this.prisma.invitation.findFirst({ where: { guestId }, orderBy: { createdAt: "desc" } });
        if (!invitation)
            throw new NotFoundException("Invitation not found");
        const updated = await this.prisma.invitation.update({
            where: { id: invitation.id },
            data: { status: invitation.status === "RESPONDED" ? "RESPONDED" : "SENT", sentAt: invitation.sentAt ?? new Date(), revokedAt: null },
        });
        await this.writeAudit(user.id, "GUEST_INVITATION_MARKED_SENT", { weddingId, guestId, invitationId: invitation.id });
        return updated;
    }
    async bulk(weddingId, dto, user) {
        const { access } = await this.getAccess(weddingId, user);
        this.requireEdit(access);
        const guestIds = [...new Set(dto.guestIds)].slice(0, 500);
        if (!guestIds.length)
            throw new BadRequestException("Select at least one guest");
        const count = await this.prisma.guest.count({ where: { weddingId, id: { in: guestIds } } });
        if (count !== guestIds.length)
            throw new BadRequestException("One or more guests do not belong to this wedding");
        if (dto.action === "DELETE")
            await this.prisma.guest.deleteMany({ where: { weddingId, id: { in: guestIds } } });
        if (dto.action === "ARCHIVE")
            await this.prisma.guest.updateMany({ where: { weddingId, id: { in: guestIds } }, data: { archivedAt: new Date() } });
        if (dto.action === "RESTORE") {
            const restoreCount = await this.prisma.guest.count({ where: { weddingId, id: { in: guestIds }, archivedAt: { not: null } } });
            if (restoreCount)
                await this.entitlements.assertGuestCapacity(weddingId, restoreCount);
            await this.prisma.guest.updateMany({ where: { weddingId, id: { in: guestIds } }, data: { archivedAt: null } });
        }
        if (dto.action === "MARK_SENT") {
            const sentAt = new Date();
            await this.prisma.$transaction([
                this.prisma.invitation.updateMany({
                    where: { guestId: { in: guestIds } },
                    data: { sentAt, revokedAt: null },
                }),
                this.prisma.invitation.updateMany({
                    where: { guestId: { in: guestIds }, status: { not: "RESPONDED" } },
                    data: { status: "SENT" },
                }),
            ]);
        }
        if (dto.action === "REVOKE") {
            await this.prisma.invitation.updateMany({
                where: { guestId: { in: guestIds } },
                data: { status: "REVOKED", revokedAt: new Date() },
            });
        }
        if (dto.action === "REGENERATE") {
            const invitations = await this.prisma.invitation.findMany({
                where: { guestId: { in: guestIds } },
                select: { id: true, sentAt: true, rsvp: { select: { id: true } } },
            });
            await this.prisma.$transaction(invitations.map((invitation) => this.prisma.invitation.update({
                where: { id: invitation.id },
                data: {
                    token: this.createInvitationToken(),
                    status: invitation.rsvp ? "RESPONDED" : "CREATED",
                    sentAt: invitation.rsvp ? invitation.sentAt : null,
                    firstViewedAt: null,
                    lastViewedAt: null,
                    viewCount: 0,
                    revokedAt: null,
                },
            })));
        }
        await this.writeAudit(user.id, "GUEST_BULK_ACTION", { weddingId, action: dto.action, count: guestIds.length });
        return { success: true, action: dto.action, affected: guestIds.length };
    }
    async importGuests(weddingId, dto, user, preview) {
        const { access } = await this.getAccess(weddingId, user);
        this.requireEdit(access);
        if (dto.rows.length > 1000)
            throw new BadRequestException("Import is limited to 1,000 rows per batch");
        const existing = await this.prisma.guest.findMany({
            where: { weddingId, archivedAt: null },
            select: { id: true, fullName: true, email: true, phone: true },
        });
        const normalized = dto.rows.map((raw, index) => this.normalizeImportRow(raw, index + 2));
        const errors = normalized.flatMap((item) => item.error ? [{ row: item.rowNumber, message: item.error }] : []);
        const valid = normalized.filter((item) => Boolean(item.value));
        const duplicates = [];
        const cleanRows = [];
        const seenImportKeys = new Map();
        for (const item of valid) {
            const importKey = item.value.email
                ? `email:${item.value.email}`
                : item.value.phone ? `phone:${item.value.phone}` : `name:${item.value.fullName.toLowerCase()}`;
            const firstRow = seenImportKeys.get(importKey);
            if (firstRow) {
                errors.push({ row: item.rowNumber, message: `Trùng với dòng ${firstRow} trong cùng file` });
                continue;
            }
            seenImportKeys.set(importKey, item.rowNumber);
            const duplicate = existing.find((guest) => (item.value.email && this.normalizeEmail(guest.email) === item.value.email)
                || (item.value.phone && this.normalizePhone(guest.phone) === item.value.phone)
                || (!item.value.email && !item.value.phone && guest.fullName.trim().toLowerCase() === item.value.fullName.toLowerCase()));
            if (duplicate)
                duplicates.push({ row: item.rowNumber, guestId: duplicate.id, fullName: duplicate.fullName });
            cleanRows.push({ ...item, duplicateGuestId: duplicate?.id });
        }
        const report = {
            preview,
            totalRows: dto.rows.length,
            validRows: cleanRows.length,
            errorRows: errors.length,
            duplicateRows: duplicates.length,
            willCreate: cleanRows.filter((row) => !row.duplicateGuestId).length,
            willUpdate: dto.duplicateMode === "UPDATE" ? cleanRows.filter((row) => row.duplicateGuestId).length : 0,
            willSkip: dto.duplicateMode === "SKIP" ? cleanRows.filter((row) => row.duplicateGuestId).length : 0,
            errors,
            duplicates,
            sample: cleanRows.slice(0, 20).map((row) => ({ row: row.rowNumber, ...row.value, duplicate: Boolean(row.duplicateGuestId) })),
        };
        if (preview || errors.length)
            return report;
        await this.entitlements.assertGuestCapacity(weddingId, report.willCreate);
        const eventIds = await this.validateEventIds(weddingId, undefined);
        for (const item of cleanRows) {
            if (item.duplicateGuestId && dto.duplicateMode === "SKIP")
                continue;
            if (item.duplicateGuestId) {
                await this.prisma.guest.update({ where: { id: item.duplicateGuestId }, data: item.value });
                continue;
            }
            await this.prisma.guest.create({
                data: {
                    weddingId,
                    ...item.value,
                    invitations: {
                        create: {
                            token: this.createInvitationToken(),
                            greeting: `Trân trọng kính mời ${item.value.salutation ? `${item.value.salutation} ` : ""}${item.value.fullName}`,
                            visibleEvents: { create: eventIds.map((eventId) => ({ eventId })) },
                        },
                    },
                },
            });
        }
        await this.writeAudit(user.id, "GUEST_IMPORT_COMPLETED", { weddingId, ...report });
        return { ...report, preview: false, imported: report.willCreate + report.willUpdate };
    }
    async exportGuests(weddingId, user) {
        await this.getAccess(weddingId, user);
        const guests = await this.prisma.guest.findMany({
            where: { weddingId, archivedAt: null },
            include: this.guestInclude(),
            orderBy: [{ groupName: "asc" }, { fullName: "asc" }],
        });
        return guests.map((guest) => {
            const invitation = guest.invitations[0];
            return {
                salutation: guest.salutation ?? "",
                fullName: guest.fullName,
                phone: guest.phone ?? "",
                email: guest.email ?? "",
                groupName: guest.groupName ?? "",
                side: guest.side,
                invitedBy: guest.invitedBy ?? "",
                maxAdultCount: guest.maxAdultCount,
                maxChildCount: guest.maxChildCount,
                tableName: guest.tableName ?? "",
                tags: guest.tags.join("|"),
                invitationStatus: invitation?.status ?? "NOT_CREATED",
                personalizedPath: invitation ? `/g/${invitation.token}` : "",
                rsvpStatus: invitation?.rsvp?.status ?? "PENDING",
                adultCount: invitation?.rsvp?.adultCount ?? 0,
                childCount: invitation?.rsvp?.childCount ?? 0,
                vegetarianCount: invitation?.rsvp?.vegetarianCount ?? 0,
                needsTransport: invitation?.rsvp?.needsTransport ? "YES" : "NO",
                message: invitation?.rsvp?.message ?? "",
                note: guest.note ?? "",
            };
        });
    }
    async analytics(weddingId, user) {
        const { wedding, access } = await this.getAccess(weddingId, user);
        const guests = await this.prisma.guest.findMany({
            where: { weddingId, archivedAt: null },
            include: {
                invitations: {
                    take: 1,
                    orderBy: { createdAt: "desc" },
                    include: { rsvp: { include: { selectedEvents: true } } },
                },
            },
        });
        const records = guests.map((guest) => ({ guest, invitation: guest.invitations[0] ?? null, rsvp: guest.invitations[0]?.rsvp ?? null }));
        const total = records.length;
        const responded = records.filter((record) => record.rsvp).length;
        const aggregate = (key) => {
            const map = new Map();
            for (const record of records) {
                const raw = record.guest[key];
                const label = typeof raw === "string" && raw ? raw : "Chưa phân loại";
                const current = map.get(label) ?? { total: 0, attending: 0, headcount: 0 };
                current.total += 1;
                if (record.rsvp?.status === "ATTENDING") {
                    current.attending += 1;
                    current.headcount += record.rsvp.adultCount + record.rsvp.childCount;
                }
                map.set(label, current);
            }
            return [...map.entries()].map(([label, values]) => ({ label, ...values })).sort((a, b) => b.total - a.total);
        };
        const eventMap = new Map();
        for (const record of records) {
            if (record.rsvp?.status !== "ATTENDING")
                continue;
            const headcount = record.rsvp.adultCount + record.rsvp.childCount;
            for (const selection of record.rsvp.selectedEvents)
                eventMap.set(selection.eventId, (eventMap.get(selection.eventId) ?? 0) + headcount);
        }
        return {
            wedding: { id: wedding.id, title: wedding.title, slug: wedding.slug, access },
            metrics: {
                invited: total,
                sent: records.filter((record) => record.invitation?.sentAt).length,
                viewed: records.filter((record) => record.invitation?.firstViewedAt).length,
                responded,
                attending: records.filter((record) => record.rsvp?.status === "ATTENDING").length,
                declined: records.filter((record) => record.rsvp?.status === "DECLINED").length,
                maybe: records.filter((record) => record.rsvp?.status === "MAYBE").length,
                pending: total - responded,
                estimatedHeadcount: records.reduce((sum, record) => sum + (record.rsvp?.status === "ATTENDING" ? record.rsvp.adultCount + record.rsvp.childCount : 0), 0),
                vegetarianMeals: records.reduce((sum, record) => sum + (record.rsvp?.status === "ATTENDING" ? record.rsvp.vegetarianCount : 0), 0),
                transportRequests: records.filter((record) => record.rsvp?.status === "ATTENDING" && record.rsvp.needsTransport).length,
                viewToRsvpRate: records.filter((record) => record.invitation?.firstViewedAt).length
                    ? Math.round((responded / records.filter((record) => record.invitation?.firstViewedAt).length) * 100)
                    : 0,
            },
            bySide: aggregate("side"),
            byGroup: aggregate("groupName"),
            byInviter: aggregate("invitedBy"),
            byEvent: wedding.events.map((event) => ({ id: event.id, title: event.title, headcount: eventMap.get(event.id) ?? 0 })),
        };
    }
    async getPersonalizedInvitation(token) {
        const invitation = await this.prisma.invitation.findUnique({
            where: { token },
            include: {
                guest: {
                    include: {
                        wedding: {
                            include: {
                                events: { orderBy: [{ sortOrder: "asc" }, { startsAt: "asc" }] },
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
                                mediaAssets: { orderBy: [{ isCover: "desc" }, { sortOrder: "asc" }] },
                            },
                        },
                    },
                },
                visibleEvents: { select: { eventId: true } },
                rsvp: { include: { selectedEvents: { select: { eventId: true } } } },
            },
        });
        const now = new Date();
        if (!invitation || invitation.status === "REVOKED" || invitation.revokedAt || invitation.guest.archivedAt) {
            throw new NotFoundException("Personalized invitation not found");
        }
        const wedding = invitation.guest.wedding;
        if (wedding.status !== "PUBLISHED" || (wedding.expiresAt && wedding.expiresAt <= now && !wedding.memoryAlbum?.memoryModeEnabled)) {
            throw new NotFoundException("Personalized invitation not found");
        }
        const updated = await this.prisma.invitation.update({
            where: { id: invitation.id },
            data: {
                status: invitation.status === "RESPONDED" ? "RESPONDED" : "VIEWED",
                firstViewedAt: invitation.firstViewedAt ?? now,
                lastViewedAt: now,
                viewCount: { increment: 1 },
            },
            select: { status: true, firstViewedAt: true, lastViewedAt: true, viewCount: true },
        });
        const allowedIds = invitation.visibleEvents.length
            ? new Set(invitation.visibleEvents.map((item) => item.eventId))
            : new Set(wedding.events.map((event) => event.id));
        const events = wedding.events.filter((event) => allowedIds.has(event.id));
        return {
            id: wedding.id,
            slug: wedding.slug,
            title: wedding.title,
            brideName: wedding.brideName,
            groomName: wedding.groomName,
            mainDate: wedding.mainDate,
            brideFatherName: wedding.brideFatherName,
            brideMotherName: wedding.brideMotherName,
            groomFatherName: wedding.groomFatherName,
            groomMotherName: wedding.groomMotherName,
            showBrideParents: wedding.showBrideParents,
            showGroomParents: wedding.showGroomParents,
            story: wedding.story,
            status: wedding.status,
            timezone: wedding.timezone,
            invitationDesign: wedding.invitationDesign,
            mediaAssets: wedding.mediaAssets,
            memoryAlbum: wedding.memoryAlbum,
            guestbookEntries: wedding.memoryAlbum?.guestbookEnabled ? wedding.guestbookEntries : [],
            events,
            personalization: {
                token,
                guestName: invitation.guest.fullName,
                salutation: invitation.guest.salutation,
                displayName: [invitation.guest.salutation, invitation.guest.fullName].filter(Boolean).join(" "),
                greeting: invitation.greeting,
                maxAdultCount: invitation.guest.maxAdultCount,
                maxChildCount: invitation.guest.maxChildCount,
                invitationStatus: updated.status,
                viewCount: updated.viewCount,
                currentRsvp: invitation.rsvp ? {
                    status: invitation.rsvp.status,
                    adultCount: invitation.rsvp.adultCount,
                    childCount: invitation.rsvp.childCount,
                    vegetarianCount: invitation.rsvp.vegetarianCount,
                    needsTransport: invitation.rsvp.needsTransport,
                    message: invitation.rsvp.message,
                    publishWish: invitation.rsvp.publishWish,
                    selectedEventIds: invitation.rsvp.selectedEvents.map((selection) => selection.eventId),
                    respondedAt: invitation.rsvp.respondedAt,
                    updatedAt: invitation.rsvp.updatedAt,
                } : null,
            },
        };
    }
    async notifications(weddingId, user) {
        const { access } = await this.getAccess(weddingId, user);
        const notifications = await this.prisma.notification.findMany({
            where: { weddingId, OR: [{ userId: user.id }, { userId: null }] },
            orderBy: { createdAt: "desc" },
            take: 30,
        });
        return { access, unread: notifications.filter((item) => !item.readAt).length, items: notifications };
    }
    async markNotificationRead(weddingId, notificationId, user) {
        await this.getAccess(weddingId, user);
        const notification = await this.prisma.notification.findFirst({
            where: { id: notificationId, weddingId, OR: [{ userId: user.id }, { userId: null }] },
        });
        if (!notification)
            throw new NotFoundException("Notification not found");
        return this.prisma.notification.update({ where: { id: notificationId }, data: { readAt: notification.readAt ?? new Date() } });
    }
    async assertNoDuplicate(weddingId, values, excludeGuestId) {
        const conditions = [];
        if (values.email)
            conditions.push({ email: { equals: values.email, mode: "insensitive" } });
        if (values.phone)
            conditions.push({ phone: values.phone });
        if (!conditions.length)
            conditions.push({ fullName: { equals: values.fullName, mode: "insensitive" } });
        const duplicate = await this.prisma.guest.findFirst({
            where: { weddingId, archivedAt: null, id: excludeGuestId ? { not: excludeGuestId } : undefined, OR: conditions },
            select: { id: true, fullName: true },
        });
        if (duplicate)
            throw new ConflictException(`Guest may already exist: ${duplicate.fullName}`);
    }
    normalizeImportRow(raw, rowNumber) {
        const read = (...keys) => {
            for (const key of keys) {
                const value = raw[key];
                if (value !== undefined && value !== null)
                    return String(value).trim();
            }
            return "";
        };
        const fullName = read("fullName", "Họ tên", "Tên khách", "name");
        if (fullName.length < 2)
            return { rowNumber, error: "Tên khách không hợp lệ" };
        const sideRaw = read("side", "Bên", "Nhà trai/nhà gái").toUpperCase();
        const side = sideRaw.includes("TRAI") || sideRaw === "GROOM" ? "GROOM" : sideRaw.includes("GÁI") || sideRaw.includes("GAI") || sideRaw === "BRIDE" ? "BRIDE" : "SHARED";
        const maxAdultCount = Math.min(20, Math.max(1, Number(read("maxAdultCount", "Người lớn", "Số người lớn")) || 1));
        const maxChildCount = Math.min(20, Math.max(0, Number(read("maxChildCount", "Trẻ em", "Số trẻ em")) || 0));
        const email = this.normalizeEmail(read("email", "Email"));
        if (email && !/^\S+@\S+\.\S+$/.test(email))
            return { rowNumber, error: "Email không hợp lệ" };
        return {
            rowNumber,
            value: {
                fullName,
                salutation: this.cleanText(read("salutation", "Xưng hô")),
                phone: this.normalizePhone(read("phone", "Số điện thoại", "Điện thoại")),
                email,
                groupName: this.cleanText(read("groupName", "Nhóm khách", "Nhóm")),
                side,
                invitedBy: this.cleanText(read("invitedBy", "Người mời")),
                maxAdultCount,
                maxChildCount,
                note: this.cleanText(read("note", "Ghi chú")),
                tags: this.cleanTags(read("tags", "Tags", "Thẻ").split(/[|,;]/)),
            },
        };
    }
    async writeAudit(userId, action, metadata) {
        await this.prisma.auditLog.create({ data: { userId, action, metadata: metadata } });
    }
};
GuestsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService, EntitlementsService])
], GuestsService);
export { GuestsService };
//# sourceMappingURL=guests.service.js.map