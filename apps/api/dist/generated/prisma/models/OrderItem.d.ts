import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderItemModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderItemPayload>;
export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null;
    _avg: OrderItemAvgAggregateOutputType | null;
    _sum: OrderItemSumAggregateOutputType | null;
    _min: OrderItemMinAggregateOutputType | null;
    _max: OrderItemMaxAggregateOutputType | null;
};
export type OrderItemAvgAggregateOutputType = {
    quantity: number | null;
    unitAmount: number | null;
    totalAmount: number | null;
};
export type OrderItemSumAggregateOutputType = {
    quantity: number | null;
    unitAmount: number | null;
    totalAmount: number | null;
};
export type OrderItemMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    itemType: string | null;
    planId: string | null;
    addOnId: string | null;
    name: string | null;
    quantity: number | null;
    unitAmount: number | null;
    totalAmount: number | null;
    createdAt: Date | null;
};
export type OrderItemMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    itemType: string | null;
    planId: string | null;
    addOnId: string | null;
    name: string | null;
    quantity: number | null;
    unitAmount: number | null;
    totalAmount: number | null;
    createdAt: Date | null;
};
export type OrderItemCountAggregateOutputType = {
    id: number;
    orderId: number;
    itemType: number;
    planId: number;
    addOnId: number;
    name: number;
    quantity: number;
    unitAmount: number;
    totalAmount: number;
    metadata: number;
    createdAt: number;
    _all: number;
};
export type OrderItemAvgAggregateInputType = {
    quantity?: true;
    unitAmount?: true;
    totalAmount?: true;
};
export type OrderItemSumAggregateInputType = {
    quantity?: true;
    unitAmount?: true;
    totalAmount?: true;
};
export type OrderItemMinAggregateInputType = {
    id?: true;
    orderId?: true;
    itemType?: true;
    planId?: true;
    addOnId?: true;
    name?: true;
    quantity?: true;
    unitAmount?: true;
    totalAmount?: true;
    createdAt?: true;
};
export type OrderItemMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    itemType?: true;
    planId?: true;
    addOnId?: true;
    name?: true;
    quantity?: true;
    unitAmount?: true;
    totalAmount?: true;
    createdAt?: true;
};
export type OrderItemCountAggregateInputType = {
    id?: true;
    orderId?: true;
    itemType?: true;
    planId?: true;
    addOnId?: true;
    name?: true;
    quantity?: true;
    unitAmount?: true;
    totalAmount?: true;
    metadata?: true;
    createdAt?: true;
    _all?: true;
};
export type OrderItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderItemCountAggregateInputType;
    _avg?: OrderItemAvgAggregateInputType;
    _sum?: OrderItemSumAggregateInputType;
    _min?: OrderItemMinAggregateInputType;
    _max?: OrderItemMaxAggregateInputType;
};
export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrderItem[P]> : Prisma.GetScalarType<T[P], AggregateOrderItem[P]>;
};
export type OrderItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithAggregationInput | Prisma.OrderItemOrderByWithAggregationInput[];
    by: Prisma.OrderItemScalarFieldEnum[] | Prisma.OrderItemScalarFieldEnum;
    having?: Prisma.OrderItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderItemCountAggregateInputType | true;
    _avg?: OrderItemAvgAggregateInputType;
    _sum?: OrderItemSumAggregateInputType;
    _min?: OrderItemMinAggregateInputType;
    _max?: OrderItemMaxAggregateInputType;
};
export type OrderItemGroupByOutputType = {
    id: string;
    orderId: string;
    itemType: string;
    planId: string | null;
    addOnId: string | null;
    name: string;
    quantity: number;
    unitAmount: number;
    totalAmount: number;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    _count: OrderItemCountAggregateOutputType | null;
    _avg: OrderItemAvgAggregateOutputType | null;
    _sum: OrderItemSumAggregateOutputType | null;
    _min: OrderItemMinAggregateOutputType | null;
    _max: OrderItemMaxAggregateOutputType | null;
};
export type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderItemGroupByOutputType[P]>;
}>>;
export type OrderItemWhereInput = {
    AND?: Prisma.OrderItemWhereInput | Prisma.OrderItemWhereInput[];
    OR?: Prisma.OrderItemWhereInput[];
    NOT?: Prisma.OrderItemWhereInput | Prisma.OrderItemWhereInput[];
    id?: Prisma.StringFilter<"OrderItem"> | string;
    orderId?: Prisma.StringFilter<"OrderItem"> | string;
    itemType?: Prisma.StringFilter<"OrderItem"> | string;
    planId?: Prisma.StringNullableFilter<"OrderItem"> | string | null;
    addOnId?: Prisma.StringNullableFilter<"OrderItem"> | string | null;
    name?: Prisma.StringFilter<"OrderItem"> | string;
    quantity?: Prisma.IntFilter<"OrderItem"> | number;
    unitAmount?: Prisma.IntFilter<"OrderItem"> | number;
    totalAmount?: Prisma.IntFilter<"OrderItem"> | number;
    metadata?: Prisma.JsonNullableFilter<"OrderItem">;
    createdAt?: Prisma.DateTimeFilter<"OrderItem"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    plan?: Prisma.XOR<Prisma.PlanNullableScalarRelationFilter, Prisma.PlanWhereInput> | null;
    addOn?: Prisma.XOR<Prisma.AddOnNullableScalarRelationFilter, Prisma.AddOnWhereInput> | null;
};
export type OrderItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    itemType?: Prisma.SortOrder;
    planId?: Prisma.SortOrderInput | Prisma.SortOrder;
    addOnId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
    plan?: Prisma.PlanOrderByWithRelationInput;
    addOn?: Prisma.AddOnOrderByWithRelationInput;
};
export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OrderItemWhereInput | Prisma.OrderItemWhereInput[];
    OR?: Prisma.OrderItemWhereInput[];
    NOT?: Prisma.OrderItemWhereInput | Prisma.OrderItemWhereInput[];
    orderId?: Prisma.StringFilter<"OrderItem"> | string;
    itemType?: Prisma.StringFilter<"OrderItem"> | string;
    planId?: Prisma.StringNullableFilter<"OrderItem"> | string | null;
    addOnId?: Prisma.StringNullableFilter<"OrderItem"> | string | null;
    name?: Prisma.StringFilter<"OrderItem"> | string;
    quantity?: Prisma.IntFilter<"OrderItem"> | number;
    unitAmount?: Prisma.IntFilter<"OrderItem"> | number;
    totalAmount?: Prisma.IntFilter<"OrderItem"> | number;
    metadata?: Prisma.JsonNullableFilter<"OrderItem">;
    createdAt?: Prisma.DateTimeFilter<"OrderItem"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    plan?: Prisma.XOR<Prisma.PlanNullableScalarRelationFilter, Prisma.PlanWhereInput> | null;
    addOn?: Prisma.XOR<Prisma.AddOnNullableScalarRelationFilter, Prisma.AddOnWhereInput> | null;
}, "id">;
export type OrderItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    itemType?: Prisma.SortOrder;
    planId?: Prisma.SortOrderInput | Prisma.SortOrder;
    addOnId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.OrderItemCountOrderByAggregateInput;
    _avg?: Prisma.OrderItemAvgOrderByAggregateInput;
    _max?: Prisma.OrderItemMaxOrderByAggregateInput;
    _min?: Prisma.OrderItemMinOrderByAggregateInput;
    _sum?: Prisma.OrderItemSumOrderByAggregateInput;
};
export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderItemScalarWhereWithAggregatesInput | Prisma.OrderItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderItemScalarWhereWithAggregatesInput | Prisma.OrderItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OrderItem"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"OrderItem"> | string;
    itemType?: Prisma.StringWithAggregatesFilter<"OrderItem"> | string;
    planId?: Prisma.StringNullableWithAggregatesFilter<"OrderItem"> | string | null;
    addOnId?: Prisma.StringNullableWithAggregatesFilter<"OrderItem"> | string | null;
    name?: Prisma.StringWithAggregatesFilter<"OrderItem"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"OrderItem"> | number;
    unitAmount?: Prisma.IntWithAggregatesFilter<"OrderItem"> | number;
    totalAmount?: Prisma.IntWithAggregatesFilter<"OrderItem"> | number;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"OrderItem">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"OrderItem"> | Date | string;
};
export type OrderItemCreateInput = {
    id?: string;
    itemType: string;
    name: string;
    quantity?: number;
    unitAmount: number;
    totalAmount: number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutItemsInput;
    plan?: Prisma.PlanCreateNestedOneWithoutOrderItemsInput;
    addOn?: Prisma.AddOnCreateNestedOneWithoutOrderItemsInput;
};
export type OrderItemUncheckedCreateInput = {
    id?: string;
    orderId: string;
    itemType: string;
    planId?: string | null;
    addOnId?: string | null;
    name: string;
    quantity?: number;
    unitAmount: number;
    totalAmount: number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type OrderItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutItemsNestedInput;
    plan?: Prisma.PlanUpdateOneWithoutOrderItemsNestedInput;
    addOn?: Prisma.AddOnUpdateOneWithoutOrderItemsNestedInput;
};
export type OrderItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addOnId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderItemCreateManyInput = {
    id?: string;
    orderId: string;
    itemType: string;
    planId?: string | null;
    addOnId?: string | null;
    name: string;
    quantity?: number;
    unitAmount: number;
    totalAmount: number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type OrderItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addOnId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderItemListRelationFilter = {
    every?: Prisma.OrderItemWhereInput;
    some?: Prisma.OrderItemWhereInput;
    none?: Prisma.OrderItemWhereInput;
};
export type OrderItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    itemType?: Prisma.SortOrder;
    planId?: Prisma.SortOrder;
    addOnId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OrderItemAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
};
export type OrderItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    itemType?: Prisma.SortOrder;
    planId?: Prisma.SortOrder;
    addOnId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OrderItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    itemType?: Prisma.SortOrder;
    planId?: Prisma.SortOrder;
    addOnId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OrderItemSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
};
export type OrderItemCreateNestedManyWithoutPlanInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutPlanInput, Prisma.OrderItemUncheckedCreateWithoutPlanInput> | Prisma.OrderItemCreateWithoutPlanInput[] | Prisma.OrderItemUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutPlanInput | Prisma.OrderItemCreateOrConnectWithoutPlanInput[];
    createMany?: Prisma.OrderItemCreateManyPlanInputEnvelope;
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
};
export type OrderItemUncheckedCreateNestedManyWithoutPlanInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutPlanInput, Prisma.OrderItemUncheckedCreateWithoutPlanInput> | Prisma.OrderItemCreateWithoutPlanInput[] | Prisma.OrderItemUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutPlanInput | Prisma.OrderItemCreateOrConnectWithoutPlanInput[];
    createMany?: Prisma.OrderItemCreateManyPlanInputEnvelope;
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
};
export type OrderItemUpdateManyWithoutPlanNestedInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutPlanInput, Prisma.OrderItemUncheckedCreateWithoutPlanInput> | Prisma.OrderItemCreateWithoutPlanInput[] | Prisma.OrderItemUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutPlanInput | Prisma.OrderItemCreateOrConnectWithoutPlanInput[];
    upsert?: Prisma.OrderItemUpsertWithWhereUniqueWithoutPlanInput | Prisma.OrderItemUpsertWithWhereUniqueWithoutPlanInput[];
    createMany?: Prisma.OrderItemCreateManyPlanInputEnvelope;
    set?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    disconnect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    delete?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    update?: Prisma.OrderItemUpdateWithWhereUniqueWithoutPlanInput | Prisma.OrderItemUpdateWithWhereUniqueWithoutPlanInput[];
    updateMany?: Prisma.OrderItemUpdateManyWithWhereWithoutPlanInput | Prisma.OrderItemUpdateManyWithWhereWithoutPlanInput[];
    deleteMany?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[];
};
export type OrderItemUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutPlanInput, Prisma.OrderItemUncheckedCreateWithoutPlanInput> | Prisma.OrderItemCreateWithoutPlanInput[] | Prisma.OrderItemUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutPlanInput | Prisma.OrderItemCreateOrConnectWithoutPlanInput[];
    upsert?: Prisma.OrderItemUpsertWithWhereUniqueWithoutPlanInput | Prisma.OrderItemUpsertWithWhereUniqueWithoutPlanInput[];
    createMany?: Prisma.OrderItemCreateManyPlanInputEnvelope;
    set?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    disconnect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    delete?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    update?: Prisma.OrderItemUpdateWithWhereUniqueWithoutPlanInput | Prisma.OrderItemUpdateWithWhereUniqueWithoutPlanInput[];
    updateMany?: Prisma.OrderItemUpdateManyWithWhereWithoutPlanInput | Prisma.OrderItemUpdateManyWithWhereWithoutPlanInput[];
    deleteMany?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[];
};
export type OrderItemCreateNestedManyWithoutAddOnInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutAddOnInput, Prisma.OrderItemUncheckedCreateWithoutAddOnInput> | Prisma.OrderItemCreateWithoutAddOnInput[] | Prisma.OrderItemUncheckedCreateWithoutAddOnInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutAddOnInput | Prisma.OrderItemCreateOrConnectWithoutAddOnInput[];
    createMany?: Prisma.OrderItemCreateManyAddOnInputEnvelope;
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
};
export type OrderItemUncheckedCreateNestedManyWithoutAddOnInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutAddOnInput, Prisma.OrderItemUncheckedCreateWithoutAddOnInput> | Prisma.OrderItemCreateWithoutAddOnInput[] | Prisma.OrderItemUncheckedCreateWithoutAddOnInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutAddOnInput | Prisma.OrderItemCreateOrConnectWithoutAddOnInput[];
    createMany?: Prisma.OrderItemCreateManyAddOnInputEnvelope;
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
};
export type OrderItemUpdateManyWithoutAddOnNestedInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutAddOnInput, Prisma.OrderItemUncheckedCreateWithoutAddOnInput> | Prisma.OrderItemCreateWithoutAddOnInput[] | Prisma.OrderItemUncheckedCreateWithoutAddOnInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutAddOnInput | Prisma.OrderItemCreateOrConnectWithoutAddOnInput[];
    upsert?: Prisma.OrderItemUpsertWithWhereUniqueWithoutAddOnInput | Prisma.OrderItemUpsertWithWhereUniqueWithoutAddOnInput[];
    createMany?: Prisma.OrderItemCreateManyAddOnInputEnvelope;
    set?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    disconnect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    delete?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    update?: Prisma.OrderItemUpdateWithWhereUniqueWithoutAddOnInput | Prisma.OrderItemUpdateWithWhereUniqueWithoutAddOnInput[];
    updateMany?: Prisma.OrderItemUpdateManyWithWhereWithoutAddOnInput | Prisma.OrderItemUpdateManyWithWhereWithoutAddOnInput[];
    deleteMany?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[];
};
export type OrderItemUncheckedUpdateManyWithoutAddOnNestedInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutAddOnInput, Prisma.OrderItemUncheckedCreateWithoutAddOnInput> | Prisma.OrderItemCreateWithoutAddOnInput[] | Prisma.OrderItemUncheckedCreateWithoutAddOnInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutAddOnInput | Prisma.OrderItemCreateOrConnectWithoutAddOnInput[];
    upsert?: Prisma.OrderItemUpsertWithWhereUniqueWithoutAddOnInput | Prisma.OrderItemUpsertWithWhereUniqueWithoutAddOnInput[];
    createMany?: Prisma.OrderItemCreateManyAddOnInputEnvelope;
    set?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    disconnect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    delete?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    update?: Prisma.OrderItemUpdateWithWhereUniqueWithoutAddOnInput | Prisma.OrderItemUpdateWithWhereUniqueWithoutAddOnInput[];
    updateMany?: Prisma.OrderItemUpdateManyWithWhereWithoutAddOnInput | Prisma.OrderItemUpdateManyWithWhereWithoutAddOnInput[];
    deleteMany?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[];
};
export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutOrderInput, Prisma.OrderItemUncheckedCreateWithoutOrderInput> | Prisma.OrderItemCreateWithoutOrderInput[] | Prisma.OrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutOrderInput | Prisma.OrderItemCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.OrderItemCreateManyOrderInputEnvelope;
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
};
export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutOrderInput, Prisma.OrderItemUncheckedCreateWithoutOrderInput> | Prisma.OrderItemCreateWithoutOrderInput[] | Prisma.OrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutOrderInput | Prisma.OrderItemCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.OrderItemCreateManyOrderInputEnvelope;
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
};
export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutOrderInput, Prisma.OrderItemUncheckedCreateWithoutOrderInput> | Prisma.OrderItemCreateWithoutOrderInput[] | Prisma.OrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutOrderInput | Prisma.OrderItemCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.OrderItemUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrderItemUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.OrderItemCreateManyOrderInputEnvelope;
    set?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    disconnect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    delete?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    update?: Prisma.OrderItemUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrderItemUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.OrderItemUpdateManyWithWhereWithoutOrderInput | Prisma.OrderItemUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[];
};
export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutOrderInput, Prisma.OrderItemUncheckedCreateWithoutOrderInput> | Prisma.OrderItemCreateWithoutOrderInput[] | Prisma.OrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutOrderInput | Prisma.OrderItemCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.OrderItemUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrderItemUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.OrderItemCreateManyOrderInputEnvelope;
    set?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    disconnect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    delete?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    update?: Prisma.OrderItemUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrderItemUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.OrderItemUpdateManyWithWhereWithoutOrderInput | Prisma.OrderItemUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[];
};
export type OrderItemCreateWithoutPlanInput = {
    id?: string;
    itemType: string;
    name: string;
    quantity?: number;
    unitAmount: number;
    totalAmount: number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutItemsInput;
    addOn?: Prisma.AddOnCreateNestedOneWithoutOrderItemsInput;
};
export type OrderItemUncheckedCreateWithoutPlanInput = {
    id?: string;
    orderId: string;
    itemType: string;
    addOnId?: string | null;
    name: string;
    quantity?: number;
    unitAmount: number;
    totalAmount: number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type OrderItemCreateOrConnectWithoutPlanInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderItemCreateWithoutPlanInput, Prisma.OrderItemUncheckedCreateWithoutPlanInput>;
};
export type OrderItemCreateManyPlanInputEnvelope = {
    data: Prisma.OrderItemCreateManyPlanInput | Prisma.OrderItemCreateManyPlanInput[];
    skipDuplicates?: boolean;
};
export type OrderItemUpsertWithWhereUniqueWithoutPlanInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderItemUpdateWithoutPlanInput, Prisma.OrderItemUncheckedUpdateWithoutPlanInput>;
    create: Prisma.XOR<Prisma.OrderItemCreateWithoutPlanInput, Prisma.OrderItemUncheckedCreateWithoutPlanInput>;
};
export type OrderItemUpdateWithWhereUniqueWithoutPlanInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderItemUpdateWithoutPlanInput, Prisma.OrderItemUncheckedUpdateWithoutPlanInput>;
};
export type OrderItemUpdateManyWithWhereWithoutPlanInput = {
    where: Prisma.OrderItemScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderItemUpdateManyMutationInput, Prisma.OrderItemUncheckedUpdateManyWithoutPlanInput>;
};
export type OrderItemScalarWhereInput = {
    AND?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[];
    OR?: Prisma.OrderItemScalarWhereInput[];
    NOT?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[];
    id?: Prisma.StringFilter<"OrderItem"> | string;
    orderId?: Prisma.StringFilter<"OrderItem"> | string;
    itemType?: Prisma.StringFilter<"OrderItem"> | string;
    planId?: Prisma.StringNullableFilter<"OrderItem"> | string | null;
    addOnId?: Prisma.StringNullableFilter<"OrderItem"> | string | null;
    name?: Prisma.StringFilter<"OrderItem"> | string;
    quantity?: Prisma.IntFilter<"OrderItem"> | number;
    unitAmount?: Prisma.IntFilter<"OrderItem"> | number;
    totalAmount?: Prisma.IntFilter<"OrderItem"> | number;
    metadata?: Prisma.JsonNullableFilter<"OrderItem">;
    createdAt?: Prisma.DateTimeFilter<"OrderItem"> | Date | string;
};
export type OrderItemCreateWithoutAddOnInput = {
    id?: string;
    itemType: string;
    name: string;
    quantity?: number;
    unitAmount: number;
    totalAmount: number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutItemsInput;
    plan?: Prisma.PlanCreateNestedOneWithoutOrderItemsInput;
};
export type OrderItemUncheckedCreateWithoutAddOnInput = {
    id?: string;
    orderId: string;
    itemType: string;
    planId?: string | null;
    name: string;
    quantity?: number;
    unitAmount: number;
    totalAmount: number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type OrderItemCreateOrConnectWithoutAddOnInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderItemCreateWithoutAddOnInput, Prisma.OrderItemUncheckedCreateWithoutAddOnInput>;
};
export type OrderItemCreateManyAddOnInputEnvelope = {
    data: Prisma.OrderItemCreateManyAddOnInput | Prisma.OrderItemCreateManyAddOnInput[];
    skipDuplicates?: boolean;
};
export type OrderItemUpsertWithWhereUniqueWithoutAddOnInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderItemUpdateWithoutAddOnInput, Prisma.OrderItemUncheckedUpdateWithoutAddOnInput>;
    create: Prisma.XOR<Prisma.OrderItemCreateWithoutAddOnInput, Prisma.OrderItemUncheckedCreateWithoutAddOnInput>;
};
export type OrderItemUpdateWithWhereUniqueWithoutAddOnInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderItemUpdateWithoutAddOnInput, Prisma.OrderItemUncheckedUpdateWithoutAddOnInput>;
};
export type OrderItemUpdateManyWithWhereWithoutAddOnInput = {
    where: Prisma.OrderItemScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderItemUpdateManyMutationInput, Prisma.OrderItemUncheckedUpdateManyWithoutAddOnInput>;
};
export type OrderItemCreateWithoutOrderInput = {
    id?: string;
    itemType: string;
    name: string;
    quantity?: number;
    unitAmount: number;
    totalAmount: number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    plan?: Prisma.PlanCreateNestedOneWithoutOrderItemsInput;
    addOn?: Prisma.AddOnCreateNestedOneWithoutOrderItemsInput;
};
export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string;
    itemType: string;
    planId?: string | null;
    addOnId?: string | null;
    name: string;
    quantity?: number;
    unitAmount: number;
    totalAmount: number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderItemCreateWithoutOrderInput, Prisma.OrderItemUncheckedCreateWithoutOrderInput>;
};
export type OrderItemCreateManyOrderInputEnvelope = {
    data: Prisma.OrderItemCreateManyOrderInput | Prisma.OrderItemCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderItemUpdateWithoutOrderInput, Prisma.OrderItemUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.OrderItemCreateWithoutOrderInput, Prisma.OrderItemUncheckedCreateWithoutOrderInput>;
};
export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderItemUpdateWithoutOrderInput, Prisma.OrderItemUncheckedUpdateWithoutOrderInput>;
};
export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.OrderItemScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderItemUpdateManyMutationInput, Prisma.OrderItemUncheckedUpdateManyWithoutOrderInput>;
};
export type OrderItemCreateManyPlanInput = {
    id?: string;
    orderId: string;
    itemType: string;
    addOnId?: string | null;
    name: string;
    quantity?: number;
    unitAmount: number;
    totalAmount: number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type OrderItemUpdateWithoutPlanInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutItemsNestedInput;
    addOn?: Prisma.AddOnUpdateOneWithoutOrderItemsNestedInput;
};
export type OrderItemUncheckedUpdateWithoutPlanInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.StringFieldUpdateOperationsInput | string;
    addOnId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderItemUncheckedUpdateManyWithoutPlanInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.StringFieldUpdateOperationsInput | string;
    addOnId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderItemCreateManyAddOnInput = {
    id?: string;
    orderId: string;
    itemType: string;
    planId?: string | null;
    name: string;
    quantity?: number;
    unitAmount: number;
    totalAmount: number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type OrderItemUpdateWithoutAddOnInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutItemsNestedInput;
    plan?: Prisma.PlanUpdateOneWithoutOrderItemsNestedInput;
};
export type OrderItemUncheckedUpdateWithoutAddOnInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderItemUncheckedUpdateManyWithoutAddOnInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderItemCreateManyOrderInput = {
    id?: string;
    itemType: string;
    planId?: string | null;
    addOnId?: string | null;
    name: string;
    quantity?: number;
    unitAmount: number;
    totalAmount: number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type OrderItemUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    plan?: Prisma.PlanUpdateOneWithoutOrderItemsNestedInput;
    addOn?: Prisma.AddOnUpdateOneWithoutOrderItemsNestedInput;
};
export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addOnId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addOnId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    itemType?: boolean;
    planId?: boolean;
    addOnId?: boolean;
    name?: boolean;
    quantity?: boolean;
    unitAmount?: boolean;
    totalAmount?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    plan?: boolean | Prisma.OrderItem$planArgs<ExtArgs>;
    addOn?: boolean | Prisma.OrderItem$addOnArgs<ExtArgs>;
}, ExtArgs["result"]["orderItem"]>;
export type OrderItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    itemType?: boolean;
    planId?: boolean;
    addOnId?: boolean;
    name?: boolean;
    quantity?: boolean;
    unitAmount?: boolean;
    totalAmount?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    plan?: boolean | Prisma.OrderItem$planArgs<ExtArgs>;
    addOn?: boolean | Prisma.OrderItem$addOnArgs<ExtArgs>;
}, ExtArgs["result"]["orderItem"]>;
export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    itemType?: boolean;
    planId?: boolean;
    addOnId?: boolean;
    name?: boolean;
    quantity?: boolean;
    unitAmount?: boolean;
    totalAmount?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    plan?: boolean | Prisma.OrderItem$planArgs<ExtArgs>;
    addOn?: boolean | Prisma.OrderItem$addOnArgs<ExtArgs>;
}, ExtArgs["result"]["orderItem"]>;
export type OrderItemSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    itemType?: boolean;
    planId?: boolean;
    addOnId?: boolean;
    name?: boolean;
    quantity?: boolean;
    unitAmount?: boolean;
    totalAmount?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
};
export type OrderItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "itemType" | "planId" | "addOnId" | "name" | "quantity" | "unitAmount" | "totalAmount" | "metadata" | "createdAt", ExtArgs["result"]["orderItem"]>;
export type OrderItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    plan?: boolean | Prisma.OrderItem$planArgs<ExtArgs>;
    addOn?: boolean | Prisma.OrderItem$addOnArgs<ExtArgs>;
};
export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    plan?: boolean | Prisma.OrderItem$planArgs<ExtArgs>;
    addOn?: boolean | Prisma.OrderItem$addOnArgs<ExtArgs>;
};
export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    plan?: boolean | Prisma.OrderItem$planArgs<ExtArgs>;
    addOn?: boolean | Prisma.OrderItem$addOnArgs<ExtArgs>;
};
export type $OrderItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrderItem";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs>;
        plan: Prisma.$PlanPayload<ExtArgs> | null;
        addOn: Prisma.$AddOnPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        itemType: string;
        planId: string | null;
        addOnId: string | null;
        name: string;
        quantity: number;
        unitAmount: number;
        totalAmount: number;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["orderItem"]>;
    composites: {};
};
export type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderItemPayload, S>;
export type OrderItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderItemCountAggregateInputType | true;
};
export interface OrderItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'];
        meta: {
            name: 'OrderItem';
        };
    };
    findUnique<T extends OrderItemFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderItemFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderItemFindManyArgs>(args?: Prisma.SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderItemCreateArgs>(args: Prisma.SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderItemCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderItemDeleteArgs>(args: Prisma.SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderItemUpdateArgs>(args: Prisma.SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderItemUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderItemUpsertArgs>(args: Prisma.SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderItemCountArgs>(args?: Prisma.Subset<T, OrderItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderItemCountAggregateOutputType> : number>;
    aggregate<T extends OrderItemAggregateArgs>(args: Prisma.Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>;
    groupBy<T extends OrderItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderItemGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderItemFieldRefs;
}
export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    plan<T extends Prisma.OrderItem$planArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderItem$planArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    addOn<T extends Prisma.OrderItem$addOnArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderItem$addOnArgs<ExtArgs>>): Prisma.Prisma__AddOnClient<runtime.Types.Result.GetResult<Prisma.$AddOnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderItemFieldRefs {
    readonly id: Prisma.FieldRef<"OrderItem", 'String'>;
    readonly orderId: Prisma.FieldRef<"OrderItem", 'String'>;
    readonly itemType: Prisma.FieldRef<"OrderItem", 'String'>;
    readonly planId: Prisma.FieldRef<"OrderItem", 'String'>;
    readonly addOnId: Prisma.FieldRef<"OrderItem", 'String'>;
    readonly name: Prisma.FieldRef<"OrderItem", 'String'>;
    readonly quantity: Prisma.FieldRef<"OrderItem", 'Int'>;
    readonly unitAmount: Prisma.FieldRef<"OrderItem", 'Int'>;
    readonly totalAmount: Prisma.FieldRef<"OrderItem", 'Int'>;
    readonly metadata: Prisma.FieldRef<"OrderItem", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"OrderItem", 'DateTime'>;
}
export type OrderItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where: Prisma.OrderItemWhereUniqueInput;
};
export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where: Prisma.OrderItemWhereUniqueInput;
};
export type OrderItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderItemCreateInput, Prisma.OrderItemUncheckedCreateInput>;
};
export type OrderItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderItemCreateManyInput | Prisma.OrderItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    data: Prisma.OrderItemCreateManyInput | Prisma.OrderItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrderItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderItemUpdateInput, Prisma.OrderItemUncheckedUpdateInput>;
    where: Prisma.OrderItemWhereUniqueInput;
};
export type OrderItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderItemUpdateManyMutationInput, Prisma.OrderItemUncheckedUpdateManyInput>;
    where?: Prisma.OrderItemWhereInput;
    limit?: number;
};
export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderItemUpdateManyMutationInput, Prisma.OrderItemUncheckedUpdateManyInput>;
    where?: Prisma.OrderItemWhereInput;
    limit?: number;
    include?: Prisma.OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where: Prisma.OrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderItemCreateInput, Prisma.OrderItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderItemUpdateInput, Prisma.OrderItemUncheckedUpdateInput>;
};
export type OrderItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where: Prisma.OrderItemWhereUniqueInput;
};
export type OrderItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
    limit?: number;
};
export type OrderItem$planArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanSelect<ExtArgs> | null;
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    include?: Prisma.PlanInclude<ExtArgs> | null;
    where?: Prisma.PlanWhereInput;
};
export type OrderItem$addOnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddOnSelect<ExtArgs> | null;
    omit?: Prisma.AddOnOmit<ExtArgs> | null;
    include?: Prisma.AddOnInclude<ExtArgs> | null;
    where?: Prisma.AddOnWhereInput;
};
export type OrderItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
};
