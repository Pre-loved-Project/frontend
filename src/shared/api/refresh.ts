import { useAuthStore } from "@/features/auth/model/auth.store";
import { useModalStore } from "@/shared/model/modal.store";
import { AuthorizationError } from "../error/error";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function refreshAccessToken(): Promise<string | null> {
  const { setAccessToken, logout } = useAuthStore.getState();
  const { openModal, closeModal } = useModalStore.getState();

  try {
    const res = await fetch(`${BASE_URL}/auth/refresh`, {
      method: "POST",
      credentials: "include",
    });
    console.log(res);

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    const newToken = data.accessToken as string;

    setAccessToken(newToken);

    return newToken;
  } catch (err) {
    throw new AuthorizationError(
      "세션이 만료되었습니다.\n다시 로그인 해주세요",
      () => {
        location.replace("/login");
      },
    );
  }
}
