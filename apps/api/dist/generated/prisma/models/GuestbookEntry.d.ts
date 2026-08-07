import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GuestbookEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$GuestbookEntryPayload>;
export type AggregateGuestbookEntry = {
    _count: GuestbookEntryCountAggregateOutputType | null;
    _min: GuestbookEntryMinAggregateOutputType | null;
    _max: GuestbookEntryMaxAggregateOutputType | null;
};
export type GuestbookEntryMinAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    invitationId: string | null;
    authorName: string | null;
    message: string | null;
    status: $Enums.SocialContentStatus | null;
    approvedAt: Date | null;
    hiddenAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GuestbookEntryMaxAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    invitationId: string | null;
    authorName: string | null;
    message: string | null;
    status: $Enums.SocialContentStatus | null;
    approvedAt: Date | null;
    hiddenAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GuestbookEntryCountAggregateOutputType = {
    id: number;
    weddingId: number;
    invitationId: number;
    authorName: number;
    message: number;
    status: number;
    approvedAt: number;
    hiddenAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type GuestbookEntryMinAggregateInputType = {
    id?: true;
    weddingId?: true;
    invitationId?: true;
    authorName?: true;
    message?: true;
    status?: true;
    approvedAt?: true;
    hiddenAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GuestbookEntryMaxAggregateInputType = {
    id?: true;
    weddingId?: true;
    invitationId?: true;
    authorName?: true;
    message?: true;
    status?: true;
    approvedAt?: true;
    hiddenAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GuestbookEntryCountAggregateInputType = {
    id?: true;
    weddingId?: true;
    invitationId?: true;
    authorName?: true;
    message?: true;
    status?: true;
    approvedAt?: true;
    hiddenAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type GuestbookEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuestbookEntryWhereInput;
    orderBy?: Prisma.GuestbookEntryOrderByWithRelationInput | Prisma.GuestbookEntryOrderByWithRelationInput[];
    cursor?: Prisma.GuestbookEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GuestbookEntryCountAggregateInputType;
    _min?: GuestbookEntryMinAggregateInputType;
    _max?: GuestbookEntryMaxAggregateInputType;
};
export type GetGuestbookEntryAggregateType<T extends GuestbookEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateGuestbookEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGuestbookEntry[P]> : Prisma.GetScalarType<T[P], AggregateGuestbookEntry[P]>;
};
export type GuestbookEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuestbookEntryWhereInput;
    orderBy?: Prisma.GuestbookEntryOrderByWithAggregationInput | Prisma.GuestbookEntryOrderByWithAggregationInput[];
    by: Prisma.GuestbookEntryScalarFieldEnum[] | Prisma.GuestbookEntryScalarFieldEnum;
    having?: Prisma.GuestbookEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GuestbookEntryCountAggregateInputType | true;
    _min?: GuestbookEntryMinAggregateInputType;
    _max?: GuestbookEntryMaxAggregateInputType;
};
export type GuestbookEntryGroupByOutputType = {
    id: string;
    weddingId: string;
    invitationId: string | null;
    authorName: string;
    message: string;
    status: $Enums.SocialContentStatus;
    approvedAt: Date | null;
    hiddenAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: GuestbookEntryCountAggregateOutputType | null;
    _min: GuestbookEntryMinAggregateOutputType | null;
    _max: GuestbookEntryMaxAggregateOutputType | null;
};
export type GetGuestbookEntryGroupByPayload<T extends GuestbookEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GuestbookEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GuestbookEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GuestbookEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GuestbookEntryGroupByOutputType[P]>;
}>>;
export type GuestbookEntryWhereInput = {
    AND?: Prisma.GuestbookEntryWhereInput | Prisma.GuestbookEntryWhereInput[];
    OR?: Prisma.GuestbookEntryWhereInput[];
    NOT?: Prisma.GuestbookEntryWhereInput | Prisma.GuestbookEntryWhereInput[];
    id?: Prisma.StringFilter<"GuestbookEntry"> | string;
    weddingId?: Prisma.StringFilter<"GuestbookEntry"> | string;
    invitationId?: Prisma.StringNullableFilter<"GuestbookEntry"> | string | null;
    authorName?: Prisma.StringFilter<"GuestbookEntry"> | string;
    message?: Prisma.StringFilter<"GuestbookEntry"> | string;
    status?: Prisma.EnumSocialContentStatusFilter<"GuestbookEntry"> | $Enums.SocialContentStatus;
    approvedAt?: Prisma.DateTimeNullableFilter<"GuestbookEntry"> | Date | string | null;
    hiddenAt?: Prisma.DateTimeNullableFilter<"GuestbookEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"GuestbookEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"GuestbookEntry"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
    invitation?: Prisma.XOR<Prisma.InvitationNullableScalarRelationFilter, Prisma.InvitationWhereInput> | null;
};
export type GuestbookEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    hiddenAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    wedding?: Prisma.WeddingOrderByWithRelationInput;
    invitation?: Prisma.InvitationOrderByWithRelationInput;
};
export type GuestbookEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    invitationId?: string;
    AND?: Prisma.GuestbookEntryWhereInput | Prisma.GuestbookEntryWhereInput[];
    OR?: Prisma.GuestbookEntryWhereInput[];
    NOT?: Prisma.GuestbookEntryWhereInput | Prisma.GuestbookEntryWhereInput[];
    weddingId?: Prisma.StringFilter<"GuestbookEntry"> | string;
    authorName?: Prisma.StringFilter<"GuestbookEntry"> | string;
    message?: Prisma.StringFilter<"GuestbookEntry"> | string;
    status?: Prisma.EnumSocialContentStatusFilter<"GuestbookEntry"> | $Enums.SocialContentStatus;
    approvedAt?: Prisma.DateTimeNullableFilter<"GuestbookEntry"> | Date | string | null;
    hiddenAt?: Prisma.DateTimeNullableFilter<"GuestbookEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"GuestbookEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"GuestbookEntry"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
    invitation?: Prisma.XOR<Prisma.InvitationNullableScalarRelationFilter, Prisma.InvitationWhereInput> | null;
}, "id" | "invitationId">;
export type GuestbookEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    hiddenAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.GuestbookEntryCountOrderByAggregateInput;
    _max?: Prisma.GuestbookEntryMaxOrderByAggregateInput;
    _min?: Prisma.GuestbookEntryMinOrderByAggregateInput;
};
export type GuestbookEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.GuestbookEntryScalarWhereWithAggregatesInput | Prisma.GuestbookEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.GuestbookEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GuestbookEntryScalarWhereWithAggregatesInput | Prisma.GuestbookEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GuestbookEntry"> | string;
    weddingId?: Prisma.StringWithAggregatesFilter<"GuestbookEntry"> | string;
    invitationId?: Prisma.StringNullableWithAggregatesFilter<"GuestbookEntry"> | string | null;
    authorName?: Prisma.StringWithAggregatesFilter<"GuestbookEntry"> | string;
    message?: Prisma.StringWithAggregatesFilter<"GuestbookEntry"> | string;
    status?: Prisma.EnumSocialContentStatusWithAggregatesFilter<"GuestbookEntry"> | $Enums.SocialContentStatus;
    approvedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"GuestbookEntry"> | Date | string | null;
    hiddenAt?: Prisma.DateTimeNullableWithAggregatesFilter<"GuestbookEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"GuestbookEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"GuestbookEntry"> | Date | string;
};
export type GuestbookEntryCreateInput = {
    id?: string;
    authorName: string;
    message: string;
    status?: $Enums.SocialContentStatus;
    approvedAt?: Date | string | null;
    hiddenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutGuestbookEntriesInput;
    invitation?: Prisma.InvitationCreateNestedOneWithoutGuestbookEntryInput;
};
export type GuestbookEntryUncheckedCreateInput = {
    id?: string;
    weddingId: string;
    invitationId?: string | null;
    authorName: string;
    message: string;
    status?: $Enums.SocialContentStatus;
    approvedAt?: Date | string | null;
    hiddenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GuestbookEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutGuestbookEntriesNestedInput;
    invitation?: Prisma.InvitationUpdateOneWithoutGuestbookEntryNestedInput;
};
export type GuestbookEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestbookEntryCreateManyInput = {
    id?: string;
    weddingId: string;
    invitationId?: string | null;
    authorName: string;
    message: string;
    status?: $Enums.SocialContentStatus;
    approvedAt?: Date | string | null;
    hiddenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GuestbookEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestbookEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestbookEntryListRelationFilter = {
    every?: Prisma.GuestbookEntryWhereInput;
    some?: Prisma.GuestbookEntryWhereInput;
    none?: Prisma.GuestbookEntryWhereInput;
};
export type GuestbookEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GuestbookEntryNullableScalarRelationFilter = {
    is?: Prisma.GuestbookEntryWhereInput | null;
    isNot?: Prisma.GuestbookEntryWhereInput | null;
};
export type GuestbookEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    hiddenAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GuestbookEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    hiddenAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GuestbookEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    hiddenAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GuestbookEntryCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.GuestbookEntryCreateWithoutWeddingInput, Prisma.GuestbookEntryUncheckedCreateWithoutWeddingInput> | Prisma.GuestbookEntryCreateWithoutWeddingInput[] | Prisma.GuestbookEntryUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.GuestbookEntryCreateOrConnectWithoutWeddingInput | Prisma.GuestbookEntryCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.GuestbookEntryCreateManyWeddingInputEnvelope;
    connect?: Prisma.GuestbookEntryWhereUniqueInput | Prisma.GuestbookEntryWhereUniqueInput[];
};
export type GuestbookEntryUncheckedCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.GuestbookEntryCreateWithoutWeddingInput, Prisma.GuestbookEntryUncheckedCreateWithoutWeddingInput> | Prisma.GuestbookEntryCreateWithoutWeddingInput[] | Prisma.GuestbookEntryUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.GuestbookEntryCreateOrConnectWithoutWeddingInput | Prisma.GuestbookEntryCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.GuestbookEntryCreateManyWeddingInputEnvelope;
    connect?: Prisma.GuestbookEntryWhereUniqueInput | Prisma.GuestbookEntryWhereUniqueInput[];
};
export type GuestbookEntryUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.GuestbookEntryCreateWithoutWeddingInput, Prisma.GuestbookEntryUncheckedCreateWithoutWeddingInput> | Prisma.GuestbookEntryCreateWithoutWeddingInput[] | Prisma.GuestbookEntryUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.GuestbookEntryCreateOrConnectWithoutWeddingInput | Prisma.GuestbookEntryCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.GuestbookEntryUpsertWithWhereUniqueWithoutWeddingInput | Prisma.GuestbookEntryUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.GuestbookEntryCreateManyWeddingInputEnvelope;
    set?: Prisma.GuestbookEntryWhereUniqueInput | Prisma.GuestbookEntryWhereUniqueInput[];
    disconnect?: Prisma.GuestbookEntryWhereUniqueInput | Prisma.GuestbookEntryWhereUniqueInput[];
    delete?: Prisma.GuestbookEntryWhereUniqueInput | Prisma.GuestbookEntryWhereUniqueInput[];
    connect?: Prisma.GuestbookEntryWhereUniqueInput | Prisma.GuestbookEntryWhereUniqueInput[];
    update?: Prisma.GuestbookEntryUpdateWithWhereUniqueWithoutWeddingInput | Prisma.GuestbookEntryUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.GuestbookEntryUpdateManyWithWhereWithoutWeddingInput | Prisma.GuestbookEntryUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.GuestbookEntryScalarWhereInput | Prisma.GuestbookEntryScalarWhereInput[];
};
export type GuestbookEntryUncheckedUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.GuestbookEntryCreateWithoutWeddingInput, Prisma.GuestbookEntryUncheckedCreateWithoutWeddingInput> | Prisma.GuestbookEntryCreateWithoutWeddingInput[] | Prisma.GuestbookEntryUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.GuestbookEntryCreateOrConnectWithoutWeddingInput | Prisma.GuestbookEntryCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.GuestbookEntryUpsertWithWhereUniqueWithoutWeddingInput | Prisma.GuestbookEntryUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.GuestbookEntryCreateManyWeddingInputEnvelope;
    set?: Prisma.GuestbookEntryWhereUniqueInput | Prisma.GuestbookEntryWhereUniqueInput[];
    disconnect?: Prisma.GuestbookEntryWhereUniqueInput | Prisma.GuestbookEntryWhereUniqueInput[];
    delete?: Prisma.GuestbookEntryWhereUniqueInput | Prisma.GuestbookEntryWhereUniqueInput[];
    connect?: Prisma.GuestbookEntryWhereUniqueInput | Prisma.GuestbookEntryWhereUniqueInput[];
    update?: Prisma.GuestbookEntryUpdateWithWhereUniqueWithoutWeddingInput | Prisma.GuestbookEntryUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.GuestbookEntryUpdateManyWithWhereWithoutWeddingInput | Prisma.GuestbookEntryUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.GuestbookEntryScalarWhereInput | Prisma.GuestbookEntryScalarWhereInput[];
};
export type GuestbookEntryCreateNestedOneWithoutInvitationInput = {
    create?: Prisma.XOR<Prisma.GuestbookEntryCreateWithoutInvitationInput, Prisma.GuestbookEntryUncheckedCreateWithoutInvitationInput>;
    connectOrCreate?: Prisma.GuestbookEntryCreateOrConnectWithoutInvitationInput;
    connect?: Prisma.GuestbookEntryWhereUniqueInput;
};
export type GuestbookEntryUncheckedCreateNestedOneWithoutInvitationInput = {
    create?: Prisma.XOR<Prisma.GuestbookEntryCreateWithoutInvitationInput, Prisma.GuestbookEntryUncheckedCreateWithoutInvitationInput>;
    connectOrCreate?: Prisma.GuestbookEntryCreateOrConnectWithoutInvitationInput;
    connect?: Prisma.GuestbookEntryWhereUniqueInput;
};
export type GuestbookEntryUpdateOneWithoutInvitationNestedInput = {
    create?: Prisma.XOR<Prisma.GuestbookEntryCreateWithoutInvitationInput, Prisma.GuestbookEntryUncheckedCreateWithoutInvitationInput>;
    connectOrCreate?: Prisma.GuestbookEntryCreateOrConnectWithoutInvitationInput;
    upsert?: Prisma.GuestbookEntryUpsertWithoutInvitationInput;
    disconnect?: Prisma.GuestbookEntryWhereInput | boolean;
    delete?: Prisma.GuestbookEntryWhereInput | boolean;
    connect?: Prisma.GuestbookEntryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GuestbookEntryUpdateToOneWithWhereWithoutInvitationInput, Prisma.GuestbookEntryUpdateWithoutInvitationInput>, Prisma.GuestbookEntryUncheckedUpdateWithoutInvitationInput>;
};
export type GuestbookEntryUncheckedUpdateOneWithoutInvitationNestedInput = {
    create?: Prisma.XOR<Prisma.GuestbookEntryCreateWithoutInvitationInput, Prisma.GuestbookEntryUncheckedCreateWithoutInvitationInput>;
    connectOrCreate?: Prisma.GuestbookEntryCreateOrConnectWithoutInvitationInput;
    upsert?: Prisma.GuestbookEntryUpsertWithoutInvitationInput;
    disconnect?: Prisma.GuestbookEntryWhereInput | boolean;
    delete?: Prisma.GuestbookEntryWhereInput | boolean;
    connect?: Prisma.GuestbookEntryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GuestbookEntryUpdateToOneWithWhereWithoutInvitationInput, Prisma.GuestbookEntryUpdateWithoutInvitationInput>, Prisma.GuestbookEntryUncheckedUpdateWithoutInvitationInput>;
};
export type GuestbookEntryCreateWithoutWeddingInput = {
    id?: string;
    authorName: string;
    message: string;
    status?: $Enums.SocialContentStatus;
    approvedAt?: Date | string | null;
    hiddenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invitation?: Prisma.InvitationCreateNestedOneWithoutGuestbookEntryInput;
};
export type GuestbookEntryUncheckedCreateWithoutWeddingInput = {
    id?: string;
    invitationId?: string | null;
    authorName: string;
    message: string;
    status?: $Enums.SocialContentStatus;
    approvedAt?: Date | string | null;
    hiddenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GuestbookEntryCreateOrConnectWithoutWeddingInput = {
    where: Prisma.GuestbookEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuestbookEntryCreateWithoutWeddingInput, Prisma.GuestbookEntryUncheckedCreateWithoutWeddingInput>;
};
export type GuestbookEntryCreateManyWeddingInputEnvelope = {
    data: Prisma.GuestbookEntryCreateManyWeddingInput | Prisma.GuestbookEntryCreateManyWeddingInput[];
    skipDuplicates?: boolean;
};
export type GuestbookEntryUpsertWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.GuestbookEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.GuestbookEntryUpdateWithoutWeddingInput, Prisma.GuestbookEntryUncheckedUpdateWithoutWeddingInput>;
    create: Prisma.XOR<Prisma.GuestbookEntryCreateWithoutWeddingInput, Prisma.GuestbookEntryUncheckedCreateWithoutWeddingInput>;
};
export type GuestbookEntryUpdateWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.GuestbookEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.GuestbookEntryUpdateWithoutWeddingInput, Prisma.GuestbookEntryUncheckedUpdateWithoutWeddingInput>;
};
export type GuestbookEntryUpdateManyWithWhereWithoutWeddingInput = {
    where: Prisma.GuestbookEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.GuestbookEntryUpdateManyMutationInput, Prisma.GuestbookEntryUncheckedUpdateManyWithoutWeddingInput>;
};
export type GuestbookEntryScalarWhereInput = {
    AND?: Prisma.GuestbookEntryScalarWhereInput | Prisma.GuestbookEntryScalarWhereInput[];
    OR?: Prisma.GuestbookEntryScalarWhereInput[];
    NOT?: Prisma.GuestbookEntryScalarWhereInput | Prisma.GuestbookEntryScalarWhereInput[];
    id?: Prisma.StringFilter<"GuestbookEntry"> | string;
    weddingId?: Prisma.StringFilter<"GuestbookEntry"> | string;
    invitationId?: Prisma.StringNullableFilter<"GuestbookEntry"> | string | null;
    authorName?: Prisma.StringFilter<"GuestbookEntry"> | string;
    message?: Prisma.StringFilter<"GuestbookEntry"> | string;
    status?: Prisma.EnumSocialContentStatusFilter<"GuestbookEntry"> | $Enums.SocialContentStatus;
    approvedAt?: Prisma.DateTimeNullableFilter<"GuestbookEntry"> | Date | string | null;
    hiddenAt?: Prisma.DateTimeNullableFilter<"GuestbookEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"GuestbookEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"GuestbookEntry"> | Date | string;
};
export type GuestbookEntryCreateWithoutInvitationInput = {
    id?: string;
    authorName: string;
    message: string;
    status?: $Enums.SocialContentStatus;
    approvedAt?: Date | string | null;
    hiddenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutGuestbookEntriesInput;
};
export type GuestbookEntryUncheckedCreateWithoutInvitationInput = {
    id?: string;
    weddingId: string;
    authorName: string;
    message: string;
    status?: $Enums.SocialContentStatus;
    approvedAt?: Date | string | null;
    hiddenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GuestbookEntryCreateOrConnectWithoutInvitationInput = {
    where: Prisma.GuestbookEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuestbookEntryCreateWithoutInvitationInput, Prisma.GuestbookEntryUncheckedCreateWithoutInvitationInput>;
};
export type GuestbookEntryUpsertWithoutInvitationInput = {
    update: Prisma.XOR<Prisma.GuestbookEntryUpdateWithoutInvitationInput, Prisma.GuestbookEntryUncheckedUpdateWithoutInvitationInput>;
    create: Prisma.XOR<Prisma.GuestbookEntryCreateWithoutInvitationInput, Prisma.GuestbookEntryUncheckedCreateWithoutInvitationInput>;
    where?: Prisma.GuestbookEntryWhereInput;
};
export type GuestbookEntryUpdateToOneWithWhereWithoutInvitationInput = {
    where?: Prisma.GuestbookEntryWhereInput;
    data: Prisma.XOR<Prisma.GuestbookEntryUpdateWithoutInvitationInput, Prisma.GuestbookEntryUncheckedUpdateWithoutInvitationInput>;
};
export type GuestbookEntryUpdateWithoutInvitationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutGuestbookEntriesNestedInput;
};
export type GuestbookEntryUncheckedUpdateWithoutInvitationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestbookEntryCreateManyWeddingInput = {
    id?: string;
    invitationId?: string | null;
    authorName: string;
    message: string;
    status?: $Enums.SocialContentStatus;
    approvedAt?: Date | string | null;
    hiddenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GuestbookEntryUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitation?: Prisma.InvitationUpdateOneWithoutGuestbookEntryNestedInput;
};
export type GuestbookEntryUncheckedUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestbookEntryUncheckedUpdateManyWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestbookEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    invitationId?: boolean;
    authorName?: boolean;
    message?: boolean;
    status?: boolean;
    approvedAt?: boolean;
    hiddenAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.GuestbookEntry$invitationArgs<ExtArgs>;
}, ExtArgs["result"]["guestbookEntry"]>;
export type GuestbookEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    invitationId?: boolean;
    authorName?: boolean;
    message?: boolean;
    status?: boolean;
    approvedAt?: boolean;
    hiddenAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.GuestbookEntry$invitationArgs<ExtArgs>;
}, ExtArgs["result"]["guestbookEntry"]>;
export type GuestbookEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    invitationId?: boolean;
    authorName?: boolean;
    message?: boolean;
    status?: boolean;
    approvedAt?: boolean;
    hiddenAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.GuestbookEntry$invitationArgs<ExtArgs>;
}, ExtArgs["result"]["guestbookEntry"]>;
export type GuestbookEntrySelectScalar = {
    id?: boolean;
    weddingId?: boolean;
    invitationId?: boolean;
    authorName?: boolean;
    message?: boolean;
    status?: boolean;
    approvedAt?: boolean;
    hiddenAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type GuestbookEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "weddingId" | "invitationId" | "authorName" | "message" | "status" | "approvedAt" | "hiddenAt" | "createdAt" | "updatedAt", ExtArgs["result"]["guestbookEntry"]>;
export type GuestbookEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.GuestbookEntry$invitationArgs<ExtArgs>;
};
export type GuestbookEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.GuestbookEntry$invitationArgs<ExtArgs>;
};
export type GuestbookEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.GuestbookEntry$invitationArgs<ExtArgs>;
};
export type $GuestbookEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GuestbookEntry";
    objects: {
        wedding: Prisma.$WeddingPayload<ExtArgs>;
        invitation: Prisma.$InvitationPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        weddingId: string;
        invitationId: string | null;
        authorName: string;
        message: string;
        status: $Enums.SocialContentStatus;
        approvedAt: Date | null;
        hiddenAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["guestbookEntry"]>;
    composites: {};
};
export type GuestbookEntryGetPayload<S extends boolean | null | undefined | GuestbookEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GuestbookEntryPayload, S>;
export type GuestbookEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GuestbookEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GuestbookEntryCountAggregateInputType | true;
};
export interface GuestbookEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GuestbookEntry'];
        meta: {
            name: 'GuestbookEntry';
        };
    };
    findUnique<T extends GuestbookEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, GuestbookEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GuestbookEntryClient<runtime.Types.Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GuestbookEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GuestbookEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GuestbookEntryClient<runtime.Types.Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GuestbookEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, GuestbookEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__GuestbookEntryClient<runtime.Types.Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GuestbookEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GuestbookEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GuestbookEntryClient<runtime.Types.Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GuestbookEntryFindManyArgs>(args?: Prisma.SelectSubset<T, GuestbookEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GuestbookEntryCreateArgs>(args: Prisma.SelectSubset<T, GuestbookEntryCreateArgs<ExtArgs>>): Prisma.Prisma__GuestbookEntryClient<runtime.Types.Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GuestbookEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, GuestbookEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GuestbookEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GuestbookEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GuestbookEntryDeleteArgs>(args: Prisma.SelectSubset<T, GuestbookEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__GuestbookEntryClient<runtime.Types.Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GuestbookEntryUpdateArgs>(args: Prisma.SelectSubset<T, GuestbookEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__GuestbookEntryClient<runtime.Types.Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GuestbookEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, GuestbookEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GuestbookEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, GuestbookEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GuestbookEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GuestbookEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GuestbookEntryUpsertArgs>(args: Prisma.SelectSubset<T, GuestbookEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__GuestbookEntryClient<runtime.Types.Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GuestbookEntryCountArgs>(args?: Prisma.Subset<T, GuestbookEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GuestbookEntryCountAggregateOutputType> : number>;
    aggregate<T extends GuestbookEntryAggregateArgs>(args: Prisma.Subset<T, GuestbookEntryAggregateArgs>): Prisma.PrismaPromise<GetGuestbookEntryAggregateType<T>>;
    groupBy<T extends GuestbookEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GuestbookEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: GuestbookEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GuestbookEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestbookEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GuestbookEntryFieldRefs;
}
export interface Prisma__GuestbookEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wedding<T extends Prisma.WeddingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WeddingDefaultArgs<ExtArgs>>): Prisma.Prisma__WeddingClient<runtime.Types.Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    invitation<T extends Prisma.GuestbookEntry$invitationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GuestbookEntry$invitationArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GuestbookEntryFieldRefs {
    readonly id: Prisma.FieldRef<"GuestbookEntry", 'String'>;
    readonly weddingId: Prisma.FieldRef<"GuestbookEntry", 'String'>;
    readonly invitationId: Prisma.FieldRef<"GuestbookEntry", 'String'>;
    readonly authorName: Prisma.FieldRef<"GuestbookEntry", 'String'>;
    readonly message: Prisma.FieldRef<"GuestbookEntry", 'String'>;
    readonly status: Prisma.FieldRef<"GuestbookEntry", 'SocialContentStatus'>;
    readonly approvedAt: Prisma.FieldRef<"GuestbookEntry", 'DateTime'>;
    readonly hiddenAt: Prisma.FieldRef<"GuestbookEntry", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"GuestbookEntry", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"GuestbookEntry", 'DateTime'>;
}
export type GuestbookEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.GuestbookEntryOmit<ExtArgs> | null;
    include?: Prisma.GuestbookEntryInclude<ExtArgs> | null;
    where: Prisma.GuestbookEntryWhereUniqueInput;
};
export type GuestbookEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.GuestbookEntryOmit<ExtArgs> | null;
    include?: Prisma.GuestbookEntryInclude<ExtArgs> | null;
    where: Prisma.GuestbookEntryWhereUniqueInput;
};
export type GuestbookEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.GuestbookEntryOmit<ExtArgs> | null;
    include?: Prisma.GuestbookEntryInclude<ExtArgs> | null;
    where?: Prisma.GuestbookEntryWhereInput;
    orderBy?: Prisma.GuestbookEntryOrderByWithRelationInput | Prisma.GuestbookEntryOrderByWithRelationInput[];
    cursor?: Prisma.GuestbookEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GuestbookEntryScalarFieldEnum | Prisma.GuestbookEntryScalarFieldEnum[];
};
export type GuestbookEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.GuestbookEntryOmit<ExtArgs> | null;
    include?: Prisma.GuestbookEntryInclude<ExtArgs> | null;
    where?: Prisma.GuestbookEntryWhereInput;
    orderBy?: Prisma.GuestbookEntryOrderByWithRelationInput | Prisma.GuestbookEntryOrderByWithRelationInput[];
    cursor?: Prisma.GuestbookEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GuestbookEntryScalarFieldEnum | Prisma.GuestbookEntryScalarFieldEnum[];
};
export type GuestbookEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.GuestbookEntryOmit<ExtArgs> | null;
    include?: Prisma.GuestbookEntryInclude<ExtArgs> | null;
    where?: Prisma.GuestbookEntryWhereInput;
    orderBy?: Prisma.GuestbookEntryOrderByWithRelationInput | Prisma.GuestbookEntryOrderByWithRelationInput[];
    cursor?: Prisma.GuestbookEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GuestbookEntryScalarFieldEnum | Prisma.GuestbookEntryScalarFieldEnum[];
};
export type GuestbookEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.GuestbookEntryOmit<ExtArgs> | null;
    include?: Prisma.GuestbookEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GuestbookEntryCreateInput, Prisma.GuestbookEntryUncheckedCreateInput>;
};
export type GuestbookEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GuestbookEntryCreateManyInput | Prisma.GuestbookEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GuestbookEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestbookEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GuestbookEntryOmit<ExtArgs> | null;
    data: Prisma.GuestbookEntryCreateManyInput | Prisma.GuestbookEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GuestbookEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GuestbookEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.GuestbookEntryOmit<ExtArgs> | null;
    include?: Prisma.GuestbookEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GuestbookEntryUpdateInput, Prisma.GuestbookEntryUncheckedUpdateInput>;
    where: Prisma.GuestbookEntryWhereUniqueInput;
};
export type GuestbookEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GuestbookEntryUpdateManyMutationInput, Prisma.GuestbookEntryUncheckedUpdateManyInput>;
    where?: Prisma.GuestbookEntryWhereInput;
    limit?: number;
};
export type GuestbookEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestbookEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GuestbookEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GuestbookEntryUpdateManyMutationInput, Prisma.GuestbookEntryUncheckedUpdateManyInput>;
    where?: Prisma.GuestbookEntryWhereInput;
    limit?: number;
    include?: Prisma.GuestbookEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GuestbookEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.GuestbookEntryOmit<ExtArgs> | null;
    include?: Prisma.GuestbookEntryInclude<ExtArgs> | null;
    where: Prisma.GuestbookEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuestbookEntryCreateInput, Prisma.GuestbookEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GuestbookEntryUpdateInput, Prisma.GuestbookEntryUncheckedUpdateInput>;
};
export type GuestbookEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.GuestbookEntryOmit<ExtArgs> | null;
    include?: Prisma.GuestbookEntryInclude<ExtArgs> | null;
    where: Prisma.GuestbookEntryWhereUniqueInput;
};
export type GuestbookEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuestbookEntryWhereInput;
    limit?: number;
};
export type GuestbookEntry$invitationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
    where?: Prisma.InvitationWhereInput;
};
export type GuestbookEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestbookEntrySelect<ExtArgs> | null;
    omit?: Prisma.GuestbookEntryOmit<ExtArgs> | null;
    include?: Prisma.GuestbookEntryInclude<ExtArgs> | null;
};
