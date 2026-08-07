import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SeatAssignmentModel = runtime.Types.Result.DefaultSelection<Prisma.$SeatAssignmentPayload>;
export type AggregateSeatAssignment = {
    _count: SeatAssignmentCountAggregateOutputType | null;
    _avg: SeatAssignmentAvgAggregateOutputType | null;
    _sum: SeatAssignmentSumAggregateOutputType | null;
    _min: SeatAssignmentMinAggregateOutputType | null;
    _max: SeatAssignmentMaxAggregateOutputType | null;
};
export type SeatAssignmentAvgAggregateOutputType = {
    seatCount: number | null;
};
export type SeatAssignmentSumAggregateOutputType = {
    seatCount: number | null;
};
export type SeatAssignmentMinAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    eventId: string | null;
    eventKey: string | null;
    tableId: string | null;
    guestId: string | null;
    seatCount: number | null;
    note: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SeatAssignmentMaxAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    eventId: string | null;
    eventKey: string | null;
    tableId: string | null;
    guestId: string | null;
    seatCount: number | null;
    note: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SeatAssignmentCountAggregateOutputType = {
    id: number;
    weddingId: number;
    eventId: number;
    eventKey: number;
    tableId: number;
    guestId: number;
    seatCount: number;
    note: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SeatAssignmentAvgAggregateInputType = {
    seatCount?: true;
};
export type SeatAssignmentSumAggregateInputType = {
    seatCount?: true;
};
export type SeatAssignmentMinAggregateInputType = {
    id?: true;
    weddingId?: true;
    eventId?: true;
    eventKey?: true;
    tableId?: true;
    guestId?: true;
    seatCount?: true;
    note?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SeatAssignmentMaxAggregateInputType = {
    id?: true;
    weddingId?: true;
    eventId?: true;
    eventKey?: true;
    tableId?: true;
    guestId?: true;
    seatCount?: true;
    note?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SeatAssignmentCountAggregateInputType = {
    id?: true;
    weddingId?: true;
    eventId?: true;
    eventKey?: true;
    tableId?: true;
    guestId?: true;
    seatCount?: true;
    note?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SeatAssignmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SeatAssignmentWhereInput;
    orderBy?: Prisma.SeatAssignmentOrderByWithRelationInput | Prisma.SeatAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.SeatAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SeatAssignmentCountAggregateInputType;
    _avg?: SeatAssignmentAvgAggregateInputType;
    _sum?: SeatAssignmentSumAggregateInputType;
    _min?: SeatAssignmentMinAggregateInputType;
    _max?: SeatAssignmentMaxAggregateInputType;
};
export type GetSeatAssignmentAggregateType<T extends SeatAssignmentAggregateArgs> = {
    [P in keyof T & keyof AggregateSeatAssignment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSeatAssignment[P]> : Prisma.GetScalarType<T[P], AggregateSeatAssignment[P]>;
};
export type SeatAssignmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SeatAssignmentWhereInput;
    orderBy?: Prisma.SeatAssignmentOrderByWithAggregationInput | Prisma.SeatAssignmentOrderByWithAggregationInput[];
    by: Prisma.SeatAssignmentScalarFieldEnum[] | Prisma.SeatAssignmentScalarFieldEnum;
    having?: Prisma.SeatAssignmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SeatAssignmentCountAggregateInputType | true;
    _avg?: SeatAssignmentAvgAggregateInputType;
    _sum?: SeatAssignmentSumAggregateInputType;
    _min?: SeatAssignmentMinAggregateInputType;
    _max?: SeatAssignmentMaxAggregateInputType;
};
export type SeatAssignmentGroupByOutputType = {
    id: string;
    weddingId: string;
    eventId: string | null;
    eventKey: string;
    tableId: string;
    guestId: string;
    seatCount: number;
    note: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SeatAssignmentCountAggregateOutputType | null;
    _avg: SeatAssignmentAvgAggregateOutputType | null;
    _sum: SeatAssignmentSumAggregateOutputType | null;
    _min: SeatAssignmentMinAggregateOutputType | null;
    _max: SeatAssignmentMaxAggregateOutputType | null;
};
export type GetSeatAssignmentGroupByPayload<T extends SeatAssignmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SeatAssignmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SeatAssignmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SeatAssignmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SeatAssignmentGroupByOutputType[P]>;
}>>;
export type SeatAssignmentWhereInput = {
    AND?: Prisma.SeatAssignmentWhereInput | Prisma.SeatAssignmentWhereInput[];
    OR?: Prisma.SeatAssignmentWhereInput[];
    NOT?: Prisma.SeatAssignmentWhereInput | Prisma.SeatAssignmentWhereInput[];
    id?: Prisma.StringFilter<"SeatAssignment"> | string;
    weddingId?: Prisma.StringFilter<"SeatAssignment"> | string;
    eventId?: Prisma.StringNullableFilter<"SeatAssignment"> | string | null;
    eventKey?: Prisma.StringFilter<"SeatAssignment"> | string;
    tableId?: Prisma.StringFilter<"SeatAssignment"> | string;
    guestId?: Prisma.StringFilter<"SeatAssignment"> | string;
    seatCount?: Prisma.IntFilter<"SeatAssignment"> | number;
    note?: Prisma.StringNullableFilter<"SeatAssignment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SeatAssignment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SeatAssignment"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
    event?: Prisma.XOR<Prisma.EventNullableScalarRelationFilter, Prisma.EventWhereInput> | null;
    table?: Prisma.XOR<Prisma.SeatingTableScalarRelationFilter, Prisma.SeatingTableWhereInput>;
    guest?: Prisma.XOR<Prisma.GuestScalarRelationFilter, Prisma.GuestWhereInput>;
};
export type SeatAssignmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    tableId?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    seatCount?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    wedding?: Prisma.WeddingOrderByWithRelationInput;
    event?: Prisma.EventOrderByWithRelationInput;
    table?: Prisma.SeatingTableOrderByWithRelationInput;
    guest?: Prisma.GuestOrderByWithRelationInput;
};
export type SeatAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    guestId_eventKey?: Prisma.SeatAssignmentGuestIdEventKeyCompoundUniqueInput;
    AND?: Prisma.SeatAssignmentWhereInput | Prisma.SeatAssignmentWhereInput[];
    OR?: Prisma.SeatAssignmentWhereInput[];
    NOT?: Prisma.SeatAssignmentWhereInput | Prisma.SeatAssignmentWhereInput[];
    weddingId?: Prisma.StringFilter<"SeatAssignment"> | string;
    eventId?: Prisma.StringNullableFilter<"SeatAssignment"> | string | null;
    eventKey?: Prisma.StringFilter<"SeatAssignment"> | string;
    tableId?: Prisma.StringFilter<"SeatAssignment"> | string;
    guestId?: Prisma.StringFilter<"SeatAssignment"> | string;
    seatCount?: Prisma.IntFilter<"SeatAssignment"> | number;
    note?: Prisma.StringNullableFilter<"SeatAssignment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SeatAssignment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SeatAssignment"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
    event?: Prisma.XOR<Prisma.EventNullableScalarRelationFilter, Prisma.EventWhereInput> | null;
    table?: Prisma.XOR<Prisma.SeatingTableScalarRelationFilter, Prisma.SeatingTableWhereInput>;
    guest?: Prisma.XOR<Prisma.GuestScalarRelationFilter, Prisma.GuestWhereInput>;
}, "id" | "guestId_eventKey">;
export type SeatAssignmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    tableId?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    seatCount?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SeatAssignmentCountOrderByAggregateInput;
    _avg?: Prisma.SeatAssignmentAvgOrderByAggregateInput;
    _max?: Prisma.SeatAssignmentMaxOrderByAggregateInput;
    _min?: Prisma.SeatAssignmentMinOrderByAggregateInput;
    _sum?: Prisma.SeatAssignmentSumOrderByAggregateInput;
};
export type SeatAssignmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.SeatAssignmentScalarWhereWithAggregatesInput | Prisma.SeatAssignmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.SeatAssignmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SeatAssignmentScalarWhereWithAggregatesInput | Prisma.SeatAssignmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SeatAssignment"> | string;
    weddingId?: Prisma.StringWithAggregatesFilter<"SeatAssignment"> | string;
    eventId?: Prisma.StringNullableWithAggregatesFilter<"SeatAssignment"> | string | null;
    eventKey?: Prisma.StringWithAggregatesFilter<"SeatAssignment"> | string;
    tableId?: Prisma.StringWithAggregatesFilter<"SeatAssignment"> | string;
    guestId?: Prisma.StringWithAggregatesFilter<"SeatAssignment"> | string;
    seatCount?: Prisma.IntWithAggregatesFilter<"SeatAssignment"> | number;
    note?: Prisma.StringNullableWithAggregatesFilter<"SeatAssignment"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SeatAssignment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SeatAssignment"> | Date | string;
};
export type SeatAssignmentCreateInput = {
    id?: string;
    eventKey?: string;
    seatCount?: number;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutSeatAssignmentsInput;
    event?: Prisma.EventCreateNestedOneWithoutSeatAssignmentsInput;
    table: Prisma.SeatingTableCreateNestedOneWithoutAssignmentsInput;
    guest: Prisma.GuestCreateNestedOneWithoutSeatAssignmentsInput;
};
export type SeatAssignmentUncheckedCreateInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    tableId: string;
    guestId: string;
    seatCount?: number;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SeatAssignmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    seatCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutSeatAssignmentsNestedInput;
    event?: Prisma.EventUpdateOneWithoutSeatAssignmentsNestedInput;
    table?: Prisma.SeatingTableUpdateOneRequiredWithoutAssignmentsNestedInput;
    guest?: Prisma.GuestUpdateOneRequiredWithoutSeatAssignmentsNestedInput;
};
export type SeatAssignmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    tableId?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    seatCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeatAssignmentCreateManyInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    tableId: string;
    guestId: string;
    seatCount?: number;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SeatAssignmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    seatCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeatAssignmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    tableId?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    seatCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeatAssignmentListRelationFilter = {
    every?: Prisma.SeatAssignmentWhereInput;
    some?: Prisma.SeatAssignmentWhereInput;
    none?: Prisma.SeatAssignmentWhereInput;
};
export type SeatAssignmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SeatAssignmentGuestIdEventKeyCompoundUniqueInput = {
    guestId: string;
    eventKey: string;
};
export type SeatAssignmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    tableId?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    seatCount?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SeatAssignmentAvgOrderByAggregateInput = {
    seatCount?: Prisma.SortOrder;
};
export type SeatAssignmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    tableId?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    seatCount?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SeatAssignmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    tableId?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    seatCount?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SeatAssignmentSumOrderByAggregateInput = {
    seatCount?: Prisma.SortOrder;
};
export type SeatAssignmentCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutWeddingInput, Prisma.SeatAssignmentUncheckedCreateWithoutWeddingInput> | Prisma.SeatAssignmentCreateWithoutWeddingInput[] | Prisma.SeatAssignmentUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.SeatAssignmentCreateOrConnectWithoutWeddingInput | Prisma.SeatAssignmentCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.SeatAssignmentCreateManyWeddingInputEnvelope;
    connect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
};
export type SeatAssignmentUncheckedCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutWeddingInput, Prisma.SeatAssignmentUncheckedCreateWithoutWeddingInput> | Prisma.SeatAssignmentCreateWithoutWeddingInput[] | Prisma.SeatAssignmentUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.SeatAssignmentCreateOrConnectWithoutWeddingInput | Prisma.SeatAssignmentCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.SeatAssignmentCreateManyWeddingInputEnvelope;
    connect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
};
export type SeatAssignmentUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutWeddingInput, Prisma.SeatAssignmentUncheckedCreateWithoutWeddingInput> | Prisma.SeatAssignmentCreateWithoutWeddingInput[] | Prisma.SeatAssignmentUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.SeatAssignmentCreateOrConnectWithoutWeddingInput | Prisma.SeatAssignmentCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.SeatAssignmentUpsertWithWhereUniqueWithoutWeddingInput | Prisma.SeatAssignmentUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.SeatAssignmentCreateManyWeddingInputEnvelope;
    set?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    disconnect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    delete?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    connect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    update?: Prisma.SeatAssignmentUpdateWithWhereUniqueWithoutWeddingInput | Prisma.SeatAssignmentUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.SeatAssignmentUpdateManyWithWhereWithoutWeddingInput | Prisma.SeatAssignmentUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.SeatAssignmentScalarWhereInput | Prisma.SeatAssignmentScalarWhereInput[];
};
export type SeatAssignmentUncheckedUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutWeddingInput, Prisma.SeatAssignmentUncheckedCreateWithoutWeddingInput> | Prisma.SeatAssignmentCreateWithoutWeddingInput[] | Prisma.SeatAssignmentUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.SeatAssignmentCreateOrConnectWithoutWeddingInput | Prisma.SeatAssignmentCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.SeatAssignmentUpsertWithWhereUniqueWithoutWeddingInput | Prisma.SeatAssignmentUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.SeatAssignmentCreateManyWeddingInputEnvelope;
    set?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    disconnect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    delete?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    connect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    update?: Prisma.SeatAssignmentUpdateWithWhereUniqueWithoutWeddingInput | Prisma.SeatAssignmentUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.SeatAssignmentUpdateManyWithWhereWithoutWeddingInput | Prisma.SeatAssignmentUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.SeatAssignmentScalarWhereInput | Prisma.SeatAssignmentScalarWhereInput[];
};
export type SeatAssignmentCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutEventInput, Prisma.SeatAssignmentUncheckedCreateWithoutEventInput> | Prisma.SeatAssignmentCreateWithoutEventInput[] | Prisma.SeatAssignmentUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.SeatAssignmentCreateOrConnectWithoutEventInput | Prisma.SeatAssignmentCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.SeatAssignmentCreateManyEventInputEnvelope;
    connect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
};
export type SeatAssignmentUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutEventInput, Prisma.SeatAssignmentUncheckedCreateWithoutEventInput> | Prisma.SeatAssignmentCreateWithoutEventInput[] | Prisma.SeatAssignmentUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.SeatAssignmentCreateOrConnectWithoutEventInput | Prisma.SeatAssignmentCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.SeatAssignmentCreateManyEventInputEnvelope;
    connect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
};
export type SeatAssignmentUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutEventInput, Prisma.SeatAssignmentUncheckedCreateWithoutEventInput> | Prisma.SeatAssignmentCreateWithoutEventInput[] | Prisma.SeatAssignmentUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.SeatAssignmentCreateOrConnectWithoutEventInput | Prisma.SeatAssignmentCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.SeatAssignmentUpsertWithWhereUniqueWithoutEventInput | Prisma.SeatAssignmentUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.SeatAssignmentCreateManyEventInputEnvelope;
    set?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    disconnect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    delete?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    connect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    update?: Prisma.SeatAssignmentUpdateWithWhereUniqueWithoutEventInput | Prisma.SeatAssignmentUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.SeatAssignmentUpdateManyWithWhereWithoutEventInput | Prisma.SeatAssignmentUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.SeatAssignmentScalarWhereInput | Prisma.SeatAssignmentScalarWhereInput[];
};
export type SeatAssignmentUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutEventInput, Prisma.SeatAssignmentUncheckedCreateWithoutEventInput> | Prisma.SeatAssignmentCreateWithoutEventInput[] | Prisma.SeatAssignmentUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.SeatAssignmentCreateOrConnectWithoutEventInput | Prisma.SeatAssignmentCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.SeatAssignmentUpsertWithWhereUniqueWithoutEventInput | Prisma.SeatAssignmentUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.SeatAssignmentCreateManyEventInputEnvelope;
    set?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    disconnect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    delete?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    connect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    update?: Prisma.SeatAssignmentUpdateWithWhereUniqueWithoutEventInput | Prisma.SeatAssignmentUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.SeatAssignmentUpdateManyWithWhereWithoutEventInput | Prisma.SeatAssignmentUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.SeatAssignmentScalarWhereInput | Prisma.SeatAssignmentScalarWhereInput[];
};
export type SeatAssignmentCreateNestedManyWithoutGuestInput = {
    create?: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutGuestInput, Prisma.SeatAssignmentUncheckedCreateWithoutGuestInput> | Prisma.SeatAssignmentCreateWithoutGuestInput[] | Prisma.SeatAssignmentUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.SeatAssignmentCreateOrConnectWithoutGuestInput | Prisma.SeatAssignmentCreateOrConnectWithoutGuestInput[];
    createMany?: Prisma.SeatAssignmentCreateManyGuestInputEnvelope;
    connect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
};
export type SeatAssignmentUncheckedCreateNestedManyWithoutGuestInput = {
    create?: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutGuestInput, Prisma.SeatAssignmentUncheckedCreateWithoutGuestInput> | Prisma.SeatAssignmentCreateWithoutGuestInput[] | Prisma.SeatAssignmentUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.SeatAssignmentCreateOrConnectWithoutGuestInput | Prisma.SeatAssignmentCreateOrConnectWithoutGuestInput[];
    createMany?: Prisma.SeatAssignmentCreateManyGuestInputEnvelope;
    connect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
};
export type SeatAssignmentUpdateManyWithoutGuestNestedInput = {
    create?: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutGuestInput, Prisma.SeatAssignmentUncheckedCreateWithoutGuestInput> | Prisma.SeatAssignmentCreateWithoutGuestInput[] | Prisma.SeatAssignmentUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.SeatAssignmentCreateOrConnectWithoutGuestInput | Prisma.SeatAssignmentCreateOrConnectWithoutGuestInput[];
    upsert?: Prisma.SeatAssignmentUpsertWithWhereUniqueWithoutGuestInput | Prisma.SeatAssignmentUpsertWithWhereUniqueWithoutGuestInput[];
    createMany?: Prisma.SeatAssignmentCreateManyGuestInputEnvelope;
    set?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    disconnect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    delete?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    connect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    update?: Prisma.SeatAssignmentUpdateWithWhereUniqueWithoutGuestInput | Prisma.SeatAssignmentUpdateWithWhereUniqueWithoutGuestInput[];
    updateMany?: Prisma.SeatAssignmentUpdateManyWithWhereWithoutGuestInput | Prisma.SeatAssignmentUpdateManyWithWhereWithoutGuestInput[];
    deleteMany?: Prisma.SeatAssignmentScalarWhereInput | Prisma.SeatAssignmentScalarWhereInput[];
};
export type SeatAssignmentUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutGuestInput, Prisma.SeatAssignmentUncheckedCreateWithoutGuestInput> | Prisma.SeatAssignmentCreateWithoutGuestInput[] | Prisma.SeatAssignmentUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.SeatAssignmentCreateOrConnectWithoutGuestInput | Prisma.SeatAssignmentCreateOrConnectWithoutGuestInput[];
    upsert?: Prisma.SeatAssignmentUpsertWithWhereUniqueWithoutGuestInput | Prisma.SeatAssignmentUpsertWithWhereUniqueWithoutGuestInput[];
    createMany?: Prisma.SeatAssignmentCreateManyGuestInputEnvelope;
    set?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    disconnect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    delete?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    connect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    update?: Prisma.SeatAssignmentUpdateWithWhereUniqueWithoutGuestInput | Prisma.SeatAssignmentUpdateWithWhereUniqueWithoutGuestInput[];
    updateMany?: Prisma.SeatAssignmentUpdateManyWithWhereWithoutGuestInput | Prisma.SeatAssignmentUpdateManyWithWhereWithoutGuestInput[];
    deleteMany?: Prisma.SeatAssignmentScalarWhereInput | Prisma.SeatAssignmentScalarWhereInput[];
};
export type SeatAssignmentCreateNestedManyWithoutTableInput = {
    create?: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutTableInput, Prisma.SeatAssignmentUncheckedCreateWithoutTableInput> | Prisma.SeatAssignmentCreateWithoutTableInput[] | Prisma.SeatAssignmentUncheckedCreateWithoutTableInput[];
    connectOrCreate?: Prisma.SeatAssignmentCreateOrConnectWithoutTableInput | Prisma.SeatAssignmentCreateOrConnectWithoutTableInput[];
    createMany?: Prisma.SeatAssignmentCreateManyTableInputEnvelope;
    connect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
};
export type SeatAssignmentUncheckedCreateNestedManyWithoutTableInput = {
    create?: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutTableInput, Prisma.SeatAssignmentUncheckedCreateWithoutTableInput> | Prisma.SeatAssignmentCreateWithoutTableInput[] | Prisma.SeatAssignmentUncheckedCreateWithoutTableInput[];
    connectOrCreate?: Prisma.SeatAssignmentCreateOrConnectWithoutTableInput | Prisma.SeatAssignmentCreateOrConnectWithoutTableInput[];
    createMany?: Prisma.SeatAssignmentCreateManyTableInputEnvelope;
    connect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
};
export type SeatAssignmentUpdateManyWithoutTableNestedInput = {
    create?: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutTableInput, Prisma.SeatAssignmentUncheckedCreateWithoutTableInput> | Prisma.SeatAssignmentCreateWithoutTableInput[] | Prisma.SeatAssignmentUncheckedCreateWithoutTableInput[];
    connectOrCreate?: Prisma.SeatAssignmentCreateOrConnectWithoutTableInput | Prisma.SeatAssignmentCreateOrConnectWithoutTableInput[];
    upsert?: Prisma.SeatAssignmentUpsertWithWhereUniqueWithoutTableInput | Prisma.SeatAssignmentUpsertWithWhereUniqueWithoutTableInput[];
    createMany?: Prisma.SeatAssignmentCreateManyTableInputEnvelope;
    set?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    disconnect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    delete?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    connect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    update?: Prisma.SeatAssignmentUpdateWithWhereUniqueWithoutTableInput | Prisma.SeatAssignmentUpdateWithWhereUniqueWithoutTableInput[];
    updateMany?: Prisma.SeatAssignmentUpdateManyWithWhereWithoutTableInput | Prisma.SeatAssignmentUpdateManyWithWhereWithoutTableInput[];
    deleteMany?: Prisma.SeatAssignmentScalarWhereInput | Prisma.SeatAssignmentScalarWhereInput[];
};
export type SeatAssignmentUncheckedUpdateManyWithoutTableNestedInput = {
    create?: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutTableInput, Prisma.SeatAssignmentUncheckedCreateWithoutTableInput> | Prisma.SeatAssignmentCreateWithoutTableInput[] | Prisma.SeatAssignmentUncheckedCreateWithoutTableInput[];
    connectOrCreate?: Prisma.SeatAssignmentCreateOrConnectWithoutTableInput | Prisma.SeatAssignmentCreateOrConnectWithoutTableInput[];
    upsert?: Prisma.SeatAssignmentUpsertWithWhereUniqueWithoutTableInput | Prisma.SeatAssignmentUpsertWithWhereUniqueWithoutTableInput[];
    createMany?: Prisma.SeatAssignmentCreateManyTableInputEnvelope;
    set?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    disconnect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    delete?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    connect?: Prisma.SeatAssignmentWhereUniqueInput | Prisma.SeatAssignmentWhereUniqueInput[];
    update?: Prisma.SeatAssignmentUpdateWithWhereUniqueWithoutTableInput | Prisma.SeatAssignmentUpdateWithWhereUniqueWithoutTableInput[];
    updateMany?: Prisma.SeatAssignmentUpdateManyWithWhereWithoutTableInput | Prisma.SeatAssignmentUpdateManyWithWhereWithoutTableInput[];
    deleteMany?: Prisma.SeatAssignmentScalarWhereInput | Prisma.SeatAssignmentScalarWhereInput[];
};
export type SeatAssignmentCreateWithoutWeddingInput = {
    id?: string;
    eventKey?: string;
    seatCount?: number;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event?: Prisma.EventCreateNestedOneWithoutSeatAssignmentsInput;
    table: Prisma.SeatingTableCreateNestedOneWithoutAssignmentsInput;
    guest: Prisma.GuestCreateNestedOneWithoutSeatAssignmentsInput;
};
export type SeatAssignmentUncheckedCreateWithoutWeddingInput = {
    id?: string;
    eventId?: string | null;
    eventKey?: string;
    tableId: string;
    guestId: string;
    seatCount?: number;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SeatAssignmentCreateOrConnectWithoutWeddingInput = {
    where: Prisma.SeatAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutWeddingInput, Prisma.SeatAssignmentUncheckedCreateWithoutWeddingInput>;
};
export type SeatAssignmentCreateManyWeddingInputEnvelope = {
    data: Prisma.SeatAssignmentCreateManyWeddingInput | Prisma.SeatAssignmentCreateManyWeddingInput[];
    skipDuplicates?: boolean;
};
export type SeatAssignmentUpsertWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.SeatAssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.SeatAssignmentUpdateWithoutWeddingInput, Prisma.SeatAssignmentUncheckedUpdateWithoutWeddingInput>;
    create: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutWeddingInput, Prisma.SeatAssignmentUncheckedCreateWithoutWeddingInput>;
};
export type SeatAssignmentUpdateWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.SeatAssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.SeatAssignmentUpdateWithoutWeddingInput, Prisma.SeatAssignmentUncheckedUpdateWithoutWeddingInput>;
};
export type SeatAssignmentUpdateManyWithWhereWithoutWeddingInput = {
    where: Prisma.SeatAssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.SeatAssignmentUpdateManyMutationInput, Prisma.SeatAssignmentUncheckedUpdateManyWithoutWeddingInput>;
};
export type SeatAssignmentScalarWhereInput = {
    AND?: Prisma.SeatAssignmentScalarWhereInput | Prisma.SeatAssignmentScalarWhereInput[];
    OR?: Prisma.SeatAssignmentScalarWhereInput[];
    NOT?: Prisma.SeatAssignmentScalarWhereInput | Prisma.SeatAssignmentScalarWhereInput[];
    id?: Prisma.StringFilter<"SeatAssignment"> | string;
    weddingId?: Prisma.StringFilter<"SeatAssignment"> | string;
    eventId?: Prisma.StringNullableFilter<"SeatAssignment"> | string | null;
    eventKey?: Prisma.StringFilter<"SeatAssignment"> | string;
    tableId?: Prisma.StringFilter<"SeatAssignment"> | string;
    guestId?: Prisma.StringFilter<"SeatAssignment"> | string;
    seatCount?: Prisma.IntFilter<"SeatAssignment"> | number;
    note?: Prisma.StringNullableFilter<"SeatAssignment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SeatAssignment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SeatAssignment"> | Date | string;
};
export type SeatAssignmentCreateWithoutEventInput = {
    id?: string;
    eventKey?: string;
    seatCount?: number;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutSeatAssignmentsInput;
    table: Prisma.SeatingTableCreateNestedOneWithoutAssignmentsInput;
    guest: Prisma.GuestCreateNestedOneWithoutSeatAssignmentsInput;
};
export type SeatAssignmentUncheckedCreateWithoutEventInput = {
    id?: string;
    weddingId: string;
    eventKey?: string;
    tableId: string;
    guestId: string;
    seatCount?: number;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SeatAssignmentCreateOrConnectWithoutEventInput = {
    where: Prisma.SeatAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutEventInput, Prisma.SeatAssignmentUncheckedCreateWithoutEventInput>;
};
export type SeatAssignmentCreateManyEventInputEnvelope = {
    data: Prisma.SeatAssignmentCreateManyEventInput | Prisma.SeatAssignmentCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type SeatAssignmentUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.SeatAssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.SeatAssignmentUpdateWithoutEventInput, Prisma.SeatAssignmentUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutEventInput, Prisma.SeatAssignmentUncheckedCreateWithoutEventInput>;
};
export type SeatAssignmentUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.SeatAssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.SeatAssignmentUpdateWithoutEventInput, Prisma.SeatAssignmentUncheckedUpdateWithoutEventInput>;
};
export type SeatAssignmentUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.SeatAssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.SeatAssignmentUpdateManyMutationInput, Prisma.SeatAssignmentUncheckedUpdateManyWithoutEventInput>;
};
export type SeatAssignmentCreateWithoutGuestInput = {
    id?: string;
    eventKey?: string;
    seatCount?: number;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutSeatAssignmentsInput;
    event?: Prisma.EventCreateNestedOneWithoutSeatAssignmentsInput;
    table: Prisma.SeatingTableCreateNestedOneWithoutAssignmentsInput;
};
export type SeatAssignmentUncheckedCreateWithoutGuestInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    tableId: string;
    seatCount?: number;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SeatAssignmentCreateOrConnectWithoutGuestInput = {
    where: Prisma.SeatAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutGuestInput, Prisma.SeatAssignmentUncheckedCreateWithoutGuestInput>;
};
export type SeatAssignmentCreateManyGuestInputEnvelope = {
    data: Prisma.SeatAssignmentCreateManyGuestInput | Prisma.SeatAssignmentCreateManyGuestInput[];
    skipDuplicates?: boolean;
};
export type SeatAssignmentUpsertWithWhereUniqueWithoutGuestInput = {
    where: Prisma.SeatAssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.SeatAssignmentUpdateWithoutGuestInput, Prisma.SeatAssignmentUncheckedUpdateWithoutGuestInput>;
    create: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutGuestInput, Prisma.SeatAssignmentUncheckedCreateWithoutGuestInput>;
};
export type SeatAssignmentUpdateWithWhereUniqueWithoutGuestInput = {
    where: Prisma.SeatAssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.SeatAssignmentUpdateWithoutGuestInput, Prisma.SeatAssignmentUncheckedUpdateWithoutGuestInput>;
};
export type SeatAssignmentUpdateManyWithWhereWithoutGuestInput = {
    where: Prisma.SeatAssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.SeatAssignmentUpdateManyMutationInput, Prisma.SeatAssignmentUncheckedUpdateManyWithoutGuestInput>;
};
export type SeatAssignmentCreateWithoutTableInput = {
    id?: string;
    eventKey?: string;
    seatCount?: number;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutSeatAssignmentsInput;
    event?: Prisma.EventCreateNestedOneWithoutSeatAssignmentsInput;
    guest: Prisma.GuestCreateNestedOneWithoutSeatAssignmentsInput;
};
export type SeatAssignmentUncheckedCreateWithoutTableInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    guestId: string;
    seatCount?: number;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SeatAssignmentCreateOrConnectWithoutTableInput = {
    where: Prisma.SeatAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutTableInput, Prisma.SeatAssignmentUncheckedCreateWithoutTableInput>;
};
export type SeatAssignmentCreateManyTableInputEnvelope = {
    data: Prisma.SeatAssignmentCreateManyTableInput | Prisma.SeatAssignmentCreateManyTableInput[];
    skipDuplicates?: boolean;
};
export type SeatAssignmentUpsertWithWhereUniqueWithoutTableInput = {
    where: Prisma.SeatAssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.SeatAssignmentUpdateWithoutTableInput, Prisma.SeatAssignmentUncheckedUpdateWithoutTableInput>;
    create: Prisma.XOR<Prisma.SeatAssignmentCreateWithoutTableInput, Prisma.SeatAssignmentUncheckedCreateWithoutTableInput>;
};
export type SeatAssignmentUpdateWithWhereUniqueWithoutTableInput = {
    where: Prisma.SeatAssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.SeatAssignmentUpdateWithoutTableInput, Prisma.SeatAssignmentUncheckedUpdateWithoutTableInput>;
};
export type SeatAssignmentUpdateManyWithWhereWithoutTableInput = {
    where: Prisma.SeatAssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.SeatAssignmentUpdateManyMutationInput, Prisma.SeatAssignmentUncheckedUpdateManyWithoutTableInput>;
};
export type SeatAssignmentCreateManyWeddingInput = {
    id?: string;
    eventId?: string | null;
    eventKey?: string;
    tableId: string;
    guestId: string;
    seatCount?: number;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SeatAssignmentUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    seatCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneWithoutSeatAssignmentsNestedInput;
    table?: Prisma.SeatingTableUpdateOneRequiredWithoutAssignmentsNestedInput;
    guest?: Prisma.GuestUpdateOneRequiredWithoutSeatAssignmentsNestedInput;
};
export type SeatAssignmentUncheckedUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    tableId?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    seatCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeatAssignmentUncheckedUpdateManyWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    tableId?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    seatCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeatAssignmentCreateManyEventInput = {
    id?: string;
    weddingId: string;
    eventKey?: string;
    tableId: string;
    guestId: string;
    seatCount?: number;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SeatAssignmentUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    seatCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutSeatAssignmentsNestedInput;
    table?: Prisma.SeatingTableUpdateOneRequiredWithoutAssignmentsNestedInput;
    guest?: Prisma.GuestUpdateOneRequiredWithoutSeatAssignmentsNestedInput;
};
export type SeatAssignmentUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    tableId?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    seatCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeatAssignmentUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    tableId?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    seatCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeatAssignmentCreateManyGuestInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    tableId: string;
    seatCount?: number;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SeatAssignmentUpdateWithoutGuestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    seatCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutSeatAssignmentsNestedInput;
    event?: Prisma.EventUpdateOneWithoutSeatAssignmentsNestedInput;
    table?: Prisma.SeatingTableUpdateOneRequiredWithoutAssignmentsNestedInput;
};
export type SeatAssignmentUncheckedUpdateWithoutGuestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    tableId?: Prisma.StringFieldUpdateOperationsInput | string;
    seatCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeatAssignmentUncheckedUpdateManyWithoutGuestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    tableId?: Prisma.StringFieldUpdateOperationsInput | string;
    seatCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeatAssignmentCreateManyTableInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    guestId: string;
    seatCount?: number;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SeatAssignmentUpdateWithoutTableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    seatCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutSeatAssignmentsNestedInput;
    event?: Prisma.EventUpdateOneWithoutSeatAssignmentsNestedInput;
    guest?: Prisma.GuestUpdateOneRequiredWithoutSeatAssignmentsNestedInput;
};
export type SeatAssignmentUncheckedUpdateWithoutTableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    seatCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeatAssignmentUncheckedUpdateManyWithoutTableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    seatCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeatAssignmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    eventId?: boolean;
    eventKey?: boolean;
    tableId?: boolean;
    guestId?: boolean;
    seatCount?: boolean;
    note?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.SeatAssignment$eventArgs<ExtArgs>;
    table?: boolean | Prisma.SeatingTableDefaultArgs<ExtArgs>;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["seatAssignment"]>;
