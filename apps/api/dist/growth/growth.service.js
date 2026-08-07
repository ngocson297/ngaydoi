var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { randomBytes } from "node:crypto";
import { PrismaService } from "../prisma/prisma.service.js";
const DEFAULT_STEPS = [
    { key: "profile", label: "Hoàn thiện hồ sơ", done: false },
    { key: "wedding", label: "Tạo đám cưới đầu tiên", done: false },
    { key: "invitation", label: "Chọn mẫu và chỉnh thiệp", done: false },
    { key: "guests", label: "Thêm khách mời", done: false },
    { key: "publish", label: "Xuất bản thiệp", done: false },
];
let GrowthService = class GrowthService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async track(body, user) {
        const eventName = String(body.eventName ?? "").trim().slice(0, 80);
        if (!eventName)
            throw new BadRequestException("eventName is required");
        await this.prisma.growthEvent.create({ data: {
                eventName,
                userId: user?.id ?? (body.userId ? String(body.userId) : null),
                weddingId: body.weddingId ? String(body.weddingId) : null,
                sessionId: body.sessionId ? String(body.sessionId) : null,
                source: body.source ? String(body.source).slice(0, 80) : null,
                campaign: body.campaign ? String(body.campaign).slice(0, 80) : null,
                properties: body.properties && typeof body.properties === "object" ? body.properties : undefined,
            } });
        return { accepted: true };
    }
    async onboarding(user) {
        return this.prisma.onboardingProgress.upsert({
            where: { userId: user.id },
            update: {},
            create: { userId: user.id, steps: DEFAULT_STEPS },
        });
    }
    async updateOnboarding(user, body) {
        const current = await this.onboarding(user);
        const steps = Array.isArray(body.steps) ? body.steps : current.steps;
        const completedAt = Array.isArray(steps) && steps.length > 0 && steps.every((item) => Boolean(item.done)) ? new Date() : null;
        return this.prisma.onboardingProgress.update({ where: { userId: user.id }, data: { steps: steps, dismissed: Boolean(body.dismissed), completedAt } });
    }
    async createSupport(user, body) {
        const subject = String(body.subject ?? "").trim();
        const message = String(body.message ?? "").trim();
        if (subject.length < 3 || message.length < 10)
            throw new BadRequestException("Vui lòng nhập tiêu đề và mô tả chi tiết hơn.");
        return this.prisma.supportTicket.create({ data: {
                userId: user.id, email: user.email, subject: subject.slice(0, 160), message: message.slice(0, 5000),
                category: String(body.category ?? "GENERAL").slice(0, 40), priority: String(body.priority ?? "NORMAL"),
            } });
    }
    async mySupport(user) {
        return this.prisma.supportTicket.findMany({ where: { userId: user.id }, orderBy: { createdAt: "desc" }, take: 50 });
    }
    async requestDomain(user, body) {
        const weddingId = String(body.weddingId ?? "");
        const hostname = String(body.hostname ?? "").trim().toLowerCase().replace(/^https?:\/\//, "").replace(/\/$/, "");
        if (!/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(hostname))
            throw new BadRequestException("Tên miền không hợp lệ.");
        const wedding = await this.prisma.wedding.findFirst({ where: { id: weddingId, ownerId: user.id } });
        if (!wedding)
            throw new NotFoundException("Không tìm thấy wedding.");
        return this.prisma.customDomain.upsert({ where: { weddingId }, update: { hostname, status: "PENDING_DNS", failureReason: null }, create: {
                weddingId, requestedById: user.id, hostname, verificationToken: randomBytes(18).toString("hex"), dnsTarget: process.env.CUSTOM_DOMAIN_CNAME_TARGET ?? "domains.ngaydoi.local",
            } });
    }
    async myDomains(user) {
        const weddings = await this.prisma.wedding.findMany({ where: { ownerId: user.id }, select: { id: true, title: true } });
        const ids = weddings.map((item) => item.id);
        const domains = await this.prisma.customDomain.findMany({ where: { weddingId: { in: ids } }, orderBy: { updatedAt: "desc" } });
        return domains.map((domain) => ({ ...domain, weddingTitle: weddings.find((item) => item.id === domain.weddingId)?.title ?? "Wedding" }));
    }
    async createReferral(user, body) {
        const raw = String(body.code ?? `${user.displayName}-${randomBytes(3).toString("hex")}`).toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 18);
        if (raw.length < 4)
            throw new BadRequestException("Mã giới thiệu cần ít nhất 4 ký tự.");
        return this.prisma.referralCode.create({ data: { ownerUserId: user.id, code: raw, label: body.label ? String(body.label).slice(0, 80) : null } });
    }
    async myReferrals(user) {
        return this.prisma.referralCode.findMany({ where: { ownerUserId: user.id }, orderBy: { createdAt: "desc" } });
    }
    async adminOverview() {
        const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
        const [events, tickets, domains, referrals] = await Promise.all([
            this.prisma.growthEvent.groupBy({ by: ["eventName"], where: { occurredAt: { gte: since } }, _count: { _all: true }, orderBy: { _count: { eventName: "desc" } } }),
            this.prisma.supportTicket.findMany({ orderBy: [{ priority: "desc" }, { createdAt: "desc" }], take: 100 }),
            this.prisma.customDomain.findMany({ orderBy: { updatedAt: "desc" }, take: 100 }),
            this.prisma.referralCode.findMany({ orderBy: { conversionCount: "desc" }, take: 50 }),
        ]);
        const counts = Object.fromEntries(events.map((item) => [item.eventName, item._count._all]));
        return { funnel: { landing: counts.landing_view ?? 0, signup: counts.signup_completed ?? 0, wedding: counts.wedding_created ?? 0, publish: counts.invitation_published ?? 0, paid: counts.order_paid ?? 0 }, events, tickets, domains, referrals };
    }
    async updateTicket(id, body) {
        return this.prisma.supportTicket.update({ where: { id }, data: {
                status: body.status ? String(body.status) : undefined,
                priority: body.priority ? String(body.priority) : undefined,
                assignedTo: body.assignedTo === undefined ? undefined : String(body.assignedTo || "") || null,
                resolution: body.resolution === undefined ? undefined : String(body.resolution || "") || null,
                firstResponseAt: body.status === "IN_PROGRESS" ? new Date() : undefined,
                resolvedAt: ["RESOLVED", "CLOSED"].includes(String(body.status)) ? new Date() : undefined,
            } });
    }
    async updateDomain(id, body) {
        const status = String(body.status ?? "VERIFYING");
        return this.prisma.customDomain.update({ where: { id }, data: { status, lastCheckedAt: new Date(), verifiedAt: status === "VERIFIED" || status === "ACTIVE" ? new Date() : undefined, activatedAt: status === "ACTIVE" ? new Date() : undefined, failureReason: body.failureReason ? String(body.failureReason) : null } });
    }
};
GrowthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], GrowthService);
export { GrowthService };
//# sourceMappingURL=growth.service.js.map