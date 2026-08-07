import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvitationVersionModel = runtime.Types.Result.DefaultSelection<Prisma.$InvitationVersionPayload>;
export type AggregateInvitationVersion = {
    _count: InvitationVersionCountAggregateOutputType | null;
    _avg: InvitationVersionAvgAggregateOutputType | null;
    _sum: InvitationVersionSumAggregateOutputType | null;
    _min: InvitationVersionMinAggregateOutputType | null;
    _max: InvitationVersionMaxAggregateOutputType | null;
};
export type InvitationVersionAvgAggregateOutputType = {
    versionNumber: number | null;
};
export type InvitationVersionSumAggregateOutputType = {
    versionNumber: number | null;
};
export type InvitationVersionMinAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    versionNumber: number | null;
    reason: string | null;
    createdById: string | null;
    createdAt: Date | null;
};
export type InvitationVersionMaxAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    versionNumber: number | null;
    reason: string | null;
    createdById: string | null;
    createdAt: Date | null;
};
export type InvitationVersionCountAggregateOutputType = {
    id: number;
    weddingId: number;
    versionNumber: number;
    reason: number;
    snapshot: number;
    createdById: number;
    createdAt: number;
    _all: number;
};
export type InvitationVersionAvgAggregateInputType = {
    versionNumber?: true;
};
export type InvitationVersionSumAggregateInputType = {
    versionNumber?: true;
};
export type InvitationVersionMinAggregateInputType = {
    id?: true;
    weddingId?: true;
    versionNumber?: true;
    reason?: true;
    createdById?: true;
    createdAt?: true;
};
export type InvitationVersionMaxAggregateInputType = {
    id?: true;
    weddingId?: true;
    versionNumber?: true;
    reason?: true;
    createdById?: true;
    createdAt?: true;
};
export type InvitationVersionCountAggregateInputType = {
    id?: true;
    weddingId?: true;
    versionNumber?: true;
    reason?: true;
    snapshot?: true;
    createdById?: true;
    createdAt?: true;
    _all?: true;
};
export type InvitationVersionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvitationVersionWhereInput;
    orderBy?: Prisma.InvitationVersionOrderByWithRelationInput | Prisma.InvitationVersionOrderByWithRelationInput[];
    cursor?: Prisma.InvitationVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvitationVersionCountAggregateInputType;
    _avg?: InvitationVersionAvgAggregateInputType;
    _sum?: InvitationVersionSumAggregateInputType;
    _min?: InvitationVersionMinAggregateInputType;
    _max?: InvitationVersionMaxAggregateInputType;
};
export type GetInvitationVersionAggregateType<T extends InvitationVersionAggregateArgs> = {
    [P in keyof T & keyof AggregateInvitationVersion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvitationVersion[P]> : Prisma.GetScalarType<T[P], AggregateInvitationVersion[P]>;
};
export type InvitationVersionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvitationVersionWhereInput;
    orderBy?: Prisma.InvitationVersionOrderByWithAggregationInput | Prisma.InvitationVersionOrderByWithAggregationInput[];
    by: Prisma.InvitationVersionScalarFieldEnum[] | Prisma.InvitationVersionScalarFieldEnum;
    having?: Prisma.InvitationVersionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvitationVersionCountAggregateInputType | true;
    _avg?: InvitationVersionAvgAggregateInputType;
    _sum?: InvitationVersionSumAggregateInputType;
    _min?: InvitationVersionMinAggregateInputType;
    _max?: InvitationVersionMaxAggregateInputType;
};
export type InvitationVersionGroupByOutputType = {
    id: string;
    weddingId: string;
    versionNumber: number;
    reason: string;
    snapshot: runtime.JsonValue;
    createdById: string | null;
    createdAt: Date;
    _count: InvitationVersionCountAggregateOutputType | null;
    _avg: InvitationVersionAvgAggregateOutputType | null;
    _sum: InvitationVersionSumAggregateOutputType | null;
    _min: InvitationVersionMinAggregateOutputType | null;
    _max: InvitationVersionMaxAggregateOutputType | null;
};
export type GetInvitationVersionGroupByPayload<T extends InvitationVersionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvitationVersionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvitationVersionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvitationVersionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvitationVersionGroupByOutputType[P]>;
}>>;
export type InvitationVersionWhereInput = {
    AND?: Prisma.InvitationVersionWhereInput | Prisma.InvitationVersionWhereInput[];
    OR?: Prisma.InvitationVersionWhereInput[];
    NOT?: Prisma.InvitationVersionWhereInput | Prisma.InvitationVersionWhereInput[];
    id?: Prisma.StringFilter<"InvitationVersion"> | string;
    weddingId?: Prisma.StringFilter<"InvitationVersion"> | string;
    versionNumber?: Prisma.IntFilter<"InvitationVersion"> | number;
    reason?: Prisma.StringFilter<"InvitationVersion"> | string;
    snapshot?: Prisma.JsonFilter<"InvitationVersion">;
    createdById?: Prisma.StringNullableFilter<"InvitationVersion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvitationVersion"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
};
export type InvitationVersionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    versionNumber?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    snapshot?: Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    wedding?: Prisma.WeddingOrderByWithRelationInput;
};
export type InvitationVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    weddingId_versionNumber?: Prisma.InvitationVersionWeddingIdVersionNumberCompoundUniqueInput;
    AND?: Prisma.InvitationVersionWhereInput | Prisma.InvitationVersionWhereInput[];
    OR?: Prisma.InvitationVersionWhereInput[];
    NOT?: Prisma.InvitationVersionWhereInput | Prisma.InvitationVersionWhereInput[];
    weddingId?: Prisma.StringFilter<"InvitationVersion"> | string;
    versionNumber?: Prisma.IntFilter<"InvitationVersion"> | number;
    reason?: Prisma.StringFilter<"InvitationVersion"> | string;
    snapshot?: Prisma.JsonFilter<"InvitationVersion">;
    createdById?: Prisma.StringNullableFilter<"InvitationVersion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvitationVersion"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
}, "id" | "weddingId_versionNumber">;
export type InvitationVersionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    versionNumber?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    snapshot?: Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.InvitationVersionCountOrderByAggregateInput;
    _avg?: Prisma.InvitationVersionAvgOrderByAggregateInput;
    _max?: Prisma.InvitationVersionMaxOrderByAggregateInput;
    _min?: Prisma.InvitationVersionMinOrderByAggregateInput;
    _sum?: Prisma.InvitationVersionSumOrderByAggregateInput;
};
export type InvitationVersionScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvitationVersionScalarWhereWithAggregatesInput | Prisma.InvitationVersionScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvitationVersionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvitationVersionScalarWhereWithAggregatesInput | Prisma.InvitationVersionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"InvitationVersion"> | string;
    weddingId?: Prisma.StringWithAggregatesFilter<"InvitationVersion"> | string;
    versionNumber?: Prisma.IntWithAggregatesFilter<"InvitationVersion"> | number;
    reason?: Prisma.StringWithAggregatesFilter<"InvitationVersion"> | string;
    snapshot?: Prisma.JsonWithAggregatesFilter<"InvitationVersion">;
    createdById?: Prisma.StringNullableWithAggregatesFilter<"InvitationVersion"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"InvitationVersion"> | Date | string;
};
export type InvitationVersionCreateInput = {
    id?: string;
    versionNumber: number;
    reason?: string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdById?: string | null;
    createdAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutInvitationVersionsInput;
};
export type InvitationVersionUncheckedCreateInput = {
    id?: string;
    weddingId: string;
    versionNumber: number;
    reason?: string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdById?: string | null;
    createdAt?: Date | string;
};
export type InvitationVersionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutInvitationVersionsNestedInput;
};
export type InvitationVersionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationVersionCreateManyInput = {
    id?: string;
    weddingId: string;
    versionNumber: number;
    reason?: string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdById?: string | null;
    createdAt?: Date | string;
};
export type InvitationVersionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationVersionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationVersionListRelationFilter = {
    every?: Prisma.InvitationVersionWhereInput;
    some?: Prisma.InvitationVersionWhereInput;
    none?: Prisma.InvitationVersionWhereInput;
};
export type InvitationVersionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvitationVersionWeddingIdVersionNumberCompoundUniqueInput = {
    weddingId: string;
    versionNumber: number;
};
export type InvitationVersionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    versionNumber?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    snapshot?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvitationVersionAvgOrderByAggregateInput = {
    versionNumber?: Prisma.SortOrder;
};
export type InvitationVersionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    versionNumber?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvitationVersionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    versionNumber?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvitationVersionSumOrderByAggregateInput = {
    versionNumber?: Prisma.SortOrder;
};
export type InvitationVersionCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.InvitationVersionCreateWithoutWeddingInput, Prisma.InvitationVersionUncheckedCreateWithoutWeddingInput> | Prisma.InvitationVersionCreateWithoutWeddingInput[] | Prisma.InvitationVersionUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.InvitationVersionCreateOrConnectWithoutWeddingInput | Prisma.InvitationVersionCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.InvitationVersionCreateManyWeddingInputEnvelope;
    connect?: Prisma.InvitationVersionWhereUniqueInput | Prisma.InvitationVersionWhereUniqueInput[];
};
export type InvitationVersionUncheckedCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.InvitationVersionCreateWithoutWeddingInput, Prisma.InvitationVersionUncheckedCreateWithoutWeddingInput> | Prisma.InvitationVersionCreateWithoutWeddingInput[] | Prisma.InvitationVersionUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.InvitationVersionCreateOrConnectWithoutWeddingInput | Prisma.InvitationVersionCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.InvitationVersionCreateManyWeddingInputEnvelope;
    connect?: Prisma.InvitationVersionWhereUniqueInput | Prisma.InvitationVersionWhereUniqueInput[];
};
export type InvitationVersionUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationVersionCreateWithoutWeddingInput, Prisma.InvitationVersionUncheckedCreateWithoutWeddingInput> | Prisma.InvitationVersionCreateWithoutWeddingInput[] | Prisma.InvitationVersionUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.InvitationVersionCreateOrConnectWithoutWeddingInput | Prisma.InvitationVersionCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.InvitationVersionUpsertWithWhereUniqueWithoutWeddingInput | Prisma.InvitationVersionUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.InvitationVersionCreateManyWeddingInputEnvelope;
    set?: Prisma.InvitationVersionWhereUniqueInput | Prisma.InvitationVersionWhereUniqueInput[];
    disconnect?: Prisma.InvitationVersionWhereUniqueInput | Prisma.InvitationVersionWhereUniqueInput[];
    delete?: Prisma.InvitationVersionWhereUniqueInput | Prisma.InvitationVersionWhereUniqueInput[];
    connect?: Prisma.InvitationVersionWhereUniqueInput | Prisma.InvitationVersionWhereUniqueInput[];
    update?: Prisma.InvitationVersionUpdateWithWhereUniqueWithoutWeddingInput | Prisma.InvitationVersionUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.InvitationVersionUpdateManyWithWhereWithoutWeddingInput | Prisma.InvitationVersionUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.InvitationVersionScalarWhereInput | Prisma.InvitationVersionScalarWhereInput[];
};
export type InvitationVersionUncheckedUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationVersionCreateWithoutWeddingInput, Prisma.InvitationVersionUncheckedCreateWithoutWeddingInput> | Prisma.InvitationVersionCreateWithoutWeddingInput[] | Prisma.InvitationVersionUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.InvitationVersionCreateOrConnectWithoutWeddingInput | Prisma.InvitationVersionCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.InvitationVersionUpsertWithWhereUniqueWithoutWeddingInput | Prisma.InvitationVersionUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.InvitationVersionCreateManyWeddingInputEnvelope;
    set?: Prisma.InvitationVersionWhereUniqueInput | Prisma.InvitationVersionWhereUniqueInput[];
    disconnect?: Prisma.InvitationVersionWhereUniqueInput | Prisma.InvitationVersionWhereUniqueInput[];
    delete?: Prisma.InvitationVersionWhereUniqueInput | Prisma.InvitationVersionWhereUniqueInput[];
    connect?: Prisma.InvitationVersionWhereUniqueInput | Prisma.InvitationVersionWhereUniqueInput[];
    update?: Prisma.InvitationVersionUpdateWithWhereUniqueWithoutWeddingInput | Prisma.InvitationVersionUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.InvitationVersionUpdateManyWithWhereWithoutWeddingInput | Prisma.InvitationVersionUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.InvitationVersionScalarWhereInput | Prisma.InvitationVersionScalarWhereInput[];
};
export type InvitationVersionCreateWithoutWeddingInput = {
    id?: string;
    versionNumber: number;
    reason?: string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdById?: string | null;
    createdAt?: Date | string;
};
export type InvitationVersionUncheckedCreateWithoutWeddingInput = {
    id?: string;
    versionNumber: number;
    reason?: string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdById?: string | null;
    createdAt?: Date | string;
};
export type InvitationVersionCreateOrConnectWithoutWeddingInput = {
    where: Prisma.InvitationVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvitationVersionCreateWithoutWeddingInput, Prisma.InvitationVersionUncheckedCreateWithoutWeddingInput>;
};
export type InvitationVersionCreateManyWeddingInputEnvelope = {
    data: Prisma.InvitationVersionCreateManyWeddingInput | Prisma.InvitationVersionCreateManyWeddingInput[];
    skipDuplicates?: boolean;
};
export type InvitationVersionUpsertWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.InvitationVersionWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvitationVersionUpdateWithoutWeddingInput, Prisma.InvitationVersionUncheckedUpdateWithoutWeddingInput>;
    create: Prisma.XOR<Prisma.InvitationVersionCreateWithoutWeddingInput, Prisma.InvitationVersionUncheckedCreateWithoutWeddingInput>;
};
export type InvitationVersionUpdateWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.InvitationVersionWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvitationVersionUpdateWithoutWeddingInput, Prisma.InvitationVersionUncheckedUpdateWithoutWeddingInput>;
};
export type InvitationVersionUpdateManyWithWhereWithoutWeddingInput = {
    where: Prisma.InvitationVersionScalarWhereInput;
    data: Prisma.XOR<Prisma.InvitationVersionUpdateManyMutationInput, Prisma.InvitationVersionUncheckedUpdateManyWithoutWeddingInput>;
};
export type InvitationVersionScalarWhereInput = {
    AND?: Prisma.InvitationVersionScalarWhereInput | Prisma.InvitationVersionScalarWhereInput[];
    OR?: Prisma.InvitationVersionScalarWhereInput[];
    NOT?: Prisma.InvitationVersionScalarWhereInput | Prisma.InvitationVersionScalarWhereInput[];
    id?: Prisma.StringFilter<"InvitationVersion"> | string;
    weddingId?: Prisma.StringFilter<"InvitationVersion"> | string;
    versionNumber?: Prisma.IntFilter<"InvitationVersion"> | number;
    reason?: Prisma.StringFilter<"InvitationVersion"> | string;
    snapshot?: Prisma.JsonFilter<"InvitationVersion">;
    createdById?: Prisma.StringNullableFilter<"InvitationVersion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvitationVersion"> | Date | string;
};
export type InvitationVersionCreateManyWeddingInput = {
    id?: string;
    versionNumber: number;
    reason?: string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdById?: string | null;
    createdAt?: Date | string;
};
export type InvitationVersionUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationVersionUncheckedUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationVersionUncheckedUpdateManyWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationVersionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    versionNumber?: boolean;
    reason?: boolean;
    snapshot?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invitationVersion"]>;