export type SeatAssignmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    eventId?: boolean;
    eventKey?: boolean;
    tableId?: boolean;
    guestId?: boolean;
    seatCount?: boolean;
    note?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.SeatAssignment$eventArgs<ExtArgs>;
    table?: boolean | Prisma.SeatingTableDefaultArgs<ExtArgs>;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["seatAssignment"]>;
export type SeatAssignmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    eventId?: boolean;
    eventKey?: boolean;
    tableId?: boolean;
    guestId?: boolean;
    seatCount?: boolean;
    note?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.SeatAssignment$eventArgs<ExtArgs>;
    table?: boolean | Prisma.SeatingTableDefaultArgs<ExtArgs>;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["seatAssignment"]>;
export type SeatAssignmentSelectScalar = {
    id?: boolean;
    weddingId?: boolean;
    eventId?: boolean;
    eventKey?: boolean;
    tableId?: boolean;
    guestId?: boolean;
    seatCount?: boolean;
    note?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SeatAssignmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "weddingId" | "eventId" | "eventKey" | "tableId" | "guestId" | "seatCount" | "note" | "createdAt" | "updatedAt", ExtArgs["result"]["seatAssignment"]>;
export type SeatAssignmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.SeatAssignment$eventArgs<ExtArgs>;
    table?: boolean | Prisma.SeatingTableDefaultArgs<ExtArgs>;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
};
export type SeatAssignmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.SeatAssignment$eventArgs<ExtArgs>;
    table?: boolean | Prisma.SeatingTableDefaultArgs<ExtArgs>;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
};
export type SeatAssignmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.SeatAssignment$eventArgs<ExtArgs>;
    table?: boolean | Prisma.SeatingTableDefaultArgs<ExtArgs>;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
};
export type $SeatAssignmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SeatAssignment";
    objects: {
        wedding: Prisma.$WeddingPayload<ExtArgs>;
        event: Prisma.$EventPayload<ExtArgs> | null;
        table: Prisma.$SeatingTablePayload<ExtArgs>;
        guest: Prisma.$GuestPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        weddingId: string;
        eventId: string | null;
        eventKey: string;
        tableId: string;
        guestId: string;
        seatCount: number;
        note: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["seatAssignment"]>;
    composites: {};
};
export type SeatAssignmentGetPayload<S extends boolean | null | undefined | SeatAssignmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SeatAssignmentPayload, S>;
export type SeatAssignmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SeatAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SeatAssignmentCountAggregateInputType | true;
};
export interface SeatAssignmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SeatAssignment'];
        meta: {
            name: 'SeatAssignment';
        };
    };
    findUnique<T extends SeatAssignmentFindUniqueArgs>(args: Prisma.SelectSubset<T, SeatAssignmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SeatAssignmentClient<runtime.Types.Result.GetResult<Prisma.$SeatAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SeatAssignmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SeatAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SeatAssignmentClient<runtime.Types.Result.GetResult<Prisma.$SeatAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SeatAssignmentFindFirstArgs>(args?: Prisma.SelectSubset<T, SeatAssignmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__SeatAssignmentClient<runtime.Types.Result.GetResult<Prisma.$SeatAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SeatAssignmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SeatAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SeatAssignmentClient<runtime.Types.Result.GetResult<Prisma.$SeatAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SeatAssignmentFindManyArgs>(args?: Prisma.SelectSubset<T, SeatAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SeatAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SeatAssignmentCreateArgs>(args: Prisma.SelectSubset<T, SeatAssignmentCreateArgs<ExtArgs>>): Prisma.Prisma__SeatAssignmentClient<runtime.Types.Result.GetResult<Prisma.$SeatAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SeatAssignmentCreateManyArgs>(args?: Prisma.SelectSubset<T, SeatAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SeatAssignmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SeatAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SeatAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SeatAssignmentDeleteArgs>(args: Prisma.SelectSubset<T, SeatAssignmentDeleteArgs<ExtArgs>>): Prisma.Prisma__SeatAssignmentClient<runtime.Types.Result.GetResult<Prisma.$SeatAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SeatAssignmentUpdateArgs>(args: Prisma.SelectSubset<T, SeatAssignmentUpdateArgs<ExtArgs>>): Prisma.Prisma__SeatAssignmentClient<runtime.Types.Result.GetResult<Prisma.$SeatAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SeatAssignmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, SeatAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SeatAssignmentUpdateManyArgs>(args: Prisma.SelectSubset<T, SeatAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SeatAssignmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SeatAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SeatAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SeatAssignmentUpsertArgs>(args: Prisma.SelectSubset<T, SeatAssignmentUpsertArgs<ExtArgs>>): Prisma.Prisma__SeatAssignmentClient<runtime.Types.Result.GetResult<Prisma.$SeatAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SeatAssignmentCountArgs>(args?: Prisma.Subset<T, SeatAssignmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SeatAssignmentCountAggregateOutputType> : number>;
    aggregate<T extends SeatAssignmentAggregateArgs>(args: Prisma.Subset<T, SeatAssignmentAggregateArgs>): Prisma.PrismaPromise<GetSeatAssignmentAggregateType<T>>;
    groupBy<T extends SeatAssignmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SeatAssignmentGroupByArgs['orderBy'];
    } : {
        orderBy?: SeatAssignmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SeatAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SeatAssignmentFieldRefs;
}
export interface Prisma__SeatAssignmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wedding<T extends Prisma.WeddingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WeddingDefaultArgs<ExtArgs>>): Prisma.Prisma__WeddingClient<runtime.Types.Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    event<T extends Prisma.SeatAssignment$eventArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SeatAssignment$eventArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    table<T extends Prisma.SeatingTableDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SeatingTableDefaultArgs<ExtArgs>>): Prisma.Prisma__SeatingTableClient<runtime.Types.Result.GetResult<Prisma.$SeatingTablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    guest<T extends Prisma.GuestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GuestDefaultArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SeatAssignmentFieldRefs {
    readonly id: Prisma.FieldRef<"SeatAssignment", 'String'>;
    readonly weddingId: Prisma.FieldRef<"SeatAssignment", 'String'>;
    readonly eventId: Prisma.FieldRef<"SeatAssignment", 'String'>;
    readonly eventKey: Prisma.FieldRef<"SeatAssignment", 'String'>;
    readonly tableId: Prisma.FieldRef<"SeatAssignment", 'String'>;
    readonly guestId: Prisma.FieldRef<"SeatAssignment", 'String'>;
    readonly seatCount: Prisma.FieldRef<"SeatAssignment", 'Int'>;
    readonly note: Prisma.FieldRef<"SeatAssignment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SeatAssignment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SeatAssignment", 'DateTime'>;
}
export type SeatAssignmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.SeatAssignmentOmit<ExtArgs> | null;
    include?: Prisma.SeatAssignmentInclude<ExtArgs> | null;
    where: Prisma.SeatAssignmentWhereUniqueInput;
};
export type SeatAssignmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.SeatAssignmentOmit<ExtArgs> | null;
    include?: Prisma.SeatAssignmentInclude<ExtArgs> | null;
    where: Prisma.SeatAssignmentWhereUniqueInput;
};
export type SeatAssignmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SeatAssignmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SeatAssignmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SeatAssignmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.SeatAssignmentOmit<ExtArgs> | null;
    include?: Prisma.SeatAssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SeatAssignmentCreateInput, Prisma.SeatAssignmentUncheckedCreateInput>;
};
export type SeatAssignmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SeatAssignmentCreateManyInput | Prisma.SeatAssignmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SeatAssignmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatAssignmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SeatAssignmentOmit<ExtArgs> | null;
    data: Prisma.SeatAssignmentCreateManyInput | Prisma.SeatAssignmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SeatAssignmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SeatAssignmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.SeatAssignmentOmit<ExtArgs> | null;
    include?: Prisma.SeatAssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SeatAssignmentUpdateInput, Prisma.SeatAssignmentUncheckedUpdateInput>;
    where: Prisma.SeatAssignmentWhereUniqueInput;
};
export type SeatAssignmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SeatAssignmentUpdateManyMutationInput, Prisma.SeatAssignmentUncheckedUpdateManyInput>;
    where?: Prisma.SeatAssignmentWhereInput;
    limit?: number;
};
export type SeatAssignmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatAssignmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SeatAssignmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SeatAssignmentUpdateManyMutationInput, Prisma.SeatAssignmentUncheckedUpdateManyInput>;
    where?: Prisma.SeatAssignmentWhereInput;
    limit?: number;
    include?: Prisma.SeatAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SeatAssignmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.SeatAssignmentOmit<ExtArgs> | null;
    include?: Prisma.SeatAssignmentInclude<ExtArgs> | null;
    where: Prisma.SeatAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.SeatAssignmentCreateInput, Prisma.SeatAssignmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SeatAssignmentUpdateInput, Prisma.SeatAssignmentUncheckedUpdateInput>;
};
export type SeatAssignmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.SeatAssignmentOmit<ExtArgs> | null;
    include?: Prisma.SeatAssignmentInclude<ExtArgs> | null;
    where: Prisma.SeatAssignmentWhereUniqueInput;
};
export type SeatAssignmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SeatAssignmentWhereInput;
    limit?: number;
};
export type SeatAssignment$eventArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
};
export type SeatAssignmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeatAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.SeatAssignmentOmit<ExtArgs> | null;
    include?: Prisma.SeatAssignmentInclude<ExtArgs> | null;
};
