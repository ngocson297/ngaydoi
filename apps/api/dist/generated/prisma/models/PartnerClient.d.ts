import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PartnerClientModel = runtime.Types.Result.DefaultSelection<Prisma.$PartnerClientPayload>;
export type AggregatePartnerClient = {
    _count: PartnerClientCountAggregateOutputType | null;
    _min: PartnerClientMinAggregateOutputType | null;
    _max: PartnerClientMaxAggregateOutputType | null;
};
export type PartnerClientMinAggregateOutputType = {
    id: string | null;
    partnerId: string | null;
    customerId: string | null;
    weddingId: string | null;
    source: string | null;
    externalRef: string | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PartnerClientMaxAggregateOutputType = {
    id: string | null;
    partnerId: string | null;
    customerId: string | null;
    weddingId: string | null;
    source: string | null;
    externalRef: string | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PartnerClientCountAggregateOutputType = {
    id: number;
    partnerId: number;
    customerId: number;
    weddingId: number;
    source: number;
    externalRef: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PartnerClientMinAggregateInputType = {
    id?: true;
    partnerId?: true;
    customerId?: true;
    weddingId?: true;
    source?: true;
    externalRef?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PartnerClientMaxAggregateInputType = {
    id?: true;
    partnerId?: true;
    customerId?: true;
    weddingId?: true;
    source?: true;
    externalRef?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PartnerClientCountAggregateInputType = {
    id?: true;
    partnerId?: true;
    customerId?: true;
    weddingId?: true;
    source?: true;
    externalRef?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PartnerClientAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartnerClientWhereInput;
    orderBy?: Prisma.PartnerClientOrderByWithRelationInput | Prisma.PartnerClientOrderByWithRelationInput[];
    cursor?: Prisma.PartnerClientWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PartnerClientCountAggregateInputType;
    _min?: PartnerClientMinAggregateInputType;
    _max?: PartnerClientMaxAggregateInputType;
};
export type GetPartnerClientAggregateType<T extends PartnerClientAggregateArgs> = {
    [P in keyof T & keyof AggregatePartnerClient]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePartnerClient[P]> : Prisma.GetScalarType<T[P], AggregatePartnerClient[P]>;
};
export type PartnerClientGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartnerClientWhereInput;
    orderBy?: Prisma.PartnerClientOrderByWithAggregationInput | Prisma.PartnerClientOrderByWithAggregationInput[];
    by: Prisma.PartnerClientScalarFieldEnum[] | Prisma.PartnerClientScalarFieldEnum;
    having?: Prisma.PartnerClientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PartnerClientCountAggregateInputType | true;
    _min?: PartnerClientMinAggregateInputType;
    _max?: PartnerClientMaxAggregateInputType;
};
export type PartnerClientGroupByOutputType = {
    id: string;
    partnerId: string;
    customerId: string;
    weddingId: string | null;
    source: string;
    externalRef: string | null;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PartnerClientCountAggregateOutputType | null;
    _min: PartnerClientMinAggregateOutputType | null;
    _max: PartnerClientMaxAggregateOutputType | null;
};
export type GetPartnerClientGroupByPayload<T extends PartnerClientGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PartnerClientGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PartnerClientGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PartnerClientGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PartnerClientGroupByOutputType[P]>;
}>>;
export type PartnerClientWhereInput = {
    AND?: Prisma.PartnerClientWhereInput | Prisma.PartnerClientWhereInput[];
    OR?: Prisma.PartnerClientWhereInput[];
    NOT?: Prisma.PartnerClientWhereInput | Prisma.PartnerClientWhereInput[];
    id?: Prisma.StringFilter<"PartnerClient"> | string;
    partnerId?: Prisma.StringFilter<"PartnerClient"> | string;
    customerId?: Prisma.StringFilter<"PartnerClient"> | string;
    weddingId?: Prisma.StringNullableFilter<"PartnerClient"> | string | null;
    source?: Prisma.StringFilter<"PartnerClient"> | string;
    externalRef?: Prisma.StringNullableFilter<"PartnerClient"> | string | null;
    notes?: Prisma.StringNullableFilter<"PartnerClient"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PartnerClient"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PartnerClient"> | Date | string;
};
export type PartnerClientOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrder;
    externalRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PartnerClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    partnerId_customerId_weddingId?: Prisma.PartnerClientPartnerIdCustomerIdWeddingIdCompoundUniqueInput;
    AND?: Prisma.PartnerClientWhereInput | Prisma.PartnerClientWhereInput[];
    OR?: Prisma.PartnerClientWhereInput[];
    NOT?: Prisma.PartnerClientWhereInput | Prisma.PartnerClientWhereInput[];
    partnerId?: Prisma.StringFilter<"PartnerClient"> | string;
    customerId?: Prisma.StringFilter<"PartnerClient"> | string;
    weddingId?: Prisma.StringNullableFilter<"PartnerClient"> | string | null;
    source?: Prisma.StringFilter<"PartnerClient"> | string;
    externalRef?: Prisma.StringNullableFilter<"PartnerClient"> | string | null;
    notes?: Prisma.StringNullableFilter<"PartnerClient"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PartnerClient"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PartnerClient"> | Date | string;
}, "id" | "partnerId_customerId_weddingId">;
export type PartnerClientOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrder;
    externalRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PartnerClientCountOrderByAggregateInput;
    _max?: Prisma.PartnerClientMaxOrderByAggregateInput;
    _min?: Prisma.PartnerClientMinOrderByAggregateInput;
};
export type PartnerClientScalarWhereWithAggregatesInput = {
    AND?: Prisma.PartnerClientScalarWhereWithAggregatesInput | Prisma.PartnerClientScalarWhereWithAggregatesInput[];
    OR?: Prisma.PartnerClientScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PartnerClientScalarWhereWithAggregatesInput | Prisma.PartnerClientScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PartnerClient"> | string;
    partnerId?: Prisma.StringWithAggregatesFilter<"PartnerClient"> | string;
    customerId?: Prisma.StringWithAggregatesFilter<"PartnerClient"> | string;
    weddingId?: Prisma.StringNullableWithAggregatesFilter<"PartnerClient"> | string | null;
    source?: Prisma.StringWithAggregatesFilter<"PartnerClient"> | string;
    externalRef?: Prisma.StringNullableWithAggregatesFilter<"PartnerClient"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"PartnerClient"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PartnerClient"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PartnerClient"> | Date | string;
};
export type PartnerClientCreateInput = {
    id?: string;
    partnerId: string;
    customerId: string;
    weddingId?: string | null;
    source?: string;
    externalRef?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PartnerClientUncheckedCreateInput = {
    id?: string;
    partnerId: string;
    customerId: string;
    weddingId?: string | null;
    source?: string;
    externalRef?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PartnerClientUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerClientUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerClientCreateManyInput = {
    id?: string;
    partnerId: string;
    customerId: string;
    weddingId?: string | null;
    source?: string;
    externalRef?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PartnerClientUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerClientUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    externalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerClientPartnerIdCustomerIdWeddingIdCompoundUniqueInput = {
    partnerId: string;
    customerId: string;
    weddingId: string;
};
export type PartnerClientCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    externalRef?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PartnerClientMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    externalRef?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PartnerClientMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    externalRef?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PartnerClientSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partnerId?: boolean;
    customerId?: boolean;
    weddingId?: boolean;
    source?: boolean;
    externalRef?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["partnerClient"]>;
export type PartnerClientSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partnerId?: boolean;
    customerId?: boolean;
    weddingId?: boolean;
    source?: boolean;
    externalRef?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["partnerClient"]>;
export type PartnerClientSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partnerId?: boolean;
    customerId?: boolean;
    weddingId?: boolean;
    source?: boolean;
    externalRef?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["partnerClient"]>;
export type PartnerClientSelectScalar = {
    id?: boolean;
    partnerId?: boolean;
    customerId?: boolean;
    weddingId?: boolean;
    source?: boolean;
    externalRef?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PartnerClientOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "partnerId" | "customerId" | "weddingId" | "source" | "externalRef" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["partnerClient"]>;
export type $PartnerClientPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PartnerClient";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        partnerId: string;
        customerId: string;
        weddingId: string | null;
        source: string;
        externalRef: string | null;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["partnerClient"]>;
    composites: {};
};
export type PartnerClientGetPayload<S extends boolean | null | undefined | PartnerClientDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PartnerClientPayload, S>;
export type PartnerClientCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PartnerClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PartnerClientCountAggregateInputType | true;
};
export interface PartnerClientDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PartnerClient'];
        meta: {
            name: 'PartnerClient';
        };
    };
    findUnique<T extends PartnerClientFindUniqueArgs>(args: Prisma.SelectSubset<T, PartnerClientFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PartnerClientClient<runtime.Types.Result.GetResult<Prisma.$PartnerClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PartnerClientFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PartnerClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartnerClientClient<runtime.Types.Result.GetResult<Prisma.$PartnerClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PartnerClientFindFirstArgs>(args?: Prisma.SelectSubset<T, PartnerClientFindFirstArgs<ExtArgs>>): Prisma.Prisma__PartnerClientClient<runtime.Types.Result.GetResult<Prisma.$PartnerClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PartnerClientFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PartnerClientFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartnerClientClient<runtime.Types.Result.GetResult<Prisma.$PartnerClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PartnerClientFindManyArgs>(args?: Prisma.SelectSubset<T, PartnerClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PartnerClientCreateArgs>(args: Prisma.SelectSubset<T, PartnerClientCreateArgs<ExtArgs>>): Prisma.Prisma__PartnerClientClient<runtime.Types.Result.GetResult<Prisma.$PartnerClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PartnerClientCreateManyArgs>(args?: Prisma.SelectSubset<T, PartnerClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PartnerClientCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PartnerClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PartnerClientDeleteArgs>(args: Prisma.SelectSubset<T, PartnerClientDeleteArgs<ExtArgs>>): Prisma.Prisma__PartnerClientClient<runtime.Types.Result.GetResult<Prisma.$PartnerClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PartnerClientUpdateArgs>(args: Prisma.SelectSubset<T, PartnerClientUpdateArgs<ExtArgs>>): Prisma.Prisma__PartnerClientClient<runtime.Types.Result.GetResult<Prisma.$PartnerClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PartnerClientDeleteManyArgs>(args?: Prisma.SelectSubset<T, PartnerClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PartnerClientUpdateManyArgs>(args: Prisma.SelectSubset<T, PartnerClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PartnerClientUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PartnerClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PartnerClientUpsertArgs>(args: Prisma.SelectSubset<T, PartnerClientUpsertArgs<ExtArgs>>): Prisma.Prisma__PartnerClientClient<runtime.Types.Result.GetResult<Prisma.$PartnerClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PartnerClientCountArgs>(args?: Prisma.Subset<T, PartnerClientCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PartnerClientCountAggregateOutputType> : number>;
    aggregate<T extends PartnerClientAggregateArgs>(args: Prisma.Subset<T, PartnerClientAggregateArgs>): Prisma.PrismaPromise<GetPartnerClientAggregateType<T>>;
    groupBy<T extends PartnerClientGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PartnerClientGroupByArgs['orderBy'];
    } : {
        orderBy?: PartnerClientGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PartnerClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PartnerClientFieldRefs;
}
export interface Prisma__PartnerClientClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PartnerClientFieldRefs {
    readonly id: Prisma.FieldRef<"PartnerClient", 'String'>;
    readonly partnerId: Prisma.FieldRef<"PartnerClient", 'String'>;
    readonly customerId: Prisma.FieldRef<"PartnerClient", 'String'>;
    readonly weddingId: Prisma.FieldRef<"PartnerClient", 'String'>;
    readonly source: Prisma.FieldRef<"PartnerClient", 'String'>;
    readonly externalRef: Prisma.FieldRef<"PartnerClient", 'String'>;
    readonly notes: Prisma.FieldRef<"PartnerClient", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PartnerClient", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PartnerClient", 'DateTime'>;
}
export type PartnerClientFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerClientSelect<ExtArgs> | null;
    omit?: Prisma.PartnerClientOmit<ExtArgs> | null;
    where: Prisma.PartnerClientWhereUniqueInput;
};
export type PartnerClientFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerClientSelect<ExtArgs> | null;
    omit?: Prisma.PartnerClientOmit<ExtArgs> | null;
    where: Prisma.PartnerClientWhereUniqueInput;
};
export type PartnerClientFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerClientSelect<ExtArgs> | null;
    omit?: Prisma.PartnerClientOmit<ExtArgs> | null;
    where?: Prisma.PartnerClientWhereInput;
    orderBy?: Prisma.PartnerClientOrderByWithRelationInput | Prisma.PartnerClientOrderByWithRelationInput[];
    cursor?: Prisma.PartnerClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartnerClientScalarFieldEnum | Prisma.PartnerClientScalarFieldEnum[];
};
export type PartnerClientFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerClientSelect<ExtArgs> | null;
    omit?: Prisma.PartnerClientOmit<ExtArgs> | null;
    where?: Prisma.PartnerClientWhereInput;
    orderBy?: Prisma.PartnerClientOrderByWithRelationInput | Prisma.PartnerClientOrderByWithRelationInput[];
    cursor?: Prisma.PartnerClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartnerClientScalarFieldEnum | Prisma.PartnerClientScalarFieldEnum[];
};
export type PartnerClientFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerClientSelect<ExtArgs> | null;
    omit?: Prisma.PartnerClientOmit<ExtArgs> | null;
    where?: Prisma.PartnerClientWhereInput;
    orderBy?: Prisma.PartnerClientOrderByWithRelationInput | Prisma.PartnerClientOrderByWithRelationInput[];
    cursor?: Prisma.PartnerClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartnerClientScalarFieldEnum | Prisma.PartnerClientScalarFieldEnum[];
};
export type PartnerClientCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerClientSelect<ExtArgs> | null;
    omit?: Prisma.PartnerClientOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartnerClientCreateInput, Prisma.PartnerClientUncheckedCreateInput>;
};
export type PartnerClientCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PartnerClientCreateManyInput | Prisma.PartnerClientCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PartnerClientCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerClientSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PartnerClientOmit<ExtArgs> | null;
    data: Prisma.PartnerClientCreateManyInput | Prisma.PartnerClientCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PartnerClientUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerClientSelect<ExtArgs> | null;
    omit?: Prisma.PartnerClientOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartnerClientUpdateInput, Prisma.PartnerClientUncheckedUpdateInput>;
    where: Prisma.PartnerClientWhereUniqueInput;
};
export type PartnerClientUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PartnerClientUpdateManyMutationInput, Prisma.PartnerClientUncheckedUpdateManyInput>;
    where?: Prisma.PartnerClientWhereInput;
    limit?: number;
};
export type PartnerClientUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerClientSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PartnerClientOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartnerClientUpdateManyMutationInput, Prisma.PartnerClientUncheckedUpdateManyInput>;
    where?: Prisma.PartnerClientWhereInput;
    limit?: number;
};
export type PartnerClientUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerClientSelect<ExtArgs> | null;
    omit?: Prisma.PartnerClientOmit<ExtArgs> | null;
    where: Prisma.PartnerClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PartnerClientCreateInput, Prisma.PartnerClientUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PartnerClientUpdateInput, Prisma.PartnerClientUncheckedUpdateInput>;
};
export type PartnerClientDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerClientSelect<ExtArgs> | null;
    omit?: Prisma.PartnerClientOmit<ExtArgs> | null;
    where: Prisma.PartnerClientWhereUniqueInput;
};
export type PartnerClientDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartnerClientWhereInput;
    limit?: number;
};
export type PartnerClientDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerClientSelect<ExtArgs> | null;
    omit?: Prisma.PartnerClientOmit<ExtArgs> | null;
};
