import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GiftQrAssetModel = runtime.Types.Result.DefaultSelection<Prisma.$GiftQrAssetPayload>;
export type AggregateGiftQrAsset = {
    _count: GiftQrAssetCountAggregateOutputType | null;
    _avg: GiftQrAssetAvgAggregateOutputType | null;
    _sum: GiftQrAssetSumAggregateOutputType | null;
    _min: GiftQrAssetMinAggregateOutputType | null;
    _max: GiftQrAssetMaxAggregateOutputType | null;
};
export type GiftQrAssetAvgAggregateOutputType = {
    sizeBytes: number | null;
};
export type GiftQrAssetSumAggregateOutputType = {
    sizeBytes: number | null;
};
export type GiftQrAssetMinAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    storageKey: string | null;
    publicUrl: string | null;
    mimeType: string | null;
    sizeBytes: number | null;
    createdAt: Date | null;
};
export type GiftQrAssetMaxAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    storageKey: string | null;
    publicUrl: string | null;
    mimeType: string | null;
    sizeBytes: number | null;
    createdAt: Date | null;
};
export type GiftQrAssetCountAggregateOutputType = {
    id: number;
    weddingId: number;
    storageKey: number;
    publicUrl: number;
    mimeType: number;
    sizeBytes: number;
    createdAt: number;
    _all: number;
};
export type GiftQrAssetAvgAggregateInputType = {
    sizeBytes?: true;
};
export type GiftQrAssetSumAggregateInputType = {
    sizeBytes?: true;
};
export type GiftQrAssetMinAggregateInputType = {
    id?: true;
    weddingId?: true;
    storageKey?: true;
    publicUrl?: true;
    mimeType?: true;
    sizeBytes?: true;
    createdAt?: true;
};
export type GiftQrAssetMaxAggregateInputType = {
    id?: true;
    weddingId?: true;
    storageKey?: true;
    publicUrl?: true;
    mimeType?: true;
    sizeBytes?: true;
    createdAt?: true;
};
export type GiftQrAssetCountAggregateInputType = {
    id?: true;
    weddingId?: true;
    storageKey?: true;
    publicUrl?: true;
    mimeType?: true;
    sizeBytes?: true;
    createdAt?: true;
    _all?: true;
};
export type GiftQrAssetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GiftQrAssetWhereInput;
    orderBy?: Prisma.GiftQrAssetOrderByWithRelationInput | Prisma.GiftQrAssetOrderByWithRelationInput[];
    cursor?: Prisma.GiftQrAssetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GiftQrAssetCountAggregateInputType;
    _avg?: GiftQrAssetAvgAggregateInputType;
    _sum?: GiftQrAssetSumAggregateInputType;
    _min?: GiftQrAssetMinAggregateInputType;
    _max?: GiftQrAssetMaxAggregateInputType;
};
export type GetGiftQrAssetAggregateType<T extends GiftQrAssetAggregateArgs> = {
    [P in keyof T & keyof AggregateGiftQrAsset]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGiftQrAsset[P]> : Prisma.GetScalarType<T[P], AggregateGiftQrAsset[P]>;
};
export type GiftQrAssetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GiftQrAssetWhereInput;
    orderBy?: Prisma.GiftQrAssetOrderByWithAggregationInput | Prisma.GiftQrAssetOrderByWithAggregationInput[];
    by: Prisma.GiftQrAssetScalarFieldEnum[] | Prisma.GiftQrAssetScalarFieldEnum;
    having?: Prisma.GiftQrAssetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GiftQrAssetCountAggregateInputType | true;
    _avg?: GiftQrAssetAvgAggregateInputType;
    _sum?: GiftQrAssetSumAggregateInputType;
    _min?: GiftQrAssetMinAggregateInputType;
    _max?: GiftQrAssetMaxAggregateInputType;
};
export type GiftQrAssetGroupByOutputType = {
    id: string;
    weddingId: string;
    storageKey: string;
    publicUrl: string;
    mimeType: string;
    sizeBytes: number;
    createdAt: Date;
    _count: GiftQrAssetCountAggregateOutputType | null;
    _avg: GiftQrAssetAvgAggregateOutputType | null;
    _sum: GiftQrAssetSumAggregateOutputType | null;
    _min: GiftQrAssetMinAggregateOutputType | null;
    _max: GiftQrAssetMaxAggregateOutputType | null;
};
export type GetGiftQrAssetGroupByPayload<T extends GiftQrAssetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GiftQrAssetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GiftQrAssetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GiftQrAssetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GiftQrAssetGroupByOutputType[P]>;
}>>;
export type GiftQrAssetWhereInput = {
    AND?: Prisma.GiftQrAssetWhereInput | Prisma.GiftQrAssetWhereInput[];
    OR?: Prisma.GiftQrAssetWhereInput[];
    NOT?: Prisma.GiftQrAssetWhereInput | Prisma.GiftQrAssetWhereInput[];
    id?: Prisma.StringFilter<"GiftQrAsset"> | string;
    weddingId?: Prisma.StringFilter<"GiftQrAsset"> | string;
    storageKey?: Prisma.StringFilter<"GiftQrAsset"> | string;
    publicUrl?: Prisma.StringFilter<"GiftQrAsset"> | string;
    mimeType?: Prisma.StringFilter<"GiftQrAsset"> | string;
    sizeBytes?: Prisma.IntFilter<"GiftQrAsset"> | number;
    createdAt?: Prisma.DateTimeFilter<"GiftQrAsset"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
};
export type GiftQrAssetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    publicUrl?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    wedding?: Prisma.WeddingOrderByWithRelationInput;
};
export type GiftQrAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    storageKey?: string;
    AND?: Prisma.GiftQrAssetWhereInput | Prisma.GiftQrAssetWhereInput[];
    OR?: Prisma.GiftQrAssetWhereInput[];
    NOT?: Prisma.GiftQrAssetWhereInput | Prisma.GiftQrAssetWhereInput[];
    weddingId?: Prisma.StringFilter<"GiftQrAsset"> | string;
    publicUrl?: Prisma.StringFilter<"GiftQrAsset"> | string;
    mimeType?: Prisma.StringFilter<"GiftQrAsset"> | string;
    sizeBytes?: Prisma.IntFilter<"GiftQrAsset"> | number;
    createdAt?: Prisma.DateTimeFilter<"GiftQrAsset"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
}, "id" | "storageKey">;
export type GiftQrAssetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    publicUrl?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.GiftQrAssetCountOrderByAggregateInput;
    _avg?: Prisma.GiftQrAssetAvgOrderByAggregateInput;
    _max?: Prisma.GiftQrAssetMaxOrderByAggregateInput;
    _min?: Prisma.GiftQrAssetMinOrderByAggregateInput;
    _sum?: Prisma.GiftQrAssetSumOrderByAggregateInput;
};
export type GiftQrAssetScalarWhereWithAggregatesInput = {
    AND?: Prisma.GiftQrAssetScalarWhereWithAggregatesInput | Prisma.GiftQrAssetScalarWhereWithAggregatesInput[];
    OR?: Prisma.GiftQrAssetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GiftQrAssetScalarWhereWithAggregatesInput | Prisma.GiftQrAssetScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GiftQrAsset"> | string;
    weddingId?: Prisma.StringWithAggregatesFilter<"GiftQrAsset"> | string;
    storageKey?: Prisma.StringWithAggregatesFilter<"GiftQrAsset"> | string;
    publicUrl?: Prisma.StringWithAggregatesFilter<"GiftQrAsset"> | string;
    mimeType?: Prisma.StringWithAggregatesFilter<"GiftQrAsset"> | string;
    sizeBytes?: Prisma.IntWithAggregatesFilter<"GiftQrAsset"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"GiftQrAsset"> | Date | string;
};
export type GiftQrAssetCreateInput = {
    id?: string;
    storageKey: string;
    publicUrl: string;
    mimeType: string;
    sizeBytes: number;
    createdAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutGiftQrAssetsInput;
};
export type GiftQrAssetUncheckedCreateInput = {
    id?: string;
    weddingId: string;
    storageKey: string;
    publicUrl: string;
    mimeType: string;
    sizeBytes: number;
    createdAt?: Date | string;
};
export type GiftQrAssetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    publicUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutGiftQrAssetsNestedInput;
};
export type GiftQrAssetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    publicUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GiftQrAssetCreateManyInput = {
    id?: string;
    weddingId: string;
    storageKey: string;
    publicUrl: string;
    mimeType: string;
    sizeBytes: number;
    createdAt?: Date | string;
};
export type GiftQrAssetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    publicUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GiftQrAssetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    publicUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GiftQrAssetListRelationFilter = {
    every?: Prisma.GiftQrAssetWhereInput;
    some?: Prisma.GiftQrAssetWhereInput;
    none?: Prisma.GiftQrAssetWhereInput;
};
export type GiftQrAssetOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GiftQrAssetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    publicUrl?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GiftQrAssetAvgOrderByAggregateInput = {
    sizeBytes?: Prisma.SortOrder;
};
export type GiftQrAssetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    publicUrl?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GiftQrAssetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    publicUrl?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GiftQrAssetSumOrderByAggregateInput = {
    sizeBytes?: Prisma.SortOrder;
};
export type GiftQrAssetCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.GiftQrAssetCreateWithoutWeddingInput, Prisma.GiftQrAssetUncheckedCreateWithoutWeddingInput> | Prisma.GiftQrAssetCreateWithoutWeddingInput[] | Prisma.GiftQrAssetUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.GiftQrAssetCreateOrConnectWithoutWeddingInput | Prisma.GiftQrAssetCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.GiftQrAssetCreateManyWeddingInputEnvelope;
    connect?: Prisma.GiftQrAssetWhereUniqueInput | Prisma.GiftQrAssetWhereUniqueInput[];
};
export type GiftQrAssetUncheckedCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.GiftQrAssetCreateWithoutWeddingInput, Prisma.GiftQrAssetUncheckedCreateWithoutWeddingInput> | Prisma.GiftQrAssetCreateWithoutWeddingInput[] | Prisma.GiftQrAssetUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.GiftQrAssetCreateOrConnectWithoutWeddingInput | Prisma.GiftQrAssetCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.GiftQrAssetCreateManyWeddingInputEnvelope;
    connect?: Prisma.GiftQrAssetWhereUniqueInput | Prisma.GiftQrAssetWhereUniqueInput[];
};
export type GiftQrAssetUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.GiftQrAssetCreateWithoutWeddingInput, Prisma.GiftQrAssetUncheckedCreateWithoutWeddingInput> | Prisma.GiftQrAssetCreateWithoutWeddingInput[] | Prisma.GiftQrAssetUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.GiftQrAssetCreateOrConnectWithoutWeddingInput | Prisma.GiftQrAssetCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.GiftQrAssetUpsertWithWhereUniqueWithoutWeddingInput | Prisma.GiftQrAssetUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.GiftQrAssetCreateManyWeddingInputEnvelope;
    set?: Prisma.GiftQrAssetWhereUniqueInput | Prisma.GiftQrAssetWhereUniqueInput[];
    disconnect?: Prisma.GiftQrAssetWhereUniqueInput | Prisma.GiftQrAssetWhereUniqueInput[];
    delete?: Prisma.GiftQrAssetWhereUniqueInput | Prisma.GiftQrAssetWhereUniqueInput[];
    connect?: Prisma.GiftQrAssetWhereUniqueInput | Prisma.GiftQrAssetWhereUniqueInput[];
    update?: Prisma.GiftQrAssetUpdateWithWhereUniqueWithoutWeddingInput | Prisma.GiftQrAssetUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.GiftQrAssetUpdateManyWithWhereWithoutWeddingInput | Prisma.GiftQrAssetUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.GiftQrAssetScalarWhereInput | Prisma.GiftQrAssetScalarWhereInput[];
};
export type GiftQrAssetUncheckedUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.GiftQrAssetCreateWithoutWeddingInput, Prisma.GiftQrAssetUncheckedCreateWithoutWeddingInput> | Prisma.GiftQrAssetCreateWithoutWeddingInput[] | Prisma.GiftQrAssetUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.GiftQrAssetCreateOrConnectWithoutWeddingInput | Prisma.GiftQrAssetCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.GiftQrAssetUpsertWithWhereUniqueWithoutWeddingInput | Prisma.GiftQrAssetUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.GiftQrAssetCreateManyWeddingInputEnvelope;
    set?: Prisma.GiftQrAssetWhereUniqueInput | Prisma.GiftQrAssetWhereUniqueInput[];
    disconnect?: Prisma.GiftQrAssetWhereUniqueInput | Prisma.GiftQrAssetWhereUniqueInput[];
    delete?: Prisma.GiftQrAssetWhereUniqueInput | Prisma.GiftQrAssetWhereUniqueInput[];
    connect?: Prisma.GiftQrAssetWhereUniqueInput | Prisma.GiftQrAssetWhereUniqueInput[];
    update?: Prisma.GiftQrAssetUpdateWithWhereUniqueWithoutWeddingInput | Prisma.GiftQrAssetUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.GiftQrAssetUpdateManyWithWhereWithoutWeddingInput | Prisma.GiftQrAssetUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.GiftQrAssetScalarWhereInput | Prisma.GiftQrAssetScalarWhereInput[];
};
export type GiftQrAssetCreateWithoutWeddingInput = {
    id?: string;
    storageKey: string;
    publicUrl: string;
    mimeType: string;
    sizeBytes: number;
    createdAt?: Date | string;
};
export type GiftQrAssetUncheckedCreateWithoutWeddingInput = {
    id?: string;
    storageKey: string;
    publicUrl: string;
    mimeType: string;
    sizeBytes: number;
    createdAt?: Date | string;
};
export type GiftQrAssetCreateOrConnectWithoutWeddingInput = {
    where: Prisma.GiftQrAssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.GiftQrAssetCreateWithoutWeddingInput, Prisma.GiftQrAssetUncheckedCreateWithoutWeddingInput>;
};
export type GiftQrAssetCreateManyWeddingInputEnvelope = {
    data: Prisma.GiftQrAssetCreateManyWeddingInput | Prisma.GiftQrAssetCreateManyWeddingInput[];
    skipDuplicates?: boolean;
};
export type GiftQrAssetUpsertWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.GiftQrAssetWhereUniqueInput;
    update: Prisma.XOR<Prisma.GiftQrAssetUpdateWithoutWeddingInput, Prisma.GiftQrAssetUncheckedUpdateWithoutWeddingInput>;
    create: Prisma.XOR<Prisma.GiftQrAssetCreateWithoutWeddingInput, Prisma.GiftQrAssetUncheckedCreateWithoutWeddingInput>;
};
export type GiftQrAssetUpdateWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.GiftQrAssetWhereUniqueInput;
    data: Prisma.XOR<Prisma.GiftQrAssetUpdateWithoutWeddingInput, Prisma.GiftQrAssetUncheckedUpdateWithoutWeddingInput>;
};
export type GiftQrAssetUpdateManyWithWhereWithoutWeddingInput = {
    where: Prisma.GiftQrAssetScalarWhereInput;
    data: Prisma.XOR<Prisma.GiftQrAssetUpdateManyMutationInput, Prisma.GiftQrAssetUncheckedUpdateManyWithoutWeddingInput>;
};
export type GiftQrAssetScalarWhereInput = {
    AND?: Prisma.GiftQrAssetScalarWhereInput | Prisma.GiftQrAssetScalarWhereInput[];
    OR?: Prisma.GiftQrAssetScalarWhereInput[];
    NOT?: Prisma.GiftQrAssetScalarWhereInput | Prisma.GiftQrAssetScalarWhereInput[];
    id?: Prisma.StringFilter<"GiftQrAsset"> | string;
    weddingId?: Prisma.StringFilter<"GiftQrAsset"> | string;
    storageKey?: Prisma.StringFilter<"GiftQrAsset"> | string;
    publicUrl?: Prisma.StringFilter<"GiftQrAsset"> | string;
    mimeType?: Prisma.StringFilter<"GiftQrAsset"> | string;
    sizeBytes?: Prisma.IntFilter<"GiftQrAsset"> | number;
    createdAt?: Prisma.DateTimeFilter<"GiftQrAsset"> | Date | string;
};
export type GiftQrAssetCreateManyWeddingInput = {
    id?: string;
    storageKey: string;
    publicUrl: string;
    mimeType: string;
    sizeBytes: number;
    createdAt?: Date | string;
};
export type GiftQrAssetUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    publicUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GiftQrAssetUncheckedUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    publicUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GiftQrAssetUncheckedUpdateManyWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    publicUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GiftQrAssetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    storageKey?: boolean;
    publicUrl?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    createdAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["giftQrAsset"]>;
