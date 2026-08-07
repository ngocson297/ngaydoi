import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvitationPreviewTokenModel = runtime.Types.Result.DefaultSelection<Prisma.$InvitationPreviewTokenPayload>;
export type AggregateInvitationPreviewToken = {
    _count: InvitationPreviewTokenCountAggregateOutputType | null;
    _min: InvitationPreviewTokenMinAggregateOutputType | null;
    _max: InvitationPreviewTokenMaxAggregateOutputType | null;
};
export type InvitationPreviewTokenMinAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    token: string | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    createdById: string | null;
    createdAt: Date | null;
};
export type InvitationPreviewTokenMaxAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    token: string | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    createdById: string | null;
    createdAt: Date | null;
};
export type InvitationPreviewTokenCountAggregateOutputType = {
    id: number;
    weddingId: number;
    token: number;
    expiresAt: number;
    revokedAt: number;
    createdById: number;
    createdAt: number;
    _all: number;
};
export type InvitationPreviewTokenMinAggregateInputType = {
    id?: true;
    weddingId?: true;
    token?: true;
    expiresAt?: true;
    revokedAt?: true;
    createdById?: true;
    createdAt?: true;
};
export type InvitationPreviewTokenMaxAggregateInputType = {
    id?: true;
    weddingId?: true;
    token?: true;
    expiresAt?: true;
    revokedAt?: true;
    createdById?: true;
    createdAt?: true;
};
export type InvitationPreviewTokenCountAggregateInputType = {
    id?: true;
    weddingId?: true;
    token?: true;
    expiresAt?: true;
    revokedAt?: true;
    createdById?: true;
    createdAt?: true;
    _all?: true;
};
export type InvitationPreviewTokenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvitationPreviewTokenWhereInput;
    orderBy?: Prisma.InvitationPreviewTokenOrderByWithRelationInput | Prisma.InvitationPreviewTokenOrderByWithRelationInput[];
    cursor?: Prisma.InvitationPreviewTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvitationPreviewTokenCountAggregateInputType;
    _min?: InvitationPreviewTokenMinAggregateInputType;
    _max?: InvitationPreviewTokenMaxAggregateInputType;
};
export type GetInvitationPreviewTokenAggregateType<T extends InvitationPreviewTokenAggregateArgs> = {
    [P in keyof T & keyof AggregateInvitationPreviewToken]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvitationPreviewToken[P]> : Prisma.GetScalarType<T[P], AggregateInvitationPreviewToken[P]>;
};
export type InvitationPreviewTokenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvitationPreviewTokenWhereInput;
    orderBy?: Prisma.InvitationPreviewTokenOrderByWithAggregationInput | Prisma.InvitationPreviewTokenOrderByWithAggregationInput[];
    by: Prisma.InvitationPreviewTokenScalarFieldEnum[] | Prisma.InvitationPreviewTokenScalarFieldEnum;
    having?: Prisma.InvitationPreviewTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvitationPreviewTokenCountAggregateInputType | true;
    _min?: InvitationPreviewTokenMinAggregateInputType;
    _max?: InvitationPreviewTokenMaxAggregateInputType;
};
export type InvitationPreviewTokenGroupByOutputType = {
    id: string;
    weddingId: string;
    token: string;
    expiresAt: Date;
    revokedAt: Date | null;
    createdById: string;
    createdAt: Date;
    _count: InvitationPreviewTokenCountAggregateOutputType | null;
    _min: InvitationPreviewTokenMinAggregateOutputType | null;
    _max: InvitationPreviewTokenMaxAggregateOutputType | null;
};
export type GetInvitationPreviewTokenGroupByPayload<T extends InvitationPreviewTokenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvitationPreviewTokenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvitationPreviewTokenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvitationPreviewTokenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvitationPreviewTokenGroupByOutputType[P]>;
}>>;
export type InvitationPreviewTokenWhereInput = {
    AND?: Prisma.InvitationPreviewTokenWhereInput | Prisma.InvitationPreviewTokenWhereInput[];
    OR?: Prisma.InvitationPreviewTokenWhereInput[];
    NOT?: Prisma.InvitationPreviewTokenWhereInput | Prisma.InvitationPreviewTokenWhereInput[];
    id?: Prisma.StringFilter<"InvitationPreviewToken"> | string;
    weddingId?: Prisma.StringFilter<"InvitationPreviewToken"> | string;
    token?: Prisma.StringFilter<"InvitationPreviewToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"InvitationPreviewToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"InvitationPreviewToken"> | Date | string | null;
    createdById?: Prisma.StringFilter<"InvitationPreviewToken"> | string;
    createdAt?: Prisma.DateTimeFilter<"InvitationPreviewToken"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
};
export type InvitationPreviewTokenOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    wedding?: Prisma.WeddingOrderByWithRelationInput;
};
export type InvitationPreviewTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    token?: string;
    AND?: Prisma.InvitationPreviewTokenWhereInput | Prisma.InvitationPreviewTokenWhereInput[];
    OR?: Prisma.InvitationPreviewTokenWhereInput[];
    NOT?: Prisma.InvitationPreviewTokenWhereInput | Prisma.InvitationPreviewTokenWhereInput[];
    weddingId?: Prisma.StringFilter<"InvitationPreviewToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"InvitationPreviewToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"InvitationPreviewToken"> | Date | string | null;
    createdById?: Prisma.StringFilter<"InvitationPreviewToken"> | string;
    createdAt?: Prisma.DateTimeFilter<"InvitationPreviewToken"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
}, "id" | "token">;
export type InvitationPreviewTokenOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.InvitationPreviewTokenCountOrderByAggregateInput;
    _max?: Prisma.InvitationPreviewTokenMaxOrderByAggregateInput;
    _min?: Prisma.InvitationPreviewTokenMinOrderByAggregateInput;
};
export type InvitationPreviewTokenScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvitationPreviewTokenScalarWhereWithAggregatesInput | Prisma.InvitationPreviewTokenScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvitationPreviewTokenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvitationPreviewTokenScalarWhereWithAggregatesInput | Prisma.InvitationPreviewTokenScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"InvitationPreviewToken"> | string;
    weddingId?: Prisma.StringWithAggregatesFilter<"InvitationPreviewToken"> | string;
    token?: Prisma.StringWithAggregatesFilter<"InvitationPreviewToken"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"InvitationPreviewToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"InvitationPreviewToken"> | Date | string | null;
    createdById?: Prisma.StringWithAggregatesFilter<"InvitationPreviewToken"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"InvitationPreviewToken"> | Date | string;
};
export type InvitationPreviewTokenCreateInput = {
    id?: string;
    token: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdById: string;
    createdAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutPreviewTokensInput;
};
export type InvitationPreviewTokenUncheckedCreateInput = {
    id?: string;
    weddingId: string;
    token: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdById: string;
    createdAt?: Date | string;
};
export type InvitationPreviewTokenUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutPreviewTokensNestedInput;
};
export type InvitationPreviewTokenUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationPreviewTokenCreateManyInput = {
    id?: string;
    weddingId: string;
    token: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdById: string;
    createdAt?: Date | string;
};
export type InvitationPreviewTokenUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationPreviewTokenUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationPreviewTokenListRelationFilter = {
    every?: Prisma.InvitationPreviewTokenWhereInput;
    some?: Prisma.InvitationPreviewTokenWhereInput;
    none?: Prisma.InvitationPreviewTokenWhereInput;
};
export type InvitationPreviewTokenOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvitationPreviewTokenCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvitationPreviewTokenMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvitationPreviewTokenMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvitationPreviewTokenCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.InvitationPreviewTokenCreateWithoutWeddingInput, Prisma.InvitationPreviewTokenUncheckedCreateWithoutWeddingInput> | Prisma.InvitationPreviewTokenCreateWithoutWeddingInput[] | Prisma.InvitationPreviewTokenUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.InvitationPreviewTokenCreateOrConnectWithoutWeddingInput | Prisma.InvitationPreviewTokenCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.InvitationPreviewTokenCreateManyWeddingInputEnvelope;
    connect?: Prisma.InvitationPreviewTokenWhereUniqueInput | Prisma.InvitationPreviewTokenWhereUniqueInput[];
};
export type InvitationPreviewTokenUncheckedCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.InvitationPreviewTokenCreateWithoutWeddingInput, Prisma.InvitationPreviewTokenUncheckedCreateWithoutWeddingInput> | Prisma.InvitationPreviewTokenCreateWithoutWeddingInput[] | Prisma.InvitationPreviewTokenUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.InvitationPreviewTokenCreateOrConnectWithoutWeddingInput | Prisma.InvitationPreviewTokenCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.InvitationPreviewTokenCreateManyWeddingInputEnvelope;
    connect?: Prisma.InvitationPreviewTokenWhereUniqueInput | Prisma.InvitationPreviewTokenWhereUniqueInput[];
};
export type InvitationPreviewTokenUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationPreviewTokenCreateWithoutWeddingInput, Prisma.InvitationPreviewTokenUncheckedCreateWithoutWeddingInput> | Prisma.InvitationPreviewTokenCreateWithoutWeddingInput[] | Prisma.InvitationPreviewTokenUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.InvitationPreviewTokenCreateOrConnectWithoutWeddingInput | Prisma.InvitationPreviewTokenCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.InvitationPreviewTokenUpsertWithWhereUniqueWithoutWeddingInput | Prisma.InvitationPreviewTokenUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.InvitationPreviewTokenCreateManyWeddingInputEnvelope;
    set?: Prisma.InvitationPreviewTokenWhereUniqueInput | Prisma.InvitationPreviewTokenWhereUniqueInput[];
    disconnect?: Prisma.InvitationPreviewTokenWhereUniqueInput | Prisma.InvitationPreviewTokenWhereUniqueInput[];
    delete?: Prisma.InvitationPreviewTokenWhereUniqueInput | Prisma.InvitationPreviewTokenWhereUniqueInput[];
    connect?: Prisma.InvitationPreviewTokenWhereUniqueInput | Prisma.InvitationPreviewTokenWhereUniqueInput[];
    update?: Prisma.InvitationPreviewTokenUpdateWithWhereUniqueWithoutWeddingInput | Prisma.InvitationPreviewTokenUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.InvitationPreviewTokenUpdateManyWithWhereWithoutWeddingInput | Prisma.InvitationPreviewTokenUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.InvitationPreviewTokenScalarWhereInput | Prisma.InvitationPreviewTokenScalarWhereInput[];
};
export type InvitationPreviewTokenUncheckedUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationPreviewTokenCreateWithoutWeddingInput, Prisma.InvitationPreviewTokenUncheckedCreateWithoutWeddingInput> | Prisma.InvitationPreviewTokenCreateWithoutWeddingInput[] | Prisma.InvitationPreviewTokenUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.InvitationPreviewTokenCreateOrConnectWithoutWeddingInput | Prisma.InvitationPreviewTokenCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.InvitationPreviewTokenUpsertWithWhereUniqueWithoutWeddingInput | Prisma.InvitationPreviewTokenUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.InvitationPreviewTokenCreateManyWeddingInputEnvelope;
    set?: Prisma.InvitationPreviewTokenWhereUniqueInput | Prisma.InvitationPreviewTokenWhereUniqueInput[];
    disconnect?: Prisma.InvitationPreviewTokenWhereUniqueInput | Prisma.InvitationPreviewTokenWhereUniqueInput[];
    delete?: Prisma.InvitationPreviewTokenWhereUniqueInput | Prisma.InvitationPreviewTokenWhereUniqueInput[];
    connect?: Prisma.InvitationPreviewTokenWhereUniqueInput | Prisma.InvitationPreviewTokenWhereUniqueInput[];
    update?: Prisma.InvitationPreviewTokenUpdateWithWhereUniqueWithoutWeddingInput | Prisma.InvitationPreviewTokenUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.InvitationPreviewTokenUpdateManyWithWhereWithoutWeddingInput | Prisma.InvitationPreviewTokenUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.InvitationPreviewTokenScalarWhereInput | Prisma.InvitationPreviewTokenScalarWhereInput[];
};
export type InvitationPreviewTokenCreateWithoutWeddingInput = {
    id?: string;
    token: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdById: string;
    createdAt?: Date | string;
};
export type InvitationPreviewTokenUncheckedCreateWithoutWeddingInput = {
    id?: string;
    token: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdById: string;
    createdAt?: Date | string;
};
export type InvitationPreviewTokenCreateOrConnectWithoutWeddingInput = {
    where: Prisma.InvitationPreviewTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvitationPreviewTokenCreateWithoutWeddingInput, Prisma.InvitationPreviewTokenUncheckedCreateWithoutWeddingInput>;
};
export type InvitationPreviewTokenCreateManyWeddingInputEnvelope = {
    data: Prisma.InvitationPreviewTokenCreateManyWeddingInput | Prisma.InvitationPreviewTokenCreateManyWeddingInput[];
    skipDuplicates?: boolean;
};
export type InvitationPreviewTokenUpsertWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.InvitationPreviewTokenWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvitationPreviewTokenUpdateWithoutWeddingInput, Prisma.InvitationPreviewTokenUncheckedUpdateWithoutWeddingInput>;
    create: Prisma.XOR<Prisma.InvitationPreviewTokenCreateWithoutWeddingInput, Prisma.InvitationPreviewTokenUncheckedCreateWithoutWeddingInput>;
};
export type InvitationPreviewTokenUpdateWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.InvitationPreviewTokenWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvitationPreviewTokenUpdateWithoutWeddingInput, Prisma.InvitationPreviewTokenUncheckedUpdateWithoutWeddingInput>;
};
export type InvitationPreviewTokenUpdateManyWithWhereWithoutWeddingInput = {
    where: Prisma.InvitationPreviewTokenScalarWhereInput;
    data: Prisma.XOR<Prisma.InvitationPreviewTokenUpdateManyMutationInput, Prisma.InvitationPreviewTokenUncheckedUpdateManyWithoutWeddingInput>;
};
export type InvitationPreviewTokenScalarWhereInput = {
    AND?: Prisma.InvitationPreviewTokenScalarWhereInput | Prisma.InvitationPreviewTokenScalarWhereInput[];
    OR?: Prisma.InvitationPreviewTokenScalarWhereInput[];
    NOT?: Prisma.InvitationPreviewTokenScalarWhereInput | Prisma.InvitationPreviewTokenScalarWhereInput[];
    id?: Prisma.StringFilter<"InvitationPreviewToken"> | string;
    weddingId?: Prisma.StringFilter<"InvitationPreviewToken"> | string;
    token?: Prisma.StringFilter<"InvitationPreviewToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"InvitationPreviewToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"InvitationPreviewToken"> | Date | string | null;
    createdById?: Prisma.StringFilter<"InvitationPreviewToken"> | string;
    createdAt?: Prisma.DateTimeFilter<"InvitationPreviewToken"> | Date | string;
};
export type InvitationPreviewTokenCreateManyWeddingInput = {
    id?: string;
    token: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdById: string;
    createdAt?: Date | string;
};
export type InvitationPreviewTokenUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationPreviewTokenUncheckedUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationPreviewTokenUncheckedUpdateManyWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationPreviewTokenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    token?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invitationPreviewToken"]>;
export type InvitationPreviewTokenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    token?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invitationPreviewToken"]>;
export type InvitationPreviewTokenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    token?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invitationPreviewToken"]>;
export type InvitationPreviewTokenSelectScalar = {
    id?: boolean;
    weddingId?: boolean;
    token?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
};
export type InvitationPreviewTokenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "weddingId" | "token" | "expiresAt" | "revokedAt" | "createdById" | "createdAt", ExtArgs["result"]["invitationPreviewToken"]>;
export type InvitationPreviewTokenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
};
export type InvitationPreviewTokenIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
};
export type InvitationPreviewTokenIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
};
export type $InvitationPreviewTokenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InvitationPreviewToken";
    objects: {
        wedding: Prisma.$WeddingPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        weddingId: string;
        token: string;
        expiresAt: Date;
        revokedAt: Date | null;
        createdById: string;
        createdAt: Date;
    }, ExtArgs["result"]["invitationPreviewToken"]>;
    composites: {};
};
export type InvitationPreviewTokenGetPayload<S extends boolean | null | undefined | InvitationPreviewTokenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvitationPreviewTokenPayload, S>;
export type InvitationPreviewTokenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvitationPreviewTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvitationPreviewTokenCountAggregateInputType | true;
};
export interface InvitationPreviewTokenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InvitationPreviewToken'];
        meta: {
            name: 'InvitationPreviewToken';
        };
    };
    findUnique<T extends InvitationPreviewTokenFindUniqueArgs>(args: Prisma.SelectSubset<T, InvitationPreviewTokenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvitationPreviewTokenClient<runtime.Types.Result.GetResult<Prisma.$InvitationPreviewTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvitationPreviewTokenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvitationPreviewTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvitationPreviewTokenClient<runtime.Types.Result.GetResult<Prisma.$InvitationPreviewTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvitationPreviewTokenFindFirstArgs>(args?: Prisma.SelectSubset<T, InvitationPreviewTokenFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvitationPreviewTokenClient<runtime.Types.Result.GetResult<Prisma.$InvitationPreviewTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvitationPreviewTokenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvitationPreviewTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvitationPreviewTokenClient<runtime.Types.Result.GetResult<Prisma.$InvitationPreviewTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvitationPreviewTokenFindManyArgs>(args?: Prisma.SelectSubset<T, InvitationPreviewTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitationPreviewTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvitationPreviewTokenCreateArgs>(args: Prisma.SelectSubset<T, InvitationPreviewTokenCreateArgs<ExtArgs>>): Prisma.Prisma__InvitationPreviewTokenClient<runtime.Types.Result.GetResult<Prisma.$InvitationPreviewTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvitationPreviewTokenCreateManyArgs>(args?: Prisma.SelectSubset<T, InvitationPreviewTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvitationPreviewTokenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvitationPreviewTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitationPreviewTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvitationPreviewTokenDeleteArgs>(args: Prisma.SelectSubset<T, InvitationPreviewTokenDeleteArgs<ExtArgs>>): Prisma.Prisma__InvitationPreviewTokenClient<runtime.Types.Result.GetResult<Prisma.$InvitationPreviewTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvitationPreviewTokenUpdateArgs>(args: Prisma.SelectSubset<T, InvitationPreviewTokenUpdateArgs<ExtArgs>>): Prisma.Prisma__InvitationPreviewTokenClient<runtime.Types.Result.GetResult<Prisma.$InvitationPreviewTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvitationPreviewTokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvitationPreviewTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvitationPreviewTokenUpdateManyArgs>(args: Prisma.SelectSubset<T, InvitationPreviewTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvitationPreviewTokenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvitationPreviewTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitationPreviewTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvitationPreviewTokenUpsertArgs>(args: Prisma.SelectSubset<T, InvitationPreviewTokenUpsertArgs<ExtArgs>>): Prisma.Prisma__InvitationPreviewTokenClient<runtime.Types.Result.GetResult<Prisma.$InvitationPreviewTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvitationPreviewTokenCountArgs>(args?: Prisma.Subset<T, InvitationPreviewTokenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvitationPreviewTokenCountAggregateOutputType> : number>;
    aggregate<T extends InvitationPreviewTokenAggregateArgs>(args: Prisma.Subset<T, InvitationPreviewTokenAggregateArgs>): Prisma.PrismaPromise<GetInvitationPreviewTokenAggregateType<T>>;
    groupBy<T extends InvitationPreviewTokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvitationPreviewTokenGroupByArgs['orderBy'];
    } : {
        orderBy?: InvitationPreviewTokenGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvitationPreviewTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationPreviewTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvitationPreviewTokenFieldRefs;
}
export interface Prisma__InvitationPreviewTokenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wedding<T extends Prisma.WeddingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WeddingDefaultArgs<ExtArgs>>): Prisma.Prisma__WeddingClient<runtime.Types.Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvitationPreviewTokenFieldRefs {
    readonly id: Prisma.FieldRef<"InvitationPreviewToken", 'String'>;
    readonly weddingId: Prisma.FieldRef<"InvitationPreviewToken", 'String'>;
    readonly token: Prisma.FieldRef<"InvitationPreviewToken", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"InvitationPreviewToken", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"InvitationPreviewToken", 'DateTime'>;
    readonly createdById: Prisma.FieldRef<"InvitationPreviewToken", 'String'>;
    readonly createdAt: Prisma.FieldRef<"InvitationPreviewToken", 'DateTime'>;
}
export type InvitationPreviewTokenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationPreviewTokenSelect<ExtArgs> | null;
    omit?: Prisma.InvitationPreviewTokenOmit<ExtArgs> | null;
    include?: Prisma.InvitationPreviewTokenInclude<ExtArgs> | null;
    where: Prisma.InvitationPreviewTokenWhereUniqueInput;
};
export type InvitationPreviewTokenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationPreviewTokenSelect<ExtArgs> | null;
    omit?: Prisma.InvitationPreviewTokenOmit<ExtArgs> | null;
    include?: Prisma.InvitationPreviewTokenInclude<ExtArgs> | null;
    where: Prisma.InvitationPreviewTokenWhereUniqueInput;
};
export type InvitationPreviewTokenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationPreviewTokenSelect<ExtArgs> | null;
    omit?: Prisma.InvitationPreviewTokenOmit<ExtArgs> | null;
    include?: Prisma.InvitationPreviewTokenInclude<ExtArgs> | null;
    where?: Prisma.InvitationPreviewTokenWhereInput;
    orderBy?: Prisma.InvitationPreviewTokenOrderByWithRelationInput | Prisma.InvitationPreviewTokenOrderByWithRelationInput[];
    cursor?: Prisma.InvitationPreviewTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvitationPreviewTokenScalarFieldEnum | Prisma.InvitationPreviewTokenScalarFieldEnum[];
};
export type InvitationPreviewTokenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationPreviewTokenSelect<ExtArgs> | null;
    omit?: Prisma.InvitationPreviewTokenOmit<ExtArgs> | null;
    include?: Prisma.InvitationPreviewTokenInclude<ExtArgs> | null;
    where?: Prisma.InvitationPreviewTokenWhereInput;
    orderBy?: Prisma.InvitationPreviewTokenOrderByWithRelationInput | Prisma.InvitationPreviewTokenOrderByWithRelationInput[];
    cursor?: Prisma.InvitationPreviewTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvitationPreviewTokenScalarFieldEnum | Prisma.InvitationPreviewTokenScalarFieldEnum[];
};
export type InvitationPreviewTokenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationPreviewTokenSelect<ExtArgs> | null;
    omit?: Prisma.InvitationPreviewTokenOmit<ExtArgs> | null;
    include?: Prisma.InvitationPreviewTokenInclude<ExtArgs> | null;
    where?: Prisma.InvitationPreviewTokenWhereInput;
    orderBy?: Prisma.InvitationPreviewTokenOrderByWithRelationInput | Prisma.InvitationPreviewTokenOrderByWithRelationInput[];
    cursor?: Prisma.InvitationPreviewTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvitationPreviewTokenScalarFieldEnum | Prisma.InvitationPreviewTokenScalarFieldEnum[];
};
export type InvitationPreviewTokenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationPreviewTokenSelect<ExtArgs> | null;
    omit?: Prisma.InvitationPreviewTokenOmit<ExtArgs> | null;
    include?: Prisma.InvitationPreviewTokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvitationPreviewTokenCreateInput, Prisma.InvitationPreviewTokenUncheckedCreateInput>;
};
export type InvitationPreviewTokenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvitationPreviewTokenCreateManyInput | Prisma.InvitationPreviewTokenCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvitationPreviewTokenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationPreviewTokenSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvitationPreviewTokenOmit<ExtArgs> | null;
    data: Prisma.InvitationPreviewTokenCreateManyInput | Prisma.InvitationPreviewTokenCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InvitationPreviewTokenIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InvitationPreviewTokenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationPreviewTokenSelect<ExtArgs> | null;
    omit?: Prisma.InvitationPreviewTokenOmit<ExtArgs> | null;
    include?: Prisma.InvitationPreviewTokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvitationPreviewTokenUpdateInput, Prisma.InvitationPreviewTokenUncheckedUpdateInput>;
    where: Prisma.InvitationPreviewTokenWhereUniqueInput;
};
export type InvitationPreviewTokenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvitationPreviewTokenUpdateManyMutationInput, Prisma.InvitationPreviewTokenUncheckedUpdateManyInput>;
    where?: Prisma.InvitationPreviewTokenWhereInput;
    limit?: number;
};
export type InvitationPreviewTokenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationPreviewTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvitationPreviewTokenOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvitationPreviewTokenUpdateManyMutationInput, Prisma.InvitationPreviewTokenUncheckedUpdateManyInput>;
    where?: Prisma.InvitationPreviewTokenWhereInput;
    limit?: number;
    include?: Prisma.InvitationPreviewTokenIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InvitationPreviewTokenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationPreviewTokenSelect<ExtArgs> | null;
    omit?: Prisma.InvitationPreviewTokenOmit<ExtArgs> | null;
    include?: Prisma.InvitationPreviewTokenInclude<ExtArgs> | null;
    where: Prisma.InvitationPreviewTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvitationPreviewTokenCreateInput, Prisma.InvitationPreviewTokenUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvitationPreviewTokenUpdateInput, Prisma.InvitationPreviewTokenUncheckedUpdateInput>;
};
export type InvitationPreviewTokenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationPreviewTokenSelect<ExtArgs> | null;
    omit?: Prisma.InvitationPreviewTokenOmit<ExtArgs> | null;
    include?: Prisma.InvitationPreviewTokenInclude<ExtArgs> | null;
    where: Prisma.InvitationPreviewTokenWhereUniqueInput;
};
export type InvitationPreviewTokenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvitationPreviewTokenWhereInput;
    limit?: number;
};
export type InvitationPreviewTokenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationPreviewTokenSelect<ExtArgs> | null;
    omit?: Prisma.InvitationPreviewTokenOmit<ExtArgs> | null;
    include?: Prisma.InvitationPreviewTokenInclude<ExtArgs> | null;
};
