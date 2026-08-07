import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PartnerPayoutModel = runtime.Types.Result.DefaultSelection<Prisma.$PartnerPayoutPayload>;
export type AggregatePartnerPayout = {
    _count: PartnerPayoutCountAggregateOutputType | null;
    _avg: PartnerPayoutAvgAggregateOutputType | null;
    _sum: PartnerPayoutSumAggregateOutputType | null;
    _min: PartnerPayoutMinAggregateOutputType | null;
    _max: PartnerPayoutMaxAggregateOutputType | null;
};
export type PartnerPayoutAvgAggregateOutputType = {
    amount: number | null;
};
export type PartnerPayoutSumAggregateOutputType = {
    amount: number | null;
};
export type PartnerPayoutMinAggregateOutputType = {
    id: string | null;
    partnerId: string | null;
    requestedById: string | null;
    reviewedById: string | null;
    amount: number | null;
    status: $Enums.PayoutStatus | null;
    bankName: string | null;
    accountName: string | null;
    accountNumberMasked: string | null;
    note: string | null;
    rejectionReason: string | null;
    requestedAt: Date | null;
    reviewedAt: Date | null;
    paidAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PartnerPayoutMaxAggregateOutputType = {
    id: string | null;
    partnerId: string | null;
    requestedById: string | null;
    reviewedById: string | null;
    amount: number | null;
    status: $Enums.PayoutStatus | null;
    bankName: string | null;
    accountName: string | null;
    accountNumberMasked: string | null;
    note: string | null;
    rejectionReason: string | null;
    requestedAt: Date | null;
    reviewedAt: Date | null;
    paidAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PartnerPayoutCountAggregateOutputType = {
    id: number;
    partnerId: number;
    requestedById: number;
    reviewedById: number;
    amount: number;
    status: number;
    bankName: number;
    accountName: number;
    accountNumberMasked: number;
    note: number;
    rejectionReason: number;
    requestedAt: number;
    reviewedAt: number;
    paidAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PartnerPayoutAvgAggregateInputType = {
    amount?: true;
};
export type PartnerPayoutSumAggregateInputType = {
    amount?: true;
};
export type PartnerPayoutMinAggregateInputType = {
    id?: true;
    partnerId?: true;
    requestedById?: true;
    reviewedById?: true;
    amount?: true;
    status?: true;
    bankName?: true;
    accountName?: true;
    accountNumberMasked?: true;
    note?: true;
    rejectionReason?: true;
    requestedAt?: true;
    reviewedAt?: true;
    paidAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PartnerPayoutMaxAggregateInputType = {
    id?: true;
    partnerId?: true;
    requestedById?: true;
    reviewedById?: true;
    amount?: true;
    status?: true;
    bankName?: true;
    accountName?: true;
    accountNumberMasked?: true;
    note?: true;
    rejectionReason?: true;
    requestedAt?: true;
    reviewedAt?: true;
    paidAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PartnerPayoutCountAggregateInputType = {
    id?: true;
    partnerId?: true;
    requestedById?: true;
    reviewedById?: true;
    amount?: true;
    status?: true;
    bankName?: true;
    accountName?: true;
    accountNumberMasked?: true;
    note?: true;
    rejectionReason?: true;
    requestedAt?: true;
    reviewedAt?: true;
    paidAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PartnerPayoutAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartnerPayoutWhereInput;
    orderBy?: Prisma.PartnerPayoutOrderByWithRelationInput | Prisma.PartnerPayoutOrderByWithRelationInput[];
    cursor?: Prisma.PartnerPayoutWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PartnerPayoutCountAggregateInputType;
    _avg?: PartnerPayoutAvgAggregateInputType;
    _sum?: PartnerPayoutSumAggregateInputType;
    _min?: PartnerPayoutMinAggregateInputType;
    _max?: PartnerPayoutMaxAggregateInputType;
};
export type GetPartnerPayoutAggregateType<T extends PartnerPayoutAggregateArgs> = {
    [P in keyof T & keyof AggregatePartnerPayout]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePartnerPayout[P]> : Prisma.GetScalarType<T[P], AggregatePartnerPayout[P]>;
};
export type PartnerPayoutGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartnerPayoutWhereInput;
    orderBy?: Prisma.PartnerPayoutOrderByWithAggregationInput | Prisma.PartnerPayoutOrderByWithAggregationInput[];
    by: Prisma.PartnerPayoutScalarFieldEnum[] | Prisma.PartnerPayoutScalarFieldEnum;
    having?: Prisma.PartnerPayoutScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PartnerPayoutCountAggregateInputType | true;
    _avg?: PartnerPayoutAvgAggregateInputType;
    _sum?: PartnerPayoutSumAggregateInputType;
    _min?: PartnerPayoutMinAggregateInputType;
    _max?: PartnerPayoutMaxAggregateInputType;
};
export type PartnerPayoutGroupByOutputType = {
    id: string;
    partnerId: string;
    requestedById: string;
    reviewedById: string | null;
    amount: number;
    status: $Enums.PayoutStatus;
    bankName: string;
    accountName: string;
    accountNumberMasked: string;
    note: string | null;
    rejectionReason: string | null;
    requestedAt: Date;
    reviewedAt: Date | null;
    paidAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PartnerPayoutCountAggregateOutputType | null;
    _avg: PartnerPayoutAvgAggregateOutputType | null;
    _sum: PartnerPayoutSumAggregateOutputType | null;
    _min: PartnerPayoutMinAggregateOutputType | null;
    _max: PartnerPayoutMaxAggregateOutputType | null;
};
export type GetPartnerPayoutGroupByPayload<T extends PartnerPayoutGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PartnerPayoutGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PartnerPayoutGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PartnerPayoutGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PartnerPayoutGroupByOutputType[P]>;
}>>;
export type PartnerPayoutWhereInput = {
    AND?: Prisma.PartnerPayoutWhereInput | Prisma.PartnerPayoutWhereInput[];
    OR?: Prisma.PartnerPayoutWhereInput[];
    NOT?: Prisma.PartnerPayoutWhereInput | Prisma.PartnerPayoutWhereInput[];
    id?: Prisma.StringFilter<"PartnerPayout"> | string;
    partnerId?: Prisma.StringFilter<"PartnerPayout"> | string;
    requestedById?: Prisma.StringFilter<"PartnerPayout"> | string;
    reviewedById?: Prisma.StringNullableFilter<"PartnerPayout"> | string | null;
    amount?: Prisma.IntFilter<"PartnerPayout"> | number;
    status?: Prisma.EnumPayoutStatusFilter<"PartnerPayout"> | $Enums.PayoutStatus;
    bankName?: Prisma.StringFilter<"PartnerPayout"> | string;
    accountName?: Prisma.StringFilter<"PartnerPayout"> | string;
    accountNumberMasked?: Prisma.StringFilter<"PartnerPayout"> | string;
    note?: Prisma.StringNullableFilter<"PartnerPayout"> | string | null;
    rejectionReason?: Prisma.StringNullableFilter<"PartnerPayout"> | string | null;
    requestedAt?: Prisma.DateTimeFilter<"PartnerPayout"> | Date | string;
    reviewedAt?: Prisma.DateTimeNullableFilter<"PartnerPayout"> | Date | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"PartnerPayout"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PartnerPayout"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PartnerPayout"> | Date | string;
};
export type PartnerPayoutOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    bankName?: Prisma.SortOrder;
    accountName?: Prisma.SortOrder;
    accountNumberMasked?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PartnerPayoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PartnerPayoutWhereInput | Prisma.PartnerPayoutWhereInput[];
    OR?: Prisma.PartnerPayoutWhereInput[];
    NOT?: Prisma.PartnerPayoutWhereInput | Prisma.PartnerPayoutWhereInput[];
    partnerId?: Prisma.StringFilter<"PartnerPayout"> | string;
    requestedById?: Prisma.StringFilter<"PartnerPayout"> | string;
    reviewedById?: Prisma.StringNullableFilter<"PartnerPayout"> | string | null;
    amount?: Prisma.IntFilter<"PartnerPayout"> | number;
    status?: Prisma.EnumPayoutStatusFilter<"PartnerPayout"> | $Enums.PayoutStatus;
    bankName?: Prisma.StringFilter<"PartnerPayout"> | string;
    accountName?: Prisma.StringFilter<"PartnerPayout"> | string;
    accountNumberMasked?: Prisma.StringFilter<"PartnerPayout"> | string;
    note?: Prisma.StringNullableFilter<"PartnerPayout"> | string | null;
    rejectionReason?: Prisma.StringNullableFilter<"PartnerPayout"> | string | null;
    requestedAt?: Prisma.DateTimeFilter<"PartnerPayout"> | Date | string;
    reviewedAt?: Prisma.DateTimeNullableFilter<"PartnerPayout"> | Date | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"PartnerPayout"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PartnerPayout"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PartnerPayout"> | Date | string;
}, "id">;
export type PartnerPayoutOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    bankName?: Prisma.SortOrder;
    accountName?: Prisma.SortOrder;
    accountNumberMasked?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PartnerPayoutCountOrderByAggregateInput;
    _avg?: Prisma.PartnerPayoutAvgOrderByAggregateInput;
    _max?: Prisma.PartnerPayoutMaxOrderByAggregateInput;
    _min?: Prisma.PartnerPayoutMinOrderByAggregateInput;
    _sum?: Prisma.PartnerPayoutSumOrderByAggregateInput;
};
export type PartnerPayoutScalarWhereWithAggregatesInput = {
    AND?: Prisma.PartnerPayoutScalarWhereWithAggregatesInput | Prisma.PartnerPayoutScalarWhereWithAggregatesInput[];
    OR?: Prisma.PartnerPayoutScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PartnerPayoutScalarWhereWithAggregatesInput | Prisma.PartnerPayoutScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PartnerPayout"> | string;
    partnerId?: Prisma.StringWithAggregatesFilter<"PartnerPayout"> | string;
    requestedById?: Prisma.StringWithAggregatesFilter<"PartnerPayout"> | string;
    reviewedById?: Prisma.StringNullableWithAggregatesFilter<"PartnerPayout"> | string | null;
    amount?: Prisma.IntWithAggregatesFilter<"PartnerPayout"> | number;
    status?: Prisma.EnumPayoutStatusWithAggregatesFilter<"PartnerPayout"> | $Enums.PayoutStatus;
    bankName?: Prisma.StringWithAggregatesFilter<"PartnerPayout"> | string;
    accountName?: Prisma.StringWithAggregatesFilter<"PartnerPayout"> | string;
    accountNumberMasked?: Prisma.StringWithAggregatesFilter<"PartnerPayout"> | string;
    note?: Prisma.StringNullableWithAggregatesFilter<"PartnerPayout"> | string | null;
    rejectionReason?: Prisma.StringNullableWithAggregatesFilter<"PartnerPayout"> | string | null;
    requestedAt?: Prisma.DateTimeWithAggregatesFilter<"PartnerPayout"> | Date | string;
    reviewedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PartnerPayout"> | Date | string | null;
    paidAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PartnerPayout"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PartnerPayout"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PartnerPayout"> | Date | string;
};
export type PartnerPayoutCreateInput = {
    id?: string;
    partnerId: string;
    requestedById: string;
    reviewedById?: string | null;
    amount: number;
    status?: $Enums.PayoutStatus;
    bankName: string;
    accountName: string;
    accountNumberMasked: string;
    note?: string | null;
    rejectionReason?: string | null;
    requestedAt?: Date | string;
    reviewedAt?: Date | string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PartnerPayoutUncheckedCreateInput = {
    id?: string;
    partnerId: string;
    requestedById: string;
    reviewedById?: string | null;
    amount: number;
    status?: $Enums.PayoutStatus;
    bankName: string;
    accountName: string;
    accountNumberMasked: string;
    note?: string | null;
    rejectionReason?: string | null;
    requestedAt?: Date | string;
    reviewedAt?: Date | string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PartnerPayoutUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumberMasked?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerPayoutUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumberMasked?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerPayoutCreateManyInput = {
    id?: string;
    partnerId: string;
    requestedById: string;
    reviewedById?: string | null;
    amount: number;
    status?: $Enums.PayoutStatus;
    bankName: string;
    accountName: string;
    accountNumberMasked: string;
    note?: string | null;
    rejectionReason?: string | null;
    requestedAt?: Date | string;
    reviewedAt?: Date | string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PartnerPayoutUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumberMasked?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerPayoutUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumberMasked?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerPayoutCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    bankName?: Prisma.SortOrder;
    accountName?: Prisma.SortOrder;
    accountNumberMasked?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PartnerPayoutAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PartnerPayoutMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    bankName?: Prisma.SortOrder;
    accountName?: Prisma.SortOrder;
    accountNumberMasked?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PartnerPayoutMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    bankName?: Prisma.SortOrder;
    accountName?: Prisma.SortOrder;
    accountNumberMasked?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PartnerPayoutSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type EnumPayoutStatusFieldUpdateOperationsInput = {
    set?: $Enums.PayoutStatus;
};
export type PartnerPayoutSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partnerId?: boolean;
    requestedById?: boolean;
    reviewedById?: boolean;
    amount?: boolean;
    status?: boolean;
    bankName?: boolean;
    accountName?: boolean;
    accountNumberMasked?: boolean;
    note?: boolean;
    rejectionReason?: boolean;
    requestedAt?: boolean;
    reviewedAt?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["partnerPayout"]>;
export type PartnerPayoutSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partnerId?: boolean;
    requestedById?: boolean;
    reviewedById?: boolean;
    amount?: boolean;
    status?: boolean;
    bankName?: boolean;
    accountName?: boolean;
    accountNumberMasked?: boolean;
    note?: boolean;
    rejectionReason?: boolean;
    requestedAt?: boolean;
    reviewedAt?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["partnerPayout"]>;
export type PartnerPayoutSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partnerId?: boolean;
    requestedById?: boolean;
    reviewedById?: boolean;
    amount?: boolean;
    status?: boolean;
    bankName?: boolean;
    accountName?: boolean;
    accountNumberMasked?: boolean;
    note?: boolean;
    rejectionReason?: boolean;
    requestedAt?: boolean;
    reviewedAt?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["partnerPayout"]>;
export type PartnerPayoutSelectScalar = {
    id?: boolean;
    partnerId?: boolean;
    requestedById?: boolean;
    reviewedById?: boolean;
    amount?: boolean;
    status?: boolean;
    bankName?: boolean;
    accountName?: boolean;
    accountNumberMasked?: boolean;
    note?: boolean;
    rejectionReason?: boolean;
    requestedAt?: boolean;
    reviewedAt?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PartnerPayoutOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "partnerId" | "requestedById" | "reviewedById" | "amount" | "status" | "bankName" | "accountName" | "accountNumberMasked" | "note" | "rejectionReason" | "requestedAt" | "reviewedAt" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["partnerPayout"]>;
export type $PartnerPayoutPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PartnerPayout";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        partnerId: string;
        requestedById: string;
        reviewedById: string | null;
        amount: number;
        status: $Enums.PayoutStatus;
        bankName: string;
        accountName: string;
        accountNumberMasked: string;
        note: string | null;
        rejectionReason: string | null;
        requestedAt: Date;
        reviewedAt: Date | null;
        paidAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["partnerPayout"]>;
    composites: {};
};
export type PartnerPayoutGetPayload<S extends boolean | null | undefined | PartnerPayoutDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PartnerPayoutPayload, S>;
export type PartnerPayoutCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PartnerPayoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PartnerPayoutCountAggregateInputType | true;
};
export interface PartnerPayoutDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PartnerPayout'];
        meta: {
            name: 'PartnerPayout';
        };
    };
    findUnique<T extends PartnerPayoutFindUniqueArgs>(args: Prisma.SelectSubset<T, PartnerPayoutFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PartnerPayoutClient<runtime.Types.Result.GetResult<Prisma.$PartnerPayoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PartnerPayoutFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PartnerPayoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartnerPayoutClient<runtime.Types.Result.GetResult<Prisma.$PartnerPayoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PartnerPayoutFindFirstArgs>(args?: Prisma.SelectSubset<T, PartnerPayoutFindFirstArgs<ExtArgs>>): Prisma.Prisma__PartnerPayoutClient<runtime.Types.Result.GetResult<Prisma.$PartnerPayoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PartnerPayoutFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PartnerPayoutFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartnerPayoutClient<runtime.Types.Result.GetResult<Prisma.$PartnerPayoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PartnerPayoutFindManyArgs>(args?: Prisma.SelectSubset<T, PartnerPayoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerPayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PartnerPayoutCreateArgs>(args: Prisma.SelectSubset<T, PartnerPayoutCreateArgs<ExtArgs>>): Prisma.Prisma__PartnerPayoutClient<runtime.Types.Result.GetResult<Prisma.$PartnerPayoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PartnerPayoutCreateManyArgs>(args?: Prisma.SelectSubset<T, PartnerPayoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PartnerPayoutCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PartnerPayoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerPayoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PartnerPayoutDeleteArgs>(args: Prisma.SelectSubset<T, PartnerPayoutDeleteArgs<ExtArgs>>): Prisma.Prisma__PartnerPayoutClient<runtime.Types.Result.GetResult<Prisma.$PartnerPayoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PartnerPayoutUpdateArgs>(args: Prisma.SelectSubset<T, PartnerPayoutUpdateArgs<ExtArgs>>): Prisma.Prisma__PartnerPayoutClient<runtime.Types.Result.GetResult<Prisma.$PartnerPayoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PartnerPayoutDeleteManyArgs>(args?: Prisma.SelectSubset<T, PartnerPayoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PartnerPayoutUpdateManyArgs>(args: Prisma.SelectSubset<T, PartnerPayoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PartnerPayoutUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PartnerPayoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerPayoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PartnerPayoutUpsertArgs>(args: Prisma.SelectSubset<T, PartnerPayoutUpsertArgs<ExtArgs>>): Prisma.Prisma__PartnerPayoutClient<runtime.Types.Result.GetResult<Prisma.$PartnerPayoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PartnerPayoutCountArgs>(args?: Prisma.Subset<T, PartnerPayoutCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PartnerPayoutCountAggregateOutputType> : number>;
    aggregate<T extends PartnerPayoutAggregateArgs>(args: Prisma.Subset<T, PartnerPayoutAggregateArgs>): Prisma.PrismaPromise<GetPartnerPayoutAggregateType<T>>;
    groupBy<T extends PartnerPayoutGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PartnerPayoutGroupByArgs['orderBy'];
    } : {
        orderBy?: PartnerPayoutGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PartnerPayoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerPayoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PartnerPayoutFieldRefs;
}
export interface Prisma__PartnerPayoutClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PartnerPayoutFieldRefs {
    readonly id: Prisma.FieldRef<"PartnerPayout", 'String'>;
    readonly partnerId: Prisma.FieldRef<"PartnerPayout", 'String'>;
    readonly requestedById: Prisma.FieldRef<"PartnerPayout", 'String'>;
    readonly reviewedById: Prisma.FieldRef<"PartnerPayout", 'String'>;
    readonly amount: Prisma.FieldRef<"PartnerPayout", 'Int'>;
    readonly status: Prisma.FieldRef<"PartnerPayout", 'PayoutStatus'>;
    readonly bankName: Prisma.FieldRef<"PartnerPayout", 'String'>;
    readonly accountName: Prisma.FieldRef<"PartnerPayout", 'String'>;
    readonly accountNumberMasked: Prisma.FieldRef<"PartnerPayout", 'String'>;
    readonly note: Prisma.FieldRef<"PartnerPayout", 'String'>;
    readonly rejectionReason: Prisma.FieldRef<"PartnerPayout", 'String'>;
    readonly requestedAt: Prisma.FieldRef<"PartnerPayout", 'DateTime'>;
    readonly reviewedAt: Prisma.FieldRef<"PartnerPayout", 'DateTime'>;
    readonly paidAt: Prisma.FieldRef<"PartnerPayout", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"PartnerPayout", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PartnerPayout", 'DateTime'>;
}
export type PartnerPayoutFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerPayoutSelect<ExtArgs> | null;
    omit?: Prisma.PartnerPayoutOmit<ExtArgs> | null;
    where: Prisma.PartnerPayoutWhereUniqueInput;
};
export type PartnerPayoutFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerPayoutSelect<ExtArgs> | null;
    omit?: Prisma.PartnerPayoutOmit<ExtArgs> | null;
    where: Prisma.PartnerPayoutWhereUniqueInput;
};
export type PartnerPayoutFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerPayoutSelect<ExtArgs> | null;
    omit?: Prisma.PartnerPayoutOmit<ExtArgs> | null;
    where?: Prisma.PartnerPayoutWhereInput;
    orderBy?: Prisma.PartnerPayoutOrderByWithRelationInput | Prisma.PartnerPayoutOrderByWithRelationInput[];
    cursor?: Prisma.PartnerPayoutWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartnerPayoutScalarFieldEnum | Prisma.PartnerPayoutScalarFieldEnum[];
};
export type PartnerPayoutFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerPayoutSelect<ExtArgs> | null;
    omit?: Prisma.PartnerPayoutOmit<ExtArgs> | null;
    where?: Prisma.PartnerPayoutWhereInput;
    orderBy?: Prisma.PartnerPayoutOrderByWithRelationInput | Prisma.PartnerPayoutOrderByWithRelationInput[];
    cursor?: Prisma.PartnerPayoutWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartnerPayoutScalarFieldEnum | Prisma.PartnerPayoutScalarFieldEnum[];
};
export type PartnerPayoutFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerPayoutSelect<ExtArgs> | null;
    omit?: Prisma.PartnerPayoutOmit<ExtArgs> | null;
    where?: Prisma.PartnerPayoutWhereInput;
    orderBy?: Prisma.PartnerPayoutOrderByWithRelationInput | Prisma.PartnerPayoutOrderByWithRelationInput[];
    cursor?: Prisma.PartnerPayoutWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartnerPayoutScalarFieldEnum | Prisma.PartnerPayoutScalarFieldEnum[];
};
export type PartnerPayoutCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerPayoutSelect<ExtArgs> | null;
    omit?: Prisma.PartnerPayoutOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartnerPayoutCreateInput, Prisma.PartnerPayoutUncheckedCreateInput>;
};
export type PartnerPayoutCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PartnerPayoutCreateManyInput | Prisma.PartnerPayoutCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PartnerPayoutCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerPayoutSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PartnerPayoutOmit<ExtArgs> | null;
    data: Prisma.PartnerPayoutCreateManyInput | Prisma.PartnerPayoutCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PartnerPayoutUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerPayoutSelect<ExtArgs> | null;
    omit?: Prisma.PartnerPayoutOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartnerPayoutUpdateInput, Prisma.PartnerPayoutUncheckedUpdateInput>;
    where: Prisma.PartnerPayoutWhereUniqueInput;
};
export type PartnerPayoutUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PartnerPayoutUpdateManyMutationInput, Prisma.PartnerPayoutUncheckedUpdateManyInput>;
    where?: Prisma.PartnerPayoutWhereInput;
    limit?: number;
};
export type PartnerPayoutUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerPayoutSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PartnerPayoutOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartnerPayoutUpdateManyMutationInput, Prisma.PartnerPayoutUncheckedUpdateManyInput>;
    where?: Prisma.PartnerPayoutWhereInput;
    limit?: number;
};
export type PartnerPayoutUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerPayoutSelect<ExtArgs> | null;
    omit?: Prisma.PartnerPayoutOmit<ExtArgs> | null;
    where: Prisma.PartnerPayoutWhereUniqueInput;
    create: Prisma.XOR<Prisma.PartnerPayoutCreateInput, Prisma.PartnerPayoutUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PartnerPayoutUpdateInput, Prisma.PartnerPayoutUncheckedUpdateInput>;
};
export type PartnerPayoutDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerPayoutSelect<ExtArgs> | null;
    omit?: Prisma.PartnerPayoutOmit<ExtArgs> | null;
    where: Prisma.PartnerPayoutWhereUniqueInput;
};
export type PartnerPayoutDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartnerPayoutWhereInput;
    limit?: number;
};
export type PartnerPayoutDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerPayoutSelect<ExtArgs> | null;
    omit?: Prisma.PartnerPayoutOmit<ExtArgs> | null;
};
