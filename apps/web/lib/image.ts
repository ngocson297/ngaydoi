export interface CompressedImage {
  file: File;
  width: number;
  height: number;
}

export async function compressWeddingImage(source: File): Promise<CompressedImage> {
  if (!source.type.startsWith("image/")) throw new Error("Vui lòng chọn một file ảnh.");
  if (source.size > 12 * 1024 * 1024) throw new Error("Ảnh gốc phải nhỏ hơn 12 MB.");

  const bitmap = await createImageBitmap(source);
  const maxDimension = 1800;
  const scale = Math.min(1, maxDimension / Math.max(bitmap.width, bitmap.height));
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { alpha: false });
  if (!context) throw new Error("Trình duyệt không hỗ trợ xử lý ảnh.");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/webp", 0.82));
  if (!blob) throw new Error("Không thể tối ưu ảnh.");
  const safeName = source.name.replace(/\.[^.]+$/, "").replace(/[^a-zA-Z0-9_-]+/g, "-") || "wedding-image";
  return { file: new File([blob], `${safeName}.webp`, { type: "image/webp" }), width, height };
}
