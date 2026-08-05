import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import type { AuthenticatedUser } from "../auth/auth.types.js";

const money = (value: unknown): number => Math.max(0, Math.round(Number(value) || 0));
const slugify = (value: string): string => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48);

@Injectable()
export class PartnerService {
  constructor(private readonly prisma: PrismaService) {}

  private async membership(userId: string) {
    const member = await this.prisma.partnerMember.findFirst({ where: { userId, active: true }, orderBy: { createdAt: "asc" } });
    if (!member) throw new ForbiddenException("Tài khoản chưa thuộc một đối tác.");
    const partner = await this.prisma.partnerOrganization.findUnique({ where: { id: member.partnerId } });
    if (!partner) throw new NotFoundException("Không tìm thấy đối tác.");
    return { member, partner };
  }

  async overview(user: AuthenticatedUser): Promise<unknown> {
    const membership = await this.prisma.partnerMember.findFirst({ where: { userId: user.id, active: true }, orderBy: { createdAt: "asc" } });
    if (!membership) return { partner: null, clients: [], commissions: [], payouts: [], metrics: { clients: 0, weddings: 0, pending: 0, payable: 0, paid: 0 } };
    const partner = await this.prisma.partnerOrganization.findUnique({ where: { id: membership.partnerId } });
    if (!partner) return { partner: null, clients: [], commissions: [], payouts: [], metrics: { clients: 0, weddings: 0, pending: 0, payable: 0, paid: 0 } };
    const [clients, commissions, payouts, grouped] = await Promise.all([
      this.prisma.partnerClient.findMany({ where: { partnerId: partner.id }, orderBy: { createdAt: "desc" }, take: 100 }),
      this.prisma.partnerCommission.findMany({ where: { partnerId: partner.id }, orderBy: { createdAt: "desc" }, take: 100 }),
      this.prisma.partnerPayout.findMany({ where: { partnerId: partner.id }, orderBy: { requestedAt: "desc" }, take: 50 }),
      this.prisma.partnerCommission.groupBy({ by: ["status"], where: { partnerId: partner.id }, _sum: { commissionAmount: true } }),
    ]);
    const sums = Object.fromEntries(grouped.map((x) => [x.status, x._sum.commissionAmount ?? 0]));
    const users = await this.prisma.user.findMany({ where: { id: { in: clients.map((x) => x.customerId) } }, select: { id: true, displayName: true, email: true } });
    const weddings = await this.prisma.wedding.findMany({ where: { id: { in: clients.flatMap((x) => x.weddingId ? [x.weddingId] : []) } }, select: { id: true, title: true, status: true } });
    return { partner, membership, clients: clients.map((x) => ({ ...x, customer: users.find((u) => u.id === x.customerId) ?? null, wedding: weddings.find((w) => w.id === x.weddingId) ?? null })), commissions, payouts, metrics: { clients: new Set(clients.map((x) => x.customerId)).size, weddings: new Set(clients.flatMap((x) => x.weddingId ? [x.weddingId] : [])).size, pending: sums.PENDING ?? 0, payable: (sums.APPROVED ?? 0) + (sums.PAYABLE ?? 0), paid: sums.PAID ?? 0 } };
  }

