import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MemoryReactionModel = runtime.Types.Result.DefaultSelection<Prisma.$MemoryReactionPayload>;
export type AggregateMemoryReaction = {
    _count: MemoryReactionCountAggregateOutputType | null;
    _min: MemoryReactionMinAggregateOutputType | null;
    _max: MemoryReactionMaxAggregateOutputType | null;
};
export type MemoryReactionMinAggregateOutputType = {
    id: string | null;
    assetId: string | null;
    actorHash: string | null;
    type: $Enums.MemoryReactionType | null;
    createdAt: Date | null;
};
export type MemoryReactionMaxAggregateOutputType = {
    id: string | null;
    assetId: string | null;
    actorHash: string | null;
    type: $Enums.MemoryReactionType | null;
    createdAt: Date | null;
};
export type MemoryReactionCountAggregateOutputType = {
    id: number;
    assetId: number;
    actorHash: number;
    type: number;
    createdAt: number;
    _all: number;
};
export type MemoryReactionMinAggregateInputType = {
    id?: true;
    assetId?: true;
    actorHash?: true;
    type?: true;
    createdAt?: true;
};
export type MemoryReactionMaxAggregateInputType = {
    id?: true;
    assetId?: true;
    actorHash?: true;
    type?: true;
    createdAt?: true;
};
export type MemoryReactionCountAggregateInputType = {
    id?: true;
    assetId?: true;
    actorHash?: true;
    type?: true;
    createdAt?: true;
    _all?: true;
};
export type MemoryReactionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemoryReactionWhereInput;
    orderBy?: Prisma.MemoryReactionOrderByWithRelationInput | Prisma.MemoryReactionOrderByWithRelationInput[];
    cursor?: Prisma.MemoryReactionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MemoryReactionCountAggregateInputType;
    _min?: MemoryReactionMinAggregateInputType;
    _max?: MemoryReactionMaxAggregateInputType;
};
export type GetMemoryReactionAggregateType<T extends MemoryReactionAggregateArgs> = {
    [P in keyof T & keyof AggregateMemoryReaction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMemoryReaction[P]> : Prisma.GetScalarType<T[P], AggregateMemoryReaction[P]>;
};
export type MemoryReactionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemoryReactionWhereInput;
    orderBy?: Prisma.MemoryReactionOrderByWithAggregationInput | Prisma.MemoryReactionOrderByWithAggregationInput[];
    by: Prisma.MemoryReactionScalarFieldEnum[] | Prisma.MemoryReactionScalarFieldEnum;
    having?: Prisma.MemoryReactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MemoryReactionCountAggregateInputType | true;
    _min?: MemoryReactionMinAggregateInputType;
    _max?: MemoryReactionMaxAggregateInputType;
};
export type MemoryReactionGroupByOutputType = {
    id: string;
    assetId: string;
    actorHash: string;
    type: $Enums.MemoryReactionType;
    createdAt: Date;
    _count: MemoryReactionCountAggregateOutputType | null;
    _min: MemoryReactionMinAggregateOutputType | null;
    _max: MemoryReactionMaxAggregateOutputType | null;
};
export type GetMemoryReactionGroupByPayload<T extends MemoryReactionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MemoryReactionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MemoryReactionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MemoryReactionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MemoryReactionGroupByOutputType[P]>;
}>>;
export type MemoryReactionWhereInput = {
    AND?: Prisma.MemoryReactionWhereInput | Prisma.MemoryReactionWhereInput[];
    OR?: Prisma.MemoryReactionWhereInput[];
    NOT?: Prisma.MemoryReactionWhereInput | Prisma.MemoryReactionWhereInput[];
    id?: Prisma.StringFilter<"MemoryReaction"> | string;
    assetId?: Prisma.StringFilter<"MemoryReaction"> | string;
    actorHash?: Prisma.StringFilter<"MemoryReaction"> | string;
    type?: Prisma.EnumMemoryReactionTypeFilter<"MemoryReaction"> | $Enums.MemoryReactionType;
    createdAt?: Prisma.DateTimeFilter<"MemoryReaction"> | Date | string;
    asset?: Prisma.XOR<Prisma.MemoryAssetScalarRelationFilter, Prisma.MemoryAssetWhereInput>;
};
export type MemoryReactionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    actorHash?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    asset?: Prisma.MemoryAssetOrderByWithRelationInput;
};
export type MemoryReactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    assetId_actorHash_type?: Prisma.MemoryReactionAssetIdActorHashTypeCompoundUniqueInput;
    AND?: Prisma.MemoryReactionWhereInput | Prisma.MemoryReactionWhereInput[];
    OR?: Prisma.MemoryReactionWhereInput[];
    NOT?: Prisma.MemoryReactionWhereInput | Prisma.MemoryReactionWhereInput[];
    assetId?: Prisma.StringFilter<"MemoryReaction"> | string;
    actorHash?: Prisma.StringFilter<"MemoryReaction"> | string;
    type?: Prisma.EnumMemoryReactionTypeFilter<"MemoryReaction"> | $Enums.MemoryReactionType;
    createdAt?: Prisma.DateTimeFilter<"MemoryReaction"> | Date | string;
    asset?: Prisma.XOR<Prisma.MemoryAssetScalarRelationFilter, Prisma.MemoryAssetWhereInput>;
}, "id" | "assetId_actorHash_type">;
export type MemoryReactionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    actorHash?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MemoryReactionCountOrderByAggregateInput;
    _max?: Prisma.MemoryReactionMaxOrderByAggregateInput;
    _min?: Prisma.MemoryReactionMinOrderByAggregateInput;
};
export type MemoryReactionScalarWhereWithAggregatesInput = {
    AND?: Prisma.MemoryReactionScalarWhereWithAggregatesInput | Prisma.MemoryReactionScalarWhereWithAggregatesInput[];
    OR?: Prisma.MemoryReactionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MemoryReactionScalarWhereWithAggregatesInput | Prisma.MemoryReactionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MemoryReaction"> | string;
    assetId?: Prisma.StringWithAggregatesFilter<"MemoryReaction"> | string;
    actorHash?: Prisma.StringWithAggregatesFilter<"MemoryReaction"> | string;
    type?: Prisma.EnumMemoryReactionTypeWithAggregatesFilter<"MemoryReaction"> | $Enums.MemoryReactionType;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MemoryReaction"> | Date | string;
};
export type MemoryReactionCreateInput = {
    id?: string;
    actorHash: string;
    type?: $Enums.MemoryReactionType;
    createdAt?: Date | string;
    asset: Prisma.MemoryAssetCreateNestedOneWithoutReactionsInput;
};
export type MemoryReactionUncheckedCreateInput = {
    id?: string;
    assetId: string;
    actorHash: string;
    type?: $Enums.MemoryReactionType;
    createdAt?: Date | string;
};
export type MemoryReactionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorHash?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMemoryReactionTypeFieldUpdateOperationsInput | $Enums.MemoryReactionType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asset?: Prisma.MemoryAssetUpdateOneRequiredWithoutReactionsNestedInput;
};
export type MemoryReactionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    actorHash?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMemoryReactionTypeFieldUpdateOperationsInput | $Enums.MemoryReactionType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemoryReactionCreateManyInput = {
    id?: string;
    assetId: string;
    actorHash: string;
    type?: $Enums.MemoryReactionType;
    createdAt?: Date | string;
};
export type MemoryReactionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorHash?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMemoryReactionTypeFieldUpdateOperationsInput | $Enums.MemoryReactionType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemoryReactionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    actorHash?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMemoryReactionTypeFieldUpdateOperationsInput | $Enums.MemoryReactionType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemoryReactionListRelationFilter = {
    every?: Prisma.MemoryReactionWhereInput;
    some?: Prisma.MemoryReactionWhereInput;
    none?: Prisma.MemoryReactionWhereInput;
};
export type MemoryReactionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MemoryReactionAssetIdActorHashTypeCompoundUniqueInput = {
    assetId: string;
    actorHash: string;
    type: $Enums.MemoryReactionType;
};
export type MemoryReactionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    actorHash?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MemoryReactionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    actorHash?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MemoryReactionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    actorHash?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MemoryReactionCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.MemoryReactionCreateWithoutAssetInput, Prisma.MemoryReactionUncheckedCreateWithoutAssetInput> | Prisma.MemoryReactionCreateWithoutAssetInput[] | Prisma.MemoryReactionUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.MemoryReactionCreateOrConnectWithoutAssetInput | Prisma.MemoryReactionCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.MemoryReactionCreateManyAssetInputEnvelope;
    connect?: Prisma.MemoryReactionWhereUniqueInput | Prisma.MemoryReactionWhereUniqueInput[];
};
export type MemoryReactionUncheckedCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.MemoryReactionCreateWithoutAssetInput, Prisma.MemoryReactionUncheckedCreateWithoutAssetInput> | Prisma.MemoryReactionCreateWithoutAssetInput[] | Prisma.MemoryReactionUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.MemoryReactionCreateOrConnectWithoutAssetInput | Prisma.MemoryReactionCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.MemoryReactionCreateManyAssetInputEnvelope;
    connect?: Prisma.MemoryReactionWhereUniqueInput | Prisma.MemoryReactionWhereUniqueInput[];
};
export type MemoryReactionUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.MemoryReactionCreateWithoutAssetInput, Prisma.MemoryReactionUncheckedCreateWithoutAssetInput> | Prisma.MemoryReactionCreateWithoutAssetInput[] | Prisma.MemoryReactionUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.MemoryReactionCreateOrConnectWithoutAssetInput | Prisma.MemoryReactionCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.MemoryReactionUpsertWithWhereUniqueWithoutAssetInput | Prisma.MemoryReactionUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.MemoryReactionCreateManyAssetInputEnvelope;
    set?: Prisma.MemoryReactionWhereUniqueInput | Prisma.MemoryReactionWhereUniqueInput[];
    disconnect?: Prisma.MemoryReactionWhereUniqueInput | Prisma.MemoryReactionWhereUniqueInput[];
    delete?: Prisma.MemoryReactionWhereUniqueInput | Prisma.MemoryReactionWhereUniqueInput[];
    connect?: Prisma.MemoryReactionWhereUniqueInput | Prisma.MemoryReactionWhereUniqueInput[];
    update?: Prisma.MemoryReactionUpdateWithWhereUniqueWithoutAssetInput | Prisma.MemoryReactionUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.MemoryReactionUpdateManyWithWhereWithoutAssetInput | Prisma.MemoryReactionUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.MemoryReactionScalarWhereInput | Prisma.MemoryReactionScalarWhereInput[];
};
export type MemoryReactionUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.MemoryReactionCreateWithoutAssetInput, Prisma.MemoryReactionUncheckedCreateWithoutAssetInput> | Prisma.MemoryReactionCreateWithoutAssetInput[] | Prisma.MemoryReactionUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.MemoryReactionCreateOrConnectWithoutAssetInput | Prisma.MemoryReactionCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.MemoryReactionUpsertWithWhereUniqueWithoutAssetInput | Prisma.MemoryReactionUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.MemoryReactionCreateManyAssetInputEnvelope;
    set?: Prisma.MemoryReactionWhereUniqueInput | Prisma.MemoryReactionWhereUniqueInput[];
    disconnect?: Prisma.MemoryReactionWhereUniqueInput | Prisma.MemoryReactionWhereUniqueInput[];
    delete?: Prisma.MemoryReactionWhereUniqueInput | Prisma.MemoryReactionWhereUniqueInput[];
    connect?: Prisma.MemoryReactionWhereUniqueInput | Prisma.MemoryReactionWhereUniqueInput[];
    update?: Prisma.MemoryReactionUpdateWithWhereUniqueWithoutAssetInput | Prisma.MemoryReactionUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.MemoryReactionUpdateManyWithWhereWithoutAssetInput | Prisma.MemoryReactionUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.MemoryReactionScalarWhereInput | Prisma.MemoryReactionScalarWhereInput[];
};
export type EnumMemoryReactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.MemoryReactionType;
};
export type MemoryReactionCreateWithoutAssetInput = {
    id?: string;
    actorHash: string;
    type?: $Enums.MemoryReactionType;
    createdAt?: Date | string;
};
export type MemoryReactionUncheckedCreateWithoutAssetInput = {
    id?: string;
    actorHash: string;
    type?: $Enums.MemoryReactionType;
    createdAt?: Date | string;
};
export type MemoryReactionCreateOrConnectWithoutAssetInput = {
    where: Prisma.MemoryReactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemoryReactionCreateWithoutAssetInput, Prisma.MemoryReactionUncheckedCreateWithoutAssetInput>;
};
export type MemoryReactionCreateManyAssetInputEnvelope = {
    data: Prisma.MemoryReactionCreateManyAssetInput | Prisma.MemoryReactionCreateManyAssetInput[];
    skipDuplicates?: boolean;
};
export type MemoryReactionUpsertWithWhereUniqueWithoutAssetInput = {
    where: Prisma.MemoryReactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.MemoryReactionUpdateWithoutAssetInput, Prisma.MemoryReactionUncheckedUpdateWithoutAssetInput>;
    create: Prisma.XOR<Prisma.MemoryReactionCreateWithoutAssetInput, Prisma.MemoryReactionUncheckedCreateWithoutAssetInput>;
};
export type MemoryReactionUpdateWithWhereUniqueWithoutAssetInput = {
    where: Prisma.MemoryReactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.MemoryReactionUpdateWithoutAssetInput, Prisma.MemoryReactionUncheckedUpdateWithoutAssetInput>;
};
export type MemoryReactionUpdateManyWithWhereWithoutAssetInput = {
    where: Prisma.MemoryReactionScalarWhereInput;
    data: Prisma.XOR<Prisma.MemoryReactionUpdateManyMutationInput, Prisma.MemoryReactionUncheckedUpdateManyWithoutAssetInput>;
};
export type MemoryReactionScalarWhereInput = {
    AND?: Prisma.MemoryReactionScalarWhereInput | Prisma.MemoryReactionScalarWhereInput[];
    OR?: Prisma.MemoryReactionScalarWhereInput[];
    NOT?: Prisma.MemoryReactionScalarWhereInput | Prisma.MemoryReactionScalarWhereInput[];
    id?: Prisma.StringFilter<"MemoryReaction"> | string;
    assetId?: Prisma.StringFilter<"MemoryReaction"> | string;
    actorHash?: Prisma.StringFilter<"MemoryReaction"> | string;
    type?: Prisma.EnumMemoryReactionTypeFilter<"MemoryReaction"> | $Enums.MemoryReactionType;
    createdAt?: Prisma.DateTimeFilter<"MemoryReaction"> | Date | string;
};
export type MemoryReactionCreateManyAssetInput = {
    id?: string;
    actorHash: string;
    type?: $Enums.MemoryReactionType;
    createdAt?: Date | string;
};
export type MemoryReactionUpdateWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorHash?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMemoryReactionTypeFieldUpdateOperationsInput | $Enums.MemoryReactionType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemoryReactionUncheckedUpdateWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorHash?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMemoryReactionTypeFieldUpdateOperationsInput | $Enums.MemoryReactionType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemoryReactionUncheckedUpdateManyWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorHash?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMemoryReactionTypeFieldUpdateOperationsInput | $Enums.MemoryReactionType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemoryReactionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    actorHash?: boolean;
    type?: boolean;
    createdAt?: boolean;
    asset?: boolean | Prisma.MemoryAssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["memoryReaction"]>;
