import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PartnerMemberModel = runtime.Types.Result.DefaultSelection<Prisma.$PartnerMemberPayload>;
export type AggregatePartnerMember = {
    _count: PartnerMemberCountAggregateOutputType | null;
    _min: PartnerMemberMinAggregateOutputType | null;
    _max: PartnerMemberMaxAggregateOutputType | null;
};
export type PartnerMemberMinAggregateOutputType = {
    id: string | null;
    partnerId: string | null;
    userId: string | null;
    role: $Enums.PartnerMemberRole | null;
    active: boolean | null;
    invitedAt: Date | null;
    joinedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PartnerMemberMaxAggregateOutputType = {
    id: string | null;
    partnerId: string | null;
    userId: string | null;
    role: $Enums.PartnerMemberRole | null;
    active: boolean | null;
    invitedAt: Date | null;
    joinedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PartnerMemberCountAggregateOutputType = {
    id: number;
    partnerId: number;
    userId: number;
    role: number;
    active: number;
    invitedAt: number;
    joinedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PartnerMemberMinAggregateInputType = {
    id?: true;
    partnerId?: true;
    userId?: true;
    role?: true;
    active?: true;
    invitedAt?: true;
    joinedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PartnerMemberMaxAggregateInputType = {
    id?: true;
    partnerId?: true;
    userId?: true;
    role?: true;
    active?: true;
    invitedAt?: true;
    joinedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PartnerMemberCountAggregateInputType = {
    id?: true;
    partnerId?: true;
    userId?: true;
    role?: true;
    active?: true;
    invitedAt?: true;
    joinedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PartnerMemberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartnerMemberWhereInput;
    orderBy?: Prisma.PartnerMemberOrderByWithRelationInput | Prisma.PartnerMemberOrderByWithRelationInput[];
    cursor?: Prisma.PartnerMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PartnerMemberCountAggregateInputType;
    _min?: PartnerMemberMinAggregateInputType;
    _max?: PartnerMemberMaxAggregateInputType;
};
export type GetPartnerMemberAggregateType<T extends PartnerMemberAggregateArgs> = {
    [P in keyof T & keyof AggregatePartnerMember]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePartnerMember[P]> : Prisma.GetScalarType<T[P], AggregatePartnerMember[P]>;
};
export type PartnerMemberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartnerMemberWhereInput;
    orderBy?: Prisma.PartnerMemberOrderByWithAggregationInput | Prisma.PartnerMemberOrderByWithAggregationInput[];
    by: Prisma.PartnerMemberScalarFieldEnum[] | Prisma.PartnerMemberScalarFieldEnum;
    having?: Prisma.PartnerMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PartnerMemberCountAggregateInputType | true;
    _min?: PartnerMemberMinAggregateInputType;
    _max?: PartnerMemberMaxAggregateInputType;
};
export type PartnerMemberGroupByOutputType = {
    id: string;
    partnerId: string;
    userId: string;
    role: $Enums.PartnerMemberRole;
    active: boolean;
    invitedAt: Date;
    joinedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PartnerMemberCountAggregateOutputType | null;
    _min: PartnerMemberMinAggregateOutputType | null;
    _max: PartnerMemberMaxAggregateOutputType | null;
};
export type GetPartnerMemberGroupByPayload<T extends PartnerMemberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PartnerMemberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PartnerMemberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PartnerMemberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PartnerMemberGroupByOutputType[P]>;
}>>;
export type PartnerMemberWhereInput = {
    AND?: Prisma.PartnerMemberWhereInput | Prisma.PartnerMemberWhereInput[];
    OR?: Prisma.PartnerMemberWhereInput[];
    NOT?: Prisma.PartnerMemberWhereInput | Prisma.PartnerMemberWhereInput[];
    id?: Prisma.StringFilter<"PartnerMember"> | string;
    partnerId?: Prisma.StringFilter<"PartnerMember"> | string;
    userId?: Prisma.StringFilter<"PartnerMember"> | string;
    role?: Prisma.EnumPartnerMemberRoleFilter<"PartnerMember"> | $Enums.PartnerMemberRole;
    active?: Prisma.BoolFilter<"PartnerMember"> | boolean;
    invitedAt?: Prisma.DateTimeFilter<"PartnerMember"> | Date | string;
    joinedAt?: Prisma.DateTimeNullableFilter<"PartnerMember"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PartnerMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PartnerMember"> | Date | string;
};
export type PartnerMemberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    invitedAt?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PartnerMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    partnerId_userId?: Prisma.PartnerMemberPartnerIdUserIdCompoundUniqueInput;
    AND?: Prisma.PartnerMemberWhereInput | Prisma.PartnerMemberWhereInput[];
    OR?: Prisma.PartnerMemberWhereInput[];
    NOT?: Prisma.PartnerMemberWhereInput | Prisma.PartnerMemberWhereInput[];
    partnerId?: Prisma.StringFilter<"PartnerMember"> | string;
    userId?: Prisma.StringFilter<"PartnerMember"> | string;
    role?: Prisma.EnumPartnerMemberRoleFilter<"PartnerMember"> | $Enums.PartnerMemberRole;
    active?: Prisma.BoolFilter<"PartnerMember"> | boolean;
    invitedAt?: Prisma.DateTimeFilter<"PartnerMember"> | Date | string;
    joinedAt?: Prisma.DateTimeNullableFilter<"PartnerMember"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PartnerMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PartnerMember"> | Date | string;
}, "id" | "partnerId_userId">;
export type PartnerMemberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    invitedAt?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PartnerMemberCountOrderByAggregateInput;
    _max?: Prisma.PartnerMemberMaxOrderByAggregateInput;
    _min?: Prisma.PartnerMemberMinOrderByAggregateInput;
};
export type PartnerMemberScalarWhereWithAggregatesInput = {
    AND?: Prisma.PartnerMemberScalarWhereWithAggregatesInput | Prisma.PartnerMemberScalarWhereWithAggregatesInput[];
    OR?: Prisma.PartnerMemberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PartnerMemberScalarWhereWithAggregatesInput | Prisma.PartnerMemberScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PartnerMember"> | string;
    partnerId?: Prisma.StringWithAggregatesFilter<"PartnerMember"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"PartnerMember"> | string;
    role?: Prisma.EnumPartnerMemberRoleWithAggregatesFilter<"PartnerMember"> | $Enums.PartnerMemberRole;
    active?: Prisma.BoolWithAggregatesFilter<"PartnerMember"> | boolean;
    invitedAt?: Prisma.DateTimeWithAggregatesFilter<"PartnerMember"> | Date | string;
    joinedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PartnerMember"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PartnerMember"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PartnerMember"> | Date | string;
};
export type PartnerMemberCreateInput = {
    id?: string;
    partnerId: string;
    userId: string;
    role?: $Enums.PartnerMemberRole;
    active?: boolean;
    invitedAt?: Date | string;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PartnerMemberUncheckedCreateInput = {
    id?: string;
    partnerId: string;
    userId: string;
    role?: $Enums.PartnerMemberRole;
    active?: boolean;
    invitedAt?: Date | string;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PartnerMemberUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumPartnerMemberRoleFieldUpdateOperationsInput | $Enums.PartnerMemberRole;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invitedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerMemberUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumPartnerMemberRoleFieldUpdateOperationsInput | $Enums.PartnerMemberRole;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invitedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerMemberCreateManyInput = {
    id?: string;
    partnerId: string;
    userId: string;
    role?: $Enums.PartnerMemberRole;
    active?: boolean;
    invitedAt?: Date | string;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PartnerMemberUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumPartnerMemberRoleFieldUpdateOperationsInput | $Enums.PartnerMemberRole;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invitedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerMemberUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumPartnerMemberRoleFieldUpdateOperationsInput | $Enums.PartnerMemberRole;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invitedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartnerMemberPartnerIdUserIdCompoundUniqueInput = {
    partnerId: string;
    userId: string;
};
export type PartnerMemberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    invitedAt?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PartnerMemberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    invitedAt?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PartnerMemberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partnerId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    invitedAt?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EnumPartnerMemberRoleFieldUpdateOperationsInput = {
    set?: $Enums.PartnerMemberRole;
};
export type PartnerMemberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partnerId?: boolean;
    userId?: boolean;
    role?: boolean;
    active?: boolean;
    invitedAt?: boolean;
    joinedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["partnerMember"]>;
export type PartnerMemberSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partnerId?: boolean;
    userId?: boolean;
    role?: boolean;
    active?: boolean;
    invitedAt?: boolean;
    joinedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["partnerMember"]>;
export type PartnerMemberSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partnerId?: boolean;
    userId?: boolean;
    role?: boolean;
    active?: boolean;
    invitedAt?: boolean;
    joinedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["partnerMember"]>;
export type PartnerMemberSelectScalar = {
    id?: boolean;
    partnerId?: boolean;
    userId?: boolean;
    role?: boolean;
    active?: boolean;
    invitedAt?: boolean;
    joinedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PartnerMemberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "partnerId" | "userId" | "role" | "active" | "invitedAt" | "joinedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["partnerMember"]>;
export type $PartnerMemberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PartnerMember";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        partnerId: string;
        userId: string;
        role: $Enums.PartnerMemberRole;
        active: boolean;
        invitedAt: Date;
        joinedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["partnerMember"]>;
    composites: {};
};
export type PartnerMemberGetPayload<S extends boolean | null | undefined | PartnerMemberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PartnerMemberPayload, S>;
export type PartnerMemberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PartnerMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PartnerMemberCountAggregateInputType | true;
};
export interface PartnerMemberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PartnerMember'];
        meta: {
            name: 'PartnerMember';
        };
    };
    findUnique<T extends PartnerMemberFindUniqueArgs>(args: Prisma.SelectSubset<T, PartnerMemberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PartnerMemberClient<runtime.Types.Result.GetResult<Prisma.$PartnerMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PartnerMemberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PartnerMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartnerMemberClient<runtime.Types.Result.GetResult<Prisma.$PartnerMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PartnerMemberFindFirstArgs>(args?: Prisma.SelectSubset<T, PartnerMemberFindFirstArgs<ExtArgs>>): Prisma.Prisma__PartnerMemberClient<runtime.Types.Result.GetResult<Prisma.$PartnerMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PartnerMemberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PartnerMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartnerMemberClient<runtime.Types.Result.GetResult<Prisma.$PartnerMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PartnerMemberFindManyArgs>(args?: Prisma.SelectSubset<T, PartnerMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PartnerMemberCreateArgs>(args: Prisma.SelectSubset<T, PartnerMemberCreateArgs<ExtArgs>>): Prisma.Prisma__PartnerMemberClient<runtime.Types.Result.GetResult<Prisma.$PartnerMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PartnerMemberCreateManyArgs>(args?: Prisma.SelectSubset<T, PartnerMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PartnerMemberCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PartnerMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PartnerMemberDeleteArgs>(args: Prisma.SelectSubset<T, PartnerMemberDeleteArgs<ExtArgs>>): Prisma.Prisma__PartnerMemberClient<runtime.Types.Result.GetResult<Prisma.$PartnerMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PartnerMemberUpdateArgs>(args: Prisma.SelectSubset<T, PartnerMemberUpdateArgs<ExtArgs>>): Prisma.Prisma__PartnerMemberClient<runtime.Types.Result.GetResult<Prisma.$PartnerMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PartnerMemberDeleteManyArgs>(args?: Prisma.SelectSubset<T, PartnerMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PartnerMemberUpdateManyArgs>(args: Prisma.SelectSubset<T, PartnerMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PartnerMemberUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PartnerMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartnerMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PartnerMemberUpsertArgs>(args: Prisma.SelectSubset<T, PartnerMemberUpsertArgs<ExtArgs>>): Prisma.Prisma__PartnerMemberClient<runtime.Types.Result.GetResult<Prisma.$PartnerMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PartnerMemberCountArgs>(args?: Prisma.Subset<T, PartnerMemberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PartnerMemberCountAggregateOutputType> : number>;
    aggregate<T extends PartnerMemberAggregateArgs>(args: Prisma.Subset<T, PartnerMemberAggregateArgs>): Prisma.PrismaPromise<GetPartnerMemberAggregateType<T>>;
    groupBy<T extends PartnerMemberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PartnerMemberGroupByArgs['orderBy'];
    } : {
        orderBy?: PartnerMemberGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PartnerMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PartnerMemberFieldRefs;
}
export interface Prisma__PartnerMemberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PartnerMemberFieldRefs {
    readonly id: Prisma.FieldRef<"PartnerMember", 'String'>;
    readonly partnerId: Prisma.FieldRef<"PartnerMember", 'String'>;
    readonly userId: Prisma.FieldRef<"PartnerMember", 'String'>;
    readonly role: Prisma.FieldRef<"PartnerMember", 'PartnerMemberRole'>;
    readonly active: Prisma.FieldRef<"PartnerMember", 'Boolean'>;
    readonly invitedAt: Prisma.FieldRef<"PartnerMember", 'DateTime'>;
    readonly joinedAt: Prisma.FieldRef<"PartnerMember", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"PartnerMember", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PartnerMember", 'DateTime'>;
}
export type PartnerMemberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerMemberSelect<ExtArgs> | null;
    omit?: Prisma.PartnerMemberOmit<ExtArgs> | null;
    where: Prisma.PartnerMemberWhereUniqueInput;
};
export type PartnerMemberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerMemberSelect<ExtArgs> | null;
    omit?: Prisma.PartnerMemberOmit<ExtArgs> | null;
    where: Prisma.PartnerMemberWhereUniqueInput;
};
export type PartnerMemberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerMemberSelect<ExtArgs> | null;
    omit?: Prisma.PartnerMemberOmit<ExtArgs> | null;
    where?: Prisma.PartnerMemberWhereInput;
    orderBy?: Prisma.PartnerMemberOrderByWithRelationInput | Prisma.PartnerMemberOrderByWithRelationInput[];
    cursor?: Prisma.PartnerMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartnerMemberScalarFieldEnum | Prisma.PartnerMemberScalarFieldEnum[];
};
export type PartnerMemberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerMemberSelect<ExtArgs> | null;
    omit?: Prisma.PartnerMemberOmit<ExtArgs> | null;
    where?: Prisma.PartnerMemberWhereInput;
    orderBy?: Prisma.PartnerMemberOrderByWithRelationInput | Prisma.PartnerMemberOrderByWithRelationInput[];
    cursor?: Prisma.PartnerMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartnerMemberScalarFieldEnum | Prisma.PartnerMemberScalarFieldEnum[];
};
export type PartnerMemberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerMemberSelect<ExtArgs> | null;
    omit?: Prisma.PartnerMemberOmit<ExtArgs> | null;
    where?: Prisma.PartnerMemberWhereInput;
    orderBy?: Prisma.PartnerMemberOrderByWithRelationInput | Prisma.PartnerMemberOrderByWithRelationInput[];
    cursor?: Prisma.PartnerMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartnerMemberScalarFieldEnum | Prisma.PartnerMemberScalarFieldEnum[];
};
export type PartnerMemberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerMemberSelect<ExtArgs> | null;
    omit?: Prisma.PartnerMemberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartnerMemberCreateInput, Prisma.PartnerMemberUncheckedCreateInput>;
};
export type PartnerMemberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PartnerMemberCreateManyInput | Prisma.PartnerMemberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PartnerMemberCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerMemberSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PartnerMemberOmit<ExtArgs> | null;
    data: Prisma.PartnerMemberCreateManyInput | Prisma.PartnerMemberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PartnerMemberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerMemberSelect<ExtArgs> | null;
    omit?: Prisma.PartnerMemberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartnerMemberUpdateInput, Prisma.PartnerMemberUncheckedUpdateInput>;
    where: Prisma.PartnerMemberWhereUniqueInput;
};
export type PartnerMemberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PartnerMemberUpdateManyMutationInput, Prisma.PartnerMemberUncheckedUpdateManyInput>;
    where?: Prisma.PartnerMemberWhereInput;
    limit?: number;
};
export type PartnerMemberUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerMemberSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PartnerMemberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartnerMemberUpdateManyMutationInput, Prisma.PartnerMemberUncheckedUpdateManyInput>;
    where?: Prisma.PartnerMemberWhereInput;
    limit?: number;
};
export type PartnerMemberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerMemberSelect<ExtArgs> | null;
    omit?: Prisma.PartnerMemberOmit<ExtArgs> | null;
    where: Prisma.PartnerMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.PartnerMemberCreateInput, Prisma.PartnerMemberUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PartnerMemberUpdateInput, Prisma.PartnerMemberUncheckedUpdateInput>;
};
export type PartnerMemberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerMemberSelect<ExtArgs> | null;
    omit?: Prisma.PartnerMemberOmit<ExtArgs> | null;
    where: Prisma.PartnerMemberWhereUniqueInput;
};
export type PartnerMemberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartnerMemberWhereInput;
    limit?: number;
};
export type PartnerMemberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartnerMemberSelect<ExtArgs> | null;
    omit?: Prisma.PartnerMemberOmit<ExtArgs> | null;
};