export type InvitationVersionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    versionNumber?: boolean;
    reason?: boolean;
    snapshot?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invitationVersion"]>;
export type InvitationVersionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    versionNumber?: boolean;
    reason?: boolean;
    snapshot?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invitationVersion"]>;
export type InvitationVersionSelectScalar = {
    id?: boolean;
    weddingId?: boolean;
    versionNumber?: boolean;
    reason?: boolean;
    snapshot?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
};
export type InvitationVersionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "weddingId" | "versionNumber" | "reason" | "snapshot" | "createdById" | "createdAt", ExtArgs["result"]["invitationVersion"]>;
export type InvitationVersionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
};
export type InvitationVersionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
};
export type InvitationVersionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
};
export type $InvitationVersionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InvitationVersion";
    objects: {
        wedding: Prisma.$WeddingPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        weddingId: string;
        versionNumber: number;
        reason: string;
        snapshot: runtime.JsonValue;
        createdById: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["invitationVersion"]>;
    composites: {};
};
export type InvitationVersionGetPayload<S extends boolean | null | undefined | InvitationVersionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvitationVersionPayload, S>;
export type InvitationVersionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvitationVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvitationVersionCountAggregateInputType | true;
};
export interface InvitationVersionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InvitationVersion'];
        meta: {
            name: 'InvitationVersion';
        };
    };
    findUnique<T extends InvitationVersionFindUniqueArgs>(args: Prisma.SelectSubset<T, InvitationVersionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvitationVersionClient<runtime.Types.Result.GetResult<Prisma.$InvitationVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvitationVersionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvitationVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvitationVersionClient<runtime.Types.Result.GetResult<Prisma.$InvitationVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvitationVersionFindFirstArgs>(args?: Prisma.SelectSubset<T, InvitationVersionFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvitationVersionClient<runtime.Types.Result.GetResult<Prisma.$InvitationVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvitationVersionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvitationVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvitationVersionClient<runtime.Types.Result.GetResult<Prisma.$InvitationVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvitationVersionFindManyArgs>(args?: Prisma.SelectSubset<T, InvitationVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitationVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvitationVersionCreateArgs>(args: Prisma.SelectSubset<T, InvitationVersionCreateArgs<ExtArgs>>): Prisma.Prisma__InvitationVersionClient<runtime.Types.Result.GetResult<Prisma.$InvitationVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvitationVersionCreateManyArgs>(args?: Prisma.SelectSubset<T, InvitationVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvitationVersionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvitationVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitationVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvitationVersionDeleteArgs>(args: Prisma.SelectSubset<T, InvitationVersionDeleteArgs<ExtArgs>>): Prisma.Prisma__InvitationVersionClient<runtime.Types.Result.GetResult<Prisma.$InvitationVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvitationVersionUpdateArgs>(args: Prisma.SelectSubset<T, InvitationVersionUpdateArgs<ExtArgs>>): Prisma.Prisma__InvitationVersionClient<runtime.Types.Result.GetResult<Prisma.$InvitationVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvitationVersionDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvitationVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvitationVersionUpdateManyArgs>(args: Prisma.SelectSubset<T, InvitationVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvitationVersionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvitationVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitationVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvitationVersionUpsertArgs>(args: Prisma.SelectSubset<T, InvitationVersionUpsertArgs<ExtArgs>>): Prisma.Prisma__InvitationVersionClient<runtime.Types.Result.GetResult<Prisma.$InvitationVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvitationVersionCountArgs>(args?: Prisma.Subset<T, InvitationVersionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvitationVersionCountAggregateOutputType> : number>;
    aggregate<T extends InvitationVersionAggregateArgs>(args: Prisma.Subset<T, InvitationVersionAggregateArgs>): Prisma.PrismaPromise<GetInvitationVersionAggregateType<T>>;
    groupBy<T extends InvitationVersionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvitationVersionGroupByArgs['orderBy'];
    } : {
        orderBy?: InvitationVersionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvitationVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvitationVersionFieldRefs;
}
export interface Prisma__InvitationVersionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wedding<T extends Prisma.WeddingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WeddingDefaultArgs<ExtArgs>>): Prisma.Prisma__WeddingClient<runtime.Types.Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvitationVersionFieldRefs {
    readonly id: Prisma.FieldRef<"InvitationVersion", 'String'>;
    readonly weddingId: Prisma.FieldRef<"InvitationVersion", 'String'>;
    readonly versionNumber: Prisma.FieldRef<"InvitationVersion", 'Int'>;
    readonly reason: Prisma.FieldRef<"InvitationVersion", 'String'>;
    readonly snapshot: Prisma.FieldRef<"InvitationVersion", 'Json'>;
    readonly createdById: Prisma.FieldRef<"InvitationVersion", 'String'>;
    readonly createdAt: Prisma.FieldRef<"InvitationVersion", 'DateTime'>;
}
export type InvitationVersionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationVersionSelect<ExtArgs> | null;
    omit?: Prisma.InvitationVersionOmit<ExtArgs> | null;
    include?: Prisma.InvitationVersionInclude<ExtArgs> | null;
    where: Prisma.InvitationVersionWhereUniqueInput;
};
export type InvitationVersionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationVersionSelect<ExtArgs> | null;
    omit?: Prisma.InvitationVersionOmit<ExtArgs> | null;
    include?: Prisma.InvitationVersionInclude<ExtArgs> | null;
    where: Prisma.InvitationVersionWhereUniqueInput;
};
export type InvitationVersionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationVersionSelect<ExtArgs> | null;
    omit?: Prisma.InvitationVersionOmit<ExtArgs> | null;
    include?: Prisma.InvitationVersionInclude<ExtArgs> | null;
    where?: Prisma.InvitationVersionWhereInput;
    orderBy?: Prisma.InvitationVersionOrderByWithRelationInput | Prisma.InvitationVersionOrderByWithRelationInput[];
    cursor?: Prisma.InvitationVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvitationVersionScalarFieldEnum | Prisma.InvitationVersionScalarFieldEnum[];
};
export type InvitationVersionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationVersionSelect<ExtArgs> | null;
    omit?: Prisma.InvitationVersionOmit<ExtArgs> | null;
    include?: Prisma.InvitationVersionInclude<ExtArgs> | null;
    where?: Prisma.InvitationVersionWhereInput;
    orderBy?: Prisma.InvitationVersionOrderByWithRelationInput | Prisma.InvitationVersionOrderByWithRelationInput[];
    cursor?: Prisma.InvitationVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvitationVersionScalarFieldEnum | Prisma.InvitationVersionScalarFieldEnum[];
};
export type InvitationVersionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationVersionSelect<ExtArgs> | null;
    omit?: Prisma.InvitationVersionOmit<ExtArgs> | null;
    include?: Prisma.InvitationVersionInclude<ExtArgs> | null;
    where?: Prisma.InvitationVersionWhereInput;
    orderBy?: Prisma.InvitationVersionOrderByWithRelationInput | Prisma.InvitationVersionOrderByWithRelationInput[];
    cursor?: Prisma.InvitationVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvitationVersionScalarFieldEnum | Prisma.InvitationVersionScalarFieldEnum[];
};
export type InvitationVersionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationVersionSelect<ExtArgs> | null;
    omit?: Prisma.InvitationVersionOmit<ExtArgs> | null;
    include?: Prisma.InvitationVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvitationVersionCreateInput, Prisma.InvitationVersionUncheckedCreateInput>;
};
export type InvitationVersionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvitationVersionCreateManyInput | Prisma.InvitationVersionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvitationVersionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationVersionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvitationVersionOmit<ExtArgs> | null;
    data: Prisma.InvitationVersionCreateManyInput | Prisma.InvitationVersionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InvitationVersionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InvitationVersionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationVersionSelect<ExtArgs> | null;
    omit?: Prisma.InvitationVersionOmit<ExtArgs> | null;
    include?: Prisma.InvitationVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvitationVersionUpdateInput, Prisma.InvitationVersionUncheckedUpdateInput>;
    where: Prisma.InvitationVersionWhereUniqueInput;
};
export type InvitationVersionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvitationVersionUpdateManyMutationInput, Prisma.InvitationVersionUncheckedUpdateManyInput>;
    where?: Prisma.InvitationVersionWhereInput;
    limit?: number;
};
export type InvitationVersionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationVersionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvitationVersionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvitationVersionUpdateManyMutationInput, Prisma.InvitationVersionUncheckedUpdateManyInput>;
    where?: Prisma.InvitationVersionWhereInput;
    limit?: number;
    include?: Prisma.InvitationVersionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InvitationVersionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationVersionSelect<ExtArgs> | null;
    omit?: Prisma.InvitationVersionOmit<ExtArgs> | null;
    include?: Prisma.InvitationVersionInclude<ExtArgs> | null;
    where: Prisma.InvitationVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvitationVersionCreateInput, Prisma.InvitationVersionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvitationVersionUpdateInput, Prisma.InvitationVersionUncheckedUpdateInput>;
};
export type InvitationVersionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationVersionSelect<ExtArgs> | null;
    omit?: Prisma.InvitationVersionOmit<ExtArgs> | null;
    include?: Prisma.InvitationVersionInclude<ExtArgs> | null;
    where: Prisma.InvitationVersionWhereUniqueInput;
};
export type InvitationVersionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvitationVersionWhereInput;
    limit?: number;
};
export type InvitationVersionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationVersionSelect<ExtArgs> | null;
    omit?: Prisma.InvitationVersionOmit<ExtArgs> | null;
    include?: Prisma.InvitationVersionInclude<ExtArgs> | null;
};
