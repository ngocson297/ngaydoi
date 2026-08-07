import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CheckinRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$CheckinRecordPayload>;
export type AggregateCheckinRecord = {
    _count: CheckinRecordCountAggregateOutputType | null;
    _avg: CheckinRecordAvgAggregateOutputType | null;
    _sum: CheckinRecordSumAggregateOutputType | null;
    _min: CheckinRecordMinAggregateOutputType | null;
    _max: CheckinRecordMaxAggregateOutputType | null;
};
export type CheckinRecordAvgAggregateOutputType = {
    adultCount: number | null;
    childCount: number | null;
};
export type CheckinRecordSumAggregateOutputType = {
    adultCount: number | null;
    childCount: number | null;
};
export type CheckinRecordMinAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    eventId: string | null;
    eventKey: string | null;
    guestId: string | null;
    invitationId: string | null;
    stationId: string | null;
    method: $Enums.CheckinMethod | null;
    adultCount: number | null;
    childCount: number | null;
    note: string | null;
    checkedInAt: Date | null;
    checkedOutAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CheckinRecordMaxAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    eventId: string | null;
    eventKey: string | null;
    guestId: string | null;
    invitationId: string | null;
    stationId: string | null;
    method: $Enums.CheckinMethod | null;
    adultCount: number | null;
    childCount: number | null;
    note: string | null;
    checkedInAt: Date | null;
    checkedOutAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CheckinRecordCountAggregateOutputType = {
    id: number;
    weddingId: number;
    eventId: number;
    eventKey: number;
    guestId: number;
    invitationId: number;
    stationId: number;
    method: number;
    adultCount: number;
    childCount: number;
    note: number;
    checkedInAt: number;
    checkedOutAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CheckinRecordAvgAggregateInputType = {
    adultCount?: true;
    childCount?: true;
};
export type CheckinRecordSumAggregateInputType = {
    adultCount?: true;
    childCount?: true;
};
export type CheckinRecordMinAggregateInputType = {
    id?: true;
    weddingId?: true;
    eventId?: true;
    eventKey?: true;
    guestId?: true;
    invitationId?: true;
    stationId?: true;
    method?: true;
    adultCount?: true;
    childCount?: true;
    note?: true;
    checkedInAt?: true;
    checkedOutAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CheckinRecordMaxAggregateInputType = {
    id?: true;
    weddingId?: true;
    eventId?: true;
    eventKey?: true;
    guestId?: true;
    invitationId?: true;
    stationId?: true;
    method?: true;
    adultCount?: true;
    childCount?: true;
    note?: true;
    checkedInAt?: true;
    checkedOutAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CheckinRecordCountAggregateInputType = {
    id?: true;
    weddingId?: true;
    eventId?: true;
    eventKey?: true;
    guestId?: true;
    invitationId?: true;
    stationId?: true;
    method?: true;
    adultCount?: true;
    childCount?: true;
    note?: true;
    checkedInAt?: true;
    checkedOutAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CheckinRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CheckinRecordWhereInput;
    orderBy?: Prisma.CheckinRecordOrderByWithRelationInput | Prisma.CheckinRecordOrderByWithRelationInput[];
    cursor?: Prisma.CheckinRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CheckinRecordCountAggregateInputType;
    _avg?: CheckinRecordAvgAggregateInputType;
    _sum?: CheckinRecordSumAggregateInputType;
    _min?: CheckinRecordMinAggregateInputType;
    _max?: CheckinRecordMaxAggregateInputType;
};
export type GetCheckinRecordAggregateType<T extends CheckinRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateCheckinRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCheckinRecord[P]> : Prisma.GetScalarType<T[P], AggregateCheckinRecord[P]>;
};
export type CheckinRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CheckinRecordWhereInput;
    orderBy?: Prisma.CheckinRecordOrderByWithAggregationInput | Prisma.CheckinRecordOrderByWithAggregationInput[];
    by: Prisma.CheckinRecordScalarFieldEnum[] | Prisma.CheckinRecordScalarFieldEnum;
    having?: Prisma.CheckinRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CheckinRecordCountAggregateInputType | true;
    _avg?: CheckinRecordAvgAggregateInputType;
    _sum?: CheckinRecordSumAggregateInputType;
    _min?: CheckinRecordMinAggregateInputType;
    _max?: CheckinRecordMaxAggregateInputType;
};
export type CheckinRecordGroupByOutputType = {
    id: string;
    weddingId: string;
    eventId: string | null;
    eventKey: string;
    guestId: string;
    invitationId: string | null;
    stationId: string | null;
    method: $Enums.CheckinMethod;
    adultCount: number;
    childCount: number;
    note: string | null;
    checkedInAt: Date;
    checkedOutAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CheckinRecordCountAggregateOutputType | null;
    _avg: CheckinRecordAvgAggregateOutputType | null;
    _sum: CheckinRecordSumAggregateOutputType | null;
    _min: CheckinRecordMinAggregateOutputType | null;
    _max: CheckinRecordMaxAggregateOutputType | null;
};
export type GetCheckinRecordGroupByPayload<T extends CheckinRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CheckinRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CheckinRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CheckinRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CheckinRecordGroupByOutputType[P]>;
}>>;
export type CheckinRecordWhereInput = {
    AND?: Prisma.CheckinRecordWhereInput | Prisma.CheckinRecordWhereInput[];
    OR?: Prisma.CheckinRecordWhereInput[];
    NOT?: Prisma.CheckinRecordWhereInput | Prisma.CheckinRecordWhereInput[];
    id?: Prisma.StringFilter<"CheckinRecord"> | string;
    weddingId?: Prisma.StringFilter<"CheckinRecord"> | string;
    eventId?: Prisma.StringNullableFilter<"CheckinRecord"> | string | null;
    eventKey?: Prisma.StringFilter<"CheckinRecord"> | string;
    guestId?: Prisma.StringFilter<"CheckinRecord"> | string;
    invitationId?: Prisma.StringNullableFilter<"CheckinRecord"> | string | null;
    stationId?: Prisma.StringNullableFilter<"CheckinRecord"> | string | null;
    method?: Prisma.EnumCheckinMethodFilter<"CheckinRecord"> | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFilter<"CheckinRecord"> | number;
    childCount?: Prisma.IntFilter<"CheckinRecord"> | number;
    note?: Prisma.StringNullableFilter<"CheckinRecord"> | string | null;
    checkedInAt?: Prisma.DateTimeFilter<"CheckinRecord"> | Date | string;
    checkedOutAt?: Prisma.DateTimeNullableFilter<"CheckinRecord"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CheckinRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CheckinRecord"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
    event?: Prisma.XOR<Prisma.EventNullableScalarRelationFilter, Prisma.EventWhereInput> | null;
    guest?: Prisma.XOR<Prisma.GuestScalarRelationFilter, Prisma.GuestWhereInput>;
    invitation?: Prisma.XOR<Prisma.InvitationNullableScalarRelationFilter, Prisma.InvitationWhereInput> | null;
    station?: Prisma.XOR<Prisma.CheckinStationNullableScalarRelationFilter, Prisma.CheckinStationWhereInput> | null;
};
export type CheckinRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    stationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    method?: Prisma.SortOrder;
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
    checkedOutAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    wedding?: Prisma.WeddingOrderByWithRelationInput;
    event?: Prisma.EventOrderByWithRelationInput;
    guest?: Prisma.GuestOrderByWithRelationInput;
    invitation?: Prisma.InvitationOrderByWithRelationInput;
    station?: Prisma.CheckinStationOrderByWithRelationInput;
};
export type CheckinRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    guestId_eventKey?: Prisma.CheckinRecordGuestIdEventKeyCompoundUniqueInput;
    AND?: Prisma.CheckinRecordWhereInput | Prisma.CheckinRecordWhereInput[];
    OR?: Prisma.CheckinRecordWhereInput[];
    NOT?: Prisma.CheckinRecordWhereInput | Prisma.CheckinRecordWhereInput[];
    weddingId?: Prisma.StringFilter<"CheckinRecord"> | string;
    eventId?: Prisma.StringNullableFilter<"CheckinRecord"> | string | null;
    eventKey?: Prisma.StringFilter<"CheckinRecord"> | string;
    guestId?: Prisma.StringFilter<"CheckinRecord"> | string;
    invitationId?: Prisma.StringNullableFilter<"CheckinRecord"> | string | null;
    stationId?: Prisma.StringNullableFilter<"CheckinRecord"> | string | null;
    method?: Prisma.EnumCheckinMethodFilter<"CheckinRecord"> | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFilter<"CheckinRecord"> | number;
    childCount?: Prisma.IntFilter<"CheckinRecord"> | number;
    note?: Prisma.StringNullableFilter<"CheckinRecord"> | string | null;
    checkedInAt?: Prisma.DateTimeFilter<"CheckinRecord"> | Date | string;
    checkedOutAt?: Prisma.DateTimeNullableFilter<"CheckinRecord"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CheckinRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CheckinRecord"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
    event?: Prisma.XOR<Prisma.EventNullableScalarRelationFilter, Prisma.EventWhereInput> | null;
    guest?: Prisma.XOR<Prisma.GuestScalarRelationFilter, Prisma.GuestWhereInput>;
    invitation?: Prisma.XOR<Prisma.InvitationNullableScalarRelationFilter, Prisma.InvitationWhereInput> | null;
    station?: Prisma.XOR<Prisma.CheckinStationNullableScalarRelationFilter, Prisma.CheckinStationWhereInput> | null;
}, "id" | "guestId_eventKey">;
export type CheckinRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    stationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    method?: Prisma.SortOrder;
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
    checkedOutAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CheckinRecordCountOrderByAggregateInput;
    _avg?: Prisma.CheckinRecordAvgOrderByAggregateInput;
    _max?: Prisma.CheckinRecordMaxOrderByAggregateInput;
    _min?: Prisma.CheckinRecordMinOrderByAggregateInput;
    _sum?: Prisma.CheckinRecordSumOrderByAggregateInput;
};
export type CheckinRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.CheckinRecordScalarWhereWithAggregatesInput | Prisma.CheckinRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.CheckinRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CheckinRecordScalarWhereWithAggregatesInput | Prisma.CheckinRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CheckinRecord"> | string;
    weddingId?: Prisma.StringWithAggregatesFilter<"CheckinRecord"> | string;
    eventId?: Prisma.StringNullableWithAggregatesFilter<"CheckinRecord"> | string | null;
    eventKey?: Prisma.StringWithAggregatesFilter<"CheckinRecord"> | string;
    guestId?: Prisma.StringWithAggregatesFilter<"CheckinRecord"> | string;
    invitationId?: Prisma.StringNullableWithAggregatesFilter<"CheckinRecord"> | string | null;
    stationId?: Prisma.StringNullableWithAggregatesFilter<"CheckinRecord"> | string | null;
    method?: Prisma.EnumCheckinMethodWithAggregatesFilter<"CheckinRecord"> | $Enums.CheckinMethod;
    adultCount?: Prisma.IntWithAggregatesFilter<"CheckinRecord"> | number;
    childCount?: Prisma.IntWithAggregatesFilter<"CheckinRecord"> | number;
    note?: Prisma.StringNullableWithAggregatesFilter<"CheckinRecord"> | string | null;
    checkedInAt?: Prisma.DateTimeWithAggregatesFilter<"CheckinRecord"> | Date | string;
    checkedOutAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CheckinRecord"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CheckinRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CheckinRecord"> | Date | string;
};
export type CheckinRecordCreateInput = {
    id?: string;
    eventKey?: string;
    method?: $Enums.CheckinMethod;
    adultCount?: number;
    childCount?: number;
    note?: string | null;
    checkedInAt?: Date | string;
    checkedOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutCheckinRecordsInput;
    event?: Prisma.EventCreateNestedOneWithoutCheckinRecordsInput;
    guest: Prisma.GuestCreateNestedOneWithoutCheckinRecordsInput;
    invitation?: Prisma.InvitationCreateNestedOneWithoutCheckinRecordsInput;
    station?: Prisma.CheckinStationCreateNestedOneWithoutRecordsInput;
};
export type CheckinRecordUncheckedCreateInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    guestId: string;
    invitationId?: string | null;
    stationId?: string | null;
    method?: $Enums.CheckinMethod;
    adultCount?: number;
    childCount?: number;
    note?: string | null;
    checkedInAt?: Date | string;
    checkedOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckinRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutCheckinRecordsNestedInput;
    event?: Prisma.EventUpdateOneWithoutCheckinRecordsNestedInput;
    guest?: Prisma.GuestUpdateOneRequiredWithoutCheckinRecordsNestedInput;
    invitation?: Prisma.InvitationUpdateOneWithoutCheckinRecordsNestedInput;
    station?: Prisma.CheckinStationUpdateOneWithoutRecordsNestedInput;
};
export type CheckinRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinRecordCreateManyInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    guestId: string;
    invitationId?: string | null;
    stationId?: string | null;
    method?: $Enums.CheckinMethod;
    adultCount?: number;
    childCount?: number;
    note?: string | null;
    checkedInAt?: Date | string;
    checkedOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckinRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinRecordListRelationFilter = {
    every?: Prisma.CheckinRecordWhereInput;
    some?: Prisma.CheckinRecordWhereInput;
    none?: Prisma.CheckinRecordWhereInput;
};
export type CheckinRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CheckinRecordGuestIdEventKeyCompoundUniqueInput = {
    guestId: string;
    eventKey: string;
};
export type CheckinRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    stationId?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
    checkedOutAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CheckinRecordAvgOrderByAggregateInput = {
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
};
export type CheckinRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    stationId?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
    checkedOutAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CheckinRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    eventKey?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    stationId?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
    checkedOutAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CheckinRecordSumOrderByAggregateInput = {
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
};
export type CheckinRecordCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutWeddingInput, Prisma.CheckinRecordUncheckedCreateWithoutWeddingInput> | Prisma.CheckinRecordCreateWithoutWeddingInput[] | Prisma.CheckinRecordUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutWeddingInput | Prisma.CheckinRecordCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.CheckinRecordCreateManyWeddingInputEnvelope;
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
};
export type CheckinRecordUncheckedCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutWeddingInput, Prisma.CheckinRecordUncheckedCreateWithoutWeddingInput> | Prisma.CheckinRecordCreateWithoutWeddingInput[] | Prisma.CheckinRecordUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutWeddingInput | Prisma.CheckinRecordCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.CheckinRecordCreateManyWeddingInputEnvelope;
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
};
export type CheckinRecordUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutWeddingInput, Prisma.CheckinRecordUncheckedCreateWithoutWeddingInput> | Prisma.CheckinRecordCreateWithoutWeddingInput[] | Prisma.CheckinRecordUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutWeddingInput | Prisma.CheckinRecordCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.CheckinRecordUpsertWithWhereUniqueWithoutWeddingInput | Prisma.CheckinRecordUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.CheckinRecordCreateManyWeddingInputEnvelope;
    set?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    disconnect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    delete?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    update?: Prisma.CheckinRecordUpdateWithWhereUniqueWithoutWeddingInput | Prisma.CheckinRecordUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.CheckinRecordUpdateManyWithWhereWithoutWeddingInput | Prisma.CheckinRecordUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.CheckinRecordScalarWhereInput | Prisma.CheckinRecordScalarWhereInput[];
};
export type CheckinRecordUncheckedUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutWeddingInput, Prisma.CheckinRecordUncheckedCreateWithoutWeddingInput> | Prisma.CheckinRecordCreateWithoutWeddingInput[] | Prisma.CheckinRecordUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutWeddingInput | Prisma.CheckinRecordCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.CheckinRecordUpsertWithWhereUniqueWithoutWeddingInput | Prisma.CheckinRecordUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.CheckinRecordCreateManyWeddingInputEnvelope;
    set?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    disconnect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    delete?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    update?: Prisma.CheckinRecordUpdateWithWhereUniqueWithoutWeddingInput | Prisma.CheckinRecordUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.CheckinRecordUpdateManyWithWhereWithoutWeddingInput | Prisma.CheckinRecordUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.CheckinRecordScalarWhereInput | Prisma.CheckinRecordScalarWhereInput[];
};
export type CheckinRecordCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutEventInput, Prisma.CheckinRecordUncheckedCreateWithoutEventInput> | Prisma.CheckinRecordCreateWithoutEventInput[] | Prisma.CheckinRecordUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutEventInput | Prisma.CheckinRecordCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.CheckinRecordCreateManyEventInputEnvelope;
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
};
export type CheckinRecordUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutEventInput, Prisma.CheckinRecordUncheckedCreateWithoutEventInput> | Prisma.CheckinRecordCreateWithoutEventInput[] | Prisma.CheckinRecordUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutEventInput | Prisma.CheckinRecordCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.CheckinRecordCreateManyEventInputEnvelope;
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
};
export type CheckinRecordUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutEventInput, Prisma.CheckinRecordUncheckedCreateWithoutEventInput> | Prisma.CheckinRecordCreateWithoutEventInput[] | Prisma.CheckinRecordUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutEventInput | Prisma.CheckinRecordCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.CheckinRecordUpsertWithWhereUniqueWithoutEventInput | Prisma.CheckinRecordUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.CheckinRecordCreateManyEventInputEnvelope;
    set?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    disconnect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    delete?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    update?: Prisma.CheckinRecordUpdateWithWhereUniqueWithoutEventInput | Prisma.CheckinRecordUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.CheckinRecordUpdateManyWithWhereWithoutEventInput | Prisma.CheckinRecordUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.CheckinRecordScalarWhereInput | Prisma.CheckinRecordScalarWhereInput[];
};
export type CheckinRecordUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutEventInput, Prisma.CheckinRecordUncheckedCreateWithoutEventInput> | Prisma.CheckinRecordCreateWithoutEventInput[] | Prisma.CheckinRecordUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutEventInput | Prisma.CheckinRecordCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.CheckinRecordUpsertWithWhereUniqueWithoutEventInput | Prisma.CheckinRecordUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.CheckinRecordCreateManyEventInputEnvelope;
    set?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    disconnect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    delete?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    update?: Prisma.CheckinRecordUpdateWithWhereUniqueWithoutEventInput | Prisma.CheckinRecordUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.CheckinRecordUpdateManyWithWhereWithoutEventInput | Prisma.CheckinRecordUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.CheckinRecordScalarWhereInput | Prisma.CheckinRecordScalarWhereInput[];
};
export type CheckinRecordCreateNestedManyWithoutGuestInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutGuestInput, Prisma.CheckinRecordUncheckedCreateWithoutGuestInput> | Prisma.CheckinRecordCreateWithoutGuestInput[] | Prisma.CheckinRecordUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutGuestInput | Prisma.CheckinRecordCreateOrConnectWithoutGuestInput[];
    createMany?: Prisma.CheckinRecordCreateManyGuestInputEnvelope;
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
};
export type CheckinRecordUncheckedCreateNestedManyWithoutGuestInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutGuestInput, Prisma.CheckinRecordUncheckedCreateWithoutGuestInput> | Prisma.CheckinRecordCreateWithoutGuestInput[] | Prisma.CheckinRecordUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutGuestInput | Prisma.CheckinRecordCreateOrConnectWithoutGuestInput[];
    createMany?: Prisma.CheckinRecordCreateManyGuestInputEnvelope;
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
};
export type CheckinRecordUpdateManyWithoutGuestNestedInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutGuestInput, Prisma.CheckinRecordUncheckedCreateWithoutGuestInput> | Prisma.CheckinRecordCreateWithoutGuestInput[] | Prisma.CheckinRecordUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutGuestInput | Prisma.CheckinRecordCreateOrConnectWithoutGuestInput[];
    upsert?: Prisma.CheckinRecordUpsertWithWhereUniqueWithoutGuestInput | Prisma.CheckinRecordUpsertWithWhereUniqueWithoutGuestInput[];
    createMany?: Prisma.CheckinRecordCreateManyGuestInputEnvelope;
    set?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    disconnect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    delete?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    update?: Prisma.CheckinRecordUpdateWithWhereUniqueWithoutGuestInput | Prisma.CheckinRecordUpdateWithWhereUniqueWithoutGuestInput[];
    updateMany?: Prisma.CheckinRecordUpdateManyWithWhereWithoutGuestInput | Prisma.CheckinRecordUpdateManyWithWhereWithoutGuestInput[];
    deleteMany?: Prisma.CheckinRecordScalarWhereInput | Prisma.CheckinRecordScalarWhereInput[];
};
export type CheckinRecordUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutGuestInput, Prisma.CheckinRecordUncheckedCreateWithoutGuestInput> | Prisma.CheckinRecordCreateWithoutGuestInput[] | Prisma.CheckinRecordUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutGuestInput | Prisma.CheckinRecordCreateOrConnectWithoutGuestInput[];
    upsert?: Prisma.CheckinRecordUpsertWithWhereUniqueWithoutGuestInput | Prisma.CheckinRecordUpsertWithWhereUniqueWithoutGuestInput[];
    createMany?: Prisma.CheckinRecordCreateManyGuestInputEnvelope;
    set?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    disconnect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    delete?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    update?: Prisma.CheckinRecordUpdateWithWhereUniqueWithoutGuestInput | Prisma.CheckinRecordUpdateWithWhereUniqueWithoutGuestInput[];
    updateMany?: Prisma.CheckinRecordUpdateManyWithWhereWithoutGuestInput | Prisma.CheckinRecordUpdateManyWithWhereWithoutGuestInput[];
    deleteMany?: Prisma.CheckinRecordScalarWhereInput | Prisma.CheckinRecordScalarWhereInput[];
};
export type CheckinRecordCreateNestedManyWithoutInvitationInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutInvitationInput, Prisma.CheckinRecordUncheckedCreateWithoutInvitationInput> | Prisma.CheckinRecordCreateWithoutInvitationInput[] | Prisma.CheckinRecordUncheckedCreateWithoutInvitationInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutInvitationInput | Prisma.CheckinRecordCreateOrConnectWithoutInvitationInput[];
    createMany?: Prisma.CheckinRecordCreateManyInvitationInputEnvelope;
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
};
export type CheckinRecordUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutInvitationInput, Prisma.CheckinRecordUncheckedCreateWithoutInvitationInput> | Prisma.CheckinRecordCreateWithoutInvitationInput[] | Prisma.CheckinRecordUncheckedCreateWithoutInvitationInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutInvitationInput | Prisma.CheckinRecordCreateOrConnectWithoutInvitationInput[];
    createMany?: Prisma.CheckinRecordCreateManyInvitationInputEnvelope;
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
};
export type CheckinRecordUpdateManyWithoutInvitationNestedInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutInvitationInput, Prisma.CheckinRecordUncheckedCreateWithoutInvitationInput> | Prisma.CheckinRecordCreateWithoutInvitationInput[] | Prisma.CheckinRecordUncheckedCreateWithoutInvitationInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutInvitationInput | Prisma.CheckinRecordCreateOrConnectWithoutInvitationInput[];
    upsert?: Prisma.CheckinRecordUpsertWithWhereUniqueWithoutInvitationInput | Prisma.CheckinRecordUpsertWithWhereUniqueWithoutInvitationInput[];
    createMany?: Prisma.CheckinRecordCreateManyInvitationInputEnvelope;
    set?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    disconnect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    delete?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    update?: Prisma.CheckinRecordUpdateWithWhereUniqueWithoutInvitationInput | Prisma.CheckinRecordUpdateWithWhereUniqueWithoutInvitationInput[];
    updateMany?: Prisma.CheckinRecordUpdateManyWithWhereWithoutInvitationInput | Prisma.CheckinRecordUpdateManyWithWhereWithoutInvitationInput[];
    deleteMany?: Prisma.CheckinRecordScalarWhereInput | Prisma.CheckinRecordScalarWhereInput[];
};
export type CheckinRecordUncheckedUpdateManyWithoutInvitationNestedInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutInvitationInput, Prisma.CheckinRecordUncheckedCreateWithoutInvitationInput> | Prisma.CheckinRecordCreateWithoutInvitationInput[] | Prisma.CheckinRecordUncheckedCreateWithoutInvitationInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutInvitationInput | Prisma.CheckinRecordCreateOrConnectWithoutInvitationInput[];
    upsert?: Prisma.CheckinRecordUpsertWithWhereUniqueWithoutInvitationInput | Prisma.CheckinRecordUpsertWithWhereUniqueWithoutInvitationInput[];
    createMany?: Prisma.CheckinRecordCreateManyInvitationInputEnvelope;
    set?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    disconnect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    delete?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    update?: Prisma.CheckinRecordUpdateWithWhereUniqueWithoutInvitationInput | Prisma.CheckinRecordUpdateWithWhereUniqueWithoutInvitationInput[];
    updateMany?: Prisma.CheckinRecordUpdateManyWithWhereWithoutInvitationInput | Prisma.CheckinRecordUpdateManyWithWhereWithoutInvitationInput[];
    deleteMany?: Prisma.CheckinRecordScalarWhereInput | Prisma.CheckinRecordScalarWhereInput[];
};
export type CheckinRecordCreateNestedManyWithoutStationInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutStationInput, Prisma.CheckinRecordUncheckedCreateWithoutStationInput> | Prisma.CheckinRecordCreateWithoutStationInput[] | Prisma.CheckinRecordUncheckedCreateWithoutStationInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutStationInput | Prisma.CheckinRecordCreateOrConnectWithoutStationInput[];
    createMany?: Prisma.CheckinRecordCreateManyStationInputEnvelope;
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
};
export type CheckinRecordUncheckedCreateNestedManyWithoutStationInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutStationInput, Prisma.CheckinRecordUncheckedCreateWithoutStationInput> | Prisma.CheckinRecordCreateWithoutStationInput[] | Prisma.CheckinRecordUncheckedCreateWithoutStationInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutStationInput | Prisma.CheckinRecordCreateOrConnectWithoutStationInput[];
    createMany?: Prisma.CheckinRecordCreateManyStationInputEnvelope;
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
};
export type CheckinRecordUpdateManyWithoutStationNestedInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutStationInput, Prisma.CheckinRecordUncheckedCreateWithoutStationInput> | Prisma.CheckinRecordCreateWithoutStationInput[] | Prisma.CheckinRecordUncheckedCreateWithoutStationInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutStationInput | Prisma.CheckinRecordCreateOrConnectWithoutStationInput[];
    upsert?: Prisma.CheckinRecordUpsertWithWhereUniqueWithoutStationInput | Prisma.CheckinRecordUpsertWithWhereUniqueWithoutStationInput[];
    createMany?: Prisma.CheckinRecordCreateManyStationInputEnvelope;
    set?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    disconnect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    delete?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    update?: Prisma.CheckinRecordUpdateWithWhereUniqueWithoutStationInput | Prisma.CheckinRecordUpdateWithWhereUniqueWithoutStationInput[];
    updateMany?: Prisma.CheckinRecordUpdateManyWithWhereWithoutStationInput | Prisma.CheckinRecordUpdateManyWithWhereWithoutStationInput[];
    deleteMany?: Prisma.CheckinRecordScalarWhereInput | Prisma.CheckinRecordScalarWhereInput[];
};
export type CheckinRecordUncheckedUpdateManyWithoutStationNestedInput = {
    create?: Prisma.XOR<Prisma.CheckinRecordCreateWithoutStationInput, Prisma.CheckinRecordUncheckedCreateWithoutStationInput> | Prisma.CheckinRecordCreateWithoutStationInput[] | Prisma.CheckinRecordUncheckedCreateWithoutStationInput[];
    connectOrCreate?: Prisma.CheckinRecordCreateOrConnectWithoutStationInput | Prisma.CheckinRecordCreateOrConnectWithoutStationInput[];
    upsert?: Prisma.CheckinRecordUpsertWithWhereUniqueWithoutStationInput | Prisma.CheckinRecordUpsertWithWhereUniqueWithoutStationInput[];
    createMany?: Prisma.CheckinRecordCreateManyStationInputEnvelope;
    set?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    disconnect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    delete?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    connect?: Prisma.CheckinRecordWhereUniqueInput | Prisma.CheckinRecordWhereUniqueInput[];
    update?: Prisma.CheckinRecordUpdateWithWhereUniqueWithoutStationInput | Prisma.CheckinRecordUpdateWithWhereUniqueWithoutStationInput[];
    updateMany?: Prisma.CheckinRecordUpdateManyWithWhereWithoutStationInput | Prisma.CheckinRecordUpdateManyWithWhereWithoutStationInput[];
    deleteMany?: Prisma.CheckinRecordScalarWhereInput | Prisma.CheckinRecordScalarWhereInput[];
};
export type EnumCheckinMethodFieldUpdateOperationsInput = {
    set?: $Enums.CheckinMethod;
};
export type CheckinRecordCreateWithoutWeddingInput = {
    id?: string;
    eventKey?: string;
    method?: $Enums.CheckinMethod;
    adultCount?: number;
    childCount?: number;
    note?: string | null;
    checkedInAt?: Date | string;
    checkedOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event?: Prisma.EventCreateNestedOneWithoutCheckinRecordsInput;
    guest: Prisma.GuestCreateNestedOneWithoutCheckinRecordsInput;
    invitation?: Prisma.InvitationCreateNestedOneWithoutCheckinRecordsInput;
    station?: Prisma.CheckinStationCreateNestedOneWithoutRecordsInput;
};
export type CheckinRecordUncheckedCreateWithoutWeddingInput = {
    id?: string;
    eventId?: string | null;
    eventKey?: string;
    guestId: string;
    invitationId?: string | null;
    stationId?: string | null;
    method?: $Enums.CheckinMethod;
    adultCount?: number;
    childCount?: number;
    note?: string | null;
    checkedInAt?: Date | string;
    checkedOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckinRecordCreateOrConnectWithoutWeddingInput = {
    where: Prisma.CheckinRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckinRecordCreateWithoutWeddingInput, Prisma.CheckinRecordUncheckedCreateWithoutWeddingInput>;
};
export type CheckinRecordCreateManyWeddingInputEnvelope = {
    data: Prisma.CheckinRecordCreateManyWeddingInput | Prisma.CheckinRecordCreateManyWeddingInput[];
    skipDuplicates?: boolean;
};
export type CheckinRecordUpsertWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.CheckinRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.CheckinRecordUpdateWithoutWeddingInput, Prisma.CheckinRecordUncheckedUpdateWithoutWeddingInput>;
    create: Prisma.XOR<Prisma.CheckinRecordCreateWithoutWeddingInput, Prisma.CheckinRecordUncheckedCreateWithoutWeddingInput>;
};
export type CheckinRecordUpdateWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.CheckinRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.CheckinRecordUpdateWithoutWeddingInput, Prisma.CheckinRecordUncheckedUpdateWithoutWeddingInput>;
};
export type CheckinRecordUpdateManyWithWhereWithoutWeddingInput = {
    where: Prisma.CheckinRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.CheckinRecordUpdateManyMutationInput, Prisma.CheckinRecordUncheckedUpdateManyWithoutWeddingInput>;
};
export type CheckinRecordScalarWhereInput = {
    AND?: Prisma.CheckinRecordScalarWhereInput | Prisma.CheckinRecordScalarWhereInput[];
    OR?: Prisma.CheckinRecordScalarWhereInput[];
    NOT?: Prisma.CheckinRecordScalarWhereInput | Prisma.CheckinRecordScalarWhereInput[];
    id?: Prisma.StringFilter<"CheckinRecord"> | string;
    weddingId?: Prisma.StringFilter<"CheckinRecord"> | string;
    eventId?: Prisma.StringNullableFilter<"CheckinRecord"> | string | null;
    eventKey?: Prisma.StringFilter<"CheckinRecord"> | string;
    guestId?: Prisma.StringFilter<"CheckinRecord"> | string;
    invitationId?: Prisma.StringNullableFilter<"CheckinRecord"> | string | null;
    stationId?: Prisma.StringNullableFilter<"CheckinRecord"> | string | null;
    method?: Prisma.EnumCheckinMethodFilter<"CheckinRecord"> | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFilter<"CheckinRecord"> | number;
    childCount?: Prisma.IntFilter<"CheckinRecord"> | number;
    note?: Prisma.StringNullableFilter<"CheckinRecord"> | string | null;
    checkedInAt?: Prisma.DateTimeFilter<"CheckinRecord"> | Date | string;
    checkedOutAt?: Prisma.DateTimeNullableFilter<"CheckinRecord"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CheckinRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CheckinRecord"> | Date | string;
};
export type CheckinRecordCreateWithoutEventInput = {
    id?: string;
    eventKey?: string;
    method?: $Enums.CheckinMethod;
    adultCount?: number;
    childCount?: number;
    note?: string | null;
    checkedInAt?: Date | string;
    checkedOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutCheckinRecordsInput;
    guest: Prisma.GuestCreateNestedOneWithoutCheckinRecordsInput;
    invitation?: Prisma.InvitationCreateNestedOneWithoutCheckinRecordsInput;
    station?: Prisma.CheckinStationCreateNestedOneWithoutRecordsInput;
};
export type CheckinRecordUncheckedCreateWithoutEventInput = {
    id?: string;
    weddingId: string;
    eventKey?: string;
    guestId: string;
    invitationId?: string | null;
    stationId?: string | null;
    method?: $Enums.CheckinMethod;
    adultCount?: number;
    childCount?: number;
    note?: string | null;
    checkedInAt?: Date | string;
    checkedOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckinRecordCreateOrConnectWithoutEventInput = {
    where: Prisma.CheckinRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckinRecordCreateWithoutEventInput, Prisma.CheckinRecordUncheckedCreateWithoutEventInput>;
};
export type CheckinRecordCreateManyEventInputEnvelope = {
    data: Prisma.CheckinRecordCreateManyEventInput | Prisma.CheckinRecordCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type CheckinRecordUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.CheckinRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.CheckinRecordUpdateWithoutEventInput, Prisma.CheckinRecordUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.CheckinRecordCreateWithoutEventInput, Prisma.CheckinRecordUncheckedCreateWithoutEventInput>;
};
export type CheckinRecordUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.CheckinRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.CheckinRecordUpdateWithoutEventInput, Prisma.CheckinRecordUncheckedUpdateWithoutEventInput>;
};
export type CheckinRecordUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.CheckinRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.CheckinRecordUpdateManyMutationInput, Prisma.CheckinRecordUncheckedUpdateManyWithoutEventInput>;
};
export type CheckinRecordCreateWithoutGuestInput = {
    id?: string;
    eventKey?: string;
    method?: $Enums.CheckinMethod;
    adultCount?: number;
    childCount?: number;
    note?: string | null;
    checkedInAt?: Date | string;
    checkedOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutCheckinRecordsInput;
    event?: Prisma.EventCreateNestedOneWithoutCheckinRecordsInput;
    invitation?: Prisma.InvitationCreateNestedOneWithoutCheckinRecordsInput;
    station?: Prisma.CheckinStationCreateNestedOneWithoutRecordsInput;
};
export type CheckinRecordUncheckedCreateWithoutGuestInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    invitationId?: string | null;
    stationId?: string | null;
    method?: $Enums.CheckinMethod;
    adultCount?: number;
    childCount?: number;
    note?: string | null;
    checkedInAt?: Date | string;
    checkedOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckinRecordCreateOrConnectWithoutGuestInput = {
    where: Prisma.CheckinRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckinRecordCreateWithoutGuestInput, Prisma.CheckinRecordUncheckedCreateWithoutGuestInput>;
};
export type CheckinRecordCreateManyGuestInputEnvelope = {
    data: Prisma.CheckinRecordCreateManyGuestInput | Prisma.CheckinRecordCreateManyGuestInput[];
    skipDuplicates?: boolean;
};
export type CheckinRecordUpsertWithWhereUniqueWithoutGuestInput = {
    where: Prisma.CheckinRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.CheckinRecordUpdateWithoutGuestInput, Prisma.CheckinRecordUncheckedUpdateWithoutGuestInput>;
    create: Prisma.XOR<Prisma.CheckinRecordCreateWithoutGuestInput, Prisma.CheckinRecordUncheckedCreateWithoutGuestInput>;
};
export type CheckinRecordUpdateWithWhereUniqueWithoutGuestInput = {
    where: Prisma.CheckinRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.CheckinRecordUpdateWithoutGuestInput, Prisma.CheckinRecordUncheckedUpdateWithoutGuestInput>;
};
export type CheckinRecordUpdateManyWithWhereWithoutGuestInput = {
    where: Prisma.CheckinRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.CheckinRecordUpdateManyMutationInput, Prisma.CheckinRecordUncheckedUpdateManyWithoutGuestInput>;
};
export type CheckinRecordCreateWithoutInvitationInput = {
    id?: string;
    eventKey?: string;
    method?: $Enums.CheckinMethod;
    adultCount?: number;
    childCount?: number;
    note?: string | null;
    checkedInAt?: Date | string;
    checkedOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutCheckinRecordsInput;
    event?: Prisma.EventCreateNestedOneWithoutCheckinRecordsInput;
    guest: Prisma.GuestCreateNestedOneWithoutCheckinRecordsInput;
    station?: Prisma.CheckinStationCreateNestedOneWithoutRecordsInput;
};
export type CheckinRecordUncheckedCreateWithoutInvitationInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    guestId: string;
    stationId?: string | null;
    method?: $Enums.CheckinMethod;
    adultCount?: number;
    childCount?: number;
    note?: string | null;
    checkedInAt?: Date | string;
    checkedOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckinRecordCreateOrConnectWithoutInvitationInput = {
    where: Prisma.CheckinRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckinRecordCreateWithoutInvitationInput, Prisma.CheckinRecordUncheckedCreateWithoutInvitationInput>;
};
export type CheckinRecordCreateManyInvitationInputEnvelope = {
    data: Prisma.CheckinRecordCreateManyInvitationInput | Prisma.CheckinRecordCreateManyInvitationInput[];
    skipDuplicates?: boolean;
};
export type CheckinRecordUpsertWithWhereUniqueWithoutInvitationInput = {
    where: Prisma.CheckinRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.CheckinRecordUpdateWithoutInvitationInput, Prisma.CheckinRecordUncheckedUpdateWithoutInvitationInput>;
    create: Prisma.XOR<Prisma.CheckinRecordCreateWithoutInvitationInput, Prisma.CheckinRecordUncheckedCreateWithoutInvitationInput>;
};
export type CheckinRecordUpdateWithWhereUniqueWithoutInvitationInput = {
    where: Prisma.CheckinRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.CheckinRecordUpdateWithoutInvitationInput, Prisma.CheckinRecordUncheckedUpdateWithoutInvitationInput>;
};
export type CheckinRecordUpdateManyWithWhereWithoutInvitationInput = {
    where: Prisma.CheckinRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.CheckinRecordUpdateManyMutationInput, Prisma.CheckinRecordUncheckedUpdateManyWithoutInvitationInput>;
};
export type CheckinRecordCreateWithoutStationInput = {
    id?: string;
    eventKey?: string;
    method?: $Enums.CheckinMethod;
    adultCount?: number;
    childCount?: number;
    note?: string | null;
    checkedInAt?: Date | string;
    checkedOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutCheckinRecordsInput;
    event?: Prisma.EventCreateNestedOneWithoutCheckinRecordsInput;
    guest: Prisma.GuestCreateNestedOneWithoutCheckinRecordsInput;
    invitation?: Prisma.InvitationCreateNestedOneWithoutCheckinRecordsInput;
};
export type CheckinRecordUncheckedCreateWithoutStationInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    guestId: string;
    invitationId?: string | null;
    method?: $Enums.CheckinMethod;
    adultCount?: number;
    childCount?: number;
    note?: string | null;
    checkedInAt?: Date | string;
    checkedOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckinRecordCreateOrConnectWithoutStationInput = {
    where: Prisma.CheckinRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckinRecordCreateWithoutStationInput, Prisma.CheckinRecordUncheckedCreateWithoutStationInput>;
};
export type CheckinRecordCreateManyStationInputEnvelope = {
    data: Prisma.CheckinRecordCreateManyStationInput | Prisma.CheckinRecordCreateManyStationInput[];
    skipDuplicates?: boolean;
};
export type CheckinRecordUpsertWithWhereUniqueWithoutStationInput = {
    where: Prisma.CheckinRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.CheckinRecordUpdateWithoutStationInput, Prisma.CheckinRecordUncheckedUpdateWithoutStationInput>;
    create: Prisma.XOR<Prisma.CheckinRecordCreateWithoutStationInput, Prisma.CheckinRecordUncheckedCreateWithoutStationInput>;
};
export type CheckinRecordUpdateWithWhereUniqueWithoutStationInput = {
    where: Prisma.CheckinRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.CheckinRecordUpdateWithoutStationInput, Prisma.CheckinRecordUncheckedUpdateWithoutStationInput>;
};
export type CheckinRecordUpdateManyWithWhereWithoutStationInput = {
    where: Prisma.CheckinRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.CheckinRecordUpdateManyMutationInput, Prisma.CheckinRecordUncheckedUpdateManyWithoutStationInput>;
};
export type CheckinRecordCreateManyWeddingInput = {
    id?: string;
    eventId?: string | null;
    eventKey?: string;
    guestId: string;
    invitationId?: string | null;
    stationId?: string | null;
    method?: $Enums.CheckinMethod;
    adultCount?: number;
    childCount?: number;
    note?: string | null;
    checkedInAt?: Date | string;
    checkedOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckinRecordUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneWithoutCheckinRecordsNestedInput;
    guest?: Prisma.GuestUpdateOneRequiredWithoutCheckinRecordsNestedInput;
    invitation?: Prisma.InvitationUpdateOneWithoutCheckinRecordsNestedInput;
    station?: Prisma.CheckinStationUpdateOneWithoutRecordsNestedInput;
};
export type CheckinRecordUncheckedUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinRecordUncheckedUpdateManyWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinRecordCreateManyEventInput = {
    id?: string;
    weddingId: string;
    eventKey?: string;
    guestId: string;
    invitationId?: string | null;
    stationId?: string | null;
    method?: $Enums.CheckinMethod;
    adultCount?: number;
    childCount?: number;
    note?: string | null;
    checkedInAt?: Date | string;
    checkedOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckinRecordUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutCheckinRecordsNestedInput;
    guest?: Prisma.GuestUpdateOneRequiredWithoutCheckinRecordsNestedInput;
    invitation?: Prisma.InvitationUpdateOneWithoutCheckinRecordsNestedInput;
    station?: Prisma.CheckinStationUpdateOneWithoutRecordsNestedInput;
};
export type CheckinRecordUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinRecordUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinRecordCreateManyGuestInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    invitationId?: string | null;
    stationId?: string | null;
    method?: $Enums.CheckinMethod;
    adultCount?: number;
    childCount?: number;
    note?: string | null;
    checkedInAt?: Date | string;
    checkedOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckinRecordUpdateWithoutGuestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutCheckinRecordsNestedInput;
    event?: Prisma.EventUpdateOneWithoutCheckinRecordsNestedInput;
    invitation?: Prisma.InvitationUpdateOneWithoutCheckinRecordsNestedInput;
    station?: Prisma.CheckinStationUpdateOneWithoutRecordsNestedInput;
};
export type CheckinRecordUncheckedUpdateWithoutGuestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinRecordUncheckedUpdateManyWithoutGuestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinRecordCreateManyInvitationInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    guestId: string;
    stationId?: string | null;
    method?: $Enums.CheckinMethod;
    adultCount?: number;
    childCount?: number;
    note?: string | null;
    checkedInAt?: Date | string;
    checkedOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckinRecordUpdateWithoutInvitationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutCheckinRecordsNestedInput;
    event?: Prisma.EventUpdateOneWithoutCheckinRecordsNestedInput;
    guest?: Prisma.GuestUpdateOneRequiredWithoutCheckinRecordsNestedInput;
    station?: Prisma.CheckinStationUpdateOneWithoutRecordsNestedInput;
};
export type CheckinRecordUncheckedUpdateWithoutInvitationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    stationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinRecordUncheckedUpdateManyWithoutInvitationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    stationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinRecordCreateManyStationInput = {
    id?: string;
    weddingId: string;
    eventId?: string | null;
    eventKey?: string;
    guestId: string;
    invitationId?: string | null;
    method?: $Enums.CheckinMethod;
    adultCount?: number;
    childCount?: number;
    note?: string | null;
    checkedInAt?: Date | string;
    checkedOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckinRecordUpdateWithoutStationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutCheckinRecordsNestedInput;
    event?: Prisma.EventUpdateOneWithoutCheckinRecordsNestedInput;
    guest?: Prisma.GuestUpdateOneRequiredWithoutCheckinRecordsNestedInput;
    invitation?: Prisma.InvitationUpdateOneWithoutCheckinRecordsNestedInput;
};
export type CheckinRecordUncheckedUpdateWithoutStationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinRecordUncheckedUpdateManyWithoutStationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventKey?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    method?: Prisma.EnumCheckinMethodFieldUpdateOperationsInput | $Enums.CheckinMethod;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkedOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckinRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    eventId?: boolean;
    eventKey?: boolean;
    guestId?: boolean;
    invitationId?: boolean;
    stationId?: boolean;
    method?: boolean;
    adultCount?: boolean;
    childCount?: boolean;
    note?: boolean;
    checkedInAt?: boolean;
    checkedOutAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.CheckinRecord$eventArgs<ExtArgs>;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.CheckinRecord$invitationArgs<ExtArgs>;
    station?: boolean | Prisma.CheckinRecord$stationArgs<ExtArgs>;
}, ExtArgs["result"]["checkinRecord"]>;
export type CheckinRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    eventId?: boolean;
    eventKey?: boolean;
    guestId?: boolean;
    invitationId?: boolean;
    stationId?: boolean;
    method?: boolean;
    adultCount?: boolean;
    childCount?: boolean;
    note?: boolean;
    checkedInAt?: boolean;
    checkedOutAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.CheckinRecord$eventArgs<ExtArgs>;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.CheckinRecord$invitationArgs<ExtArgs>;
    station?: boolean | Prisma.CheckinRecord$stationArgs<ExtArgs>;
}, ExtArgs["result"]["checkinRecord"]>;
export type CheckinRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    eventId?: boolean;
    eventKey?: boolean;
    guestId?: boolean;
    invitationId?: boolean;
    stationId?: boolean;
    method?: boolean;
    adultCount?: boolean;
    childCount?: boolean;
    note?: boolean;
    checkedInAt?: boolean;
    checkedOutAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.CheckinRecord$eventArgs<ExtArgs>;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.CheckinRecord$invitationArgs<ExtArgs>;
    station?: boolean | Prisma.CheckinRecord$stationArgs<ExtArgs>;
}, ExtArgs["result"]["checkinRecord"]>;
export type CheckinRecordSelectScalar = {
    id?: boolean;
    weddingId?: boolean;
    eventId?: boolean;
    eventKey?: boolean;
    guestId?: boolean;
    invitationId?: boolean;
    stationId?: boolean;
    method?: boolean;
    adultCount?: boolean;
    childCount?: boolean;
    note?: boolean;
    checkedInAt?: boolean;
    checkedOutAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CheckinRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "weddingId" | "eventId" | "eventKey" | "guestId" | "invitationId" | "stationId" | "method" | "adultCount" | "childCount" | "note" | "checkedInAt" | "checkedOutAt" | "createdAt" | "updatedAt", ExtArgs["result"]["checkinRecord"]>;
export type CheckinRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.CheckinRecord$eventArgs<ExtArgs>;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.CheckinRecord$invitationArgs<ExtArgs>;
    station?: boolean | Prisma.CheckinRecord$stationArgs<ExtArgs>;
};
export type CheckinRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.CheckinRecord$eventArgs<ExtArgs>;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.CheckinRecord$invitationArgs<ExtArgs>;
    station?: boolean | Prisma.CheckinRecord$stationArgs<ExtArgs>;
};
export type CheckinRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.CheckinRecord$eventArgs<ExtArgs>;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.CheckinRecord$invitationArgs<ExtArgs>;
    station?: boolean | Prisma.CheckinRecord$stationArgs<ExtArgs>;
};
export type $CheckinRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CheckinRecord";
    objects: {
        wedding: Prisma.$WeddingPayload<ExtArgs>;
        event: Prisma.$EventPayload<ExtArgs> | null;
        guest: Prisma.$GuestPayload<ExtArgs>;
        invitation: Prisma.$InvitationPayload<ExtArgs> | null;
        station: Prisma.$CheckinStationPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        weddingId: string;
        eventId: string | null;
        eventKey: string;
        guestId: string;
        invitationId: string | null;
        stationId: string | null;
        method: $Enums.CheckinMethod;
        adultCount: number;
        childCount: number;
        note: string | null;
        checkedInAt: Date;
        checkedOutAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["checkinRecord"]>;
    composites: {};
};
export type CheckinRecordGetPayload<S extends boolean | null | undefined | CheckinRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CheckinRecordPayload, S>;
export type CheckinRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CheckinRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CheckinRecordCountAggregateInputType | true;
};
export interface CheckinRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CheckinRecord'];
        meta: {
            name: 'CheckinRecord';
        };
    };
    findUnique<T extends CheckinRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, CheckinRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CheckinRecordClient<runtime.Types.Result.GetResult<Prisma.$CheckinRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CheckinRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CheckinRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CheckinRecordClient<runtime.Types.Result.GetResult<Prisma.$CheckinRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CheckinRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, CheckinRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__CheckinRecordClient<runtime.Types.Result.GetResult<Prisma.$CheckinRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CheckinRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CheckinRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CheckinRecordClient<runtime.Types.Result.GetResult<Prisma.$CheckinRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CheckinRecordFindManyArgs>(args?: Prisma.SelectSubset<T, CheckinRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckinRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CheckinRecordCreateArgs>(args: Prisma.SelectSubset<T, CheckinRecordCreateArgs<ExtArgs>>): Prisma.Prisma__CheckinRecordClient<runtime.Types.Result.GetResult<Prisma.$CheckinRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CheckinRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, CheckinRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CheckinRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CheckinRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckinRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CheckinRecordDeleteArgs>(args: Prisma.SelectSubset<T, CheckinRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__CheckinRecordClient<runtime.Types.Result.GetResult<Prisma.$CheckinRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CheckinRecordUpdateArgs>(args: Prisma.SelectSubset<T, CheckinRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__CheckinRecordClient<runtime.Types.Result.GetResult<Prisma.$CheckinRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CheckinRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, CheckinRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CheckinRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, CheckinRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CheckinRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CheckinRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckinRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CheckinRecordUpsertArgs>(args: Prisma.SelectSubset<T, CheckinRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__CheckinRecordClient<runtime.Types.Result.GetResult<Prisma.$CheckinRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CheckinRecordCountArgs>(args?: Prisma.Subset<T, CheckinRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CheckinRecordCountAggregateOutputType> : number>;
    aggregate<T extends CheckinRecordAggregateArgs>(args: Prisma.Subset<T, CheckinRecordAggregateArgs>): Prisma.PrismaPromise<GetCheckinRecordAggregateType<T>>;
    groupBy<T extends CheckinRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CheckinRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: CheckinRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CheckinRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckinRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CheckinRecordFieldRefs;
}
export interface Prisma__CheckinRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wedding<T extends Prisma.WeddingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WeddingDefaultArgs<ExtArgs>>): Prisma.Prisma__WeddingClient<runtime.Types.Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    event<T extends Prisma.CheckinRecord$eventArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CheckinRecord$eventArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    guest<T extends Prisma.GuestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GuestDefaultArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    invitation<T extends Prisma.CheckinRecord$invitationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CheckinRecord$invitationArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    station<T extends Prisma.CheckinRecord$stationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CheckinRecord$stationArgs<ExtArgs>>): Prisma.Prisma__CheckinStationClient<runtime.Types.Result.GetResult<Prisma.$CheckinStationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CheckinRecordFieldRefs {
    readonly id: Prisma.FieldRef<"CheckinRecord", 'String'>;
    readonly weddingId: Prisma.FieldRef<"CheckinRecord", 'String'>;
    readonly eventId: Prisma.FieldRef<"CheckinRecord", 'String'>;
    readonly eventKey: Prisma.FieldRef<"CheckinRecord", 'String'>;
    readonly guestId: Prisma.FieldRef<"CheckinRecord", 'String'>;
    readonly invitationId: Prisma.FieldRef<"CheckinRecord", 'String'>;
    readonly stationId: Prisma.FieldRef<"CheckinRecord", 'String'>;
    readonly method: Prisma.FieldRef<"CheckinRecord", 'CheckinMethod'>;
    readonly adultCount: Prisma.FieldRef<"CheckinRecord", 'Int'>;
    readonly childCount: Prisma.FieldRef<"CheckinRecord", 'Int'>;
    readonly note: Prisma.FieldRef<"CheckinRecord", 'String'>;
    readonly checkedInAt: Prisma.FieldRef<"CheckinRecord", 'DateTime'>;
    readonly checkedOutAt: Prisma.FieldRef<"CheckinRecord", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"CheckinRecord", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CheckinRecord", 'DateTime'>;
}
export type CheckinRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinRecordSelect<ExtArgs> | null;
    omit?: Prisma.CheckinRecordOmit<ExtArgs> | null;
    include?: Prisma.CheckinRecordInclude<ExtArgs> | null;
    where: Prisma.CheckinRecordWhereUniqueInput;
};
export type CheckinRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinRecordSelect<ExtArgs> | null;
    omit?: Prisma.CheckinRecordOmit<ExtArgs> | null;
    include?: Prisma.CheckinRecordInclude<ExtArgs> | null;
    where: Prisma.CheckinRecordWhereUniqueInput;
};
export type CheckinRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CheckinRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CheckinRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CheckinRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinRecordSelect<ExtArgs> | null;
    omit?: Prisma.CheckinRecordOmit<ExtArgs> | null;
    include?: Prisma.CheckinRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CheckinRecordCreateInput, Prisma.CheckinRecordUncheckedCreateInput>;
};
export type CheckinRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CheckinRecordCreateManyInput | Prisma.CheckinRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CheckinRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinRecordSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CheckinRecordOmit<ExtArgs> | null;
    data: Prisma.CheckinRecordCreateManyInput | Prisma.CheckinRecordCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CheckinRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CheckinRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinRecordSelect<ExtArgs> | null;
    omit?: Prisma.CheckinRecordOmit<ExtArgs> | null;
    include?: Prisma.CheckinRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CheckinRecordUpdateInput, Prisma.CheckinRecordUncheckedUpdateInput>;
    where: Prisma.CheckinRecordWhereUniqueInput;
};
export type CheckinRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CheckinRecordUpdateManyMutationInput, Prisma.CheckinRecordUncheckedUpdateManyInput>;
    where?: Prisma.CheckinRecordWhereInput;
    limit?: number;
};
export type CheckinRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CheckinRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CheckinRecordUpdateManyMutationInput, Prisma.CheckinRecordUncheckedUpdateManyInput>;
    where?: Prisma.CheckinRecordWhereInput;
    limit?: number;
    include?: Prisma.CheckinRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CheckinRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinRecordSelect<ExtArgs> | null;
    omit?: Prisma.CheckinRecordOmit<ExtArgs> | null;
    include?: Prisma.CheckinRecordInclude<ExtArgs> | null;
    where: Prisma.CheckinRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckinRecordCreateInput, Prisma.CheckinRecordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CheckinRecordUpdateInput, Prisma.CheckinRecordUncheckedUpdateInput>;
};
export type CheckinRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinRecordSelect<ExtArgs> | null;
    omit?: Prisma.CheckinRecordOmit<ExtArgs> | null;
    include?: Prisma.CheckinRecordInclude<ExtArgs> | null;
    where: Prisma.CheckinRecordWhereUniqueInput;
};
export type CheckinRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CheckinRecordWhereInput;
    limit?: number;
};
export type CheckinRecord$eventArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
};
export type CheckinRecord$invitationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
    where?: Prisma.InvitationWhereInput;
};
export type CheckinRecord$stationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinStationSelect<ExtArgs> | null;
    omit?: Prisma.CheckinStationOmit<ExtArgs> | null;
    include?: Prisma.CheckinStationInclude<ExtArgs> | null;
    where?: Prisma.CheckinStationWhereInput;
};
export type CheckinRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckinRecordSelect<ExtArgs> | null;
    omit?: Prisma.CheckinRecordOmit<ExtArgs> | null;
    include?: Prisma.CheckinRecordInclude<ExtArgs> | null;
};
