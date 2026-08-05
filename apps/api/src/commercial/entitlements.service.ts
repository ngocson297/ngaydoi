import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import type { PlanSummary, WeddingEntitlements } from "./commercial.types.js";

@Injectable()
export class EntitlementsService {
  constructor(private readonly prisma: PrismaService) {}

  private toPlanSummary(plan: {
    id: string; code: string; name: string; description: string; priceAmount: number; currency: string;
    guestLimit: number; mediaLimit: number; templateKeys: string[]; customDomain: boolean;
    prioritySupport: boolean; requiresPublishReview: boolean;
  }): PlanSummary {
    return { ...plan, recommended: plan.code === "STANDARD" };
  }

  async getWeddingEntitlements(weddingId: string): Promise<WeddingEntitlements> {
    const wedding = await this.prisma.wedding.findUnique({
      where: { id: weddingId },
      include: { activePlan: true },
    });
    if (!wedding) throw new NotFoundException("Wedding not found");
    const fallback = wedding.activePlan ?? await this.prisma.plan.findUnique({ where: { code: "FREE" } });
    if (!fallback) throw new NotFoundException("Free plan is not configured");

    const activeOrders = await this.prisma.order.findMany({
      where: { weddingId, fulfillmentStatus: { in: ["ACTIVE", "COMPLETED"] }, paymentStatus: "CONFIRMED" },
      include: { items: { include: { addOn: true } } },
    });
    const addOnMap = new Map<string, { code: string; name: string; guestLimitBonus: number; mediaLimitBonus: number }>();
    for (const order of activeOrders) {
      for (const item of order.items) {
        if (!item.addOn) continue;
        const current = addOnMap.get(item.addOn.code);
        addOnMap.set(item.addOn.code, {
          code: item.addOn.code,
          name: item.addOn.name,
          guestLimitBonus: (current?.guestLimitBonus ?? 0) + item.addOn.guestLimitBonus * item.quantity,
          mediaLimitBonus: (current?.mediaLimitBonus ?? 0) + item.addOn.mediaLimitBonus * item.quantity,
        });
      }
    }
    const addOns = [...addOnMap.values()];
    const guestBonus = addOns.reduce((sum, item) => sum + item.guestLimitBonus, 0);
    const mediaBonus = addOns.reduce((sum, item) => sum + item.mediaLimitBonus, 0);
    const [guestCount, mediaCount] = await Promise.all([
      this.prisma.guest.count({ where: { weddingId, archivedAt: null } }),
      this.prisma.mediaAsset.count({ where: { weddingId } }),
    ]);
    const guestLimit = fallback.guestLimit + guestBonus;
    const mediaLimit = fallback.mediaLimit + mediaBonus;
    return {
      weddingId,
      plan: this.toPlanSummary(fallback),
      guestLimit,
      mediaLimit,
      guestCount,
      mediaCount,
      remainingGuests: Math.max(0, guestLimit - guestCount),
      remainingMedia: Math.max(0, mediaLimit - mediaCount),
      templateKeys: fallback.templateKeys,
      customDomain: fallback.customDomain,
      prioritySupport: fallback.prioritySupport,
      addOns,
    };
  }

  async assertGuestCapacity(weddingId: string, requested: number): Promise<void> {
    const entitlements = await this.getWeddingEntitlements(weddingId);
    if (entitlements.guestCount + requested > entitlements.guestLimit) {
      throw new BadRequestException(`Gói hiện tại cho phép tối đa ${entitlements.guestLimit} khách. Vui lòng nâng cấp gói hoặc mua add-on.`);
    }
  }

  async assertMediaCapacity(weddingId: string, requested = 1): Promise<void> {
    const entitlements = await this.getWeddingEntitlements(weddingId);
    if (entitlements.mediaCount + requested > entitlements.mediaLimit) {
      throw new BadRequestException(`Gói hiện tại cho phép tối đa ${entitlements.mediaLimit} ảnh. Vui lòng nâng cấp gói hoặc mua add-on.`);
    }
  }

  async assertTemplateAccess(weddingId: string, templateKey: string): Promise<void> {
    const entitlements = await this.getWeddingEntitlements(weddingId);
    if (!entitlements.templateKeys.includes(templateKey)) {
      throw new BadRequestException("Mẫu thiệp này chưa nằm trong gói hiện tại. Vui lòng nâng cấp để sử dụng.");
    }
  }
}
