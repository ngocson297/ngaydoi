export declare class UpsertCouponDto {
    code?: string;
    name?: string;
    discountType?: "FIXED" | "PERCENTAGE";
    discountValue?: number;
    startsAt?: string | null;
    endsAt?: string | null;
    usageLimit?: number | null;
    active?: boolean;
    planCodes?: Array<"FREE" | "STARTER" | "STANDARD" | "PREMIUM">;
}
