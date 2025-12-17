import { useAuthStore } from "@/features/auth/model/auth.store";
import { AuthorizationError } from "@/shared/error/error";

export async function ensureAccessToken(): Promise<string> {
  const { accessToken, setAccessToken, logout } = useAuthStore.getState();

  if (accessToken) return accessToken;

  // accessToken이 없는 경우 refresh 시도
  const refreshed = await fetch("/api/auth/refresh", {
    method: "POST",
    credentials: "include",
  });

  if (!refreshed.ok) {
    logout();
    throw new AuthorizationError(
      "세션이 만료되었습니다.\n다시 로그인 해주세요.",
    );
  }

  const { accessToken: newToken } = await refreshed.json();
  setAccessToken(newToken);
  return newToken;
}
