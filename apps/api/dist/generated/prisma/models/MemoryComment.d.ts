import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MemoryCommentModel = runtime.Types.Result.DefaultSelection<Prisma.$MemoryCommentPayload>;
export type AggregateMemoryComment = {
    _count: MemoryCommentCountAggregateOutputType | null;
    _min: MemoryCommentMinAggregateOutputType | null;
    _max: MemoryCommentMaxAggregateOutputType | null;
};
export type MemoryCommentMinAggregateOutputType = {
    id: string | null;
    assetId: string | null;
    invitationId: string | null;
    authorName: string | null;
    actorHash: string | null;
    body: string | null;
    status: $Enums.SocialContentStatus | null;
    approvedAt: Date | null;
    hiddenAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MemoryCommentMaxAggregateOutputType = {
    id: string | null;
    assetId: string | null;
    invitationId: string | null;
    authorName: string | null;
    actorHash: string | null;
    body: string | null;
    status: $Enums.SocialContentStatus | null;
    approvedAt: Date | null;
    hiddenAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MemoryCommentCountAggregateOutputType = {
    id: number;
    assetId: number;
    invitationId: number;
    authorName: number;
    actorHash: number;
    body: number;
    status: number;
    approvedAt: number;
    hiddenAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MemoryCommentMinAggregateInputType = {
    id?: true;
    assetId?: true;
    invitationId?: true;
    authorName?: true;
    actorHash?: true;
    body?: true;
    status?: true;
    approvedAt?: true;
    hiddenAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MemoryCommentMaxAggregateInputType = {
    id?: true;
    assetId?: true;
    invitationId?: true;
    authorName?: true;
    actorHash?: true;
    body?: true;
    status?: true;
    approvedAt?: true;
    hiddenAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MemoryCommentCountAggregateInputType = {
    id?: true;
    assetId?: true;
    invitationId?: true;
    authorName?: true;
    actorHash?: true;
    body?: true;
    status?: true;
    approvedAt?: true;
    hiddenAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MemoryCommentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemoryCommentWhereInput;
    orderBy?: Prisma.MemoryCommentOrderByWithRelationInput | Prisma.MemoryCommentOrderByWithRelationInput[];
    cursor?: Prisma.MemoryCommentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MemoryCommentCountAggregateInputType;
    _min?: MemoryCommentMinAggregateInputType;
    _max?: MemoryCommentMaxAggregateInputType;
};
export type GetMemoryCommentAggregateType<T extends MemoryCommentAggregateArgs> = {
    [P in keyof T & keyof AggregateMemoryComment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMemoryComment[P]> : Prisma.GetScalarType<T[P], AggregateMemoryComment[P]>;
};
export type MemoryCommentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemoryCommentWhereInput;
    orderBy?: Prisma.MemoryCommentOrderByWithAggregationInput | Prisma.MemoryCommentOrderByWithAggregationInput[];
    by: Prisma.MemoryCommentScalarFieldEnum[] | Prisma.MemoryCommentScalarFieldEnum;
    having?: Prisma.MemoryCommentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MemoryCommentCountAggregateInputType | true;
    _min?: MemoryCommentMinAggregateInputType;
    _max?: MemoryCommentMaxAggregateInputType;
};
export type MemoryCommentGroupByOutputType = {
    id: string;
    assetId: string;
    invitationId: string | null;
    authorName: string;
    actorHash: string;
    body: string;
    status: $Enums.SocialContentStatus;
    approvedAt: Date | null;
    hiddenAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: MemoryCommentCountAggregateOutputType | null;
    _min: MemoryCommentMinAggregateOutputType | null;
    _max: MemoryCommentMaxAggregateOutputType | null;
};
export type GetMemoryCommentGroupByPayload<T extends MemoryCommentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MemoryCommentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MemoryCommentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MemoryCommentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MemoryCommentGroupByOutputType[P]>;
}>>;
export type MemoryCommentWhereInput = {
    AND?: Prisma.MemoryCommentWhereInput | Prisma.MemoryCommentWhereInput[];
    OR?: Prisma.MemoryCommentWhereInput[];
    NOT?: Prisma.MemoryCommentWhereInput | Prisma.MemoryCommentWhereInput[];
    id?: Prisma.StringFilter<"MemoryComment"> | string;
    assetId?: Prisma.StringFilter<"MemoryComment"> | string;
    invitationId?: Prisma.StringNullableFilter<"MemoryComment"> | string | null;
    authorName?: Prisma.StringFilter<"MemoryComment"> | string;
    actorHash?: Prisma.StringFilter<"MemoryComment"> | string;
    body?: Prisma.StringFilter<"MemoryComment"> | string;
    status?: Prisma.EnumSocialContentStatusFilter<"MemoryComment"> | $Enums.SocialContentStatus;
    approvedAt?: Prisma.DateTimeNullableFilter<"MemoryComment"> | Date | string | null;
    hiddenAt?: Prisma.DateTimeNullableFilter<"MemoryComment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MemoryComment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MemoryComment"> | Date | string;
    asset?: Prisma.XOR<Prisma.MemoryAssetScalarRelationFilter, Prisma.MemoryAssetWhereInput>;
    invitation?: Prisma.XOR<Prisma.InvitationNullableScalarRelationFilter, Prisma.InvitationWhereInput> | null;
};
export type MemoryCommentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    actorHash?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    hiddenAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    asset?: Prisma.MemoryAssetOrderByWithRelationInput;
    invitation?: Prisma.InvitationOrderByWithRelationInput;
};
export type MemoryCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MemoryCommentWhereInput | Prisma.MemoryCommentWhereInput[];
    OR?: Prisma.MemoryCommentWhereInput[];
    NOT?: Prisma.MemoryCommentWhereInput | Prisma.MemoryCommentWhereInput[];
    assetId?: Prisma.StringFilter<"MemoryComment"> | string;
    invitationId?: Prisma.StringNullableFilter<"MemoryComment"> | string | null;
    authorName?: Prisma.StringFilter<"MemoryComment"> | string;
    actorHash?: Prisma.StringFilter<"MemoryComment"> | string;
    body?: Prisma.StringFilter<"MemoryComment"> | string;
    status?: Prisma.EnumSocialContentStatusFilter<"MemoryComment"> | $Enums.SocialContentStatus;
    approvedAt?: Prisma.DateTimeNullableFilter<"MemoryComment"> | Date | string | null;
    hiddenAt?: Prisma.DateTimeNullableFilter<"MemoryComment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MemoryComment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MemoryComment"> | Date | string;
    asset?: Prisma.XOR<Prisma.MemoryAssetScalarRelationFilter, Prisma.MemoryAssetWhereInput>;
    invitation?: Prisma.XOR<Prisma.InvitationNullableScalarRelationFilter, Prisma.InvitationWhereInput> | null;
}, "id">;
export type MemoryCommentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    actorHash?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    hiddenAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MemoryCommentCountOrderByAggregateInput;
    _max?: Prisma.MemoryCommentMaxOrderByAggregateInput;
    _min?: Prisma.MemoryCommentMinOrderByAggregateInput;
};
export type MemoryCommentScalarWhereWithAggregatesInput = {
    AND?: Prisma.MemoryCommentScalarWhereWithAggregatesInput | Prisma.MemoryCommentScalarWhereWithAggregatesInput[];
    OR?: Prisma.MemoryCommentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MemoryCommentScalarWhereWithAggregatesInput | Prisma.MemoryCommentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MemoryComment"> | string;
    assetId?: Prisma.StringWithAggregatesFilter<"MemoryComment"> | string;
    invitationId?: Prisma.StringNullableWithAggregatesFilter<"MemoryComment"> | string | null;
    authorName?: Prisma.StringWithAggregatesFilter<"MemoryComment"> | string;
    actorHash?: Prisma.StringWithAggregatesFilter<"MemoryComment"> | string;
    body?: Prisma.StringWithAggregatesFilter<"MemoryComment"> | string;
    status?: Prisma.EnumSocialContentStatusWithAggregatesFilter<"MemoryComment"> | $Enums.SocialContentStatus;
    approvedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"MemoryComment"> | Date | string | null;
    hiddenAt?: Prisma.DateTimeNullableWithAggregatesFilter<"MemoryComment"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MemoryComment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MemoryComment"> | Date | string;
};
export type MemoryCommentCreateInput = {
    id?: string;
    authorName: string;
    actorHash: string;
    body: string;
    status?: $Enums.SocialContentStatus;
    approvedAt?: Date | string | null;
    hiddenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    asset: Prisma.MemoryAssetCreateNestedOneWithoutCommentsInput;
    invitation?: Prisma.InvitationCreateNestedOneWithoutMemoryCommentsInput;
};
export type MemoryCommentUncheckedCreateInput = {
    id?: string;
    assetId: string;
    invitationId?: string | null;
    authorName: string;
    actorHash: string;
    body: string;
    status?: $Enums.SocialContentStatus;
    approvedAt?: Date | string | null;
    hiddenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MemoryCommentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    actorHash?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asset?: Prisma.MemoryAssetUpdateOneRequiredWithoutCommentsNestedInput;
    invitation?: Prisma.InvitationUpdateOneWithoutMemoryCommentsNestedInput;
};
export type MemoryCommentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    actorHash?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemoryCommentCreateManyInput = {
    id?: string;
    assetId: string;
    invitationId?: string | null;
    authorName: string;
    actorHash: string;
    body: string;
    status?: $Enums.SocialContentStatus;
    approvedAt?: Date | string | null;
    hiddenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MemoryCommentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    actorHash?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemoryCommentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    actorHash?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemoryCommentListRelationFilter = {
    every?: Prisma.MemoryCommentWhereInput;
    some?: Prisma.MemoryCommentWhereInput;
    none?: Prisma.MemoryCommentWhereInput;
};
export type MemoryCommentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MemoryCommentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    actorHash?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    hiddenAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MemoryCommentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    actorHash?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    hiddenAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MemoryCommentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    authorName?: Prisma.SortOrder;
    actorHash?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    hiddenAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MemoryCommentCreateNestedManyWithoutInvitationInput = {
    create?: Prisma.XOR<Prisma.MemoryCommentCreateWithoutInvitationInput, Prisma.MemoryCommentUncheckedCreateWithoutInvitationInput> | Prisma.MemoryCommentCreateWithoutInvitationInput[] | Prisma.MemoryCommentUncheckedCreateWithoutInvitationInput[];
    connectOrCreate?: Prisma.MemoryCommentCreateOrConnectWithoutInvitationInput | Prisma.MemoryCommentCreateOrConnectWithoutInvitationInput[];
    createMany?: Prisma.MemoryCommentCreateManyInvitationInputEnvelope;
    connect?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
};
export type MemoryCommentUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: Prisma.XOR<Prisma.MemoryCommentCreateWithoutInvitationInput, Prisma.MemoryCommentUncheckedCreateWithoutInvitationInput> | Prisma.MemoryCommentCreateWithoutInvitationInput[] | Prisma.MemoryCommentUncheckedCreateWithoutInvitationInput[];
    connectOrCreate?: Prisma.MemoryCommentCreateOrConnectWithoutInvitationInput | Prisma.MemoryCommentCreateOrConnectWithoutInvitationInput[];
    createMany?: Prisma.MemoryCommentCreateManyInvitationInputEnvelope;
    connect?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
};
export type MemoryCommentUpdateManyWithoutInvitationNestedInput = {
    create?: Prisma.XOR<Prisma.MemoryCommentCreateWithoutInvitationInput, Prisma.MemoryCommentUncheckedCreateWithoutInvitationInput> | Prisma.MemoryCommentCreateWithoutInvitationInput[] | Prisma.MemoryCommentUncheckedCreateWithoutInvitationInput[];
    connectOrCreate?: Prisma.MemoryCommentCreateOrConnectWithoutInvitationInput | Prisma.MemoryCommentCreateOrConnectWithoutInvitationInput[];
    upsert?: Prisma.MemoryCommentUpsertWithWhereUniqueWithoutInvitationInput | Prisma.MemoryCommentUpsertWithWhereUniqueWithoutInvitationInput[];
    createMany?: Prisma.MemoryCommentCreateManyInvitationInputEnvelope;
    set?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
    disconnect?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
    delete?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
    connect?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
    update?: Prisma.MemoryCommentUpdateWithWhereUniqueWithoutInvitationInput | Prisma.MemoryCommentUpdateWithWhereUniqueWithoutInvitationInput[];
    updateMany?: Prisma.MemoryCommentUpdateManyWithWhereWithoutInvitationInput | Prisma.MemoryCommentUpdateManyWithWhereWithoutInvitationInput[];
    deleteMany?: Prisma.MemoryCommentScalarWhereInput | Prisma.MemoryCommentScalarWhereInput[];
};
export type MemoryCommentUncheckedUpdateManyWithoutInvitationNestedInput = {
    create?: Prisma.XOR<Prisma.MemoryCommentCreateWithoutInvitationInput, Prisma.MemoryCommentUncheckedCreateWithoutInvitationInput> | Prisma.MemoryCommentCreateWithoutInvitationInput[] | Prisma.MemoryCommentUncheckedCreateWithoutInvitationInput[];
    connectOrCreate?: Prisma.MemoryCommentCreateOrConnectWithoutInvitationInput | Prisma.MemoryCommentCreateOrConnectWithoutInvitationInput[];
    upsert?: Prisma.MemoryCommentUpsertWithWhereUniqueWithoutInvitationInput | Prisma.MemoryCommentUpsertWithWhereUniqueWithoutInvitationInput[];
    createMany?: Prisma.MemoryCommentCreateManyInvitationInputEnvelope;
    set?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
    disconnect?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
    delete?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
    connect?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
    update?: Prisma.MemoryCommentUpdateWithWhereUniqueWithoutInvitationInput | Prisma.MemoryCommentUpdateWithWhereUniqueWithoutInvitationInput[];
    updateMany?: Prisma.MemoryCommentUpdateManyWithWhereWithoutInvitationInput | Prisma.MemoryCommentUpdateManyWithWhereWithoutInvitationInput[];
    deleteMany?: Prisma.MemoryCommentScalarWhereInput | Prisma.MemoryCommentScalarWhereInput[];
};
export type MemoryCommentCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.MemoryCommentCreateWithoutAssetInput, Prisma.MemoryCommentUncheckedCreateWithoutAssetInput> | Prisma.MemoryCommentCreateWithoutAssetInput[] | Prisma.MemoryCommentUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.MemoryCommentCreateOrConnectWithoutAssetInput | Prisma.MemoryCommentCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.MemoryCommentCreateManyAssetInputEnvelope;
    connect?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
};
export type MemoryCommentUncheckedCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.MemoryCommentCreateWithoutAssetInput, Prisma.MemoryCommentUncheckedCreateWithoutAssetInput> | Prisma.MemoryCommentCreateWithoutAssetInput[] | Prisma.MemoryCommentUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.MemoryCommentCreateOrConnectWithoutAssetInput | Prisma.MemoryCommentCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.MemoryCommentCreateManyAssetInputEnvelope;
    connect?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
};
export type MemoryCommentUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.MemoryCommentCreateWithoutAssetInput, Prisma.MemoryCommentUncheckedCreateWithoutAssetInput> | Prisma.MemoryCommentCreateWithoutAssetInput[] | Prisma.MemoryCommentUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.MemoryCommentCreateOrConnectWithoutAssetInput | Prisma.MemoryCommentCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.MemoryCommentUpsertWithWhereUniqueWithoutAssetInput | Prisma.MemoryCommentUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.MemoryCommentCreateManyAssetInputEnvelope;
    set?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
    disconnect?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
    delete?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
    connect?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
    update?: Prisma.MemoryCommentUpdateWithWhereUniqueWithoutAssetInput | Prisma.MemoryCommentUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.MemoryCommentUpdateManyWithWhereWithoutAssetInput | Prisma.MemoryCommentUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.MemoryCommentScalarWhereInput | Prisma.MemoryCommentScalarWhereInput[];
};
export type MemoryCommentUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.MemoryCommentCreateWithoutAssetInput, Prisma.MemoryCommentUncheckedCreateWithoutAssetInput> | Prisma.MemoryCommentCreateWithoutAssetInput[] | Prisma.MemoryCommentUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.MemoryCommentCreateOrConnectWithoutAssetInput | Prisma.MemoryCommentCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.MemoryCommentUpsertWithWhereUniqueWithoutAssetInput | Prisma.MemoryCommentUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.MemoryCommentCreateManyAssetInputEnvelope;
    set?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
    disconnect?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
    delete?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
    connect?: Prisma.MemoryCommentWhereUniqueInput | Prisma.MemoryCommentWhereUniqueInput[];
    update?: Prisma.MemoryCommentUpdateWithWhereUniqueWithoutAssetInput | Prisma.MemoryCommentUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.MemoryCommentUpdateManyWithWhereWithoutAssetInput | Prisma.MemoryCommentUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.MemoryCommentScalarWhereInput | Prisma.MemoryCommentScalarWhereInput[];
};
export type EnumSocialContentStatusFieldUpdateOperationsInput = {
    set?: $Enums.SocialContentStatus;
};
export type MemoryCommentCreateWithoutInvitationInput = {
    id?: string;
    authorName: string;
    actorHash: string;
    body: string;
    status?: $Enums.SocialContentStatus;
    approvedAt?: Date | string | null;
    hiddenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    asset: Prisma.MemoryAssetCreateNestedOneWithoutCommentsInput;
};
export type MemoryCommentUncheckedCreateWithoutInvitationInput = {
    id?: string;
    assetId: string;
    authorName: string;
    actorHash: string;
    body: string;
    status?: $Enums.SocialContentStatus;
    approvedAt?: Date | string | null;
    hiddenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MemoryCommentCreateOrConnectWithoutInvitationInput = {
    where: Prisma.MemoryCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemoryCommentCreateWithoutInvitationInput, Prisma.MemoryCommentUncheckedCreateWithoutInvitationInput>;
};
export type MemoryCommentCreateManyInvitationInputEnvelope = {
    data: Prisma.MemoryCommentCreateManyInvitationInput | Prisma.MemoryCommentCreateManyInvitationInput[];
    skipDuplicates?: boolean;
};
export type MemoryCommentUpsertWithWhereUniqueWithoutInvitationInput = {
    where: Prisma.MemoryCommentWhereUniqueInput;
    update: Prisma.XOR<Prisma.MemoryCommentUpdateWithoutInvitationInput, Prisma.MemoryCommentUncheckedUpdateWithoutInvitationInput>;
    create: Prisma.XOR<Prisma.MemoryCommentCreateWithoutInvitationInput, Prisma.MemoryCommentUncheckedCreateWithoutInvitationInput>;
};
export type MemoryCommentUpdateWithWhereUniqueWithoutInvitationInput = {
    where: Prisma.MemoryCommentWhereUniqueInput;
    data: Prisma.XOR<Prisma.MemoryCommentUpdateWithoutInvitationInput, Prisma.MemoryCommentUncheckedUpdateWithoutInvitationInput>;
};
export type MemoryCommentUpdateManyWithWhereWithoutInvitationInput = {
    where: Prisma.MemoryCommentScalarWhereInput;
    data: Prisma.XOR<Prisma.MemoryCommentUpdateManyMutationInput, Prisma.MemoryCommentUncheckedUpdateManyWithoutInvitationInput>;
};
export type MemoryCommentScalarWhereInput = {
    AND?: Prisma.MemoryCommentScalarWhereInput | Prisma.MemoryCommentScalarWhereInput[];
    OR?: Prisma.MemoryCommentScalarWhereInput[];
    NOT?: Prisma.MemoryCommentScalarWhereInput | Prisma.MemoryCommentScalarWhereInput[];
    id?: Prisma.StringFilter<"MemoryComment"> | string;
    assetId?: Prisma.StringFilter<"MemoryComment"> | string;
    invitationId?: Prisma.StringNullableFilter<"MemoryComment"> | string | null;
    authorName?: Prisma.StringFilter<"MemoryComment"> | string;
    actorHash?: Prisma.StringFilter<"MemoryComment"> | string;
    body?: Prisma.StringFilter<"MemoryComment"> | string;
    status?: Prisma.EnumSocialContentStatusFilter<"MemoryComment"> | $Enums.SocialContentStatus;
    approvedAt?: Prisma.DateTimeNullableFilter<"MemoryComment"> | Date | string | null;
    hiddenAt?: Prisma.DateTimeNullableFilter<"MemoryComment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MemoryComment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MemoryComment"> | Date | string;
};
export type MemoryCommentCreateWithoutAssetInput = {
    id?: string;
    authorName: string;
    actorHash: string;
    body: string;
    status?: $Enums.SocialContentStatus;
    approvedAt?: Date | string | null;
    hiddenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invitation?: Prisma.InvitationCreateNestedOneWithoutMemoryCommentsInput;
};
export type MemoryCommentUncheckedCreateWithoutAssetInput = {
    id?: string;
    invitationId?: string | null;
    authorName: string;
    actorHash: string;
    body: string;
    status?: $Enums.SocialContentStatus;
    approvedAt?: Date | string | null;
    hiddenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MemoryCommentCreateOrConnectWithoutAssetInput = {
    where: Prisma.MemoryCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemoryCommentCreateWithoutAssetInput, Prisma.MemoryCommentUncheckedCreateWithoutAssetInput>;
};
export type MemoryCommentCreateManyAssetInputEnvelope = {
    data: Prisma.MemoryCommentCreateManyAssetInput | Prisma.MemoryCommentCreateManyAssetInput[];
    skipDuplicates?: boolean;
};
export type MemoryCommentUpsertWithWhereUniqueWithoutAssetInput = {
    where: Prisma.MemoryCommentWhereUniqueInput;
    update: Prisma.XOR<Prisma.MemoryCommentUpdateWithoutAssetInput, Prisma.MemoryCommentUncheckedUpdateWithoutAssetInput>;
    create: Prisma.XOR<Prisma.MemoryCommentCreateWithoutAssetInput, Prisma.MemoryCommentUncheckedCreateWithoutAssetInput>;
};
export type MemoryCommentUpdateWithWhereUniqueWithoutAssetInput = {
    where: Prisma.MemoryCommentWhereUniqueInput;
    data: Prisma.XOR<Prisma.MemoryCommentUpdateWithoutAssetInput, Prisma.MemoryCommentUncheckedUpdateWithoutAssetInput>;
};
export type MemoryCommentUpdateManyWithWhereWithoutAssetInput = {
    where: Prisma.MemoryCommentScalarWhereInput;
    data: Prisma.XOR<Prisma.MemoryCommentUpdateManyMutationInput, Prisma.MemoryCommentUncheckedUpdateManyWithoutAssetInput>;
};
export type MemoryCommentCreateManyInvitationInput = {
    id?: string;
    assetId: string;
    authorName: string;
    actorHash: string;
    body: string;
    status?: $Enums.SocialContentStatus;
    approvedAt?: Date | string | null;
    hiddenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MemoryCommentUpdateWithoutInvitationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    actorHash?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asset?: Prisma.MemoryAssetUpdateOneRequiredWithoutCommentsNestedInput;
};
export type MemoryCommentUncheckedUpdateWithoutInvitationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    actorHash?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemoryCommentUncheckedUpdateManyWithoutInvitationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    actorHash?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemoryCommentCreateManyAssetInput = {
    id?: string;
    invitationId?: string | null;
    authorName: string;
    actorHash: string;
    body: string;
    status?: $Enums.SocialContentStatus;
    approvedAt?: Date | string | null;
    hiddenAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MemoryCommentUpdateWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    actorHash?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitation?: Prisma.InvitationUpdateOneWithoutMemoryCommentsNestedInput;
};
export type MemoryCommentUncheckedUpdateWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    actorHash?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemoryCommentUncheckedUpdateManyWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    authorName?: Prisma.StringFieldUpdateOperationsInput | string;
    actorHash?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSocialContentStatusFieldUpdateOperationsInput | $Enums.SocialContentStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hiddenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemoryCommentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    invitationId?: boolean;
    authorName?: boolean;
    actorHash?: boolean;
    body?: boolean;
    status?: boolean;
    approvedAt?: boolean;
    hiddenAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    asset?: boolean | Prisma.MemoryAssetDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.MemoryComment$invitationArgs<ExtArgs>;
}, ExtArgs["result"]["memoryComment"]>;
export type MemoryCommentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    invitationId?: boolean;
    authorName?: boolean;
    actorHash?: boolean;
    body?: boolean;
    status?: boolean;
    approvedAt?: boolean;
    hiddenAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    asset?: boolean | Prisma.MemoryAssetDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.MemoryComment$invitationArgs<ExtArgs>;
}, ExtArgs["result"]["memoryComment"]>;
export type MemoryCommentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    invitationId?: boolean;
    authorName?: boolean;
    actorHash?: boolean;
    body?: boolean;
    status?: boolean;
    approvedAt?: boolean;
    hiddenAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    asset?: boolean | Prisma.MemoryAssetDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.MemoryComment$invitationArgs<ExtArgs>;
}, ExtArgs["result"]["memoryComment"]>;
export type MemoryCommentSelectScalar = {
    id?: boolean;
    assetId?: boolean;
    invitationId?: boolean;
    authorName?: boolean;
    actorHash?: boolean;
    body?: boolean;
    status?: boolean;
    approvedAt?: boolean;
    hiddenAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MemoryCommentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "assetId" | "invitationId" | "authorName" | "actorHash" | "body" | "status" | "approvedAt" | "hiddenAt" | "createdAt" | "updatedAt", ExtArgs["result"]["memoryComment"]>;
export type MemoryCommentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.MemoryAssetDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.MemoryComment$invitationArgs<ExtArgs>;
};
export type MemoryCommentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.MemoryAssetDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.MemoryComment$invitationArgs<ExtArgs>;
};
export type MemoryCommentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.MemoryAssetDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.MemoryComment$invitationArgs<ExtArgs>;
};
export type $MemoryCommentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MemoryComment";
    objects: {
        asset: Prisma.$MemoryAssetPayload<ExtArgs>;
        invitation: Prisma.$InvitationPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        assetId: string;
        invitationId: string | null;
        authorName: string;
        actorHash: string;
        body: string;
        status: $Enums.SocialContentStatus;
        approvedAt: Date | null;
        hiddenAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["memoryComment"]>;
    composites: {};
};
export type MemoryCommentGetPayload<S extends boolean | null | undefined | MemoryCommentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MemoryCommentPayload, S>;
export type MemoryCommentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MemoryCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MemoryCommentCountAggregateInputType | true;
};
export interface MemoryCommentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MemoryComment'];
        meta: {
            name: 'MemoryComment';
        };
    };
    findUnique<T extends MemoryCommentFindUniqueArgs>(args: Prisma.SelectSubset<T, MemoryCommentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MemoryCommentClient<runtime.Types.Result.GetResult<Prisma.$MemoryCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MemoryCommentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MemoryCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MemoryCommentClient<runtime.Types.Result.GetResult<Prisma.$MemoryCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MemoryCommentFindFirstArgs>(args?: Prisma.SelectSubset<T, MemoryCommentFindFirstArgs<ExtArgs>>): Prisma.Prisma__MemoryCommentClient<runtime.Types.Result.GetResult<Prisma.$MemoryCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MemoryCommentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MemoryCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MemoryCommentClient<runtime.Types.Result.GetResult<Prisma.$MemoryCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MemoryCommentFindManyArgs>(args?: Prisma.SelectSubset<T, MemoryCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemoryCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MemoryCommentCreateArgs>(args: Prisma.SelectSubset<T, MemoryCommentCreateArgs<ExtArgs>>): Prisma.Prisma__MemoryCommentClient<runtime.Types.Result.GetResult<Prisma.$MemoryCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MemoryCommentCreateManyArgs>(args?: Prisma.SelectSubset<T, MemoryCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MemoryCommentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MemoryCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemoryCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MemoryCommentDeleteArgs>(args: Prisma.SelectSubset<T, MemoryCommentDeleteArgs<ExtArgs>>): Prisma.Prisma__MemoryCommentClient<runtime.Types.Result.GetResult<Prisma.$MemoryCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MemoryCommentUpdateArgs>(args: Prisma.SelectSubset<T, MemoryCommentUpdateArgs<ExtArgs>>): Prisma.Prisma__MemoryCommentClient<runtime.Types.Result.GetResult<Prisma.$MemoryCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MemoryCommentDeleteManyArgs>(args?: Prisma.SelectSubset<T, MemoryCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MemoryCommentUpdateManyArgs>(args: Prisma.SelectSubset<T, MemoryCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MemoryCommentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MemoryCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemoryCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MemoryCommentUpsertArgs>(args: Prisma.SelectSubset<T, MemoryCommentUpsertArgs<ExtArgs>>): Prisma.Prisma__MemoryCommentClient<runtime.Types.Result.GetResult<Prisma.$MemoryCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MemoryCommentCountArgs>(args?: Prisma.Subset<T, MemoryCommentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MemoryCommentCountAggregateOutputType> : number>;
    aggregate<T extends MemoryCommentAggregateArgs>(args: Prisma.Subset<T, MemoryCommentAggregateArgs>): Prisma.PrismaPromise<GetMemoryCommentAggregateType<T>>;
    groupBy<T extends MemoryCommentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MemoryCommentGroupByArgs['orderBy'];
    } : {
        orderBy?: MemoryCommentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MemoryCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemoryCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MemoryCommentFieldRefs;
}
export interface Prisma__MemoryCommentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    asset<T extends Prisma.MemoryAssetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MemoryAssetDefaultArgs<ExtArgs>>): Prisma.Prisma__MemoryAssetClient<runtime.Types.Result.GetResult<Prisma.$MemoryAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    invitation<T extends Prisma.MemoryComment$invitationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MemoryComment$invitationArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MemoryCommentFieldRefs {
    readonly id: Prisma.FieldRef<"MemoryComment", 'String'>;
    readonly assetId: Prisma.FieldRef<"MemoryComment", 'String'>;
    readonly invitationId: Prisma.FieldRef<"MemoryComment", 'String'>;
    readonly authorName: Prisma.FieldRef<"MemoryComment", 'String'>;
    readonly actorHash: Prisma.FieldRef<"MemoryComment", 'String'>;
    readonly body: Prisma.FieldRef<"MemoryComment", 'String'>;
    readonly status: Prisma.FieldRef<"MemoryComment", 'SocialContentStatus'>;
    readonly approvedAt: Prisma.FieldRef<"MemoryComment", 'DateTime'>;
    readonly hiddenAt: Prisma.FieldRef<"MemoryComment", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"MemoryComment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MemoryComment", 'DateTime'>;
}
export type MemoryCommentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryCommentSelect<ExtArgs> | null;
    omit?: Prisma.MemoryCommentOmit<ExtArgs> | null;
    include?: Prisma.MemoryCommentInclude<ExtArgs> | null;
    where: Prisma.MemoryCommentWhereUniqueInput;
};
export type MemoryCommentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryCommentSelect<ExtArgs> | null;
    omit?: Prisma.MemoryCommentOmit<ExtArgs> | null;
    include?: Prisma.MemoryCommentInclude<ExtArgs> | null;
    where: Prisma.MemoryCommentWhereUniqueInput;
};
export type MemoryCommentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryCommentSelect<ExtArgs> | null;
    omit?: Prisma.MemoryCommentOmit<ExtArgs> | null;
    include?: Prisma.MemoryCommentInclude<ExtArgs> | null;
    where?: Prisma.MemoryCommentWhereInput;
    orderBy?: Prisma.MemoryCommentOrderByWithRelationInput | Prisma.MemoryCommentOrderByWithRelationInput[];
    cursor?: Prisma.MemoryCommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MemoryCommentScalarFieldEnum | Prisma.MemoryCommentScalarFieldEnum[];
};
export type MemoryCommentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryCommentSelect<ExtArgs> | null;
    omit?: Prisma.MemoryCommentOmit<ExtArgs> | null;
    include?: Prisma.MemoryCommentInclude<ExtArgs> | null;
    where?: Prisma.MemoryCommentWhereInput;
    orderBy?: Prisma.MemoryCommentOrderByWithRelationInput | Prisma.MemoryCommentOrderByWithRelationInput[];
    cursor?: Prisma.MemoryCommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MemoryCommentScalarFieldEnum | Prisma.MemoryCommentScalarFieldEnum[];
};
export type MemoryCommentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryCommentSelect<ExtArgs> | null;
    omit?: Prisma.MemoryCommentOmit<ExtArgs> | null;
    include?: Prisma.MemoryCommentInclude<ExtArgs> | null;
    where?: Prisma.MemoryCommentWhereInput;
    orderBy?: Prisma.MemoryCommentOrderByWithRelationInput | Prisma.MemoryCommentOrderByWithRelationInput[];
    cursor?: Prisma.MemoryCommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MemoryCommentScalarFieldEnum | Prisma.MemoryCommentScalarFieldEnum[];
};
export type MemoryCommentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryCommentSelect<ExtArgs> | null;
    omit?: Prisma.MemoryCommentOmit<ExtArgs> | null;
    include?: Prisma.MemoryCommentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MemoryCommentCreateInput, Prisma.MemoryCommentUncheckedCreateInput>;
};
export type MemoryCommentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MemoryCommentCreateManyInput | Prisma.MemoryCommentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MemoryCommentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryCommentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MemoryCommentOmit<ExtArgs> | null;
    data: Prisma.MemoryCommentCreateManyInput | Prisma.MemoryCommentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MemoryCommentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MemoryCommentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryCommentSelect<ExtArgs> | null;
    omit?: Prisma.MemoryCommentOmit<ExtArgs> | null;
    include?: Prisma.MemoryCommentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MemoryCommentUpdateInput, Prisma.MemoryCommentUncheckedUpdateInput>;
    where: Prisma.MemoryCommentWhereUniqueInput;
};
export type MemoryCommentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MemoryCommentUpdateManyMutationInput, Prisma.MemoryCommentUncheckedUpdateManyInput>;
    where?: Prisma.MemoryCommentWhereInput;
    limit?: number;
};
export type MemoryCommentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryCommentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MemoryCommentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MemoryCommentUpdateManyMutationInput, Prisma.MemoryCommentUncheckedUpdateManyInput>;
    where?: Prisma.MemoryCommentWhereInput;
    limit?: number;
    include?: Prisma.MemoryCommentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MemoryCommentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryCommentSelect<ExtArgs> | null;
    omit?: Prisma.MemoryCommentOmit<ExtArgs> | null;
    include?: Prisma.MemoryCommentInclude<ExtArgs> | null;
    where: Prisma.MemoryCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemoryCommentCreateInput, Prisma.MemoryCommentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MemoryCommentUpdateInput, Prisma.MemoryCommentUncheckedUpdateInput>;
};
export type MemoryCommentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryCommentSelect<ExtArgs> | null;
    omit?: Prisma.MemoryCommentOmit<ExtArgs> | null;
    include?: Prisma.MemoryCommentInclude<ExtArgs> | null;
    where: Prisma.MemoryCommentWhereUniqueInput;
};
export type MemoryCommentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemoryCommentWhereInput;
    limit?: number;
};
export type MemoryComment$invitationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
    where?: Prisma.InvitationWhereInput;
};
export type MemoryCommentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryCommentSelect<ExtArgs> | null;
    omit?: Prisma.MemoryCommentOmit<ExtArgs> | null;
    include?: Prisma.MemoryCommentInclude<ExtArgs> | null;
};
