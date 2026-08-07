import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PilotChecklistItemModel = runtime.Types.Result.DefaultSelection<Prisma.$PilotChecklistItemPayload>;
export type AggregatePilotChecklistItem = {
    _count: PilotChecklistItemCountAggregateOutputType | null;
    _avg: PilotChecklistItemAvgAggregateOutputType | null;
    _sum: PilotChecklistItemSumAggregateOutputType | null;
    _min: PilotChecklistItemMinAggregateOutputType | null;
    _max: PilotChecklistItemMaxAggregateOutputType | null;
};
export type PilotChecklistItemAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type PilotChecklistItemSumAggregateOutputType = {
    sortOrder: number | null;
};
export type PilotChecklistItemMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    category: string | null;
    title: string | null;
    description: string | null;
    owner: string | null;
    status: $Enums.PilotItemStatus | null;
    evidenceUrl: string | null;
    notes: string | null;
    sortOrder: number | null;
    completedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PilotChecklistItemMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    category: string | null;
    title: string | null;
    description: string | null;
    owner: string | null;
    status: $Enums.PilotItemStatus | null;
    evidenceUrl: string | null;
    notes: string | null;
    sortOrder: number | null;
    completedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PilotChecklistItemCountAggregateOutputType = {
    id: number;
    code: number;
    category: number;
    title: number;
    description: number;
    owner: number;
    status: number;
    evidenceUrl: number;
    notes: number;
    sortOrder: number;
    completedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PilotChecklistItemAvgAggregateInputType = {
    sortOrder?: true;
};
export type PilotChecklistItemSumAggregateInputType = {
    sortOrder?: true;
};
export type PilotChecklistItemMinAggregateInputType = {
    id?: true;
    code?: true;
    category?: true;
    title?: true;
    description?: true;
    owner?: true;
    status?: true;
    evidenceUrl?: true;
    notes?: true;
    sortOrder?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PilotChecklistItemMaxAggregateInputType = {
    id?: true;
    code?: true;
    category?: true;
    title?: true;
    description?: true;
    owner?: true;
    status?: true;
    evidenceUrl?: true;
    notes?: true;
    sortOrder?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PilotChecklistItemCountAggregateInputType = {
    id?: true;
    code?: true;
    category?: true;
    title?: true;
    description?: true;
    owner?: true;
    status?: true;
    evidenceUrl?: true;
    notes?: true;
    sortOrder?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PilotChecklistItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PilotChecklistItemWhereInput;
    orderBy?: Prisma.PilotChecklistItemOrderByWithRelationInput | Prisma.PilotChecklistItemOrderByWithRelationInput[];
    cursor?: Prisma.PilotChecklistItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PilotChecklistItemCountAggregateInputType;
    _avg?: PilotChecklistItemAvgAggregateInputType;
    _sum?: PilotChecklistItemSumAggregateInputType;
    _min?: PilotChecklistItemMinAggregateInputType;
    _max?: PilotChecklistItemMaxAggregateInputType;
};
export type GetPilotChecklistItemAggregateType<T extends PilotChecklistItemAggregateArgs> = {
    [P in keyof T & keyof AggregatePilotChecklistItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePilotChecklistItem[P]> : Prisma.GetScalarType<T[P], AggregatePilotChecklistItem[P]>;
};
export type PilotChecklistItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PilotChecklistItemWhereInput;
    orderBy?: Prisma.PilotChecklistItemOrderByWithAggregationInput | Prisma.PilotChecklistItemOrderByWithAggregationInput[];
    by: Prisma.PilotChecklistItemScalarFieldEnum[] | Prisma.PilotChecklistItemScalarFieldEnum;
    having?: Prisma.PilotChecklistItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PilotChecklistItemCountAggregateInputType | true;
    _avg?: PilotChecklistItemAvgAggregateInputType;
    _sum?: PilotChecklistItemSumAggregateInputType;
    _min?: PilotChecklistItemMinAggregateInputType;
    _max?: PilotChecklistItemMaxAggregateInputType;
};
export type PilotChecklistItemGroupByOutputType = {
    id: string;
    code: string;
    category: string;
    title: string;
    description: string | null;
    owner: string | null;
    status: $Enums.PilotItemStatus;
    evidenceUrl: string | null;
    notes: string | null;
    sortOrder: number;
    completedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PilotChecklistItemCountAggregateOutputType | null;
    _avg: PilotChecklistItemAvgAggregateOutputType | null;
    _sum: PilotChecklistItemSumAggregateOutputType | null;
    _min: PilotChecklistItemMinAggregateOutputType | null;
    _max: PilotChecklistItemMaxAggregateOutputType | null;
};
export type GetPilotChecklistItemGroupByPayload<T extends PilotChecklistItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PilotChecklistItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PilotChecklistItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PilotChecklistItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PilotChecklistItemGroupByOutputType[P]>;
}>>;
export type PilotChecklistItemWhereInput = {
    AND?: Prisma.PilotChecklistItemWhereInput | Prisma.PilotChecklistItemWhereInput[];
    OR?: Prisma.PilotChecklistItemWhereInput[];
    NOT?: Prisma.PilotChecklistItemWhereInput | Prisma.PilotChecklistItemWhereInput[];
    id?: Prisma.StringFilter<"PilotChecklistItem"> | string;
    code?: Prisma.StringFilter<"PilotChecklistItem"> | string;
    category?: Prisma.StringFilter<"PilotChecklistItem"> | string;
    title?: Prisma.StringFilter<"PilotChecklistItem"> | string;
    description?: Prisma.StringNullableFilter<"PilotChecklistItem"> | string | null;
    owner?: Prisma.StringNullableFilter<"PilotChecklistItem"> | string | null;
    status?: Prisma.EnumPilotItemStatusFilter<"PilotChecklistItem"> | $Enums.PilotItemStatus;
    evidenceUrl?: Prisma.StringNullableFilter<"PilotChecklistItem"> | string | null;
    notes?: Prisma.StringNullableFilter<"PilotChecklistItem"> | string | null;
    sortOrder?: Prisma.IntFilter<"PilotChecklistItem"> | number;
    completedAt?: Prisma.DateTimeNullableFilter<"PilotChecklistItem"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PilotChecklistItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PilotChecklistItem"> | Date | string;
};
export type PilotChecklistItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    owner?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    evidenceUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PilotChecklistItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.PilotChecklistItemWhereInput | Prisma.PilotChecklistItemWhereInput[];
    OR?: Prisma.PilotChecklistItemWhereInput[];
    NOT?: Prisma.PilotChecklistItemWhereInput | Prisma.PilotChecklistItemWhereInput[];
    category?: Prisma.StringFilter<"PilotChecklistItem"> | string;
    title?: Prisma.StringFilter<"PilotChecklistItem"> | string;
    description?: Prisma.StringNullableFilter<"PilotChecklistItem"> | string | null;
    owner?: Prisma.StringNullableFilter<"PilotChecklistItem"> | string | null;
    status?: Prisma.EnumPilotItemStatusFilter<"PilotChecklistItem"> | $Enums.PilotItemStatus;
    evidenceUrl?: Prisma.StringNullableFilter<"PilotChecklistItem"> | string | null;
    notes?: Prisma.StringNullableFilter<"PilotChecklistItem"> | string | null;
    sortOrder?: Prisma.IntFilter<"PilotChecklistItem"> | number;
    completedAt?: Prisma.DateTimeNullableFilter<"PilotChecklistItem"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PilotChecklistItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PilotChecklistItem"> | Date | string;
}, "id" | "code">;
export type PilotChecklistItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    owner?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    evidenceUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PilotChecklistItemCountOrderByAggregateInput;
    _avg?: Prisma.PilotChecklistItemAvgOrderByAggregateInput;
    _max?: Prisma.PilotChecklistItemMaxOrderByAggregateInput;
    _min?: Prisma.PilotChecklistItemMinOrderByAggregateInput;
    _sum?: Prisma.PilotChecklistItemSumOrderByAggregateInput;
};
export type PilotChecklistItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.PilotChecklistItemScalarWhereWithAggregatesInput | Prisma.PilotChecklistItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.PilotChecklistItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PilotChecklistItemScalarWhereWithAggregatesInput | Prisma.PilotChecklistItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PilotChecklistItem"> | string;
    code?: Prisma.StringWithAggregatesFilter<"PilotChecklistItem"> | string;
    category?: Prisma.StringWithAggregatesFilter<"PilotChecklistItem"> | string;
    title?: Prisma.StringWithAggregatesFilter<"PilotChecklistItem"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"PilotChecklistItem"> | string | null;
    owner?: Prisma.StringNullableWithAggregatesFilter<"PilotChecklistItem"> | string | null;
    status?: Prisma.EnumPilotItemStatusWithAggregatesFilter<"PilotChecklistItem"> | $Enums.PilotItemStatus;
    evidenceUrl?: Prisma.StringNullableWithAggregatesFilter<"PilotChecklistItem"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"PilotChecklistItem"> | string | null;
    sortOrder?: Prisma.IntWithAggregatesFilter<"PilotChecklistItem"> | number;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PilotChecklistItem"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PilotChecklistItem"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PilotChecklistItem"> | Date | string;
};
export type PilotChecklistItemCreateInput = {
    id?: string;
    code: string;
    category: string;
    title: string;
    description?: string | null;
    owner?: string | null;
    status?: $Enums.PilotItemStatus;
    evidenceUrl?: string | null;
    notes?: string | null;
    sortOrder?: number;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PilotChecklistItemUncheckedCreateInput = {
    id?: string;
    code: string;
    category: string;
    title: string;
    description?: string | null;
    owner?: string | null;
    status?: $Enums.PilotItemStatus;
    evidenceUrl?: string | null;
    notes?: string | null;
    sortOrder?: number;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PilotChecklistItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPilotItemStatusFieldUpdateOperationsInput | $Enums.PilotItemStatus;
    evidenceUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PilotChecklistItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPilotItemStatusFieldUpdateOperationsInput | $Enums.PilotItemStatus;
    evidenceUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PilotChecklistItemCreateManyInput = {
    id?: string;
    code: string;
    category: string;
    title: string;
    description?: string | null;
    owner?: string | null;
    status?: $Enums.PilotItemStatus;
    evidenceUrl?: string | null;
    notes?: string | null;
    sortOrder?: number;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PilotChecklistItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPilotItemStatusFieldUpdateOperationsInput | $Enums.PilotItemStatus;
    evidenceUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PilotChecklistItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPilotItemStatusFieldUpdateOperationsInput | $Enums.PilotItemStatus;
    evidenceUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PilotChecklistItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    owner?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    evidenceUrl?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PilotChecklistItemAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type PilotChecklistItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    owner?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    evidenceUrl?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PilotChecklistItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    owner?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    evidenceUrl?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PilotChecklistItemSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type EnumPilotItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.PilotItemStatus;
};
export type PilotChecklistItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    category?: boolean;
    title?: boolean;
    description?: boolean;
    owner?: boolean;
    status?: boolean;
    evidenceUrl?: boolean;
    notes?: boolean;
    sortOrder?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["pilotChecklistItem"]>;
export type PilotChecklistItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    category?: boolean;
    title?: boolean;
    description?: boolean;
    owner?: boolean;
    status?: boolean;
    evidenceUrl?: boolean;
    notes?: boolean;
    sortOrder?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["pilotChecklistItem"]>;
export type PilotChecklistItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    category?: boolean;
    title?: boolean;
    description?: boolean;
    owner?: boolean;
    status?: boolean;
    evidenceUrl?: boolean;
    notes?: boolean;
    sortOrder?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["pilotChecklistItem"]>;
export type PilotChecklistItemSelectScalar = {
    id?: boolean;
    code?: boolean;
    category?: boolean;
    title?: boolean;
    description?: boolean;
    owner?: boolean;
    status?: boolean;
    evidenceUrl?: boolean;
    notes?: boolean;
    sortOrder?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PilotChecklistItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "category" | "title" | "description" | "owner" | "status" | "evidenceUrl" | "notes" | "sortOrder" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["pilotChecklistItem"]>;
export type $PilotChecklistItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PilotChecklistItem";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        category: string;
        title: string;
        description: string | null;
        owner: string | null;
        status: $Enums.PilotItemStatus;
        evidenceUrl: string | null;
        notes: string | null;
        sortOrder: number;
        completedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["pilotChecklistItem"]>;
    composites: {};
};
export type PilotChecklistItemGetPayload<S extends boolean | null | undefined | PilotChecklistItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PilotChecklistItemPayload, S>;
export type PilotChecklistItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PilotChecklistItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PilotChecklistItemCountAggregateInputType | true;
};
export interface PilotChecklistItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PilotChecklistItem'];
        meta: {
            name: 'PilotChecklistItem';
        };
    };
    findUnique<T extends PilotChecklistItemFindUniqueArgs>(args: Prisma.SelectSubset<T, PilotChecklistItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PilotChecklistItemClient<runtime.Types.Result.GetResult<Prisma.$PilotChecklistItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PilotChecklistItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PilotChecklistItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PilotChecklistItemClient<runtime.Types.Result.GetResult<Prisma.$PilotChecklistItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PilotChecklistItemFindFirstArgs>(args?: Prisma.SelectSubset<T, PilotChecklistItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__PilotChecklistItemClient<runtime.Types.Result.GetResult<Prisma.$PilotChecklistItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PilotChecklistItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PilotChecklistItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PilotChecklistItemClient<runtime.Types.Result.GetResult<Prisma.$PilotChecklistItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PilotChecklistItemFindManyArgs>(args?: Prisma.SelectSubset<T, PilotChecklistItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PilotChecklistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PilotChecklistItemCreateArgs>(args: Prisma.SelectSubset<T, PilotChecklistItemCreateArgs<ExtArgs>>): Prisma.Prisma__PilotChecklistItemClient<runtime.Types.Result.GetResult<Prisma.$PilotChecklistItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PilotChecklistItemCreateManyArgs>(args?: Prisma.SelectSubset<T, PilotChecklistItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PilotChecklistItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PilotChecklistItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PilotChecklistItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PilotChecklistItemDeleteArgs>(args: Prisma.SelectSubset<T, PilotChecklistItemDeleteArgs<ExtArgs>>): Prisma.Prisma__PilotChecklistItemClient<runtime.Types.Result.GetResult<Prisma.$PilotChecklistItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PilotChecklistItemUpdateArgs>(args: Prisma.SelectSubset<T, PilotChecklistItemUpdateArgs<ExtArgs>>): Prisma.Prisma__PilotChecklistItemClient<runtime.Types.Result.GetResult<Prisma.$PilotChecklistItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PilotChecklistItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, PilotChecklistItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PilotChecklistItemUpdateManyArgs>(args: Prisma.SelectSubset<T, PilotChecklistItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PilotChecklistItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PilotChecklistItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PilotChecklistItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PilotChecklistItemUpsertArgs>(args: Prisma.SelectSubset<T, PilotChecklistItemUpsertArgs<ExtArgs>>): Prisma.Prisma__PilotChecklistItemClient<runtime.Types.Result.GetResult<Prisma.$PilotChecklistItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PilotChecklistItemCountArgs>(args?: Prisma.Subset<T, PilotChecklistItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PilotChecklistItemCountAggregateOutputType> : number>;
    aggregate<T extends PilotChecklistItemAggregateArgs>(args: Prisma.Subset<T, PilotChecklistItemAggregateArgs>): Prisma.PrismaPromise<GetPilotChecklistItemAggregateType<T>>;
    groupBy<T extends PilotChecklistItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PilotChecklistItemGroupByArgs['orderBy'];
    } : {
        orderBy?: PilotChecklistItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PilotChecklistItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPilotChecklistItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PilotChecklistItemFieldRefs;
}
export interface Prisma__PilotChecklistItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PilotChecklistItemFieldRefs {
    readonly id: Prisma.FieldRef<"PilotChecklistItem", 'String'>;
    readonly code: Prisma.FieldRef<"PilotChecklistItem", 'String'>;
    readonly category: Prisma.FieldRef<"PilotChecklistItem", 'String'>;
    readonly title: Prisma.FieldRef<"PilotChecklistItem", 'String'>;
    readonly description: Prisma.FieldRef<"PilotChecklistItem", 'String'>;
    readonly owner: Prisma.FieldRef<"PilotChecklistItem", 'String'>;
    readonly status: Prisma.FieldRef<"PilotChecklistItem", 'PilotItemStatus'>;
    readonly evidenceUrl: Prisma.FieldRef<"PilotChecklistItem", 'String'>;
    readonly notes: Prisma.FieldRef<"PilotChecklistItem", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"PilotChecklistItem", 'Int'>;
    readonly completedAt: Prisma.FieldRef<"PilotChecklistItem", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"PilotChecklistItem", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PilotChecklistItem", 'DateTime'>;
}
export type PilotChecklistItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.PilotChecklistItemOmit<ExtArgs> | null;
    where: Prisma.PilotChecklistItemWhereUniqueInput;
};
export type PilotChecklistItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.PilotChecklistItemOmit<ExtArgs> | null;
    where: Prisma.PilotChecklistItemWhereUniqueInput;
};
export type PilotChecklistItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.PilotChecklistItemOmit<ExtArgs> | null;
    where?: Prisma.PilotChecklistItemWhereInput;
    orderBy?: Prisma.PilotChecklistItemOrderByWithRelationInput | Prisma.PilotChecklistItemOrderByWithRelationInput[];
    cursor?: Prisma.PilotChecklistItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PilotChecklistItemScalarFieldEnum | Prisma.PilotChecklistItemScalarFieldEnum[];
};
export type PilotChecklistItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.PilotChecklistItemOmit<ExtArgs> | null;
    where?: Prisma.PilotChecklistItemWhereInput;
    orderBy?: Prisma.PilotChecklistItemOrderByWithRelationInput | Prisma.PilotChecklistItemOrderByWithRelationInput[];
    cursor?: Prisma.PilotChecklistItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PilotChecklistItemScalarFieldEnum | Prisma.PilotChecklistItemScalarFieldEnum[];
};
export type PilotChecklistItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.PilotChecklistItemOmit<ExtArgs> | null;
    where?: Prisma.PilotChecklistItemWhereInput;
    orderBy?: Prisma.PilotChecklistItemOrderByWithRelationInput | Prisma.PilotChecklistItemOrderByWithRelationInput[];
    cursor?: Prisma.PilotChecklistItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PilotChecklistItemScalarFieldEnum | Prisma.PilotChecklistItemScalarFieldEnum[];
};
export type PilotChecklistItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.PilotChecklistItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PilotChecklistItemCreateInput, Prisma.PilotChecklistItemUncheckedCreateInput>;
};
export type PilotChecklistItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PilotChecklistItemCreateManyInput | Prisma.PilotChecklistItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PilotChecklistItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotChecklistItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PilotChecklistItemOmit<ExtArgs> | null;
    data: Prisma.PilotChecklistItemCreateManyInput | Prisma.PilotChecklistItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PilotChecklistItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.PilotChecklistItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PilotChecklistItemUpdateInput, Prisma.PilotChecklistItemUncheckedUpdateInput>;
    where: Prisma.PilotChecklistItemWhereUniqueInput;
};
export type PilotChecklistItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PilotChecklistItemUpdateManyMutationInput, Prisma.PilotChecklistItemUncheckedUpdateManyInput>;
    where?: Prisma.PilotChecklistItemWhereInput;
    limit?: number;
};
export type PilotChecklistItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotChecklistItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PilotChecklistItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PilotChecklistItemUpdateManyMutationInput, Prisma.PilotChecklistItemUncheckedUpdateManyInput>;
    where?: Prisma.PilotChecklistItemWhereInput;
    limit?: number;
};
export type PilotChecklistItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.PilotChecklistItemOmit<ExtArgs> | null;
    where: Prisma.PilotChecklistItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.PilotChecklistItemCreateInput, Prisma.PilotChecklistItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PilotChecklistItemUpdateInput, Prisma.PilotChecklistItemUncheckedUpdateInput>;
};
export type PilotChecklistItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.PilotChecklistItemOmit<ExtArgs> | null;
    where: Prisma.PilotChecklistItemWhereUniqueInput;
};
export type PilotChecklistItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PilotChecklistItemWhereInput;
    limit?: number;
};
export type PilotChecklistItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.PilotChecklistItemOmit<ExtArgs> | null;
};
