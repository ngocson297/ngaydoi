import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PartnerCommissionModel = runtime.Types.Result.DefaultSelection<Prisma.$PartnerCommissionPayload>;
export type AggregatePartnerCommission = {
    _count: PartnerCommissionCountAggregateOutputType | null;
    _avg: PartnerCommissionAvgAggregateOutputType | null;
    _sum: PartnerCommissionSumAggregateOutputType | null;
    _min: PartnerCommissionMinAggregateOutputType | null;
    _max: PartnerCommissionMaxAggregateOutputType | null;
};
export type PartnerCommissionAvgAggregateOutputType = {
    baseAmount: number | null;
    rateBps: number | null;
    commissionAmount: number | null;
};
export type PartnerCommissionSumAggregateOutputType = {
    baseAmount: number | null;
    rateBps: number | null;
    commissionAmount: number | null;
};
export type PartnerCommissionMinAggregateOutputType = {
    id: string | null;
    partnerId: string | null;
    orderId: string | null;
    customerId: string | null;
    weddingId: string | null;
    description: string | null;
    baseAmount: number | null;
    rateBps: number | null;
    commissionAmount: number | null;
    status: $Enums.CommissionStatus | null;
    availableAt: Date | null;
    approvedAt: Date | null;
    paidAt: Date | null;
    payoutId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PartnerCommissionMaxAggregateOutputType = {
    id: string | null;
    partnerId: string | null;
    orderId: string | null;
    customerId: string | null;
    weddingId: string | null;
    description: string | null;
    baseAmount: number | null;
    rateBps: number | null;
    commissionAmount: number | null;
    status: $Enums.CommissionStatus | null;
    availableAt: Date | null;
    approvedAt: Date | null;
    paidAt: Date | null;
    payoutId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PartnerCommissionCountAggregateOutputType = {
    id: number;
    partnerId: number;
    orderId: number;
    customerId: number;
    weddingId: number;
    description: number;
    baseAmount: number;
    rateBps: number;
    commissionAmount: number;
    status: number;
    availableAt: number;
    approvedAt: number;
    paidAt: number;
    payoutId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PartnerCommissionAvgAggregateInputType = {
    baseAmount?: true;
    rateBps?: true;
    commissionAmount?: true;
};
export type PartnerCommissionSumAggregateInputType = {
    baseAmount?: true;
    rateBps?: true;
    commissionAmount?: true;
};
export type PartnerCommissionMinAggregateInputType = {
    id?: true;
    partnerId?: true;
    orderId?: true;
    customerId?: true;
    weddingId?: true;
    description?: true;
    baseAmount?: true;
    rateBps?: true;
    commissionAmount?: true;
    status?: true;
    availableAt?: true;
    approvedAt?: true;
    paidAt?: true;
    payoutId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PartnerCommissionMaxAggregateInputType = {
    id?: true;
    partnerId?: true;
    orderId?: true;
    customerId?: true;
    weddingId?: true;
    description?: true;
    baseAmount?: true;
    rateBps?: true;
    commissionAmount?: true;
    status?: true;
    availableAt?: true;
    approvedAt?: true;
    paidAt?: true;
    payoutId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PartnerCommissionCountAggregateInputType = {
    id?: true;
    partnerId?: true;
    orderId?: true;
    customerId?: true;
    weddingId?: true;
    description?: true;
    baseAmount?: true;
    rateBps?: true;
    commissionAmount?: true;
    status?: true;
    availableAt?: true;
    approvedAt?: true;
    paidAt?: true;
    payoutId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PartnerCommissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartnerCommissionWhereInput;
    orderBy?: Prisma.PartnerCommissionOrderByWithRelationInput | Prisma.PartnerCommissionOrderByWithRelationInput[];
    cursor?: Prisma.PartnerCommissionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PartnerCommissionCountAggregateInputType;
    _avg?: PartnerCommissionAvgAggregateInputType;
    _sum?: PartnerCommissionSumAggregateInputType;
    _min?: PartnerCommissionMinAggregateInputType;
    _max?: PartnerCommissionMaxAggregateInputType;
};
export type GetPartnerCommissionAggregateType<T extends PartnerCommissionAggregateArgs> = {
    [P in keyof T & keyof AggregatePartnerCommission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePartnerCommission[P]> : Prisma.GetScalarType<T[P], AggregatePartnerCommission[P]>;
};
export type PartnerCommissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartnerCommissionWhereInput;
    orderBy?: Prisma.PartnerCommissionOrderByWithAggregationInput | Prisma.PartnerCommissionOrderByWithAggregationInput[];
    by: Prisma.PartnerCommissionScalarFieldEnum[] | Prisma.PartnerCommissionScalarFieldEnum;
    having?: Prisma.PartnerCommissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PartnerCommissionCountAggregateInputType | true;
    _avg?: PartnerCommissionAvgAggregateInputType;
    _sum?: PartnerCommissionSumAggregateInputType;
    _min?: PartnerCommissionMinAggregateInputType;
    _max?: PartnerCommissionMaxAggregateInputType;
};
export type PartnerCommissionGroupByOutputType = {
    id: string;
    partnerId: string;
    orderId: string | null;
    customerId: string | null;
    weddingId: string | null;
    description: string;
    baseAmount: number;
    rateBps: number;
    commissionAmount: number;
    status: $Enums.CommissionStatus;
    availableAt: Date | null;
    approvedAt: Date | null;
    paidAt: Date | null;
    payoutId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PartnerCommissionCountAggregateOutputType | null;
    _avg: PartnerCommissionAvgAggregateOutputType | null;
    _sum: PartnerCommissionSumAggregateOutputType | null;
    _min: PartnerCommissionMinAggregateOutputType | null;
    _max: PartnerCommissionMaxAggregateOutputType | null;
};
export type GetPartnerCommissionGroupByPayload<T extends PartnerCommissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PartnerCommissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PartnerCommissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PartnerCommissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PartnerCommissionGroupByOutputType[P]>;
}>>;
export type PartnerCommissionWhereInput = {
    AND?: Prisma.PartnerCommissionWhereInput | Prisma.PartnerCommissionWhereInput[];
    OR?: Prisma.PartnerCommissionWhereInput[];
    NOT?: Prisma.PartnerCommissionWhereInput | Prisma.PartnerCommissionWhereInput[];
    id?: Prisma.StringFilter<"PartnerCommission"> | string;
    partnerId?: Prisma.StringFilter<"PartnerCommission"> | string;
    orderId?: Prisma.StringNullableFilter<"PartnerCommission"> | string | null;
    customerId?: Prisma.StringNullableFilter<"PartnerCommission"> | string | null;
    weddingId?: Prisma.StringNullableFilter<"PartnerCommission"> | string | null;
    description?: Prisma.StringFilter<"PartnerCommission"> | string;
    baseAmount?: Prisma.IntFilter<"PartnerCommission"> | number;
    rateBps?: Prisma.IntFilter<"PartnerCommission"> | number;
    commissionAmount?: Prisma.IntFilter<"PartnerCommission"> | number;
    status?: Prisma.EnumCommissionStatusFilter<"PartnerCommission"> | $Enums.CommissionStatus;
    availableAt?: Prisma.DateTimeNullableFilter<"PartnerCommission"> | Date | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"PartnerCommission"> | Date | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"PartnerCommission"> | Date | string | null;
    payoutId?: Prisma.StringNullableFilter<"PartnerCommission"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PartnerCommission"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PartnerCommission"> | Date | string;
};
export type PartnerCommissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    customerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    weddingId?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrder;
    baseAmount?: Prisma.SortOrder;
    rateBps?: Prisma.SortOrder;
    commissionAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    availableAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    payoutId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PartnerCommissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    partnerId_orderId?: Prisma.PartnerCommissionPartnerIdOrderIdCompoundUniqueInput;
    AND?: Prisma.PartnerCommissionWhereInput | Prisma.PartnerCommissionWhereInput[];
    OR?: Prisma.PartnerCommissionWhereInput[];
    NOT?: Prisma.PartnerCommissionWhereInput | Prisma.PartnerCommissionWhereInput[];
    partnerId?: Prisma.StringFilter<"PartnerCommission"> | string;
    orderId?: Prisma.StringNullableFilter<"PartnerCommission"> | string | null;
    customerId?: Prisma.StringNullableFilter<"PartnerCommission"> | string | null;
    weddingId?: Prisma.StringNullableFilter<"PartnerCommission"> | string | null;
    description?: Prisma.StringFilter<"PartnerCommission"> | string;
    baseAmount?: Prisma.IntFilter<"PartnerCommission"> | number;
    rateBps?: Prisma.IntFilter<"PartnerCommission"> | number;
    commissionAmount?: Prisma.IntFilter<"PartnerCommission"> | number;
    status?: Prisma.EnumCommissionStatusFilter<"PartnerCommission"> | $Enums.CommissionStatus;
    availableAt?: Prisma.DateTimeNullableFilter<"PartnerCommission"> | Date | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"PartnerCommission"> | Date | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"PartnerCommission"> | Date | string | null;
    payoutId?: Prisma.StringNullableFilter<"PartnerCommission"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PartnerCommission"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PartnerCommission"> | Date | string;
}, "id" | "partnerId_orderId">;
export type PartnerCommissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    customerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    weddingId?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrder;
    baseAmount?: Prisma.SortOrder;
    rateBps?: Prisma.SortOrder;
    commissionAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    availableAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    payoutId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PartnerCommissionCountOrderByAggregateInput;
    _avg?: Prisma.PartnerCommissionAvgOrderByAggregateInput;
    _max?: Prisma.PartnerCommissionMaxOrderByAggregateInput;
    _min?: Prisma.PartnerCommissionMinOrderByAggregateInput;
    _sum?: Prisma.PartnerCommissionSumOrderByAggregateInput;
};
export type PartnerCommissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.PartnerCommissionScalarWhereWithAggregatesInput | Prisma.PartnerCommissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.PartnerCommissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PartnerCommissionScalarWhereWithAggregatesInput | Prisma.PartnerCommissionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PartnerCommission"> | string;
    partnerId?: Prisma.StringWithAggregatesFilter<"PartnerCommission"> | string;
    orderId?: Prisma.StringNullableWithAggregatesFilter<"PartnerCommission"> | string | null;
    customerId?: Prisma.StringNullableWithAggregatesFilter<"PartnerCommission"> | string | null;
    weddingId?: Prisma.StringNullableWithAggregatesFilter<"PartnerCommission"> | string | null;
    description?: Prisma.StringWithAggregatesFilter<"PartnerCommission"> | string;
    baseAmount?: Prisma.IntWithAggregatesFilter<"PartnerCommission"> | number;
    rateBps?: Prisma.IntWithAggregatesFilter<"PartnerCommission"> | number;
    commissionAmount?: Prisma.IntWithAggregatesFilter<"PartnerCommission"> | number;
    status?: Prisma.EnumCommissionStatusWithAggregatesFilter<"PartnerCommission"> | $Enums.CommissionStatus;
    availableAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PartnerCommission"> | Date | string | null;
    approvedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PartnerCommission"> | Date | string | null;
    paidAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PartnerCommission"> | Date | string | null;
    payoutId?: Prisma.StringNullableWithAggregatesFilter<"PartnerCommission"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PartnerCommission"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PartnerCommission"> | Date | string;
};
export type PartnerCommissionCreateInput = {
    id?: string;
    partnerId: string;
    orderId?: string | null;
    customerId?: string | null;
    weddingId?: string | null;
    description: string;
    baseAmount: number;
    rateBps: number;
    commissionAmount: number;
    status?: $Enums.CommissionStatus;
    availableAt?: Date | string | null;
    approvedAt?: Date | string | null;
    paidAt?: Date | string | null;
    payoutId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PartnerCommissionUncheckedCreateInput = {
    id?: string;
    partnerId: string;
    orderId?: string | null;
    customerId?: string | null;
    weddingId?: string | null;
    description: string;
    baseAmount: number;
    rateBps: number;
    commissionAmount: number;
    status?: $Enums.CommissionStatus;
    availableAt?: Date | string | null;
    approvedAt?: Date | string | null;
    paidAt?: Date | string | null;
    payoutId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PartnerCommissionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weddingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    rateBps?: Prisma.IntFieldUpdateOperationsInput | number;
    commissionAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus;
    availableAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payoutId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerCommissionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weddingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    rateBps?: Prisma.IntFieldUpdateOperationsInput | number;
    commissionAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus;
    availableAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payoutId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerCommissionCreateManyInput = {
    id?: string;
    partnerId: string;
    orderId?: string | null;
    customerId?: string | null;
    weddingId?: string | null;
    description: string;
    baseAmount: number;
    rateBps: number;
    commissionAmount: number;
    status?: $Enums.CommissionStatus;
    availableAt?: Date | string | null;
    approvedAt?: Date | string | null;
    paidAt?: Date | string | null;
    payoutId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PartnerCommissionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weddingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    rateBps?: Prisma.IntFieldUpdateOperationsInput | number;
    commissionAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus;
    availableAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payoutId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerCommissionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weddingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    rateBps?: Prisma.IntFieldUpdateOperationsInput | number;
    commissionAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus;
    availableAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payoutId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerCommissionPartnerIdOrderIdCompoundUniqueInput = {
    partnerId: string;
    orderId: string;
};
export type PartnerCommissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    baseAmount?: Prisma.SortOrder;
    rateBps?: Prisma.SortOrder;
    commissionAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    availableAt?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    payoutId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PartnerCommissionAvgOrderByAggregateInput = {
    baseAmount?: Prisma.SortOrder;
    rateBps?: Prisma.SortOrder;
    commissionAmount?: Prisma.SortOrder;
};
export type PartnerCommissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    baseAmount?: Prisma.SortOrder;
    rateBps?: Prisma.SortOrder;
    commissionAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    availableAt?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    payoutId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PartnerCommissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    baseAmount?: Prisma.SortOrder;
    rateBps?: Prisma.SortOrder;
    commissionAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    availableAt?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    payoutId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PartnerCommissionSumOrderByAggregateInput = {
    baseAmount?: Prisma.SortOrder;
    rateBps?: Prisma.SortOrder;
    commissionAmount?: Prisma.SortOrder;
};
export type EnumCommissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.CommissionStatus;
};
export type PartnerCommissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partnerId?: boolean;
    orderId?: boolean;
    customerId?: boolean;
    weddingId?: boolean;
    description?: boolean;
    baseAmount?: boolean;
    rateBps?: boolean;
    commissionAmount?: boolean;
    status?: boolean;
    availableAt?: boolean;
    approvedAt?: boolean;
    paidAt?: boolean;
    payoutId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["partnerCommission"]>;
export type PartnerCommissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partnerId?: boolean;
    orderId?: boolean;
    customerId?: boolean;
    weddingId?: boolean;
    description?: boolean;
    baseAmount?: boolean;
    rateBps?: boolean;
    commissionAmount?: boolean;
    status?: boolean;
    availableAt?: boolean;
    approvedAt?: boolean;
    paidAt?: boolean;
    payoutId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["partnerCommission"]>;
export type PartnerCommissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partnerId?: boolean;
    orderId?: boolean;
    customerId?: boolean;
    weddingId?: boolean;
    description?: boolean;
    baseAmount?: boolean;
    rateBps?: boolean;
    commissionAmount?: boolean;
    status?: boolean;
    availableAt?: boolean;
    approvedAt?: boolean;
    paidAt?: boolean;
    payoutId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["partnerCommission"]>;
export type PartnerCommissionSelectScalar = {
    id?: boolean;
    partnerId?: boolean;
    orderId?: boolean;
    customerId?: boolean;
    weddingId?: boolean;
    description?: boolean;
    baseAmount?: boolean;
    rateBps?: boolean;
    commissionAmount?: boolean;
    status?: boolean;
    availableAt?: boolean;
    approvedAt?: boolean;
    paidAt?: boolean;
    payoutId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PartnerCommissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "partnerId" | "orderId" | "customerId" | "weddingId" | "description" | "baseAmount" | "rateBps" | "commissionAmount" | "status" | "availableAt" | "approvedAt" | "paidAt" | "payoutId" | "createdAt" | "updatedAt", ExtArgs["result"]["partnerCommission"]>;
export type $PartnerCommissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PartnerCommission";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        partnerId: string;
        orderId: string | null;
        customerId: string | null;
        weddingId: string | null;
        description: string;
        baseAmount: number;
        rateBps: number;
        commissionAmount: number;
        status: $Enums.CommissionStatus;
        availableAt: Date | null;
        approvedAt: Date | null;
        paidAt: Date | null;
        payoutId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["partnerCommission"]>;
    composites: {};
};
export type PartnerCommissionGetPayload<S extends boolean | null | undefined | PartnerCommissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PartnerCommissionPayload, S>;
export type PartnerCommissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PartnerCommissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PartnerCommissionCountAggregateInputType | true;
};
export interface PartnerCommissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PartnerCommission'];
        meta: {
            name: 'PartnerCommission';
        };
    };
    findUnique<T extends PartnerCommissionFindUniqueArgs>(args: Prisma.SelectSubset<T, PartnerCommissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PartnerCommissionClient<runtime.Types.Result.GetResult<Prisma.$PartnerCommissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PartnerCommissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PartnerCommissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartnerCommissionClient<runtime.Types.Result.GetResult<Prisma.$PartnerCommissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PartnerCommissionFindFirstArgs>(args?: Prisma.SelectSubset<T, PartnerCommissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__PartnerCommissionClient<runtime.Types.Result.GetResult<Prisma.$PartnerCommissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PartnerCommissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PartnerCommissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartnerCommissionClient<runtime.Types.Result.GetResult<Prisma.$PartnerCommissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PartnerCommissionFindManyArgs>(args?: Prisma.SelectSubset<T, PartnerCommissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerCommissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PartnerCommissionCreateArgs>(args: Prisma.SelectSubset<T, PartnerCommissionCreateArgs<ExtArgs>>): Prisma.Prisma__PartnerCommissionClient<runtime.Types.Result.GetResult<Prisma.$PartnerCommissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PartnerCommissionCreateManyArgs>(args?: Prisma.SelectSubset<T, PartnerCommissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PartnerCommissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PartnerCommissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerCommissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PartnerCommissionDeleteArgs>(args: Prisma.SelectSubset<T, PartnerCommissionDeleteArgs<ExtArgs>>): Prisma.Prisma__PartnerCommissionClient<runtime.Types.Result.GetResult<Prisma.$PartnerCommissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PartnerCommissionUpdateArgs>(args: Prisma.SelectSubset<T, PartnerCommissionUpdateArgs<ExtArgs>>): Prisma.Prisma__PartnerCommissionClient<runtime.Types.Result.GetResult<Prisma.$PartnerCommissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PartnerCommissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, PartnerCommissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PartnerCommissionUpdateManyArgs>(args: Prisma.SelectSubset<T, PartnerCommissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PartnerCommissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PartnerCommissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerCommissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PartnerCommissionUpsertArgs>(args: Prisma.SelectSubset<T, PartnerCommissionUpsertArgs<ExtArgs>>): Prisma.Prisma__PartnerCommissionClient<runtime.Types.Result.GetResult<Prisma.$PartnerCommissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PartnerCommissionCountArgs>(args?: Prisma.Subset<T, PartnerCommissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PartnerCommissionCountAggregateOutputType> : number>;
    aggregate<T extends PartnerCommissionAggregateArgs>(args: Prisma.Subset<T, PartnerCommissionAggregateArgs>): Prisma.PrismaPromise<GetPartnerCommissionAggregateType<T>>;
    groupBy<T extends PartnerCommissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PartnerCommissionGroupByArgs['orderBy'];
    } : {
        orderBy?: PartnerCommissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PartnerCommissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerCommissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PartnerCommissionFieldRefs;
}
export interface Prisma__PartnerCommissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PartnerCommissionFieldRefs {
    readonly id: Prisma.FieldRef<"PartnerCommission", 'String'>;
    readonly partnerId: Prisma.FieldRef<"PartnerCommission", 'String'>;
    readonly orderId: Prisma.FieldRef<"PartnerCommission", 'String'>;
    readonly customerId: Prisma.FieldRef<"PartnerCommission", 'String'>;
    readonly weddingId: Prisma.FieldRef<"PartnerCommission", 'String'>;
    readonly description: Prisma.FieldRef<"PartnerCommission", 'String'>;
    readonly baseAmount: Prisma.FieldRef<"PartnerCommission", 'Int'>;
    readonly rateBps: Prisma.FieldRef<"PartnerCommission", 'Int'>;
    readonly commissionAmount: Prisma.FieldRef<"PartnerCommission", 'Int'>;
    readonly status: Prisma.FieldRef<"PartnerCommission", 'CommissionStatus'>;
    readonly availableAt: Prisma.FieldRef<"PartnerCommission", 'DateTime'>;
    readonly approvedAt: Prisma.FieldRef<"PartnerCommission", 'DateTime'>;
    readonly paidAt: Prisma.FieldRef<"PartnerCommission", 'DateTime'>;
    readonly payoutId: Prisma.FieldRef<"PartnerCommission", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PartnerCommission", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PartnerCommission", 'DateTime'>;
}
export type PartnerCommissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerCommissionSelect<ExtArgs> | null;
    omit?: Prisma.PartnerCommissionOmit<ExtArgs> | null;
    where: Prisma.PartnerCommissionWhereUniqueInput;
};
export type PartnerCommissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerCommissionSelect<ExtArgs> | null;
    omit?: Prisma.PartnerCommissionOmit<ExtArgs> | null;
    where: Prisma.PartnerCommissionWhereUniqueInput;
};
export type PartnerCommissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerCommissionSelect<ExtArgs> | null;
    omit?: Prisma.PartnerCommissionOmit<ExtArgs> | null;
    where?: Prisma.PartnerCommissionWhereInput;
    orderBy?: Prisma.PartnerCommissionOrderByWithRelationInput | Prisma.PartnerCommissionOrderByWithRelationInput[];
    cursor?: Prisma.PartnerCommissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartnerCommissionScalarFieldEnum | Prisma.PartnerCommissionScalarFieldEnum[];
};
export type PartnerCommissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerCommissionSelect<ExtArgs> | null;
    omit?: Prisma.PartnerCommissionOmit<ExtArgs> | null;
    where?: Prisma.PartnerCommissionWhereInput;
    orderBy?: Prisma.PartnerCommissionOrderByWithRelationInput | Prisma.PartnerCommissionOrderByWithRelationInput[];
    cursor?: Prisma.PartnerCommissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartnerCommissionScalarFieldEnum | Prisma.PartnerCommissionScalarFieldEnum[];
};
export type PartnerCommissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerCommissionSelect<ExtArgs> | null;
    omit?: Prisma.PartnerCommissionOmit<ExtArgs> | null;
    where?: Prisma.PartnerCommissionWhereInput;
    orderBy?: Prisma.PartnerCommissionOrderByWithRelationInput | Prisma.PartnerCommissionOrderByWithRelationInput[];
    cursor?: Prisma.PartnerCommissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartnerCommissionScalarFieldEnum | Prisma.PartnerCommissionScalarFieldEnum[];
};
export type PartnerCommissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerCommissionSelect<ExtArgs> | null;
    omit?: Prisma.PartnerCommissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartnerCommissionCreateInput, Prisma.PartnerCommissionUncheckedCreateInput>;
};
export type PartnerCommissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PartnerCommissionCreateManyInput | Prisma.PartnerCommissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PartnerCommissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerCommissionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PartnerCommissionOmit<ExtArgs> | null;
    data: Prisma.PartnerCommissionCreateManyInput | Prisma.PartnerCommissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PartnerCommissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerCommissionSelect<ExtArgs> | null;
    omit?: Prisma.PartnerCommissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartnerCommissionUpdateInput, Prisma.PartnerCommissionUncheckedUpdateInput>;
    where: Prisma.PartnerCommissionWhereUniqueInput;
};
export type PartnerCommissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PartnerCommissionUpdateManyMutationInput, Prisma.PartnerCommissionUncheckedUpdateManyInput>;
    where?: Prisma.PartnerCommissionWhereInput;
    limit?: number;
};
export type PartnerCommissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerCommissionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PartnerCommissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartnerCommissionUpdateManyMutationInput, Prisma.PartnerCommissionUncheckedUpdateManyInput>;
    where?: Prisma.PartnerCommissionWhereInput;
    limit?: number;
};
export type PartnerCommissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerCommissionSelect<ExtArgs> | null;
    omit?: Prisma.PartnerCommissionOmit<ExtArgs> | null;
    where: Prisma.PartnerCommissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PartnerCommissionCreateInput, Prisma.PartnerCommissionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PartnerCommissionUpdateInput, Prisma.PartnerCommissionUncheckedUpdateInput>;
};
export type PartnerCommissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerCommissionSelect<ExtArgs> | null;
    omit?: Prisma.PartnerCommissionOmit<ExtArgs> | null;
    where: Prisma.PartnerCommissionWhereUniqueInput;
};
export type PartnerCommissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartnerCommissionWhereInput;
    limit?: number;
};
export type PartnerCommissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerCommissionSelect<ExtArgs> | null;
    omit?: Prisma.PartnerCommissionOmit<ExtArgs> | null;
};
