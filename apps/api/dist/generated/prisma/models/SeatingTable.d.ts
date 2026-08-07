import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SeatingTableModel = runtime.Types.Result.DefaultSelection<Prisma.$SeatingTablePayload>;
export type AggregateSeatingTable = {
    _count: SeatingTableCountAggregateOutputType | null;
    _avg: SeatingTableAvgAggregateOutputType | null;
    _sum: SeatingTableSumAggregateOutputType | null;
    _min: SeatingTableMinAggregateOutputType | null;
    _max: SeatingTableMaxAggregateOutputType | null;
};
export type SeatingTableAvgAggregateOutputType = {
    capacity: number | null;
    sortOrder: number | null;
};
export type SeatingTableSumAggregateOutputType = {
    capacity: number | null;
    sortOrder: number | null;
};
export type SeatingTableMinAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    eventId: string | null;
    eventKey: string | null;
    name: string | null;
    code: string | null;
    capacity: number | null;
    zone: string | null;
    shape: $Enums.SeatingTableShape | null;
    note: string | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SeatingTableMaxAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    eventId: string | null;
    eventKey: string | null;
    name: string | null;
    code: string | null;
    capacity: number | null;
    zone: string | null;
    shape: $Enums.SeatingTableShape | null;
    note: string | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SeatingTableCountAggregateOutputType = {
    id: number;
    weddingId: number;
    eventId: number;
    eventKey: number;
    name: number;
    code: number;
    capacity: number;
    zone: number;
    shape: number;
    note: number;
    sortOrder: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SeatingTableAvgAggregateInputType = {
    capacity?: true;
    sortOrder?: true;
};
export type SeatingTableSumAggregateInputType = {
    capacity?: true;
    sortOrder?: true;
};
export type SeatingTableMinAggregateInputType = {
    id?: true;
    weddingId?: true;
    eventId?: true;
    eventKey?: true;
    name?: true;
    code?: true;
    capacity?: true;
    zone?: true;
    shape?: true;
    note?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SeatingTableMaxAggregateInputType = {
    id?: true;
    weddingId?: true;
    eventId?: true;
    eventKey?: true;
    name?: true;
    code?: true;
    capacity?: true;
    zone?: true;
    shape?: true;
    note?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SeatingTableCountAggregateInputType = {
    id?: true;
    weddingId?: true;
    eventId?: true;
    eventKey?: true;
    name?: true;
    code?: true;
    capacity?: true;
    zone?: true;
    shape?: true;
    note?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SeatingTableAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SeatingTableWhereInput;
    orderBy?: Prisma.SeatingTableOrderByWithRelationInput | Prisma.SeatingTableOrderByWithRelationInput[];
    cursor?: Prisma.SeatingTableWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SeatingTableCountAggregateInputType;
    _avg?: SeatingTableAvgAggregateInputType;
    _sum?: SeatingTableSumAggregateInputType;
    _min?: SeatingTableMinAggregateInputType;
    _max?: SeatingTableMaxAggregateInputType;
};
export type GetSeatingTableAggregateType<T extends SeatingTableAggregateArgs> = {
    [P in keyof T & keyof AggregateSeatingTable]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSeatingTable[P]> : Prisma.GetScalarType<T[P], AggregateSeatingTable[P]>;
};
export type SeatingTableGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SeatingTableWhereInput;
    orderBy?: Prisma.SeatingTableOrderByWithAggregationInput | Prisma.SeatingTableOrderByWithAggregationInput[];
    by: Prisma.SeatingTableScalarFieldEnum[] | Prisma.SeatingTableScalarFieldEnum;
    having?: Prisma.SeatingTableScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SeatingTableCountAggregateInputType | true;
    _avg?: SeatingTableAvgAggregateInputType;
    _sum?: SeatingTableSumAggregateInputType;
    _min?: SeatingTableMinAggregateInputType;
    _max?: SeatingTableMaxAggregateInputType;
};
export type SeatingTableGroupByOutputType = {
    id: string;
    weddingId: string;
    eventId: string | null;
    eventKey: string;
    name: string;
    code: string;
    capacity: number;
    zone: string | null;
    shape: $Enums.SeatingTableShape;
    note: string | null;
    sortOrder: number;
    createdAt: Date;
    updatedAt: Date;
    _count: SeatingTableCountAggregateOutputType | null;
    _avg: SeatingTableAvgAggregateOutputType | null;
    _sum: SeatingTableSumAggregateOutputType | null;
    _min: SeatingTableMinAggregateOutputType | null;
    _max: SeatingTableMaxAggregateOutputType | null;
};
export type GetSeatingTableGroupByPayload<T extends SeatingTableGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SeatingTableGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SeatingTableGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SeatingTableGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SeatingTableGroupByOutputType[P]>;
}>>;
export type SeatingTableWhereInput = {
    AND?: Prisma.SeatingTableWhereInput | Prisma.SeatingTableWhereInput[];
    OR?: Prisma.SeatingTableWhereInput[];
    NOT?: Prisma.SeatingTableWhereInput | Prisma.SeatingTableWhereInput[];
    id?: Prisma.StringFilter<"SeatingTable"> | string;
    weddingId?: Prisma.StringFilter<"SeatingTable"> | string;
    eventId?: Prisma.StringNullableFilter<"SeatingTable"> | string | null;
    eventKey?: Prisma.StringFilter<"SeatingTable"> | string;
    name?: Prisma.StringFilter<"SeatingTable"> | string;
    code?: Prisma.StringFilter<"SeatingTable"> | string;
    capacity?: Prisma.IntFilter<"SeatingTable"> | number;
    zone?: Prisma.StringNullableFilter<"SeatingTable"> | string | null;
    shape?: Prisma.EnumSeatingTableShapeFilter<"SeatingTable"> | $Enums.SeatingTableShape;
    note?: Prisma.StringNullableFilter<"SeatingTable"> | string | null;
    sortOrder?: Prisma.IntFilter<"SeatingTable"> | number;
    createdAt?: Prisma.DateTimeFilter<"SeatingTable"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SeatingTable"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
    event?: Prisma.XOR<Prisma.EventNullableScalarRelationFilter, Prisma.EventWhereInput> | null;
    assignments?: Prisma.SeatAssignmentListRelationFilter;
};
export type SeatingTableOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    zone?: Prisma.SortOrderInput | Prisma.SortOrder;
    shape?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    wedding?: Prisma.WeddingOrderByWithRelationInput;
    event?: Prisma.EventOrderByWithRelationInput;
    assignments?: Prisma.SeatAssignmentOrderByRelationAggregateInput;
};
export type SeatingTableWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    weddingId_eventKey_code?: Prisma.SeatingTableWeddingIdEventKeyCodeCompoundUniqueInput;
    AND?: Prisma.SeatingTableWhereInput | Prisma.SeatingTableWhereInput[];
    OR?: Prisma.SeatingTableWhereInput[];
    NOT?: Prisma.SeatingTableWhereInput | Prisma.SeatingTableWhereInput[];
    weddingId?: Prisma.StringFilter<"SeatingTable"> | string;
    eventId?: Prisma.StringNullableFilter<"SeatingTable"> | string | null;
    eventKey?: Prisma.StringFilter<"SeatingTable"> | string;
    name?: Prisma.StringFilter<"SeatingTable"> | string;
    code?: Prisma.StringFilter<"SeatingTable"> | string;
    capacity?: Prisma.IntFilter<"SeatingTable"> | number;
    zone?: Prisma.StringNullableFilter<"SeatingTable"> | string | null;
    shape?: Prisma.EnumSeatingTableShapeFilter<"SeatingTable"> | $Enums.SeatingTableShape;
    note?: Prisma.StringNullableFilter<"SeatingTable"> | string | null;
    sortOrder?: Prisma.IntFilter<"SeatingTable"> | number;
    createdAt?: Prisma.DateTimeFilter<"SeatingTable"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SeatingTable"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
    event?: Prisma.XOR<Prisma.EventNullableScalarRelationFilter, Prisma.EventWhereInput> | null;
    assignments?: Prisma.SeatAssignmentListRelationFilter;
}, "id" | "weddingId_eventKey_code">;
export type SeatingTableOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    zone?: Prisma.SortOrderInput | Prisma.SortOrder;
    shape?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SeatingTableCountOrderByAggregateInput;
    _avg?: Prisma.SeatingTableAvgOrderByAggregateInput;
    _max?: Prisma.SeatingTableMaxOrderByAggregateInput;
    _min?: Prisma.SeatingTableMinOrderByAggregateInput;
    _sum?: Prisma.SeatingTableSumOrderByAggregateInput;
};
export type SeatingTableScalarWhereWithAggregatesInput = {
    AND?: Prisma.SeatingTableScalarWhereWithAggregatesInput | Prisma.SeatingTableScalarWhereWithAggregatesInput[];
    OR?: Prisma.SeatingTableScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SeatingTableScalarWhereWithAggregatesInput | Prisma.SeatingTableScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SeatingTable"> | string;
    weddingId?: Prisma.StringWithAggregatesFilter<"SeatingTable"> | string;
    eventId?: Prisma.StringNullableWithAggregatesFilter<"SeatingTable"> | string | null;
    eventKey?: Prisma.StringWithAggregatesFilter<"SeatingTable"> | string;
    name?: Prisma.StringWithAggregatesFilter<"SeatingTable"> | string;
    code?: Prisma.StringWithAggregatesFilter<"SeatingTable"> | string;
    capacity?: Prisma.IntWithAggregatesFilter<"SeatingTable"> | number;
    zone?: Prisma.StringNullableWithAggregatesFilter<"SeatingTable"> | string | null;
    shape?: Prisma.EnumSeatingTableShapeWithAggregatesFilter<"SeatingTable"> | $Enums.SeatingTableShape;
    note?: Prisma.StringNullableWithAggregatesFilter<"SeatingTable"> | string | null;
    sortOrder?: Prisma.IntWithAggregatesFilter<"SeatingTable"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SeatingTable"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SeatingTable"> | Date | string;
};
export type SeatingTableCreateInput = {
    id?: string;
    eventKey?: string;
    name: string;
    code: string;
    capacity?: number;
    zone?: string | null;
    shape?: $Enums.SeatingTableShape;
    note?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutSeatingTablesInput;
    event?: Prisma.EventCreateNestedOneWithoutSeatingTablesInput;
    assignments?: Prisma.SeatAssignmentCreateNestedManyWithoutTableInput;
};
export type SeatingTableUncheckedCreateInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    name: string;
    code: string;
    capacity?: number;
    zone?: string | null;
    shape?: $Enums.SeatingTableShape;
    note?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignments?: Prisma.SeatAssignmentUncheckedCreateNestedManyWithoutTableInput;
};
export type SeatingTableUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shape?: Prisma.EnumSeatingTableShapeFieldUpdateOperationsInput | $Enums.SeatingTableShape;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutSeatingTablesNestedInput;
    event?: Prisma.EventUpdateOneWithoutSeatingTablesNestedInput;
    assignments?: Prisma.SeatAssignmentUpdateManyWithoutTableNestedInput;
};
export type SeatingTableUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shape?: Prisma.EnumSeatingTableShapeFieldUpdateOperationsInput | $Enums.SeatingTableShape;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.SeatAssignmentUncheckedUpdateManyWithoutTableNestedInput;
};
export type SeatingTableCreateManyInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    name: string;
    code: string;
    capacity?: number;
    zone?: string | null;
    shape?: $Enums.SeatingTableShape;
    note?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SeatingTableUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shape?: Prisma.EnumSeatingTableShapeFieldUpdateOperationsInput | $Enums.SeatingTableShape;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeatingTableUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shape?: Prisma.EnumSeatingTableShapeFieldUpdateOperationsInput | $Enums.SeatingTableShape;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeatingTableListRelationFilter = {
    every?: Prisma.SeatingTableWhereInput;
    some?: Prisma.SeatingTableWhereInput;
    none?: Prisma.SeatingTableWhereInput;
};
export type SeatingTableOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SeatingTableWeddingIdEventKeyCodeCompoundUniqueInput = {
    weddingId: string;
    eventKey: string;
    code: string;
};
export type SeatingTableCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    zone?: Prisma.SortOrder;
    shape?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SeatingTableAvgOrderByAggregateInput = {
    capacity?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type SeatingTableMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    zone?: Prisma.SortOrder;
    shape?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SeatingTableMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    zone?: Prisma.SortOrder;
    shape?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SeatingTableSumOrderByAggregateInput = {
    capacity?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type SeatingTableScalarRelationFilter = {
    is?: Prisma.SeatingTableWhereInput;
    isNot?: Prisma.SeatingTableWhereInput;
};
export type SeatingTableCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.SeatingTableCreateWithoutWeddingInput, Prisma.SeatingTableUncheckedCreateWithoutWeddingInput> | Prisma.SeatingTableCreateWithoutWeddingInput[] | Prisma.SeatingTableUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.SeatingTableCreateOrConnectWithoutWeddingInput | Prisma.SeatingTableCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.SeatingTableCreateManyWeddingInputEnvelope;
    connect?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
};
export type SeatingTableUncheckedCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.SeatingTableCreateWithoutWeddingInput, Prisma.SeatingTableUncheckedCreateWithoutWeddingInput> | Prisma.SeatingTableCreateWithoutWeddingInput[] | Prisma.SeatingTableUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.SeatingTableCreateOrConnectWithoutWeddingInput | Prisma.SeatingTableCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.SeatingTableCreateManyWeddingInputEnvelope;
    connect?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
};
export type SeatingTableUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.SeatingTableCreateWithoutWeddingInput, Prisma.SeatingTableUncheckedCreateWithoutWeddingInput> | Prisma.SeatingTableCreateWithoutWeddingInput[] | Prisma.SeatingTableUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.SeatingTableCreateOrConnectWithoutWeddingInput | Prisma.SeatingTableCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.SeatingTableUpsertWithWhereUniqueWithoutWeddingInput | Prisma.SeatingTableUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.SeatingTableCreateManyWeddingInputEnvelope;
    set?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
    disconnect?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
    delete?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
    connect?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
    update?: Prisma.SeatingTableUpdateWithWhereUniqueWithoutWeddingInput | Prisma.SeatingTableUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.SeatingTableUpdateManyWithWhereWithoutWeddingInput | Prisma.SeatingTableUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.SeatingTableScalarWhereInput | Prisma.SeatingTableScalarWhereInput[];
};
export type SeatingTableUncheckedUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.SeatingTableCreateWithoutWeddingInput, Prisma.SeatingTableUncheckedCreateWithoutWeddingInput> | Prisma.SeatingTableCreateWithoutWeddingInput[] | Prisma.SeatingTableUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.SeatingTableCreateOrConnectWithoutWeddingInput | Prisma.SeatingTableCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.SeatingTableUpsertWithWhereUniqueWithoutWeddingInput | Prisma.SeatingTableUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.SeatingTableCreateManyWeddingInputEnvelope;
    set?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
    disconnect?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
    delete?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
    connect?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
    update?: Prisma.SeatingTableUpdateWithWhereUniqueWithoutWeddingInput | Prisma.SeatingTableUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.SeatingTableUpdateManyWithWhereWithoutWeddingInput | Prisma.SeatingTableUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.SeatingTableScalarWhereInput | Prisma.SeatingTableScalarWhereInput[];
};
export type SeatingTableCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.SeatingTableCreateWithoutEventInput, Prisma.SeatingTableUncheckedCreateWithoutEventInput> | Prisma.SeatingTableCreateWithoutEventInput[] | Prisma.SeatingTableUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.SeatingTableCreateOrConnectWithoutEventInput | Prisma.SeatingTableCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.SeatingTableCreateManyEventInputEnvelope;
    connect?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
};
export type SeatingTableUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.SeatingTableCreateWithoutEventInput, Prisma.SeatingTableUncheckedCreateWithoutEventInput> | Prisma.SeatingTableCreateWithoutEventInput[] | Prisma.SeatingTableUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.SeatingTableCreateOrConnectWithoutEventInput | Prisma.SeatingTableCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.SeatingTableCreateManyEventInputEnvelope;
    connect?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
};
export type SeatingTableUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.SeatingTableCreateWithoutEventInput, Prisma.SeatingTableUncheckedCreateWithoutEventInput> | Prisma.SeatingTableCreateWithoutEventInput[] | Prisma.SeatingTableUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.SeatingTableCreateOrConnectWithoutEventInput | Prisma.SeatingTableCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.SeatingTableUpsertWithWhereUniqueWithoutEventInput | Prisma.SeatingTableUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.SeatingTableCreateManyEventInputEnvelope;
    set?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
    disconnect?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
    delete?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
    connect?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
    update?: Prisma.SeatingTableUpdateWithWhereUniqueWithoutEventInput | Prisma.SeatingTableUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.SeatingTableUpdateManyWithWhereWithoutEventInput | Prisma.SeatingTableUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.SeatingTableScalarWhereInput | Prisma.SeatingTableScalarWhereInput[];
};
export type SeatingTableUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.SeatingTableCreateWithoutEventInput, Prisma.SeatingTableUncheckedCreateWithoutEventInput> | Prisma.SeatingTableCreateWithoutEventInput[] | Prisma.SeatingTableUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.SeatingTableCreateOrConnectWithoutEventInput | Prisma.SeatingTableCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.SeatingTableUpsertWithWhereUniqueWithoutEventInput | Prisma.SeatingTableUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.SeatingTableCreateManyEventInputEnvelope;
    set?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
    disconnect?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
    delete?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
    connect?: Prisma.SeatingTableWhereUniqueInput | Prisma.SeatingTableWhereUniqueInput[];
    update?: Prisma.SeatingTableUpdateWithWhereUniqueWithoutEventInput | Prisma.SeatingTableUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.SeatingTableUpdateManyWithWhereWithoutEventInput | Prisma.SeatingTableUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.SeatingTableScalarWhereInput | Prisma.SeatingTableScalarWhereInput[];
};
export type EnumSeatingTableShapeFieldUpdateOperationsInput = {
    set?: $Enums.SeatingTableShape;
};
export type SeatingTableCreateNestedOneWithoutAssignmentsInput = {
    create?: Prisma.XOR<Prisma.SeatingTableCreateWithoutAssignmentsInput, Prisma.SeatingTableUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.SeatingTableCreateOrConnectWithoutAssignmentsInput;
    connect?: Prisma.SeatingTableWhereUniqueInput;
};
export type SeatingTableUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.SeatingTableCreateWithoutAssignmentsInput, Prisma.SeatingTableUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.SeatingTableCreateOrConnectWithoutAssignmentsInput;
    upsert?: Prisma.SeatingTableUpsertWithoutAssignmentsInput;
    connect?: Prisma.SeatingTableWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SeatingTableUpdateToOneWithWhereWithoutAssignmentsInput, Prisma.SeatingTableUpdateWithoutAssignmentsInput>, Prisma.SeatingTableUncheckedUpdateWithoutAssignmentsInput>;
};
export type SeatingTableCreateWithoutWeddingInput = {
    id?: string;
    eventKey?: string;
    name: string;
    code: string;
    capacity?: number;
    zone?: string | null;
    shape?: $Enums.SeatingTableShape;
    note?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event?: Prisma.EventCreateNestedOneWithoutSeatingTablesInput;
    assignments?: Prisma.SeatAssignmentCreateNestedManyWithoutTableInput;
};
export type SeatingTableUncheckedCreateWithoutWeddingInput = {
    id?: string;
    eventId?: string | null;
    eventKey?: string;
    name: string;
    code: string;
    capacity?: number;
    zone?: string | null;
    shape?: $Enums.SeatingTableShape;
    note?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignments?: Prisma.SeatAssignmentUncheckedCreateNestedManyWithoutTableInput;
};
export type SeatingTableCreateOrConnectWithoutWeddingInput = {
    where: Prisma.SeatingTableWhereUniqueInput;
    create: Prisma.XOR<Prisma.SeatingTableCreateWithoutWeddingInput, Prisma.SeatingTableUncheckedCreateWithoutWeddingInput>;
};
export type SeatingTableCreateManyWeddingInputEnvelope = {
    data: Prisma.SeatingTableCreateManyWeddingInput | Prisma.SeatingTableCreateManyWeddingInput[];
    skipDuplicates?: boolean;
};
export type SeatingTableUpsertWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.SeatingTableWhereUniqueInput;
    update: Prisma.XOR<Prisma.SeatingTableUpdateWithoutWeddingInput, Prisma.SeatingTableUncheckedUpdateWithoutWeddingInput>;
    create: Prisma.XOR<Prisma.SeatingTableCreateWithoutWeddingInput, Prisma.SeatingTableUncheckedCreateWithoutWeddingInput>;
};
export type SeatingTableUpdateWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.SeatingTableWhereUniqueInput;
    data: Prisma.XOR<Prisma.SeatingTableUpdateWithoutWeddingInput, Prisma.SeatingTableUncheckedUpdateWithoutWeddingInput>;
};
export type SeatingTableUpdateManyWithWhereWithoutWeddingInput = {
    where: Prisma.SeatingTableScalarWhereInput;
    data: Prisma.XOR<Prisma.SeatingTableUpdateManyMutationInput, Prisma.SeatingTableUncheckedUpdateManyWithoutWeddingInput>;
};
export type SeatingTableScalarWhereInput = {
    AND?: Prisma.SeatingTableScalarWhereInput | Prisma.SeatingTableScalarWhereInput[];
    OR?: Prisma.SeatingTableScalarWhereInput[];
    NOT?: Prisma.SeatingTableScalarWhereInput | Prisma.SeatingTableScalarWhereInput[];
    id?: Prisma.StringFilter<"SeatingTable"> | string;
    weddingId?: Prisma.StringFilter<"SeatingTable"> | string;
    eventId?: Prisma.StringNullableFilter<"SeatingTable"> | string | null;
    eventKey?: Prisma.StringFilter<"SeatingTable"> | string;
    name?: Prisma.StringFilter<"SeatingTable"> | string;
    code?: Prisma.StringFilter<"SeatingTable"> | string;
    capacity?: Prisma.IntFilter<"SeatingTable"> | number;
    zone?: Prisma.StringNullableFilter<"SeatingTable"> | string | null;
    shape?: Prisma.EnumSeatingTableShapeFilter<"SeatingTable"> | $Enums.SeatingTableShape;
    note?: Prisma.StringNullableFilter<"SeatingTable"> | string | null;
    sortOrder?: Prisma.IntFilter<"SeatingTable"> | number;
    createdAt?: Prisma.DateTimeFilter<"SeatingTable"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SeatingTable"> | Date | string;
};
export type SeatingTableCreateWithoutEventInput = {
    id?: string;
    eventKey?: string;
    name: string;
    code: string;
    capacity?: number;
    zone?: string | null;
    shape?: $Enums.SeatingTableShape;
    note?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutSeatingTablesInput;
    assignments?: Prisma.SeatAssignmentCreateNestedManyWithoutTableInput;
};
export type SeatingTableUncheckedCreateWithoutEventInput = {
    id?: string;
    weddingId: string;
    eventKey?: string;
    name: string;
    code: string;
    capacity?: number;
    zone?: string | null;
    shape?: $Enums.SeatingTableShape;
    note?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignments?: Prisma.SeatAssignmentUncheckedCreateNestedManyWithoutTableInput;
};
export type SeatingTableCreateOrConnectWithoutEventInput = {
    where: Prisma.SeatingTableWhereUniqueInput;
    create: Prisma.XOR<Prisma.SeatingTableCreateWithoutEventInput, Prisma.SeatingTableUncheckedCreateWithoutEventInput>;
};
export type SeatingTableCreateManyEventInputEnvelope = {
    data: Prisma.SeatingTableCreateManyEventInput | Prisma.SeatingTableCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type SeatingTableUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.SeatingTableWhereUniqueInput;
    update: Prisma.XOR<Prisma.SeatingTableUpdateWithoutEventInput, Prisma.SeatingTableUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.SeatingTableCreateWithoutEventInput, Prisma.SeatingTableUncheckedCreateWithoutEventInput>;
};
export type SeatingTableUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.SeatingTableWhereUniqueInput;
    data: Prisma.XOR<Prisma.SeatingTableUpdateWithoutEventInput, Prisma.SeatingTableUncheckedUpdateWithoutEventInput>;
};
export type SeatingTableUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.SeatingTableScalarWhereInput;
    data: Prisma.XOR<Prisma.SeatingTableUpdateManyMutationInput, Prisma.SeatingTableUncheckedUpdateManyWithoutEventInput>;
};
export type SeatingTableCreateWithoutAssignmentsInput = {
    id?: string;
    eventKey?: string;
    name: string;
    code: string;
    capacity?: number;
    zone?: string | null;
    shape?: $Enums.SeatingTableShape;
    note?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutSeatingTablesInput;
    event?: Prisma.EventCreateNestedOneWithoutSeatingTablesInput;
};
export type SeatingTableUncheckedCreateWithoutAssignmentsInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    name: string;
    code: string;
    capacity?: number;
    zone?: string | null;
    shape?: $Enums.SeatingTableShape;
    note?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SeatingTableCreateOrConnectWithoutAssignmentsInput = {
    where: Prisma.SeatingTableWhereUniqueInput;
    create: Prisma.XOR<Prisma.SeatingTableCreateWithoutAssignmentsInput, Prisma.SeatingTableUncheckedCreateWithoutAssignmentsInput>;
};
export type SeatingTableUpsertWithoutAssignmentsInput = {
    update: Prisma.XOR<Prisma.SeatingTableUpdateWithoutAssignmentsInput, Prisma.SeatingTableUncheckedUpdateWithoutAssignmentsInput>;
    create: Prisma.XOR<Prisma.SeatingTableCreateWithoutAssignmentsInput, Prisma.SeatingTableUncheckedCreateWithoutAssignmentsInput>;
    where?: Prisma.SeatingTableWhereInput;
};
export type SeatingTableUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: Prisma.SeatingTableWhereInput;
    data: Prisma.XOR<Prisma.SeatingTableUpdateWithoutAssignmentsInput, Prisma.SeatingTableUncheckedUpdateWithoutAssignmentsInput>;
};
export type SeatingTableUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shape?: Prisma.EnumSeatingTableShapeFieldUpdateOperationsInput | $Enums.SeatingTableShape;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutSeatingTablesNestedInput;
    event?: Prisma.EventUpdateOneWithoutSeatingTablesNestedInput;
};
export type SeatingTableUncheckedUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shape?: Prisma.EnumSeatingTableShapeFieldUpdateOperationsInput | $Enums.SeatingTableShape;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeatingTableCreateManyWeddingInput = {
    id?: string;
    eventId?: string | null;
    eventKey?: string;
    name: string;
    code: string;
    capacity?: number;
    zone?: string | null;
    shape?: $Enums.SeatingTableShape;
    note?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SeatingTableUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shape?: Prisma.EnumSeatingTableShapeFieldUpdateOperationsInput | $Enums.SeatingTableShape;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneWithoutSeatingTablesNestedInput;
    assignments?: Prisma.SeatAssignmentUpdateManyWithoutTableNestedInput;
};
export type SeatingTableUncheckedUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shape?: Prisma.EnumSeatingTableShapeFieldUpdateOperationsInput | $Enums.SeatingTableShape;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.SeatAssignmentUncheckedUpdateManyWithoutTableNestedInput;
};
export type SeatingTableUncheckedUpdateManyWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shape?: Prisma.EnumSeatingTableShapeFieldUpdateOperationsInput | $Enums.SeatingTableShape;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeatingTableCreateManyEventInput = {
    id?: string;
    weddingId: string;
    eventKey?: string;
    name: string;
    code: string;
    capacity?: number;
    zone?: string | null;
    shape?: $Enums.SeatingTableShape;
    note?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SeatingTableUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shape?: Prisma.EnumSeatingTableShapeFieldUpdateOperationsInput | $Enums.SeatingTableShape;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutSeatingTablesNestedInput;
    assignments?: Prisma.SeatAssignmentUpdateManyWithoutTableNestedInput;
};
export type SeatingTableUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shape?: Prisma.EnumSeatingTableShapeFieldUpdateOperationsInput | $Enums.SeatingTableShape;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.SeatAssignmentUncheckedUpdateManyWithoutTableNestedInput;
};
export type SeatingTableUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shape?: Prisma.EnumSeatingTableShapeFieldUpdateOperationsInput | $Enums.SeatingTableShape;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeatingTableCountOutputType = {
    assignments: number;
};
export type SeatingTableCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignments?: boolean | SeatingTableCountOutputTypeCountAssignmentsArgs;
};
export type SeatingTableCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatingTableCountOutputTypeSelect<ExtArgs> | null;
};
export type SeatingTableCountOutputTypeCountAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SeatAssignmentWhereInput;
};
export type SeatingTableSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    eventId?: boolean;
    eventKey?: boolean;
    name?: boolean;
    code?: boolean;
    capacity?: boolean;
    zone?: boolean;
    shape?: boolean;
    note?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.SeatingTable$eventArgs<ExtArgs>;
    assignments?: boolean | Prisma.SeatingTable$assignmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.SeatingTableCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["seatingTable"]>;
