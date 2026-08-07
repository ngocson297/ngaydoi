import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SystemAnnouncementModel = runtime.Types.Result.DefaultSelection<Prisma.$SystemAnnouncementPayload>;
export type AggregateSystemAnnouncement = {
    _count: SystemAnnouncementCountAggregateOutputType | null;
    _min: SystemAnnouncementMinAggregateOutputType | null;
    _max: SystemAnnouncementMaxAggregateOutputType | null;
};
export type SystemAnnouncementMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    message: string | null;
    level: string | null;
    active: boolean | null;
    startsAt: Date | null;
    endsAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SystemAnnouncementMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    message: string | null;
    level: string | null;
    active: boolean | null;
    startsAt: Date | null;
    endsAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SystemAnnouncementCountAggregateOutputType = {
    id: number;
    title: number;
    message: number;
    level: number;
    active: number;
    startsAt: number;
    endsAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SystemAnnouncementMinAggregateInputType = {
    id?: true;
    title?: true;
    message?: true;
    level?: true;
    active?: true;
    startsAt?: true;
    endsAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SystemAnnouncementMaxAggregateInputType = {
    id?: true;
    title?: true;
    message?: true;
    level?: true;
    active?: true;
    startsAt?: true;
    endsAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SystemAnnouncementCountAggregateInputType = {
    id?: true;
    title?: true;
    message?: true;
    level?: true;
    active?: true;
    startsAt?: true;
    endsAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SystemAnnouncementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SystemAnnouncementWhereInput;
    orderBy?: Prisma.SystemAnnouncementOrderByWithRelationInput | Prisma.SystemAnnouncementOrderByWithRelationInput[];
    cursor?: Prisma.SystemAnnouncementWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SystemAnnouncementCountAggregateInputType;
    _min?: SystemAnnouncementMinAggregateInputType;
    _max?: SystemAnnouncementMaxAggregateInputType;
};
export type GetSystemAnnouncementAggregateType<T extends SystemAnnouncementAggregateArgs> = {
    [P in keyof T & keyof AggregateSystemAnnouncement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSystemAnnouncement[P]> : Prisma.GetScalarType<T[P], AggregateSystemAnnouncement[P]>;
};
export type SystemAnnouncementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SystemAnnouncementWhereInput;
    orderBy?: Prisma.SystemAnnouncementOrderByWithAggregationInput | Prisma.SystemAnnouncementOrderByWithAggregationInput[];
    by: Prisma.SystemAnnouncementScalarFieldEnum[] | Prisma.SystemAnnouncementScalarFieldEnum;
    having?: Prisma.SystemAnnouncementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SystemAnnouncementCountAggregateInputType | true;
    _min?: SystemAnnouncementMinAggregateInputType;
    _max?: SystemAnnouncementMaxAggregateInputType;
};
export type SystemAnnouncementGroupByOutputType = {
    id: string;
    title: string;
    message: string;
    level: string;
    active: boolean;
    startsAt: Date;
    endsAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SystemAnnouncementCountAggregateOutputType | null;
    _min: SystemAnnouncementMinAggregateOutputType | null;
    _max: SystemAnnouncementMaxAggregateOutputType | null;
};
export type GetSystemAnnouncementGroupByPayload<T extends SystemAnnouncementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SystemAnnouncementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SystemAnnouncementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SystemAnnouncementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SystemAnnouncementGroupByOutputType[P]>;
}>>;
export type SystemAnnouncementWhereInput = {
    AND?: Prisma.SystemAnnouncementWhereInput | Prisma.SystemAnnouncementWhereInput[];
    OR?: Prisma.SystemAnnouncementWhereInput[];
    NOT?: Prisma.SystemAnnouncementWhereInput | Prisma.SystemAnnouncementWhereInput[];
    id?: Prisma.StringFilter<"SystemAnnouncement"> | string;
    title?: Prisma.StringFilter<"SystemAnnouncement"> | string;
    message?: Prisma.StringFilter<"SystemAnnouncement"> | string;
    level?: Prisma.StringFilter<"SystemAnnouncement"> | string;
    active?: Prisma.BoolFilter<"SystemAnnouncement"> | boolean;
    startsAt?: Prisma.DateTimeFilter<"SystemAnnouncement"> | Date | string;
    endsAt?: Prisma.DateTimeNullableFilter<"SystemAnnouncement"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SystemAnnouncement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SystemAnnouncement"> | Date | string;
};
export type SystemAnnouncementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SystemAnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SystemAnnouncementWhereInput | Prisma.SystemAnnouncementWhereInput[];
    OR?: Prisma.SystemAnnouncementWhereInput[];
    NOT?: Prisma.SystemAnnouncementWhereInput | Prisma.SystemAnnouncementWhereInput[];
    title?: Prisma.StringFilter<"SystemAnnouncement"> | string;
    message?: Prisma.StringFilter<"SystemAnnouncement"> | string;
    level?: Prisma.StringFilter<"SystemAnnouncement"> | string;
    active?: Prisma.BoolFilter<"SystemAnnouncement"> | boolean;
    startsAt?: Prisma.DateTimeFilter<"SystemAnnouncement"> | Date | string;
    endsAt?: Prisma.DateTimeNullableFilter<"SystemAnnouncement"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SystemAnnouncement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SystemAnnouncement"> | Date | string;
}, "id">;
export type SystemAnnouncementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SystemAnnouncementCountOrderByAggregateInput;
    _max?: Prisma.SystemAnnouncementMaxOrderByAggregateInput;
    _min?: Prisma.SystemAnnouncementMinOrderByAggregateInput;
};
export type SystemAnnouncementScalarWhereWithAggregatesInput = {
    AND?: Prisma.SystemAnnouncementScalarWhereWithAggregatesInput | Prisma.SystemAnnouncementScalarWhereWithAggregatesInput[];
    OR?: Prisma.SystemAnnouncementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SystemAnnouncementScalarWhereWithAggregatesInput | Prisma.SystemAnnouncementScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SystemAnnouncement"> | string;
    title?: Prisma.StringWithAggregatesFilter<"SystemAnnouncement"> | string;
    message?: Prisma.StringWithAggregatesFilter<"SystemAnnouncement"> | string;
    level?: Prisma.StringWithAggregatesFilter<"SystemAnnouncement"> | string;
    active?: Prisma.BoolWithAggregatesFilter<"SystemAnnouncement"> | boolean;
    startsAt?: Prisma.DateTimeWithAggregatesFilter<"SystemAnnouncement"> | Date | string;
    endsAt?: Prisma.DateTimeNullableWithAggregatesFilter<"SystemAnnouncement"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SystemAnnouncement"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SystemAnnouncement"> | Date | string;
};
export type SystemAnnouncementCreateInput = {
    id?: string;
    title: string;
    message: string;
    level?: string;
    active?: boolean;
    startsAt?: Date | string;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SystemAnnouncementUncheckedCreateInput = {
    id?: string;
    title: string;
    message: string;
    level?: string;
    active?: boolean;
    startsAt?: Date | string;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SystemAnnouncementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SystemAnnouncementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SystemAnnouncementCreateManyInput = {
    id?: string;
    title: string;
    message: string;
    level?: string;
    active?: boolean;
    startsAt?: Date | string;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SystemAnnouncementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SystemAnnouncementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SystemAnnouncementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SystemAnnouncementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SystemAnnouncementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SystemAnnouncementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    message?: boolean;
    level?: boolean;
    active?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["systemAnnouncement"]>;
export type SystemAnnouncementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    message?: boolean;
    level?: boolean;
    active?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["systemAnnouncement"]>;
export type SystemAnnouncementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    message?: boolean;
    level?: boolean;
    active?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["systemAnnouncement"]>;
export type SystemAnnouncementSelectScalar = {
    id?: boolean;
    title?: boolean;
    message?: boolean;
    level?: boolean;
    active?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SystemAnnouncementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "message" | "level" | "active" | "startsAt" | "endsAt" | "createdAt" | "updatedAt", ExtArgs["result"]["systemAnnouncement"]>;
export type $SystemAnnouncementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SystemAnnouncement";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        message: string;
        level: string;
        active: boolean;
        startsAt: Date;
        endsAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["systemAnnouncement"]>;
    composites: {};
};
export type SystemAnnouncementGetPayload<S extends boolean | null | undefined | SystemAnnouncementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SystemAnnouncementPayload, S>;
export type SystemAnnouncementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SystemAnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SystemAnnouncementCountAggregateInputType | true;
};
export interface SystemAnnouncementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SystemAnnouncement'];
        meta: {
            name: 'SystemAnnouncement';
        };
    };
    findUnique<T extends SystemAnnouncementFindUniqueArgs>(args: Prisma.SelectSubset<T, SystemAnnouncementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SystemAnnouncementClient<runtime.Types.Result.GetResult<Prisma.$SystemAnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SystemAnnouncementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SystemAnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SystemAnnouncementClient<runtime.Types.Result.GetResult<Prisma.$SystemAnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SystemAnnouncementFindFirstArgs>(args?: Prisma.SelectSubset<T, SystemAnnouncementFindFirstArgs<ExtArgs>>): Prisma.Prisma__SystemAnnouncementClient<runtime.Types.Result.GetResult<Prisma.$SystemAnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SystemAnnouncementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SystemAnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SystemAnnouncementClient<runtime.Types.Result.GetResult<Prisma.$SystemAnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SystemAnnouncementFindManyArgs>(args?: Prisma.SelectSubset<T, SystemAnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SystemAnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SystemAnnouncementCreateArgs>(args: Prisma.SelectSubset<T, SystemAnnouncementCreateArgs<ExtArgs>>): Prisma.Prisma__SystemAnnouncementClient<runtime.Types.Result.GetResult<Prisma.$SystemAnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SystemAnnouncementCreateManyArgs>(args?: Prisma.SelectSubset<T, SystemAnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SystemAnnouncementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SystemAnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SystemAnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SystemAnnouncementDeleteArgs>(args: Prisma.SelectSubset<T, SystemAnnouncementDeleteArgs<ExtArgs>>): Prisma.Prisma__SystemAnnouncementClient<runtime.Types.Result.GetResult<Prisma.$SystemAnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SystemAnnouncementUpdateArgs>(args: Prisma.SelectSubset<T, SystemAnnouncementUpdateArgs<ExtArgs>>): Prisma.Prisma__SystemAnnouncementClient<runtime.Types.Result.GetResult<Prisma.$SystemAnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SystemAnnouncementDeleteManyArgs>(args?: Prisma.SelectSubset<T, SystemAnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SystemAnnouncementUpdateManyArgs>(args: Prisma.SelectSubset<T, SystemAnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SystemAnnouncementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SystemAnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SystemAnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SystemAnnouncementUpsertArgs>(args: Prisma.SelectSubset<T, SystemAnnouncementUpsertArgs<ExtArgs>>): Prisma.Prisma__SystemAnnouncementClient<runtime.Types.Result.GetResult<Prisma.$SystemAnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SystemAnnouncementCountArgs>(args?: Prisma.Subset<T, SystemAnnouncementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SystemAnnouncementCountAggregateOutputType> : number>;
    aggregate<T extends SystemAnnouncementAggregateArgs>(args: Prisma.Subset<T, SystemAnnouncementAggregateArgs>): Prisma.PrismaPromise<GetSystemAnnouncementAggregateType<T>>;
    groupBy<T extends SystemAnnouncementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SystemAnnouncementGroupByArgs['orderBy'];
    } : {
        orderBy?: SystemAnnouncementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SystemAnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SystemAnnouncementFieldRefs;
}
export interface Prisma__SystemAnnouncementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SystemAnnouncementFieldRefs {
    readonly id: Prisma.FieldRef<"SystemAnnouncement", 'String'>;
    readonly title: Prisma.FieldRef<"SystemAnnouncement", 'String'>;
    readonly message: Prisma.FieldRef<"SystemAnnouncement", 'String'>;
    readonly level: Prisma.FieldRef<"SystemAnnouncement", 'String'>;
    readonly active: Prisma.FieldRef<"SystemAnnouncement", 'Boolean'>;
    readonly startsAt: Prisma.FieldRef<"SystemAnnouncement", 'DateTime'>;
    readonly endsAt: Prisma.FieldRef<"SystemAnnouncement", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"SystemAnnouncement", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SystemAnnouncement", 'DateTime'>;
}
export type SystemAnnouncementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemAnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.SystemAnnouncementOmit<ExtArgs> | null;
    where: Prisma.SystemAnnouncementWhereUniqueInput;
};
export type SystemAnnouncementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemAnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.SystemAnnouncementOmit<ExtArgs> | null;
    where: Prisma.SystemAnnouncementWhereUniqueInput;
};
export type SystemAnnouncementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemAnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.SystemAnnouncementOmit<ExtArgs> | null;
    where?: Prisma.SystemAnnouncementWhereInput;
    orderBy?: Prisma.SystemAnnouncementOrderByWithRelationInput | Prisma.SystemAnnouncementOrderByWithRelationInput[];
    cursor?: Prisma.SystemAnnouncementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SystemAnnouncementScalarFieldEnum | Prisma.SystemAnnouncementScalarFieldEnum[];
};
export type SystemAnnouncementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemAnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.SystemAnnouncementOmit<ExtArgs> | null;
    where?: Prisma.SystemAnnouncementWhereInput;
    orderBy?: Prisma.SystemAnnouncementOrderByWithRelationInput | Prisma.SystemAnnouncementOrderByWithRelationInput[];
    cursor?: Prisma.SystemAnnouncementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SystemAnnouncementScalarFieldEnum | Prisma.SystemAnnouncementScalarFieldEnum[];
};
export type SystemAnnouncementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemAnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.SystemAnnouncementOmit<ExtArgs> | null;
    where?: Prisma.SystemAnnouncementWhereInput;
    orderBy?: Prisma.SystemAnnouncementOrderByWithRelationInput | Prisma.SystemAnnouncementOrderByWithRelationInput[];
    cursor?: Prisma.SystemAnnouncementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SystemAnnouncementScalarFieldEnum | Prisma.SystemAnnouncementScalarFieldEnum[];
};
export type SystemAnnouncementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemAnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.SystemAnnouncementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SystemAnnouncementCreateInput, Prisma.SystemAnnouncementUncheckedCreateInput>;
};
export type SystemAnnouncementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SystemAnnouncementCreateManyInput | Prisma.SystemAnnouncementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SystemAnnouncementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemAnnouncementSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SystemAnnouncementOmit<ExtArgs> | null;
    data: Prisma.SystemAnnouncementCreateManyInput | Prisma.SystemAnnouncementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SystemAnnouncementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemAnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.SystemAnnouncementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SystemAnnouncementUpdateInput, Prisma.SystemAnnouncementUncheckedUpdateInput>;
    where: Prisma.SystemAnnouncementWhereUniqueInput;
};
export type SystemAnnouncementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SystemAnnouncementUpdateManyMutationInput, Prisma.SystemAnnouncementUncheckedUpdateManyInput>;
    where?: Prisma.SystemAnnouncementWhereInput;
    limit?: number;
};
export type SystemAnnouncementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemAnnouncementSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SystemAnnouncementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SystemAnnouncementUpdateManyMutationInput, Prisma.SystemAnnouncementUncheckedUpdateManyInput>;
    where?: Prisma.SystemAnnouncementWhereInput;
    limit?: number;
};
export type SystemAnnouncementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemAnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.SystemAnnouncementOmit<ExtArgs> | null;
    where: Prisma.SystemAnnouncementWhereUniqueInput;
    create: Prisma.XOR<Prisma.SystemAnnouncementCreateInput, Prisma.SystemAnnouncementUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SystemAnnouncementUpdateInput, Prisma.SystemAnnouncementUncheckedUpdateInput>;
};
export type SystemAnnouncementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemAnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.SystemAnnouncementOmit<ExtArgs> | null;
    where: Prisma.SystemAnnouncementWhereUniqueInput;
};
export type SystemAnnouncementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SystemAnnouncementWhereInput;
    limit?: number;
};
export type SystemAnnouncementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemAnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.SystemAnnouncementOmit<ExtArgs> | null;
};
