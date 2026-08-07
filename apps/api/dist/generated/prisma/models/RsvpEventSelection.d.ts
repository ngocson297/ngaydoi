import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RsvpEventSelectionModel = runtime.Types.Result.DefaultSelection<Prisma.$RsvpEventSelectionPayload>;
export type AggregateRsvpEventSelection = {
    _count: RsvpEventSelectionCountAggregateOutputType | null;
    _min: RsvpEventSelectionMinAggregateOutputType | null;
    _max: RsvpEventSelectionMaxAggregateOutputType | null;
};
export type RsvpEventSelectionMinAggregateOutputType = {
    id: string | null;
    rsvpId: string | null;
    eventId: string | null;
    createdAt: Date | null;
};
export type RsvpEventSelectionMaxAggregateOutputType = {
    id: string | null;
    rsvpId: string | null;
    eventId: string | null;
    createdAt: Date | null;
};
export type RsvpEventSelectionCountAggregateOutputType = {
    id: number;
    rsvpId: number;
    eventId: number;
    createdAt: number;
    _all: number;
};
export type RsvpEventSelectionMinAggregateInputType = {
    id?: true;
    rsvpId?: true;
    eventId?: true;
    createdAt?: true;
};
export type RsvpEventSelectionMaxAggregateInputType = {
    id?: true;
    rsvpId?: true;
    eventId?: true;
    createdAt?: true;
};
export type RsvpEventSelectionCountAggregateInputType = {
    id?: true;
    rsvpId?: true;
    eventId?: true;
    createdAt?: true;
    _all?: true;
};
export type RsvpEventSelectionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RsvpEventSelectionWhereInput;
    orderBy?: Prisma.RsvpEventSelectionOrderByWithRelationInput | Prisma.RsvpEventSelectionOrderByWithRelationInput[];
    cursor?: Prisma.RsvpEventSelectionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RsvpEventSelectionCountAggregateInputType;
    _min?: RsvpEventSelectionMinAggregateInputType;
    _max?: RsvpEventSelectionMaxAggregateInputType;
};
export type GetRsvpEventSelectionAggregateType<T extends RsvpEventSelectionAggregateArgs> = {
    [P in keyof T & keyof AggregateRsvpEventSelection]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRsvpEventSelection[P]> : Prisma.GetScalarType<T[P], AggregateRsvpEventSelection[P]>;
};
export type RsvpEventSelectionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RsvpEventSelectionWhereInput;
    orderBy?: Prisma.RsvpEventSelectionOrderByWithAggregationInput | Prisma.RsvpEventSelectionOrderByWithAggregationInput[];
    by: Prisma.RsvpEventSelectionScalarFieldEnum[] | Prisma.RsvpEventSelectionScalarFieldEnum;
    having?: Prisma.RsvpEventSelectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RsvpEventSelectionCountAggregateInputType | true;
    _min?: RsvpEventSelectionMinAggregateInputType;
    _max?: RsvpEventSelectionMaxAggregateInputType;
};
export type RsvpEventSelectionGroupByOutputType = {
    id: string;
    rsvpId: string;
    eventId: string;
    createdAt: Date;
    _count: RsvpEventSelectionCountAggregateOutputType | null;
    _min: RsvpEventSelectionMinAggregateOutputType | null;
    _max: RsvpEventSelectionMaxAggregateOutputType | null;
};
export type GetRsvpEventSelectionGroupByPayload<T extends RsvpEventSelectionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RsvpEventSelectionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RsvpEventSelectionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RsvpEventSelectionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RsvpEventSelectionGroupByOutputType[P]>;
}>>;
export type RsvpEventSelectionWhereInput = {
    AND?: Prisma.RsvpEventSelectionWhereInput | Prisma.RsvpEventSelectionWhereInput[];
    OR?: Prisma.RsvpEventSelectionWhereInput[];
    NOT?: Prisma.RsvpEventSelectionWhereInput | Prisma.RsvpEventSelectionWhereInput[];
    id?: Prisma.StringFilter<"RsvpEventSelection"> | string;
    rsvpId?: Prisma.StringFilter<"RsvpEventSelection"> | string;
    eventId?: Prisma.StringFilter<"RsvpEventSelection"> | string;
    createdAt?: Prisma.DateTimeFilter<"RsvpEventSelection"> | Date | string;
    rsvp?: Prisma.XOR<Prisma.RsvpScalarRelationFilter, Prisma.RsvpWhereInput>;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
};
export type RsvpEventSelectionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rsvpId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    rsvp?: Prisma.RsvpOrderByWithRelationInput;
    event?: Prisma.EventOrderByWithRelationInput;
};
export type RsvpEventSelectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    rsvpId_eventId?: Prisma.RsvpEventSelectionRsvpIdEventIdCompoundUniqueInput;
    AND?: Prisma.RsvpEventSelectionWhereInput | Prisma.RsvpEventSelectionWhereInput[];
    OR?: Prisma.RsvpEventSelectionWhereInput[];
    NOT?: Prisma.RsvpEventSelectionWhereInput | Prisma.RsvpEventSelectionWhereInput[];
    rsvpId?: Prisma.StringFilter<"RsvpEventSelection"> | string;
    eventId?: Prisma.StringFilter<"RsvpEventSelection"> | string;
    createdAt?: Prisma.DateTimeFilter<"RsvpEventSelection"> | Date | string;
    rsvp?: Prisma.XOR<Prisma.RsvpScalarRelationFilter, Prisma.RsvpWhereInput>;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
}, "id" | "rsvpId_eventId">;
export type RsvpEventSelectionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rsvpId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RsvpEventSelectionCountOrderByAggregateInput;
    _max?: Prisma.RsvpEventSelectionMaxOrderByAggregateInput;
    _min?: Prisma.RsvpEventSelectionMinOrderByAggregateInput;
};
export type RsvpEventSelectionScalarWhereWithAggregatesInput = {
    AND?: Prisma.RsvpEventSelectionScalarWhereWithAggregatesInput | Prisma.RsvpEventSelectionScalarWhereWithAggregatesInput[];
    OR?: Prisma.RsvpEventSelectionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RsvpEventSelectionScalarWhereWithAggregatesInput | Prisma.RsvpEventSelectionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RsvpEventSelection"> | string;
    rsvpId?: Prisma.StringWithAggregatesFilter<"RsvpEventSelection"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"RsvpEventSelection"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RsvpEventSelection"> | Date | string;
};
export type RsvpEventSelectionCreateInput = {
    id?: string;
    createdAt?: Date | string;
    rsvp: Prisma.RsvpCreateNestedOneWithoutSelectedEventsInput;
    event: Prisma.EventCreateNestedOneWithoutRsvpSelectionsInput;
};
export type RsvpEventSelectionUncheckedCreateInput = {
    id?: string;
    rsvpId: string;
    eventId: string;
    createdAt?: Date | string;
};
export type RsvpEventSelectionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rsvp?: Prisma.RsvpUpdateOneRequiredWithoutSelectedEventsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutRsvpSelectionsNestedInput;
};
export type RsvpEventSelectionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rsvpId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpEventSelectionCreateManyInput = {
    id?: string;
    rsvpId: string;
    eventId: string;
    createdAt?: Date | string;
};
export type RsvpEventSelectionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpEventSelectionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rsvpId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpEventSelectionListRelationFilter = {
    every?: Prisma.RsvpEventSelectionWhereInput;
    some?: Prisma.RsvpEventSelectionWhereInput;
    none?: Prisma.RsvpEventSelectionWhereInput;
};
export type RsvpEventSelectionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RsvpEventSelectionRsvpIdEventIdCompoundUniqueInput = {
    rsvpId: string;
    eventId: string;
};
export type RsvpEventSelectionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rsvpId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RsvpEventSelectionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rsvpId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RsvpEventSelectionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rsvpId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RsvpEventSelectionCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.RsvpEventSelectionCreateWithoutEventInput, Prisma.RsvpEventSelectionUncheckedCreateWithoutEventInput> | Prisma.RsvpEventSelectionCreateWithoutEventInput[] | Prisma.RsvpEventSelectionUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.RsvpEventSelectionCreateOrConnectWithoutEventInput | Prisma.RsvpEventSelectionCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.RsvpEventSelectionCreateManyEventInputEnvelope;
    connect?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
};
export type RsvpEventSelectionUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.RsvpEventSelectionCreateWithoutEventInput, Prisma.RsvpEventSelectionUncheckedCreateWithoutEventInput> | Prisma.RsvpEventSelectionCreateWithoutEventInput[] | Prisma.RsvpEventSelectionUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.RsvpEventSelectionCreateOrConnectWithoutEventInput | Prisma.RsvpEventSelectionCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.RsvpEventSelectionCreateManyEventInputEnvelope;
    connect?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
};
export type RsvpEventSelectionUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.RsvpEventSelectionCreateWithoutEventInput, Prisma.RsvpEventSelectionUncheckedCreateWithoutEventInput> | Prisma.RsvpEventSelectionCreateWithoutEventInput[] | Prisma.RsvpEventSelectionUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.RsvpEventSelectionCreateOrConnectWithoutEventInput | Prisma.RsvpEventSelectionCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.RsvpEventSelectionUpsertWithWhereUniqueWithoutEventInput | Prisma.RsvpEventSelectionUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.RsvpEventSelectionCreateManyEventInputEnvelope;
    set?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
    disconnect?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
    delete?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
    connect?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
    update?: Prisma.RsvpEventSelectionUpdateWithWhereUniqueWithoutEventInput | Prisma.RsvpEventSelectionUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.RsvpEventSelectionUpdateManyWithWhereWithoutEventInput | Prisma.RsvpEventSelectionUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.RsvpEventSelectionScalarWhereInput | Prisma.RsvpEventSelectionScalarWhereInput[];
};
export type RsvpEventSelectionUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.RsvpEventSelectionCreateWithoutEventInput, Prisma.RsvpEventSelectionUncheckedCreateWithoutEventInput> | Prisma.RsvpEventSelectionCreateWithoutEventInput[] | Prisma.RsvpEventSelectionUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.RsvpEventSelectionCreateOrConnectWithoutEventInput | Prisma.RsvpEventSelectionCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.RsvpEventSelectionUpsertWithWhereUniqueWithoutEventInput | Prisma.RsvpEventSelectionUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.RsvpEventSelectionCreateManyEventInputEnvelope;
    set?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
    disconnect?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
    delete?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
    connect?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
    update?: Prisma.RsvpEventSelectionUpdateWithWhereUniqueWithoutEventInput | Prisma.RsvpEventSelectionUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.RsvpEventSelectionUpdateManyWithWhereWithoutEventInput | Prisma.RsvpEventSelectionUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.RsvpEventSelectionScalarWhereInput | Prisma.RsvpEventSelectionScalarWhereInput[];
};
export type RsvpEventSelectionCreateNestedManyWithoutRsvpInput = {
    create?: Prisma.XOR<Prisma.RsvpEventSelectionCreateWithoutRsvpInput, Prisma.RsvpEventSelectionUncheckedCreateWithoutRsvpInput> | Prisma.RsvpEventSelectionCreateWithoutRsvpInput[] | Prisma.RsvpEventSelectionUncheckedCreateWithoutRsvpInput[];
    connectOrCreate?: Prisma.RsvpEventSelectionCreateOrConnectWithoutRsvpInput | Prisma.RsvpEventSelectionCreateOrConnectWithoutRsvpInput[];
    createMany?: Prisma.RsvpEventSelectionCreateManyRsvpInputEnvelope;
    connect?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
};
export type RsvpEventSelectionUncheckedCreateNestedManyWithoutRsvpInput = {
    create?: Prisma.XOR<Prisma.RsvpEventSelectionCreateWithoutRsvpInput, Prisma.RsvpEventSelectionUncheckedCreateWithoutRsvpInput> | Prisma.RsvpEventSelectionCreateWithoutRsvpInput[] | Prisma.RsvpEventSelectionUncheckedCreateWithoutRsvpInput[];
    connectOrCreate?: Prisma.RsvpEventSelectionCreateOrConnectWithoutRsvpInput | Prisma.RsvpEventSelectionCreateOrConnectWithoutRsvpInput[];
    createMany?: Prisma.RsvpEventSelectionCreateManyRsvpInputEnvelope;
    connect?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
};
export type RsvpEventSelectionUpdateManyWithoutRsvpNestedInput = {
    create?: Prisma.XOR<Prisma.RsvpEventSelectionCreateWithoutRsvpInput, Prisma.RsvpEventSelectionUncheckedCreateWithoutRsvpInput> | Prisma.RsvpEventSelectionCreateWithoutRsvpInput[] | Prisma.RsvpEventSelectionUncheckedCreateWithoutRsvpInput[];
    connectOrCreate?: Prisma.RsvpEventSelectionCreateOrConnectWithoutRsvpInput | Prisma.RsvpEventSelectionCreateOrConnectWithoutRsvpInput[];
    upsert?: Prisma.RsvpEventSelectionUpsertWithWhereUniqueWithoutRsvpInput | Prisma.RsvpEventSelectionUpsertWithWhereUniqueWithoutRsvpInput[];
    createMany?: Prisma.RsvpEventSelectionCreateManyRsvpInputEnvelope;
    set?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
    disconnect?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
    delete?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
    connect?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
    update?: Prisma.RsvpEventSelectionUpdateWithWhereUniqueWithoutRsvpInput | Prisma.RsvpEventSelectionUpdateWithWhereUniqueWithoutRsvpInput[];
    updateMany?: Prisma.RsvpEventSelectionUpdateManyWithWhereWithoutRsvpInput | Prisma.RsvpEventSelectionUpdateManyWithWhereWithoutRsvpInput[];
    deleteMany?: Prisma.RsvpEventSelectionScalarWhereInput | Prisma.RsvpEventSelectionScalarWhereInput[];
};
export type RsvpEventSelectionUncheckedUpdateManyWithoutRsvpNestedInput = {
    create?: Prisma.XOR<Prisma.RsvpEventSelectionCreateWithoutRsvpInput, Prisma.RsvpEventSelectionUncheckedCreateWithoutRsvpInput> | Prisma.RsvpEventSelectionCreateWithoutRsvpInput[] | Prisma.RsvpEventSelectionUncheckedCreateWithoutRsvpInput[];
    connectOrCreate?: Prisma.RsvpEventSelectionCreateOrConnectWithoutRsvpInput | Prisma.RsvpEventSelectionCreateOrConnectWithoutRsvpInput[];
    upsert?: Prisma.RsvpEventSelectionUpsertWithWhereUniqueWithoutRsvpInput | Prisma.RsvpEventSelectionUpsertWithWhereUniqueWithoutRsvpInput[];
    createMany?: Prisma.RsvpEventSelectionCreateManyRsvpInputEnvelope;
    set?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
    disconnect?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
    delete?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
    connect?: Prisma.RsvpEventSelectionWhereUniqueInput | Prisma.RsvpEventSelectionWhereUniqueInput[];
    update?: Prisma.RsvpEventSelectionUpdateWithWhereUniqueWithoutRsvpInput | Prisma.RsvpEventSelectionUpdateWithWhereUniqueWithoutRsvpInput[];
    updateMany?: Prisma.RsvpEventSelectionUpdateManyWithWhereWithoutRsvpInput | Prisma.RsvpEventSelectionUpdateManyWithWhereWithoutRsvpInput[];
    deleteMany?: Prisma.RsvpEventSelectionScalarWhereInput | Prisma.RsvpEventSelectionScalarWhereInput[];
};
export type RsvpEventSelectionCreateWithoutEventInput = {
    id?: string;
    createdAt?: Date | string;
    rsvp: Prisma.RsvpCreateNestedOneWithoutSelectedEventsInput;
};
export type RsvpEventSelectionUncheckedCreateWithoutEventInput = {
    id?: string;
    rsvpId: string;
    createdAt?: Date | string;
};
export type RsvpEventSelectionCreateOrConnectWithoutEventInput = {
    where: Prisma.RsvpEventSelectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RsvpEventSelectionCreateWithoutEventInput, Prisma.RsvpEventSelectionUncheckedCreateWithoutEventInput>;
};
export type RsvpEventSelectionCreateManyEventInputEnvelope = {
    data: Prisma.RsvpEventSelectionCreateManyEventInput | Prisma.RsvpEventSelectionCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type RsvpEventSelectionUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.RsvpEventSelectionWhereUniqueInput;
    update: Prisma.XOR<Prisma.RsvpEventSelectionUpdateWithoutEventInput, Prisma.RsvpEventSelectionUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.RsvpEventSelectionCreateWithoutEventInput, Prisma.RsvpEventSelectionUncheckedCreateWithoutEventInput>;
};
export type RsvpEventSelectionUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.RsvpEventSelectionWhereUniqueInput;
    data: Prisma.XOR<Prisma.RsvpEventSelectionUpdateWithoutEventInput, Prisma.RsvpEventSelectionUncheckedUpdateWithoutEventInput>;
};
export type RsvpEventSelectionUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.RsvpEventSelectionScalarWhereInput;
    data: Prisma.XOR<Prisma.RsvpEventSelectionUpdateManyMutationInput, Prisma.RsvpEventSelectionUncheckedUpdateManyWithoutEventInput>;
};
export type RsvpEventSelectionScalarWhereInput = {
    AND?: Prisma.RsvpEventSelectionScalarWhereInput | Prisma.RsvpEventSelectionScalarWhereInput[];
    OR?: Prisma.RsvpEventSelectionScalarWhereInput[];
    NOT?: Prisma.RsvpEventSelectionScalarWhereInput | Prisma.RsvpEventSelectionScalarWhereInput[];
    id?: Prisma.StringFilter<"RsvpEventSelection"> | string;
    rsvpId?: Prisma.StringFilter<"RsvpEventSelection"> | string;
    eventId?: Prisma.StringFilter<"RsvpEventSelection"> | string;
    createdAt?: Prisma.DateTimeFilter<"RsvpEventSelection"> | Date | string;
};
export type RsvpEventSelectionCreateWithoutRsvpInput = {
    id?: string;
    createdAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutRsvpSelectionsInput;
};
export type RsvpEventSelectionUncheckedCreateWithoutRsvpInput = {
    id?: string;
    eventId: string;
    createdAt?: Date | string;
};
export type RsvpEventSelectionCreateOrConnectWithoutRsvpInput = {
    where: Prisma.RsvpEventSelectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RsvpEventSelectionCreateWithoutRsvpInput, Prisma.RsvpEventSelectionUncheckedCreateWithoutRsvpInput>;
};
export type RsvpEventSelectionCreateManyRsvpInputEnvelope = {
    data: Prisma.RsvpEventSelectionCreateManyRsvpInput | Prisma.RsvpEventSelectionCreateManyRsvpInput[];
    skipDuplicates?: boolean;
};
export type RsvpEventSelectionUpsertWithWhereUniqueWithoutRsvpInput = {
    where: Prisma.RsvpEventSelectionWhereUniqueInput;
    update: Prisma.XOR<Prisma.RsvpEventSelectionUpdateWithoutRsvpInput, Prisma.RsvpEventSelectionUncheckedUpdateWithoutRsvpInput>;
    create: Prisma.XOR<Prisma.RsvpEventSelectionCreateWithoutRsvpInput, Prisma.RsvpEventSelectionUncheckedCreateWithoutRsvpInput>;
};
export type RsvpEventSelectionUpdateWithWhereUniqueWithoutRsvpInput = {
    where: Prisma.RsvpEventSelectionWhereUniqueInput;
    data: Prisma.XOR<Prisma.RsvpEventSelectionUpdateWithoutRsvpInput, Prisma.RsvpEventSelectionUncheckedUpdateWithoutRsvpInput>;
};
export type RsvpEventSelectionUpdateManyWithWhereWithoutRsvpInput = {
    where: Prisma.RsvpEventSelectionScalarWhereInput;
    data: Prisma.XOR<Prisma.RsvpEventSelectionUpdateManyMutationInput, Prisma.RsvpEventSelectionUncheckedUpdateManyWithoutRsvpInput>;
};
export type RsvpEventSelectionCreateManyEventInput = {
    id?: string;
    rsvpId: string;
    createdAt?: Date | string;
};
export type RsvpEventSelectionUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rsvp?: Prisma.RsvpUpdateOneRequiredWithoutSelectedEventsNestedInput;
};
export type RsvpEventSelectionUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rsvpId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpEventSelectionUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rsvpId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpEventSelectionCreateManyRsvpInput = {
    id?: string;
    eventId: string;
    createdAt?: Date | string;
};
export type RsvpEventSelectionUpdateWithoutRsvpInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutRsvpSelectionsNestedInput;
};
export type RsvpEventSelectionUncheckedUpdateWithoutRsvpInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpEventSelectionUncheckedUpdateManyWithoutRsvpInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpEventSelectionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rsvpId?: boolean;
    eventId?: boolean;
    createdAt?: boolean;
    rsvp?: boolean | Prisma.RsvpDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rsvpEventSelection"]>;
