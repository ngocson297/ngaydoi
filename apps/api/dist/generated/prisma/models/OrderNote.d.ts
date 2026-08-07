import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderNoteModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderNotePayload>;
export type AggregateOrderNote = {
    _count: OrderNoteCountAggregateOutputType | null;
    _min: OrderNoteMinAggregateOutputType | null;
    _max: OrderNoteMaxAggregateOutputType | null;
};
export type OrderNoteMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    authorId: string | null;
    visibility: string | null;
    body: string | null;
    createdAt: Date | null;
};
export type OrderNoteMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    authorId: string | null;
    visibility: string | null;
    body: string | null;
    createdAt: Date | null;
};
export type OrderNoteCountAggregateOutputType = {
    id: number;
    orderId: number;
    authorId: number;
    visibility: number;
    body: number;
    createdAt: number;
    _all: number;
};
export type OrderNoteMinAggregateInputType = {
    id?: true;
    orderId?: true;
    authorId?: true;
    visibility?: true;
    body?: true;
    createdAt?: true;
};
export type OrderNoteMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    authorId?: true;
    visibility?: true;
    body?: true;
    createdAt?: true;
};
export type OrderNoteCountAggregateInputType = {
    id?: true;
    orderId?: true;
    authorId?: true;
    visibility?: true;
    body?: true;
    createdAt?: true;
    _all?: true;
};
export type OrderNoteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderNoteWhereInput;
    orderBy?: Prisma.OrderNoteOrderByWithRelationInput | Prisma.OrderNoteOrderByWithRelationInput[];
    cursor?: Prisma.OrderNoteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderNoteCountAggregateInputType;
    _min?: OrderNoteMinAggregateInputType;
    _max?: OrderNoteMaxAggregateInputType;
};
export type GetOrderNoteAggregateType<T extends OrderNoteAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderNote]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrderNote[P]> : Prisma.GetScalarType<T[P], AggregateOrderNote[P]>;
};
export type OrderNoteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderNoteWhereInput;
    orderBy?: Prisma.OrderNoteOrderByWithAggregationInput | Prisma.OrderNoteOrderByWithAggregationInput[];
    by: Prisma.OrderNoteScalarFieldEnum[] | Prisma.OrderNoteScalarFieldEnum;
    having?: Prisma.OrderNoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderNoteCountAggregateInputType | true;
    _min?: OrderNoteMinAggregateInputType;
    _max?: OrderNoteMaxAggregateInputType;
};
export type OrderNoteGroupByOutputType = {
    id: string;
    orderId: string;
    authorId: string | null;
    visibility: string;
    body: string;
    createdAt: Date;
    _count: OrderNoteCountAggregateOutputType | null;
    _min: OrderNoteMinAggregateOutputType | null;
    _max: OrderNoteMaxAggregateOutputType | null;
};
export type GetOrderNoteGroupByPayload<T extends OrderNoteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderNoteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderNoteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderNoteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderNoteGroupByOutputType[P]>;
}>>;
export type OrderNoteWhereInput = {
    AND?: Prisma.OrderNoteWhereInput | Prisma.OrderNoteWhereInput[];
    OR?: Prisma.OrderNoteWhereInput[];
    NOT?: Prisma.OrderNoteWhereInput | Prisma.OrderNoteWhereInput[];
    id?: Prisma.StringFilter<"OrderNote"> | string;
    orderId?: Prisma.StringFilter<"OrderNote"> | string;
    authorId?: Prisma.StringNullableFilter<"OrderNote"> | string | null;
    visibility?: Prisma.StringFilter<"OrderNote"> | string;
    body?: Prisma.StringFilter<"OrderNote"> | string;
    createdAt?: Prisma.DateTimeFilter<"OrderNote"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    author?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type OrderNoteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
    author?: Prisma.UserOrderByWithRelationInput;
};
export type OrderNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OrderNoteWhereInput | Prisma.OrderNoteWhereInput[];
    OR?: Prisma.OrderNoteWhereInput[];
    NOT?: Prisma.OrderNoteWhereInput | Prisma.OrderNoteWhereInput[];
    orderId?: Prisma.StringFilter<"OrderNote"> | string;
    authorId?: Prisma.StringNullableFilter<"OrderNote"> | string | null;
    visibility?: Prisma.StringFilter<"OrderNote"> | string;
    body?: Prisma.StringFilter<"OrderNote"> | string;
    createdAt?: Prisma.DateTimeFilter<"OrderNote"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    author?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type OrderNoteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.OrderNoteCountOrderByAggregateInput;
    _max?: Prisma.OrderNoteMaxOrderByAggregateInput;
    _min?: Prisma.OrderNoteMinOrderByAggregateInput;
};
export type OrderNoteScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderNoteScalarWhereWithAggregatesInput | Prisma.OrderNoteScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderNoteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderNoteScalarWhereWithAggregatesInput | Prisma.OrderNoteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OrderNote"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"OrderNote"> | string;
    authorId?: Prisma.StringNullableWithAggregatesFilter<"OrderNote"> | string | null;
    visibility?: Prisma.StringWithAggregatesFilter<"OrderNote"> | string;
    body?: Prisma.StringWithAggregatesFilter<"OrderNote"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"OrderNote"> | Date | string;
};
export type OrderNoteCreateInput = {
    id?: string;
    visibility?: string;
    body: string;
    createdAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutNotesInput;
    author?: Prisma.UserCreateNestedOneWithoutAuthoredOrderNotesInput;
};
export type OrderNoteUncheckedCreateInput = {
    id?: string;
    orderId: string;
    authorId?: string | null;
    visibility?: string;
    body: string;
    createdAt?: Date | string;
};
export type OrderNoteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutNotesNestedInput;
    author?: Prisma.UserUpdateOneWithoutAuthoredOrderNotesNestedInput;
};
export type OrderNoteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderNoteCreateManyInput = {
    id?: string;
    orderId: string;
    authorId?: string | null;
    visibility?: string;
    body: string;
    createdAt?: Date | string;
};
export type OrderNoteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderNoteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderNoteListRelationFilter = {
    every?: Prisma.OrderNoteWhereInput;
    some?: Prisma.OrderNoteWhereInput;
    none?: Prisma.OrderNoteWhereInput;
};
export type OrderNoteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderNoteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OrderNoteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OrderNoteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OrderNoteCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.OrderNoteCreateWithoutAuthorInput, Prisma.OrderNoteUncheckedCreateWithoutAuthorInput> | Prisma.OrderNoteCreateWithoutAuthorInput[] | Prisma.OrderNoteUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.OrderNoteCreateOrConnectWithoutAuthorInput | Prisma.OrderNoteCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.OrderNoteCreateManyAuthorInputEnvelope;
    connect?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
};
export type OrderNoteUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.OrderNoteCreateWithoutAuthorInput, Prisma.OrderNoteUncheckedCreateWithoutAuthorInput> | Prisma.OrderNoteCreateWithoutAuthorInput[] | Prisma.OrderNoteUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.OrderNoteCreateOrConnectWithoutAuthorInput | Prisma.OrderNoteCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.OrderNoteCreateManyAuthorInputEnvelope;
    connect?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
};
export type OrderNoteUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.OrderNoteCreateWithoutAuthorInput, Prisma.OrderNoteUncheckedCreateWithoutAuthorInput> | Prisma.OrderNoteCreateWithoutAuthorInput[] | Prisma.OrderNoteUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.OrderNoteCreateOrConnectWithoutAuthorInput | Prisma.OrderNoteCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.OrderNoteUpsertWithWhereUniqueWithoutAuthorInput | Prisma.OrderNoteUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.OrderNoteCreateManyAuthorInputEnvelope;
    set?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
    disconnect?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
    delete?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
    connect?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
    update?: Prisma.OrderNoteUpdateWithWhereUniqueWithoutAuthorInput | Prisma.OrderNoteUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.OrderNoteUpdateManyWithWhereWithoutAuthorInput | Prisma.OrderNoteUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.OrderNoteScalarWhereInput | Prisma.OrderNoteScalarWhereInput[];
};
export type OrderNoteUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.OrderNoteCreateWithoutAuthorInput, Prisma.OrderNoteUncheckedCreateWithoutAuthorInput> | Prisma.OrderNoteCreateWithoutAuthorInput[] | Prisma.OrderNoteUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.OrderNoteCreateOrConnectWithoutAuthorInput | Prisma.OrderNoteCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.OrderNoteUpsertWithWhereUniqueWithoutAuthorInput | Prisma.OrderNoteUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.OrderNoteCreateManyAuthorInputEnvelope;
    set?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
    disconnect?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
    delete?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
    connect?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
    update?: Prisma.OrderNoteUpdateWithWhereUniqueWithoutAuthorInput | Prisma.OrderNoteUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.OrderNoteUpdateManyWithWhereWithoutAuthorInput | Prisma.OrderNoteUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.OrderNoteScalarWhereInput | Prisma.OrderNoteScalarWhereInput[];
};
export type OrderNoteCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderNoteCreateWithoutOrderInput, Prisma.OrderNoteUncheckedCreateWithoutOrderInput> | Prisma.OrderNoteCreateWithoutOrderInput[] | Prisma.OrderNoteUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderNoteCreateOrConnectWithoutOrderInput | Prisma.OrderNoteCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.OrderNoteCreateManyOrderInputEnvelope;
    connect?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
};
export type OrderNoteUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderNoteCreateWithoutOrderInput, Prisma.OrderNoteUncheckedCreateWithoutOrderInput> | Prisma.OrderNoteCreateWithoutOrderInput[] | Prisma.OrderNoteUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderNoteCreateOrConnectWithoutOrderInput | Prisma.OrderNoteCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.OrderNoteCreateManyOrderInputEnvelope;
    connect?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
};
export type OrderNoteUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderNoteCreateWithoutOrderInput, Prisma.OrderNoteUncheckedCreateWithoutOrderInput> | Prisma.OrderNoteCreateWithoutOrderInput[] | Prisma.OrderNoteUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderNoteCreateOrConnectWithoutOrderInput | Prisma.OrderNoteCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.OrderNoteUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrderNoteUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.OrderNoteCreateManyOrderInputEnvelope;
    set?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
    disconnect?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
    delete?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
    connect?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
    update?: Prisma.OrderNoteUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrderNoteUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.OrderNoteUpdateManyWithWhereWithoutOrderInput | Prisma.OrderNoteUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.OrderNoteScalarWhereInput | Prisma.OrderNoteScalarWhereInput[];
};
export type OrderNoteUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderNoteCreateWithoutOrderInput, Prisma.OrderNoteUncheckedCreateWithoutOrderInput> | Prisma.OrderNoteCreateWithoutOrderInput[] | Prisma.OrderNoteUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderNoteCreateOrConnectWithoutOrderInput | Prisma.OrderNoteCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.OrderNoteUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrderNoteUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.OrderNoteCreateManyOrderInputEnvelope;
    set?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
    disconnect?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
    delete?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
    connect?: Prisma.OrderNoteWhereUniqueInput | Prisma.OrderNoteWhereUniqueInput[];
    update?: Prisma.OrderNoteUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrderNoteUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.OrderNoteUpdateManyWithWhereWithoutOrderInput | Prisma.OrderNoteUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.OrderNoteScalarWhereInput | Prisma.OrderNoteScalarWhereInput[];
};
export type OrderNoteCreateWithoutAuthorInput = {
    id?: string;
    visibility?: string;
    body: string;
    createdAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutNotesInput;
};
export type OrderNoteUncheckedCreateWithoutAuthorInput = {
    id?: string;
    orderId: string;
    visibility?: string;
    body: string;
    createdAt?: Date | string;
};
export type OrderNoteCreateOrConnectWithoutAuthorInput = {
    where: Prisma.OrderNoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderNoteCreateWithoutAuthorInput, Prisma.OrderNoteUncheckedCreateWithoutAuthorInput>;
};
export type OrderNoteCreateManyAuthorInputEnvelope = {
    data: Prisma.OrderNoteCreateManyAuthorInput | Prisma.OrderNoteCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type OrderNoteUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.OrderNoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderNoteUpdateWithoutAuthorInput, Prisma.OrderNoteUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.OrderNoteCreateWithoutAuthorInput, Prisma.OrderNoteUncheckedCreateWithoutAuthorInput>;
};
export type OrderNoteUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.OrderNoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderNoteUpdateWithoutAuthorInput, Prisma.OrderNoteUncheckedUpdateWithoutAuthorInput>;
};
export type OrderNoteUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.OrderNoteScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderNoteUpdateManyMutationInput, Prisma.OrderNoteUncheckedUpdateManyWithoutAuthorInput>;
};
export type OrderNoteScalarWhereInput = {
    AND?: Prisma.OrderNoteScalarWhereInput | Prisma.OrderNoteScalarWhereInput[];
    OR?: Prisma.OrderNoteScalarWhereInput[];
    NOT?: Prisma.OrderNoteScalarWhereInput | Prisma.OrderNoteScalarWhereInput[];
    id?: Prisma.StringFilter<"OrderNote"> | string;
    orderId?: Prisma.StringFilter<"OrderNote"> | string;
    authorId?: Prisma.StringNullableFilter<"OrderNote"> | string | null;
    visibility?: Prisma.StringFilter<"OrderNote"> | string;
    body?: Prisma.StringFilter<"OrderNote"> | string;
    createdAt?: Prisma.DateTimeFilter<"OrderNote"> | Date | string;
};
export type OrderNoteCreateWithoutOrderInput = {
    id?: string;
    visibility?: string;
    body: string;
    createdAt?: Date | string;
    author?: Prisma.UserCreateNestedOneWithoutAuthoredOrderNotesInput;
};
export type OrderNoteUncheckedCreateWithoutOrderInput = {
    id?: string;
    authorId?: string | null;
    visibility?: string;
    body: string;
    createdAt?: Date | string;
};
export type OrderNoteCreateOrConnectWithoutOrderInput = {
    where: Prisma.OrderNoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderNoteCreateWithoutOrderInput, Prisma.OrderNoteUncheckedCreateWithoutOrderInput>;
};
export type OrderNoteCreateManyOrderInputEnvelope = {
    data: Prisma.OrderNoteCreateManyOrderInput | Prisma.OrderNoteCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type OrderNoteUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.OrderNoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderNoteUpdateWithoutOrderInput, Prisma.OrderNoteUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.OrderNoteCreateWithoutOrderInput, Prisma.OrderNoteUncheckedCreateWithoutOrderInput>;
};
export type OrderNoteUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.OrderNoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderNoteUpdateWithoutOrderInput, Prisma.OrderNoteUncheckedUpdateWithoutOrderInput>;
};
export type OrderNoteUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.OrderNoteScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderNoteUpdateManyMutationInput, Prisma.OrderNoteUncheckedUpdateManyWithoutOrderInput>;
};
export type OrderNoteCreateManyAuthorInput = {
    id?: string;
    orderId: string;
    visibility?: string;
    body: string;
    createdAt?: Date | string;
};
export type OrderNoteUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutNotesNestedInput;
};
export type OrderNoteUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderNoteUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderNoteCreateManyOrderInput = {
    id?: string;
    authorId?: string | null;
    visibility?: string;
    body: string;
    createdAt?: Date | string;
};
export type OrderNoteUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneWithoutAuthoredOrderNotesNestedInput;
};
export type OrderNoteUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderNoteUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderNoteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    authorId?: boolean;
    visibility?: boolean;
    body?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.OrderNote$authorArgs<ExtArgs>;
}, ExtArgs["result"]["orderNote"]>;
export type OrderNoteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    authorId?: boolean;
    visibility?: boolean;
    body?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.OrderNote$authorArgs<ExtArgs>;
}, ExtArgs["result"]["orderNote"]>;
export type OrderNoteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    authorId?: boolean;
    visibility?: boolean;
    body?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.OrderNote$authorArgs<ExtArgs>;
}, ExtArgs["result"]["orderNote"]>;
export type OrderNoteSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    authorId?: boolean;
    visibility?: boolean;
    body?: boolean;
    createdAt?: boolean;
};
export type OrderNoteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "authorId" | "visibility" | "body" | "createdAt", ExtArgs["result"]["orderNote"]>;
export type OrderNoteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.OrderNote$authorArgs<ExtArgs>;
};
export type OrderNoteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.OrderNote$authorArgs<ExtArgs>;
};
export type OrderNoteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.OrderNote$authorArgs<ExtArgs>;
};
export type $OrderNotePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrderNote";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs>;
        author: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        authorId: string | null;
        visibility: string;
        body: string;
        createdAt: Date;
    }, ExtArgs["result"]["orderNote"]>;
    composites: {};
};
export type OrderNoteGetPayload<S extends boolean | null | undefined | OrderNoteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderNotePayload, S>;
export type OrderNoteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderNoteCountAggregateInputType | true;
};
export interface OrderNoteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrderNote'];
        meta: {
            name: 'OrderNote';
        };
    };
    findUnique<T extends OrderNoteFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderNoteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderNoteClient<runtime.Types.Result.GetResult<Prisma.$OrderNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderNoteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderNoteClient<runtime.Types.Result.GetResult<Prisma.$OrderNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderNoteFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderNoteFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderNoteClient<runtime.Types.Result.GetResult<Prisma.$OrderNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderNoteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderNoteClient<runtime.Types.Result.GetResult<Prisma.$OrderNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderNoteFindManyArgs>(args?: Prisma.SelectSubset<T, OrderNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderNoteCreateArgs>(args: Prisma.SelectSubset<T, OrderNoteCreateArgs<ExtArgs>>): Prisma.Prisma__OrderNoteClient<runtime.Types.Result.GetResult<Prisma.$OrderNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderNoteCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderNoteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderNoteDeleteArgs>(args: Prisma.SelectSubset<T, OrderNoteDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderNoteClient<runtime.Types.Result.GetResult<Prisma.$OrderNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderNoteUpdateArgs>(args: Prisma.SelectSubset<T, OrderNoteUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderNoteClient<runtime.Types.Result.GetResult<Prisma.$OrderNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderNoteDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderNoteUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderNoteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderNoteUpsertArgs>(args: Prisma.SelectSubset<T, OrderNoteUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderNoteClient<runtime.Types.Result.GetResult<Prisma.$OrderNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderNoteCountArgs>(args?: Prisma.Subset<T, OrderNoteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderNoteCountAggregateOutputType> : number>;
    aggregate<T extends OrderNoteAggregateArgs>(args: Prisma.Subset<T, OrderNoteAggregateArgs>): Prisma.PrismaPromise<GetOrderNoteAggregateType<T>>;
    groupBy<T extends OrderNoteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderNoteGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderNoteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderNoteFieldRefs;
}
export interface Prisma__OrderNoteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    author<T extends Prisma.OrderNote$authorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderNote$authorArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderNoteFieldRefs {
    readonly id: Prisma.FieldRef<"OrderNote", 'String'>;
    readonly orderId: Prisma.FieldRef<"OrderNote", 'String'>;
    readonly authorId: Prisma.FieldRef<"OrderNote", 'String'>;
    readonly visibility: Prisma.FieldRef<"OrderNote", 'String'>;
    readonly body: Prisma.FieldRef<"OrderNote", 'String'>;
    readonly createdAt: Prisma.FieldRef<"OrderNote", 'DateTime'>;
}
export type OrderNoteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNoteSelect<ExtArgs> | null;
    omit?: Prisma.OrderNoteOmit<ExtArgs> | null;
    include?: Prisma.OrderNoteInclude<ExtArgs> | null;
    where: Prisma.OrderNoteWhereUniqueInput;
};
export type OrderNoteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNoteSelect<ExtArgs> | null;
    omit?: Prisma.OrderNoteOmit<ExtArgs> | null;
    include?: Prisma.OrderNoteInclude<ExtArgs> | null;
    where: Prisma.OrderNoteWhereUniqueInput;
};
export type OrderNoteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNoteSelect<ExtArgs> | null;
    omit?: Prisma.OrderNoteOmit<ExtArgs> | null;
    include?: Prisma.OrderNoteInclude<ExtArgs> | null;
    where?: Prisma.OrderNoteWhereInput;
    orderBy?: Prisma.OrderNoteOrderByWithRelationInput | Prisma.OrderNoteOrderByWithRelationInput[];
    cursor?: Prisma.OrderNoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderNoteScalarFieldEnum | Prisma.OrderNoteScalarFieldEnum[];
};
export type OrderNoteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNoteSelect<ExtArgs> | null;
    omit?: Prisma.OrderNoteOmit<ExtArgs> | null;
    include?: Prisma.OrderNoteInclude<ExtArgs> | null;
    where?: Prisma.OrderNoteWhereInput;
    orderBy?: Prisma.OrderNoteOrderByWithRelationInput | Prisma.OrderNoteOrderByWithRelationInput[];
    cursor?: Prisma.OrderNoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderNoteScalarFieldEnum | Prisma.OrderNoteScalarFieldEnum[];
};
export type OrderNoteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNoteSelect<ExtArgs> | null;
    omit?: Prisma.OrderNoteOmit<ExtArgs> | null;
    include?: Prisma.OrderNoteInclude<ExtArgs> | null;
    where?: Prisma.OrderNoteWhereInput;
    orderBy?: Prisma.OrderNoteOrderByWithRelationInput | Prisma.OrderNoteOrderByWithRelationInput[];
    cursor?: Prisma.OrderNoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderNoteScalarFieldEnum | Prisma.OrderNoteScalarFieldEnum[];
};
export type OrderNoteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNoteSelect<ExtArgs> | null;
    omit?: Prisma.OrderNoteOmit<ExtArgs> | null;
    include?: Prisma.OrderNoteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderNoteCreateInput, Prisma.OrderNoteUncheckedCreateInput>;
};
export type OrderNoteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderNoteCreateManyInput | Prisma.OrderNoteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderNoteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNoteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderNoteOmit<ExtArgs> | null;
    data: Prisma.OrderNoteCreateManyInput | Prisma.OrderNoteCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrderNoteIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderNoteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNoteSelect<ExtArgs> | null;
    omit?: Prisma.OrderNoteOmit<ExtArgs> | null;
    include?: Prisma.OrderNoteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderNoteUpdateInput, Prisma.OrderNoteUncheckedUpdateInput>;
    where: Prisma.OrderNoteWhereUniqueInput;
};
export type OrderNoteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderNoteUpdateManyMutationInput, Prisma.OrderNoteUncheckedUpdateManyInput>;
    where?: Prisma.OrderNoteWhereInput;
    limit?: number;
};
export type OrderNoteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNoteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderNoteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderNoteUpdateManyMutationInput, Prisma.OrderNoteUncheckedUpdateManyInput>;
    where?: Prisma.OrderNoteWhereInput;
    limit?: number;
    include?: Prisma.OrderNoteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderNoteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNoteSelect<ExtArgs> | null;
    omit?: Prisma.OrderNoteOmit<ExtArgs> | null;
    include?: Prisma.OrderNoteInclude<ExtArgs> | null;
    where: Prisma.OrderNoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderNoteCreateInput, Prisma.OrderNoteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderNoteUpdateInput, Prisma.OrderNoteUncheckedUpdateInput>;
};
export type OrderNoteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNoteSelect<ExtArgs> | null;
    omit?: Prisma.OrderNoteOmit<ExtArgs> | null;
    include?: Prisma.OrderNoteInclude<ExtArgs> | null;
    where: Prisma.OrderNoteWhereUniqueInput;
};
export type OrderNoteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderNoteWhereInput;
    limit?: number;
};
export type OrderNote$authorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type OrderNoteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNoteSelect<ExtArgs> | null;
    omit?: Prisma.OrderNoteOmit<ExtArgs> | null;
    include?: Prisma.OrderNoteInclude<ExtArgs> | null;
};