export type GiftQrAssetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    storageKey?: boolean;
    publicUrl?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    createdAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["giftQrAsset"]>;
export type GiftQrAssetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    storageKey?: boolean;
    publicUrl?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    createdAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["giftQrAsset"]>;
export type GiftQrAssetSelectScalar = {
    id?: boolean;
    weddingId?: boolean;
    storageKey?: boolean;
    publicUrl?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    createdAt?: boolean;
};
export type GiftQrAssetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "weddingId" | "storageKey" | "publicUrl" | "mimeType" | "sizeBytes" | "createdAt", ExtArgs["result"]["giftQrAsset"]>;
export type GiftQrAssetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
};
export type GiftQrAssetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
};
export type GiftQrAssetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
};
export type $GiftQrAssetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GiftQrAsset";
    objects: {
        wedding: Prisma.$WeddingPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        weddingId: string;
        storageKey: string;
        publicUrl: string;
        mimeType: string;
        sizeBytes: number;
        createdAt: Date;
    }, ExtArgs["result"]["giftQrAsset"]>;
    composites: {};
};
export type GiftQrAssetGetPayload<S extends boolean | null | undefined | GiftQrAssetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GiftQrAssetPayload, S>;
export type GiftQrAssetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GiftQrAssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GiftQrAssetCountAggregateInputType | true;
};
export interface GiftQrAssetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GiftQrAsset'];
        meta: {
            name: 'GiftQrAsset';
        };
    };
    findUnique<T extends GiftQrAssetFindUniqueArgs>(args: Prisma.SelectSubset<T, GiftQrAssetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GiftQrAssetClient<runtime.Types.Result.GetResult<Prisma.$GiftQrAssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GiftQrAssetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GiftQrAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GiftQrAssetClient<runtime.Types.Result.GetResult<Prisma.$GiftQrAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GiftQrAssetFindFirstArgs>(args?: Prisma.SelectSubset<T, GiftQrAssetFindFirstArgs<ExtArgs>>): Prisma.Prisma__GiftQrAssetClient<runtime.Types.Result.GetResult<Prisma.$GiftQrAssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GiftQrAssetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GiftQrAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GiftQrAssetClient<runtime.Types.Result.GetResult<Prisma.$GiftQrAssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GiftQrAssetFindManyArgs>(args?: Prisma.SelectSubset<T, GiftQrAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GiftQrAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GiftQrAssetCreateArgs>(args: Prisma.SelectSubset<T, GiftQrAssetCreateArgs<ExtArgs>>): Prisma.Prisma__GiftQrAssetClient<runtime.Types.Result.GetResult<Prisma.$GiftQrAssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GiftQrAssetCreateManyArgs>(args?: Prisma.SelectSubset<T, GiftQrAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GiftQrAssetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GiftQrAssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GiftQrAssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GiftQrAssetDeleteArgs>(args: Prisma.SelectSubset<T, GiftQrAssetDeleteArgs<ExtArgs>>): Prisma.Prisma__GiftQrAssetClient<runtime.Types.Result.GetResult<Prisma.$GiftQrAssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GiftQrAssetUpdateArgs>(args: Prisma.SelectSubset<T, GiftQrAssetUpdateArgs<ExtArgs>>): Prisma.Prisma__GiftQrAssetClient<runtime.Types.Result.GetResult<Prisma.$GiftQrAssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GiftQrAssetDeleteManyArgs>(args?: Prisma.SelectSubset<T, GiftQrAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GiftQrAssetUpdateManyArgs>(args: Prisma.SelectSubset<T, GiftQrAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GiftQrAssetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GiftQrAssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GiftQrAssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GiftQrAssetUpsertArgs>(args: Prisma.SelectSubset<T, GiftQrAssetUpsertArgs<ExtArgs>>): Prisma.Prisma__GiftQrAssetClient<runtime.Types.Result.GetResult<Prisma.$GiftQrAssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GiftQrAssetCountArgs>(args?: Prisma.Subset<T, GiftQrAssetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GiftQrAssetCountAggregateOutputType> : number>;
    aggregate<T extends GiftQrAssetAggregateArgs>(args: Prisma.Subset<T, GiftQrAssetAggregateArgs>): Prisma.PrismaPromise<GetGiftQrAssetAggregateType<T>>;
    groupBy<T extends GiftQrAssetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GiftQrAssetGroupByArgs['orderBy'];
    } : {
        orderBy?: GiftQrAssetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GiftQrAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiftQrAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GiftQrAssetFieldRefs;
}
export interface Prisma__GiftQrAssetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wedding<T extends Prisma.WeddingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WeddingDefaultArgs<ExtArgs>>): Prisma.Prisma__WeddingClient<runtime.Types.Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GiftQrAssetFieldRefs {
    readonly id: Prisma.FieldRef<"GiftQrAsset", 'String'>;
    readonly weddingId: Prisma.FieldRef<"GiftQrAsset", 'String'>;
    readonly storageKey: Prisma.FieldRef<"GiftQrAsset", 'String'>;
    readonly publicUrl: Prisma.FieldRef<"GiftQrAsset", 'String'>;
    readonly mimeType: Prisma.FieldRef<"GiftQrAsset", 'String'>;
    readonly sizeBytes: Prisma.FieldRef<"GiftQrAsset", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"GiftQrAsset", 'DateTime'>;
}
export type GiftQrAssetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftQrAssetSelect<ExtArgs> | null;
    omit?: Prisma.GiftQrAssetOmit<ExtArgs> | null;
    include?: Prisma.GiftQrAssetInclude<ExtArgs> | null;
    where: Prisma.GiftQrAssetWhereUniqueInput;
};
export type GiftQrAssetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftQrAssetSelect<ExtArgs> | null;
    omit?: Prisma.GiftQrAssetOmit<ExtArgs> | null;
    include?: Prisma.GiftQrAssetInclude<ExtArgs> | null;
    where: Prisma.GiftQrAssetWhereUniqueInput;
};
export type GiftQrAssetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftQrAssetSelect<ExtArgs> | null;
    omit?: Prisma.GiftQrAssetOmit<ExtArgs> | null;
    include?: Prisma.GiftQrAssetInclude<ExtArgs> | null;
    where?: Prisma.GiftQrAssetWhereInput;
    orderBy?: Prisma.GiftQrAssetOrderByWithRelationInput | Prisma.GiftQrAssetOrderByWithRelationInput[];
    cursor?: Prisma.GiftQrAssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GiftQrAssetScalarFieldEnum | Prisma.GiftQrAssetScalarFieldEnum[];
};
export type GiftQrAssetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftQrAssetSelect<ExtArgs> | null;
    omit?: Prisma.GiftQrAssetOmit<ExtArgs> | null;
    include?: Prisma.GiftQrAssetInclude<ExtArgs> | null;
    where?: Prisma.GiftQrAssetWhereInput;
    orderBy?: Prisma.GiftQrAssetOrderByWithRelationInput | Prisma.GiftQrAssetOrderByWithRelationInput[];
    cursor?: Prisma.GiftQrAssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GiftQrAssetScalarFieldEnum | Prisma.GiftQrAssetScalarFieldEnum[];
};
export type GiftQrAssetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftQrAssetSelect<ExtArgs> | null;
    omit?: Prisma.GiftQrAssetOmit<ExtArgs> | null;
    include?: Prisma.GiftQrAssetInclude<ExtArgs> | null;
    where?: Prisma.GiftQrAssetWhereInput;
    orderBy?: Prisma.GiftQrAssetOrderByWithRelationInput | Prisma.GiftQrAssetOrderByWithRelationInput[];
    cursor?: Prisma.GiftQrAssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GiftQrAssetScalarFieldEnum | Prisma.GiftQrAssetScalarFieldEnum[];
};
export type GiftQrAssetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftQrAssetSelect<ExtArgs> | null;
    omit?: Prisma.GiftQrAssetOmit<ExtArgs> | null;
    include?: Prisma.GiftQrAssetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GiftQrAssetCreateInput, Prisma.GiftQrAssetUncheckedCreateInput>;
};
export type GiftQrAssetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GiftQrAssetCreateManyInput | Prisma.GiftQrAssetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GiftQrAssetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftQrAssetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GiftQrAssetOmit<ExtArgs> | null;
    data: Prisma.GiftQrAssetCreateManyInput | Prisma.GiftQrAssetCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GiftQrAssetIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GiftQrAssetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftQrAssetSelect<ExtArgs> | null;
    omit?: Prisma.GiftQrAssetOmit<ExtArgs> | null;
    include?: Prisma.GiftQrAssetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GiftQrAssetUpdateInput, Prisma.GiftQrAssetUncheckedUpdateInput>;
    where: Prisma.GiftQrAssetWhereUniqueInput;
};
export type GiftQrAssetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GiftQrAssetUpdateManyMutationInput, Prisma.GiftQrAssetUncheckedUpdateManyInput>;
    where?: Prisma.GiftQrAssetWhereInput;
    limit?: number;
};
export type GiftQrAssetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftQrAssetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GiftQrAssetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GiftQrAssetUpdateManyMutationInput, Prisma.GiftQrAssetUncheckedUpdateManyInput>;
    where?: Prisma.GiftQrAssetWhereInput;
    limit?: number;
    include?: Prisma.GiftQrAssetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GiftQrAssetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftQrAssetSelect<ExtArgs> | null;
    omit?: Prisma.GiftQrAssetOmit<ExtArgs> | null;
    include?: Prisma.GiftQrAssetInclude<ExtArgs> | null;
    where: Prisma.GiftQrAssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.GiftQrAssetCreateInput, Prisma.GiftQrAssetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GiftQrAssetUpdateInput, Prisma.GiftQrAssetUncheckedUpdateInput>;
};
export type GiftQrAssetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftQrAssetSelect<ExtArgs> | null;
    omit?: Prisma.GiftQrAssetOmit<ExtArgs> | null;
    include?: Prisma.GiftQrAssetInclude<ExtArgs> | null;
    where: Prisma.GiftQrAssetWhereUniqueInput;
};
export type GiftQrAssetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GiftQrAssetWhereInput;
    limit?: number;
};
export type GiftQrAssetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GiftQrAssetSelect<ExtArgs> | null;
    omit?: Prisma.GiftQrAssetOmit<ExtArgs> | null;
    include?: Prisma.GiftQrAssetInclude<ExtArgs> | null;
};
