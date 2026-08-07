export interface PlanSummary {
    id: string;
    code: string;
    name: string;
    description: string;
    priceAmount: number;
    currency: string;
    guestLimit: number;
    mediaLimit: number;
    templateKeys: string[];
    customDomain: boolean;
    prioritySupport: boolean;
    requiresPublishReview: boolean;
    recommended: boolean;
}
export interface WeddingEntitlements {
    weddingId: string;
    plan: PlanSummary;
    guestLimit: number;
    mediaLimit: number;
    guestCount: number;
    mediaCount: number;
    remainingGuests: number;
    remainingMedia: number;
    templateKeys: string[];
    customDomain: boolean;
    prioritySupport: boolean;
    addOns: Array<{
        code: string;
        name: string;
        guestLimitBonus: number;
        mediaLimitBonus: number;
    }>;
}
export interface OrderQuote {
    plan: PlanSummary;
    addOns: Array<{
        id: string;
        code: string;
        name: string;
        priceAmount: number;
        quantity: number;
        totalAmount: number;
    }>;
    coupon: {
        code: string;
        name: string;
    } | null;
    subtotalAmount: number;
    discountAmount: number;
    totalAmount: number;
    currency: string;
}
