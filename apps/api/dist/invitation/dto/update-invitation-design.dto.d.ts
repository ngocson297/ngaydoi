export declare class GiftTransferAccountDto {
    id: string;
    side: "BRIDE" | "GROOM" | "SHARED";
    label: string;
    mode?: "UPLOAD" | "VIETQR";
    qrAssetId?: string;
    qrImageUrl?: string;
    bankBin: string;
    bankCode: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    transferNote: string;
}
export declare class UpdateInvitationDesignDto {
    templateKey?: string;
    paletteKey?: string;
    primaryColor?: string;
    accentColor?: string;
    backgroundColor?: string;
    surfaceColor?: string;
    textColor?: string;
    headingFont?: string;
    bodyFont?: string;
    heroEyebrow?: string;
    greeting?: string;
    storyTitle?: string;
    galleryTitle?: string;
    eventsTitle?: string;
    countdownTitle?: string;
    giftTitle?: string;
    giftMessage?: string;
    giftAccounts?: GiftTransferAccountDto[];
    footerMessage?: string;
    showHero?: boolean;
    showFamily?: boolean;
    showStory?: boolean;
    showGallery?: boolean;
    showEvents?: boolean;
    showCountdown?: boolean;
    showGift?: boolean;
    showFooter?: boolean;
    musicEnabled?: boolean;
    musicUrl?: string;
    sectionOrder?: string[];
}
