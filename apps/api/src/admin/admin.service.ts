import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import type { AuthenticatedUser } from "../auth/auth.types.js";
import { CommercialService } from "../commercial/commercial.service.js";
import { InvitationService } from "../invitation/invitation.service.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { MailService } from "../operations/mail.service.js";
import { WebhookService } from "../operations/webhook.service.js";
import { AddOrderNoteDto } from "./dto/add-order-note.dto.js";
import { PublishReviewDto } from "./dto/publish-review.dto.js";
import { ReviewPaymentDto } from "./dto/review-payment.dto.js";
import { UpsertCouponDto } from "./dto/upsert-coupon.dto.js";

@Injectable()
export class AdminService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly commercial: CommercialService,
    private readonly invitation: InvitationService,
    private readonly mail: MailService,
    private readonly webhooks: WebhookService,
  ) {}

  async overview() {
    const [
      users, weddings, awaitingPayment, paymentReview, paidOrders, revenue, publishQueue,
      activeCoupons, openSupportTickets, pendingDomains, pilotBlockers, pendingPartners, pendingPayouts,
    ] = await Promise.all([
      this.prisma.user.count({ where: { deletedAt: null } }),
      this.prisma.wedding.count(),
      this.prisma.order.count({ where: { status: "AWAITING_PAYMENT" } }),
      this.prisma.order.count({ where: { paymentStatus: "SUBMITTED" } }),
      this.prisma.order.count({ where: { paymentStatus: "CONFIRMED" } }),
      this.prisma.order.aggregate({ where: { paymentStatus: "CONFIRMED" }, _sum: { totalAmount: true } }),
      this.prisma.wedding.count({ where: { publishReviewStatus: { in: ["REQUESTED", "IN_REVIEW"] } } }),
      this.prisma.coupon.count({ where: { active: true } }),
      this.prisma.supportTicket.count({ where: { status: { in: ["OPEN", "IN_PROGRESS", "WAITING_CUSTOMER"] } } }),
      this.prisma.customDomain.count({ where: { status: { in: ["PENDING_DNS", "VERIFYING", "VERIFIED"] } } }),
      this.prisma.pilotIssue.count({ where: { severity: { in: ["HIGH", "CRITICAL"] }, status: { in: ["OPEN", "INVESTIGATING"] } } }),
      this.prisma.partnerOrganization.count({ where: { status: "PENDING" } }),
      this.prisma.partnerPayout.count({ where: { status: { in: ["REQUESTED", "REVIEWING", "APPROVED", "PROCESSING"] } } }),
    ]);
    const recentOrders = await this.prisma.order.findMany({
      take: 8,
      orderBy: { createdAt: "desc" },
      include: { plan: true, user: { select: { id: true, displayName: true, email: true } }, wedding: { select: { id: true, title: true, slug: true, status: true, publishReviewStatus: true } }, payments: { orderBy: { createdAt: "desc" }, take: 1 } },
    });
    return {
      metrics: {
        users, weddings, awaitingPayment, paymentReview, paidOrders, revenue: revenue._sum.totalAmount ?? 0, publishQueue,
        activeCoupons, openSupportTickets, pendingDomains, pilotBlockers, pendingPartners, pendingPayouts,
      },
      recentOrders,
    };
  }

  async listCoupons() {
    return this.prisma.coupon.findMany({ orderBy: [{ active: "desc" }, { createdAt: "desc" }] });
  }

  private couponInput(dto: UpsertCouponDto, creating: boolean) {
    const code = dto.code?.trim().toUpperCase().replace(/[^A-Z0-9_-]/g, "");
    const name = dto.name?.trim();
    if (creating && (!code || code.length < 3)) throw new BadRequestException("Mã giảm giá phải có ít nhất 3 ký tự");
    if (creating && !name) throw new BadRequestException("Vui lòng nhập tên chương trình ưu đãi");
    if (creating && !dto.discountType) throw new BadRequestException("Vui lòng chọn loại giảm giá");
    if (creating && !dto.discountValue) throw new BadRequestException("Vui lòng nhập giá trị giảm");
    if (dto.discountType === "PERCENTAGE" && dto.discountValue !== undefined && dto.discountValue > 100) throw new BadRequestException("Giảm theo phần trăm không được vượt quá 100%");
    const startsAt = dto.startsAt ? new Date(dto.startsAt) : dto.startsAt === null ? null : undefined;
    const endsAt = dto.endsAt ? new Date(dto.endsAt) : dto.endsAt === null ? null : undefined;
    if (startsAt && endsAt && endsAt <= startsAt) throw new BadRequestException("Thời gian kết thúc phải sau thời gian bắt đầu");
    return {
      code: code || undefined,
      name: name || undefined,
      discountType: dto.discountType as never,
      discountValue: dto.discountValue,
      startsAt,
      endsAt,
      usageLimit: dto.usageLimit === null ? null : dto.usageLimit ?? (creating ? null : undefined),
      active: dto.active ?? (creating ? true : undefined),
      planCodes: dto.planCodes as never,
    };
  }

  async createCoupon(dto: UpsertCouponDto, admin: AuthenticatedUser) {
    const data = this.couponInput(dto, true);
    const existing = data.code ? await this.prisma.coupon.findUnique({ where: { code: data.code } }) : null;
    if (existing) throw new BadRequestException("Mã giảm giá đã tồn tại");
    const coupon = await this.prisma.coupon.create({ data: data as never });
    await this.prisma.auditLog.create({ data: { userId: admin.id, action: "COUPON_CREATED", metadata: { couponId: coupon.id, code: coupon.code } } });
    return coupon;
  }

  async updateCoupon(id: string, dto: UpsertCouponDto, admin: AuthenticatedUser) {
    const current = await this.prisma.coupon.findUnique({ where: { id } });
    if (!current) throw new NotFoundException("Không tìm thấy mã giảm giá");
    const data = this.couponInput(dto, false);
    if (data.code && data.code !== current.code) {
      const duplicate = await this.prisma.coupon.findUnique({ where: { code: data.code } });
      if (duplicate) throw new BadRequestException("Mã giảm giá đã tồn tại");
    }
    const coupon = await this.prisma.coupon.update({ where: { id }, data: data as never });
    await this.prisma.auditLog.create({ data: { userId: admin.id, action: "COUPON_UPDATED", metadata: { couponId: coupon.id, code: coupon.code, active: coupon.active } } });
    return coupon;
  }

  async listOrders(query: Record<string, string | undefined>) {
    const search = query.search?.trim();
    const status = query.status?.trim();
    return this.prisma.order.findMany({
      where: {
        ...(status ? { status: status as never } : {}),
        ...(search ? {
          OR: [
            { orderNumber: { contains: search, mode: "insensitive" } },
            { user: { email: { contains: search, mode: "insensitive" } } },
            { user: { displayName: { contains: search, mode: "insensitive" } } },
            { wedding: { title: { contains: search, mode: "insensitive" } } },
          ],
        } : {}),
      },
      include: {
        plan: true,
        coupon: true,
        user: { select: { id: true, displayName: true, email: true } },
        wedding: { select: { id: true, title: true, slug: true, status: true, publishReviewStatus: true } },
        payments: { orderBy: { createdAt: "desc" }, take: 1 },
      },
      orderBy: { createdAt: "desc" },
      take: 100,
    });
  }

  async getOrder(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        plan: true,
        coupon: true,
        user: { select: { id: true, displayName: true, email: true, phone: true } },
        wedding: { select: { id: true, title: true, slug: true, status: true, publishReviewStatus: true, mainDate: true, activePlanId: true } },
        items: { include: { addOn: true } },
        payments: { orderBy: { createdAt: "desc" }, include: { reviewedBy: { select: { displayName: true, email: true } } } },
        notes: { orderBy: { createdAt: "desc" }, include: { author: { select: { displayName: true, email: true } } } },
      },
    });
    if (!order) throw new NotFoundException("Order not found");
    return order;
  }

  async confirmPayment(orderId: string, dto: ReviewPaymentDto, admin: AuthenticatedUser) {
    const order = await this.getOrder(orderId);
    const payment = order.payments[0];
    if (!payment) throw new NotFoundException("Payment not found");
    if (payment.status === "CONFIRMED") return order;
    if (!['SUBMITTED', 'PENDING', 'REJECTED'].includes(payment.status)) throw new BadRequestException("Payment cannot be confirmed in its current state");
    await this.commercial.activateOrder(orderId, payment.id, admin.id, "MANUAL");
    if (dto.note?.trim()) await this.addNote(orderId, { body: dto.note, visibility: "INTERNAL" }, admin);
    await this.mail.queue({ recipient: order.user.email, subject: `Thanh toán ${order.orderNumber} đã được xác nhận`, templateKey: "payment-confirmed", textBody: `Đơn ${order.orderNumber} đã kích hoạt gói ${order.plan.name} cho ${order.wedding.title}.`, htmlBody: this.emailHtml("Thanh toán đã được xác nhận", `Đơn <strong>${order.orderNumber}</strong> đã kích hoạt gói <strong>${order.plan.name}</strong> cho ${order.wedding.title}.`) });
    return this.getOrder(orderId);
  }

  async rejectPayment(orderId: string, dto: ReviewPaymentDto, admin: AuthenticatedUser) {
    const order = await this.getOrder(orderId);
    const payment = order.payments[0];
    if (!payment) throw new NotFoundException("Payment not found");
    if (payment.status === "CONFIRMED") throw new BadRequestException("Confirmed payment must be refunded instead of rejected");
    await this.prisma.$transaction([
      this.prisma.payment.update({ where: { id: payment.id }, data: { status: "REJECTED", rejectedAt: new Date(), reviewedById: admin.id, note: dto.note?.trim() || payment.note } }),
      this.prisma.order.update({ where: { id: orderId }, data: { status: "AWAITING_PAYMENT", paymentStatus: "REJECTED", revisionCount: { increment: 1 } } }),
      this.prisma.notification.create({ data: { weddingId: order.weddingId, userId: order.userId, type: "PAYMENT_REJECTED", title: "Cần bổ sung thông tin thanh toán", message: dto.note?.trim() || `Thanh toán đơn ${order.orderNumber} chưa được xác nhận.`, metadata: { orderId } } }),
      this.prisma.auditLog.create({ data: { userId: admin.id, action: "PAYMENT_REJECTED", metadata: { orderId, paymentId: payment.id, note: dto.note } } }),
    ]);
    await this.mail.queue({ recipient: order.user.email, subject: `Cần bổ sung thanh toán ${order.orderNumber}`, templateKey: "payment-rejected", textBody: dto.note?.trim() || `Thanh toán đơn ${order.orderNumber} chưa được xác nhận.`, htmlBody: this.emailHtml("Cần bổ sung thông tin thanh toán", dto.note?.trim() || `Thanh toán đơn <strong>${order.orderNumber}</strong> chưa được xác nhận.`) });
    await this.webhooks.emit("payment.rejected", { orderId, paymentId: payment.id, weddingId: order.weddingId, reason: dto.note?.trim() || null }).catch(() => undefined);
    return this.getOrder(orderId);
  }

  async refund(orderId: string, dto: ReviewPaymentDto, admin: AuthenticatedUser) {
    const order = await this.getOrder(orderId);
    const payment = order.payments.find((item) => item.status === "CONFIRMED") ?? order.payments[0];
    if (!payment || payment.status !== "CONFIRMED") throw new BadRequestException("Only confirmed payments can be refunded");
    const now = new Date();
    const freePlan = await this.prisma.plan.findUnique({ where: { code: "FREE" } });
    if (!freePlan) throw new NotFoundException("Free plan is not configured");
    const isCurrentPlanOrder = order.wedding.activePlanId === order.planId;
    const replacement = isCurrentPlanOrder ? await this.prisma.order.findFirst({
      where: { id: { not: orderId }, weddingId: order.weddingId, paymentStatus: "CONFIRMED", fulfillmentStatus: { in: ["ACTIVE", "COMPLETED"] }, status: { not: "REFUNDED" } },
      orderBy: [{ activatedAt: "desc" }, { createdAt: "desc" }],
      select: { planId: true },
    }) : null;
    const nextPlanId = isCurrentPlanOrder ? (replacement?.planId ?? freePlan.id) : (order.wedding.activePlanId ?? freePlan.id);
    const mustSuspend = isCurrentPlanOrder && !replacement && order.wedding.status === "PUBLISHED";
    await this.prisma.$transaction([
      this.prisma.payment.update({ where: { id: payment.id }, data: { status: "REFUNDED", refundedAt: now, reviewedById: admin.id, note: dto.note?.trim() || payment.note } }),
      this.prisma.order.update({ where: { id: orderId }, data: { status: "REFUNDED", paymentStatus: "REFUNDED", fulfillmentStatus: "SUSPENDED", refundedAt: now } }),
      this.prisma.wedding.update({ where: { id: order.weddingId }, data: { activePlanId: nextPlanId, status: mustSuspend ? "SUSPENDED" : order.wedding.status, suspendedAt: mustSuspend ? now : undefined } }),
      this.prisma.notification.create({ data: { weddingId: order.weddingId, userId: order.userId, type: "ORDER_REFUNDED", title: "Đơn hàng đã được hoàn tiền", message: `Đơn ${order.orderNumber} đã chuyển sang trạng thái hoàn tiền.`, metadata: { orderId, nextPlanId } } }),
      this.prisma.auditLog.create({ data: { userId: admin.id, action: "ORDER_REFUNDED", metadata: { orderId, paymentId: payment.id, note: dto.note, nextPlanId, mustSuspend } } }),
    ]);
    await this.mail.queue({ recipient: order.user.email, subject: `Đơn ${order.orderNumber} đã được hoàn tiền`, templateKey: "order-refunded", textBody: `Đơn ${order.orderNumber} đã chuyển sang trạng thái hoàn tiền.`, htmlBody: this.emailHtml("Đơn hàng đã được hoàn tiền", `Đơn <strong>${order.orderNumber}</strong> đã chuyển sang trạng thái hoàn tiền. Quyền lợi wedding đã được tính lại an toàn.`) });
    await this.webhooks.emit("payment.refunded", { orderId, paymentId: payment.id, weddingId: order.weddingId, nextPlanId, mustSuspend }).catch(() => undefined);
    return this.getOrder(orderId);
  }

  async addNote(orderId: string, dto: AddOrderNoteDto, admin: AuthenticatedUser) {
    await this.getOrder(orderId);
    return this.prisma.orderNote.create({
      data: { orderId, authorId: admin.id, body: dto.body.trim(), visibility: dto.visibility ?? "INTERNAL" },
      include: { author: { select: { displayName: true, email: true } } },
    });
  }

  async reviewPublish(weddingId: string, dto: PublishReviewDto, admin: AuthenticatedUser) {
    const wedding = await this.prisma.wedding.findUnique({ where: { id: weddingId }, include: { owner: { select: { email: true, displayName: true } } } });
    if (!wedding) throw new NotFoundException("Wedding not found");
    const now = new Date();
    const data = dto.decision === "APPROVE"
      ? { publishReviewStatus: "APPROVED" as const, publishReviewedAt: now, status: "PUBLISHED" as const, publishedAt: now, suspendedAt: null }
      : dto.decision === "CHANGES_REQUESTED"
        ? { publishReviewStatus: "CHANGES_REQUESTED" as const, publishReviewedAt: now, status: "READY_FOR_REVIEW" as const }
        : dto.decision === "REJECT"
          ? { publishReviewStatus: "REJECTED" as const, publishReviewedAt: now, status: "READY_FOR_REVIEW" as const }
          : { publishReviewStatus: "REJECTED" as const, publishReviewedAt: now, status: "SUSPENDED" as const, suspendedAt: now };
    const updated = await this.prisma.$transaction(async (tx) => {
      const result = await tx.wedding.update({ where: { id: weddingId }, data });
      await tx.notification.create({
        data: {
          weddingId,
          userId: wedding.ownerId,
          type: `PUBLISH_${dto.decision}`,
          title: dto.decision === "APPROVE" ? "Thiệp đã được xuất bản" : "Cập nhật từ đội ngũ kiểm duyệt",
          message: dto.note?.trim() || (dto.decision === "APPROVE" ? "Thiệp của bạn đã sẵn sàng để chia sẻ." : "Vui lòng mở workspace để xem trạng thái kiểm duyệt."),
          metadata: { decision: dto.decision },
        },
      });
      await tx.auditLog.create({ data: { userId: admin.id, action: "PUBLISH_REVIEWED", metadata: { weddingId, decision: dto.decision, note: dto.note } } });
      return result;
    });
    if (dto.decision === "APPROVE") await this.invitation.saveVersion(weddingId, admin.id, "PUBLISH_APPROVED");
    const publishMessage = dto.note?.trim() || (dto.decision === "APPROVE" ? "Thiệp đã được xuất bản và sẵn sàng chia sẻ." : "Thiệp cần được cập nhật trước khi xuất bản.");
    await this.mail.queue({ recipient: wedding.owner.email, subject: dto.decision === "APPROVE" ? `Thiệp ${wedding.title} đã được xuất bản` : `Cập nhật kiểm duyệt cho ${wedding.title}`, templateKey: "publish-review", textBody: publishMessage, htmlBody: this.emailHtml(dto.decision === "APPROVE" ? "Thiệp đã được xuất bản" : "Cập nhật từ đội ngũ kiểm duyệt", publishMessage) });
    await this.webhooks.emit(dto.decision === "APPROVE" ? "wedding.published" : "wedding.review_updated", { weddingId, decision: dto.decision, status: updated.status, note: dto.note?.trim() || null }).catch(() => undefined);
    return updated;
  }

  async searchUsers(search = "") {
    return this.prisma.user.findMany({
      where: search ? { OR: [{ email: { contains: search, mode: "insensitive" } }, { displayName: { contains: search, mode: "insensitive" } }] } : {},
      select: { id: true, displayName: true, email: true, role: true, status: true, createdAt: true, _count: { select: { weddings: true, customerOrders: true } } },
      orderBy: { createdAt: "desc" },
      take: 50,
    });
  }

  async searchWeddings(search = "") {
    return this.prisma.wedding.findMany({
      where: search ? { OR: [{ title: { contains: search, mode: "insensitive" } }, { slug: { contains: search, mode: "insensitive" } }, { owner: { email: { contains: search, mode: "insensitive" } } }] } : {},
      include: { owner: { select: { displayName: true, email: true } }, activePlan: true, _count: { select: { guests: true, events: true, orders: true } } },
      orderBy: { updatedAt: "desc" },
      take: 50,
    });
  }

  private emailHtml(title: string, content: string): string {
    return `<!doctype html><html><body style="margin:0;background:#f7f3ee;font-family:Arial,sans-serif;color:#29231f"><div style="max-width:600px;margin:auto;padding:32px 20px"><div style="padding:32px;border:1px solid #eadfd4;border-radius:20px;background:#fff"><div style="margin-bottom:22px;color:#7c2d3b;font-size:22px;font-weight:700">Ngày Đôi</div><h1 style="font-size:25px">${title}</h1><p style="color:#5c514a;line-height:1.7">${content}</p></div></div></body></html>`;
  }

}
