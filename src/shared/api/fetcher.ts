import { useAuthStore } from "@/features/auth/model/auth.store";
import { AuthorizationError, NotFoundError, ServerError } from "../error/error";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface ApiFetchOptions extends RequestInit {
  noAuth?: boolean;
  useBaseUrl?: boolean;
}

export async function apiFetch<T>(
  endpoint: string,
  options: ApiFetchOptions = {},
): Promise<T> {
  const { headers, noAuth, useBaseUrl = true, ...restOptions } = options;

  const { accessToken, setAccessToken, logout } = useAuthStore.getState();

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (!noAuth && accessToken) {
    defaultHeaders["Authorization"] = `Bearer ${accessToken}`;
  }

  const finalUrl = useBaseUrl ? `${BASE_URL}${endpoint}` : endpoint;

  let res = await fetch(finalUrl, {
    headers: { ...defaultHeaders, ...headers },
    credentials: "include",
    cache: "no-store",
    ...restOptions,
  });

  if (res.status === 401 && !noAuth) {
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
    defaultHeaders["Authorization"] = `Bearer ${newToken}`;

    res = await fetch(finalUrl, {
      headers: { ...defaultHeaders, ...headers },
      credentials: "include",
      cache: "no-store",
      ...restOptions,
    });
  }

  if (!res.ok) {
    if (res.status === 404) {
      throw new NotFoundError();
    }

    if (res.status >= 500) {
      throw new ServerError();
    }
    let message = `API Error ${res.status}`;

    try {
      const data = await res.json();
      message = data.message ?? data.detail ?? message;
    } catch {
      const text = await res.text();
      if (text) message = text;
    }

    throw new ServerError(message);
  }

  return res.json() as Promise<T>;
}