export type RsvpEventSelectionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rsvpId?: boolean;
    eventId?: boolean;
    createdAt?: boolean;
    rsvp?: boolean | Prisma.RsvpDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rsvpEventSelection"]>;
export type RsvpEventSelectionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rsvpId?: boolean;
    eventId?: boolean;
    createdAt?: boolean;
    rsvp?: boolean | Prisma.RsvpDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rsvpEventSelection"]>;
export type RsvpEventSelectionSelectScalar = {
    id?: boolean;
    rsvpId?: boolean;
    eventId?: boolean;
    createdAt?: boolean;
};
export type RsvpEventSelectionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rsvpId" | "eventId" | "createdAt", ExtArgs["result"]["rsvpEventSelection"]>;
export type RsvpEventSelectionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rsvp?: boolean | Prisma.RsvpDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type RsvpEventSelectionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rsvp?: boolean | Prisma.RsvpDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type RsvpEventSelectionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rsvp?: boolean | Prisma.RsvpDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type $RsvpEventSelectionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RsvpEventSelection";
    objects: {
        rsvp: Prisma.$RsvpPayload<ExtArgs>;
        event: Prisma.$EventPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        rsvpId: string;
        eventId: string;
        createdAt: Date;
    }, ExtArgs["result"]["rsvpEventSelection"]>;
    composites: {};
};
export type RsvpEventSelectionGetPayload<S extends boolean | null | undefined | RsvpEventSelectionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RsvpEventSelectionPayload, S>;
export type RsvpEventSelectionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RsvpEventSelectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RsvpEventSelectionCountAggregateInputType | true;
};
export interface RsvpEventSelectionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RsvpEventSelection'];
        meta: {
            name: 'RsvpEventSelection';
        };
    };
    findUnique<T extends RsvpEventSelectionFindUniqueArgs>(args: Prisma.SelectSubset<T, RsvpEventSelectionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RsvpEventSelectionClient<runtime.Types.Result.GetResult<Prisma.$RsvpEventSelectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RsvpEventSelectionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RsvpEventSelectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RsvpEventSelectionClient<runtime.Types.Result.GetResult<Prisma.$RsvpEventSelectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RsvpEventSelectionFindFirstArgs>(args?: Prisma.SelectSubset<T, RsvpEventSelectionFindFirstArgs<ExtArgs>>): Prisma.Prisma__RsvpEventSelectionClient<runtime.Types.Result.GetResult<Prisma.$RsvpEventSelectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RsvpEventSelectionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RsvpEventSelectionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RsvpEventSelectionClient<runtime.Types.Result.GetResult<Prisma.$RsvpEventSelectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RsvpEventSelectionFindManyArgs>(args?: Prisma.SelectSubset<T, RsvpEventSelectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RsvpEventSelectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RsvpEventSelectionCreateArgs>(args: Prisma.SelectSubset<T, RsvpEventSelectionCreateArgs<ExtArgs>>): Prisma.Prisma__RsvpEventSelectionClient<runtime.Types.Result.GetResult<Prisma.$RsvpEventSelectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RsvpEventSelectionCreateManyArgs>(args?: Prisma.SelectSubset<T, RsvpEventSelectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RsvpEventSelectionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RsvpEventSelectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RsvpEventSelectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RsvpEventSelectionDeleteArgs>(args: Prisma.SelectSubset<T, RsvpEventSelectionDeleteArgs<ExtArgs>>): Prisma.Prisma__RsvpEventSelectionClient<runtime.Types.Result.GetResult<Prisma.$RsvpEventSelectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RsvpEventSelectionUpdateArgs>(args: Prisma.SelectSubset<T, RsvpEventSelectionUpdateArgs<ExtArgs>>): Prisma.Prisma__RsvpEventSelectionClient<runtime.Types.Result.GetResult<Prisma.$RsvpEventSelectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RsvpEventSelectionDeleteManyArgs>(args?: Prisma.SelectSubset<T, RsvpEventSelectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RsvpEventSelectionUpdateManyArgs>(args: Prisma.SelectSubset<T, RsvpEventSelectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RsvpEventSelectionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RsvpEventSelectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RsvpEventSelectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RsvpEventSelectionUpsertArgs>(args: Prisma.SelectSubset<T, RsvpEventSelectionUpsertArgs<ExtArgs>>): Prisma.Prisma__RsvpEventSelectionClient<runtime.Types.Result.GetResult<Prisma.$RsvpEventSelectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RsvpEventSelectionCountArgs>(args?: Prisma.Subset<T, RsvpEventSelectionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RsvpEventSelectionCountAggregateOutputType> : number>;
    aggregate<T extends RsvpEventSelectionAggregateArgs>(args: Prisma.Subset<T, RsvpEventSelectionAggregateArgs>): Prisma.PrismaPromise<GetRsvpEventSelectionAggregateType<T>>;
    groupBy<T extends RsvpEventSelectionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RsvpEventSelectionGroupByArgs['orderBy'];
    } : {
        orderBy?: RsvpEventSelectionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RsvpEventSelectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRsvpEventSelectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RsvpEventSelectionFieldRefs;
}
export interface Prisma__RsvpEventSelectionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rsvp<T extends Prisma.RsvpDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RsvpDefaultArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RsvpEventSelectionFieldRefs {
    readonly id: Prisma.FieldRef<"RsvpEventSelection", 'String'>;
    readonly rsvpId: Prisma.FieldRef<"RsvpEventSelection", 'String'>;
    readonly eventId: Prisma.FieldRef<"RsvpEventSelection", 'String'>;
    readonly createdAt: Prisma.FieldRef<"RsvpEventSelection", 'DateTime'>;
}
export type RsvpEventSelectionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpEventSelectionSelect<ExtArgs> | null;
    omit?: Prisma.RsvpEventSelectionOmit<ExtArgs> | null;
    include?: Prisma.RsvpEventSelectionInclude<ExtArgs> | null;
    where: Prisma.RsvpEventSelectionWhereUniqueInput;
};
export type RsvpEventSelectionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpEventSelectionSelect<ExtArgs> | null;
    omit?: Prisma.RsvpEventSelectionOmit<ExtArgs> | null;
    include?: Prisma.RsvpEventSelectionInclude<ExtArgs> | null;
    where: Prisma.RsvpEventSelectionWhereUniqueInput;
};
export type RsvpEventSelectionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RsvpEventSelectionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RsvpEventSelectionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RsvpEventSelectionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpEventSelectionSelect<ExtArgs> | null;
    omit?: Prisma.RsvpEventSelectionOmit<ExtArgs> | null;
    include?: Prisma.RsvpEventSelectionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RsvpEventSelectionCreateInput, Prisma.RsvpEventSelectionUncheckedCreateInput>;
};
export type RsvpEventSelectionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RsvpEventSelectionCreateManyInput | Prisma.RsvpEventSelectionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RsvpEventSelectionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpEventSelectionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RsvpEventSelectionOmit<ExtArgs> | null;
    data: Prisma.RsvpEventSelectionCreateManyInput | Prisma.RsvpEventSelectionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RsvpEventSelectionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RsvpEventSelectionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpEventSelectionSelect<ExtArgs> | null;
    omit?: Prisma.RsvpEventSelectionOmit<ExtArgs> | null;
    include?: Prisma.RsvpEventSelectionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RsvpEventSelectionUpdateInput, Prisma.RsvpEventSelectionUncheckedUpdateInput>;
    where: Prisma.RsvpEventSelectionWhereUniqueInput;
};
export type RsvpEventSelectionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RsvpEventSelectionUpdateManyMutationInput, Prisma.RsvpEventSelectionUncheckedUpdateManyInput>;
    where?: Prisma.RsvpEventSelectionWhereInput;
    limit?: number;
};
export type RsvpEventSelectionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpEventSelectionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RsvpEventSelectionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RsvpEventSelectionUpdateManyMutationInput, Prisma.RsvpEventSelectionUncheckedUpdateManyInput>;
    where?: Prisma.RsvpEventSelectionWhereInput;
    limit?: number;
    include?: Prisma.RsvpEventSelectionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RsvpEventSelectionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpEventSelectionSelect<ExtArgs> | null;
    omit?: Prisma.RsvpEventSelectionOmit<ExtArgs> | null;
    include?: Prisma.RsvpEventSelectionInclude<ExtArgs> | null;
    where: Prisma.RsvpEventSelectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RsvpEventSelectionCreateInput, Prisma.RsvpEventSelectionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RsvpEventSelectionUpdateInput, Prisma.RsvpEventSelectionUncheckedUpdateInput>;
};
export type RsvpEventSelectionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpEventSelectionSelect<ExtArgs> | null;
    omit?: Prisma.RsvpEventSelectionOmit<ExtArgs> | null;
    include?: Prisma.RsvpEventSelectionInclude<ExtArgs> | null;
    where: Prisma.RsvpEventSelectionWhereUniqueInput;
};
export type RsvpEventSelectionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RsvpEventSelectionWhereInput;
    limit?: number;
};
export type RsvpEventSelectionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpEventSelectionSelect<ExtArgs> | null;
    omit?: Prisma.RsvpEventSelectionOmit<ExtArgs> | null;
    include?: Prisma.RsvpEventSelectionInclude<ExtArgs> | null;
};
