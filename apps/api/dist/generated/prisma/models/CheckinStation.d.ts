import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CheckinStationModel = runtime.Types.Result.DefaultSelection<Prisma.$CheckinStationPayload>;
export type AggregateCheckinStation = {
    _count: CheckinStationCountAggregateOutputType | null;
    _min: CheckinStationMinAggregateOutputType | null;
    _max: CheckinStationMaxAggregateOutputType | null;
};
export type CheckinStationMinAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    eventId: string | null;
    eventKey: string | null;
    name: string | null;
    token: string | null;
    status: $Enums.CheckinStationStatus | null;
    lastUsedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CheckinStationMaxAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    eventId: string | null;
    eventKey: string | null;
    name: string | null;
    token: string | null;
    status: $Enums.CheckinStationStatus | null;
    lastUsedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CheckinStationCountAggregateOutputType = {
    id: number;
    weddingId: number;
    eventId: number;
    eventKey: number;
    name: number;
    token: number;
    status: number;
    lastUsedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CheckinStationMinAggregateInputType = {
    id?: true;
    weddingId?: true;
    eventId?: true;
    eventKey?: true;
    name?: true;
    token?: true;
    status?: true;
    lastUsedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CheckinStationMaxAggregateInputType = {
    id?: true;
    weddingId?: true;
    eventId?: true;
    eventKey?: true;
    name?: true;
    token?: true;
    status?: true;
    lastUsedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CheckinStationCountAggregateInputType = {
    id?: true;
    weddingId?: true;
    eventId?: true;
    eventKey?: true;
    name?: true;
    token?: true;
    status?: true;
    lastUsedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CheckinStationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CheckinStationWhereInput;
    orderBy?: Prisma.CheckinStationOrderByWithRelationInput | Prisma.CheckinStationOrderByWithRelationInput[];
    cursor?: Prisma.CheckinStationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CheckinStationCountAggregateInputType;
    _min?: CheckinStationMinAggregateInputType;
    _max?: CheckinStationMaxAggregateInputType;
};
export type GetCheckinStationAggregateType<T extends CheckinStationAggregateArgs> = {
    [P in keyof T & keyof AggregateCheckinStation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCheckinStation[P]> : Prisma.GetScalarType<T[P], AggregateCheckinStation[P]>;
};
export type CheckinStationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CheckinStationWhereInput;
    orderBy?: Prisma.CheckinStationOrderByWithAggregationInput | Prisma.CheckinStationOrderByWithAggregationInput[];
    by: Prisma.CheckinStationScalarFieldEnum[] | Prisma.CheckinStationScalarFieldEnum;
    having?: Prisma.CheckinStationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CheckinStationCountAggregateInputType | true;
    _min?: CheckinStationMinAggregateInputType;
    _max?: CheckinStationMaxAggregateInputType;
};
export type CheckinStationGroupByOutputType = {
    id: string;
    weddingId: string;
    eventId: string | null;
    eventKey: string;
    name: string;
    token: string;
    status: $Enums.CheckinStationStatus;
    lastUsedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CheckinStationCountAggregateOutputType | null;
    _min: CheckinStationMinAggregateOutputType | null;
    _max: CheckinStationMaxAggregateOutputType | null;
};
export type GetCheckinStationGroupByPayload<T extends CheckinStationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CheckinStationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CheckinStationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CheckinStationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CheckinStationGroupByOutputType[P]>;
}>>;
export type CheckinStationWhereInput = {
    AND?: Prisma.CheckinStationWhereInput | Prisma.CheckinStationWhereInput[];
    OR?: Prisma.CheckinStationWhereInput[];
    NOT?: Prisma.CheckinStationWhereInput | Prisma.CheckinStationWhereInput[];
    id?: Prisma.StringFilter<"CheckinStation"> | string;
    weddingId?: Prisma.StringFilter<"CheckinStation"> | string;
    eventId?: Prisma.StringNullableFilter<"CheckinStation"> | string | null;
    eventKey?: Prisma.StringFilter<"CheckinStation"> | string;
    name?: Prisma.StringFilter<"CheckinStation"> | string;
    token?: Prisma.StringFilter<"CheckinStation"> | string;
    status?: Prisma.EnumCheckinStationStatusFilter<"CheckinStation"> | $Enums.CheckinStationStatus;
    lastUsedAt?: Prisma.DateTimeNullableFilter<"CheckinStation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CheckinStation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CheckinStation"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
    event?: Prisma.XOR<Prisma.EventNullableScalarRelationFilter, Prisma.EventWhereInput> | null;
    records?: Prisma.CheckinRecordListRelationFilter;
};
export type CheckinStationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    wedding?: Prisma.WeddingOrderByWithRelationInput;
    event?: Prisma.EventOrderByWithRelationInput;
    records?: Prisma.CheckinRecordOrderByRelationAggregateInput;
};
export type CheckinStationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    token?: string;
    AND?: Prisma.CheckinStationWhereInput | Prisma.CheckinStationWhereInput[];
    OR?: Prisma.CheckinStationWhereInput[];
    NOT?: Prisma.CheckinStationWhereInput | Prisma.CheckinStationWhereInput[];
    weddingId?: Prisma.StringFilter<"CheckinStation"> | string;
    eventId?: Prisma.StringNullableFilter<"CheckinStation"> | string | null;
    eventKey?: Prisma.StringFilter<"CheckinStation"> | string;
    name?: Prisma.StringFilter<"CheckinStation"> | string;
    status?: Prisma.EnumCheckinStationStatusFilter<"CheckinStation"> | $Enums.CheckinStationStatus;
    lastUsedAt?: Prisma.DateTimeNullableFilter<"CheckinStation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CheckinStation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CheckinStation"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
    event?: Prisma.XOR<Prisma.EventNullableScalarRelationFilter, Prisma.EventWhereInput> | null;
    records?: Prisma.CheckinRecordListRelationFilter;
}, "id" | "token">;
export type CheckinStationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CheckinStationCountOrderByAggregateInput;
    _max?: Prisma.CheckinStationMaxOrderByAggregateInput;
    _min?: Prisma.CheckinStationMinOrderByAggregateInput;
};
export type CheckinStationScalarWhereWithAggregatesInput = {
    AND?: Prisma.CheckinStationScalarWhereWithAggregatesInput | Prisma.CheckinStationScalarWhereWithAggregatesInput[];
    OR?: Prisma.CheckinStationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CheckinStationScalarWhereWithAggregatesInput | Prisma.CheckinStationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CheckinStation"> | string;
    weddingId?: Prisma.StringWithAggregatesFilter<"CheckinStation"> | string;
    eventId?: Prisma.StringNullableWithAggregatesFilter<"CheckinStation"> | string | null;
    eventKey?: Prisma.StringWithAggregatesFilter<"CheckinStation"> | string;
    name?: Prisma.StringWithAggregatesFilter<"CheckinStation"> | string;
    token?: Prisma.StringWithAggregatesFilter<"CheckinStation"> | string;
    status?: Prisma.EnumCheckinStationStatusWithAggregatesFilter<"CheckinStation"> | $Enums.CheckinStationStatus;
    lastUsedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CheckinStation"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CheckinStation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CheckinStation"> | Date | string;
};
export type CheckinStationCreateInput = {
    id?: string;
    eventKey?: string;
    name: string;
    token: string;
    status?: $Enums.CheckinStationStatus;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutCheckinStationsInput;
    event?: Prisma.EventCreateNestedOneWithoutCheckinStationsInput;
    records?: Prisma.CheckinRecordCreateNestedManyWithoutStationInput;
};
export type CheckinStationUncheckedCreateInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    name: string;
    token: string;
    status?: $Enums.CheckinStationStatus;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    records?: Prisma.CheckinRecordUncheckedCreateNestedManyWithoutStationInput;
};
export type CheckinStationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCheckinStationStatusFieldUpdateOperationsInput | $Enums.CheckinStationStatus;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutCheckinStationsNestedInput;
    event?: Prisma.EventUpdateOneWithoutCheckinStationsNestedInput;
    records?: Prisma.CheckinRecordUpdateManyWithoutStationNestedInput;
};
export type CheckinStationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCheckinStationStatusFieldUpdateOperationsInput | $Enums.CheckinStationStatus;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    records?: Prisma.CheckinRecordUncheckedUpdateManyWithoutStationNestedInput;
};
export type CheckinStationCreateManyInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    name: string;
    token: string;
    status?: $Enums.CheckinStationStatus;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckinStationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCheckinStationStatusFieldUpdateOperationsInput | $Enums.CheckinStationStatus;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinStationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCheckinStationStatusFieldUpdateOperationsInput | $Enums.CheckinStationStatus;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinStationListRelationFilter = {
    every?: Prisma.CheckinStationWhereInput;
    some?: Prisma.CheckinStationWhereInput;
    none?: Prisma.CheckinStationWhereInput;
};
export type CheckinStationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CheckinStationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CheckinStationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CheckinStationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CheckinStationNullableScalarRelationFilter = {
    is?: Prisma.CheckinStationWhereInput | null;
    isNot?: Prisma.CheckinStationWhereInput | null;
};
export type CheckinStationCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.CheckinStationCreateWithoutWeddingInput, Prisma.CheckinStationUncheckedCreateWithoutWeddingInput> | Prisma.CheckinStationCreateWithoutWeddingInput[] | Prisma.CheckinStationUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.CheckinStationCreateOrConnectWithoutWeddingInput | Prisma.CheckinStationCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.CheckinStationCreateManyWeddingInputEnvelope;
    connect?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
};
export type CheckinStationUncheckedCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.CheckinStationCreateWithoutWeddingInput, Prisma.CheckinStationUncheckedCreateWithoutWeddingInput> | Prisma.CheckinStationCreateWithoutWeddingInput[] | Prisma.CheckinStationUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.CheckinStationCreateOrConnectWithoutWeddingInput | Prisma.CheckinStationCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.CheckinStationCreateManyWeddingInputEnvelope;
    connect?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
};
export type CheckinStationUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.CheckinStationCreateWithoutWeddingInput, Prisma.CheckinStationUncheckedCreateWithoutWeddingInput> | Prisma.CheckinStationCreateWithoutWeddingInput[] | Prisma.CheckinStationUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.CheckinStationCreateOrConnectWithoutWeddingInput | Prisma.CheckinStationCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.CheckinStationUpsertWithWhereUniqueWithoutWeddingInput | Prisma.CheckinStationUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.CheckinStationCreateManyWeddingInputEnvelope;
    set?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
    disconnect?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
    delete?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
    connect?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
    update?: Prisma.CheckinStationUpdateWithWhereUniqueWithoutWeddingInput | Prisma.CheckinStationUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.CheckinStationUpdateManyWithWhereWithoutWeddingInput | Prisma.CheckinStationUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.CheckinStationScalarWhereInput | Prisma.CheckinStationScalarWhereInput[];
};
export type CheckinStationUncheckedUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.CheckinStationCreateWithoutWeddingInput, Prisma.CheckinStationUncheckedCreateWithoutWeddingInput> | Prisma.CheckinStationCreateWithoutWeddingInput[] | Prisma.CheckinStationUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.CheckinStationCreateOrConnectWithoutWeddingInput | Prisma.CheckinStationCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.CheckinStationUpsertWithWhereUniqueWithoutWeddingInput | Prisma.CheckinStationUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.CheckinStationCreateManyWeddingInputEnvelope;
    set?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
    disconnect?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
    delete?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
    connect?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
    update?: Prisma.CheckinStationUpdateWithWhereUniqueWithoutWeddingInput | Prisma.CheckinStationUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.CheckinStationUpdateManyWithWhereWithoutWeddingInput | Prisma.CheckinStationUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.CheckinStationScalarWhereInput | Prisma.CheckinStationScalarWhereInput[];
};
export type CheckinStationCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.CheckinStationCreateWithoutEventInput, Prisma.CheckinStationUncheckedCreateWithoutEventInput> | Prisma.CheckinStationCreateWithoutEventInput[] | Prisma.CheckinStationUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.CheckinStationCreateOrConnectWithoutEventInput | Prisma.CheckinStationCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.CheckinStationCreateManyEventInputEnvelope;
    connect?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
};
export type CheckinStationUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.CheckinStationCreateWithoutEventInput, Prisma.CheckinStationUncheckedCreateWithoutEventInput> | Prisma.CheckinStationCreateWithoutEventInput[] | Prisma.CheckinStationUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.CheckinStationCreateOrConnectWithoutEventInput | Prisma.CheckinStationCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.CheckinStationCreateManyEventInputEnvelope;
    connect?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
};
export type CheckinStationUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.CheckinStationCreateWithoutEventInput, Prisma.CheckinStationUncheckedCreateWithoutEventInput> | Prisma.CheckinStationCreateWithoutEventInput[] | Prisma.CheckinStationUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.CheckinStationCreateOrConnectWithoutEventInput | Prisma.CheckinStationCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.CheckinStationUpsertWithWhereUniqueWithoutEventInput | Prisma.CheckinStationUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.CheckinStationCreateManyEventInputEnvelope;
    set?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
    disconnect?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
    delete?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
    connect?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
    update?: Prisma.CheckinStationUpdateWithWhereUniqueWithoutEventInput | Prisma.CheckinStationUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.CheckinStationUpdateManyWithWhereWithoutEventInput | Prisma.CheckinStationUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.CheckinStationScalarWhereInput | Prisma.CheckinStationScalarWhereInput[];
};
export type CheckinStationUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.CheckinStationCreateWithoutEventInput, Prisma.CheckinStationUncheckedCreateWithoutEventInput> | Prisma.CheckinStationCreateWithoutEventInput[] | Prisma.CheckinStationUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.CheckinStationCreateOrConnectWithoutEventInput | Prisma.CheckinStationCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.CheckinStationUpsertWithWhereUniqueWithoutEventInput | Prisma.CheckinStationUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.CheckinStationCreateManyEventInputEnvelope;
    set?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
    disconnect?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
    delete?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
    connect?: Prisma.CheckinStationWhereUniqueInput | Prisma.CheckinStationWhereUniqueInput[];
    update?: Prisma.CheckinStationUpdateWithWhereUniqueWithoutEventInput | Prisma.CheckinStationUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.CheckinStationUpdateManyWithWhereWithoutEventInput | Prisma.CheckinStationUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.CheckinStationScalarWhereInput | Prisma.CheckinStationScalarWhereInput[];
};
export type EnumCheckinStationStatusFieldUpdateOperationsInput = {
    set?: $Enums.CheckinStationStatus;
};
export type CheckinStationCreateNestedOneWithoutRecordsInput = {
    create?: Prisma.XOR<Prisma.CheckinStationCreateWithoutRecordsInput, Prisma.CheckinStationUncheckedCreateWithoutRecordsInput>;
    connectOrCreate?: Prisma.CheckinStationCreateOrConnectWithoutRecordsInput;
    connect?: Prisma.CheckinStationWhereUniqueInput;
};
export type CheckinStationUpdateOneWithoutRecordsNestedInput = {
    create?: Prisma.XOR<Prisma.CheckinStationCreateWithoutRecordsInput, Prisma.CheckinStationUncheckedCreateWithoutRecordsInput>;
    connectOrCreate?: Prisma.CheckinStationCreateOrConnectWithoutRecordsInput;
    upsert?: Prisma.CheckinStationUpsertWithoutRecordsInput;
    disconnect?: Prisma.CheckinStationWhereInput | boolean;
    delete?: Prisma.CheckinStationWhereInput | boolean;
    connect?: Prisma.CheckinStationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CheckinStationUpdateToOneWithWhereWithoutRecordsInput, Prisma.CheckinStationUpdateWithoutRecordsInput>, Prisma.CheckinStationUncheckedUpdateWithoutRecordsInput>;
};
export type CheckinStationCreateWithoutWeddingInput = {
    id?: string;
    eventKey?: string;
    name: string;
    token: string;
    status?: $Enums.CheckinStationStatus;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event?: Prisma.EventCreateNestedOneWithoutCheckinStationsInput;
    records?: Prisma.CheckinRecordCreateNestedManyWithoutStationInput;
};
export type CheckinStationUncheckedCreateWithoutWeddingInput = {
    id?: string;
    eventId?: string | null;
    eventKey?: string;
    name: string;
    token: string;
    status?: $Enums.CheckinStationStatus;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    records?: Prisma.CheckinRecordUncheckedCreateNestedManyWithoutStationInput;
};
export type CheckinStationCreateOrConnectWithoutWeddingInput = {
    where: Prisma.CheckinStationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckinStationCreateWithoutWeddingInput, Prisma.CheckinStationUncheckedCreateWithoutWeddingInput>;
};
export type CheckinStationCreateManyWeddingInputEnvelope = {
    data: Prisma.CheckinStationCreateManyWeddingInput | Prisma.CheckinStationCreateManyWeddingInput[];
    skipDuplicates?: boolean;
};
export type CheckinStationUpsertWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.CheckinStationWhereUniqueInput;
    update: Prisma.XOR<Prisma.CheckinStationUpdateWithoutWeddingInput, Prisma.CheckinStationUncheckedUpdateWithoutWeddingInput>;
    create: Prisma.XOR<Prisma.CheckinStationCreateWithoutWeddingInput, Prisma.CheckinStationUncheckedCreateWithoutWeddingInput>;
};
export type CheckinStationUpdateWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.CheckinStationWhereUniqueInput;
    data: Prisma.XOR<Prisma.CheckinStationUpdateWithoutWeddingInput, Prisma.CheckinStationUncheckedUpdateWithoutWeddingInput>;
};
export type CheckinStationUpdateManyWithWhereWithoutWeddingInput = {
    where: Prisma.CheckinStationScalarWhereInput;
    data: Prisma.XOR<Prisma.CheckinStationUpdateManyMutationInput, Prisma.CheckinStationUncheckedUpdateManyWithoutWeddingInput>;
};
export type CheckinStationScalarWhereInput = {
    AND?: Prisma.CheckinStationScalarWhereInput | Prisma.CheckinStationScalarWhereInput[];
    OR?: Prisma.CheckinStationScalarWhereInput[];
    NOT?: Prisma.CheckinStationScalarWhereInput | Prisma.CheckinStationScalarWhereInput[];
    id?: Prisma.StringFilter<"CheckinStation"> | string;
    weddingId?: Prisma.StringFilter<"CheckinStation"> | string;
    eventId?: Prisma.StringNullableFilter<"CheckinStation"> | string | null;
    eventKey?: Prisma.StringFilter<"CheckinStation"> | string;
    name?: Prisma.StringFilter<"CheckinStation"> | string;
    token?: Prisma.StringFilter<"CheckinStation"> | string;
    status?: Prisma.EnumCheckinStationStatusFilter<"CheckinStation"> | $Enums.CheckinStationStatus;
    lastUsedAt?: Prisma.DateTimeNullableFilter<"CheckinStation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CheckinStation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CheckinStation"> | Date | string;
};
export type CheckinStationCreateWithoutEventInput = {
    id?: string;
    eventKey?: string;
    name: string;
    token: string;
    status?: $Enums.CheckinStationStatus;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutCheckinStationsInput;
    records?: Prisma.CheckinRecordCreateNestedManyWithoutStationInput;
};
export type CheckinStationUncheckedCreateWithoutEventInput = {
    id?: string;
    weddingId: string;
    eventKey?: string;
    name: string;
    token: string;
    status?: $Enums.CheckinStationStatus;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    records?: Prisma.CheckinRecordUncheckedCreateNestedManyWithoutStationInput;
};
export type CheckinStationCreateOrConnectWithoutEventInput = {
    where: Prisma.CheckinStationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckinStationCreateWithoutEventInput, Prisma.CheckinStationUncheckedCreateWithoutEventInput>;
};
export type CheckinStationCreateManyEventInputEnvelope = {
    data: Prisma.CheckinStationCreateManyEventInput | Prisma.CheckinStationCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type CheckinStationUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.CheckinStationWhereUniqueInput;
    update: Prisma.XOR<Prisma.CheckinStationUpdateWithoutEventInput, Prisma.CheckinStationUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.CheckinStationCreateWithoutEventInput, Prisma.CheckinStationUncheckedCreateWithoutEventInput>;
};
export type CheckinStationUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.CheckinStationWhereUniqueInput;
    data: Prisma.XOR<Prisma.CheckinStationUpdateWithoutEventInput, Prisma.CheckinStationUncheckedUpdateWithoutEventInput>;
};
export type CheckinStationUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.CheckinStationScalarWhereInput;
    data: Prisma.XOR<Prisma.CheckinStationUpdateManyMutationInput, Prisma.CheckinStationUncheckedUpdateManyWithoutEventInput>;
};
export type CheckinStationCreateWithoutRecordsInput = {
    id?: string;
    eventKey?: string;
    name: string;
    token: string;
    status?: $Enums.CheckinStationStatus;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutCheckinStationsInput;
    event?: Prisma.EventCreateNestedOneWithoutCheckinStationsInput;
};
export type CheckinStationUncheckedCreateWithoutRecordsInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    name: string;
    token: string;
    status?: $Enums.CheckinStationStatus;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckinStationCreateOrConnectWithoutRecordsInput = {
    where: Prisma.CheckinStationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckinStationCreateWithoutRecordsInput, Prisma.CheckinStationUncheckedCreateWithoutRecordsInput>;
};
export type CheckinStationUpsertWithoutRecordsInput = {
    update: Prisma.XOR<Prisma.CheckinStationUpdateWithoutRecordsInput, Prisma.CheckinStationUncheckedUpdateWithoutRecordsInput>;
    create: Prisma.XOR<Prisma.CheckinStationCreateWithoutRecordsInput, Prisma.CheckinStationUncheckedCreateWithoutRecordsInput>;
    where?: Prisma.CheckinStationWhereInput;
};
export type CheckinStationUpdateToOneWithWhereWithoutRecordsInput = {
    where?: Prisma.CheckinStationWhereInput;
    data: Prisma.XOR<Prisma.CheckinStationUpdateWithoutRecordsInput, Prisma.CheckinStationUncheckedUpdateWithoutRecordsInput>;
};
export type CheckinStationUpdateWithoutRecordsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCheckinStationStatusFieldUpdateOperationsInput | $Enums.CheckinStationStatus;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutCheckinStationsNestedInput;
    event?: Prisma.EventUpdateOneWithoutCheckinStationsNestedInput;
};
export type CheckinStationUncheckedUpdateWithoutRecordsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCheckinStationStatusFieldUpdateOperationsInput | $Enums.CheckinStationStatus;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinStationCreateManyWeddingInput = {
    id?: string;
    eventId?: string | null;
    eventKey?: string;
    name: string;
    token: string;
    status?: $Enums.CheckinStationStatus;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckinStationUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCheckinStationStatusFieldUpdateOperationsInput | $Enums.CheckinStationStatus;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneWithoutCheckinStationsNestedInput;
    records?: Prisma.CheckinRecordUpdateManyWithoutStationNestedInput;
};
export type CheckinStationUncheckedUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCheckinStationStatusFieldUpdateOperationsInput | $Enums.CheckinStationStatus;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    records?: Prisma.CheckinRecordUncheckedUpdateManyWithoutStationNestedInput;
};
export type CheckinStationUncheckedUpdateManyWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCheckinStationStatusFieldUpdateOperationsInput | $Enums.CheckinStationStatus;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinStationCreateManyEventInput = {
    id?: string;
    weddingId: string;
    eventKey?: string;
    name: string;
    token: string;
    status?: $Enums.CheckinStationStatus;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckinStationUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCheckinStationStatusFieldUpdateOperationsInput | $Enums.CheckinStationStatus;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutCheckinStationsNestedInput;
    records?: Prisma.CheckinRecordUpdateManyWithoutStationNestedInput;
};
export type CheckinStationUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCheckinStationStatusFieldUpdateOperationsInput | $Enums.CheckinStationStatus;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    records?: Prisma.CheckinRecordUncheckedUpdateManyWithoutStationNestedInput;
};
export type CheckinStationUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCheckinStationStatusFieldUpdateOperationsInput | $Enums.CheckinStationStatus;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinStationCountOutputType = {
    records: number;
};
export type CheckinStationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    records?: boolean | CheckinStationCountOutputTypeCountRecordsArgs;
};
export type CheckinStationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinStationCountOutputTypeSelect<ExtArgs> | null;
};
export type CheckinStationCountOutputTypeCountRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CheckinRecordWhereInput;
};
export type CheckinStationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    eventId?: boolean;
    eventKey?: boolean;
    name?: boolean;
    token?: boolean;
    status?: boolean;
    lastUsedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.CheckinStation$eventArgs<ExtArgs>;
    records?: boolean | Prisma.CheckinStation$recordsArgs<ExtArgs>;
    _count?: boolean | Prisma.CheckinStationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["checkinStation"]>;
