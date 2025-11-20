import { useAuthStore } from "@/features/auth/model/auth.store";
import { refreshAccessToken } from "./refresh";
import { useModalStore } from "@/shared/model/modal.store";
import { AuthorizationError, NotFoundError, ServerError } from "../error/error";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit & { noAuth?: boolean },
): Promise<T> {
  const { headers, noAuth, ...restOptions } = options;
  const { accessToken } = useAuthStore.getState();

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (!noAuth && typeof window !== "undefined") {
    defaultHeaders["Authorization"] = `Bearer ${accessToken}`;
  }

  let res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { ...defaultHeaders, ...headers },
    cache: "no-store",
    credentials: "include",
    ...restOptions,
  });

  //AccessToken 만료 처리
  if (res.status === 401 && !noAuth) {
    const newToken = await refreshAccessToken();

    if (!newToken)
      throw new AuthorizationError(
        "세션이 만료되었습니다.\n다시 로그인해주세요",
        () => location.replace("/login"),
      );

    defaultHeaders["Authorization"] = `Bearer ${newToken}`;

    //동일한 경로에 요청 재시도
    res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: { ...defaultHeaders, ...headers },
      cache: "no-store",
      credentials: "include",
      ...restOptions,
    });
  }

  if (!res.ok) {
    // 분기처리
    if (res.status === 404) {
      throw new NotFoundError("요청한 리소스를 찾을 수 없습니다.", () => {
        location.replace("/");
      });
    }

    if (res.status >= 500) {
      throw new ServerError("서버 오류가 발생했습니다.", () => {
        location.replace("/");
      });
    }

    // 기타 오류 → 500 취급
    throw new ServerError("알 수 없는 서버 오류", () => {
      location.replace("/");
    });
  }

  return res.json() as Promise<T>;
}
