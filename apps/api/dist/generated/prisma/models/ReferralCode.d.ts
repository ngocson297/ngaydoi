import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReferralCodeModel = runtime.Types.Result.DefaultSelection<Prisma.$ReferralCodePayload>;
export type AggregateReferralCode = {
    _count: ReferralCodeCountAggregateOutputType | null;
    _avg: ReferralCodeAvgAggregateOutputType | null;
    _sum: ReferralCodeSumAggregateOutputType | null;
    _min: ReferralCodeMinAggregateOutputType | null;
    _max: ReferralCodeMaxAggregateOutputType | null;
};
export type ReferralCodeAvgAggregateOutputType = {
    visitCount: number | null;
    signupCount: number | null;
    conversionCount: number | null;
};
export type ReferralCodeSumAggregateOutputType = {
    visitCount: number | null;
    signupCount: number | null;
    conversionCount: number | null;
};
export type ReferralCodeMinAggregateOutputType = {
    id: string | null;
    ownerUserId: string | null;
    code: string | null;
    label: string | null;
    active: boolean | null;
    visitCount: number | null;
    signupCount: number | null;
    conversionCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ReferralCodeMaxAggregateOutputType = {
    id: string | null;
    ownerUserId: string | null;
    code: string | null;
    label: string | null;
    active: boolean | null;
    visitCount: number | null;
    signupCount: number | null;
    conversionCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ReferralCodeCountAggregateOutputType = {
    id: number;
    ownerUserId: number;
    code: number;
    label: number;
    active: number;
    visitCount: number;
    signupCount: number;
    conversionCount: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ReferralCodeAvgAggregateInputType = {
    visitCount?: true;
    signupCount?: true;
    conversionCount?: true;
};
export type ReferralCodeSumAggregateInputType = {
    visitCount?: true;
    signupCount?: true;
    conversionCount?: true;
};
export type ReferralCodeMinAggregateInputType = {
    id?: true;
    ownerUserId?: true;
    code?: true;
    label?: true;
    active?: true;
    visitCount?: true;
    signupCount?: true;
    conversionCount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ReferralCodeMaxAggregateInputType = {
    id?: true;
    ownerUserId?: true;
    code?: true;
    label?: true;
    active?: true;
    visitCount?: true;
    signupCount?: true;
    conversionCount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ReferralCodeCountAggregateInputType = {
    id?: true;
    ownerUserId?: true;
    code?: true;
    label?: true;
    active?: true;
    visitCount?: true;
    signupCount?: true;
    conversionCount?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ReferralCodeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReferralCodeWhereInput;
    orderBy?: Prisma.ReferralCodeOrderByWithRelationInput | Prisma.ReferralCodeOrderByWithRelationInput[];
    cursor?: Prisma.ReferralCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReferralCodeCountAggregateInputType;
    _avg?: ReferralCodeAvgAggregateInputType;
    _sum?: ReferralCodeSumAggregateInputType;
    _min?: ReferralCodeMinAggregateInputType;
    _max?: ReferralCodeMaxAggregateInputType;
};
export type GetReferralCodeAggregateType<T extends ReferralCodeAggregateArgs> = {
    [P in keyof T & keyof AggregateReferralCode]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReferralCode[P]> : Prisma.GetScalarType<T[P], AggregateReferralCode[P]>;
};
export type ReferralCodeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReferralCodeWhereInput;
    orderBy?: Prisma.ReferralCodeOrderByWithAggregationInput | Prisma.ReferralCodeOrderByWithAggregationInput[];
    by: Prisma.ReferralCodeScalarFieldEnum[] | Prisma.ReferralCodeScalarFieldEnum;
    having?: Prisma.ReferralCodeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReferralCodeCountAggregateInputType | true;
    _avg?: ReferralCodeAvgAggregateInputType;
    _sum?: ReferralCodeSumAggregateInputType;
    _min?: ReferralCodeMinAggregateInputType;
    _max?: ReferralCodeMaxAggregateInputType;
};
export type ReferralCodeGroupByOutputType = {
    id: string;
    ownerUserId: string;
    code: string;
    label: string | null;
    active: boolean;
    visitCount: number;
    signupCount: number;
    conversionCount: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ReferralCodeCountAggregateOutputType | null;
    _avg: ReferralCodeAvgAggregateOutputType | null;
    _sum: ReferralCodeSumAggregateOutputType | null;
    _min: ReferralCodeMinAggregateOutputType | null;
    _max: ReferralCodeMaxAggregateOutputType | null;
};
export type GetReferralCodeGroupByPayload<T extends ReferralCodeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReferralCodeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReferralCodeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReferralCodeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReferralCodeGroupByOutputType[P]>;
}>>;
export type ReferralCodeWhereInput = {
    AND?: Prisma.ReferralCodeWhereInput | Prisma.ReferralCodeWhereInput[];
    OR?: Prisma.ReferralCodeWhereInput[];
    NOT?: Prisma.ReferralCodeWhereInput | Prisma.ReferralCodeWhereInput[];
    id?: Prisma.StringFilter<"ReferralCode"> | string;
    ownerUserId?: Prisma.StringFilter<"ReferralCode"> | string;
    code?: Prisma.StringFilter<"ReferralCode"> | string;
    label?: Prisma.StringNullableFilter<"ReferralCode"> | string | null;
    active?: Prisma.BoolFilter<"ReferralCode"> | boolean;
    visitCount?: Prisma.IntFilter<"ReferralCode"> | number;
    signupCount?: Prisma.IntFilter<"ReferralCode"> | number;
    conversionCount?: Prisma.IntFilter<"ReferralCode"> | number;
    createdAt?: Prisma.DateTimeFilter<"ReferralCode"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ReferralCode"> | Date | string;
};
export type ReferralCodeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ownerUserId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrder;
    visitCount?: Prisma.SortOrder;
    signupCount?: Prisma.SortOrder;
    conversionCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ReferralCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.ReferralCodeWhereInput | Prisma.ReferralCodeWhereInput[];
    OR?: Prisma.ReferralCodeWhereInput[];
    NOT?: Prisma.ReferralCodeWhereInput | Prisma.ReferralCodeWhereInput[];
    ownerUserId?: Prisma.StringFilter<"ReferralCode"> | string;
    label?: Prisma.StringNullableFilter<"ReferralCode"> | string | null;
    active?: Prisma.BoolFilter<"ReferralCode"> | boolean;
    visitCount?: Prisma.IntFilter<"ReferralCode"> | number;
    signupCount?: Prisma.IntFilter<"ReferralCode"> | number;
    conversionCount?: Prisma.IntFilter<"ReferralCode"> | number;
    createdAt?: Prisma.DateTimeFilter<"ReferralCode"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ReferralCode"> | Date | string;
}, "id" | "code">;
export type ReferralCodeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ownerUserId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrder;
    visitCount?: Prisma.SortOrder;
    signupCount?: Prisma.SortOrder;
    conversionCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ReferralCodeCountOrderByAggregateInput;
    _avg?: Prisma.ReferralCodeAvgOrderByAggregateInput;
    _max?: Prisma.ReferralCodeMaxOrderByAggregateInput;
    _min?: Prisma.ReferralCodeMinOrderByAggregateInput;
    _sum?: Prisma.ReferralCodeSumOrderByAggregateInput;
};
export type ReferralCodeScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReferralCodeScalarWhereWithAggregatesInput | Prisma.ReferralCodeScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReferralCodeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReferralCodeScalarWhereWithAggregatesInput | Prisma.ReferralCodeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ReferralCode"> | string;
    ownerUserId?: Prisma.StringWithAggregatesFilter<"ReferralCode"> | string;
    code?: Prisma.StringWithAggregatesFilter<"ReferralCode"> | string;
    label?: Prisma.StringNullableWithAggregatesFilter<"ReferralCode"> | string | null;
    active?: Prisma.BoolWithAggregatesFilter<"ReferralCode"> | boolean;
    visitCount?: Prisma.IntWithAggregatesFilter<"ReferralCode"> | number;
    signupCount?: Prisma.IntWithAggregatesFilter<"ReferralCode"> | number;
    conversionCount?: Prisma.IntWithAggregatesFilter<"ReferralCode"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ReferralCode"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ReferralCode"> | Date | string;
};
export type ReferralCodeCreateInput = {
    id?: string;
    ownerUserId: string;
    code: string;
    label?: string | null;
    active?: boolean;
    visitCount?: number;
    signupCount?: number;
    conversionCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ReferralCodeUncheckedCreateInput = {
    id?: string;
    ownerUserId: string;
    code: string;
    label?: string | null;
    active?: boolean;
    visitCount?: number;
    signupCount?: number;
    conversionCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ReferralCodeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    visitCount?: Prisma.IntFieldUpdateOperationsInput | number;
    signupCount?: Prisma.IntFieldUpdateOperationsInput | number;
    conversionCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralCodeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    visitCount?: Prisma.IntFieldUpdateOperationsInput | number;
    signupCount?: Prisma.IntFieldUpdateOperationsInput | number;
    conversionCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralCodeCreateManyInput = {
    id?: string;
    ownerUserId: string;
    code: string;
    label?: string | null;
    active?: boolean;
    visitCount?: number;
    signupCount?: number;
    conversionCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ReferralCodeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    visitCount?: Prisma.IntFieldUpdateOperationsInput | number;
    signupCount?: Prisma.IntFieldUpdateOperationsInput | number;
    conversionCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralCodeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    visitCount?: Prisma.IntFieldUpdateOperationsInput | number;
    signupCount?: Prisma.IntFieldUpdateOperationsInput | number;
    conversionCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralCodeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerUserId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    visitCount?: Prisma.SortOrder;
    signupCount?: Prisma.SortOrder;
    conversionCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ReferralCodeAvgOrderByAggregateInput = {
    visitCount?: Prisma.SortOrder;
    signupCount?: Prisma.SortOrder;
    conversionCount?: Prisma.SortOrder;
};
export type ReferralCodeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerUserId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    visitCount?: Prisma.SortOrder;
    signupCount?: Prisma.SortOrder;
    conversionCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ReferralCodeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerUserId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    visitCount?: Prisma.SortOrder;
    signupCount?: Prisma.SortOrder;
    conversionCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ReferralCodeSumOrderByAggregateInput = {
    visitCount?: Prisma.SortOrder;
    signupCount?: Prisma.SortOrder;
    conversionCount?: Prisma.SortOrder;
};
export type ReferralCodeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerUserId?: boolean;
    code?: boolean;
    label?: boolean;
    active?: boolean;
    visitCount?: boolean;
    signupCount?: boolean;
    conversionCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["referralCode"]>;
export type ReferralCodeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerUserId?: boolean;
    code?: boolean;
    label?: boolean;
    active?: boolean;
    visitCount?: boolean;
    signupCount?: boolean;
    conversionCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["referralCode"]>;
export type ReferralCodeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerUserId?: boolean;
    code?: boolean;
    label?: boolean;
    active?: boolean;
    visitCount?: boolean;
    signupCount?: boolean;
    conversionCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["referralCode"]>;
export type ReferralCodeSelectScalar = {
    id?: boolean;
    ownerUserId?: boolean;
    code?: boolean;
    label?: boolean;
    active?: boolean;
    visitCount?: boolean;
    signupCount?: boolean;
    conversionCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ReferralCodeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ownerUserId" | "code" | "label" | "active" | "visitCount" | "signupCount" | "conversionCount" | "createdAt" | "updatedAt", ExtArgs["result"]["referralCode"]>;
export type $ReferralCodePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ReferralCode";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ownerUserId: string;
        code: string;
        label: string | null;
        active: boolean;
        visitCount: number;
        signupCount: number;
        conversionCount: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["referralCode"]>;
    composites: {};
};
export type ReferralCodeGetPayload<S extends boolean | null | undefined | ReferralCodeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReferralCodePayload, S>;
export type ReferralCodeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReferralCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReferralCodeCountAggregateInputType | true;
};
export interface ReferralCodeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ReferralCode'];
        meta: {
            name: 'ReferralCode';
        };
    };
    findUnique<T extends ReferralCodeFindUniqueArgs>(args: Prisma.SelectSubset<T, ReferralCodeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReferralCodeClient<runtime.Types.Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReferralCodeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReferralCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReferralCodeClient<runtime.Types.Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReferralCodeFindFirstArgs>(args?: Prisma.SelectSubset<T, ReferralCodeFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReferralCodeClient<runtime.Types.Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReferralCodeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReferralCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReferralCodeClient<runtime.Types.Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReferralCodeFindManyArgs>(args?: Prisma.SelectSubset<T, ReferralCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReferralCodeCreateArgs>(args: Prisma.SelectSubset<T, ReferralCodeCreateArgs<ExtArgs>>): Prisma.Prisma__ReferralCodeClient<runtime.Types.Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReferralCodeCreateManyArgs>(args?: Prisma.SelectSubset<T, ReferralCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ReferralCodeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReferralCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ReferralCodeDeleteArgs>(args: Prisma.SelectSubset<T, ReferralCodeDeleteArgs<ExtArgs>>): Prisma.Prisma__ReferralCodeClient<runtime.Types.Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReferralCodeUpdateArgs>(args: Prisma.SelectSubset<T, ReferralCodeUpdateArgs<ExtArgs>>): Prisma.Prisma__ReferralCodeClient<runtime.Types.Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReferralCodeDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReferralCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReferralCodeUpdateManyArgs>(args: Prisma.SelectSubset<T, ReferralCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ReferralCodeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReferralCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ReferralCodeUpsertArgs>(args: Prisma.SelectSubset<T, ReferralCodeUpsertArgs<ExtArgs>>): Prisma.Prisma__ReferralCodeClient<runtime.Types.Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReferralCodeCountArgs>(args?: Prisma.Subset<T, ReferralCodeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReferralCodeCountAggregateOutputType> : number>;
    aggregate<T extends ReferralCodeAggregateArgs>(args: Prisma.Subset<T, ReferralCodeAggregateArgs>): Prisma.PrismaPromise<GetReferralCodeAggregateType<T>>;
    groupBy<T extends ReferralCodeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReferralCodeGroupByArgs['orderBy'];
    } : {
        orderBy?: ReferralCodeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReferralCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReferralCodeFieldRefs;
}
export interface Prisma__ReferralCodeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReferralCodeFieldRefs {
    readonly id: Prisma.FieldRef<"ReferralCode", 'String'>;
    readonly ownerUserId: Prisma.FieldRef<"ReferralCode", 'String'>;
    readonly code: Prisma.FieldRef<"ReferralCode", 'String'>;
    readonly label: Prisma.FieldRef<"ReferralCode", 'String'>;
    readonly active: Prisma.FieldRef<"ReferralCode", 'Boolean'>;
    readonly visitCount: Prisma.FieldRef<"ReferralCode", 'Int'>;
    readonly signupCount: Prisma.FieldRef<"ReferralCode", 'Int'>;
    readonly conversionCount: Prisma.FieldRef<"ReferralCode", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"ReferralCode", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ReferralCode", 'DateTime'>;
}
export type ReferralCodeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralCodeSelect<ExtArgs> | null;
    omit?: Prisma.ReferralCodeOmit<ExtArgs> | null;
    where: Prisma.ReferralCodeWhereUniqueInput;
};
export type ReferralCodeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralCodeSelect<ExtArgs> | null;
    omit?: Prisma.ReferralCodeOmit<ExtArgs> | null;
    where: Prisma.ReferralCodeWhereUniqueInput;
};
export type ReferralCodeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralCodeSelect<ExtArgs> | null;
    omit?: Prisma.ReferralCodeOmit<ExtArgs> | null;
    where?: Prisma.ReferralCodeWhereInput;
    orderBy?: Prisma.ReferralCodeOrderByWithRelationInput | Prisma.ReferralCodeOrderByWithRelationInput[];
    cursor?: Prisma.ReferralCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReferralCodeScalarFieldEnum | Prisma.ReferralCodeScalarFieldEnum[];
};
export type ReferralCodeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralCodeSelect<ExtArgs> | null;
    omit?: Prisma.ReferralCodeOmit<ExtArgs> | null;
    where?: Prisma.ReferralCodeWhereInput;
    orderBy?: Prisma.ReferralCodeOrderByWithRelationInput | Prisma.ReferralCodeOrderByWithRelationInput[];
    cursor?: Prisma.ReferralCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReferralCodeScalarFieldEnum | Prisma.ReferralCodeScalarFieldEnum[];
};
export type ReferralCodeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralCodeSelect<ExtArgs> | null;
    omit?: Prisma.ReferralCodeOmit<ExtArgs> | null;
    where?: Prisma.ReferralCodeWhereInput;
    orderBy?: Prisma.ReferralCodeOrderByWithRelationInput | Prisma.ReferralCodeOrderByWithRelationInput[];
    cursor?: Prisma.ReferralCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReferralCodeScalarFieldEnum | Prisma.ReferralCodeScalarFieldEnum[];
};
export type ReferralCodeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralCodeSelect<ExtArgs> | null;
    omit?: Prisma.ReferralCodeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReferralCodeCreateInput, Prisma.ReferralCodeUncheckedCreateInput>;
};
export type ReferralCodeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReferralCodeCreateManyInput | Prisma.ReferralCodeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReferralCodeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralCodeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReferralCodeOmit<ExtArgs> | null;
    data: Prisma.ReferralCodeCreateManyInput | Prisma.ReferralCodeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReferralCodeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralCodeSelect<ExtArgs> | null;
    omit?: Prisma.ReferralCodeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReferralCodeUpdateInput, Prisma.ReferralCodeUncheckedUpdateInput>;
    where: Prisma.ReferralCodeWhereUniqueInput;
};
export type ReferralCodeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReferralCodeUpdateManyMutationInput, Prisma.ReferralCodeUncheckedUpdateManyInput>;
    where?: Prisma.ReferralCodeWhereInput;
    limit?: number;
};
export type ReferralCodeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralCodeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReferralCodeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReferralCodeUpdateManyMutationInput, Prisma.ReferralCodeUncheckedUpdateManyInput>;
    where?: Prisma.ReferralCodeWhereInput;
    limit?: number;
};
export type ReferralCodeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralCodeSelect<ExtArgs> | null;
    omit?: Prisma.ReferralCodeOmit<ExtArgs> | null;
    where: Prisma.ReferralCodeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReferralCodeCreateInput, Prisma.ReferralCodeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReferralCodeUpdateInput, Prisma.ReferralCodeUncheckedUpdateInput>;
};
export type ReferralCodeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralCodeSelect<ExtArgs> | null;
    omit?: Prisma.ReferralCodeOmit<ExtArgs> | null;
    where: Prisma.ReferralCodeWhereUniqueInput;
};
export type ReferralCodeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReferralCodeWhereInput;
    limit?: number;
};
export type ReferralCodeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralCodeSelect<ExtArgs> | null;
    omit?: Prisma.ReferralCodeOmit<ExtArgs> | null;
};
