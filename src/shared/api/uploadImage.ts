import { ServerError } from "../error/error";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function uploadImage(imageFile: File): Promise<string> {
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const res = await fetch(`${BASE_URL}/api/image`, {
      method: "POST",
      body: formData,
    });

    // 응답 코드 확인
    if (!res.ok) {
      let errorMessage = `업로드 실패 (code ${res.status})`;
      try {
        const data = await res.json();
        errorMessage = data.detail || data.message || errorMessage;
      } catch {
        const text = await res.text();
        if (text) errorMessage = text;
      }
      throw new ServerError(errorMessage, () => location.replace("/"));
    }

    // 정상 응답 처리
    const data = await res.json();
    return data.imageUrl;
  } catch (err) {
    throw new ServerError(
      "이미지 업로드 중 네트워크 오류가 발생했습니다.",
      () => location.replace("/"),
    );
  }
}
