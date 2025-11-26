import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
      redirect("/login");
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
      redirect("/login");
    }
  }

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `API Error ${res.status}`);
  }

  return res.json() as Promise<T>;
}