  async apply(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown> {
    const existing = await this.prisma.partnerMember.findFirst({ where: { userId: user.id, active: true } });
    if (existing) throw new BadRequestException("Tài khoản đã thuộc một đối tác.");
    const name = String(body.name ?? "").trim();
    if (name.length < 3) throw new BadRequestException("Tên đối tác cần ít nhất 3 ký tự.");
    const base = slugify(name) || `partner-${Date.now()}`;
    let slug = base; let suffix = 1;
    while (await this.prisma.partnerOrganization.findUnique({ where: { slug } })) slug = `${base}-${suffix++}`;
    return this.prisma.$transaction(async (tx) => {
      const partner = await tx.partnerOrganization.create({ data: { name, slug, contactEmail: user.email, contactPhone: body.contactPhone ? String(body.contactPhone) : null, website: body.website ? String(body.website) : null, brandName: body.brandName ? String(body.brandName) : name } });
      await tx.partnerMember.create({ data: { partnerId: partner.id, userId: user.id, role: "OWNER", joinedAt: new Date() } });
      await tx.user.update({ where: { id: user.id }, data: { role: "PARTNER" } });
      return partner;
    });
  }

  async updateProfile(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown> {
    const { member, partner } = await this.membership(user.id);
    if (!(["OWNER","MANAGER"] as string[]).includes(member.role)) throw new ForbiddenException("Bạn không có quyền cập nhật thương hiệu.");
    const primaryColor = body.primaryColor ? String(body.primaryColor) : undefined;
    if (primaryColor && !/^#[0-9A-F]{6}$/i.test(primaryColor)) throw new BadRequestException("Màu thương hiệu không hợp lệ.");
    return this.prisma.partnerOrganization.update({ where: { id: partner.id }, data: { brandName: body.brandName === undefined ? undefined : String(body.brandName || "") || null, website: body.website === undefined ? undefined : String(body.website || "") || null, logoUrl: body.logoUrl === undefined ? undefined : String(body.logoUrl || "") || null, primaryColor, hideNgayDoiBrand: partner.status === "ACTIVE" && body.hideNgayDoiBrand !== undefined ? Boolean(body.hideNgayDoiBrand) : undefined } });
  }

  async addClient(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown> {
    const { partner } = await this.membership(user.id);
    if (partner.status !== "ACTIVE") throw new ForbiddenException("Đối tác cần được duyệt trước khi thêm khách hàng.");
    const email = String(body.email ?? "").trim().toLowerCase();
    const customer = await this.prisma.user.findUnique({ where: { email } });
    if (!customer) throw new NotFoundException("Khách hàng cần có tài khoản Ngày Đôi trước.");
    const weddingId = body.weddingId ? String(body.weddingId) : null;
    if (weddingId) {
      const wedding = await this.prisma.wedding.findFirst({ where: { id: weddingId, ownerId: customer.id } });
      if (!wedding) throw new BadRequestException("Wedding không thuộc khách hàng này.");
    }
    const existing = await this.prisma.partnerClient.findFirst({ where: { partnerId: partner.id, customerId: customer.id, weddingId } });
    if (existing) return this.prisma.partnerClient.update({ where: { id: existing.id }, data: { notes: body.notes ? String(body.notes).slice(0, 500) : null, externalRef: body.externalRef ? String(body.externalRef).slice(0, 80) : null } });
    return this.prisma.partnerClient.create({ data: { partnerId: partner.id, customerId: customer.id, weddingId, externalRef: body.externalRef ? String(body.externalRef).slice(0, 80) : null, notes: body.notes ? String(body.notes).slice(0, 500) : null } });
  }

  async requestPayout(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown> {
    const { member, partner } = await this.membership(user.id);
    if (!(["OWNER","MANAGER"] as string[]).includes(member.role)) throw new ForbiddenException("Bạn không có quyền yêu cầu thanh toán.");
    if (partner.status !== "ACTIVE") throw new ForbiddenException("Đối tác chưa hoạt động.");
    const payable = await this.prisma.partnerCommission.aggregate({ where: { partnerId: partner.id, status: { in: ["APPROVED","PAYABLE"] }, payoutId: null }, _sum: { commissionAmount: true } });
    const available = payable._sum.commissionAmount ?? 0;
    const amount = money(body.amount || available);
    if (amount < partner.minimumPayout || amount > available) throw new BadRequestException(`Số tiền cần từ ${partner.minimumPayout.toLocaleString("vi-VN")}đ đến số dư khả dụng.`);
    const bankName = String(body.bankName ?? "").trim(); const accountName = String(body.accountName ?? "").trim(); const accountNumber = String(body.accountNumber ?? "").replace(/\s/g, "");
    if (!bankName || !accountName || accountNumber.length < 6) throw new BadRequestException("Thông tin nhận tiền chưa đầy đủ.");
    const masked = `${"*".repeat(Math.max(0, accountNumber.length - 4))}${accountNumber.slice(-4)}`;
    return this.prisma.$transaction(async (tx) => {
      const payout = await tx.partnerPayout.create({ data: { partnerId: partner.id, requestedById: user.id, amount, bankName, accountName, accountNumberMasked: masked, note: body.note ? String(body.note).slice(0, 500) : null } });
      let remaining = amount;
      const commissions = await tx.partnerCommission.findMany({ where: { partnerId: partner.id, status: { in: ["APPROVED","PAYABLE"] }, payoutId: null }, orderBy: { createdAt: "asc" } });
      for (const commission of commissions) { if (remaining <= 0) break; await tx.partnerCommission.update({ where: { id: commission.id }, data: { payoutId: payout.id, status: "PAYABLE" } }); remaining -= commission.commissionAmount; }
      return payout;
    });
  }

  async adminOverview(): Promise<unknown> {
    const [partners, payouts, commissions] = await Promise.all([
      this.prisma.partnerOrganization.findMany({ orderBy: [{ status: "asc" }, { createdAt: "desc" }], take: 100 }),
      this.prisma.partnerPayout.findMany({ orderBy: { requestedAt: "desc" }, take: 100 }),
      this.prisma.partnerCommission.groupBy({ by: ["status"], _sum: { commissionAmount: true }, _count: { _all: true } }),
    ]);
    return { partners, payouts, commissions };
  }

  async reviewPartner(user: AuthenticatedUser, id: string, body: Record<string, unknown>): Promise<unknown> {
    const status = String(body.status ?? "ACTIVE") as "PENDING"|"ACTIVE"|"SUSPENDED"|"REJECTED";
    return this.prisma.partnerOrganization.update({ where: { id }, data: { status, commissionRateBps: body.commissionRateBps === undefined ? undefined : Math.min(5000, Math.max(0, money(body.commissionRateBps))), minimumPayout: body.minimumPayout === undefined ? undefined : money(body.minimumPayout), notes: body.notes === undefined ? undefined : String(body.notes || "") || null, approvedAt: status === "ACTIVE" ? new Date() : undefined, approvedById: status === "ACTIVE" ? user.id : undefined, suspendedAt: status === "SUSPENDED" ? new Date() : null } });
  }

  async reviewPayout(user: AuthenticatedUser, id: string, body: Record<string, unknown>): Promise<unknown> {
    const status = String(body.status ?? "REVIEWING") as "REQUESTED"|"REVIEWING"|"APPROVED"|"PROCESSING"|"PAID"|"REJECTED"|"CANCELED";
    return this.prisma.$transaction(async (tx) => {
      const payout = await tx.partnerPayout.update({ where: { id }, data: { status, reviewedById: user.id, reviewedAt: new Date(), paidAt: status === "PAID" ? new Date() : undefined, rejectionReason: status === "REJECTED" ? String(body.rejectionReason ?? "Không đủ điều kiện") : null } });
      if (status === "PAID") await tx.partnerCommission.updateMany({ where: { payoutId: id }, data: { status: "PAID", paidAt: new Date() } });
      if (["REJECTED","CANCELED"].includes(status)) await tx.partnerCommission.updateMany({ where: { payoutId: id }, data: { payoutId: null, status: "APPROVED" } });
      return payout;
    });
  }
}
