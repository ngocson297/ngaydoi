import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MediaAssetModel = runtime.Types.Result.DefaultSelection<Prisma.$MediaAssetPayload>;
export type AggregateMediaAsset = {
    _count: MediaAssetCountAggregateOutputType | null;
    _avg: MediaAssetAvgAggregateOutputType | null;
    _sum: MediaAssetSumAggregateOutputType | null;
    _min: MediaAssetMinAggregateOutputType | null;
    _max: MediaAssetMaxAggregateOutputType | null;
};
export type MediaAssetAvgAggregateOutputType = {
    sizeBytes: number | null;
    width: number | null;
    height: number | null;
    sortOrder: number | null;
};
export type MediaAssetSumAggregateOutputType = {
    sizeBytes: number | null;
    width: number | null;
    height: number | null;
    sortOrder: number | null;
};
export type MediaAssetMinAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    type: string | null;
    storageKey: string | null;
    publicUrl: string | null;
    mimeType: string | null;
    sizeBytes: number | null;
    width: number | null;
    height: number | null;
    isCover: boolean | null;
    altText: string | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MediaAssetMaxAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    type: string | null;
    storageKey: string | null;
    publicUrl: string | null;
    mimeType: string | null;
    sizeBytes: number | null;
    width: number | null;
    height: number | null;
    isCover: boolean | null;
    altText: string | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MediaAssetCountAggregateOutputType = {
    id: number;
    weddingId: number;
    type: number;
    storageKey: number;
    publicUrl: number;
    mimeType: number;
    sizeBytes: number;
    width: number;
    height: number;
    isCover: number;
    altText: number;
    sortOrder: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MediaAssetAvgAggregateInputType = {
    sizeBytes?: true;
    width?: true;
    height?: true;
    sortOrder?: true;
};
export type MediaAssetSumAggregateInputType = {
    sizeBytes?: true;
    width?: true;
    height?: true;
    sortOrder?: true;
};
export type MediaAssetMinAggregateInputType = {
    id?: true;
    weddingId?: true;
    type?: true;
    storageKey?: true;
    publicUrl?: true;
    mimeType?: true;
    sizeBytes?: true;
    width?: true;
    height?: true;
    isCover?: true;
    altText?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MediaAssetMaxAggregateInputType = {
    id?: true;
    weddingId?: true;
    type?: true;
    storageKey?: true;
    publicUrl?: true;
    mimeType?: true;
    sizeBytes?: true;
    width?: true;
    height?: true;
    isCover?: true;
    altText?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MediaAssetCountAggregateInputType = {
    id?: true;
    weddingId?: true;
    type?: true;
    storageKey?: true;
    publicUrl?: true;
    mimeType?: true;
    sizeBytes?: true;
    width?: true;
    height?: true;
    isCover?: true;
    altText?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MediaAssetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MediaAssetWhereInput;
    orderBy?: Prisma.MediaAssetOrderByWithRelationInput | Prisma.MediaAssetOrderByWithRelationInput[];
    cursor?: Prisma.MediaAssetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MediaAssetCountAggregateInputType;
    _avg?: MediaAssetAvgAggregateInputType;
    _sum?: MediaAssetSumAggregateInputType;
    _min?: MediaAssetMinAggregateInputType;
    _max?: MediaAssetMaxAggregateInputType;
};
export type GetMediaAssetAggregateType<T extends MediaAssetAggregateArgs> = {
    [P in keyof T & keyof AggregateMediaAsset]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMediaAsset[P]> : Prisma.GetScalarType<T[P], AggregateMediaAsset[P]>;
};
export type MediaAssetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MediaAssetWhereInput;
    orderBy?: Prisma.MediaAssetOrderByWithAggregationInput | Prisma.MediaAssetOrderByWithAggregationInput[];
    by: Prisma.MediaAssetScalarFieldEnum[] | Prisma.MediaAssetScalarFieldEnum;
    having?: Prisma.MediaAssetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MediaAssetCountAggregateInputType | true;
    _avg?: MediaAssetAvgAggregateInputType;
    _sum?: MediaAssetSumAggregateInputType;
    _min?: MediaAssetMinAggregateInputType;
    _max?: MediaAssetMaxAggregateInputType;
};
export type MediaAssetGroupByOutputType = {
    id: string;
    weddingId: string;
    type: string;
    storageKey: string;
    publicUrl: string;
    mimeType: string;
    sizeBytes: number;
    width: number | null;
    height: number | null;
    isCover: boolean;
    altText: string | null;
    sortOrder: number;
    createdAt: Date;
    updatedAt: Date;
    _count: MediaAssetCountAggregateOutputType | null;
    _avg: MediaAssetAvgAggregateOutputType | null;
    _sum: MediaAssetSumAggregateOutputType | null;
    _min: MediaAssetMinAggregateOutputType | null;
    _max: MediaAssetMaxAggregateOutputType | null;
};
export type GetMediaAssetGroupByPayload<T extends MediaAssetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MediaAssetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MediaAssetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MediaAssetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MediaAssetGroupByOutputType[P]>;
}>>;
export type MediaAssetWhereInput = {
    AND?: Prisma.MediaAssetWhereInput | Prisma.MediaAssetWhereInput[];
    OR?: Prisma.MediaAssetWhereInput[];
    NOT?: Prisma.MediaAssetWhereInput | Prisma.MediaAssetWhereInput[];
    id?: Prisma.StringFilter<"MediaAsset"> | string;
    weddingId?: Prisma.StringFilter<"MediaAsset"> | string;
    type?: Prisma.StringFilter<"MediaAsset"> | string;
    storageKey?: Prisma.StringFilter<"MediaAsset"> | string;
    publicUrl?: Prisma.StringFilter<"MediaAsset"> | string;
    mimeType?: Prisma.StringFilter<"MediaAsset"> | string;
    sizeBytes?: Prisma.IntFilter<"MediaAsset"> | number;
    width?: Prisma.IntNullableFilter<"MediaAsset"> | number | null;
    height?: Prisma.IntNullableFilter<"MediaAsset"> | number | null;
    isCover?: Prisma.BoolFilter<"MediaAsset"> | boolean;
    altText?: Prisma.StringNullableFilter<"MediaAsset"> | string | null;
    sortOrder?: Prisma.IntFilter<"MediaAsset"> | number;
    createdAt?: Prisma.DateTimeFilter<"MediaAsset"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MediaAsset"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
};
export type MediaAssetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    publicUrl?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    width?: Prisma.SortOrderInput | Prisma.SortOrder;
    height?: Prisma.SortOrderInput | Prisma.SortOrder;
    isCover?: Prisma.SortOrder;
    altText?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    wedding?: Prisma.WeddingOrderByWithRelationInput;
};
export type MediaAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MediaAssetWhereInput | Prisma.MediaAssetWhereInput[];
    OR?: Prisma.MediaAssetWhereInput[];
    NOT?: Prisma.MediaAssetWhereInput | Prisma.MediaAssetWhereInput[];
    weddingId?: Prisma.StringFilter<"MediaAsset"> | string;
    type?: Prisma.StringFilter<"MediaAsset"> | string;
    storageKey?: Prisma.StringFilter<"MediaAsset"> | string;
    publicUrl?: Prisma.StringFilter<"MediaAsset"> | string;
    mimeType?: Prisma.StringFilter<"MediaAsset"> | string;
    sizeBytes?: Prisma.IntFilter<"MediaAsset"> | number;
    width?: Prisma.IntNullableFilter<"MediaAsset"> | number | null;
    height?: Prisma.IntNullableFilter<"MediaAsset"> | number | null;
    isCover?: Prisma.BoolFilter<"MediaAsset"> | boolean;
    altText?: Prisma.StringNullableFilter<"MediaAsset"> | string | null;
    sortOrder?: Prisma.IntFilter<"MediaAsset"> | number;
    createdAt?: Prisma.DateTimeFilter<"MediaAsset"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MediaAsset"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
}, "id">;
export type MediaAssetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    publicUrl?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    width?: Prisma.SortOrderInput | Prisma.SortOrder;
    height?: Prisma.SortOrderInput | Prisma.SortOrder;
    isCover?: Prisma.SortOrder;
    altText?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MediaAssetCountOrderByAggregateInput;
    _avg?: Prisma.MediaAssetAvgOrderByAggregateInput;
    _max?: Prisma.MediaAssetMaxOrderByAggregateInput;
    _min?: Prisma.MediaAssetMinOrderByAggregateInput;
    _sum?: Prisma.MediaAssetSumOrderByAggregateInput;
};
export type MediaAssetScalarWhereWithAggregatesInput = {
    AND?: Prisma.MediaAssetScalarWhereWithAggregatesInput | Prisma.MediaAssetScalarWhereWithAggregatesInput[];
    OR?: Prisma.MediaAssetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MediaAssetScalarWhereWithAggregatesInput | Prisma.MediaAssetScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MediaAsset"> | string;
    weddingId?: Prisma.StringWithAggregatesFilter<"MediaAsset"> | string;
    type?: Prisma.StringWithAggregatesFilter<"MediaAsset"> | string;
    storageKey?: Prisma.StringWithAggregatesFilter<"MediaAsset"> | string;
    publicUrl?: Prisma.StringWithAggregatesFilter<"MediaAsset"> | string;
    mimeType?: Prisma.StringWithAggregatesFilter<"MediaAsset"> | string;
    sizeBytes?: Prisma.IntWithAggregatesFilter<"MediaAsset"> | number;
    width?: Prisma.IntNullableWithAggregatesFilter<"MediaAsset"> | number | null;
    height?: Prisma.IntNullableWithAggregatesFilter<"MediaAsset"> | number | null;
    isCover?: Prisma.BoolWithAggregatesFilter<"MediaAsset"> | boolean;
    altText?: Prisma.StringNullableWithAggregatesFilter<"MediaAsset"> | string | null;
    sortOrder?: Prisma.IntWithAggregatesFilter<"MediaAsset"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MediaAsset"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MediaAsset"> | Date | string;
};
export type MediaAssetCreateInput = {
    id?: string;
    type: string;
    storageKey: string;
    publicUrl: string;
    mimeType?: string;
    sizeBytes?: number;
    width?: number | null;
    height?: number | null;
    isCover?: boolean;
    altText?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutMediaAssetsInput;
};
export type MediaAssetUncheckedCreateInput = {
    id?: string;
    weddingId: string;
    type: string;
    storageKey: string;
    publicUrl: string;
    mimeType?: string;
    sizeBytes?: number;
    width?: number | null;
    height?: number | null;
    isCover?: boolean;
    altText?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MediaAssetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    publicUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isCover?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutMediaAssetsNestedInput;
};
export type MediaAssetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    publicUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isCover?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MediaAssetCreateManyInput = {
    id?: string;
    weddingId: string;
    type: string;
    storageKey: string;
    publicUrl: string;
    mimeType?: string;
    sizeBytes?: number;
    width?: number | null;
    height?: number | null;
    isCover?: boolean;
    altText?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MediaAssetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    publicUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isCover?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MediaAssetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    publicUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isCover?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MediaAssetListRelationFilter = {
    every?: Prisma.MediaAssetWhereInput;
    some?: Prisma.MediaAssetWhereInput;
    none?: Prisma.MediaAssetWhereInput;
};
export type MediaAssetOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MediaAssetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    publicUrl?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    isCover?: Prisma.SortOrder;
    altText?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MediaAssetAvgOrderByAggregateInput = {
    sizeBytes?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type MediaAssetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    publicUrl?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    isCover?: Prisma.SortOrder;
    altText?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MediaAssetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    publicUrl?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    isCover?: Prisma.SortOrder;
    altText?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MediaAssetSumOrderByAggregateInput = {
    sizeBytes?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type MediaAssetCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.MediaAssetCreateWithoutWeddingInput, Prisma.MediaAssetUncheckedCreateWithoutWeddingInput> | Prisma.MediaAssetCreateWithoutWeddingInput[] | Prisma.MediaAssetUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.MediaAssetCreateOrConnectWithoutWeddingInput | Prisma.MediaAssetCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.MediaAssetCreateManyWeddingInputEnvelope;
    connect?: Prisma.MediaAssetWhereUniqueInput | Prisma.MediaAssetWhereUniqueInput[];
};
export type MediaAssetUncheckedCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.MediaAssetCreateWithoutWeddingInput, Prisma.MediaAssetUncheckedCreateWithoutWeddingInput> | Prisma.MediaAssetCreateWithoutWeddingInput[] | Prisma.MediaAssetUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.MediaAssetCreateOrConnectWithoutWeddingInput | Prisma.MediaAssetCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.MediaAssetCreateManyWeddingInputEnvelope;
    connect?: Prisma.MediaAssetWhereUniqueInput | Prisma.MediaAssetWhereUniqueInput[];
};
export type MediaAssetUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.MediaAssetCreateWithoutWeddingInput, Prisma.MediaAssetUncheckedCreateWithoutWeddingInput> | Prisma.MediaAssetCreateWithoutWeddingInput[] | Prisma.MediaAssetUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.MediaAssetCreateOrConnectWithoutWeddingInput | Prisma.MediaAssetCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.MediaAssetUpsertWithWhereUniqueWithoutWeddingInput | Prisma.MediaAssetUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.MediaAssetCreateManyWeddingInputEnvelope;
    set?: Prisma.MediaAssetWhereUniqueInput | Prisma.MediaAssetWhereUniqueInput[];
    disconnect?: Prisma.MediaAssetWhereUniqueInput | Prisma.MediaAssetWhereUniqueInput[];
    delete?: Prisma.MediaAssetWhereUniqueInput | Prisma.MediaAssetWhereUniqueInput[];
    connect?: Prisma.MediaAssetWhereUniqueInput | Prisma.MediaAssetWhereUniqueInput[];
    update?: Prisma.MediaAssetUpdateWithWhereUniqueWithoutWeddingInput | Prisma.MediaAssetUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.MediaAssetUpdateManyWithWhereWithoutWeddingInput | Prisma.MediaAssetUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.MediaAssetScalarWhereInput | Prisma.MediaAssetScalarWhereInput[];
};
export type MediaAssetUncheckedUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.MediaAssetCreateWithoutWeddingInput, Prisma.MediaAssetUncheckedCreateWithoutWeddingInput> | Prisma.MediaAssetCreateWithoutWeddingInput[] | Prisma.MediaAssetUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.MediaAssetCreateOrConnectWithoutWeddingInput | Prisma.MediaAssetCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.MediaAssetUpsertWithWhereUniqueWithoutWeddingInput | Prisma.MediaAssetUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.MediaAssetCreateManyWeddingInputEnvelope;
    set?: Prisma.MediaAssetWhereUniqueInput | Prisma.MediaAssetWhereUniqueInput[];
    disconnect?: Prisma.MediaAssetWhereUniqueInput | Prisma.MediaAssetWhereUniqueInput[];
    delete?: Prisma.MediaAssetWhereUniqueInput | Prisma.MediaAssetWhereUniqueInput[];
    connect?: Prisma.MediaAssetWhereUniqueInput | Prisma.MediaAssetWhereUniqueInput[];
    update?: Prisma.MediaAssetUpdateWithWhereUniqueWithoutWeddingInput | Prisma.MediaAssetUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.MediaAssetUpdateManyWithWhereWithoutWeddingInput | Prisma.MediaAssetUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.MediaAssetScalarWhereInput | Prisma.MediaAssetScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type MediaAssetCreateWithoutWeddingInput = {
    id?: string;
    type: string;
    storageKey: string;
    publicUrl: string;
    mimeType?: string;
    sizeBytes?: number;
    width?: number | null;
    height?: number | null;
    isCover?: boolean;
    altText?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MediaAssetUncheckedCreateWithoutWeddingInput = {
    id?: string;
    type: string;
    storageKey: string;
    publicUrl: string;
    mimeType?: string;
    sizeBytes?: number;
    width?: number | null;
    height?: number | null;
    isCover?: boolean;
    altText?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MediaAssetCreateOrConnectWithoutWeddingInput = {
    where: Prisma.MediaAssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.MediaAssetCreateWithoutWeddingInput, Prisma.MediaAssetUncheckedCreateWithoutWeddingInput>;
};
export type MediaAssetCreateManyWeddingInputEnvelope = {
    data: Prisma.MediaAssetCreateManyWeddingInput | Prisma.MediaAssetCreateManyWeddingInput[];
    skipDuplicates?: boolean;
};
export type MediaAssetUpsertWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.MediaAssetWhereUniqueInput;
    update: Prisma.XOR<Prisma.MediaAssetUpdateWithoutWeddingInput, Prisma.MediaAssetUncheckedUpdateWithoutWeddingInput>;
    create: Prisma.XOR<Prisma.MediaAssetCreateWithoutWeddingInput, Prisma.MediaAssetUncheckedCreateWithoutWeddingInput>;
};
export type MediaAssetUpdateWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.MediaAssetWhereUniqueInput;
    data: Prisma.XOR<Prisma.MediaAssetUpdateWithoutWeddingInput, Prisma.MediaAssetUncheckedUpdateWithoutWeddingInput>;
};
export type MediaAssetUpdateManyWithWhereWithoutWeddingInput = {
    where: Prisma.MediaAssetScalarWhereInput;
    data: Prisma.XOR<Prisma.MediaAssetUpdateManyMutationInput, Prisma.MediaAssetUncheckedUpdateManyWithoutWeddingInput>;
};
export type MediaAssetScalarWhereInput = {
    AND?: Prisma.MediaAssetScalarWhereInput | Prisma.MediaAssetScalarWhereInput[];
    OR?: Prisma.MediaAssetScalarWhereInput[];
    NOT?: Prisma.MediaAssetScalarWhereInput | Prisma.MediaAssetScalarWhereInput[];
    id?: Prisma.StringFilter<"MediaAsset"> | string;
    weddingId?: Prisma.StringFilter<"MediaAsset"> | string;
    type?: Prisma.StringFilter<"MediaAsset"> | string;
    storageKey?: Prisma.StringFilter<"MediaAsset"> | string;
    publicUrl?: Prisma.StringFilter<"MediaAsset"> | string;
    mimeType?: Prisma.StringFilter<"MediaAsset"> | string;
    sizeBytes?: Prisma.IntFilter<"MediaAsset"> | number;
    width?: Prisma.IntNullableFilter<"MediaAsset"> | number | null;
    height?: Prisma.IntNullableFilter<"MediaAsset"> | number | null;
    isCover?: Prisma.BoolFilter<"MediaAsset"> | boolean;
    altText?: Prisma.StringNullableFilter<"MediaAsset"> | string | null;
    sortOrder?: Prisma.IntFilter<"MediaAsset"> | number;
    createdAt?: Prisma.DateTimeFilter<"MediaAsset"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MediaAsset"> | Date | string;
};
export type MediaAssetCreateManyWeddingInput = {
    id?: string;
    type: string;
    storageKey: string;
    publicUrl: string;
    mimeType?: string;
    sizeBytes?: number;
    width?: number | null;
    height?: number | null;
    isCover?: boolean;
    altText?: string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MediaAssetUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    publicUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isCover?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MediaAssetUncheckedUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    publicUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isCover?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MediaAssetUncheckedUpdateManyWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    publicUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isCover?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MediaAssetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    type?: boolean;
    storageKey?: boolean;
    publicUrl?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    width?: boolean;
    height?: boolean;
    isCover?: boolean;
    altText?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mediaAsset"]>;
export type MediaAssetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    type?: boolean;
    storageKey?: boolean;
    publicUrl?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    width?: boolean;
    height?: boolean;
    isCover?: boolean;
    altText?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mediaAsset"]>;
export type MediaAssetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    type?: boolean;
    storageKey?: boolean;
    publicUrl?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    width?: boolean;
    height?: boolean;
    isCover?: boolean;
    altText?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mediaAsset"]>;
export type MediaAssetSelectScalar = {
    id?: boolean;
    weddingId?: boolean;
    type?: boolean;
    storageKey?: boolean;
    publicUrl?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    width?: boolean;
    height?: boolean;
    isCover?: boolean;
    altText?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MediaAssetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "weddingId" | "type" | "storageKey" | "publicUrl" | "mimeType" | "sizeBytes" | "width" | "height" | "isCover" | "altText" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["mediaAsset"]>;
export type MediaAssetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
};
export type MediaAssetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
};
export type MediaAssetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
};
export type $MediaAssetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MediaAsset";
    objects: {
        wedding: Prisma.$WeddingPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        weddingId: string;
        type: string;
        storageKey: string;
        publicUrl: string;
        mimeType: string;
        sizeBytes: number;
        width: number | null;
        height: number | null;
        isCover: boolean;
        altText: string | null;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["mediaAsset"]>;
    composites: {};
};
export type MediaAssetGetPayload<S extends boolean | null | undefined | MediaAssetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MediaAssetPayload, S>;
export type MediaAssetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MediaAssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MediaAssetCountAggregateInputType | true;
};
export interface MediaAssetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MediaAsset'];
        meta: {
            name: 'MediaAsset';
        };
    };
    findUnique<T extends MediaAssetFindUniqueArgs>(args: Prisma.SelectSubset<T, MediaAssetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MediaAssetClient<runtime.Types.Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MediaAssetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MediaAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MediaAssetClient<runtime.Types.Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MediaAssetFindFirstArgs>(args?: Prisma.SelectSubset<T, MediaAssetFindFirstArgs<ExtArgs>>): Prisma.Prisma__MediaAssetClient<runtime.Types.Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MediaAssetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MediaAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MediaAssetClient<runtime.Types.Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MediaAssetFindManyArgs>(args?: Prisma.SelectSubset<T, MediaAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MediaAssetCreateArgs>(args: Prisma.SelectSubset<T, MediaAssetCreateArgs<ExtArgs>>): Prisma.Prisma__MediaAssetClient<runtime.Types.Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MediaAssetCreateManyArgs>(args?: Prisma.SelectSubset<T, MediaAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MediaAssetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MediaAssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MediaAssetDeleteArgs>(args: Prisma.SelectSubset<T, MediaAssetDeleteArgs<ExtArgs>>): Prisma.Prisma__MediaAssetClient<runtime.Types.Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MediaAssetUpdateArgs>(args: Prisma.SelectSubset<T, MediaAssetUpdateArgs<ExtArgs>>): Prisma.Prisma__MediaAssetClient<runtime.Types.Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MediaAssetDeleteManyArgs>(args?: Prisma.SelectSubset<T, MediaAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MediaAssetUpdateManyArgs>(args: Prisma.SelectSubset<T, MediaAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MediaAssetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MediaAssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MediaAssetUpsertArgs>(args: Prisma.SelectSubset<T, MediaAssetUpsertArgs<ExtArgs>>): Prisma.Prisma__MediaAssetClient<runtime.Types.Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MediaAssetCountArgs>(args?: Prisma.Subset<T, MediaAssetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MediaAssetCountAggregateOutputType> : number>;
    aggregate<T extends MediaAssetAggregateArgs>(args: Prisma.Subset<T, MediaAssetAggregateArgs>): Prisma.PrismaPromise<GetMediaAssetAggregateType<T>>;
    groupBy<T extends MediaAssetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MediaAssetGroupByArgs['orderBy'];
    } : {
        orderBy?: MediaAssetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MediaAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MediaAssetFieldRefs;
}
export interface Prisma__MediaAssetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wedding<T extends Prisma.WeddingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WeddingDefaultArgs<ExtArgs>>): Prisma.Prisma__WeddingClient<runtime.Types.Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MediaAssetFieldRefs {
    readonly id: Prisma.FieldRef<"MediaAsset", 'String'>;
    readonly weddingId: Prisma.FieldRef<"MediaAsset", 'String'>;
    readonly type: Prisma.FieldRef<"MediaAsset", 'String'>;
    readonly storageKey: Prisma.FieldRef<"MediaAsset", 'String'>;
    readonly publicUrl: Prisma.FieldRef<"MediaAsset", 'String'>;
    readonly mimeType: Prisma.FieldRef<"MediaAsset", 'String'>;
    readonly sizeBytes: Prisma.FieldRef<"MediaAsset", 'Int'>;
    readonly width: Prisma.FieldRef<"MediaAsset", 'Int'>;
    readonly height: Prisma.FieldRef<"MediaAsset", 'Int'>;
    readonly isCover: Prisma.FieldRef<"MediaAsset", 'Boolean'>;
    readonly altText: Prisma.FieldRef<"MediaAsset", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"MediaAsset", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"MediaAsset", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MediaAsset", 'DateTime'>;
}
export type MediaAssetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaAssetSelect<ExtArgs> | null;
    omit?: Prisma.MediaAssetOmit<ExtArgs> | null;
    include?: Prisma.MediaAssetInclude<ExtArgs> | null;
    where: Prisma.MediaAssetWhereUniqueInput;
};
export type MediaAssetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaAssetSelect<ExtArgs> | null;
    omit?: Prisma.MediaAssetOmit<ExtArgs> | null;
    include?: Prisma.MediaAssetInclude<ExtArgs> | null;
    where: Prisma.MediaAssetWhereUniqueInput;
};
export type MediaAssetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaAssetSelect<ExtArgs> | null;
    omit?: Prisma.MediaAssetOmit<ExtArgs> | null;
    include?: Prisma.MediaAssetInclude<ExtArgs> | null;
    where?: Prisma.MediaAssetWhereInput;
    orderBy?: Prisma.MediaAssetOrderByWithRelationInput | Prisma.MediaAssetOrderByWithRelationInput[];
    cursor?: Prisma.MediaAssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MediaAssetScalarFieldEnum | Prisma.MediaAssetScalarFieldEnum[];
};
export type MediaAssetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaAssetSelect<ExtArgs> | null;
    omit?: Prisma.MediaAssetOmit<ExtArgs> | null;
    include?: Prisma.MediaAssetInclude<ExtArgs> | null;
    where?: Prisma.MediaAssetWhereInput;
    orderBy?: Prisma.MediaAssetOrderByWithRelationInput | Prisma.MediaAssetOrderByWithRelationInput[];
    cursor?: Prisma.MediaAssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MediaAssetScalarFieldEnum | Prisma.MediaAssetScalarFieldEnum[];
};
export type MediaAssetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaAssetSelect<ExtArgs> | null;
    omit?: Prisma.MediaAssetOmit<ExtArgs> | null;
    include?: Prisma.MediaAssetInclude<ExtArgs> | null;
    where?: Prisma.MediaAssetWhereInput;
    orderBy?: Prisma.MediaAssetOrderByWithRelationInput | Prisma.MediaAssetOrderByWithRelationInput[];
    cursor?: Prisma.MediaAssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MediaAssetScalarFieldEnum | Prisma.MediaAssetScalarFieldEnum[];
};
export type MediaAssetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaAssetSelect<ExtArgs> | null;
    omit?: Prisma.MediaAssetOmit<ExtArgs> | null;
    include?: Prisma.MediaAssetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MediaAssetCreateInput, Prisma.MediaAssetUncheckedCreateInput>;
};
export type MediaAssetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MediaAssetCreateManyInput | Prisma.MediaAssetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MediaAssetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaAssetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MediaAssetOmit<ExtArgs> | null;
    data: Prisma.MediaAssetCreateManyInput | Prisma.MediaAssetCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MediaAssetIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MediaAssetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaAssetSelect<ExtArgs> | null;
    omit?: Prisma.MediaAssetOmit<ExtArgs> | null;
    include?: Prisma.MediaAssetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MediaAssetUpdateInput, Prisma.MediaAssetUncheckedUpdateInput>;
    where: Prisma.MediaAssetWhereUniqueInput;
};
export type MediaAssetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MediaAssetUpdateManyMutationInput, Prisma.MediaAssetUncheckedUpdateManyInput>;
    where?: Prisma.MediaAssetWhereInput;
    limit?: number;
};
export type MediaAssetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaAssetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MediaAssetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MediaAssetUpdateManyMutationInput, Prisma.MediaAssetUncheckedUpdateManyInput>;
    where?: Prisma.MediaAssetWhereInput;
    limit?: number;
    include?: Prisma.MediaAssetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MediaAssetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaAssetSelect<ExtArgs> | null;
    omit?: Prisma.MediaAssetOmit<ExtArgs> | null;
    include?: Prisma.MediaAssetInclude<ExtArgs> | null;
    where: Prisma.MediaAssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.MediaAssetCreateInput, Prisma.MediaAssetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MediaAssetUpdateInput, Prisma.MediaAssetUncheckedUpdateInput>;
};
export type MediaAssetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaAssetSelect<ExtArgs> | null;
    omit?: Prisma.MediaAssetOmit<ExtArgs> | null;
    include?: Prisma.MediaAssetInclude<ExtArgs> | null;
    where: Prisma.MediaAssetWhereUniqueInput;
};
export type MediaAssetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MediaAssetWhereInput;
    limit?: number;
};
export type MediaAssetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MediaAssetSelect<ExtArgs> | null;
    omit?: Prisma.MediaAssetOmit<ExtArgs> | null;
    include?: Prisma.MediaAssetInclude<ExtArgs> | null;
};
