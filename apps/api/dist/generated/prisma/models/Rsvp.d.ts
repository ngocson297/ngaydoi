import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RsvpModel = runtime.Types.Result.DefaultSelection<Prisma.$RsvpPayload>;
export type AggregateRsvp = {
    _count: RsvpCountAggregateOutputType | null;
    _avg: RsvpAvgAggregateOutputType | null;
    _sum: RsvpSumAggregateOutputType | null;
    _min: RsvpMinAggregateOutputType | null;
    _max: RsvpMaxAggregateOutputType | null;
};
export type RsvpAvgAggregateOutputType = {
    adultCount: number | null;
    childCount: number | null;
    vegetarianCount: number | null;
};
export type RsvpSumAggregateOutputType = {
    adultCount: number | null;
    childCount: number | null;
    vegetarianCount: number | null;
};
export type RsvpMinAggregateOutputType = {
    id: string | null;
    invitationId: string | null;
    eventId: string | null;
    status: $Enums.RsvpStatus | null;
    adultCount: number | null;
    childCount: number | null;
    vegetarianCount: number | null;
    needsTransport: boolean | null;
    message: string | null;
    publishWish: boolean | null;
    respondedAt: Date | null;
    updatedAt: Date | null;
};
export type RsvpMaxAggregateOutputType = {
    id: string | null;
    invitationId: string | null;
    eventId: string | null;
    status: $Enums.RsvpStatus | null;
    adultCount: number | null;
    childCount: number | null;
    vegetarianCount: number | null;
    needsTransport: boolean | null;
    message: string | null;
    publishWish: boolean | null;
    respondedAt: Date | null;
    updatedAt: Date | null;
};
export type RsvpCountAggregateOutputType = {
    id: number;
    invitationId: number;
    eventId: number;
    status: number;
    adultCount: number;
    childCount: number;
    vegetarianCount: number;
    needsTransport: number;
    message: number;
    publishWish: number;
    respondedAt: number;
    updatedAt: number;
    _all: number;
};
export type RsvpAvgAggregateInputType = {
    adultCount?: true;
    childCount?: true;
    vegetarianCount?: true;
};
export type RsvpSumAggregateInputType = {
    adultCount?: true;
    childCount?: true;
    vegetarianCount?: true;
};
export type RsvpMinAggregateInputType = {
    id?: true;
    invitationId?: true;
    eventId?: true;
    status?: true;
    adultCount?: true;
    childCount?: true;
    vegetarianCount?: true;
    needsTransport?: true;
    message?: true;
    publishWish?: true;
    respondedAt?: true;
    updatedAt?: true;
};
export type RsvpMaxAggregateInputType = {
    id?: true;
    invitationId?: true;
    eventId?: true;
    status?: true;
    adultCount?: true;
    childCount?: true;
    vegetarianCount?: true;
    needsTransport?: true;
    message?: true;
    publishWish?: true;
    respondedAt?: true;
    updatedAt?: true;
};
export type RsvpCountAggregateInputType = {
    id?: true;
    invitationId?: true;
    eventId?: true;
    status?: true;
    adultCount?: true;
    childCount?: true;
    vegetarianCount?: true;
    needsTransport?: true;
    message?: true;
    publishWish?: true;
    respondedAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RsvpAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RsvpWhereInput;
    orderBy?: Prisma.RsvpOrderByWithRelationInput | Prisma.RsvpOrderByWithRelationInput[];
    cursor?: Prisma.RsvpWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RsvpCountAggregateInputType;
    _avg?: RsvpAvgAggregateInputType;
    _sum?: RsvpSumAggregateInputType;
    _min?: RsvpMinAggregateInputType;
    _max?: RsvpMaxAggregateInputType;
};
export type GetRsvpAggregateType<T extends RsvpAggregateArgs> = {
    [P in keyof T & keyof AggregateRsvp]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRsvp[P]> : Prisma.GetScalarType<T[P], AggregateRsvp[P]>;
};
export type RsvpGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RsvpWhereInput;
    orderBy?: Prisma.RsvpOrderByWithAggregationInput | Prisma.RsvpOrderByWithAggregationInput[];
    by: Prisma.RsvpScalarFieldEnum[] | Prisma.RsvpScalarFieldEnum;
    having?: Prisma.RsvpScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RsvpCountAggregateInputType | true;
    _avg?: RsvpAvgAggregateInputType;
    _sum?: RsvpSumAggregateInputType;
    _min?: RsvpMinAggregateInputType;
    _max?: RsvpMaxAggregateInputType;
};
export type RsvpGroupByOutputType = {
    id: string;
    invitationId: string;
    eventId: string | null;
    status: $Enums.RsvpStatus;
    adultCount: number;
    childCount: number;
    vegetarianCount: number;
    needsTransport: boolean;
    message: string | null;
    publishWish: boolean;
    respondedAt: Date;
    updatedAt: Date;
    _count: RsvpCountAggregateOutputType | null;
    _avg: RsvpAvgAggregateOutputType | null;
    _sum: RsvpSumAggregateOutputType | null;
    _min: RsvpMinAggregateOutputType | null;
    _max: RsvpMaxAggregateOutputType | null;
};
export type GetRsvpGroupByPayload<T extends RsvpGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RsvpGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RsvpGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RsvpGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RsvpGroupByOutputType[P]>;
}>>;
export type RsvpWhereInput = {
    AND?: Prisma.RsvpWhereInput | Prisma.RsvpWhereInput[];
    OR?: Prisma.RsvpWhereInput[];
    NOT?: Prisma.RsvpWhereInput | Prisma.RsvpWhereInput[];
    id?: Prisma.StringFilter<"Rsvp"> | string;
    invitationId?: Prisma.StringFilter<"Rsvp"> | string;
    eventId?: Prisma.StringNullableFilter<"Rsvp"> | string | null;
    status?: Prisma.EnumRsvpStatusFilter<"Rsvp"> | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFilter<"Rsvp"> | number;
    childCount?: Prisma.IntFilter<"Rsvp"> | number;
    vegetarianCount?: Prisma.IntFilter<"Rsvp"> | number;
    needsTransport?: Prisma.BoolFilter<"Rsvp"> | boolean;
    message?: Prisma.StringNullableFilter<"Rsvp"> | string | null;
    publishWish?: Prisma.BoolFilter<"Rsvp"> | boolean;
    respondedAt?: Prisma.DateTimeFilter<"Rsvp"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Rsvp"> | Date | string;
    invitation?: Prisma.XOR<Prisma.InvitationScalarRelationFilter, Prisma.InvitationWhereInput>;
    event?: Prisma.XOR<Prisma.EventNullableScalarRelationFilter, Prisma.EventWhereInput> | null;
    selectedEvents?: Prisma.RsvpEventSelectionListRelationFilter;
    history?: Prisma.RsvpHistoryListRelationFilter;
};
export type RsvpOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    vegetarianCount?: Prisma.SortOrder;
    needsTransport?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    publishWish?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    invitation?: Prisma.InvitationOrderByWithRelationInput;
    event?: Prisma.EventOrderByWithRelationInput;
    selectedEvents?: Prisma.RsvpEventSelectionOrderByRelationAggregateInput;
    history?: Prisma.RsvpHistoryOrderByRelationAggregateInput;
};
export type RsvpWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    invitationId?: string;
    AND?: Prisma.RsvpWhereInput | Prisma.RsvpWhereInput[];
    OR?: Prisma.RsvpWhereInput[];
    NOT?: Prisma.RsvpWhereInput | Prisma.RsvpWhereInput[];
    eventId?: Prisma.StringNullableFilter<"Rsvp"> | string | null;
    status?: Prisma.EnumRsvpStatusFilter<"Rsvp"> | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFilter<"Rsvp"> | number;
    childCount?: Prisma.IntFilter<"Rsvp"> | number;
    vegetarianCount?: Prisma.IntFilter<"Rsvp"> | number;
    needsTransport?: Prisma.BoolFilter<"Rsvp"> | boolean;
    message?: Prisma.StringNullableFilter<"Rsvp"> | string | null;
    publishWish?: Prisma.BoolFilter<"Rsvp"> | boolean;
    respondedAt?: Prisma.DateTimeFilter<"Rsvp"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Rsvp"> | Date | string;
    invitation?: Prisma.XOR<Prisma.InvitationScalarRelationFilter, Prisma.InvitationWhereInput>;
    event?: Prisma.XOR<Prisma.EventNullableScalarRelationFilter, Prisma.EventWhereInput> | null;
    selectedEvents?: Prisma.RsvpEventSelectionListRelationFilter;
    history?: Prisma.RsvpHistoryListRelationFilter;
}, "id" | "invitationId">;
export type RsvpOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    vegetarianCount?: Prisma.SortOrder;
    needsTransport?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    publishWish?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RsvpCountOrderByAggregateInput;
    _avg?: Prisma.RsvpAvgOrderByAggregateInput;
    _max?: Prisma.RsvpMaxOrderByAggregateInput;
    _min?: Prisma.RsvpMinOrderByAggregateInput;
    _sum?: Prisma.RsvpSumOrderByAggregateInput;
};
export type RsvpScalarWhereWithAggregatesInput = {
    AND?: Prisma.RsvpScalarWhereWithAggregatesInput | Prisma.RsvpScalarWhereWithAggregatesInput[];
    OR?: Prisma.RsvpScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RsvpScalarWhereWithAggregatesInput | Prisma.RsvpScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Rsvp"> | string;
    invitationId?: Prisma.StringWithAggregatesFilter<"Rsvp"> | string;
    eventId?: Prisma.StringNullableWithAggregatesFilter<"Rsvp"> | string | null;
    status?: Prisma.EnumRsvpStatusWithAggregatesFilter<"Rsvp"> | $Enums.RsvpStatus;
    adultCount?: Prisma.IntWithAggregatesFilter<"Rsvp"> | number;
    childCount?: Prisma.IntWithAggregatesFilter<"Rsvp"> | number;
    vegetarianCount?: Prisma.IntWithAggregatesFilter<"Rsvp"> | number;
    needsTransport?: Prisma.BoolWithAggregatesFilter<"Rsvp"> | boolean;
    message?: Prisma.StringNullableWithAggregatesFilter<"Rsvp"> | string | null;
    publishWish?: Prisma.BoolWithAggregatesFilter<"Rsvp"> | boolean;
    respondedAt?: Prisma.DateTimeWithAggregatesFilter<"Rsvp"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Rsvp"> | Date | string;
};
export type RsvpCreateInput = {
    id?: string;
    status: $Enums.RsvpStatus;
    adultCount?: number;
    childCount?: number;
    vegetarianCount?: number;
    needsTransport?: boolean;
    message?: string | null;
    publishWish?: boolean;
    respondedAt?: Date | string;
    updatedAt?: Date | string;
    invitation: Prisma.InvitationCreateNestedOneWithoutRsvpInput;
    event?: Prisma.EventCreateNestedOneWithoutRsvpsInput;
    selectedEvents?: Prisma.RsvpEventSelectionCreateNestedManyWithoutRsvpInput;
    history?: Prisma.RsvpHistoryCreateNestedManyWithoutRsvpInput;
};
export type RsvpUncheckedCreateInput = {
    id?: string;
    invitationId: string;
    eventId?: string | null;
    status: $Enums.RsvpStatus;
    adultCount?: number;
    childCount?: number;
    vegetarianCount?: number;
    needsTransport?: boolean;
    message?: string | null;
    publishWish?: boolean;
    respondedAt?: Date | string;
    updatedAt?: Date | string;
    selectedEvents?: Prisma.RsvpEventSelectionUncheckedCreateNestedManyWithoutRsvpInput;
    history?: Prisma.RsvpHistoryUncheckedCreateNestedManyWithoutRsvpInput;
};
export type RsvpUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishWish?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitation?: Prisma.InvitationUpdateOneRequiredWithoutRsvpNestedInput;
    event?: Prisma.EventUpdateOneWithoutRsvpsNestedInput;
    selectedEvents?: Prisma.RsvpEventSelectionUpdateManyWithoutRsvpNestedInput;
    history?: Prisma.RsvpHistoryUpdateManyWithoutRsvpNestedInput;
};
export type RsvpUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishWish?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    selectedEvents?: Prisma.RsvpEventSelectionUncheckedUpdateManyWithoutRsvpNestedInput;
    history?: Prisma.RsvpHistoryUncheckedUpdateManyWithoutRsvpNestedInput;
};
export type RsvpCreateManyInput = {
    id?: string;
    invitationId: string;
    eventId?: string | null;
    status: $Enums.RsvpStatus;
    adultCount?: number;
    childCount?: number;
    vegetarianCount?: number;
    needsTransport?: boolean;
    message?: string | null;
    publishWish?: boolean;
    respondedAt?: Date | string;
    updatedAt?: Date | string;
};
export type RsvpUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishWish?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishWish?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpListRelationFilter = {
    every?: Prisma.RsvpWhereInput;
    some?: Prisma.RsvpWhereInput;
    none?: Prisma.RsvpWhereInput;
};
export type RsvpOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RsvpNullableScalarRelationFilter = {
    is?: Prisma.RsvpWhereInput | null;
    isNot?: Prisma.RsvpWhereInput | null;
};
export type RsvpCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    vegetarianCount?: Prisma.SortOrder;
    needsTransport?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    publishWish?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RsvpAvgOrderByAggregateInput = {
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    vegetarianCount?: Prisma.SortOrder;
};
export type RsvpMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    vegetarianCount?: Prisma.SortOrder;
    needsTransport?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    publishWish?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RsvpMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    vegetarianCount?: Prisma.SortOrder;
    needsTransport?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    publishWish?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RsvpSumOrderByAggregateInput = {
    adultCount?: Prisma.SortOrder;
    childCount?: Prisma.SortOrder;
    vegetarianCount?: Prisma.SortOrder;
};
export type RsvpScalarRelationFilter = {
    is?: Prisma.RsvpWhereInput;
    isNot?: Prisma.RsvpWhereInput;
};
export type RsvpCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.RsvpCreateWithoutEventInput, Prisma.RsvpUncheckedCreateWithoutEventInput> | Prisma.RsvpCreateWithoutEventInput[] | Prisma.RsvpUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.RsvpCreateOrConnectWithoutEventInput | Prisma.RsvpCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.RsvpCreateManyEventInputEnvelope;
    connect?: Prisma.RsvpWhereUniqueInput | Prisma.RsvpWhereUniqueInput[];
};
export type RsvpUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.RsvpCreateWithoutEventInput, Prisma.RsvpUncheckedCreateWithoutEventInput> | Prisma.RsvpCreateWithoutEventInput[] | Prisma.RsvpUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.RsvpCreateOrConnectWithoutEventInput | Prisma.RsvpCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.RsvpCreateManyEventInputEnvelope;
    connect?: Prisma.RsvpWhereUniqueInput | Prisma.RsvpWhereUniqueInput[];
};
export type RsvpUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.RsvpCreateWithoutEventInput, Prisma.RsvpUncheckedCreateWithoutEventInput> | Prisma.RsvpCreateWithoutEventInput[] | Prisma.RsvpUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.RsvpCreateOrConnectWithoutEventInput | Prisma.RsvpCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.RsvpUpsertWithWhereUniqueWithoutEventInput | Prisma.RsvpUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.RsvpCreateManyEventInputEnvelope;
    set?: Prisma.RsvpWhereUniqueInput | Prisma.RsvpWhereUniqueInput[];
    disconnect?: Prisma.RsvpWhereUniqueInput | Prisma.RsvpWhereUniqueInput[];
    delete?: Prisma.RsvpWhereUniqueInput | Prisma.RsvpWhereUniqueInput[];
    connect?: Prisma.RsvpWhereUniqueInput | Prisma.RsvpWhereUniqueInput[];
    update?: Prisma.RsvpUpdateWithWhereUniqueWithoutEventInput | Prisma.RsvpUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.RsvpUpdateManyWithWhereWithoutEventInput | Prisma.RsvpUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.RsvpScalarWhereInput | Prisma.RsvpScalarWhereInput[];
};
export type RsvpUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.RsvpCreateWithoutEventInput, Prisma.RsvpUncheckedCreateWithoutEventInput> | Prisma.RsvpCreateWithoutEventInput[] | Prisma.RsvpUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.RsvpCreateOrConnectWithoutEventInput | Prisma.RsvpCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.RsvpUpsertWithWhereUniqueWithoutEventInput | Prisma.RsvpUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.RsvpCreateManyEventInputEnvelope;
    set?: Prisma.RsvpWhereUniqueInput | Prisma.RsvpWhereUniqueInput[];
    disconnect?: Prisma.RsvpWhereUniqueInput | Prisma.RsvpWhereUniqueInput[];
    delete?: Prisma.RsvpWhereUniqueInput | Prisma.RsvpWhereUniqueInput[];
    connect?: Prisma.RsvpWhereUniqueInput | Prisma.RsvpWhereUniqueInput[];
    update?: Prisma.RsvpUpdateWithWhereUniqueWithoutEventInput | Prisma.RsvpUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.RsvpUpdateManyWithWhereWithoutEventInput | Prisma.RsvpUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.RsvpScalarWhereInput | Prisma.RsvpScalarWhereInput[];
};
export type RsvpCreateNestedOneWithoutInvitationInput = {
    create?: Prisma.XOR<Prisma.RsvpCreateWithoutInvitationInput, Prisma.RsvpUncheckedCreateWithoutInvitationInput>;
    connectOrCreate?: Prisma.RsvpCreateOrConnectWithoutInvitationInput;
    connect?: Prisma.RsvpWhereUniqueInput;
};
export type RsvpUncheckedCreateNestedOneWithoutInvitationInput = {
    create?: Prisma.XOR<Prisma.RsvpCreateWithoutInvitationInput, Prisma.RsvpUncheckedCreateWithoutInvitationInput>;
    connectOrCreate?: Prisma.RsvpCreateOrConnectWithoutInvitationInput;
    connect?: Prisma.RsvpWhereUniqueInput;
};
export type RsvpUpdateOneWithoutInvitationNestedInput = {
    create?: Prisma.XOR<Prisma.RsvpCreateWithoutInvitationInput, Prisma.RsvpUncheckedCreateWithoutInvitationInput>;
    connectOrCreate?: Prisma.RsvpCreateOrConnectWithoutInvitationInput;
    upsert?: Prisma.RsvpUpsertWithoutInvitationInput;
    disconnect?: Prisma.RsvpWhereInput | boolean;
    delete?: Prisma.RsvpWhereInput | boolean;
    connect?: Prisma.RsvpWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RsvpUpdateToOneWithWhereWithoutInvitationInput, Prisma.RsvpUpdateWithoutInvitationInput>, Prisma.RsvpUncheckedUpdateWithoutInvitationInput>;
};
export type RsvpUncheckedUpdateOneWithoutInvitationNestedInput = {
    create?: Prisma.XOR<Prisma.RsvpCreateWithoutInvitationInput, Prisma.RsvpUncheckedCreateWithoutInvitationInput>;
    connectOrCreate?: Prisma.RsvpCreateOrConnectWithoutInvitationInput;
    upsert?: Prisma.RsvpUpsertWithoutInvitationInput;
    disconnect?: Prisma.RsvpWhereInput | boolean;
    delete?: Prisma.RsvpWhereInput | boolean;
    connect?: Prisma.RsvpWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RsvpUpdateToOneWithWhereWithoutInvitationInput, Prisma.RsvpUpdateWithoutInvitationInput>, Prisma.RsvpUncheckedUpdateWithoutInvitationInput>;
};
export type EnumRsvpStatusFieldUpdateOperationsInput = {
    set?: $Enums.RsvpStatus;
};
export type RsvpCreateNestedOneWithoutSelectedEventsInput = {
    create?: Prisma.XOR<Prisma.RsvpCreateWithoutSelectedEventsInput, Prisma.RsvpUncheckedCreateWithoutSelectedEventsInput>;
    connectOrCreate?: Prisma.RsvpCreateOrConnectWithoutSelectedEventsInput;
    connect?: Prisma.RsvpWhereUniqueInput;
};
export type RsvpUpdateOneRequiredWithoutSelectedEventsNestedInput = {
    create?: Prisma.XOR<Prisma.RsvpCreateWithoutSelectedEventsInput, Prisma.RsvpUncheckedCreateWithoutSelectedEventsInput>;
    connectOrCreate?: Prisma.RsvpCreateOrConnectWithoutSelectedEventsInput;
    upsert?: Prisma.RsvpUpsertWithoutSelectedEventsInput;
    connect?: Prisma.RsvpWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RsvpUpdateToOneWithWhereWithoutSelectedEventsInput, Prisma.RsvpUpdateWithoutSelectedEventsInput>, Prisma.RsvpUncheckedUpdateWithoutSelectedEventsInput>;
};
export type RsvpCreateNestedOneWithoutHistoryInput = {
    create?: Prisma.XOR<Prisma.RsvpCreateWithoutHistoryInput, Prisma.RsvpUncheckedCreateWithoutHistoryInput>;
    connectOrCreate?: Prisma.RsvpCreateOrConnectWithoutHistoryInput;
    connect?: Prisma.RsvpWhereUniqueInput;
};
export type RsvpUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: Prisma.XOR<Prisma.RsvpCreateWithoutHistoryInput, Prisma.RsvpUncheckedCreateWithoutHistoryInput>;
    connectOrCreate?: Prisma.RsvpCreateOrConnectWithoutHistoryInput;
    upsert?: Prisma.RsvpUpsertWithoutHistoryInput;
    connect?: Prisma.RsvpWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RsvpUpdateToOneWithWhereWithoutHistoryInput, Prisma.RsvpUpdateWithoutHistoryInput>, Prisma.RsvpUncheckedUpdateWithoutHistoryInput>;
};
export type RsvpCreateWithoutEventInput = {
    id?: string;
    status: $Enums.RsvpStatus;
    adultCount?: number;
    childCount?: number;
    vegetarianCount?: number;
    needsTransport?: boolean;
    message?: string | null;
    publishWish?: boolean;
    respondedAt?: Date | string;
    updatedAt?: Date | string;
    invitation: Prisma.InvitationCreateNestedOneWithoutRsvpInput;
    selectedEvents?: Prisma.RsvpEventSelectionCreateNestedManyWithoutRsvpInput;
    history?: Prisma.RsvpHistoryCreateNestedManyWithoutRsvpInput;
};
export type RsvpUncheckedCreateWithoutEventInput = {
    id?: string;
    invitationId: string;
    status: $Enums.RsvpStatus;
    adultCount?: number;
    childCount?: number;
    vegetarianCount?: number;
    needsTransport?: boolean;
    message?: string | null;
    publishWish?: boolean;
    respondedAt?: Date | string;
    updatedAt?: Date | string;
    selectedEvents?: Prisma.RsvpEventSelectionUncheckedCreateNestedManyWithoutRsvpInput;
    history?: Prisma.RsvpHistoryUncheckedCreateNestedManyWithoutRsvpInput;
};
export type RsvpCreateOrConnectWithoutEventInput = {
    where: Prisma.RsvpWhereUniqueInput;
    create: Prisma.XOR<Prisma.RsvpCreateWithoutEventInput, Prisma.RsvpUncheckedCreateWithoutEventInput>;
};
export type RsvpCreateManyEventInputEnvelope = {
    data: Prisma.RsvpCreateManyEventInput | Prisma.RsvpCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type RsvpUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.RsvpWhereUniqueInput;
    update: Prisma.XOR<Prisma.RsvpUpdateWithoutEventInput, Prisma.RsvpUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.RsvpCreateWithoutEventInput, Prisma.RsvpUncheckedCreateWithoutEventInput>;
};
export type RsvpUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.RsvpWhereUniqueInput;
    data: Prisma.XOR<Prisma.RsvpUpdateWithoutEventInput, Prisma.RsvpUncheckedUpdateWithoutEventInput>;
};
export type RsvpUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.RsvpScalarWhereInput;
    data: Prisma.XOR<Prisma.RsvpUpdateManyMutationInput, Prisma.RsvpUncheckedUpdateManyWithoutEventInput>;
};
export type RsvpScalarWhereInput = {
    AND?: Prisma.RsvpScalarWhereInput | Prisma.RsvpScalarWhereInput[];
    OR?: Prisma.RsvpScalarWhereInput[];
    NOT?: Prisma.RsvpScalarWhereInput | Prisma.RsvpScalarWhereInput[];
    id?: Prisma.StringFilter<"Rsvp"> | string;
    invitationId?: Prisma.StringFilter<"Rsvp"> | string;
    eventId?: Prisma.StringNullableFilter<"Rsvp"> | string | null;
    status?: Prisma.EnumRsvpStatusFilter<"Rsvp"> | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFilter<"Rsvp"> | number;
    childCount?: Prisma.IntFilter<"Rsvp"> | number;
    vegetarianCount?: Prisma.IntFilter<"Rsvp"> | number;
    needsTransport?: Prisma.BoolFilter<"Rsvp"> | boolean;
    message?: Prisma.StringNullableFilter<"Rsvp"> | string | null;
    publishWish?: Prisma.BoolFilter<"Rsvp"> | boolean;
    respondedAt?: Prisma.DateTimeFilter<"Rsvp"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Rsvp"> | Date | string;
};
export type RsvpCreateWithoutInvitationInput = {
    id?: string;
    status: $Enums.RsvpStatus;
    adultCount?: number;
    childCount?: number;
    vegetarianCount?: number;
    needsTransport?: boolean;
    message?: string | null;
    publishWish?: boolean;
    respondedAt?: Date | string;
    updatedAt?: Date | string;
    event?: Prisma.EventCreateNestedOneWithoutRsvpsInput;
    selectedEvents?: Prisma.RsvpEventSelectionCreateNestedManyWithoutRsvpInput;
    history?: Prisma.RsvpHistoryCreateNestedManyWithoutRsvpInput;
};
export type RsvpUncheckedCreateWithoutInvitationInput = {
    id?: string;
    eventId?: string | null;
    status: $Enums.RsvpStatus;
    adultCount?: number;
    childCount?: number;
    vegetarianCount?: number;
    needsTransport?: boolean;
    message?: string | null;
    publishWish?: boolean;
    respondedAt?: Date | string;
    updatedAt?: Date | string;
    selectedEvents?: Prisma.RsvpEventSelectionUncheckedCreateNestedManyWithoutRsvpInput;
    history?: Prisma.RsvpHistoryUncheckedCreateNestedManyWithoutRsvpInput;
};
export type RsvpCreateOrConnectWithoutInvitationInput = {
    where: Prisma.RsvpWhereUniqueInput;
    create: Prisma.XOR<Prisma.RsvpCreateWithoutInvitationInput, Prisma.RsvpUncheckedCreateWithoutInvitationInput>;
};
export type RsvpUpsertWithoutInvitationInput = {
    update: Prisma.XOR<Prisma.RsvpUpdateWithoutInvitationInput, Prisma.RsvpUncheckedUpdateWithoutInvitationInput>;
    create: Prisma.XOR<Prisma.RsvpCreateWithoutInvitationInput, Prisma.RsvpUncheckedCreateWithoutInvitationInput>;
    where?: Prisma.RsvpWhereInput;
};
export type RsvpUpdateToOneWithWhereWithoutInvitationInput = {
    where?: Prisma.RsvpWhereInput;
    data: Prisma.XOR<Prisma.RsvpUpdateWithoutInvitationInput, Prisma.RsvpUncheckedUpdateWithoutInvitationInput>;
};
export type RsvpUpdateWithoutInvitationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishWish?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneWithoutRsvpsNestedInput;
    selectedEvents?: Prisma.RsvpEventSelectionUpdateManyWithoutRsvpNestedInput;
    history?: Prisma.RsvpHistoryUpdateManyWithoutRsvpNestedInput;
};
export type RsvpUncheckedUpdateWithoutInvitationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishWish?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    selectedEvents?: Prisma.RsvpEventSelectionUncheckedUpdateManyWithoutRsvpNestedInput;
    history?: Prisma.RsvpHistoryUncheckedUpdateManyWithoutRsvpNestedInput;
};
export type RsvpCreateWithoutSelectedEventsInput = {
    id?: string;
    status: $Enums.RsvpStatus;
    adultCount?: number;
    childCount?: number;
    vegetarianCount?: number;
    needsTransport?: boolean;
    message?: string | null;
    publishWish?: boolean;
    respondedAt?: Date | string;
    updatedAt?: Date | string;
    invitation: Prisma.InvitationCreateNestedOneWithoutRsvpInput;
    event?: Prisma.EventCreateNestedOneWithoutRsvpsInput;
    history?: Prisma.RsvpHistoryCreateNestedManyWithoutRsvpInput;
};
export type RsvpUncheckedCreateWithoutSelectedEventsInput = {
    id?: string;
    invitationId: string;
    eventId?: string | null;
    status: $Enums.RsvpStatus;
    adultCount?: number;
    childCount?: number;
    vegetarianCount?: number;
    needsTransport?: boolean;
    message?: string | null;
    publishWish?: boolean;
    respondedAt?: Date | string;
    updatedAt?: Date | string;
    history?: Prisma.RsvpHistoryUncheckedCreateNestedManyWithoutRsvpInput;
};
export type RsvpCreateOrConnectWithoutSelectedEventsInput = {
    where: Prisma.RsvpWhereUniqueInput;
    create: Prisma.XOR<Prisma.RsvpCreateWithoutSelectedEventsInput, Prisma.RsvpUncheckedCreateWithoutSelectedEventsInput>;
};
export type RsvpUpsertWithoutSelectedEventsInput = {
    update: Prisma.XOR<Prisma.RsvpUpdateWithoutSelectedEventsInput, Prisma.RsvpUncheckedUpdateWithoutSelectedEventsInput>;
    create: Prisma.XOR<Prisma.RsvpCreateWithoutSelectedEventsInput, Prisma.RsvpUncheckedCreateWithoutSelectedEventsInput>;
    where?: Prisma.RsvpWhereInput;
};
export type RsvpUpdateToOneWithWhereWithoutSelectedEventsInput = {
    where?: Prisma.RsvpWhereInput;
    data: Prisma.XOR<Prisma.RsvpUpdateWithoutSelectedEventsInput, Prisma.RsvpUncheckedUpdateWithoutSelectedEventsInput>;
};
export type RsvpUpdateWithoutSelectedEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishWish?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitation?: Prisma.InvitationUpdateOneRequiredWithoutRsvpNestedInput;
    event?: Prisma.EventUpdateOneWithoutRsvpsNestedInput;
    history?: Prisma.RsvpHistoryUpdateManyWithoutRsvpNestedInput;
};
export type RsvpUncheckedUpdateWithoutSelectedEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishWish?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    history?: Prisma.RsvpHistoryUncheckedUpdateManyWithoutRsvpNestedInput;
};
export type RsvpCreateWithoutHistoryInput = {
    id?: string;
    status: $Enums.RsvpStatus;
    adultCount?: number;
    childCount?: number;
    vegetarianCount?: number;
    needsTransport?: boolean;
    message?: string | null;
    publishWish?: boolean;
    respondedAt?: Date | string;
    updatedAt?: Date | string;
    invitation: Prisma.InvitationCreateNestedOneWithoutRsvpInput;
    event?: Prisma.EventCreateNestedOneWithoutRsvpsInput;
    selectedEvents?: Prisma.RsvpEventSelectionCreateNestedManyWithoutRsvpInput;
};
export type RsvpUncheckedCreateWithoutHistoryInput = {
    id?: string;
    invitationId: string;
    eventId?: string | null;
    status: $Enums.RsvpStatus;
    adultCount?: number;
    childCount?: number;
    vegetarianCount?: number;
    needsTransport?: boolean;
    message?: string | null;
    publishWish?: boolean;
    respondedAt?: Date | string;
    updatedAt?: Date | string;
    selectedEvents?: Prisma.RsvpEventSelectionUncheckedCreateNestedManyWithoutRsvpInput;
};
export type RsvpCreateOrConnectWithoutHistoryInput = {
    where: Prisma.RsvpWhereUniqueInput;
    create: Prisma.XOR<Prisma.RsvpCreateWithoutHistoryInput, Prisma.RsvpUncheckedCreateWithoutHistoryInput>;
};
export type RsvpUpsertWithoutHistoryInput = {
    update: Prisma.XOR<Prisma.RsvpUpdateWithoutHistoryInput, Prisma.RsvpUncheckedUpdateWithoutHistoryInput>;
    create: Prisma.XOR<Prisma.RsvpCreateWithoutHistoryInput, Prisma.RsvpUncheckedCreateWithoutHistoryInput>;
    where?: Prisma.RsvpWhereInput;
};
export type RsvpUpdateToOneWithWhereWithoutHistoryInput = {
    where?: Prisma.RsvpWhereInput;
    data: Prisma.XOR<Prisma.RsvpUpdateWithoutHistoryInput, Prisma.RsvpUncheckedUpdateWithoutHistoryInput>;
};
export type RsvpUpdateWithoutHistoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishWish?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitation?: Prisma.InvitationUpdateOneRequiredWithoutRsvpNestedInput;
    event?: Prisma.EventUpdateOneWithoutRsvpsNestedInput;
    selectedEvents?: Prisma.RsvpEventSelectionUpdateManyWithoutRsvpNestedInput;
};
export type RsvpUncheckedUpdateWithoutHistoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishWish?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    selectedEvents?: Prisma.RsvpEventSelectionUncheckedUpdateManyWithoutRsvpNestedInput;
};
export type RsvpCreateManyEventInput = {
    id?: string;
    invitationId: string;
    status: $Enums.RsvpStatus;
    adultCount?: number;
    childCount?: number;
    vegetarianCount?: number;
    needsTransport?: boolean;
    message?: string | null;
    publishWish?: boolean;
    respondedAt?: Date | string;
    updatedAt?: Date | string;
};
export type RsvpUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishWish?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitation?: Prisma.InvitationUpdateOneRequiredWithoutRsvpNestedInput;
    selectedEvents?: Prisma.RsvpEventSelectionUpdateManyWithoutRsvpNestedInput;
    history?: Prisma.RsvpHistoryUpdateManyWithoutRsvpNestedInput;
};
export type RsvpUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishWish?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    selectedEvents?: Prisma.RsvpEventSelectionUncheckedUpdateManyWithoutRsvpNestedInput;
    history?: Prisma.RsvpHistoryUncheckedUpdateManyWithoutRsvpNestedInput;
};
export type RsvpUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    adultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    childCount?: Prisma.IntFieldUpdateOperationsInput | number;
    vegetarianCount?: Prisma.IntFieldUpdateOperationsInput | number;
    needsTransport?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishWish?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpCountOutputType = {
    selectedEvents: number;
    history: number;
};
export type RsvpCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    selectedEvents?: boolean | RsvpCountOutputTypeCountSelectedEventsArgs;
    history?: boolean | RsvpCountOutputTypeCountHistoryArgs;
};
export type RsvpCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpCountOutputTypeSelect<ExtArgs> | null;
};
export type RsvpCountOutputTypeCountSelectedEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RsvpEventSelectionWhereInput;
};
export type RsvpCountOutputTypeCountHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RsvpHistoryWhereInput;
};
export type RsvpSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    invitationId?: boolean;
    eventId?: boolean;
    status?: boolean;
    adultCount?: boolean;
    childCount?: boolean;
    vegetarianCount?: boolean;
    needsTransport?: boolean;
    message?: boolean;
    publishWish?: boolean;
    respondedAt?: boolean;
    updatedAt?: boolean;
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.Rsvp$eventArgs<ExtArgs>;
    selectedEvents?: boolean | Prisma.Rsvp$selectedEventsArgs<ExtArgs>;
    history?: boolean | Prisma.Rsvp$historyArgs<ExtArgs>;
    _count?: boolean | Prisma.RsvpCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rsvp"]>;
