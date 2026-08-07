export interface StoredObject {
    storageKey: string;
    publicUrl: string;
}
export interface StoredObjectHead {
    sizeBytes: number;
    contentType: string | null;
}
export interface PresignedUpload {
    uploadUrl: string;
    headers: Record<string, string>;
    expiresInSeconds: number;
}
export declare class StorageService {
    provider(): "LOCAL" | "S3";
    publicUrl(storageKey: string): string;
    put(storageKey: string, body: Buffer, contentType: string): Promise<StoredObject>;
    presignPut(storageKey: string, contentType: string, expiresInSeconds?: number): Promise<PresignedUpload | null>;
    head(storageKey: string): Promise<StoredObjectHead>;
    delete(storageKey: string): Promise<void>;
    read(storageKey: string): Promise<Buffer>;
    health(): Promise<{
        provider: string;
        ok: boolean;
        detail: string;
    }>;
    private localPath;
    private require;
    private s3Request;
}
