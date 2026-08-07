import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RsvpHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$RsvpHistoryPayload>;
export type AggregateRsvpHistory = {
    _count: RsvpHistoryCountAggregateOutputType | null;
    _avg: RsvpHistoryAvgAggregateOutputType | null;
    _sum: RsvpHistorySumAggregateOutputType | null;
    _min: RsvpHistoryMinAggregateOutputType | null;
    _max: RsvpHistoryMaxAggregateOutputType | null;
};
export type RsvpHistoryAvgAggregateOutputType = {
    adultCount: number | null;
    childCount: number | null;
    vegetarianCount: number | null;
};
export type RsvpHistorySumAggregateOutputType = {
    adultCount: number | null;
    childCount: number | null;
    vegetarianCount: number | null;
};
export type RsvpHistoryMinAggregateOutputType = {
    id: string | null;
    rsvpId: string | null;
    status: $Enums.RsvpStatus | null;
    adultCount: number | null;
    childCount: number | null;
    vegetarianCount: number | null;
    needsTransport: boolean | null;
    message: string | null;
    source: string | null;
    createdAt: Date | null;
};
export type RsvpHistoryMaxAggregateOutputType = {
    id: string | null;
    rsvpId: string | null;
    status: $Enums.RsvpStatus | null;
    adultCount: number | null;
    childCount: number | null;
    vegetarianCount: number | null;
    needsTransport: boolean | null;
    message: string | null;
    source: string | null;
    createdAt: Date | null;
};
export type RsvpHistoryCountAggregateOutputType = {
    id: number;
    rsvpId: number;
    status: number;
    adultCount: number;
    childCount: number;
    vegetarianCount: number;
    needsTransport: number;
    message: number;
    selectedEventIds: number;
    source: number;
    createdAt: number;
    _all: number;
};
export type RsvpHistoryAvgAggregateInputType = {
    adultCount?: true;
    childCount?: true;
    vegetarianCount?: true;
};
export type RsvpHistorySumAggregateInputType = {
    adultCount?: true;
    childCount?: true;
    vegetarianCount?: true;
};
export type RsvpHistoryMinAggregateInputType = {
    id?: true;
    rsvpId?: true;
    status?: true;
    adultCount?: true;
    childCount?: true;
    vegetarianCount?: true;
    needsTransport?: true;
    message?: true;
    source?: true;
    createdAt?: true;
};
export type RsvpHistoryMaxAggregateInputType = {
    id?: true;
    rsvpId?: true;
    status?: true;
    adultCount?: true;
    childCount?: true;
    vegetarianCount?: true;
    needsTransport?: true;
    message?: true;
    source?: true;
    createdAt?: true;
};
export type RsvpHistoryCountAggregateInputType = {
    id?: true;
    rsvpId?: true;
    status?: true;
    adultCount?: true;
    childCount?: true;
    vegetarianCount?: true;
    needsTransport?: true;
    message?: true;
    selectedEventIds?: true;
    source?: true;
    createdAt?: true;
    _all?: true;
};
export type RsvpHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RsvpHistoryWhereInput;
    orderBy?: Prisma.RsvpHistoryOrderByWithRelationInput | Prisma.RsvpHistoryOrderByWithRelationInput[];
    cursor?: Prisma.RsvpHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RsvpHistoryCountAggregateInputType;
    _avg?: RsvpHistoryAvgAggregateInputType;
    _sum?: RsvpHistorySumAggregateInputType;
    _min?: RsvpHistoryMinAggregateInputType;
    _max?: RsvpHistoryMaxAggregateInputType;
};
export type GetRsvpHistoryAggregateType<T extends RsvpHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregateRsvpHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRsvpHistory[P]> : Prisma.GetScalarType<T[P], AggregateRsvpHistory[P]>;
};
export type RsvpHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RsvpHistoryWhereInput;
    orderBy?: Prisma.RsvpHistoryOrderByWithAggregationInput | Prisma.RsvpHistoryOrderByWithAggregationInput[];
    by: Prisma.RsvpHistoryScalarFieldEnum[] | Prisma.RsvpHistoryScalarFieldEnum;
    having?: Prisma.RsvpHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RsvpHistoryCountAggregateInputType | true;
    _avg?: RsvpHistoryAvgAggregateInputType;
    _sum?: RsvpHistorySumAggregateInputType;
    _min?: RsvpHistoryMinAggregateInputType;
    _max?: RsvpHistoryMaxAggregateInputType;
};
export type RsvpHistoryGroupByOutputType = {
    id: string;
    rsvpId: string;
    status: $Enums.RsvpStatus;
    adultCount: number;
    childCount: number;
    vegetarianCount: number;
    needsTransport: boolean;
    message: string | null;
    selectedEventIds: string[];
    source: string;
    createdAt: Date;
    _count: RsvpHistoryCountAggregateOutputType | null;
    _avg: RsvpHistoryAvgAggregateOutputType | null;
    _sum: RsvpHistorySumAggregateOutputType | null;
    _min: RsvpHistoryMinAggregateOutputType | null;
    _max: RsvpHistoryMaxAggregateOutputType | null;
};
export type GetRsvpHistoryGroupByPayload<T extends RsvpHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RsvpHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RsvpHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RsvpHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RsvpHistoryGroupByOutputType[P]>;
}>>;
export type RsvpHistoryWhereInput = {
    AND?: Prisma.RsvpHistoryWhereInput | Prisma.RsvpHistoryWhereInput[];
    OR?: Prisma.RsvpHistoryWhereInput[];
    NOT?: Prisma.RsvpHistoryWhereInput | Prisma.RsvpHistoryWhereInput[];
    id?: Prisma.StringFilter<"RsvpHistory"> | string;
    rsvpId?: Prisma.StringFilter<"RsvpHistory"> | string;
    status?: Prisma.EnumRsvpStatusFilter<"RsvpHistory"> | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFilter<"RsvpHistory"> | number;
    childCount?: Prisma.IntFilter<"RsvpHistory"> | number;
    vegetarianCount?: Prisma.IntFilter<"RsvpHistory"> | number;
    needsTransport?: Prisma.BoolFilter<"RsvpHistory"> | boolean;
    message?: Prisma.StringNullableFilter<"RsvpHistory"> | string | null;
    selectedEventIds?: Prisma.StringNullableListFilter<"RsvpHistory">;
    source?: Prisma.StringFilter<"RsvpHistory"> | string;
    createdAt?: Prisma.DateTimeFilter<"RsvpHistory"> | Date | string;
    rsvp?: Prisma.XOR<Prisma.RsvpScalarRelationFilter, Prisma.RsvpWhereInput>;
};
export type RsvpHistoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rsvpId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    vegetarianCount?: Prisma.SortOrder;
    needsTransport?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    selectedEventIds?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    rsvp?: Prisma.RsvpOrderByWithRelationInput;
};
export type RsvpHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RsvpHistoryWhereInput | Prisma.RsvpHistoryWhereInput[];
    OR?: Prisma.RsvpHistoryWhereInput[];
    NOT?: Prisma.RsvpHistoryWhereInput | Prisma.RsvpHistoryWhereInput[];
    rsvpId?: Prisma.StringFilter<"RsvpHistory"> | string;
    status?: Prisma.EnumRsvpStatusFilter<"RsvpHistory"> | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFilter<"RsvpHistory"> | number;
    childCount?: Prisma.IntFilter<"RsvpHistory"> | number;
    vegetarianCount?: Prisma.IntFilter<"RsvpHistory"> | number;
    needsTransport?: Prisma.BoolFilter<"RsvpHistory"> | boolean;
    message?: Prisma.StringNullableFilter<"RsvpHistory"> | string | null;
    selectedEventIds?: Prisma.StringNullableListFilter<"RsvpHistory">;
    source?: Prisma.StringFilter<"RsvpHistory"> | string;
    createdAt?: Prisma.DateTimeFilter<"RsvpHistory"> | Date | string;
    rsvp?: Prisma.XOR<Prisma.RsvpScalarRelationFilter, Prisma.RsvpWhereInput>;
}, "id">;
export type RsvpHistoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rsvpId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    vegetarianCount?: Prisma.SortOrder;
    needsTransport?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    selectedEventIds?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RsvpHistoryCountOrderByAggregateInput;
    _avg?: Prisma.RsvpHistoryAvgOrderByAggregateInput;
    _max?: Prisma.RsvpHistoryMaxOrderByAggregateInput;
    _min?: Prisma.RsvpHistoryMinOrderByAggregateInput;
    _sum?: Prisma.RsvpHistorySumOrderByAggregateInput;
};
export type RsvpHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.RsvpHistoryScalarWhereWithAggregatesInput | Prisma.RsvpHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.RsvpHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RsvpHistoryScalarWhereWithAggregatesInput | Prisma.RsvpHistoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RsvpHistory"> | string;
    rsvpId?: Prisma.StringWithAggregatesFilter<"RsvpHistory"> | string;
    status?: Prisma.EnumRsvpStatusWithAggregatesFilter<"RsvpHistory"> | $Enums.RsvpStatus;
    adultCount?: Prisma.IntWithAggregatesFilter<"RsvpHistory"> | number;
    childCount?: Prisma.IntWithAggregatesFilter<"RsvpHistory"> | number;
    vegetarianCount?: Prisma.IntWithAggregatesFilter<"RsvpHistory"> | number;
    needsTransport?: Prisma.BoolWithAggregatesFilter<"RsvpHistory"> | boolean;
    message?: Prisma.StringNullableWithAggregatesFilter<"RsvpHistory"> | string | null;
    selectedEventIds?: Prisma.StringNullableListFilter<"RsvpHistory">;
    source?: Prisma.StringWithAggregatesFilter<"RsvpHistory"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RsvpHistory"> | Date | string;
};
export type RsvpHistoryCreateInput = {
    id?: string;
    status: $Enums.RsvpStatus;
    adultCount: number;
    childCount: number;
    vegetarianCount: number;
    needsTransport: boolean;
    message?: string | null;
    selectedEventIds?: Prisma.RsvpHistoryCreateselectedEventIdsInput | string[];
    source?: string;
    createdAt?: Date | string;
    rsvp: Prisma.RsvpCreateNestedOneWithoutHistoryInput;
};
export type RsvpHistoryUncheckedCreateInput = {
    id?: string;
    rsvpId: string;
    status: $Enums.RsvpStatus;
    adultCount: number;
    childCount: number;
    vegetarianCount: number;
    needsTransport: boolean;
    message?: string | null;
    selectedEventIds?: Prisma.RsvpHistoryCreateselectedEventIdsInput | string[];
    source?: string;
    createdAt?: Date | string;
};
export type RsvpHistoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selectedEventIds?: Prisma.RsvpHistoryUpdateselectedEventIdsInput | string[];
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rsvp?: Prisma.RsvpUpdateOneRequiredWithoutHistoryNestedInput;
};
export type RsvpHistoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rsvpId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selectedEventIds?: Prisma.RsvpHistoryUpdateselectedEventIdsInput | string[];
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpHistoryCreateManyInput = {
    id?: string;
    rsvpId: string;
    status: $Enums.RsvpStatus;
    adultCount: number;
    childCount: number;
    vegetarianCount: number;
    needsTransport: boolean;
    message?: string | null;
    selectedEventIds?: Prisma.RsvpHistoryCreateselectedEventIdsInput | string[];
    source?: string;
    createdAt?: Date | string;
};
export type RsvpHistoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selectedEventIds?: Prisma.RsvpHistoryUpdateselectedEventIdsInput | string[];
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpHistoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rsvpId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selectedEventIds?: Prisma.RsvpHistoryUpdateselectedEventIdsInput | string[];
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpHistoryListRelationFilter = {
    every?: Prisma.RsvpHistoryWhereInput;
    some?: Prisma.RsvpHistoryWhereInput;
    none?: Prisma.RsvpHistoryWhereInput;
};
export type RsvpHistoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RsvpHistoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rsvpId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    vegetarianCount?: Prisma.SortOrder;
    needsTransport?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    selectedEventIds?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RsvpHistoryAvgOrderByAggregateInput = {
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    vegetarianCount?: Prisma.SortOrder;
};
export type RsvpHistoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rsvpId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    vegetarianCount?: Prisma.SortOrder;
    needsTransport?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RsvpHistoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rsvpId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    vegetarianCount?: Prisma.SortOrder;
    needsTransport?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RsvpHistorySumOrderByAggregateInput = {
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    vegetarianCount?: Prisma.SortOrder;
};
export type RsvpHistoryCreateNestedManyWithoutRsvpInput = {
    create?: Prisma.XOR<Prisma.RsvpHistoryCreateWithoutRsvpInput, Prisma.RsvpHistoryUncheckedCreateWithoutRsvpInput> | Prisma.RsvpHistoryCreateWithoutRsvpInput[] | Prisma.RsvpHistoryUncheckedCreateWithoutRsvpInput[];
    connectOrCreate?: Prisma.RsvpHistoryCreateOrConnectWithoutRsvpInput | Prisma.RsvpHistoryCreateOrConnectWithoutRsvpInput[];
    createMany?: Prisma.RsvpHistoryCreateManyRsvpInputEnvelope;
    connect?: Prisma.RsvpHistoryWhereUniqueInput | Prisma.RsvpHistoryWhereUniqueInput[];
};
export type RsvpHistoryUncheckedCreateNestedManyWithoutRsvpInput = {
    create?: Prisma.XOR<Prisma.RsvpHistoryCreateWithoutRsvpInput, Prisma.RsvpHistoryUncheckedCreateWithoutRsvpInput> | Prisma.RsvpHistoryCreateWithoutRsvpInput[] | Prisma.RsvpHistoryUncheckedCreateWithoutRsvpInput[];
    connectOrCreate?: Prisma.RsvpHistoryCreateOrConnectWithoutRsvpInput | Prisma.RsvpHistoryCreateOrConnectWithoutRsvpInput[];
    createMany?: Prisma.RsvpHistoryCreateManyRsvpInputEnvelope;
    connect?: Prisma.RsvpHistoryWhereUniqueInput | Prisma.RsvpHistoryWhereUniqueInput[];
};
export type RsvpHistoryUpdateManyWithoutRsvpNestedInput = {
    create?: Prisma.XOR<Prisma.RsvpHistoryCreateWithoutRsvpInput, Prisma.RsvpHistoryUncheckedCreateWithoutRsvpInput> | Prisma.RsvpHistoryCreateWithoutRsvpInput[] | Prisma.RsvpHistoryUncheckedCreateWithoutRsvpInput[];
    connectOrCreate?: Prisma.RsvpHistoryCreateOrConnectWithoutRsvpInput | Prisma.RsvpHistoryCreateOrConnectWithoutRsvpInput[];
    upsert?: Prisma.RsvpHistoryUpsertWithWhereUniqueWithoutRsvpInput | Prisma.RsvpHistoryUpsertWithWhereUniqueWithoutRsvpInput[];
    createMany?: Prisma.RsvpHistoryCreateManyRsvpInputEnvelope;
    set?: Prisma.RsvpHistoryWhereUniqueInput | Prisma.RsvpHistoryWhereUniqueInput[];
    disconnect?: Prisma.RsvpHistoryWhereUniqueInput | Prisma.RsvpHistoryWhereUniqueInput[];
    delete?: Prisma.RsvpHistoryWhereUniqueInput | Prisma.RsvpHistoryWhereUniqueInput[];
    connect?: Prisma.RsvpHistoryWhereUniqueInput | Prisma.RsvpHistoryWhereUniqueInput[];
    update?: Prisma.RsvpHistoryUpdateWithWhereUniqueWithoutRsvpInput | Prisma.RsvpHistoryUpdateWithWhereUniqueWithoutRsvpInput[];
    updateMany?: Prisma.RsvpHistoryUpdateManyWithWhereWithoutRsvpInput | Prisma.RsvpHistoryUpdateManyWithWhereWithoutRsvpInput[];
    deleteMany?: Prisma.RsvpHistoryScalarWhereInput | Prisma.RsvpHistoryScalarWhereInput[];
};
export type RsvpHistoryUncheckedUpdateManyWithoutRsvpNestedInput = {
    create?: Prisma.XOR<Prisma.RsvpHistoryCreateWithoutRsvpInput, Prisma.RsvpHistoryUncheckedCreateWithoutRsvpInput> | Prisma.RsvpHistoryCreateWithoutRsvpInput[] | Prisma.RsvpHistoryUncheckedCreateWithoutRsvpInput[];
    connectOrCreate?: Prisma.RsvpHistoryCreateOrConnectWithoutRsvpInput | Prisma.RsvpHistoryCreateOrConnectWithoutRsvpInput[];
    upsert?: Prisma.RsvpHistoryUpsertWithWhereUniqueWithoutRsvpInput | Prisma.RsvpHistoryUpsertWithWhereUniqueWithoutRsvpInput[];
    createMany?: Prisma.RsvpHistoryCreateManyRsvpInputEnvelope;
    set?: Prisma.RsvpHistoryWhereUniqueInput | Prisma.RsvpHistoryWhereUniqueInput[];
    disconnect?: Prisma.RsvpHistoryWhereUniqueInput | Prisma.RsvpHistoryWhereUniqueInput[];
    delete?: Prisma.RsvpHistoryWhereUniqueInput | Prisma.RsvpHistoryWhereUniqueInput[];
    connect?: Prisma.RsvpHistoryWhereUniqueInput | Prisma.RsvpHistoryWhereUniqueInput[];
    update?: Prisma.RsvpHistoryUpdateWithWhereUniqueWithoutRsvpInput | Prisma.RsvpHistoryUpdateWithWhereUniqueWithoutRsvpInput[];
    updateMany?: Prisma.RsvpHistoryUpdateManyWithWhereWithoutRsvpInput | Prisma.RsvpHistoryUpdateManyWithWhereWithoutRsvpInput[];
    deleteMany?: Prisma.RsvpHistoryScalarWhereInput | Prisma.RsvpHistoryScalarWhereInput[];
};
export type RsvpHistoryCreateselectedEventIdsInput = {
    set: string[];
};
export type RsvpHistoryUpdateselectedEventIdsInput = {
    set?: string[];
    push?: string | string[];
};
export type RsvpHistoryCreateWithoutRsvpInput = {
    id?: string;
    status: $Enums.RsvpStatus;
    adultCount: number;
    childCount: number;
    vegetarianCount: number;
    needsTransport: boolean;
    message?: string | null;
    selectedEventIds?: Prisma.RsvpHistoryCreateselectedEventIdsInput | string[];
    source?: string;
    createdAt?: Date | string;
};
export type RsvpHistoryUncheckedCreateWithoutRsvpInput = {
    id?: string;
    status: $Enums.RsvpStatus;
    adultCount: number;
    childCount: number;
    vegetarianCount: number;
    needsTransport: boolean;
    message?: string | null;
    selectedEventIds?: Prisma.RsvpHistoryCreateselectedEventIdsInput | string[];
    source?: string;
    createdAt?: Date | string;
};
export type RsvpHistoryCreateOrConnectWithoutRsvpInput = {
    where: Prisma.RsvpHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.RsvpHistoryCreateWithoutRsvpInput, Prisma.RsvpHistoryUncheckedCreateWithoutRsvpInput>;
};
export type RsvpHistoryCreateManyRsvpInputEnvelope = {
    data: Prisma.RsvpHistoryCreateManyRsvpInput | Prisma.RsvpHistoryCreateManyRsvpInput[];
    skipDuplicates?: boolean;
};
export type RsvpHistoryUpsertWithWhereUniqueWithoutRsvpInput = {
    where: Prisma.RsvpHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.RsvpHistoryUpdateWithoutRsvpInput, Prisma.RsvpHistoryUncheckedUpdateWithoutRsvpInput>;
    create: Prisma.XOR<Prisma.RsvpHistoryCreateWithoutRsvpInput, Prisma.RsvpHistoryUncheckedCreateWithoutRsvpInput>;
};
export type RsvpHistoryUpdateWithWhereUniqueWithoutRsvpInput = {
    where: Prisma.RsvpHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.RsvpHistoryUpdateWithoutRsvpInput, Prisma.RsvpHistoryUncheckedUpdateWithoutRsvpInput>;
};
export type RsvpHistoryUpdateManyWithWhereWithoutRsvpInput = {
    where: Prisma.RsvpHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.RsvpHistoryUpdateManyMutationInput, Prisma.RsvpHistoryUncheckedUpdateManyWithoutRsvpInput>;
};
export type RsvpHistoryScalarWhereInput = {
    AND?: Prisma.RsvpHistoryScalarWhereInput | Prisma.RsvpHistoryScalarWhereInput[];
    OR?: Prisma.RsvpHistoryScalarWhereInput[];
    NOT?: Prisma.RsvpHistoryScalarWhereInput | Prisma.RsvpHistoryScalarWhereInput[];
    id?: Prisma.StringFilter<"RsvpHistory"> | string;
    rsvpId?: Prisma.StringFilter<"RsvpHistory"> | string;
    status?: Prisma.EnumRsvpStatusFilter<"RsvpHistory"> | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFilter<"RsvpHistory"> | number;
    childCount?: Prisma.IntFilter<"RsvpHistory"> | number;
    vegetarianCount?: Prisma.IntFilter<"RsvpHistory"> | number;
    needsTransport?: Prisma.BoolFilter<"RsvpHistory"> | boolean;
    message?: Prisma.StringNullableFilter<"RsvpHistory"> | string | null;
    selectedEventIds?: Prisma.StringNullableListFilter<"RsvpHistory">;
    source?: Prisma.StringFilter<"RsvpHistory"> | string;
    createdAt?: Prisma.DateTimeFilter<"RsvpHistory"> | Date | string;
};
export type RsvpHistoryCreateManyRsvpInput = {
    id?: string;
    status: $Enums.RsvpStatus;
    adultCount: number;
    childCount: number;
    vegetarianCount: number;
    needsTransport: boolean;
    message?: string | null;
    selectedEventIds?: Prisma.RsvpHistoryCreateselectedEventIdsInput | string[];
    source?: string;
    createdAt?: Date | string;
};
export type RsvpHistoryUpdateWithoutRsvpInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selectedEventIds?: Prisma.RsvpHistoryUpdateselectedEventIdsInput | string[];
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpHistoryUncheckedUpdateWithoutRsvpInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selectedEventIds?: Prisma.RsvpHistoryUpdateselectedEventIdsInput | string[];
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpHistoryUncheckedUpdateManyWithoutRsvpInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selectedEventIds?: Prisma.RsvpHistoryUpdateselectedEventIdsInput | string[];
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rsvpId?: boolean;
    status?: boolean;
    adultCount?: boolean;
    childCount?: boolean;
    vegetarianCount?: boolean;
    needsTransport?: boolean;
    message?: boolean;
    selectedEventIds?: boolean;
    source?: boolean;
    createdAt?: boolean;
    rsvp?: boolean | Prisma.RsvpDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rsvpHistory"]>;
