var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { randomBytes } from "node:crypto";
import QRCode from "qrcode";
import { PrismaService } from "../prisma/prisma.service.js";
const numberValue = (value, fallback = 0) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? Math.trunc(parsed) : fallback;
};
const textValue = (value, max = 160) => String(value ?? "").trim().slice(0, max);
const csv = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
let EventOperationsService = class EventOperationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async access(weddingId, user, edit = false) {
        const wedding = await this.prisma.wedding.findUnique({
            where: { id: weddingId },
            include: { collaborators: { where: { status: "ACCEPTED", OR: [{ userId: user.id }, { email: user.email.toLowerCase() }] }, take: 1 } },
        });
        if (!wedding)
            throw new NotFoundException("Không tìm thấy đám cưới");
        const access = wedding.ownerId === user.id ? "OWNER" : (wedding.collaborators[0]?.permission ?? "VIEW");
        if (wedding.ownerId !== user.id && !wedding.collaborators[0])
            throw new NotFoundException("Không tìm thấy đám cưới");
        if (edit && access === "VIEW")
            throw new ForbiddenException("Bạn chỉ có quyền xem");
        return { wedding: { id: wedding.id, title: wedding.title, ownerId: wedding.ownerId }, access };
    }
    async scope(weddingId, eventId) {
        const clean = textValue(eventId, 80);
        if (!clean)
            return { eventId: null, eventKey: "WEDDING" };
        const event = await this.prisma.event.findFirst({ where: { id: clean, weddingId }, select: { id: true } });
        if (!event)
            throw new BadRequestException("Sự kiện không thuộc đám cưới này");
        return { eventId: event.id, eventKey: `EVENT:${event.id}` };
    }
    async overview(weddingId, eventId, user) {
        const { wedding, access } = await this.access(weddingId, user);
        const scope = await this.scope(weddingId, eventId);
        const [events, tables, guests, stations, records] = await Promise.all([
            this.prisma.event.findMany({ where: { weddingId }, orderBy: [{ sortOrder: "asc" }, { startsAt: "asc" }], select: { id: true, title: true, startsAt: true, venueName: true } }),
            this.prisma.seatingTable.findMany({ where: { weddingId, eventKey: scope.eventKey }, include: { assignments: { include: { guest: { select: { id: true, fullName: true, groupName: true, side: true } } }, orderBy: { createdAt: "asc" } } }, orderBy: [{ sortOrder: "asc" }, { name: "asc" }] }),
            this.prisma.guest.findMany({ where: { weddingId, archivedAt: null }, include: { invitations: { orderBy: { createdAt: "desc" }, take: 1, include: { rsvp: true } }, seatAssignments: { where: { eventKey: scope.eventKey }, take: 1 }, checkinRecords: { where: { eventKey: scope.eventKey }, take: 1 } }, orderBy: { fullName: "asc" } }),
            this.prisma.checkinStation.findMany({ where: { weddingId, eventKey: scope.eventKey }, orderBy: { createdAt: "desc" } }),
            this.prisma.checkinRecord.findMany({ where: { weddingId, eventKey: scope.eventKey }, include: { guest: { select: { fullName: true, groupName: true } }, station: { select: { name: true } } }, orderBy: { checkedInAt: "desc" }, take: 100 }),
        ]);
        const capacity = tables.reduce((sum, table) => sum + table.capacity, 0);
        const assignedSeats = tables.reduce((sum, table) => sum + table.assignments.reduce((inner, item) => inner + item.seatCount, 0), 0);
        const activeRecords = records.filter((record) => !record.checkedOutAt);
        return {
            wedding, access, scope, events, tables, stations, records,
            guests: guests.map((guest) => ({ ...guest, invitation: guest.invitations[0] ?? null, assignment: guest.seatAssignments[0] ?? null, checkin: guest.checkinRecords[0] ?? null, invitations: undefined, seatAssignments: undefined, checkinRecords: undefined })),
            metrics: { tables: tables.length, capacity, assignedSeats, unassignedGuests: guests.filter((guest) => !guest.seatAssignments.length).length, checkedInGuests: activeRecords.length, checkedInPeople: activeRecords.reduce((sum, record) => sum + record.adultCount + record.childCount, 0) },
        };
    }
    async createTable(weddingId, body, user) {
        await this.access(weddingId, user, true);
        const scope = await this.scope(weddingId, body.eventId);
        const name = textValue(body.name, 80);
        const code = textValue(body.code || name, 30).toUpperCase().replace(/[^A-Z0-9_-]/g, "-");
        if (!name || !code)
            throw new BadRequestException("Vui lòng nhập tên và mã bàn");
        const capacity = Math.min(50, Math.max(1, numberValue(body.capacity, 10)));
        try {
            return await this.prisma.seatingTable.create({ data: { weddingId, ...scope, name, code, capacity, zone: textValue(body.zone, 80) || null, shape: (["ROUND", "RECTANGLE", "LONG", "OTHER"].includes(String(body.shape)) ? String(body.shape) : "ROUND"), note: textValue(body.note, 300) || null, sortOrder: numberValue(body.sortOrder, 0) } });
        }
        catch {
            throw new ConflictException("Mã bàn đã được sử dụng trong sự kiện này");
        }
    }
    async updateTable(weddingId, tableId, body, user) {
        await this.access(weddingId, user, true);
        const table = await this.prisma.seatingTable.findFirst({ where: { id: tableId, weddingId }, include: { assignments: true } });
        if (!table)
            throw new NotFoundException("Không tìm thấy bàn");
        const capacity = body.capacity === undefined ? undefined : Math.min(50, Math.max(1, numberValue(body.capacity, table.capacity)));
        if (capacity !== undefined && table.assignments.reduce((sum, item) => sum + item.seatCount, 0) > capacity)
            throw new BadRequestException("Sức chứa mới nhỏ hơn số ghế đã phân");
        return this.prisma.seatingTable.update({ where: { id: tableId }, data: { name: body.name === undefined ? undefined : textValue(body.name, 80), capacity, zone: body.zone === undefined ? undefined : textValue(body.zone, 80) || null, shape: body.shape === undefined ? undefined : String(body.shape), note: body.note === undefined ? undefined : textValue(body.note, 300) || null, sortOrder: body.sortOrder === undefined ? undefined : numberValue(body.sortOrder) } });
    }
    async deleteTable(weddingId, tableId, user) {
        await this.access(weddingId, user, true);
        const table = await this.prisma.seatingTable.findFirst({ where: { id: tableId, weddingId }, include: { _count: { select: { assignments: true } } } });
        if (!table)
            throw new NotFoundException("Không tìm thấy bàn");
        if (table._count.assignments)
            throw new BadRequestException("Hãy bỏ phân bàn cho khách trước khi xóa bàn");
        await this.prisma.seatingTable.delete({ where: { id: tableId } });
        return { deleted: true };
    }
    async assignGuest(weddingId, body, user) {
        await this.access(weddingId, user, true);
        const guestId = textValue(body.guestId, 80);
        const tableId = textValue(body.tableId, 80);
        const [guest, table] = await Promise.all([this.prisma.guest.findFirst({ where: { id: guestId, weddingId } }), this.prisma.seatingTable.findFirst({ where: { id: tableId, weddingId }, include: { assignments: true } })]);
        if (!guest || !table)
            throw new NotFoundException("Không tìm thấy khách hoặc bàn");
        const seatCount = Math.min(20, Math.max(1, numberValue(body.seatCount, 1)));
        const occupied = table.assignments.filter((item) => item.guestId !== guestId).reduce((sum, item) => sum + item.seatCount, 0);
        if (occupied + seatCount > table.capacity)
            throw new BadRequestException("Bàn không còn đủ chỗ");
        return this.prisma.seatAssignment.upsert({ where: { guestId_eventKey: { guestId, eventKey: table.eventKey } }, update: { tableId, seatCount, note: textValue(body.note, 200) || null, eventId: table.eventId, weddingId }, create: { weddingId, eventId: table.eventId, eventKey: table.eventKey, tableId, guestId, seatCount, note: textValue(body.note, 200) || null } });
    }
    async unassignGuest(weddingId, assignmentId, user) {
        await this.access(weddingId, user, true);
        const result = await this.prisma.seatAssignment.deleteMany({ where: { id: assignmentId, weddingId } });
        if (!result.count)
            throw new NotFoundException("Không tìm thấy phân bàn");
        return { removed: true };
    }
    async autoAssign(weddingId, body, user) {
        await this.access(weddingId, user, true);
        const scope = await this.scope(weddingId, body.eventId);
        const [tables, guests] = await Promise.all([
            this.prisma.seatingTable.findMany({ where: { weddingId, eventKey: scope.eventKey }, include: { assignments: true }, orderBy: [{ sortOrder: "asc" }, { name: "asc" }] }),
            this.prisma.guest.findMany({ where: { weddingId, archivedAt: null, seatAssignments: { none: { eventKey: scope.eventKey } } }, include: { invitations: { orderBy: { createdAt: "desc" }, take: 1, include: { rsvp: true } } }, orderBy: [{ groupName: "asc" }, { fullName: "asc" }] }),
        ]);
        if (!tables.length)
            throw new BadRequestException("Hãy tạo ít nhất một bàn trước");
        let assigned = 0;
        for (const guest of guests) {
            const rsvp = guest.invitations[0]?.rsvp;
            const seats = rsvp?.status === "ATTENDING" ? Math.max(1, rsvp.adultCount + rsvp.childCount) : 1;
            const table = tables.find((candidate) => candidate.assignments.reduce((sum, item) => sum + item.seatCount, 0) + seats <= candidate.capacity);
            if (!table)
                continue;
            const created = await this.prisma.seatAssignment.create({ data: { weddingId, ...scope, tableId: table.id, guestId: guest.id, seatCount: seats } });
            table.assignments.push(created);
            assigned += 1;
        }
        return { assigned, remaining: guests.length - assigned };
    }
    async createStation(weddingId, body, user) {
        await this.access(weddingId, user, true);
        const scope = await this.scope(weddingId, body.eventId);
        const name = textValue(body.name, 80) || "Bàn đón khách";
        return this.prisma.checkinStation.create({ data: { weddingId, ...scope, name, token: randomBytes(24).toString("base64url") } });
    }
    async updateStation(weddingId, stationId, body, user) {
        await this.access(weddingId, user, true);
        const station = await this.prisma.checkinStation.findFirst({ where: { id: stationId, weddingId } });
        if (!station)
            throw new NotFoundException("Không tìm thấy trạm check-in");
        return this.prisma.checkinStation.update({ where: { id: stationId }, data: { name: body.name === undefined ? undefined : textValue(body.name, 80), status: body.status === undefined ? undefined : String(body.status), token: body.regenerateToken ? randomBytes(24).toString("base64url") : undefined } });
    }
    async activeStation(token) {
        const station = await this.prisma.checkinStation.findUnique({ where: { token }, include: { wedding: { select: { title: true, brideName: true, groomName: true } }, event: { select: { title: true, startsAt: true, venueName: true } } } });
        if (!station || station.status !== "ACTIVE")
            throw new NotFoundException("Link check-in không còn hoạt động");
        await this.prisma.checkinStation.update({ where: { id: station.id }, data: { lastUsedAt: new Date() } });
        return station;
    }
    async stationOverview(token) {
        const station = await this.activeStation(token);
        const [wedding, event, records] = await Promise.all([
            this.prisma.wedding.findUnique({ where: { id: station.weddingId }, select: { title: true, brideName: true, groomName: true } }),
            station.eventId ? this.prisma.event.findUnique({ where: { id: station.eventId }, select: { title: true, startsAt: true, venueName: true } }) : Promise.resolve(null),
            this.prisma.checkinRecord.findMany({ where: { weddingId: station.weddingId, eventKey: station.eventKey }, include: { guest: { select: { fullName: true } }, station: { select: { name: true } } }, orderBy: { checkedInAt: "desc" }, take: 20 }),
        ]);
        const active = records.filter((record) => !record.checkedOutAt);
        return { station: { id: station.id, name: station.name }, wedding, event, recent: records, metrics: { guests: active.length, people: active.reduce((sum, item) => sum + item.adultCount + item.childCount, 0) } };
    }
    async searchStationGuests(token, query) {
        const station = await this.activeStation(token);
        const q = textValue(query, 80);
        if (q.length < 2)
            return [];
        const guests = await this.prisma.guest.findMany({ where: { weddingId: station.weddingId, archivedAt: null, OR: [{ fullName: { contains: q, mode: "insensitive" } }, { phone: { contains: q } }, { email: { contains: q, mode: "insensitive" } }] }, include: { invitations: { orderBy: { createdAt: "desc" }, take: 1, include: { rsvp: true } }, seatAssignments: { where: { eventKey: station.eventKey }, take: 1, include: { table: { select: { name: true, code: true, zone: true } } } }, checkinRecords: { where: { eventKey: station.eventKey }, take: 1 } }, orderBy: { fullName: "asc" }, take: 20 });
        return guests.map((guest) => ({ id: guest.id, fullName: guest.fullName, salutation: guest.salutation, groupName: guest.groupName, phone: guest.phone, invitationToken: guest.invitations[0]?.token ?? null, rsvp: guest.invitations[0]?.rsvp ?? null, assignment: guest.seatAssignments[0] ?? null, checkin: guest.checkinRecords[0] ?? null }));
    }
    async checkIn(token, body) {
        const station = await this.activeStation(token);
        const invitationToken = textValue(body.invitationToken, 120).replace(/^NDG:/, "");
        const qrGuestId = textValue(body.qrGuestId, 100).replace(/^NDGUEST:/, "");
        const guestIdInput = textValue(body.guestId, 80);
        const invitation = invitationToken ? await this.prisma.invitation.findUnique({ where: { token: invitationToken }, include: { guest: true, rsvp: true } }) : null;
        const directGuestId = qrGuestId || guestIdInput;
        const directGuest = !invitation && directGuestId ? await this.prisma.guest.findFirst({
            where: { id: directGuestId, weddingId: station.weddingId, archivedAt: null },
            include: { invitations: { orderBy: { createdAt: "desc" }, take: 1, include: { rsvp: true } } },
        }) : null;
        const guest = invitation?.guest ?? directGuest;
        if (!guest || guest.weddingId !== station.weddingId)
            throw new NotFoundException("Không tìm thấy khách trong đám cưới này");
        const existing = await this.prisma.checkinRecord.findUnique({ where: { guestId_eventKey: { guestId: guest.id, eventKey: station.eventKey } } });
        if (existing && !existing.checkedOutAt)
            throw new ConflictException("Khách đã check-in trước đó");
        const rsvp = invitation?.rsvp ?? directGuest?.invitations[0]?.rsvp ?? null;
        const defaultAdults = rsvp?.status === "ATTENDING" ? rsvp.adultCount : 1;
        const defaultChildren = rsvp?.status === "ATTENDING" ? rsvp.childCount : 0;
        const adultCount = Math.min(20, Math.max(0, numberValue(body.adultCount, defaultAdults)));
        const childCount = Math.min(20, Math.max(0, numberValue(body.childCount, defaultChildren)));
        if (adultCount + childCount < 1)
            throw new BadRequestException("Số người check-in phải lớn hơn 0");
        const method = invitationToken || qrGuestId ? "QR" : "SEARCH";
        return this.prisma.checkinRecord.upsert({ where: { guestId_eventKey: { guestId: guest.id, eventKey: station.eventKey } }, update: { stationId: station.id, invitationId: invitation?.id ?? directGuest?.invitations[0]?.id ?? null, eventId: station.eventId, method, adultCount, childCount, note: textValue(body.note, 200) || null, checkedInAt: new Date(), checkedOutAt: null }, create: { weddingId: station.weddingId, eventId: station.eventId, eventKey: station.eventKey, guestId: guest.id, invitationId: invitation?.id ?? directGuest?.invitations[0]?.id ?? null, stationId: station.id, method, adultCount, childCount, note: textValue(body.note, 200) || null } });
    }
    async checkOut(token, body) {
        const station = await this.activeStation(token);
        const guestId = textValue(body.guestId, 80);
        const record = await this.prisma.checkinRecord.findUnique({ where: { guestId_eventKey: { guestId, eventKey: station.eventKey } } });
        if (!record || record.weddingId !== station.weddingId)
            throw new NotFoundException("Không tìm thấy lượt check-in");
        return this.prisma.checkinRecord.update({ where: { id: record.id }, data: { checkedOutAt: new Date() } });
    }
    async guestQr(invitationToken) {
        const token = textValue(invitationToken, 140);
        const invitation = await this.prisma.invitation.findUnique({ where: { token }, select: { token: true, revokedAt: true } });
        if (!invitation || invitation.revokedAt)
            throw new NotFoundException("Mã QR không còn hiệu lực");
        return QRCode.toString(`NDG:${invitation.token}`, { type: "svg", margin: 1, width: 320, errorCorrectionLevel: "M", color: { dark: "#321D25", light: "#FFFFFF" } });
    }
    async guestIdQr(guestId) {
        const id = textValue(guestId, 100);
        const guest = await this.prisma.guest.findFirst({ where: { id, archivedAt: null }, select: { id: true } });
        if (!guest)
            throw new NotFoundException("Khách không còn khả dụng");
        return QRCode.toString(`NDGUEST:${guest.id}`, { type: "svg", margin: 1, width: 320, errorCorrectionLevel: "M", color: { dark: "#321D25", light: "#FFFFFF" } });
    }
    async exportCsv(weddingId, eventId, user) {
        await this.access(weddingId, user);
        const scope = await this.scope(weddingId, eventId);
        const guests = await this.prisma.guest.findMany({ where: { weddingId, archivedAt: null }, include: { seatAssignments: { where: { eventKey: scope.eventKey }, take: 1, include: { table: true } }, checkinRecords: { where: { eventKey: scope.eventKey }, take: 1 }, invitations: { orderBy: { createdAt: "desc" }, take: 1, include: { rsvp: true } } }, orderBy: { fullName: "asc" } });
        const rows = [["Tên khách", "Nhóm", "Bàn", "Khu vực", "Số ghế", "RSVP", "Người lớn", "Trẻ em", "Check-in", "Thời gian"]];
        for (const guest of guests) {
            const assignment = guest.seatAssignments[0];
            const checkin = guest.checkinRecords[0];
            const rsvp = guest.invitations[0]?.rsvp;
            rows.push([guest.fullName, guest.groupName ?? "", assignment?.table.name ?? "", assignment?.table.zone ?? "", String(assignment?.seatCount ?? ""), rsvp?.status ?? "", String(rsvp?.adultCount ?? ""), String(rsvp?.childCount ?? ""), checkin && !checkin.checkedOutAt ? "Đã đến" : "", checkin?.checkedInAt.toISOString() ?? ""]);
        }
        return `\uFEFF${rows.map((row) => row.map(csv).join(",")).join("\n")}`;
    }
};
EventOperationsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], EventOperationsService);
export { EventOperationsService };
//# sourceMappingURL=event-operations.service.js.map