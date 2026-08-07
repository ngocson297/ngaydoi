import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OnboardingProgressModel = runtime.Types.Result.DefaultSelection<Prisma.$OnboardingProgressPayload>;
export type AggregateOnboardingProgress = {
    _count: OnboardingProgressCountAggregateOutputType | null;
    _min: OnboardingProgressMinAggregateOutputType | null;
    _max: OnboardingProgressMaxAggregateOutputType | null;
};
export type OnboardingProgressMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    dismissed: boolean | null;
    completedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OnboardingProgressMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    dismissed: boolean | null;
    completedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OnboardingProgressCountAggregateOutputType = {
    id: number;
    userId: number;
    steps: number;
    dismissed: number;
    completedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OnboardingProgressMinAggregateInputType = {
    id?: true;
    userId?: true;
    dismissed?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OnboardingProgressMaxAggregateInputType = {
    id?: true;
    userId?: true;
    dismissed?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OnboardingProgressCountAggregateInputType = {
    id?: true;
    userId?: true;
    steps?: true;
    dismissed?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OnboardingProgressAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OnboardingProgressWhereInput;
    orderBy?: Prisma.OnboardingProgressOrderByWithRelationInput | Prisma.OnboardingProgressOrderByWithRelationInput[];
    cursor?: Prisma.OnboardingProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OnboardingProgressCountAggregateInputType;
    _min?: OnboardingProgressMinAggregateInputType;
    _max?: OnboardingProgressMaxAggregateInputType;
};
export type GetOnboardingProgressAggregateType<T extends OnboardingProgressAggregateArgs> = {
    [P in keyof T & keyof AggregateOnboardingProgress]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOnboardingProgress[P]> : Prisma.GetScalarType<T[P], AggregateOnboardingProgress[P]>;
};
export type OnboardingProgressGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OnboardingProgressWhereInput;
    orderBy?: Prisma.OnboardingProgressOrderByWithAggregationInput | Prisma.OnboardingProgressOrderByWithAggregationInput[];
    by: Prisma.OnboardingProgressScalarFieldEnum[] | Prisma.OnboardingProgressScalarFieldEnum;
    having?: Prisma.OnboardingProgressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OnboardingProgressCountAggregateInputType | true;
    _min?: OnboardingProgressMinAggregateInputType;
    _max?: OnboardingProgressMaxAggregateInputType;
};
export type OnboardingProgressGroupByOutputType = {
    id: string;
    userId: string;
    steps: runtime.JsonValue;
    dismissed: boolean;
    completedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: OnboardingProgressCountAggregateOutputType | null;
    _min: OnboardingProgressMinAggregateOutputType | null;
    _max: OnboardingProgressMaxAggregateOutputType | null;
};
export type GetOnboardingProgressGroupByPayload<T extends OnboardingProgressGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OnboardingProgressGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OnboardingProgressGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OnboardingProgressGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OnboardingProgressGroupByOutputType[P]>;
}>>;
export type OnboardingProgressWhereInput = {
    AND?: Prisma.OnboardingProgressWhereInput | Prisma.OnboardingProgressWhereInput[];
    OR?: Prisma.OnboardingProgressWhereInput[];
    NOT?: Prisma.OnboardingProgressWhereInput | Prisma.OnboardingProgressWhereInput[];
    id?: Prisma.StringFilter<"OnboardingProgress"> | string;
    userId?: Prisma.StringFilter<"OnboardingProgress"> | string;
    steps?: Prisma.JsonFilter<"OnboardingProgress">;
    dismissed?: Prisma.BoolFilter<"OnboardingProgress"> | boolean;
    completedAt?: Prisma.DateTimeNullableFilter<"OnboardingProgress"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"OnboardingProgress"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OnboardingProgress"> | Date | string;
};
export type OnboardingProgressOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    steps?: Prisma.SortOrder;
    dismissed?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OnboardingProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.OnboardingProgressWhereInput | Prisma.OnboardingProgressWhereInput[];
    OR?: Prisma.OnboardingProgressWhereInput[];
    NOT?: Prisma.OnboardingProgressWhereInput | Prisma.OnboardingProgressWhereInput[];
    steps?: Prisma.JsonFilter<"OnboardingProgress">;
    dismissed?: Prisma.BoolFilter<"OnboardingProgress"> | boolean;
    completedAt?: Prisma.DateTimeNullableFilter<"OnboardingProgress"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"OnboardingProgress"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OnboardingProgress"> | Date | string;
}, "id" | "userId">;
export type OnboardingProgressOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    steps?: Prisma.SortOrder;
    dismissed?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OnboardingProgressCountOrderByAggregateInput;
    _max?: Prisma.OnboardingProgressMaxOrderByAggregateInput;
    _min?: Prisma.OnboardingProgressMinOrderByAggregateInput;
};
export type OnboardingProgressScalarWhereWithAggregatesInput = {
    AND?: Prisma.OnboardingProgressScalarWhereWithAggregatesInput | Prisma.OnboardingProgressScalarWhereWithAggregatesInput[];
    OR?: Prisma.OnboardingProgressScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OnboardingProgressScalarWhereWithAggregatesInput | Prisma.OnboardingProgressScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OnboardingProgress"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"OnboardingProgress"> | string;
    steps?: Prisma.JsonWithAggregatesFilter<"OnboardingProgress">;
    dismissed?: Prisma.BoolWithAggregatesFilter<"OnboardingProgress"> | boolean;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"OnboardingProgress"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"OnboardingProgress"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"OnboardingProgress"> | Date | string;
};
export type OnboardingProgressCreateInput = {
    id?: string;
    userId: string;
    steps: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dismissed?: boolean;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OnboardingProgressUncheckedCreateInput = {
    id?: string;
    userId: string;
    steps: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dismissed?: boolean;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OnboardingProgressUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dismissed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OnboardingProgressUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dismissed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OnboardingProgressCreateManyInput = {
    id?: string;
    userId: string;
    steps: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dismissed?: boolean;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OnboardingProgressUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dismissed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OnboardingProgressUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dismissed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OnboardingProgressCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    steps?: Prisma.SortOrder;
    dismissed?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OnboardingProgressMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    dismissed?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OnboardingProgressMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    dismissed?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OnboardingProgressSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    steps?: boolean;
    dismissed?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["onboardingProgress"]>;
export type OnboardingProgressSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    steps?: boolean;
    dismissed?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["onboardingProgress"]>;
export type OnboardingProgressSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    steps?: boolean;
    dismissed?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["onboardingProgress"]>;
export type OnboardingProgressSelectScalar = {
    id?: boolean;
    userId?: boolean;
    steps?: boolean;
    dismissed?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OnboardingProgressOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "steps" | "dismissed" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["onboardingProgress"]>;
export type $OnboardingProgressPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OnboardingProgress";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        steps: runtime.JsonValue;
        dismissed: boolean;
        completedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["onboardingProgress"]>;
    composites: {};
};
export type OnboardingProgressGetPayload<S extends boolean | null | undefined | OnboardingProgressDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OnboardingProgressPayload, S>;
export type OnboardingProgressCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OnboardingProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OnboardingProgressCountAggregateInputType | true;
};
export interface OnboardingProgressDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OnboardingProgress'];
        meta: {
            name: 'OnboardingProgress';
        };
    };
    findUnique<T extends OnboardingProgressFindUniqueArgs>(args: Prisma.SelectSubset<T, OnboardingProgressFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OnboardingProgressClient<runtime.Types.Result.GetResult<Prisma.$OnboardingProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OnboardingProgressFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OnboardingProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OnboardingProgressClient<runtime.Types.Result.GetResult<Prisma.$OnboardingProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OnboardingProgressFindFirstArgs>(args?: Prisma.SelectSubset<T, OnboardingProgressFindFirstArgs<ExtArgs>>): Prisma.Prisma__OnboardingProgressClient<runtime.Types.Result.GetResult<Prisma.$OnboardingProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OnboardingProgressFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OnboardingProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OnboardingProgressClient<runtime.Types.Result.GetResult<Prisma.$OnboardingProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OnboardingProgressFindManyArgs>(args?: Prisma.SelectSubset<T, OnboardingProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OnboardingProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OnboardingProgressCreateArgs>(args: Prisma.SelectSubset<T, OnboardingProgressCreateArgs<ExtArgs>>): Prisma.Prisma__OnboardingProgressClient<runtime.Types.Result.GetResult<Prisma.$OnboardingProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OnboardingProgressCreateManyArgs>(args?: Prisma.SelectSubset<T, OnboardingProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OnboardingProgressCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OnboardingProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OnboardingProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OnboardingProgressDeleteArgs>(args: Prisma.SelectSubset<T, OnboardingProgressDeleteArgs<ExtArgs>>): Prisma.Prisma__OnboardingProgressClient<runtime.Types.Result.GetResult<Prisma.$OnboardingProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OnboardingProgressUpdateArgs>(args: Prisma.SelectSubset<T, OnboardingProgressUpdateArgs<ExtArgs>>): Prisma.Prisma__OnboardingProgressClient<runtime.Types.Result.GetResult<Prisma.$OnboardingProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OnboardingProgressDeleteManyArgs>(args?: Prisma.SelectSubset<T, OnboardingProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OnboardingProgressUpdateManyArgs>(args: Prisma.SelectSubset<T, OnboardingProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OnboardingProgressUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OnboardingProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OnboardingProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OnboardingProgressUpsertArgs>(args: Prisma.SelectSubset<T, OnboardingProgressUpsertArgs<ExtArgs>>): Prisma.Prisma__OnboardingProgressClient<runtime.Types.Result.GetResult<Prisma.$OnboardingProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OnboardingProgressCountArgs>(args?: Prisma.Subset<T, OnboardingProgressCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OnboardingProgressCountAggregateOutputType> : number>;
    aggregate<T extends OnboardingProgressAggregateArgs>(args: Prisma.Subset<T, OnboardingProgressAggregateArgs>): Prisma.PrismaPromise<GetOnboardingProgressAggregateType<T>>;
    groupBy<T extends OnboardingProgressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OnboardingProgressGroupByArgs['orderBy'];
    } : {
        orderBy?: OnboardingProgressGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OnboardingProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOnboardingProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OnboardingProgressFieldRefs;
}
export interface Prisma__OnboardingProgressClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OnboardingProgressFieldRefs {
    readonly id: Prisma.FieldRef<"OnboardingProgress", 'String'>;
    readonly userId: Prisma.FieldRef<"OnboardingProgress", 'String'>;
    readonly steps: Prisma.FieldRef<"OnboardingProgress", 'Json'>;
    readonly dismissed: Prisma.FieldRef<"OnboardingProgress", 'Boolean'>;
    readonly completedAt: Prisma.FieldRef<"OnboardingProgress", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"OnboardingProgress", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"OnboardingProgress", 'DateTime'>;
}
export type OnboardingProgressFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingProgressSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingProgressOmit<ExtArgs> | null;
    where: Prisma.OnboardingProgressWhereUniqueInput;
};
export type OnboardingProgressFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingProgressSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingProgressOmit<ExtArgs> | null;
    where: Prisma.OnboardingProgressWhereUniqueInput;
};
export type OnboardingProgressFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingProgressSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingProgressOmit<ExtArgs> | null;
    where?: Prisma.OnboardingProgressWhereInput;
    orderBy?: Prisma.OnboardingProgressOrderByWithRelationInput | Prisma.OnboardingProgressOrderByWithRelationInput[];
    cursor?: Prisma.OnboardingProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OnboardingProgressScalarFieldEnum | Prisma.OnboardingProgressScalarFieldEnum[];
};
export type OnboardingProgressFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingProgressSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingProgressOmit<ExtArgs> | null;
    where?: Prisma.OnboardingProgressWhereInput;
    orderBy?: Prisma.OnboardingProgressOrderByWithRelationInput | Prisma.OnboardingProgressOrderByWithRelationInput[];
    cursor?: Prisma.OnboardingProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OnboardingProgressScalarFieldEnum | Prisma.OnboardingProgressScalarFieldEnum[];
};
export type OnboardingProgressFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingProgressSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingProgressOmit<ExtArgs> | null;
    where?: Prisma.OnboardingProgressWhereInput;
    orderBy?: Prisma.OnboardingProgressOrderByWithRelationInput | Prisma.OnboardingProgressOrderByWithRelationInput[];
    cursor?: Prisma.OnboardingProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OnboardingProgressScalarFieldEnum | Prisma.OnboardingProgressScalarFieldEnum[];
};
export type OnboardingProgressCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingProgressSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingProgressOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OnboardingProgressCreateInput, Prisma.OnboardingProgressUncheckedCreateInput>;
};
export type OnboardingProgressCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OnboardingProgressCreateManyInput | Prisma.OnboardingProgressCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OnboardingProgressCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingProgressSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OnboardingProgressOmit<ExtArgs> | null;
    data: Prisma.OnboardingProgressCreateManyInput | Prisma.OnboardingProgressCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OnboardingProgressUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingProgressSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingProgressOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OnboardingProgressUpdateInput, Prisma.OnboardingProgressUncheckedUpdateInput>;
    where: Prisma.OnboardingProgressWhereUniqueInput;
};
export type OnboardingProgressUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OnboardingProgressUpdateManyMutationInput, Prisma.OnboardingProgressUncheckedUpdateManyInput>;
    where?: Prisma.OnboardingProgressWhereInput;
    limit?: number;
};
export type OnboardingProgressUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingProgressSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OnboardingProgressOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OnboardingProgressUpdateManyMutationInput, Prisma.OnboardingProgressUncheckedUpdateManyInput>;
    where?: Prisma.OnboardingProgressWhereInput;
    limit?: number;
};
export type OnboardingProgressUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingProgressSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingProgressOmit<ExtArgs> | null;
    where: Prisma.OnboardingProgressWhereUniqueInput;
    create: Prisma.XOR<Prisma.OnboardingProgressCreateInput, Prisma.OnboardingProgressUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OnboardingProgressUpdateInput, Prisma.OnboardingProgressUncheckedUpdateInput>;
};
export type OnboardingProgressDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingProgressSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingProgressOmit<ExtArgs> | null;
    where: Prisma.OnboardingProgressWhereUniqueInput;
};
export type OnboardingProgressDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OnboardingProgressWhereInput;
    limit?: number;
};
export type OnboardingProgressDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingProgressSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingProgressOmit<ExtArgs> | null;
};
