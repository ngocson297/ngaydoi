import { createHash, createHmac } from "node:crypto";
import { constants, promises as fs } from "node:fs";
import { dirname, resolve, sep } from "node:path";
import { Injectable } from "@nestjs/common";

export interface StoredObject {
  storageKey: string;
  publicUrl: string;
}

function sha256(value: string | Buffer): string {
  return createHash("sha256").update(value).digest("hex");
}

function hmac(key: string | Buffer, value: string): Buffer {
  return createHmac("sha256", key).update(value).digest();
}

function amzDate(date: Date): { full: string; short: string } {
  const full = date.toISOString().replace(/[:-]|\.\d{3}/g, "");
  return { full, short: full.slice(0, 8) };
}

function encodePath(path: string): string {
  return path.split("/").map((part) => encodeURIComponent(part)).join("/").replace(/%2F/gi, "/");
}

@Injectable()
export class StorageService {
  private provider(): "LOCAL" | "S3" {
    return ["S3", "R2"].includes((process.env.STORAGE_PROVIDER ?? "LOCAL").toUpperCase()) ? "S3" : "LOCAL";
  }

  async put(storageKey: string, body: Buffer, contentType: string): Promise<StoredObject> {
    if (this.provider() === "S3") {
      await this.s3Request("PUT", storageKey, body, contentType);
      return { storageKey, publicUrl: `${this.require("S3_PUBLIC_BASE_URL").replace(/\/$/, "")}/${encodePath(storageKey)}` };
    }
    const path = this.localPath(storageKey);
    await fs.mkdir(dirname(path), { recursive: true });
    await fs.writeFile(path, body);
    return { storageKey, publicUrl: "" };
  }

  async delete(storageKey: string): Promise<void> {
    if (this.provider() === "S3") {
      await this.s3Request("DELETE", storageKey, Buffer.alloc(0), "application/octet-stream");
      return;
    }
    await fs.rm(this.localPath(storageKey), { force: true });
  }

  async read(storageKey: string): Promise<Buffer> {
    if (this.provider() === "S3") {
      const response = await this.s3Request("GET", storageKey, Buffer.alloc(0), "application/octet-stream");
      return Buffer.from(await response.arrayBuffer());
    }
    return fs.readFile(this.localPath(storageKey));
  }

  async health(): Promise<{ provider: string; ok: boolean; detail: string }> {
    try {
      if (this.provider() === "S3") {
        await this.s3Request("HEAD", "", Buffer.alloc(0), "application/octet-stream");
        return { provider: "S3", ok: true, detail: "Bucket reachable" };
      }
      const root = resolve(process.cwd(), process.env.UPLOAD_DIR ?? "../../../ngaydoi-local-data/uploads");
      await fs.mkdir(root, { recursive: true });
      await fs.access(root, constants.R_OK | constants.W_OK);
      return { provider: "LOCAL", ok: true, detail: root };
    } catch (error) {
      return { provider: this.provider(), ok: false, detail: error instanceof Error ? error.message : String(error) };
    }
  }

  private localPath(storageKey: string): string {
    const root = resolve(process.cwd(), process.env.UPLOAD_DIR ?? "../../../ngaydoi-local-data/uploads");
    const path = resolve(root, storageKey);
    if (path !== root && !path.startsWith(`${root}${sep}`)) throw new Error("Invalid storage key");
    return path;
  }

  private require(key: string): string {
    const value = process.env[key];
    if (!value) throw new Error(`${key} is required for S3 storage`);
    return value;
  }

  private async s3Request(method: string, storageKey: string, body: Buffer, contentType: string): Promise<Response> {
    const endpoint = new URL(this.require("S3_ENDPOINT"));
    const bucket = this.require("S3_BUCKET");
    const region = process.env.S3_REGION ?? "auto";
    const accessKey = this.require("S3_ACCESS_KEY_ID");
    const secretKey = this.require("S3_SECRET_ACCESS_KEY");
    const now = new Date();
    const date = amzDate(now);
    const basePath = endpoint.pathname.replace(/\/$/, "");
    const objectPath = storageKey ? `/${bucket}/${encodePath(storageKey)}` : `/${bucket}`;
    const canonicalUri = `${basePath}${objectPath}`.replace(/\/+/g, "/");
    const payloadHash = sha256(body);
    const canonicalHeaders = `host:${endpoint.host}\nx-amz-content-sha256:${payloadHash}\nx-amz-date:${date.full}\n`;
    const signedHeaders = "host;x-amz-content-sha256;x-amz-date";
    const canonicalRequest = [method, canonicalUri, "", canonicalHeaders, signedHeaders, payloadHash].join("\n");
    const scope = `${date.short}/${region}/s3/aws4_request`;
    const stringToSign = ["AWS4-HMAC-SHA256", date.full, scope, sha256(canonicalRequest)].join("\n");
    const kDate = hmac(`AWS4${secretKey}`, date.short);
    const kRegion = hmac(kDate, region);
    const kService = hmac(kRegion, "s3");
    const kSigning = hmac(kService, "aws4_request");
    const signature = createHmac("sha256", kSigning).update(stringToSign).digest("hex");
    const authorization = `AWS4-HMAC-SHA256 Credential=${accessKey}/${scope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;
    const url = new URL(endpoint.toString());
    url.pathname = canonicalUri;
    const response = await fetch(url, {
      method,
      headers: {
        authorization,
        "content-type": contentType,
        "x-amz-content-sha256": payloadHash,
        "x-amz-date": date.full,
      },
      body: ["GET", "HEAD"].includes(method) ? undefined : new Uint8Array(body),
    });
    if (!response.ok) {
      const detail = method === "HEAD" ? response.statusText : (await response.text()).slice(0, 500);
      throw new Error(`S3 ${method} failed (${response.status}): ${detail}`);
    }
    return response;
  }
}