export type SeatingTableSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    eventId?: boolean;
    eventKey?: boolean;
    name?: boolean;
    code?: boolean;
    capacity?: boolean;
    zone?: boolean;
    shape?: boolean;
    note?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.SeatingTable$eventArgs<ExtArgs>;
}, ExtArgs["result"]["seatingTable"]>;
export type SeatingTableSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    eventId?: boolean;
    eventKey?: boolean;
    name?: boolean;
    code?: boolean;
    capacity?: boolean;
    zone?: boolean;
    shape?: boolean;
    note?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.SeatingTable$eventArgs<ExtArgs>;
}, ExtArgs["result"]["seatingTable"]>;
export type SeatingTableSelectScalar = {
    id?: boolean;
    weddingId?: boolean;
    eventId?: boolean;
    eventKey?: boolean;
    name?: boolean;
    code?: boolean;
    capacity?: boolean;
    zone?: boolean;
    shape?: boolean;
    note?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SeatingTableOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "weddingId" | "eventId" | "eventKey" | "name" | "code" | "capacity" | "zone" | "shape" | "note" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["seatingTable"]>;
export type SeatingTableInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.SeatingTable$eventArgs<ExtArgs>;
    assignments?: boolean | Prisma.SeatingTable$assignmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.SeatingTableCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SeatingTableIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.SeatingTable$eventArgs<ExtArgs>;
};
export type SeatingTableIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.SeatingTable$eventArgs<ExtArgs>;
};
export type $SeatingTablePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SeatingTable";
    objects: {
        wedding: Prisma.$WeddingPayload<ExtArgs>;
        event: Prisma.$EventPayload<ExtArgs> | null;
        assignments: Prisma.$SeatAssignmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        weddingId: string;
        eventId: string | null;
        eventKey: string;
        name: string;
        code: string;
        capacity: number;
        zone: string | null;
        shape: $Enums.SeatingTableShape;
        note: string | null;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["seatingTable"]>;
    composites: {};
};
export type SeatingTableGetPayload<S extends boolean | null | undefined | SeatingTableDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SeatingTablePayload, S>;
export type SeatingTableCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SeatingTableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SeatingTableCountAggregateInputType | true;
};
export interface SeatingTableDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SeatingTable'];
        meta: {
            name: 'SeatingTable';
        };
    };
    findUnique<T extends SeatingTableFindUniqueArgs>(args: Prisma.SelectSubset<T, SeatingTableFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SeatingTableClient<runtime.Types.Result.GetResult<Prisma.$SeatingTablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SeatingTableFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SeatingTableFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SeatingTableClient<runtime.Types.Result.GetResult<Prisma.$SeatingTablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SeatingTableFindFirstArgs>(args?: Prisma.SelectSubset<T, SeatingTableFindFirstArgs<ExtArgs>>): Prisma.Prisma__SeatingTableClient<runtime.Types.Result.GetResult<Prisma.$SeatingTablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SeatingTableFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SeatingTableFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SeatingTableClient<runtime.Types.Result.GetResult<Prisma.$SeatingTablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SeatingTableFindManyArgs>(args?: Prisma.SelectSubset<T, SeatingTableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SeatingTablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SeatingTableCreateArgs>(args: Prisma.SelectSubset<T, SeatingTableCreateArgs<ExtArgs>>): Prisma.Prisma__SeatingTableClient<runtime.Types.Result.GetResult<Prisma.$SeatingTablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SeatingTableCreateManyArgs>(args?: Prisma.SelectSubset<T, SeatingTableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SeatingTableCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SeatingTableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SeatingTablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SeatingTableDeleteArgs>(args: Prisma.SelectSubset<T, SeatingTableDeleteArgs<ExtArgs>>): Prisma.Prisma__SeatingTableClient<runtime.Types.Result.GetResult<Prisma.$SeatingTablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SeatingTableUpdateArgs>(args: Prisma.SelectSubset<T, SeatingTableUpdateArgs<ExtArgs>>): Prisma.Prisma__SeatingTableClient<runtime.Types.Result.GetResult<Prisma.$SeatingTablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SeatingTableDeleteManyArgs>(args?: Prisma.SelectSubset<T, SeatingTableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SeatingTableUpdateManyArgs>(args: Prisma.SelectSubset<T, SeatingTableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SeatingTableUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SeatingTableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SeatingTablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SeatingTableUpsertArgs>(args: Prisma.SelectSubset<T, SeatingTableUpsertArgs<ExtArgs>>): Prisma.Prisma__SeatingTableClient<runtime.Types.Result.GetResult<Prisma.$SeatingTablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SeatingTableCountArgs>(args?: Prisma.Subset<T, SeatingTableCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SeatingTableCountAggregateOutputType> : number>;
    aggregate<T extends SeatingTableAggregateArgs>(args: Prisma.Subset<T, SeatingTableAggregateArgs>): Prisma.PrismaPromise<GetSeatingTableAggregateType<T>>;
    groupBy<T extends SeatingTableGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SeatingTableGroupByArgs['orderBy'];
    } : {
        orderBy?: SeatingTableGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SeatingTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatingTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SeatingTableFieldRefs;
}
export interface Prisma__SeatingTableClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wedding<T extends Prisma.WeddingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WeddingDefaultArgs<ExtArgs>>): Prisma.Prisma__WeddingClient<runtime.Types.Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    event<T extends Prisma.SeatingTable$eventArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SeatingTable$eventArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    assignments<T extends Prisma.SeatingTable$assignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SeatingTable$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SeatAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SeatingTableFieldRefs {
    readonly id: Prisma.FieldRef<"SeatingTable", 'String'>;
    readonly weddingId: Prisma.FieldRef<"SeatingTable", 'String'>;
    readonly eventId: Prisma.FieldRef<"SeatingTable", 'String'>;
    readonly eventKey: Prisma.FieldRef<"SeatingTable", 'String'>;
    readonly name: Prisma.FieldRef<"SeatingTable", 'String'>;
    readonly code: Prisma.FieldRef<"SeatingTable", 'String'>;
    readonly capacity: Prisma.FieldRef<"SeatingTable", 'Int'>;
    readonly zone: Prisma.FieldRef<"SeatingTable", 'String'>;
    readonly shape: Prisma.FieldRef<"SeatingTable", 'SeatingTableShape'>;
    readonly note: Prisma.FieldRef<"SeatingTable", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"SeatingTable", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"SeatingTable", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SeatingTable", 'DateTime'>;
}
export type SeatingTableFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatingTableSelect<ExtArgs> | null;
    omit?: Prisma.SeatingTableOmit<ExtArgs> | null;
    include?: Prisma.SeatingTableInclude<ExtArgs> | null;
    where: Prisma.SeatingTableWhereUniqueInput;
};
export type SeatingTableFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatingTableSelect<ExtArgs> | null;
    omit?: Prisma.SeatingTableOmit<ExtArgs> | null;
    include?: Prisma.SeatingTableInclude<ExtArgs> | null;
    where: Prisma.SeatingTableWhereUniqueInput;
};
export type SeatingTableFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatingTableSelect<ExtArgs> | null;
    omit?: Prisma.SeatingTableOmit<ExtArgs> | null;
    include?: Prisma.SeatingTableInclude<ExtArgs> | null;
    where?: Prisma.SeatingTableWhereInput;
    orderBy?: Prisma.SeatingTableOrderByWithRelationInput | Prisma.SeatingTableOrderByWithRelationInput[];
    cursor?: Prisma.SeatingTableWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SeatingTableScalarFieldEnum | Prisma.SeatingTableScalarFieldEnum[];
};
export type SeatingTableFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatingTableSelect<ExtArgs> | null;
    omit?: Prisma.SeatingTableOmit<ExtArgs> | null;
    include?: Prisma.SeatingTableInclude<ExtArgs> | null;
    where?: Prisma.SeatingTableWhereInput;
    orderBy?: Prisma.SeatingTableOrderByWithRelationInput | Prisma.SeatingTableOrderByWithRelationInput[];
    cursor?: Prisma.SeatingTableWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SeatingTableScalarFieldEnum | Prisma.SeatingTableScalarFieldEnum[];
};
export type SeatingTableFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatingTableSelect<ExtArgs> | null;
    omit?: Prisma.SeatingTableOmit<ExtArgs> | null;
    include?: Prisma.SeatingTableInclude<ExtArgs> | null;
    where?: Prisma.SeatingTableWhereInput;
    orderBy?: Prisma.SeatingTableOrderByWithRelationInput | Prisma.SeatingTableOrderByWithRelationInput[];
    cursor?: Prisma.SeatingTableWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SeatingTableScalarFieldEnum | Prisma.SeatingTableScalarFieldEnum[];
};
export type SeatingTableCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatingTableSelect<ExtArgs> | null;
    omit?: Prisma.SeatingTableOmit<ExtArgs> | null;
    include?: Prisma.SeatingTableInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SeatingTableCreateInput, Prisma.SeatingTableUncheckedCreateInput>;
};
export type SeatingTableCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SeatingTableCreateManyInput | Prisma.SeatingTableCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SeatingTableCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatingTableSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SeatingTableOmit<ExtArgs> | null;
    data: Prisma.SeatingTableCreateManyInput | Prisma.SeatingTableCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SeatingTableIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SeatingTableUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatingTableSelect<ExtArgs> | null;
    omit?: Prisma.SeatingTableOmit<ExtArgs> | null;
    include?: Prisma.SeatingTableInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SeatingTableUpdateInput, Prisma.SeatingTableUncheckedUpdateInput>;
    where: Prisma.SeatingTableWhereUniqueInput;
};
export type SeatingTableUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SeatingTableUpdateManyMutationInput, Prisma.SeatingTableUncheckedUpdateManyInput>;
    where?: Prisma.SeatingTableWhereInput;
    limit?: number;
};
export type SeatingTableUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatingTableSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SeatingTableOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SeatingTableUpdateManyMutationInput, Prisma.SeatingTableUncheckedUpdateManyInput>;
    where?: Prisma.SeatingTableWhereInput;
    limit?: number;
    include?: Prisma.SeatingTableIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SeatingTableUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatingTableSelect<ExtArgs> | null;
    omit?: Prisma.SeatingTableOmit<ExtArgs> | null;
    include?: Prisma.SeatingTableInclude<ExtArgs> | null;
    where: Prisma.SeatingTableWhereUniqueInput;
    create: Prisma.XOR<Prisma.SeatingTableCreateInput, Prisma.SeatingTableUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SeatingTableUpdateInput, Prisma.SeatingTableUncheckedUpdateInput>;
};
export type SeatingTableDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatingTableSelect<ExtArgs> | null;
    omit?: Prisma.SeatingTableOmit<ExtArgs> | null;
    include?: Prisma.SeatingTableInclude<ExtArgs> | null;
    where: Prisma.SeatingTableWhereUniqueInput;
};
export type SeatingTableDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SeatingTableWhereInput;
    limit?: number;
};
export type SeatingTable$eventArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
};
export type SeatingTable$assignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.SeatAssignmentOmit<ExtArgs> | null;
    include?: Prisma.SeatAssignmentInclude<ExtArgs> | null;
    where?: Prisma.SeatAssignmentWhereInput;
    orderBy?: Prisma.SeatAssignmentOrderByWithRelationInput | Prisma.SeatAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.SeatAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SeatAssignmentScalarFieldEnum | Prisma.SeatAssignmentScalarFieldEnum[];
};
export type SeatingTableDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatingTableSelect<ExtArgs> | null;
    omit?: Prisma.SeatingTableOmit<ExtArgs> | null;
    include?: Prisma.SeatingTableInclude<ExtArgs> | null;
};
