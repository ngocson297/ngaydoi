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
import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { PlanCode } from "../generated/prisma/client.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { WebhookService } from "../operations/webhook.service.js";
import { CreateOrderDto } from "./dto/create-order.dto.js";
import { SubmitPaymentDto } from "./dto/submit-payment.dto.js";
import { EntitlementsService } from "./entitlements.service.js";
const planSelect = {
    id: true,
    code: true,
    name: true,
    description: true,
    priceAmount: true,
    currency: true,
    guestLimit: true,
    mediaLimit: true,
    templateKeys: true,
    customDomain: true,
    prioritySupport: true,
    requiresPublishReview: true,
};
let CommercialService = class CommercialService {
    prisma;
    entitlements;
    webhooks;
    constructor(prisma, entitlements, webhooks) {
        this.prisma = prisma;
        this.entitlements = entitlements;
        this.webhooks = webhooks;
    }
    toPlanSummary(plan) {
        return { ...plan, recommended: plan.code === "STANDARD" };
    }
    async assertWeddingOwner(weddingId, userId) {
        const wedding = await this.prisma.wedding.findFirst({ where: { id: weddingId, ownerId: userId } });
        if (!wedding)
            throw new NotFoundException("Wedding not found");
        return wedding;
    }
    async getCatalog() {
        const [plans, addOns] = await Promise.all([
            this.prisma.plan.findMany({ where: { active: true }, select: planSelect, orderBy: { sortOrder: "asc" } }),
            this.prisma.addOn.findMany({ where: { active: true }, orderBy: { sortOrder: "asc" } }),
        ]);
        return {
            plans: plans.map((plan) => this.toPlanSummary(plan)),
            addOns,
            payment: {
                method: "MANUAL_BANK_TRANSFER",
                bankName: process.env.BANK_NAME ?? "Ngân hàng Demo",
                accountName: process.env.BANK_ACCOUNT_NAME ?? "NGAY DOI DEMO",
                accountNumber: process.env.BANK_ACCOUNT_NUMBER ?? "0123456789",
                note: "Nội dung chuyển khoản là mã đơn hàng. Đây là cấu hình demo; hãy thay thông tin thật trước khi bán.",
            },
        };
    }
    async getEntitlements(weddingId, user) {
        await this.assertWeddingOwner(weddingId, user.id);
        return this.entitlements.getWeddingEntitlements(weddingId);
    }
    async resolveQuote(dto) {
        const requestedPlanCode = dto.planCode.trim().toUpperCase();
        const planCode = Object.values(PlanCode).find((code) => code === requestedPlanCode);
        if (!planCode)
            throw new BadRequestException("Mã gói dịch vụ không hợp lệ");
        const plan = await this.prisma.plan.findFirst({ where: { code: planCode, active: true }, select: planSelect });
        if (!plan)
            throw new NotFoundException("Plan not found");
        if (plan.code === "FREE")
            throw new BadRequestException("Gói miễn phí không cần tạo đơn hàng");
        const requestedCodes = [...new Set((dto.addOnCodes ?? []).map((code) => code.trim().toUpperCase()).filter(Boolean))];
        const addOns = requestedCodes.length
            ? await this.prisma.addOn.findMany({ where: { code: { in: requestedCodes }, active: true }, orderBy: { sortOrder: "asc" } })
            : [];
        if (addOns.length !== requestedCodes.length)
            throw new BadRequestException("Một hoặc nhiều add-on không hợp lệ");
        const subtotalAmount = plan.priceAmount + addOns.reduce((sum, item) => sum + item.priceAmount, 0);
        let coupon = null;
        let discountAmount = 0;
        if (dto.couponCode) {
            const now = new Date();
            coupon = await this.prisma.coupon.findFirst({
                where: {
                    code: dto.couponCode.trim().toUpperCase(),
                    active: true,
                    OR: [{ startsAt: null }, { startsAt: { lte: now } }],
                    AND: [{ OR: [{ endsAt: null }, { endsAt: { gte: now } }] }],
                },
                select: { id: true, code: true, name: true, discountType: true, discountValue: true, usageLimit: true, usedCount: true, planCodes: true },
            });
            if (!coupon)
                throw new BadRequestException("Mã ưu đãi không tồn tại hoặc đã hết hạn");
            if (coupon.usageLimit !== null && coupon.usedCount >= coupon.usageLimit)
                throw new BadRequestException("Mã ưu đãi đã hết lượt sử dụng");
            if (coupon.planCodes.length && !coupon.planCodes.includes(plan.code))
                throw new BadRequestException("Mã ưu đãi không áp dụng cho gói này");
            discountAmount = coupon.discountType === "PERCENTAGE"
                ? Math.floor(subtotalAmount * Math.min(100, coupon.discountValue) / 100)
                : Math.min(subtotalAmount, coupon.discountValue);
        }
        return {
            plan: this.toPlanSummary(plan),
            addOns: addOns.map((item) => ({ id: item.id, code: item.code, name: item.name, priceAmount: item.priceAmount, quantity: 1, totalAmount: item.priceAmount })),
            coupon: coupon ? { code: coupon.code, name: coupon.name } : null,
            subtotalAmount,
            discountAmount,
            totalAmount: Math.max(0, subtotalAmount - discountAmount),
            currency: plan.currency,
            planId: plan.id,
            couponId: coupon?.id ?? null,
            addOnIds: addOns.map((item) => item.id),
        };
    }
    async quote(dto, user) {
        await this.assertWeddingOwner(dto.weddingId, user.id);
        const quote = await this.resolveQuote(dto);
        const { planId: _planId, couponId: _couponId, addOnIds: _addOnIds, ...publicQuote } = quote;
        return publicQuote;
    }
    async createOrder(dto, user) {
        await this.assertWeddingOwner(dto.weddingId, user.id);
        const quote = await this.resolveQuote(dto);
        const activeCandidates = await this.prisma.order.findMany({
            where: {
                weddingId: dto.weddingId,
                userId: user.id,
                planId: quote.planId,
                status: { in: ["AWAITING_PAYMENT", "PAYMENT_REVIEW"] },
            },
            include: { items: true, payments: true, plan: true },
            orderBy: { createdAt: "desc" },
            take: 10,
        });
        const requestedAddOns = [...quote.addOnIds].sort();
        const activeDuplicate = activeCandidates.find((candidate) => {
            const currentAddOns = candidate.items.flatMap((item) => item.addOnId ? [item.addOnId] : []).sort();
            return candidate.couponId === quote.couponId && currentAddOns.length === requestedAddOns.length && currentAddOns.every((id, index) => id === requestedAddOns[index]);
        });
        if (activeDuplicate)
            return activeDuplicate;
        const now = new Date();
        const orderNumber = `ND-${now.toISOString().slice(0, 10).replaceAll("-", "")}-${randomBytes(3).toString("hex").toUpperCase()}`;
        const addOns = quote.addOnIds.length ? await this.prisma.addOn.findMany({ where: { id: { in: quote.addOnIds } } }) : [];
        const order = await this.prisma.$transaction(async (tx) => {
            const created = await tx.order.create({
                data: {
                    orderNumber,
                    userId: user.id,
                    weddingId: dto.weddingId,
                    planId: quote.planId,
                    couponId: quote.couponId,
                    subtotalAmount: quote.subtotalAmount,
                    discountAmount: quote.discountAmount,
                    totalAmount: quote.totalAmount,
                    currency: quote.currency,
                    customerNote: dto.customerNote?.trim() || null,
                    items: {
                        create: [
                            { itemType: "PLAN", planId: quote.planId, name: quote.plan.name, quantity: 1, unitAmount: quote.plan.priceAmount, totalAmount: quote.plan.priceAmount },
                            ...addOns.map((item) => ({ itemType: "ADD_ON", addOnId: item.id, name: item.name, quantity: 1, unitAmount: item.priceAmount, totalAmount: item.priceAmount })),
                        ],
                    },
                    payments: { create: { method: "MANUAL_BANK_TRANSFER", amount: quote.totalAmount, currency: quote.currency } },
                },
                include: { plan: true, coupon: true, items: { include: { addOn: true } }, payments: true, wedding: { select: { id: true, title: true, slug: true } } },
            });
            await tx.auditLog.create({ data: { userId: user.id, action: "ORDER_CREATED", metadata: { orderId: created.id, orderNumber, weddingId: dto.weddingId, totalAmount: quote.totalAmount } } });
            return created;
        });
        await this.webhooks.emit("order.created", { orderId: order.id, orderNumber: order.orderNumber, weddingId: order.weddingId, userId: order.userId, totalAmount: order.totalAmount, currency: order.currency }).catch(() => undefined);
        return order;
    }
    async listOrders(user) {
        return this.prisma.order.findMany({
            where: { userId: user.id },
            include: { plan: true, payments: { orderBy: { createdAt: "desc" }, take: 1 }, wedding: { select: { id: true, title: true, slug: true } } },
            orderBy: { createdAt: "desc" },
        });
    }
    async getOrder(orderId, user) {
        const order = await this.prisma.order.findFirst({
            where: { id: orderId, userId: user.id },
            include: {
                plan: true,
                coupon: true,
                wedding: { select: { id: true, title: true, slug: true, activePlanId: true } },
                items: { include: { addOn: true } },
                payments: { orderBy: { createdAt: "desc" } },
                notes: { where: { visibility: "CUSTOMER" }, orderBy: { createdAt: "desc" } },
            },
        });
        if (!order)
            throw new NotFoundException("Order not found");
        return order;
    }
    async submitPayment(orderId, dto, user) {
        const order = await this.getOrder(orderId, user);
        if (["CONFIRMED", "REFUNDED"].includes(order.paymentStatus))
            throw new BadRequestException("Đơn hàng đã được xử lý thanh toán");
        const payment = order.payments[0];
        if (!payment)
            throw new NotFoundException("Payment not found");
        const updated = await this.prisma.$transaction(async (tx) => {
            const record = await tx.payment.update({
                where: { id: payment.id },
                data: { status: "SUBMITTED", reference: dto.reference.trim(), proofUrl: dto.proofUrl?.trim() || null, note: dto.note?.trim() || null, submittedAt: new Date(), rejectedAt: null },
            });
            await tx.order.update({ where: { id: orderId }, data: { status: "PAYMENT_REVIEW", paymentStatus: "SUBMITTED" } });
            await tx.auditLog.create({ data: { userId: user.id, action: "PAYMENT_SUBMITTED", metadata: { orderId, paymentId: payment.id, reference: dto.reference.trim() } } });
            return record;
        });
        await this.webhooks.emit("payment.submitted", { orderId, paymentId: updated.id, reference: updated.reference, amount: updated.amount, currency: updated.currency }).catch(() => undefined);
        return { success: true, payment: updated };
    }
    async sandboxPay(orderId, user) {
        if (process.env.PAYMENT_SANDBOX_ENABLED !== "true")
            throw new ForbiddenException("Sandbox payment is disabled");
        const order = await this.getOrder(orderId, user);
        const payment = order.payments[0];
        if (!payment)
            throw new NotFoundException("Payment not found");
        if (payment.status === "CONFIRMED")
            return this.getOrder(orderId, user);
        await this.activateOrder(orderId, payment.id, user.id, "SANDBOX");
        return this.getOrder(orderId, user);
    }
    async activateOrder(orderId, paymentId, reviewerId, provider = "MANUAL") {
        const current = await this.prisma.order.findUnique({ where: { id: orderId }, include: { plan: true, coupon: true } });
        if (!current)
            throw new NotFoundException("Order not found");
        if (current.paymentStatus === "REFUNDED" || current.status === "REFUNDED")
            throw new BadRequestException("Đơn đã hoàn tiền không thể kích hoạt lại");
        if (current.paymentStatus === "CONFIRMED" && current.fulfillmentStatus === "ACTIVE")
            return current;
        const now = new Date();
        const activated = await this.prisma.$transaction(async (tx) => {
            const claimed = await tx.order.updateMany({
                where: { id: orderId, NOT: { paymentStatus: "CONFIRMED", fulfillmentStatus: "ACTIVE" } },
                data: { status: "COMPLETED", paymentStatus: "CONFIRMED", fulfillmentStatus: "ACTIVE", activatedAt: now, completedAt: now },
            });
            if (claimed.count === 0)
                return tx.order.findUniqueOrThrow({ where: { id: orderId } });
            await tx.payment.updateMany({
                where: { id: paymentId, status: { not: "CONFIRMED" } },
                data: {
                    status: "CONFIRMED",
                    confirmedAt: now,
                    reviewedById: reviewerId,
                    provider,
                    idempotencyKey: `${provider.toLowerCase()}:${orderId}`,
                    providerTransactionId: `${provider.toLowerCase()}:${paymentId}`,
                },
            });
            await tx.wedding.update({ where: { id: current.weddingId }, data: { activePlanId: current.planId } });
            if (current.couponId)
                await tx.coupon.update({ where: { id: current.couponId }, data: { usedCount: { increment: 1 } } });
            await tx.notification.create({
                data: { weddingId: current.weddingId, userId: current.userId, type: "PAYMENT_CONFIRMED", title: "Thanh toán đã được xác nhận", message: `Đơn ${current.orderNumber} đã kích hoạt gói ${current.plan.name}.`, metadata: { orderId } },
            });
            await tx.auditLog.create({ data: { userId: reviewerId, action: "PAYMENT_CONFIRMED", metadata: { orderId, paymentId, weddingId: current.weddingId, planCode: current.plan.code, idempotencyKey: `${provider.toLowerCase()}:${orderId}` } } });
            return tx.order.findUniqueOrThrow({ where: { id: orderId } });
        });
        await this.webhooks.emit("payment.confirmed", { orderId, paymentId, weddingId: current.weddingId, userId: current.userId, planCode: current.plan.code, provider }).catch(() => undefined);
        return activated;
    }
};
CommercialService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        EntitlementsService,
        WebhookService])
], CommercialService);
export { CommercialService };
//# sourceMappingURL=commercial.service.js.map