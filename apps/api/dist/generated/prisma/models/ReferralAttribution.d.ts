import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReferralAttributionModel = runtime.Types.Result.DefaultSelection<Prisma.$ReferralAttributionPayload>;
export type AggregateReferralAttribution = {
    _count: ReferralAttributionCountAggregateOutputType | null;
    _min: ReferralAttributionMinAggregateOutputType | null;
    _max: ReferralAttributionMaxAggregateOutputType | null;
};
export type ReferralAttributionMinAggregateOutputType = {
    id: string | null;
    referralCodeId: string | null;
    referredUserId: string | null;
    sessionId: string | null;
    source: string | null;
    attributedAt: Date | null;
    convertedAt: Date | null;
};
export type ReferralAttributionMaxAggregateOutputType = {
    id: string | null;
    referralCodeId: string | null;
    referredUserId: string | null;
    sessionId: string | null;
    source: string | null;
    attributedAt: Date | null;
    convertedAt: Date | null;
};
export type ReferralAttributionCountAggregateOutputType = {
    id: number;
    referralCodeId: number;
    referredUserId: number;
    sessionId: number;
    source: number;
    attributedAt: number;
    convertedAt: number;
    _all: number;
};
export type ReferralAttributionMinAggregateInputType = {
    id?: true;
    referralCodeId?: true;
    referredUserId?: true;
    sessionId?: true;
    source?: true;
    attributedAt?: true;
    convertedAt?: true;
};
export type ReferralAttributionMaxAggregateInputType = {
    id?: true;
    referralCodeId?: true;
    referredUserId?: true;
    sessionId?: true;
    source?: true;
    attributedAt?: true;
    convertedAt?: true;
};
export type ReferralAttributionCountAggregateInputType = {
    id?: true;
    referralCodeId?: true;
    referredUserId?: true;
    sessionId?: true;
    source?: true;
    attributedAt?: true;
    convertedAt?: true;
    _all?: true;
};
export type ReferralAttributionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReferralAttributionWhereInput;
    orderBy?: Prisma.ReferralAttributionOrderByWithRelationInput | Prisma.ReferralAttributionOrderByWithRelationInput[];
    cursor?: Prisma.ReferralAttributionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReferralAttributionCountAggregateInputType;
    _min?: ReferralAttributionMinAggregateInputType;
    _max?: ReferralAttributionMaxAggregateInputType;
};
export type GetReferralAttributionAggregateType<T extends ReferralAttributionAggregateArgs> = {
    [P in keyof T & keyof AggregateReferralAttribution]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReferralAttribution[P]> : Prisma.GetScalarType<T[P], AggregateReferralAttribution[P]>;
};
export type ReferralAttributionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReferralAttributionWhereInput;
    orderBy?: Prisma.ReferralAttributionOrderByWithAggregationInput | Prisma.ReferralAttributionOrderByWithAggregationInput[];
    by: Prisma.ReferralAttributionScalarFieldEnum[] | Prisma.ReferralAttributionScalarFieldEnum;
    having?: Prisma.ReferralAttributionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReferralAttributionCountAggregateInputType | true;
    _min?: ReferralAttributionMinAggregateInputType;
    _max?: ReferralAttributionMaxAggregateInputType;
};
export type ReferralAttributionGroupByOutputType = {
    id: string;
    referralCodeId: string;
    referredUserId: string | null;
    sessionId: string | null;
    source: string | null;
    attributedAt: Date;
    convertedAt: Date | null;
    _count: ReferralAttributionCountAggregateOutputType | null;
    _min: ReferralAttributionMinAggregateOutputType | null;
    _max: ReferralAttributionMaxAggregateOutputType | null;
};
export type GetReferralAttributionGroupByPayload<T extends ReferralAttributionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReferralAttributionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReferralAttributionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReferralAttributionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReferralAttributionGroupByOutputType[P]>;
}>>;
export type ReferralAttributionWhereInput = {
    AND?: Prisma.ReferralAttributionWhereInput | Prisma.ReferralAttributionWhereInput[];
    OR?: Prisma.ReferralAttributionWhereInput[];
    NOT?: Prisma.ReferralAttributionWhereInput | Prisma.ReferralAttributionWhereInput[];
    id?: Prisma.StringFilter<"ReferralAttribution"> | string;
    referralCodeId?: Prisma.StringFilter<"ReferralAttribution"> | string;
    referredUserId?: Prisma.StringNullableFilter<"ReferralAttribution"> | string | null;
    sessionId?: Prisma.StringNullableFilter<"ReferralAttribution"> | string | null;
    source?: Prisma.StringNullableFilter<"ReferralAttribution"> | string | null;
    attributedAt?: Prisma.DateTimeFilter<"ReferralAttribution"> | Date | string;
    convertedAt?: Prisma.DateTimeNullableFilter<"ReferralAttribution"> | Date | string | null;
};
export type ReferralAttributionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    referralCodeId?: Prisma.SortOrder;
    referredUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    sessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    attributedAt?: Prisma.SortOrder;
    convertedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type ReferralAttributionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    referredUserId?: string;
    AND?: Prisma.ReferralAttributionWhereInput | Prisma.ReferralAttributionWhereInput[];
    OR?: Prisma.ReferralAttributionWhereInput[];
    NOT?: Prisma.ReferralAttributionWhereInput | Prisma.ReferralAttributionWhereInput[];
    referralCodeId?: Prisma.StringFilter<"ReferralAttribution"> | string;
    sessionId?: Prisma.StringNullableFilter<"ReferralAttribution"> | string | null;
    source?: Prisma.StringNullableFilter<"ReferralAttribution"> | string | null;
    attributedAt?: Prisma.DateTimeFilter<"ReferralAttribution"> | Date | string;
    convertedAt?: Prisma.DateTimeNullableFilter<"ReferralAttribution"> | Date | string | null;
}, "id" | "referredUserId">;
export type ReferralAttributionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    referralCodeId?: Prisma.SortOrder;
    referredUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    sessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    attributedAt?: Prisma.SortOrder;
    convertedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ReferralAttributionCountOrderByAggregateInput;
    _max?: Prisma.ReferralAttributionMaxOrderByAggregateInput;
    _min?: Prisma.ReferralAttributionMinOrderByAggregateInput;
};
export type ReferralAttributionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReferralAttributionScalarWhereWithAggregatesInput | Prisma.ReferralAttributionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReferralAttributionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReferralAttributionScalarWhereWithAggregatesInput | Prisma.ReferralAttributionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ReferralAttribution"> | string;
    referralCodeId?: Prisma.StringWithAggregatesFilter<"ReferralAttribution"> | string;
    referredUserId?: Prisma.StringNullableWithAggregatesFilter<"ReferralAttribution"> | string | null;
    sessionId?: Prisma.StringNullableWithAggregatesFilter<"ReferralAttribution"> | string | null;
    source?: Prisma.StringNullableWithAggregatesFilter<"ReferralAttribution"> | string | null;
    attributedAt?: Prisma.DateTimeWithAggregatesFilter<"ReferralAttribution"> | Date | string;
    convertedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ReferralAttribution"> | Date | string | null;
};
export type ReferralAttributionCreateInput = {
    id?: string;
    referralCodeId: string;
    referredUserId?: string | null;
    sessionId?: string | null;
    source?: string | null;
    attributedAt?: Date | string;
    convertedAt?: Date | string | null;
};
export type ReferralAttributionUncheckedCreateInput = {
    id?: string;
    referralCodeId: string;
    referredUserId?: string | null;
    sessionId?: string | null;
    source?: string | null;
    attributedAt?: Date | string;
    convertedAt?: Date | string | null;
};
export type ReferralAttributionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    referralCodeId?: Prisma.StringFieldUpdateOperationsInput | string;
    referredUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attributedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    convertedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ReferralAttributionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    referralCodeId?: Prisma.StringFieldUpdateOperationsInput | string;
    referredUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attributedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    convertedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ReferralAttributionCreateManyInput = {
    id?: string;
    referralCodeId: string;
    referredUserId?: string | null;
    sessionId?: string | null;
    source?: string | null;
    attributedAt?: Date | string;
    convertedAt?: Date | string | null;
};
export type ReferralAttributionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    referralCodeId?: Prisma.StringFieldUpdateOperationsInput | string;
    referredUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attributedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    convertedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ReferralAttributionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    referralCodeId?: Prisma.StringFieldUpdateOperationsInput | string;
    referredUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attributedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    convertedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ReferralAttributionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    referralCodeId?: Prisma.SortOrder;
    referredUserId?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    attributedAt?: Prisma.SortOrder;
    convertedAt?: Prisma.SortOrder;
};
export type ReferralAttributionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    referralCodeId?: Prisma.SortOrder;
    referredUserId?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    attributedAt?: Prisma.SortOrder;
    convertedAt?: Prisma.SortOrder;
};
export type ReferralAttributionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    referralCodeId?: Prisma.SortOrder;
    referredUserId?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    attributedAt?: Prisma.SortOrder;
    convertedAt?: Prisma.SortOrder;
};
export type ReferralAttributionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    referralCodeId?: boolean;
    referredUserId?: boolean;
    sessionId?: boolean;
    source?: boolean;
    attributedAt?: boolean;
    convertedAt?: boolean;
}, ExtArgs["result"]["referralAttribution"]>;
export type ReferralAttributionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    referralCodeId?: boolean;
    referredUserId?: boolean;
    sessionId?: boolean;
    source?: boolean;
    attributedAt?: boolean;
    convertedAt?: boolean;
}, ExtArgs["result"]["referralAttribution"]>;
export type ReferralAttributionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    referralCodeId?: boolean;
    referredUserId?: boolean;
    sessionId?: boolean;
    source?: boolean;
    attributedAt?: boolean;
    convertedAt?: boolean;
}, ExtArgs["result"]["referralAttribution"]>;
export type ReferralAttributionSelectScalar = {
    id?: boolean;
    referralCodeId?: boolean;
    referredUserId?: boolean;
    sessionId?: boolean;
    source?: boolean;
    attributedAt?: boolean;
    convertedAt?: boolean;
};
export type ReferralAttributionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "referralCodeId" | "referredUserId" | "sessionId" | "source" | "attributedAt" | "convertedAt", ExtArgs["result"]["referralAttribution"]>;
export type $ReferralAttributionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ReferralAttribution";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        referralCodeId: string;
        referredUserId: string | null;
        sessionId: string | null;
        source: string | null;
        attributedAt: Date;
        convertedAt: Date | null;
    }, ExtArgs["result"]["referralAttribution"]>;
    composites: {};
};
export type ReferralAttributionGetPayload<S extends boolean | null | undefined | ReferralAttributionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReferralAttributionPayload, S>;
export type ReferralAttributionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReferralAttributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReferralAttributionCountAggregateInputType | true;
};
export interface ReferralAttributionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ReferralAttribution'];
        meta: {
            name: 'ReferralAttribution';
        };
    };
    findUnique<T extends ReferralAttributionFindUniqueArgs>(args: Prisma.SelectSubset<T, ReferralAttributionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReferralAttributionClient<runtime.Types.Result.GetResult<Prisma.$ReferralAttributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReferralAttributionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReferralAttributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReferralAttributionClient<runtime.Types.Result.GetResult<Prisma.$ReferralAttributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReferralAttributionFindFirstArgs>(args?: Prisma.SelectSubset<T, ReferralAttributionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReferralAttributionClient<runtime.Types.Result.GetResult<Prisma.$ReferralAttributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReferralAttributionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReferralAttributionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReferralAttributionClient<runtime.Types.Result.GetResult<Prisma.$ReferralAttributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReferralAttributionFindManyArgs>(args?: Prisma.SelectSubset<T, ReferralAttributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReferralAttributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReferralAttributionCreateArgs>(args: Prisma.SelectSubset<T, ReferralAttributionCreateArgs<ExtArgs>>): Prisma.Prisma__ReferralAttributionClient<runtime.Types.Result.GetResult<Prisma.$ReferralAttributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReferralAttributionCreateManyArgs>(args?: Prisma.SelectSubset<T, ReferralAttributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ReferralAttributionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReferralAttributionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReferralAttributionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ReferralAttributionDeleteArgs>(args: Prisma.SelectSubset<T, ReferralAttributionDeleteArgs<ExtArgs>>): Prisma.Prisma__ReferralAttributionClient<runtime.Types.Result.GetResult<Prisma.$ReferralAttributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReferralAttributionUpdateArgs>(args: Prisma.SelectSubset<T, ReferralAttributionUpdateArgs<ExtArgs>>): Prisma.Prisma__ReferralAttributionClient<runtime.Types.Result.GetResult<Prisma.$ReferralAttributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReferralAttributionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReferralAttributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReferralAttributionUpdateManyArgs>(args: Prisma.SelectSubset<T, ReferralAttributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ReferralAttributionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReferralAttributionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReferralAttributionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ReferralAttributionUpsertArgs>(args: Prisma.SelectSubset<T, ReferralAttributionUpsertArgs<ExtArgs>>): Prisma.Prisma__ReferralAttributionClient<runtime.Types.Result.GetResult<Prisma.$ReferralAttributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReferralAttributionCountArgs>(args?: Prisma.Subset<T, ReferralAttributionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReferralAttributionCountAggregateOutputType> : number>;
    aggregate<T extends ReferralAttributionAggregateArgs>(args: Prisma.Subset<T, ReferralAttributionAggregateArgs>): Prisma.PrismaPromise<GetReferralAttributionAggregateType<T>>;
    groupBy<T extends ReferralAttributionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReferralAttributionGroupByArgs['orderBy'];
    } : {
        orderBy?: ReferralAttributionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReferralAttributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralAttributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReferralAttributionFieldRefs;
}
export interface Prisma__ReferralAttributionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReferralAttributionFieldRefs {
    readonly id: Prisma.FieldRef<"ReferralAttribution", 'String'>;
    readonly referralCodeId: Prisma.FieldRef<"ReferralAttribution", 'String'>;
    readonly referredUserId: Prisma.FieldRef<"ReferralAttribution", 'String'>;
    readonly sessionId: Prisma.FieldRef<"ReferralAttribution", 'String'>;
    readonly source: Prisma.FieldRef<"ReferralAttribution", 'String'>;
    readonly attributedAt: Prisma.FieldRef<"ReferralAttribution", 'DateTime'>;
    readonly convertedAt: Prisma.FieldRef<"ReferralAttribution", 'DateTime'>;
}
export type ReferralAttributionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralAttributionSelect<ExtArgs> | null;
    omit?: Prisma.ReferralAttributionOmit<ExtArgs> | null;
    where: Prisma.ReferralAttributionWhereUniqueInput;
};
export type ReferralAttributionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralAttributionSelect<ExtArgs> | null;
    omit?: Prisma.ReferralAttributionOmit<ExtArgs> | null;
    where: Prisma.ReferralAttributionWhereUniqueInput;
};
export type ReferralAttributionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralAttributionSelect<ExtArgs> | null;
    omit?: Prisma.ReferralAttributionOmit<ExtArgs> | null;
    where?: Prisma.ReferralAttributionWhereInput;
    orderBy?: Prisma.ReferralAttributionOrderByWithRelationInput | Prisma.ReferralAttributionOrderByWithRelationInput[];
    cursor?: Prisma.ReferralAttributionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReferralAttributionScalarFieldEnum | Prisma.ReferralAttributionScalarFieldEnum[];
};
export type ReferralAttributionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralAttributionSelect<ExtArgs> | null;
    omit?: Prisma.ReferralAttributionOmit<ExtArgs> | null;
    where?: Prisma.ReferralAttributionWhereInput;
    orderBy?: Prisma.ReferralAttributionOrderByWithRelationInput | Prisma.ReferralAttributionOrderByWithRelationInput[];
    cursor?: Prisma.ReferralAttributionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReferralAttributionScalarFieldEnum | Prisma.ReferralAttributionScalarFieldEnum[];
};
export type ReferralAttributionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralAttributionSelect<ExtArgs> | null;
    omit?: Prisma.ReferralAttributionOmit<ExtArgs> | null;
    where?: Prisma.ReferralAttributionWhereInput;
    orderBy?: Prisma.ReferralAttributionOrderByWithRelationInput | Prisma.ReferralAttributionOrderByWithRelationInput[];
    cursor?: Prisma.ReferralAttributionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReferralAttributionScalarFieldEnum | Prisma.ReferralAttributionScalarFieldEnum[];
};
export type ReferralAttributionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralAttributionSelect<ExtArgs> | null;
    omit?: Prisma.ReferralAttributionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReferralAttributionCreateInput, Prisma.ReferralAttributionUncheckedCreateInput>;
};
export type ReferralAttributionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReferralAttributionCreateManyInput | Prisma.ReferralAttributionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReferralAttributionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralAttributionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReferralAttributionOmit<ExtArgs> | null;
    data: Prisma.ReferralAttributionCreateManyInput | Prisma.ReferralAttributionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReferralAttributionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralAttributionSelect<ExtArgs> | null;
    omit?: Prisma.ReferralAttributionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReferralAttributionUpdateInput, Prisma.ReferralAttributionUncheckedUpdateInput>;
    where: Prisma.ReferralAttributionWhereUniqueInput;
};
export type ReferralAttributionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReferralAttributionUpdateManyMutationInput, Prisma.ReferralAttributionUncheckedUpdateManyInput>;
    where?: Prisma.ReferralAttributionWhereInput;
    limit?: number;
};
export type ReferralAttributionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralAttributionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReferralAttributionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReferralAttributionUpdateManyMutationInput, Prisma.ReferralAttributionUncheckedUpdateManyInput>;
    where?: Prisma.ReferralAttributionWhereInput;
    limit?: number;
};
export type ReferralAttributionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralAttributionSelect<ExtArgs> | null;
    omit?: Prisma.ReferralAttributionOmit<ExtArgs> | null;
    where: Prisma.ReferralAttributionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReferralAttributionCreateInput, Prisma.ReferralAttributionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReferralAttributionUpdateInput, Prisma.ReferralAttributionUncheckedUpdateInput>;
};
export type ReferralAttributionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralAttributionSelect<ExtArgs> | null;
    omit?: Prisma.ReferralAttributionOmit<ExtArgs> | null;
    where: Prisma.ReferralAttributionWhereUniqueInput;
};
export type ReferralAttributionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReferralAttributionWhereInput;
    limit?: number;
};
export type ReferralAttributionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralAttributionSelect<ExtArgs> | null;
    omit?: Prisma.ReferralAttributionOmit<ExtArgs> | null;
};