export type RsvpSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    invitationId?: boolean;
    eventId?: boolean;
    status?: boolean;
    adultCount?: boolean;
    childCount?: boolean;
    vegetarianCount?: boolean;
    needsTransport?: boolean;
    message?: boolean;
    publishWish?: boolean;
    respondedAt?: boolean;
    updatedAt?: boolean;
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.Rsvp$eventArgs<ExtArgs>;
}, ExtArgs["result"]["rsvp"]>;
export type RsvpSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    invitationId?: boolean;
    eventId?: boolean;
    status?: boolean;
    adultCount?: boolean;
    childCount?: boolean;
    vegetarianCount?: boolean;
    needsTransport?: boolean;
    message?: boolean;
    publishWish?: boolean;
    respondedAt?: boolean;
    updatedAt?: boolean;
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.Rsvp$eventArgs<ExtArgs>;
}, ExtArgs["result"]["rsvp"]>;
export type RsvpSelectScalar = {
    id?: boolean;
    invitationId?: boolean;
    eventId?: boolean;
    status?: boolean;
    adultCount?: boolean;
    childCount?: boolean;
    vegetarianCount?: boolean;
    needsTransport?: boolean;
    message?: boolean;
    publishWish?: boolean;
    respondedAt?: boolean;
    updatedAt?: boolean;
};
export type RsvpOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "invitationId" | "eventId" | "status" | "adultCount" | "childCount" | "vegetarianCount" | "needsTransport" | "message" | "publishWish" | "respondedAt" | "updatedAt", ExtArgs["result"]["rsvp"]>;
export type RsvpInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.Rsvp$eventArgs<ExtArgs>;
    selectedEvents?: boolean | Prisma.Rsvp$selectedEventsArgs<ExtArgs>;
    history?: boolean | Prisma.Rsvp$historyArgs<ExtArgs>;
    _count?: boolean | Prisma.RsvpCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RsvpIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.Rsvp$eventArgs<ExtArgs>;
};
export type RsvpIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.Rsvp$eventArgs<ExtArgs>;
};
export type $RsvpPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Rsvp";
    objects: {
        invitation: Prisma.$InvitationPayload<ExtArgs>;
        event: Prisma.$EventPayload<ExtArgs> | null;
        selectedEvents: Prisma.$RsvpEventSelectionPayload<ExtArgs>[];
        history: Prisma.$RsvpHistoryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        invitationId: string;
        eventId: string | null;
        status: $Enums.RsvpStatus;
        adultCount: number;
        childCount: number;
        vegetarianCount: number;
        needsTransport: boolean;
        message: string | null;
        publishWish: boolean;
        respondedAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["rsvp"]>;
    composites: {};
};
export type RsvpGetPayload<S extends boolean | null | undefined | RsvpDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RsvpPayload, S>;
export type RsvpCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RsvpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RsvpCountAggregateInputType | true;
};
export interface RsvpDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Rsvp'];
        meta: {
            name: 'Rsvp';
        };
    };
    findUnique<T extends RsvpFindUniqueArgs>(args: Prisma.SelectSubset<T, RsvpFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RsvpFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RsvpFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RsvpFindFirstArgs>(args?: Prisma.SelectSubset<T, RsvpFindFirstArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RsvpFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RsvpFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RsvpFindManyArgs>(args?: Prisma.SelectSubset<T, RsvpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RsvpCreateArgs>(args: Prisma.SelectSubset<T, RsvpCreateArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RsvpCreateManyArgs>(args?: Prisma.SelectSubset<T, RsvpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RsvpCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RsvpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RsvpDeleteArgs>(args: Prisma.SelectSubset<T, RsvpDeleteArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RsvpUpdateArgs>(args: Prisma.SelectSubset<T, RsvpUpdateArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RsvpDeleteManyArgs>(args?: Prisma.SelectSubset<T, RsvpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RsvpUpdateManyArgs>(args: Prisma.SelectSubset<T, RsvpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RsvpUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RsvpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RsvpUpsertArgs>(args: Prisma.SelectSubset<T, RsvpUpsertArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RsvpCountArgs>(args?: Prisma.Subset<T, RsvpCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RsvpCountAggregateOutputType> : number>;
    aggregate<T extends RsvpAggregateArgs>(args: Prisma.Subset<T, RsvpAggregateArgs>): Prisma.PrismaPromise<GetRsvpAggregateType<T>>;
    groupBy<T extends RsvpGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RsvpGroupByArgs['orderBy'];
    } : {
        orderBy?: RsvpGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RsvpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRsvpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RsvpFieldRefs;
}
export interface Prisma__RsvpClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    invitation<T extends Prisma.InvitationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvitationDefaultArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    event<T extends Prisma.Rsvp$eventArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Rsvp$eventArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    selectedEvents<T extends Prisma.Rsvp$selectedEventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Rsvp$selectedEventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RsvpEventSelectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    history<T extends Prisma.Rsvp$historyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Rsvp$historyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RsvpHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RsvpFieldRefs {
    readonly id: Prisma.FieldRef<"Rsvp", 'String'>;
    readonly invitationId: Prisma.FieldRef<"Rsvp", 'String'>;
    readonly eventId: Prisma.FieldRef<"Rsvp", 'String'>;
    readonly status: Prisma.FieldRef<"Rsvp", 'RsvpStatus'>;
    readonly adultCount: Prisma.FieldRef<"Rsvp", 'Int'>;
    readonly childCount: Prisma.FieldRef<"Rsvp", 'Int'>;
    readonly vegetarianCount: Prisma.FieldRef<"Rsvp", 'Int'>;
    readonly needsTransport: Prisma.FieldRef<"Rsvp", 'Boolean'>;
    readonly message: Prisma.FieldRef<"Rsvp", 'String'>;
    readonly publishWish: Prisma.FieldRef<"Rsvp", 'Boolean'>;
    readonly respondedAt: Prisma.FieldRef<"Rsvp", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Rsvp", 'DateTime'>;
}
export type RsvpFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    where: Prisma.RsvpWhereUniqueInput;
};
export type RsvpFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    where: Prisma.RsvpWhereUniqueInput;
};
export type RsvpFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    where?: Prisma.RsvpWhereInput;
    orderBy?: Prisma.RsvpOrderByWithRelationInput | Prisma.RsvpOrderByWithRelationInput[];
    cursor?: Prisma.RsvpWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RsvpScalarFieldEnum | Prisma.RsvpScalarFieldEnum[];
};
export type RsvpFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    where?: Prisma.RsvpWhereInput;
    orderBy?: Prisma.RsvpOrderByWithRelationInput | Prisma.RsvpOrderByWithRelationInput[];
    cursor?: Prisma.RsvpWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RsvpScalarFieldEnum | Prisma.RsvpScalarFieldEnum[];
};
export type RsvpFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    where?: Prisma.RsvpWhereInput;
    orderBy?: Prisma.RsvpOrderByWithRelationInput | Prisma.RsvpOrderByWithRelationInput[];
    cursor?: Prisma.RsvpWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RsvpScalarFieldEnum | Prisma.RsvpScalarFieldEnum[];
};
export type RsvpCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RsvpCreateInput, Prisma.RsvpUncheckedCreateInput>;
};
export type RsvpCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RsvpCreateManyInput | Prisma.RsvpCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RsvpCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    data: Prisma.RsvpCreateManyInput | Prisma.RsvpCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RsvpIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RsvpUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RsvpUpdateInput, Prisma.RsvpUncheckedUpdateInput>;
    where: Prisma.RsvpWhereUniqueInput;
};
export type RsvpUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RsvpUpdateManyMutationInput, Prisma.RsvpUncheckedUpdateManyInput>;
    where?: Prisma.RsvpWhereInput;
    limit?: number;
};
export type RsvpUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RsvpUpdateManyMutationInput, Prisma.RsvpUncheckedUpdateManyInput>;
    where?: Prisma.RsvpWhereInput;
    limit?: number;
    include?: Prisma.RsvpIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RsvpUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    where: Prisma.RsvpWhereUniqueInput;
    create: Prisma.XOR<Prisma.RsvpCreateInput, Prisma.RsvpUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RsvpUpdateInput, Prisma.RsvpUncheckedUpdateInput>;
};
export type RsvpDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    where: Prisma.RsvpWhereUniqueInput;
};
export type RsvpDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RsvpWhereInput;
    limit?: number;
};
export type Rsvp$eventArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
};
export type Rsvp$selectedEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpEventSelectionSelect<ExtArgs> | null;
    omit?: Prisma.RsvpEventSelectionOmit<ExtArgs> | null;
    include?: Prisma.RsvpEventSelectionInclude<ExtArgs> | null;
    where?: Prisma.RsvpEventSelectionWhereInput;
    orderBy?: Prisma.RsvpEventSelectionOrderByWithRelationInput | Prisma.RsvpEventSelectionOrderByWithRelationInput[];
    cursor?: Prisma.RsvpEventSelectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RsvpEventSelectionScalarFieldEnum | Prisma.RsvpEventSelectionScalarFieldEnum[];
};
export type Rsvp$historyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RsvpDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
};
