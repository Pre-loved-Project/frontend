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
      throw new Error(errorMessage);
    }

    // 정상 응답 처리
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
