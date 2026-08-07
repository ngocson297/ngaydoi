import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CustomDomainModel = runtime.Types.Result.DefaultSelection<Prisma.$CustomDomainPayload>;
export type AggregateCustomDomain = {
    _count: CustomDomainCountAggregateOutputType | null;
    _min: CustomDomainMinAggregateOutputType | null;
    _max: CustomDomainMaxAggregateOutputType | null;
};
export type CustomDomainMinAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    requestedById: string | null;
    hostname: string | null;
    status: $Enums.DomainStatus | null;
    verificationToken: string | null;
    dnsTarget: string | null;
    lastCheckedAt: Date | null;
    verifiedAt: Date | null;
    activatedAt: Date | null;
    failureReason: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CustomDomainMaxAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    requestedById: string | null;
    hostname: string | null;
    status: $Enums.DomainStatus | null;
    verificationToken: string | null;
    dnsTarget: string | null;
    lastCheckedAt: Date | null;
    verifiedAt: Date | null;
    activatedAt: Date | null;
    failureReason: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CustomDomainCountAggregateOutputType = {
    id: number;
    weddingId: number;
    requestedById: number;
    hostname: number;
    status: number;
    verificationToken: number;
    dnsTarget: number;
    lastCheckedAt: number;
    verifiedAt: number;
    activatedAt: number;
    failureReason: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CustomDomainMinAggregateInputType = {
    id?: true;
    weddingId?: true;
    requestedById?: true;
    hostname?: true;
    status?: true;
    verificationToken?: true;
    dnsTarget?: true;
    lastCheckedAt?: true;
    verifiedAt?: true;
    activatedAt?: true;
    failureReason?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CustomDomainMaxAggregateInputType = {
    id?: true;
    weddingId?: true;
    requestedById?: true;
    hostname?: true;
    status?: true;
    verificationToken?: true;
    dnsTarget?: true;
    lastCheckedAt?: true;
    verifiedAt?: true;
    activatedAt?: true;
    failureReason?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CustomDomainCountAggregateInputType = {
    id?: true;
    weddingId?: true;
    requestedById?: true;
    hostname?: true;
    status?: true;
    verificationToken?: true;
    dnsTarget?: true;
    lastCheckedAt?: true;
    verifiedAt?: true;
    activatedAt?: true;
    failureReason?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CustomDomainAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomDomainWhereInput;
    orderBy?: Prisma.CustomDomainOrderByWithRelationInput | Prisma.CustomDomainOrderByWithRelationInput[];
    cursor?: Prisma.CustomDomainWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomDomainCountAggregateInputType;
    _min?: CustomDomainMinAggregateInputType;
    _max?: CustomDomainMaxAggregateInputType;
};
export type GetCustomDomainAggregateType<T extends CustomDomainAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomDomain]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomDomain[P]> : Prisma.GetScalarType<T[P], AggregateCustomDomain[P]>;
};
export type CustomDomainGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomDomainWhereInput;
    orderBy?: Prisma.CustomDomainOrderByWithAggregationInput | Prisma.CustomDomainOrderByWithAggregationInput[];
    by: Prisma.CustomDomainScalarFieldEnum[] | Prisma.CustomDomainScalarFieldEnum;
    having?: Prisma.CustomDomainScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomDomainCountAggregateInputType | true;
    _min?: CustomDomainMinAggregateInputType;
    _max?: CustomDomainMaxAggregateInputType;
};
export type CustomDomainGroupByOutputType = {
    id: string;
    weddingId: string;
    requestedById: string;
    hostname: string;
    status: $Enums.DomainStatus;
    verificationToken: string;
    dnsTarget: string;
    lastCheckedAt: Date | null;
    verifiedAt: Date | null;
    activatedAt: Date | null;
    failureReason: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CustomDomainCountAggregateOutputType | null;
    _min: CustomDomainMinAggregateOutputType | null;
    _max: CustomDomainMaxAggregateOutputType | null;
};
export type GetCustomDomainGroupByPayload<T extends CustomDomainGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomDomainGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomDomainGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomDomainGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomDomainGroupByOutputType[P]>;
}>>;
export type CustomDomainWhereInput = {
    AND?: Prisma.CustomDomainWhereInput | Prisma.CustomDomainWhereInput[];
    OR?: Prisma.CustomDomainWhereInput[];
    NOT?: Prisma.CustomDomainWhereInput | Prisma.CustomDomainWhereInput[];
    id?: Prisma.StringFilter<"CustomDomain"> | string;
    weddingId?: Prisma.StringFilter<"CustomDomain"> | string;
    requestedById?: Prisma.StringFilter<"CustomDomain"> | string;
    hostname?: Prisma.StringFilter<"CustomDomain"> | string;
    status?: Prisma.EnumDomainStatusFilter<"CustomDomain"> | $Enums.DomainStatus;
    verificationToken?: Prisma.StringFilter<"CustomDomain"> | string;
    dnsTarget?: Prisma.StringFilter<"CustomDomain"> | string;
    lastCheckedAt?: Prisma.DateTimeNullableFilter<"CustomDomain"> | Date | string | null;
    verifiedAt?: Prisma.DateTimeNullableFilter<"CustomDomain"> | Date | string | null;
    activatedAt?: Prisma.DateTimeNullableFilter<"CustomDomain"> | Date | string | null;
    failureReason?: Prisma.StringNullableFilter<"CustomDomain"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CustomDomain"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CustomDomain"> | Date | string;
};
export type CustomDomainOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    hostname?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    verificationToken?: Prisma.SortOrder;
    dnsTarget?: Prisma.SortOrder;
    lastCheckedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    activatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    failureReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CustomDomainWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    weddingId?: string;
    hostname?: string;
    verificationToken?: string;
    AND?: Prisma.CustomDomainWhereInput | Prisma.CustomDomainWhereInput[];
    OR?: Prisma.CustomDomainWhereInput[];
    NOT?: Prisma.CustomDomainWhereInput | Prisma.CustomDomainWhereInput[];
    requestedById?: Prisma.StringFilter<"CustomDomain"> | string;
    status?: Prisma.EnumDomainStatusFilter<"CustomDomain"> | $Enums.DomainStatus;
    dnsTarget?: Prisma.StringFilter<"CustomDomain"> | string;
    lastCheckedAt?: Prisma.DateTimeNullableFilter<"CustomDomain"> | Date | string | null;
    verifiedAt?: Prisma.DateTimeNullableFilter<"CustomDomain"> | Date | string | null;
    activatedAt?: Prisma.DateTimeNullableFilter<"CustomDomain"> | Date | string | null;
    failureReason?: Prisma.StringNullableFilter<"CustomDomain"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CustomDomain"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CustomDomain"> | Date | string;
}, "id" | "weddingId" | "hostname" | "verificationToken">;
export type CustomDomainOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    hostname?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    verificationToken?: Prisma.SortOrder;
    dnsTarget?: Prisma.SortOrder;
    lastCheckedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    activatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    failureReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CustomDomainCountOrderByAggregateInput;
    _max?: Prisma.CustomDomainMaxOrderByAggregateInput;
    _min?: Prisma.CustomDomainMinOrderByAggregateInput;
};
export type CustomDomainScalarWhereWithAggregatesInput = {
    AND?: Prisma.CustomDomainScalarWhereWithAggregatesInput | Prisma.CustomDomainScalarWhereWithAggregatesInput[];
    OR?: Prisma.CustomDomainScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CustomDomainScalarWhereWithAggregatesInput | Prisma.CustomDomainScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CustomDomain"> | string;
    weddingId?: Prisma.StringWithAggregatesFilter<"CustomDomain"> | string;
    requestedById?: Prisma.StringWithAggregatesFilter<"CustomDomain"> | string;
    hostname?: Prisma.StringWithAggregatesFilter<"CustomDomain"> | string;
    status?: Prisma.EnumDomainStatusWithAggregatesFilter<"CustomDomain"> | $Enums.DomainStatus;
    verificationToken?: Prisma.StringWithAggregatesFilter<"CustomDomain"> | string;
    dnsTarget?: Prisma.StringWithAggregatesFilter<"CustomDomain"> | string;
    lastCheckedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CustomDomain"> | Date | string | null;
    verifiedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CustomDomain"> | Date | string | null;
    activatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CustomDomain"> | Date | string | null;
    failureReason?: Prisma.StringNullableWithAggregatesFilter<"CustomDomain"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CustomDomain"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CustomDomain"> | Date | string;
};
export type CustomDomainCreateInput = {
    id?: string;
    weddingId: string;
    requestedById: string;
    hostname: string;
    status?: $Enums.DomainStatus;
    verificationToken: string;
    dnsTarget: string;
    lastCheckedAt?: Date | string | null;
    verifiedAt?: Date | string | null;
    activatedAt?: Date | string | null;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CustomDomainUncheckedCreateInput = {
    id?: string;
    weddingId: string;
    requestedById: string;
    hostname: string;
    status?: $Enums.DomainStatus;
    verificationToken: string;
    dnsTarget: string;
    lastCheckedAt?: Date | string | null;
    verifiedAt?: Date | string | null;
    activatedAt?: Date | string | null;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CustomDomainUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus;
    verificationToken?: Prisma.StringFieldUpdateOperationsInput | string;
    dnsTarget?: Prisma.StringFieldUpdateOperationsInput | string;
    lastCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomDomainUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus;
    verificationToken?: Prisma.StringFieldUpdateOperationsInput | string;
    dnsTarget?: Prisma.StringFieldUpdateOperationsInput | string;
    lastCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomDomainCreateManyInput = {
    id?: string;
    weddingId: string;
    requestedById: string;
    hostname: string;
    status?: $Enums.DomainStatus;
    verificationToken: string;
    dnsTarget: string;
    lastCheckedAt?: Date | string | null;
    verifiedAt?: Date | string | null;
    activatedAt?: Date | string | null;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CustomDomainUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus;
    verificationToken?: Prisma.StringFieldUpdateOperationsInput | string;
    dnsTarget?: Prisma.StringFieldUpdateOperationsInput | string;
    lastCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomDomainUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus;
    verificationToken?: Prisma.StringFieldUpdateOperationsInput | string;
    dnsTarget?: Prisma.StringFieldUpdateOperationsInput | string;
    lastCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomDomainCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    hostname?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    verificationToken?: Prisma.SortOrder;
    dnsTarget?: Prisma.SortOrder;
    lastCheckedAt?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    failureReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CustomDomainMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    hostname?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    verificationToken?: Prisma.SortOrder;
    dnsTarget?: Prisma.SortOrder;
    lastCheckedAt?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    failureReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CustomDomainMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    hostname?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    verificationToken?: Prisma.SortOrder;
    dnsTarget?: Prisma.SortOrder;
    lastCheckedAt?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    failureReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EnumDomainStatusFieldUpdateOperationsInput = {
    set?: $Enums.DomainStatus;
};
export type CustomDomainSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    requestedById?: boolean;
    hostname?: boolean;
    status?: boolean;
    verificationToken?: boolean;
    dnsTarget?: boolean;
    lastCheckedAt?: boolean;
    verifiedAt?: boolean;
    activatedAt?: boolean;
    failureReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["customDomain"]>;
export type CustomDomainSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    requestedById?: boolean;
    hostname?: boolean;
    status?: boolean;
    verificationToken?: boolean;
    dnsTarget?: boolean;
    lastCheckedAt?: boolean;
    verifiedAt?: boolean;
    activatedAt?: boolean;
    failureReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["customDomain"]>;
export type CustomDomainSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    requestedById?: boolean;
    hostname?: boolean;
    status?: boolean;
    verificationToken?: boolean;
    dnsTarget?: boolean;
    lastCheckedAt?: boolean;
    verifiedAt?: boolean;
    activatedAt?: boolean;
    failureReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["customDomain"]>;
export type CustomDomainSelectScalar = {
    id?: boolean;
    weddingId?: boolean;
    requestedById?: boolean;
    hostname?: boolean;
    status?: boolean;
    verificationToken?: boolean;
    dnsTarget?: boolean;
    lastCheckedAt?: boolean;
    verifiedAt?: boolean;
    activatedAt?: boolean;
    failureReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CustomDomainOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "weddingId" | "requestedById" | "hostname" | "status" | "verificationToken" | "dnsTarget" | "lastCheckedAt" | "verifiedAt" | "activatedAt" | "failureReason" | "createdAt" | "updatedAt", ExtArgs["result"]["customDomain"]>;
export type $CustomDomainPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CustomDomain";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        weddingId: string;
        requestedById: string;
        hostname: string;
        status: $Enums.DomainStatus;
        verificationToken: string;
        dnsTarget: string;
        lastCheckedAt: Date | null;
        verifiedAt: Date | null;
        activatedAt: Date | null;
        failureReason: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["customDomain"]>;
    composites: {};
};
export type CustomDomainGetPayload<S extends boolean | null | undefined | CustomDomainDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CustomDomainPayload, S>;
export type CustomDomainCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CustomDomainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomDomainCountAggregateInputType | true;
};
export interface CustomDomainDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CustomDomain'];
        meta: {
            name: 'CustomDomain';
        };
    };
    findUnique<T extends CustomDomainFindUniqueArgs>(args: Prisma.SelectSubset<T, CustomDomainFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CustomDomainClient<runtime.Types.Result.GetResult<Prisma.$CustomDomainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CustomDomainFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CustomDomainFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomDomainClient<runtime.Types.Result.GetResult<Prisma.$CustomDomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CustomDomainFindFirstArgs>(args?: Prisma.SelectSubset<T, CustomDomainFindFirstArgs<ExtArgs>>): Prisma.Prisma__CustomDomainClient<runtime.Types.Result.GetResult<Prisma.$CustomDomainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CustomDomainFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CustomDomainFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomDomainClient<runtime.Types.Result.GetResult<Prisma.$CustomDomainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CustomDomainFindManyArgs>(args?: Prisma.SelectSubset<T, CustomDomainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomDomainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CustomDomainCreateArgs>(args: Prisma.SelectSubset<T, CustomDomainCreateArgs<ExtArgs>>): Prisma.Prisma__CustomDomainClient<runtime.Types.Result.GetResult<Prisma.$CustomDomainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CustomDomainCreateManyArgs>(args?: Prisma.SelectSubset<T, CustomDomainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CustomDomainCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CustomDomainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomDomainPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CustomDomainDeleteArgs>(args: Prisma.SelectSubset<T, CustomDomainDeleteArgs<ExtArgs>>): Prisma.Prisma__CustomDomainClient<runtime.Types.Result.GetResult<Prisma.$CustomDomainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CustomDomainUpdateArgs>(args: Prisma.SelectSubset<T, CustomDomainUpdateArgs<ExtArgs>>): Prisma.Prisma__CustomDomainClient<runtime.Types.Result.GetResult<Prisma.$CustomDomainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CustomDomainDeleteManyArgs>(args?: Prisma.SelectSubset<T, CustomDomainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CustomDomainUpdateManyArgs>(args: Prisma.SelectSubset<T, CustomDomainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CustomDomainUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CustomDomainUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomDomainPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CustomDomainUpsertArgs>(args: Prisma.SelectSubset<T, CustomDomainUpsertArgs<ExtArgs>>): Prisma.Prisma__CustomDomainClient<runtime.Types.Result.GetResult<Prisma.$CustomDomainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CustomDomainCountArgs>(args?: Prisma.Subset<T, CustomDomainCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomDomainCountAggregateOutputType> : number>;
    aggregate<T extends CustomDomainAggregateArgs>(args: Prisma.Subset<T, CustomDomainAggregateArgs>): Prisma.PrismaPromise<GetCustomDomainAggregateType<T>>;
    groupBy<T extends CustomDomainGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CustomDomainGroupByArgs['orderBy'];
    } : {
        orderBy?: CustomDomainGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CustomDomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomDomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CustomDomainFieldRefs;
}
export interface Prisma__CustomDomainClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CustomDomainFieldRefs {
    readonly id: Prisma.FieldRef<"CustomDomain", 'String'>;
    readonly weddingId: Prisma.FieldRef<"CustomDomain", 'String'>;
    readonly requestedById: Prisma.FieldRef<"CustomDomain", 'String'>;
    readonly hostname: Prisma.FieldRef<"CustomDomain", 'String'>;
    readonly status: Prisma.FieldRef<"CustomDomain", 'DomainStatus'>;
    readonly verificationToken: Prisma.FieldRef<"CustomDomain", 'String'>;
    readonly dnsTarget: Prisma.FieldRef<"CustomDomain", 'String'>;
    readonly lastCheckedAt: Prisma.FieldRef<"CustomDomain", 'DateTime'>;
    readonly verifiedAt: Prisma.FieldRef<"CustomDomain", 'DateTime'>;
    readonly activatedAt: Prisma.FieldRef<"CustomDomain", 'DateTime'>;
    readonly failureReason: Prisma.FieldRef<"CustomDomain", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CustomDomain", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CustomDomain", 'DateTime'>;
}
export type CustomDomainFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomDomainSelect<ExtArgs> | null;
    omit?: Prisma.CustomDomainOmit<ExtArgs> | null;
    where: Prisma.CustomDomainWhereUniqueInput;
};
export type CustomDomainFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomDomainSelect<ExtArgs> | null;
    omit?: Prisma.CustomDomainOmit<ExtArgs> | null;
    where: Prisma.CustomDomainWhereUniqueInput;
};
export type CustomDomainFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomDomainSelect<ExtArgs> | null;
    omit?: Prisma.CustomDomainOmit<ExtArgs> | null;
    where?: Prisma.CustomDomainWhereInput;
    orderBy?: Prisma.CustomDomainOrderByWithRelationInput | Prisma.CustomDomainOrderByWithRelationInput[];
    cursor?: Prisma.CustomDomainWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomDomainScalarFieldEnum | Prisma.CustomDomainScalarFieldEnum[];
};
export type CustomDomainFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomDomainSelect<ExtArgs> | null;
    omit?: Prisma.CustomDomainOmit<ExtArgs> | null;
    where?: Prisma.CustomDomainWhereInput;
    orderBy?: Prisma.CustomDomainOrderByWithRelationInput | Prisma.CustomDomainOrderByWithRelationInput[];
    cursor?: Prisma.CustomDomainWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomDomainScalarFieldEnum | Prisma.CustomDomainScalarFieldEnum[];
};
export type CustomDomainFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomDomainSelect<ExtArgs> | null;
    omit?: Prisma.CustomDomainOmit<ExtArgs> | null;
    where?: Prisma.CustomDomainWhereInput;
    orderBy?: Prisma.CustomDomainOrderByWithRelationInput | Prisma.CustomDomainOrderByWithRelationInput[];
    cursor?: Prisma.CustomDomainWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomDomainScalarFieldEnum | Prisma.CustomDomainScalarFieldEnum[];
};
export type CustomDomainCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomDomainSelect<ExtArgs> | null;
    omit?: Prisma.CustomDomainOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomDomainCreateInput, Prisma.CustomDomainUncheckedCreateInput>;
};
export type CustomDomainCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CustomDomainCreateManyInput | Prisma.CustomDomainCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CustomDomainCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomDomainSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomDomainOmit<ExtArgs> | null;
    data: Prisma.CustomDomainCreateManyInput | Prisma.CustomDomainCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CustomDomainUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomDomainSelect<ExtArgs> | null;
    omit?: Prisma.CustomDomainOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomDomainUpdateInput, Prisma.CustomDomainUncheckedUpdateInput>;
    where: Prisma.CustomDomainWhereUniqueInput;
};
export type CustomDomainUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CustomDomainUpdateManyMutationInput, Prisma.CustomDomainUncheckedUpdateManyInput>;
    where?: Prisma.CustomDomainWhereInput;
    limit?: number;
};
export type CustomDomainUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomDomainSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomDomainOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomDomainUpdateManyMutationInput, Prisma.CustomDomainUncheckedUpdateManyInput>;
    where?: Prisma.CustomDomainWhereInput;
    limit?: number;
};
export type CustomDomainUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomDomainSelect<ExtArgs> | null;
    omit?: Prisma.CustomDomainOmit<ExtArgs> | null;
    where: Prisma.CustomDomainWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomDomainCreateInput, Prisma.CustomDomainUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CustomDomainUpdateInput, Prisma.CustomDomainUncheckedUpdateInput>;
};
export type CustomDomainDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomDomainSelect<ExtArgs> | null;
    omit?: Prisma.CustomDomainOmit<ExtArgs> | null;
    where: Prisma.CustomDomainWhereUniqueInput;
};
export type CustomDomainDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomDomainWhereInput;
    limit?: number;
};
export type CustomDomainDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomDomainSelect<ExtArgs> | null;
    omit?: Prisma.CustomDomainOmit<ExtArgs> | null;
};
