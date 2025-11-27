import { convertToWebP } from "../lib/image/convertToWebP";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function uploadImage(imageFile: File): Promise<string> {
  try {
    const webpBlob = await convertToWebP(imageFile);

    const webpFile = new File(
      [webpBlob],
      imageFile.name.replace(/\.[^.]+$/, ".webp"),
      {
        type: "image/webp",
      },
    );

    const formData = new FormData();
    formData.append("image", webpFile);

    const res = await fetch(`${BASE_URL}/api/image`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      let errorMessage = `업로드 실패 (code ${res.status})`;
      try {
        const data = await res.json();
        errorMessage = data.detail || data.message || errorMessage;
      } catch {
        const text = await res.text();
        if (text) errorMessage = text;
      }
      throw new Error(errorMessage);
    }

    const data = await res.json();
    return data.imageUrl;
  } catch (err) {
    console.error("이미지 업로드 중 오류 발생:", err);
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("알 수 없는 오류가 발생했습니다.");
  }
}
