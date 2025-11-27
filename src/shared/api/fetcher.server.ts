import { cookies } from "next/headers";
import { AuthorizationError, NotFoundError, ServerError } from "../error/error";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function serverFetch<T>(
  endpoint: string,
  options: RequestInit & { noAuth?: boolean } = {},
): Promise<T> {
  const { headers, noAuth, ...restOptions } = options;
  const cookieStore = await cookies();

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (!noAuth) {
    const accessToken = cookieStore.get("accessToken")?.value;

    console.log("[serverFetch] AccessToken", accessToken);

    if (accessToken) {
      defaultHeaders["Authorization"] = `Bearer ${accessToken}`;
    }
  }

  let res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { ...defaultHeaders, ...headers },
    cache: "no-store",
    ...restOptions,
  });

  if (res.status === 401 && !noAuth) {
    const refreshToken = cookieStore.get("refreshToken")?.value;

    if (!refreshToken) {
      throw new AuthorizationError(
        "세션이 만료되었습니다.\n다시 로그인 해주세요.",
      );
    }

    const refreshRes = await fetch("/api/auth/refresh", {
      method: "POST",
      credentials: "include",
      cache: "no-store",
    });

    console.log("[serverFetch] refreshRes status:", refreshRes.status);

    if (refreshRes.ok) {
      const { accessToken: newToken } = await refreshRes.json();

      res = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
          ...defaultHeaders,
          ...headers,
          Authorization: `Bearer ${newToken}`,
        },
        credentials: "include",
        cache: "no-store",
        ...restOptions,
      });
    } else {
      throw new AuthorizationError(
        "세션이 만료되었습니다.\n다시 로그인 해주세요.",
      );
    }
  }

  if (res.status === 404) {
    throw new NotFoundError();
  }

  if (res.status >= 500) {
    throw new ServerError();
  }

  if (!res.ok) {
    const text = await res.text();
    throw new ServerError(text);
  }

  return res.json() as Promise<T>;
}
