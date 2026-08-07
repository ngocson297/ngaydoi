declare const PERMISSIONS: readonly ["VIEW", "EDIT"];
export declare class CreateCollaboratorDto {
    email: string;
    permission: (typeof PERMISSIONS)[number];
}
export {};
