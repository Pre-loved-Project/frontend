import { useAuthStore } from "@/features/auth/model/auth.store";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function refreshAccessToken(): Promise<string | null> {
  try {
    const res = await fetch(`${BASE_URL}/auth/refresh`, {
      method: "POST",
      credentials: "include", // 쿠키 전송
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    const newAccessToken = data.accessToken as string;

    // zustand 업데이트
    useAuthStore.getState().setAccessToken(newAccessToken);

    return newAccessToken;
  } catch {
    return null;
  }
}
