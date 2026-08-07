import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GrowthEventModel = runtime.Types.Result.DefaultSelection<Prisma.$GrowthEventPayload>;
export type AggregateGrowthEvent = {
    _count: GrowthEventCountAggregateOutputType | null;
    _min: GrowthEventMinAggregateOutputType | null;
    _max: GrowthEventMaxAggregateOutputType | null;
};
export type GrowthEventMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    weddingId: string | null;
    sessionId: string | null;
    eventName: string | null;
    source: string | null;
    campaign: string | null;
    occurredAt: Date | null;
};
export type GrowthEventMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    weddingId: string | null;
    sessionId: string | null;
    eventName: string | null;
    source: string | null;
    campaign: string | null;
    occurredAt: Date | null;
};
export type GrowthEventCountAggregateOutputType = {
    id: number;
    userId: number;
    weddingId: number;
    sessionId: number;
    eventName: number;
    source: number;
    campaign: number;
    properties: number;
    occurredAt: number;
    _all: number;
};
export type GrowthEventMinAggregateInputType = {
    id?: true;
    userId?: true;
    weddingId?: true;
    sessionId?: true;
    eventName?: true;
    source?: true;
    campaign?: true;
    occurredAt?: true;
};
export type GrowthEventMaxAggregateInputType = {
    id?: true;
    userId?: true;
    weddingId?: true;
    sessionId?: true;
    eventName?: true;
    source?: true;
    campaign?: true;
    occurredAt?: true;
};
export type GrowthEventCountAggregateInputType = {
    id?: true;
    userId?: true;
    weddingId?: true;
    sessionId?: true;
    eventName?: true;
    source?: true;
    campaign?: true;
    properties?: true;
    occurredAt?: true;
    _all?: true;
};
export type GrowthEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GrowthEventWhereInput;
    orderBy?: Prisma.GrowthEventOrderByWithRelationInput | Prisma.GrowthEventOrderByWithRelationInput[];
    cursor?: Prisma.GrowthEventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GrowthEventCountAggregateInputType;
    _min?: GrowthEventMinAggregateInputType;
    _max?: GrowthEventMaxAggregateInputType;
};
export type GetGrowthEventAggregateType<T extends GrowthEventAggregateArgs> = {
    [P in keyof T & keyof AggregateGrowthEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGrowthEvent[P]> : Prisma.GetScalarType<T[P], AggregateGrowthEvent[P]>;
};
export type GrowthEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GrowthEventWhereInput;
    orderBy?: Prisma.GrowthEventOrderByWithAggregationInput | Prisma.GrowthEventOrderByWithAggregationInput[];
    by: Prisma.GrowthEventScalarFieldEnum[] | Prisma.GrowthEventScalarFieldEnum;
    having?: Prisma.GrowthEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GrowthEventCountAggregateInputType | true;
    _min?: GrowthEventMinAggregateInputType;
    _max?: GrowthEventMaxAggregateInputType;
};
export type GrowthEventGroupByOutputType = {
    id: string;
    userId: string | null;
    weddingId: string | null;
    sessionId: string | null;
    eventName: string;
    source: string | null;
    campaign: string | null;
    properties: runtime.JsonValue | null;
    occurredAt: Date;
    _count: GrowthEventCountAggregateOutputType | null;
    _min: GrowthEventMinAggregateOutputType | null;
    _max: GrowthEventMaxAggregateOutputType | null;
};
export type GetGrowthEventGroupByPayload<T extends GrowthEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GrowthEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GrowthEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GrowthEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GrowthEventGroupByOutputType[P]>;
}>>;
export type GrowthEventWhereInput = {
    AND?: Prisma.GrowthEventWhereInput | Prisma.GrowthEventWhereInput[];
    OR?: Prisma.GrowthEventWhereInput[];
    NOT?: Prisma.GrowthEventWhereInput | Prisma.GrowthEventWhereInput[];
    id?: Prisma.StringFilter<"GrowthEvent"> | string;
    userId?: Prisma.StringNullableFilter<"GrowthEvent"> | string | null;
    weddingId?: Prisma.StringNullableFilter<"GrowthEvent"> | string | null;
    sessionId?: Prisma.StringNullableFilter<"GrowthEvent"> | string | null;
    eventName?: Prisma.StringFilter<"GrowthEvent"> | string;
    source?: Prisma.StringNullableFilter<"GrowthEvent"> | string | null;
    campaign?: Prisma.StringNullableFilter<"GrowthEvent"> | string | null;
    properties?: Prisma.JsonNullableFilter<"GrowthEvent">;
    occurredAt?: Prisma.DateTimeFilter<"GrowthEvent"> | Date | string;
};
export type GrowthEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    weddingId?: Prisma.SortOrderInput | Prisma.SortOrder;
    sessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    campaign?: Prisma.SortOrderInput | Prisma.SortOrder;
    properties?: Prisma.SortOrderInput | Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
};
export type GrowthEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.GrowthEventWhereInput | Prisma.GrowthEventWhereInput[];
    OR?: Prisma.GrowthEventWhereInput[];
    NOT?: Prisma.GrowthEventWhereInput | Prisma.GrowthEventWhereInput[];
    userId?: Prisma.StringNullableFilter<"GrowthEvent"> | string | null;
    weddingId?: Prisma.StringNullableFilter<"GrowthEvent"> | string | null;
    sessionId?: Prisma.StringNullableFilter<"GrowthEvent"> | string | null;
    eventName?: Prisma.StringFilter<"GrowthEvent"> | string;
    source?: Prisma.StringNullableFilter<"GrowthEvent"> | string | null;
    campaign?: Prisma.StringNullableFilter<"GrowthEvent"> | string | null;
    properties?: Prisma.JsonNullableFilter<"GrowthEvent">;
    occurredAt?: Prisma.DateTimeFilter<"GrowthEvent"> | Date | string;
}, "id">;
export type GrowthEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    weddingId?: Prisma.SortOrderInput | Prisma.SortOrder;
    sessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    campaign?: Prisma.SortOrderInput | Prisma.SortOrder;
    properties?: Prisma.SortOrderInput | Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    _count?: Prisma.GrowthEventCountOrderByAggregateInput;
    _max?: Prisma.GrowthEventMaxOrderByAggregateInput;
    _min?: Prisma.GrowthEventMinOrderByAggregateInput;
};
export type GrowthEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.GrowthEventScalarWhereWithAggregatesInput | Prisma.GrowthEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.GrowthEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GrowthEventScalarWhereWithAggregatesInput | Prisma.GrowthEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GrowthEvent"> | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"GrowthEvent"> | string | null;
    weddingId?: Prisma.StringNullableWithAggregatesFilter<"GrowthEvent"> | string | null;
    sessionId?: Prisma.StringNullableWithAggregatesFilter<"GrowthEvent"> | string | null;
    eventName?: Prisma.StringWithAggregatesFilter<"GrowthEvent"> | string;
    source?: Prisma.StringNullableWithAggregatesFilter<"GrowthEvent"> | string | null;
    campaign?: Prisma.StringNullableWithAggregatesFilter<"GrowthEvent"> | string | null;
    properties?: Prisma.JsonNullableWithAggregatesFilter<"GrowthEvent">;
    occurredAt?: Prisma.DateTimeWithAggregatesFilter<"GrowthEvent"> | Date | string;
};
export type GrowthEventCreateInput = {
    id?: string;
    userId?: string | null;
    weddingId?: string | null;
    sessionId?: string | null;
    eventName: string;
    source?: string | null;
    campaign?: string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Date | string;
};
export type GrowthEventUncheckedCreateInput = {
    id?: string;
    userId?: string | null;
    weddingId?: string | null;
    sessionId?: string | null;
    eventName: string;
    source?: string | null;
    campaign?: string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Date | string;
};
export type GrowthEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weddingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campaign?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GrowthEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weddingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campaign?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GrowthEventCreateManyInput = {
    id?: string;
    userId?: string | null;
    weddingId?: string | null;
    sessionId?: string | null;
    eventName: string;
    source?: string | null;
    campaign?: string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Date | string;
};
export type GrowthEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weddingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campaign?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GrowthEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weddingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campaign?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GrowthEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    campaign?: Prisma.SortOrder;
    properties?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
};
export type GrowthEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    campaign?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
};
export type GrowthEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    campaign?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
};
export type GrowthEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    weddingId?: boolean;
    sessionId?: boolean;
    eventName?: boolean;
    source?: boolean;
    campaign?: boolean;
    properties?: boolean;
    occurredAt?: boolean;
}, ExtArgs["result"]["growthEvent"]>;
export type GrowthEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    weddingId?: boolean;
    sessionId?: boolean;
    eventName?: boolean;
    source?: boolean;
    campaign?: boolean;
    properties?: boolean;
    occurredAt?: boolean;
}, ExtArgs["result"]["growthEvent"]>;
export type GrowthEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    weddingId?: boolean;
    sessionId?: boolean;
    eventName?: boolean;
    source?: boolean;
    campaign?: boolean;
    properties?: boolean;
    occurredAt?: boolean;
}, ExtArgs["result"]["growthEvent"]>;
export type GrowthEventSelectScalar = {
    id?: boolean;
    userId?: boolean;
    weddingId?: boolean;
    sessionId?: boolean;
    eventName?: boolean;
    source?: boolean;
    campaign?: boolean;
    properties?: boolean;
    occurredAt?: boolean;
};
export type GrowthEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "weddingId" | "sessionId" | "eventName" | "source" | "campaign" | "properties" | "occurredAt", ExtArgs["result"]["growthEvent"]>;
export type $GrowthEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GrowthEvent";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string | null;
        weddingId: string | null;
        sessionId: string | null;
        eventName: string;
        source: string | null;
        campaign: string | null;
        properties: runtime.JsonValue | null;
        occurredAt: Date;
    }, ExtArgs["result"]["growthEvent"]>;
    composites: {};
};
export type GrowthEventGetPayload<S extends boolean | null | undefined | GrowthEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GrowthEventPayload, S>;
export type GrowthEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GrowthEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GrowthEventCountAggregateInputType | true;
};
export interface GrowthEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GrowthEvent'];
        meta: {
            name: 'GrowthEvent';
        };
    };
    findUnique<T extends GrowthEventFindUniqueArgs>(args: Prisma.SelectSubset<T, GrowthEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GrowthEventClient<runtime.Types.Result.GetResult<Prisma.$GrowthEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GrowthEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GrowthEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GrowthEventClient<runtime.Types.Result.GetResult<Prisma.$GrowthEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GrowthEventFindFirstArgs>(args?: Prisma.SelectSubset<T, GrowthEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__GrowthEventClient<runtime.Types.Result.GetResult<Prisma.$GrowthEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GrowthEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GrowthEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GrowthEventClient<runtime.Types.Result.GetResult<Prisma.$GrowthEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GrowthEventFindManyArgs>(args?: Prisma.SelectSubset<T, GrowthEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GrowthEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GrowthEventCreateArgs>(args: Prisma.SelectSubset<T, GrowthEventCreateArgs<ExtArgs>>): Prisma.Prisma__GrowthEventClient<runtime.Types.Result.GetResult<Prisma.$GrowthEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GrowthEventCreateManyArgs>(args?: Prisma.SelectSubset<T, GrowthEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GrowthEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GrowthEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GrowthEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GrowthEventDeleteArgs>(args: Prisma.SelectSubset<T, GrowthEventDeleteArgs<ExtArgs>>): Prisma.Prisma__GrowthEventClient<runtime.Types.Result.GetResult<Prisma.$GrowthEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GrowthEventUpdateArgs>(args: Prisma.SelectSubset<T, GrowthEventUpdateArgs<ExtArgs>>): Prisma.Prisma__GrowthEventClient<runtime.Types.Result.GetResult<Prisma.$GrowthEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GrowthEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, GrowthEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GrowthEventUpdateManyArgs>(args: Prisma.SelectSubset<T, GrowthEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GrowthEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GrowthEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GrowthEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GrowthEventUpsertArgs>(args: Prisma.SelectSubset<T, GrowthEventUpsertArgs<ExtArgs>>): Prisma.Prisma__GrowthEventClient<runtime.Types.Result.GetResult<Prisma.$GrowthEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GrowthEventCountArgs>(args?: Prisma.Subset<T, GrowthEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GrowthEventCountAggregateOutputType> : number>;
    aggregate<T extends GrowthEventAggregateArgs>(args: Prisma.Subset<T, GrowthEventAggregateArgs>): Prisma.PrismaPromise<GetGrowthEventAggregateType<T>>;
    groupBy<T extends GrowthEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GrowthEventGroupByArgs['orderBy'];
    } : {
        orderBy?: GrowthEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GrowthEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrowthEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GrowthEventFieldRefs;
}
export interface Prisma__GrowthEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GrowthEventFieldRefs {
    readonly id: Prisma.FieldRef<"GrowthEvent", 'String'>;
    readonly userId: Prisma.FieldRef<"GrowthEvent", 'String'>;
    readonly weddingId: Prisma.FieldRef<"GrowthEvent", 'String'>;
    readonly sessionId: Prisma.FieldRef<"GrowthEvent", 'String'>;
    readonly eventName: Prisma.FieldRef<"GrowthEvent", 'String'>;
    readonly source: Prisma.FieldRef<"GrowthEvent", 'String'>;
    readonly campaign: Prisma.FieldRef<"GrowthEvent", 'String'>;
    readonly properties: Prisma.FieldRef<"GrowthEvent", 'Json'>;
    readonly occurredAt: Prisma.FieldRef<"GrowthEvent", 'DateTime'>;
}
export type GrowthEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrowthEventSelect<ExtArgs> | null;
    omit?: Prisma.GrowthEventOmit<ExtArgs> | null;
    where: Prisma.GrowthEventWhereUniqueInput;
};
export type GrowthEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrowthEventSelect<ExtArgs> | null;
    omit?: Prisma.GrowthEventOmit<ExtArgs> | null;
    where: Prisma.GrowthEventWhereUniqueInput;
};
export type GrowthEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrowthEventSelect<ExtArgs> | null;
    omit?: Prisma.GrowthEventOmit<ExtArgs> | null;
    where?: Prisma.GrowthEventWhereInput;
    orderBy?: Prisma.GrowthEventOrderByWithRelationInput | Prisma.GrowthEventOrderByWithRelationInput[];
    cursor?: Prisma.GrowthEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GrowthEventScalarFieldEnum | Prisma.GrowthEventScalarFieldEnum[];
};
export type GrowthEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrowthEventSelect<ExtArgs> | null;
    omit?: Prisma.GrowthEventOmit<ExtArgs> | null;
    where?: Prisma.GrowthEventWhereInput;
    orderBy?: Prisma.GrowthEventOrderByWithRelationInput | Prisma.GrowthEventOrderByWithRelationInput[];
    cursor?: Prisma.GrowthEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GrowthEventScalarFieldEnum | Prisma.GrowthEventScalarFieldEnum[];
};
export type GrowthEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrowthEventSelect<ExtArgs> | null;
    omit?: Prisma.GrowthEventOmit<ExtArgs> | null;
    where?: Prisma.GrowthEventWhereInput;
    orderBy?: Prisma.GrowthEventOrderByWithRelationInput | Prisma.GrowthEventOrderByWithRelationInput[];
    cursor?: Prisma.GrowthEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GrowthEventScalarFieldEnum | Prisma.GrowthEventScalarFieldEnum[];
};
export type GrowthEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrowthEventSelect<ExtArgs> | null;
    omit?: Prisma.GrowthEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GrowthEventCreateInput, Prisma.GrowthEventUncheckedCreateInput>;
};
export type GrowthEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GrowthEventCreateManyInput | Prisma.GrowthEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GrowthEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrowthEventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GrowthEventOmit<ExtArgs> | null;
    data: Prisma.GrowthEventCreateManyInput | Prisma.GrowthEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GrowthEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrowthEventSelect<ExtArgs> | null;
    omit?: Prisma.GrowthEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GrowthEventUpdateInput, Prisma.GrowthEventUncheckedUpdateInput>;
    where: Prisma.GrowthEventWhereUniqueInput;
};
export type GrowthEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GrowthEventUpdateManyMutationInput, Prisma.GrowthEventUncheckedUpdateManyInput>;
    where?: Prisma.GrowthEventWhereInput;
    limit?: number;
};
export type GrowthEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrowthEventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GrowthEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GrowthEventUpdateManyMutationInput, Prisma.GrowthEventUncheckedUpdateManyInput>;
    where?: Prisma.GrowthEventWhereInput;
    limit?: number;
};
export type GrowthEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrowthEventSelect<ExtArgs> | null;
    omit?: Prisma.GrowthEventOmit<ExtArgs> | null;
    where: Prisma.GrowthEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.GrowthEventCreateInput, Prisma.GrowthEventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GrowthEventUpdateInput, Prisma.GrowthEventUncheckedUpdateInput>;
};
export type GrowthEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrowthEventSelect<ExtArgs> | null;
    omit?: Prisma.GrowthEventOmit<ExtArgs> | null;
    where: Prisma.GrowthEventWhereUniqueInput;
};
export type GrowthEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GrowthEventWhereInput;
    limit?: number;
};
export type GrowthEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrowthEventSelect<ExtArgs> | null;
    omit?: Prisma.GrowthEventOmit<ExtArgs> | null;
};