export type MemoryReactionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    actorHash?: boolean;
    type?: boolean;
    createdAt?: boolean;
    asset?: boolean | Prisma.MemoryAssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["memoryReaction"]>;
export type MemoryReactionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    actorHash?: boolean;
    type?: boolean;
    createdAt?: boolean;
    asset?: boolean | Prisma.MemoryAssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["memoryReaction"]>;
export type MemoryReactionSelectScalar = {
    id?: boolean;
    assetId?: boolean;
    actorHash?: boolean;
    type?: boolean;
    createdAt?: boolean;
};
export type MemoryReactionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "assetId" | "actorHash" | "type" | "createdAt", ExtArgs["result"]["memoryReaction"]>;
export type MemoryReactionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.MemoryAssetDefaultArgs<ExtArgs>;
};
export type MemoryReactionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.MemoryAssetDefaultArgs<ExtArgs>;
};
export type MemoryReactionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.MemoryAssetDefaultArgs<ExtArgs>;
};
export type $MemoryReactionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MemoryReaction";
    objects: {
        asset: Prisma.$MemoryAssetPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        assetId: string;
        actorHash: string;
        type: $Enums.MemoryReactionType;
        createdAt: Date;
    }, ExtArgs["result"]["memoryReaction"]>;
    composites: {};
};
export type MemoryReactionGetPayload<S extends boolean | null | undefined | MemoryReactionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MemoryReactionPayload, S>;
export type MemoryReactionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MemoryReactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MemoryReactionCountAggregateInputType | true;
};
export interface MemoryReactionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MemoryReaction'];
        meta: {
            name: 'MemoryReaction';
        };
    };
    findUnique<T extends MemoryReactionFindUniqueArgs>(args: Prisma.SelectSubset<T, MemoryReactionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MemoryReactionClient<runtime.Types.Result.GetResult<Prisma.$MemoryReactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MemoryReactionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MemoryReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MemoryReactionClient<runtime.Types.Result.GetResult<Prisma.$MemoryReactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MemoryReactionFindFirstArgs>(args?: Prisma.SelectSubset<T, MemoryReactionFindFirstArgs<ExtArgs>>): Prisma.Prisma__MemoryReactionClient<runtime.Types.Result.GetResult<Prisma.$MemoryReactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MemoryReactionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MemoryReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MemoryReactionClient<runtime.Types.Result.GetResult<Prisma.$MemoryReactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MemoryReactionFindManyArgs>(args?: Prisma.SelectSubset<T, MemoryReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemoryReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MemoryReactionCreateArgs>(args: Prisma.SelectSubset<T, MemoryReactionCreateArgs<ExtArgs>>): Prisma.Prisma__MemoryReactionClient<runtime.Types.Result.GetResult<Prisma.$MemoryReactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MemoryReactionCreateManyArgs>(args?: Prisma.SelectSubset<T, MemoryReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MemoryReactionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MemoryReactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemoryReactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MemoryReactionDeleteArgs>(args: Prisma.SelectSubset<T, MemoryReactionDeleteArgs<ExtArgs>>): Prisma.Prisma__MemoryReactionClient<runtime.Types.Result.GetResult<Prisma.$MemoryReactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MemoryReactionUpdateArgs>(args: Prisma.SelectSubset<T, MemoryReactionUpdateArgs<ExtArgs>>): Prisma.Prisma__MemoryReactionClient<runtime.Types.Result.GetResult<Prisma.$MemoryReactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MemoryReactionDeleteManyArgs>(args?: Prisma.SelectSubset<T, MemoryReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MemoryReactionUpdateManyArgs>(args: Prisma.SelectSubset<T, MemoryReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MemoryReactionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MemoryReactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemoryReactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MemoryReactionUpsertArgs>(args: Prisma.SelectSubset<T, MemoryReactionUpsertArgs<ExtArgs>>): Prisma.Prisma__MemoryReactionClient<runtime.Types.Result.GetResult<Prisma.$MemoryReactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MemoryReactionCountArgs>(args?: Prisma.Subset<T, MemoryReactionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MemoryReactionCountAggregateOutputType> : number>;
    aggregate<T extends MemoryReactionAggregateArgs>(args: Prisma.Subset<T, MemoryReactionAggregateArgs>): Prisma.PrismaPromise<GetMemoryReactionAggregateType<T>>;
    groupBy<T extends MemoryReactionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MemoryReactionGroupByArgs['orderBy'];
    } : {
        orderBy?: MemoryReactionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MemoryReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemoryReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MemoryReactionFieldRefs;
}
export interface Prisma__MemoryReactionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    asset<T extends Prisma.MemoryAssetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MemoryAssetDefaultArgs<ExtArgs>>): Prisma.Prisma__MemoryAssetClient<runtime.Types.Result.GetResult<Prisma.$MemoryAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MemoryReactionFieldRefs {
    readonly id: Prisma.FieldRef<"MemoryReaction", 'String'>;
    readonly assetId: Prisma.FieldRef<"MemoryReaction", 'String'>;
    readonly actorHash: Prisma.FieldRef<"MemoryReaction", 'String'>;
    readonly type: Prisma.FieldRef<"MemoryReaction", 'MemoryReactionType'>;
    readonly createdAt: Prisma.FieldRef<"MemoryReaction", 'DateTime'>;
}
export type MemoryReactionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryReactionSelect<ExtArgs> | null;
    omit?: Prisma.MemoryReactionOmit<ExtArgs> | null;
    include?: Prisma.MemoryReactionInclude<ExtArgs> | null;
    where: Prisma.MemoryReactionWhereUniqueInput;
};
export type MemoryReactionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryReactionSelect<ExtArgs> | null;
    omit?: Prisma.MemoryReactionOmit<ExtArgs> | null;
    include?: Prisma.MemoryReactionInclude<ExtArgs> | null;
    where: Prisma.MemoryReactionWhereUniqueInput;
};
export type MemoryReactionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryReactionSelect<ExtArgs> | null;
    omit?: Prisma.MemoryReactionOmit<ExtArgs> | null;
    include?: Prisma.MemoryReactionInclude<ExtArgs> | null;
    where?: Prisma.MemoryReactionWhereInput;
    orderBy?: Prisma.MemoryReactionOrderByWithRelationInput | Prisma.MemoryReactionOrderByWithRelationInput[];
    cursor?: Prisma.MemoryReactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MemoryReactionScalarFieldEnum | Prisma.MemoryReactionScalarFieldEnum[];
};
export type MemoryReactionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryReactionSelect<ExtArgs> | null;
    omit?: Prisma.MemoryReactionOmit<ExtArgs> | null;
    include?: Prisma.MemoryReactionInclude<ExtArgs> | null;
    where?: Prisma.MemoryReactionWhereInput;
    orderBy?: Prisma.MemoryReactionOrderByWithRelationInput | Prisma.MemoryReactionOrderByWithRelationInput[];
    cursor?: Prisma.MemoryReactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MemoryReactionScalarFieldEnum | Prisma.MemoryReactionScalarFieldEnum[];
};
export type MemoryReactionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryReactionSelect<ExtArgs> | null;
    omit?: Prisma.MemoryReactionOmit<ExtArgs> | null;
    include?: Prisma.MemoryReactionInclude<ExtArgs> | null;
    where?: Prisma.MemoryReactionWhereInput;
    orderBy?: Prisma.MemoryReactionOrderByWithRelationInput | Prisma.MemoryReactionOrderByWithRelationInput[];
    cursor?: Prisma.MemoryReactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MemoryReactionScalarFieldEnum | Prisma.MemoryReactionScalarFieldEnum[];
};
export type MemoryReactionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryReactionSelect<ExtArgs> | null;
    omit?: Prisma.MemoryReactionOmit<ExtArgs> | null;
    include?: Prisma.MemoryReactionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MemoryReactionCreateInput, Prisma.MemoryReactionUncheckedCreateInput>;
};
export type MemoryReactionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MemoryReactionCreateManyInput | Prisma.MemoryReactionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MemoryReactionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryReactionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MemoryReactionOmit<ExtArgs> | null;
    data: Prisma.MemoryReactionCreateManyInput | Prisma.MemoryReactionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MemoryReactionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MemoryReactionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryReactionSelect<ExtArgs> | null;
    omit?: Prisma.MemoryReactionOmit<ExtArgs> | null;
    include?: Prisma.MemoryReactionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MemoryReactionUpdateInput, Prisma.MemoryReactionUncheckedUpdateInput>;
    where: Prisma.MemoryReactionWhereUniqueInput;
};
export type MemoryReactionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MemoryReactionUpdateManyMutationInput, Prisma.MemoryReactionUncheckedUpdateManyInput>;
    where?: Prisma.MemoryReactionWhereInput;
    limit?: number;
};
export type MemoryReactionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryReactionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MemoryReactionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MemoryReactionUpdateManyMutationInput, Prisma.MemoryReactionUncheckedUpdateManyInput>;
    where?: Prisma.MemoryReactionWhereInput;
    limit?: number;
    include?: Prisma.MemoryReactionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MemoryReactionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryReactionSelect<ExtArgs> | null;
    omit?: Prisma.MemoryReactionOmit<ExtArgs> | null;
    include?: Prisma.MemoryReactionInclude<ExtArgs> | null;
    where: Prisma.MemoryReactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemoryReactionCreateInput, Prisma.MemoryReactionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MemoryReactionUpdateInput, Prisma.MemoryReactionUncheckedUpdateInput>;
};
export type MemoryReactionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryReactionSelect<ExtArgs> | null;
    omit?: Prisma.MemoryReactionOmit<ExtArgs> | null;
    include?: Prisma.MemoryReactionInclude<ExtArgs> | null;
    where: Prisma.MemoryReactionWhereUniqueInput;
};
export type MemoryReactionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemoryReactionWhereInput;
    limit?: number;
};
export type MemoryReactionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemoryReactionSelect<ExtArgs> | null;
    omit?: Prisma.MemoryReactionOmit<ExtArgs> | null;
    include?: Prisma.MemoryReactionInclude<ExtArgs> | null;
};
