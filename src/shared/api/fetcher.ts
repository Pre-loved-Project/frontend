import { useAuthStore } from "@/features/auth/model/auth.store";
import { refreshAccessToken } from "./refresh";
import { useModalStore } from "@/shared/model/modal.store";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit & { noAuth?: boolean },
): Promise<T> {
  const { headers, noAuth, ...restOptions } = options;
  const { accessToken, setAccessToken, logout } = useAuthStore.getState();
  const { openModal, closeModal } = useModalStore.getState();

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

    if (!newToken) throw new Error("세션 만료");

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
    let message = `API Error ${res.status}`;
    try {
      const data = await res.json();
      message = data.message ?? data.detail ?? message;
    } catch {
      const text = await res.text();
      if (text) message = text;
    }
    throw new Error(message);
  }

  return res.json() as Promise<T>;
}