export type RsvpHistorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rsvpId?: boolean;
    status?: boolean;
    adultCount?: boolean;
    childCount?: boolean;
    vegetarianCount?: boolean;
    needsTransport?: boolean;
    message?: boolean;
    selectedEventIds?: boolean;
    source?: boolean;
    createdAt?: boolean;
    rsvp?: boolean | Prisma.RsvpDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rsvpHistory"]>;
export type RsvpHistorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rsvpId?: boolean;
    status?: boolean;
    adultCount?: boolean;
    childCount?: boolean;
    vegetarianCount?: boolean;
    needsTransport?: boolean;
    message?: boolean;
    selectedEventIds?: boolean;
    source?: boolean;
    createdAt?: boolean;
    rsvp?: boolean | Prisma.RsvpDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rsvpHistory"]>;
export type RsvpHistorySelectScalar = {
    id?: boolean;
    rsvpId?: boolean;
    status?: boolean;
    adultCount?: boolean;
    childCount?: boolean;
    vegetarianCount?: boolean;
    needsTransport?: boolean;
    message?: boolean;
    selectedEventIds?: boolean;
    source?: boolean;
    createdAt?: boolean;
};
export type RsvpHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rsvpId" | "status" | "adultCount" | "childCount" | "vegetarianCount" | "needsTransport" | "message" | "selectedEventIds" | "source" | "createdAt", ExtArgs["result"]["rsvpHistory"]>;
export type RsvpHistoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rsvp?: boolean | Prisma.RsvpDefaultArgs<ExtArgs>;
};
export type RsvpHistoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rsvp?: boolean | Prisma.RsvpDefaultArgs<ExtArgs>;
};
export type RsvpHistoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rsvp?: boolean | Prisma.RsvpDefaultArgs<ExtArgs>;
};
export type $RsvpHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RsvpHistory";
    objects: {
        rsvp: Prisma.$RsvpPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        rsvpId: string;
        status: $Enums.RsvpStatus;
        adultCount: number;
        childCount: number;
        vegetarianCount: number;
        needsTransport: boolean;
        message: string | null;
        selectedEventIds: string[];
        source: string;
        createdAt: Date;
    }, ExtArgs["result"]["rsvpHistory"]>;
    composites: {};
};
export type RsvpHistoryGetPayload<S extends boolean | null | undefined | RsvpHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RsvpHistoryPayload, S>;
export type RsvpHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RsvpHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RsvpHistoryCountAggregateInputType | true;
};
export interface RsvpHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RsvpHistory'];
        meta: {
            name: 'RsvpHistory';
        };
    };
    findUnique<T extends RsvpHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, RsvpHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RsvpHistoryClient<runtime.Types.Result.GetResult<Prisma.$RsvpHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RsvpHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RsvpHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RsvpHistoryClient<runtime.Types.Result.GetResult<Prisma.$RsvpHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RsvpHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, RsvpHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__RsvpHistoryClient<runtime.Types.Result.GetResult<Prisma.$RsvpHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RsvpHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RsvpHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RsvpHistoryClient<runtime.Types.Result.GetResult<Prisma.$RsvpHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RsvpHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, RsvpHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RsvpHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RsvpHistoryCreateArgs>(args: Prisma.SelectSubset<T, RsvpHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__RsvpHistoryClient<runtime.Types.Result.GetResult<Prisma.$RsvpHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RsvpHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, RsvpHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RsvpHistoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RsvpHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RsvpHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RsvpHistoryDeleteArgs>(args: Prisma.SelectSubset<T, RsvpHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__RsvpHistoryClient<runtime.Types.Result.GetResult<Prisma.$RsvpHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RsvpHistoryUpdateArgs>(args: Prisma.SelectSubset<T, RsvpHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__RsvpHistoryClient<runtime.Types.Result.GetResult<Prisma.$RsvpHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RsvpHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, RsvpHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RsvpHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, RsvpHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RsvpHistoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RsvpHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RsvpHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RsvpHistoryUpsertArgs>(args: Prisma.SelectSubset<T, RsvpHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__RsvpHistoryClient<runtime.Types.Result.GetResult<Prisma.$RsvpHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RsvpHistoryCountArgs>(args?: Prisma.Subset<T, RsvpHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RsvpHistoryCountAggregateOutputType> : number>;
    aggregate<T extends RsvpHistoryAggregateArgs>(args: Prisma.Subset<T, RsvpHistoryAggregateArgs>): Prisma.PrismaPromise<GetRsvpHistoryAggregateType<T>>;
    groupBy<T extends RsvpHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RsvpHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: RsvpHistoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RsvpHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRsvpHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RsvpHistoryFieldRefs;
}
export interface Prisma__RsvpHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rsvp<T extends Prisma.RsvpDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RsvpDefaultArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RsvpHistoryFieldRefs {
    readonly id: Prisma.FieldRef<"RsvpHistory", 'String'>;
    readonly rsvpId: Prisma.FieldRef<"RsvpHistory", 'String'>;
    readonly status: Prisma.FieldRef<"RsvpHistory", 'RsvpStatus'>;
    readonly adultCount: Prisma.FieldRef<"RsvpHistory", 'Int'>;
    readonly childCount: Prisma.FieldRef<"RsvpHistory", 'Int'>;
    readonly vegetarianCount: Prisma.FieldRef<"RsvpHistory", 'Int'>;
    readonly needsTransport: Prisma.FieldRef<"RsvpHistory", 'Boolean'>;
    readonly message: Prisma.FieldRef<"RsvpHistory", 'String'>;
    readonly selectedEventIds: Prisma.FieldRef<"RsvpHistory", 'String[]'>;
    readonly source: Prisma.FieldRef<"RsvpHistory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"RsvpHistory", 'DateTime'>;
}
export type RsvpHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpHistorySelect<ExtArgs> | null;
    omit?: Prisma.RsvpHistoryOmit<ExtArgs> | null;
    include?: Prisma.RsvpHistoryInclude<ExtArgs> | null;
    where: Prisma.RsvpHistoryWhereUniqueInput;
};
export type RsvpHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpHistorySelect<ExtArgs> | null;
    omit?: Prisma.RsvpHistoryOmit<ExtArgs> | null;
    include?: Prisma.RsvpHistoryInclude<ExtArgs> | null;
    where: Prisma.RsvpHistoryWhereUniqueInput;
};
export type RsvpHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpHistorySelect<ExtArgs> | null;
    omit?: Prisma.RsvpHistoryOmit<ExtArgs> | null;
    include?: Prisma.RsvpHistoryInclude<ExtArgs> | null;
    where?: Prisma.RsvpHistoryWhereInput;
    orderBy?: Prisma.RsvpHistoryOrderByWithRelationInput | Prisma.RsvpHistoryOrderByWithRelationInput[];
    cursor?: Prisma.RsvpHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RsvpHistoryScalarFieldEnum | Prisma.RsvpHistoryScalarFieldEnum[];
};
export type RsvpHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpHistorySelect<ExtArgs> | null;
    omit?: Prisma.RsvpHistoryOmit<ExtArgs> | null;
    include?: Prisma.RsvpHistoryInclude<ExtArgs> | null;
    where?: Prisma.RsvpHistoryWhereInput;
    orderBy?: Prisma.RsvpHistoryOrderByWithRelationInput | Prisma.RsvpHistoryOrderByWithRelationInput[];
    cursor?: Prisma.RsvpHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RsvpHistoryScalarFieldEnum | Prisma.RsvpHistoryScalarFieldEnum[];
};
export type RsvpHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpHistorySelect<ExtArgs> | null;
    omit?: Prisma.RsvpHistoryOmit<ExtArgs> | null;
    include?: Prisma.RsvpHistoryInclude<ExtArgs> | null;
    where?: Prisma.RsvpHistoryWhereInput;
    orderBy?: Prisma.RsvpHistoryOrderByWithRelationInput | Prisma.RsvpHistoryOrderByWithRelationInput[];
    cursor?: Prisma.RsvpHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RsvpHistoryScalarFieldEnum | Prisma.RsvpHistoryScalarFieldEnum[];
};
export type RsvpHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpHistorySelect<ExtArgs> | null;
    omit?: Prisma.RsvpHistoryOmit<ExtArgs> | null;
    include?: Prisma.RsvpHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RsvpHistoryCreateInput, Prisma.RsvpHistoryUncheckedCreateInput>;
};
export type RsvpHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RsvpHistoryCreateManyInput | Prisma.RsvpHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RsvpHistoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpHistorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RsvpHistoryOmit<ExtArgs> | null;
    data: Prisma.RsvpHistoryCreateManyInput | Prisma.RsvpHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RsvpHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RsvpHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpHistorySelect<ExtArgs> | null;
    omit?: Prisma.RsvpHistoryOmit<ExtArgs> | null;
    include?: Prisma.RsvpHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RsvpHistoryUpdateInput, Prisma.RsvpHistoryUncheckedUpdateInput>;
    where: Prisma.RsvpHistoryWhereUniqueInput;
};
export type RsvpHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RsvpHistoryUpdateManyMutationInput, Prisma.RsvpHistoryUncheckedUpdateManyInput>;
    where?: Prisma.RsvpHistoryWhereInput;
    limit?: number;
};
export type RsvpHistoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RsvpHistoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RsvpHistoryUpdateManyMutationInput, Prisma.RsvpHistoryUncheckedUpdateManyInput>;
    where?: Prisma.RsvpHistoryWhereInput;
    limit?: number;
    include?: Prisma.RsvpHistoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RsvpHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpHistorySelect<ExtArgs> | null;
    omit?: Prisma.RsvpHistoryOmit<ExtArgs> | null;
    include?: Prisma.RsvpHistoryInclude<ExtArgs> | null;
    where: Prisma.RsvpHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.RsvpHistoryCreateInput, Prisma.RsvpHistoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RsvpHistoryUpdateInput, Prisma.RsvpHistoryUncheckedUpdateInput>;
};
export type RsvpHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpHistorySelect<ExtArgs> | null;
    omit?: Prisma.RsvpHistoryOmit<ExtArgs> | null;
    include?: Prisma.RsvpHistoryInclude<ExtArgs> | null;
    where: Prisma.RsvpHistoryWhereUniqueInput;
};
export type RsvpHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RsvpHistoryWhereInput;
    limit?: number;
};
export type RsvpHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpHistorySelect<ExtArgs> | null;
    omit?: Prisma.RsvpHistoryOmit<ExtArgs> | null;
    include?: Prisma.RsvpHistoryInclude<ExtArgs> | null;
};
