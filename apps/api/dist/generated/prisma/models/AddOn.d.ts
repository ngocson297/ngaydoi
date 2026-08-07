import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AddOnModel = runtime.Types.Result.DefaultSelection<Prisma.$AddOnPayload>;
export type AggregateAddOn = {
    _count: AddOnCountAggregateOutputType | null;
    _avg: AddOnAvgAggregateOutputType | null;
    _sum: AddOnSumAggregateOutputType | null;
    _min: AddOnMinAggregateOutputType | null;
    _max: AddOnMaxAggregateOutputType | null;
};
export type AddOnAvgAggregateOutputType = {
    priceAmount: number | null;
    guestLimitBonus: number | null;
    mediaLimitBonus: number | null;
    sortOrder: number | null;
};
export type AddOnSumAggregateOutputType = {
    priceAmount: number | null;
    guestLimitBonus: number | null;
    mediaLimitBonus: number | null;
    sortOrder: number | null;
};
export type AddOnMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    description: string | null;
    priceAmount: number | null;
    currency: string | null;
    guestLimitBonus: number | null;
    mediaLimitBonus: number | null;
    active: boolean | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AddOnMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    description: string | null;
    priceAmount: number | null;
    currency: string | null;
    guestLimitBonus: number | null;
    mediaLimitBonus: number | null;
    active: boolean | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AddOnCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    description: number;
    priceAmount: number;
    currency: number;
    guestLimitBonus: number;
    mediaLimitBonus: number;
    active: number;
    sortOrder: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AddOnAvgAggregateInputType = {
    priceAmount?: true;
    guestLimitBonus?: true;
    mediaLimitBonus?: true;
    sortOrder?: true;
};
export type AddOnSumAggregateInputType = {
    priceAmount?: true;
    guestLimitBonus?: true;
    mediaLimitBonus?: true;
    sortOrder?: true;
};
export type AddOnMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    priceAmount?: true;
    currency?: true;
    guestLimitBonus?: true;
    mediaLimitBonus?: true;
    active?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AddOnMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    priceAmount?: true;
    currency?: true;
    guestLimitBonus?: true;
    mediaLimitBonus?: true;
    active?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AddOnCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    priceAmount?: true;
    currency?: true;
    guestLimitBonus?: true;
    mediaLimitBonus?: true;
    active?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AddOnAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AddOnWhereInput;
    orderBy?: Prisma.AddOnOrderByWithRelationInput | Prisma.AddOnOrderByWithRelationInput[];
    cursor?: Prisma.AddOnWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AddOnCountAggregateInputType;
    _avg?: AddOnAvgAggregateInputType;
    _sum?: AddOnSumAggregateInputType;
    _min?: AddOnMinAggregateInputType;
    _max?: AddOnMaxAggregateInputType;
};
export type GetAddOnAggregateType<T extends AddOnAggregateArgs> = {
    [P in keyof T & keyof AggregateAddOn]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAddOn[P]> : Prisma.GetScalarType<T[P], AggregateAddOn[P]>;
};
export type AddOnGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AddOnWhereInput;
    orderBy?: Prisma.AddOnOrderByWithAggregationInput | Prisma.AddOnOrderByWithAggregationInput[];
    by: Prisma.AddOnScalarFieldEnum[] | Prisma.AddOnScalarFieldEnum;
    having?: Prisma.AddOnScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AddOnCountAggregateInputType | true;
    _avg?: AddOnAvgAggregateInputType;
    _sum?: AddOnSumAggregateInputType;
    _min?: AddOnMinAggregateInputType;
    _max?: AddOnMaxAggregateInputType;
};
export type AddOnGroupByOutputType = {
    id: string;
    code: string;
    name: string;
    description: string;
    priceAmount: number;
    currency: string;
    guestLimitBonus: number;
    mediaLimitBonus: number;
    active: boolean;
    sortOrder: number;
    createdAt: Date;
    updatedAt: Date;
    _count: AddOnCountAggregateOutputType | null;
    _avg: AddOnAvgAggregateOutputType | null;
    _sum: AddOnSumAggregateOutputType | null;
    _min: AddOnMinAggregateOutputType | null;
    _max: AddOnMaxAggregateOutputType | null;
};
export type GetAddOnGroupByPayload<T extends AddOnGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AddOnGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AddOnGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AddOnGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AddOnGroupByOutputType[P]>;
}>>;
export type AddOnWhereInput = {
    AND?: Prisma.AddOnWhereInput | Prisma.AddOnWhereInput[];
    OR?: Prisma.AddOnWhereInput[];
    NOT?: Prisma.AddOnWhereInput | Prisma.AddOnWhereInput[];
    id?: Prisma.StringFilter<"AddOn"> | string;
    code?: Prisma.StringFilter<"AddOn"> | string;
    name?: Prisma.StringFilter<"AddOn"> | string;
    description?: Prisma.StringFilter<"AddOn"> | string;
    priceAmount?: Prisma.IntFilter<"AddOn"> | number;
    currency?: Prisma.StringFilter<"AddOn"> | string;
    guestLimitBonus?: Prisma.IntFilter<"AddOn"> | number;
    mediaLimitBonus?: Prisma.IntFilter<"AddOn"> | number;
    active?: Prisma.BoolFilter<"AddOn"> | boolean;
    sortOrder?: Prisma.IntFilter<"AddOn"> | number;
    createdAt?: Prisma.DateTimeFilter<"AddOn"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AddOn"> | Date | string;
    orderItems?: Prisma.OrderItemListRelationFilter;
};
export type AddOnOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    priceAmount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    guestLimitBonus?: Prisma.SortOrder;
    mediaLimitBonus?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    orderItems?: Prisma.OrderItemOrderByRelationAggregateInput;
};
export type AddOnWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.AddOnWhereInput | Prisma.AddOnWhereInput[];
    OR?: Prisma.AddOnWhereInput[];
    NOT?: Prisma.AddOnWhereInput | Prisma.AddOnWhereInput[];
    name?: Prisma.StringFilter<"AddOn"> | string;
    description?: Prisma.StringFilter<"AddOn"> | string;
    priceAmount?: Prisma.IntFilter<"AddOn"> | number;
    currency?: Prisma.StringFilter<"AddOn"> | string;
    guestLimitBonus?: Prisma.IntFilter<"AddOn"> | number;
    mediaLimitBonus?: Prisma.IntFilter<"AddOn"> | number;
    active?: Prisma.BoolFilter<"AddOn"> | boolean;
    sortOrder?: Prisma.IntFilter<"AddOn"> | number;
    createdAt?: Prisma.DateTimeFilter<"AddOn"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AddOn"> | Date | string;
    orderItems?: Prisma.OrderItemListRelationFilter;
}, "id" | "code">;
export type AddOnOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    priceAmount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    guestLimitBonus?: Prisma.SortOrder;
    mediaLimitBonus?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AddOnCountOrderByAggregateInput;
    _avg?: Prisma.AddOnAvgOrderByAggregateInput;
    _max?: Prisma.AddOnMaxOrderByAggregateInput;
    _min?: Prisma.AddOnMinOrderByAggregateInput;
    _sum?: Prisma.AddOnSumOrderByAggregateInput;
};
export type AddOnScalarWhereWithAggregatesInput = {
    AND?: Prisma.AddOnScalarWhereWithAggregatesInput | Prisma.AddOnScalarWhereWithAggregatesInput[];
    OR?: Prisma.AddOnScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AddOnScalarWhereWithAggregatesInput | Prisma.AddOnScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AddOn"> | string;
    code?: Prisma.StringWithAggregatesFilter<"AddOn"> | string;
    name?: Prisma.StringWithAggregatesFilter<"AddOn"> | string;
    description?: Prisma.StringWithAggregatesFilter<"AddOn"> | string;
    priceAmount?: Prisma.IntWithAggregatesFilter<"AddOn"> | number;
    currency?: Prisma.StringWithAggregatesFilter<"AddOn"> | string;
    guestLimitBonus?: Prisma.IntWithAggregatesFilter<"AddOn"> | number;
    mediaLimitBonus?: Prisma.IntWithAggregatesFilter<"AddOn"> | number;
    active?: Prisma.BoolWithAggregatesFilter<"AddOn"> | boolean;
    sortOrder?: Prisma.IntWithAggregatesFilter<"AddOn"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AddOn"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AddOn"> | Date | string;
};
export type AddOnCreateInput = {
    id?: string;
    code: string;
    name: string;
    description: string;
    priceAmount: number;
    currency?: string;
    guestLimitBonus?: number;
    mediaLimitBonus?: number;
    active?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutAddOnInput;
};
export type AddOnUncheckedCreateInput = {
    id?: string;
    code: string;
    name: string;
    description: string;
    priceAmount: number;
    currency?: string;
    guestLimitBonus?: number;
    mediaLimitBonus?: number;
    active?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutAddOnInput;
};
export type AddOnUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    priceAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    guestLimitBonus?: Prisma.IntFieldUpdateOperationsInput | number;
    mediaLimitBonus?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: Prisma.OrderItemUpdateManyWithoutAddOnNestedInput;
};
export type AddOnUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    priceAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    guestLimitBonus?: Prisma.IntFieldUpdateOperationsInput | number;
    mediaLimitBonus?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutAddOnNestedInput;
};
export type AddOnCreateManyInput = {
    id?: string;
    code: string;
    name: string;
    description: string;
    priceAmount: number;
    currency?: string;
    guestLimitBonus?: number;
    mediaLimitBonus?: number;
    active?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AddOnUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    priceAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    guestLimitBonus?: Prisma.IntFieldUpdateOperationsInput | number;
    mediaLimitBonus?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AddOnUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    priceAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    guestLimitBonus?: Prisma.IntFieldUpdateOperationsInput | number;
    mediaLimitBonus?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AddOnCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    priceAmount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    guestLimitBonus?: Prisma.SortOrder;
    mediaLimitBonus?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AddOnAvgOrderByAggregateInput = {
    priceAmount?: Prisma.SortOrder;
    guestLimitBonus?: Prisma.SortOrder;
    mediaLimitBonus?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type AddOnMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    priceAmount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    guestLimitBonus?: Prisma.SortOrder;
    mediaLimitBonus?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AddOnMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    priceAmount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    guestLimitBonus?: Prisma.SortOrder;
    mediaLimitBonus?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AddOnSumOrderByAggregateInput = {
    priceAmount?: Prisma.SortOrder;
    guestLimitBonus?: Prisma.SortOrder;
    mediaLimitBonus?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type AddOnNullableScalarRelationFilter = {
    is?: Prisma.AddOnWhereInput | null;
    isNot?: Prisma.AddOnWhereInput | null;
};
export type AddOnCreateNestedOneWithoutOrderItemsInput = {
    create?: Prisma.XOR<Prisma.AddOnCreateWithoutOrderItemsInput, Prisma.AddOnUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.AddOnCreateOrConnectWithoutOrderItemsInput;
    connect?: Prisma.AddOnWhereUniqueInput;
};
export type AddOnUpdateOneWithoutOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.AddOnCreateWithoutOrderItemsInput, Prisma.AddOnUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.AddOnCreateOrConnectWithoutOrderItemsInput;
    upsert?: Prisma.AddOnUpsertWithoutOrderItemsInput;
    disconnect?: Prisma.AddOnWhereInput | boolean;
    delete?: Prisma.AddOnWhereInput | boolean;
    connect?: Prisma.AddOnWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AddOnUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.AddOnUpdateWithoutOrderItemsInput>, Prisma.AddOnUncheckedUpdateWithoutOrderItemsInput>;
};
export type AddOnCreateWithoutOrderItemsInput = {
    id?: string;
    code: string;
    name: string;
    description: string;
    priceAmount: number;
    currency?: string;
    guestLimitBonus?: number;
    mediaLimitBonus?: number;
    active?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AddOnUncheckedCreateWithoutOrderItemsInput = {
    id?: string;
    code: string;
    name: string;
    description: string;
    priceAmount: number;
    currency?: string;
    guestLimitBonus?: number;
    mediaLimitBonus?: number;
    active?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AddOnCreateOrConnectWithoutOrderItemsInput = {
    where: Prisma.AddOnWhereUniqueInput;
    create: Prisma.XOR<Prisma.AddOnCreateWithoutOrderItemsInput, Prisma.AddOnUncheckedCreateWithoutOrderItemsInput>;
};
export type AddOnUpsertWithoutOrderItemsInput = {
    update: Prisma.XOR<Prisma.AddOnUpdateWithoutOrderItemsInput, Prisma.AddOnUncheckedUpdateWithoutOrderItemsInput>;
    create: Prisma.XOR<Prisma.AddOnCreateWithoutOrderItemsInput, Prisma.AddOnUncheckedCreateWithoutOrderItemsInput>;
    where?: Prisma.AddOnWhereInput;
};
export type AddOnUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: Prisma.AddOnWhereInput;
    data: Prisma.XOR<Prisma.AddOnUpdateWithoutOrderItemsInput, Prisma.AddOnUncheckedUpdateWithoutOrderItemsInput>;
};
export type AddOnUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    priceAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    guestLimitBonus?: Prisma.IntFieldUpdateOperationsInput | number;
    mediaLimitBonus?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AddOnUncheckedUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    priceAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    guestLimitBonus?: Prisma.IntFieldUpdateOperationsInput | number;
    mediaLimitBonus?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AddOnCountOutputType = {
    orderItems: number;
};
export type AddOnCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orderItems?: boolean | AddOnCountOutputTypeCountOrderItemsArgs;
};
export type AddOnCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddOnCountOutputTypeSelect<ExtArgs> | null;
};
export type AddOnCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type AddOnSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    priceAmount?: boolean;
    currency?: boolean;
    guestLimitBonus?: boolean;
    mediaLimitBonus?: boolean;
    active?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    orderItems?: boolean | Prisma.AddOn$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.AddOnCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["addOn"]>;
export type AddOnSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    priceAmount?: boolean;
    currency?: boolean;
    guestLimitBonus?: boolean;
    mediaLimitBonus?: boolean;
    active?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["addOn"]>;
export type AddOnSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    priceAmount?: boolean;
    currency?: boolean;
    guestLimitBonus?: boolean;
    mediaLimitBonus?: boolean;
    active?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["addOn"]>;
export type AddOnSelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    priceAmount?: boolean;
    currency?: boolean;
    guestLimitBonus?: boolean;
    mediaLimitBonus?: boolean;
    active?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AddOnOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "name" | "description" | "priceAmount" | "currency" | "guestLimitBonus" | "mediaLimitBonus" | "active" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["addOn"]>;
export type AddOnInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orderItems?: boolean | Prisma.AddOn$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.AddOnCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AddOnIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AddOnIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AddOnPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AddOn";
    objects: {
        orderItems: Prisma.$OrderItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        name: string;
        description: string;
        priceAmount: number;
        currency: string;
        guestLimitBonus: number;
        mediaLimitBonus: number;
        active: boolean;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["addOn"]>;
    composites: {};
};
export type AddOnGetPayload<S extends boolean | null | undefined | AddOnDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AddOnPayload, S>;
export type AddOnCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AddOnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AddOnCountAggregateInputType | true;
};
export interface AddOnDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AddOn'];
        meta: {
            name: 'AddOn';
        };
    };
    findUnique<T extends AddOnFindUniqueArgs>(args: Prisma.SelectSubset<T, AddOnFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AddOnClient<runtime.Types.Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AddOnFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AddOnFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AddOnClient<runtime.Types.Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AddOnFindFirstArgs>(args?: Prisma.SelectSubset<T, AddOnFindFirstArgs<ExtArgs>>): Prisma.Prisma__AddOnClient<runtime.Types.Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AddOnFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AddOnFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AddOnClient<runtime.Types.Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AddOnFindManyArgs>(args?: Prisma.SelectSubset<T, AddOnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AddOnCreateArgs>(args: Prisma.SelectSubset<T, AddOnCreateArgs<ExtArgs>>): Prisma.Prisma__AddOnClient<runtime.Types.Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AddOnCreateManyArgs>(args?: Prisma.SelectSubset<T, AddOnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AddOnCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AddOnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AddOnDeleteArgs>(args: Prisma.SelectSubset<T, AddOnDeleteArgs<ExtArgs>>): Prisma.Prisma__AddOnClient<runtime.Types.Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AddOnUpdateArgs>(args: Prisma.SelectSubset<T, AddOnUpdateArgs<ExtArgs>>): Prisma.Prisma__AddOnClient<runtime.Types.Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AddOnDeleteManyArgs>(args?: Prisma.SelectSubset<T, AddOnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AddOnUpdateManyArgs>(args: Prisma.SelectSubset<T, AddOnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AddOnUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AddOnUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AddOnUpsertArgs>(args: Prisma.SelectSubset<T, AddOnUpsertArgs<ExtArgs>>): Prisma.Prisma__AddOnClient<runtime.Types.Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AddOnCountArgs>(args?: Prisma.Subset<T, AddOnCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AddOnCountAggregateOutputType> : number>;
    aggregate<T extends AddOnAggregateArgs>(args: Prisma.Subset<T, AddOnAggregateArgs>): Prisma.PrismaPromise<GetAddOnAggregateType<T>>;
    groupBy<T extends AddOnGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AddOnGroupByArgs['orderBy'];
    } : {
        orderBy?: AddOnGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AddOnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddOnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AddOnFieldRefs;
}
export interface Prisma__AddOnClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orderItems<T extends Prisma.AddOn$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AddOn$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AddOnFieldRefs {
    readonly id: Prisma.FieldRef<"AddOn", 'String'>;
    readonly code: Prisma.FieldRef<"AddOn", 'String'>;
    readonly name: Prisma.FieldRef<"AddOn", 'String'>;
    readonly description: Prisma.FieldRef<"AddOn", 'String'>;
    readonly priceAmount: Prisma.FieldRef<"AddOn", 'Int'>;
    readonly currency: Prisma.FieldRef<"AddOn", 'String'>;
    readonly guestLimitBonus: Prisma.FieldRef<"AddOn", 'Int'>;
    readonly mediaLimitBonus: Prisma.FieldRef<"AddOn", 'Int'>;
    readonly active: Prisma.FieldRef<"AddOn", 'Boolean'>;
    readonly sortOrder: Prisma.FieldRef<"AddOn", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"AddOn", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AddOn", 'DateTime'>;
}
export type AddOnFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddOnSelect<ExtArgs> | null;
    omit?: Prisma.AddOnOmit<ExtArgs> | null;
    include?: Prisma.AddOnInclude<ExtArgs> | null;
    where: Prisma.AddOnWhereUniqueInput;
};
export type AddOnFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddOnSelect<ExtArgs> | null;
    omit?: Prisma.AddOnOmit<ExtArgs> | null;
    include?: Prisma.AddOnInclude<ExtArgs> | null;
    where: Prisma.AddOnWhereUniqueInput;
};
export type AddOnFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddOnSelect<ExtArgs> | null;
    omit?: Prisma.AddOnOmit<ExtArgs> | null;
    include?: Prisma.AddOnInclude<ExtArgs> | null;
    where?: Prisma.AddOnWhereInput;
    orderBy?: Prisma.AddOnOrderByWithRelationInput | Prisma.AddOnOrderByWithRelationInput[];
    cursor?: Prisma.AddOnWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AddOnScalarFieldEnum | Prisma.AddOnScalarFieldEnum[];
};
export type AddOnFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddOnSelect<ExtArgs> | null;
    omit?: Prisma.AddOnOmit<ExtArgs> | null;
    include?: Prisma.AddOnInclude<ExtArgs> | null;
    where?: Prisma.AddOnWhereInput;
    orderBy?: Prisma.AddOnOrderByWithRelationInput | Prisma.AddOnOrderByWithRelationInput[];
    cursor?: Prisma.AddOnWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AddOnScalarFieldEnum | Prisma.AddOnScalarFieldEnum[];
};
export type AddOnFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddOnSelect<ExtArgs> | null;
    omit?: Prisma.AddOnOmit<ExtArgs> | null;
    include?: Prisma.AddOnInclude<ExtArgs> | null;
    where?: Prisma.AddOnWhereInput;
    orderBy?: Prisma.AddOnOrderByWithRelationInput | Prisma.AddOnOrderByWithRelationInput[];
    cursor?: Prisma.AddOnWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AddOnScalarFieldEnum | Prisma.AddOnScalarFieldEnum[];
};
export type AddOnCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddOnSelect<ExtArgs> | null;
    omit?: Prisma.AddOnOmit<ExtArgs> | null;
    include?: Prisma.AddOnInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AddOnCreateInput, Prisma.AddOnUncheckedCreateInput>;
};
export type AddOnCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AddOnCreateManyInput | Prisma.AddOnCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AddOnCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddOnSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AddOnOmit<ExtArgs> | null;
    data: Prisma.AddOnCreateManyInput | Prisma.AddOnCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AddOnUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddOnSelect<ExtArgs> | null;
    omit?: Prisma.AddOnOmit<ExtArgs> | null;
    include?: Prisma.AddOnInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AddOnUpdateInput, Prisma.AddOnUncheckedUpdateInput>;
    where: Prisma.AddOnWhereUniqueInput;
};
export type AddOnUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AddOnUpdateManyMutationInput, Prisma.AddOnUncheckedUpdateManyInput>;
    where?: Prisma.AddOnWhereInput;
    limit?: number;
};
export type AddOnUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddOnSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AddOnOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AddOnUpdateManyMutationInput, Prisma.AddOnUncheckedUpdateManyInput>;
    where?: Prisma.AddOnWhereInput;
    limit?: number;
};
export type AddOnUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddOnSelect<ExtArgs> | null;
    omit?: Prisma.AddOnOmit<ExtArgs> | null;
    include?: Prisma.AddOnInclude<ExtArgs> | null;
    where: Prisma.AddOnWhereUniqueInput;
    create: Prisma.XOR<Prisma.AddOnCreateInput, Prisma.AddOnUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AddOnUpdateInput, Prisma.AddOnUncheckedUpdateInput>;
};
export type AddOnDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddOnSelect<ExtArgs> | null;
    omit?: Prisma.AddOnOmit<ExtArgs> | null;
    include?: Prisma.AddOnInclude<ExtArgs> | null;
    where: Prisma.AddOnWhereUniqueInput;
};
export type AddOnDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AddOnWhereInput;
    limit?: number;
};
export type AddOn$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
export type AddOnDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddOnSelect<ExtArgs> | null;
    omit?: Prisma.AddOnOmit<ExtArgs> | null;
    include?: Prisma.AddOnInclude<ExtArgs> | null;
};