export type CheckinStationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    eventId?: boolean;
    eventKey?: boolean;
    name?: boolean;
    token?: boolean;
    status?: boolean;
    lastUsedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.CheckinStation$eventArgs<ExtArgs>;
}, ExtArgs["result"]["checkinStation"]>;
export type CheckinStationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    eventId?: boolean;
    eventKey?: boolean;
    name?: boolean;
    token?: boolean;
    status?: boolean;
    lastUsedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.CheckinStation$eventArgs<ExtArgs>;
}, ExtArgs["result"]["checkinStation"]>;
export type CheckinStationSelectScalar = {
    id?: boolean;
    weddingId?: boolean;
    eventId?: boolean;
    eventKey?: boolean;
    name?: boolean;
    token?: boolean;
    status?: boolean;
    lastUsedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CheckinStationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "weddingId" | "eventId" | "eventKey" | "name" | "token" | "status" | "lastUsedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["checkinStation"]>;
export type CheckinStationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.CheckinStation$eventArgs<ExtArgs>;
    records?: boolean | Prisma.CheckinStation$recordsArgs<ExtArgs>;
    _count?: boolean | Prisma.CheckinStationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CheckinStationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.CheckinStation$eventArgs<ExtArgs>;
};
export type CheckinStationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.CheckinStation$eventArgs<ExtArgs>;
};
export type $CheckinStationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CheckinStation";
    objects: {
        wedding: Prisma.$WeddingPayload<ExtArgs>;
        event: Prisma.$EventPayload<ExtArgs> | null;
        records: Prisma.$CheckinRecordPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        weddingId: string;
        eventId: string | null;
        eventKey: string;
        name: string;
        token: string;
        status: $Enums.CheckinStationStatus;
        lastUsedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["checkinStation"]>;
    composites: {};
};
export type CheckinStationGetPayload<S extends boolean | null | undefined | CheckinStationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CheckinStationPayload, S>;
export type CheckinStationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CheckinStationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CheckinStationCountAggregateInputType | true;
};
export interface CheckinStationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CheckinStation'];
        meta: {
            name: 'CheckinStation';
        };
    };
    findUnique<T extends CheckinStationFindUniqueArgs>(args: Prisma.SelectSubset<T, CheckinStationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CheckinStationClient<runtime.Types.Result.GetResult<Prisma.$CheckinStationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CheckinStationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CheckinStationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CheckinStationClient<runtime.Types.Result.GetResult<Prisma.$CheckinStationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CheckinStationFindFirstArgs>(args?: Prisma.SelectSubset<T, CheckinStationFindFirstArgs<ExtArgs>>): Prisma.Prisma__CheckinStationClient<runtime.Types.Result.GetResult<Prisma.$CheckinStationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CheckinStationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CheckinStationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CheckinStationClient<runtime.Types.Result.GetResult<Prisma.$CheckinStationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CheckinStationFindManyArgs>(args?: Prisma.SelectSubset<T, CheckinStationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckinStationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CheckinStationCreateArgs>(args: Prisma.SelectSubset<T, CheckinStationCreateArgs<ExtArgs>>): Prisma.Prisma__CheckinStationClient<runtime.Types.Result.GetResult<Prisma.$CheckinStationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CheckinStationCreateManyArgs>(args?: Prisma.SelectSubset<T, CheckinStationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CheckinStationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CheckinStationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckinStationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CheckinStationDeleteArgs>(args: Prisma.SelectSubset<T, CheckinStationDeleteArgs<ExtArgs>>): Prisma.Prisma__CheckinStationClient<runtime.Types.Result.GetResult<Prisma.$CheckinStationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CheckinStationUpdateArgs>(args: Prisma.SelectSubset<T, CheckinStationUpdateArgs<ExtArgs>>): Prisma.Prisma__CheckinStationClient<runtime.Types.Result.GetResult<Prisma.$CheckinStationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CheckinStationDeleteManyArgs>(args?: Prisma.SelectSubset<T, CheckinStationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CheckinStationUpdateManyArgs>(args: Prisma.SelectSubset<T, CheckinStationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CheckinStationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CheckinStationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckinStationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CheckinStationUpsertArgs>(args: Prisma.SelectSubset<T, CheckinStationUpsertArgs<ExtArgs>>): Prisma.Prisma__CheckinStationClient<runtime.Types.Result.GetResult<Prisma.$CheckinStationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CheckinStationCountArgs>(args?: Prisma.Subset<T, CheckinStationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CheckinStationCountAggregateOutputType> : number>;
    aggregate<T extends CheckinStationAggregateArgs>(args: Prisma.Subset<T, CheckinStationAggregateArgs>): Prisma.PrismaPromise<GetCheckinStationAggregateType<T>>;
    groupBy<T extends CheckinStationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CheckinStationGroupByArgs['orderBy'];
    } : {
        orderBy?: CheckinStationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CheckinStationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckinStationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CheckinStationFieldRefs;
}
export interface Prisma__CheckinStationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wedding<T extends Prisma.WeddingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WeddingDefaultArgs<ExtArgs>>): Prisma.Prisma__WeddingClient<runtime.Types.Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    event<T extends Prisma.CheckinStation$eventArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CheckinStation$eventArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    records<T extends Prisma.CheckinStation$recordsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CheckinStation$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckinRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CheckinStationFieldRefs {
    readonly id: Prisma.FieldRef<"CheckinStation", 'String'>;
    readonly weddingId: Prisma.FieldRef<"CheckinStation", 'String'>;
    readonly eventId: Prisma.FieldRef<"CheckinStation", 'String'>;
    readonly eventKey: Prisma.FieldRef<"CheckinStation", 'String'>;
    readonly name: Prisma.FieldRef<"CheckinStation", 'String'>;
    readonly token: Prisma.FieldRef<"CheckinStation", 'String'>;
    readonly status: Prisma.FieldRef<"CheckinStation", 'CheckinStationStatus'>;
    readonly lastUsedAt: Prisma.FieldRef<"CheckinStation", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"CheckinStation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CheckinStation", 'DateTime'>;
}
export type CheckinStationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinStationSelect<ExtArgs> | null;
    omit?: Prisma.CheckinStationOmit<ExtArgs> | null;
    include?: Prisma.CheckinStationInclude<ExtArgs> | null;
    where: Prisma.CheckinStationWhereUniqueInput;
};
export type CheckinStationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinStationSelect<ExtArgs> | null;
    omit?: Prisma.CheckinStationOmit<ExtArgs> | null;
    include?: Prisma.CheckinStationInclude<ExtArgs> | null;
    where: Prisma.CheckinStationWhereUniqueInput;
};
export type CheckinStationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinStationSelect<ExtArgs> | null;
    omit?: Prisma.CheckinStationOmit<ExtArgs> | null;
    include?: Prisma.CheckinStationInclude<ExtArgs> | null;
    where?: Prisma.CheckinStationWhereInput;
    orderBy?: Prisma.CheckinStationOrderByWithRelationInput | Prisma.CheckinStationOrderByWithRelationInput[];
    cursor?: Prisma.CheckinStationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CheckinStationScalarFieldEnum | Prisma.CheckinStationScalarFieldEnum[];
};
export type CheckinStationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinStationSelect<ExtArgs> | null;
    omit?: Prisma.CheckinStationOmit<ExtArgs> | null;
    include?: Prisma.CheckinStationInclude<ExtArgs> | null;
    where?: Prisma.CheckinStationWhereInput;
    orderBy?: Prisma.CheckinStationOrderByWithRelationInput | Prisma.CheckinStationOrderByWithRelationInput[];
    cursor?: Prisma.CheckinStationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CheckinStationScalarFieldEnum | Prisma.CheckinStationScalarFieldEnum[];
};
export type CheckinStationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinStationSelect<ExtArgs> | null;
    omit?: Prisma.CheckinStationOmit<ExtArgs> | null;
    include?: Prisma.CheckinStationInclude<ExtArgs> | null;
    where?: Prisma.CheckinStationWhereInput;
    orderBy?: Prisma.CheckinStationOrderByWithRelationInput | Prisma.CheckinStationOrderByWithRelationInput[];
    cursor?: Prisma.CheckinStationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CheckinStationScalarFieldEnum | Prisma.CheckinStationScalarFieldEnum[];
};
export type CheckinStationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinStationSelect<ExtArgs> | null;
    omit?: Prisma.CheckinStationOmit<ExtArgs> | null;
    include?: Prisma.CheckinStationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CheckinStationCreateInput, Prisma.CheckinStationUncheckedCreateInput>;
};
export type CheckinStationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CheckinStationCreateManyInput | Prisma.CheckinStationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CheckinStationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinStationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CheckinStationOmit<ExtArgs> | null;
    data: Prisma.CheckinStationCreateManyInput | Prisma.CheckinStationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CheckinStationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CheckinStationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinStationSelect<ExtArgs> | null;
    omit?: Prisma.CheckinStationOmit<ExtArgs> | null;
    include?: Prisma.CheckinStationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CheckinStationUpdateInput, Prisma.CheckinStationUncheckedUpdateInput>;
    where: Prisma.CheckinStationWhereUniqueInput;
};
export type CheckinStationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CheckinStationUpdateManyMutationInput, Prisma.CheckinStationUncheckedUpdateManyInput>;
    where?: Prisma.CheckinStationWhereInput;
    limit?: number;
};
export type CheckinStationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinStationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CheckinStationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CheckinStationUpdateManyMutationInput, Prisma.CheckinStationUncheckedUpdateManyInput>;
    where?: Prisma.CheckinStationWhereInput;
    limit?: number;
    include?: Prisma.CheckinStationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CheckinStationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinStationSelect<ExtArgs> | null;
    omit?: Prisma.CheckinStationOmit<ExtArgs> | null;
    include?: Prisma.CheckinStationInclude<ExtArgs> | null;
    where: Prisma.CheckinStationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckinStationCreateInput, Prisma.CheckinStationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CheckinStationUpdateInput, Prisma.CheckinStationUncheckedUpdateInput>;
};
export type CheckinStationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinStationSelect<ExtArgs> | null;
    omit?: Prisma.CheckinStationOmit<ExtArgs> | null;
    include?: Prisma.CheckinStationInclude<ExtArgs> | null;
    where: Prisma.CheckinStationWhereUniqueInput;
};
export type CheckinStationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CheckinStationWhereInput;
    limit?: number;
};
export type CheckinStation$eventArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
};
export type CheckinStation$recordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinRecordSelect<ExtArgs> | null;
    omit?: Prisma.CheckinRecordOmit<ExtArgs> | null;
    include?: Prisma.CheckinRecordInclude<ExtArgs> | null;
    where?: Prisma.CheckinRecordWhereInput;
    orderBy?: Prisma.CheckinRecordOrderByWithRelationInput | Prisma.CheckinRecordOrderByWithRelationInput[];
    cursor?: Prisma.CheckinRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CheckinRecordScalarFieldEnum | Prisma.CheckinRecordScalarFieldEnum[];
};
export type CheckinStationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinStationSelect<ExtArgs> | null;
    omit?: Prisma.CheckinStationOmit<ExtArgs> | null;
    include?: Prisma.CheckinStationInclude<ExtArgs> | null;
};
