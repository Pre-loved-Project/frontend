import "server-only";

import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function serverFetch<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const cookieStore = await cookies();
  const cookieHeader = [
    cookieStore.get("accessToken")
      ? `accessToken=${cookieStore.get("accessToken")?.value}`
      : "",
    cookieStore.get("refreshToken")
      ? `refreshToken=${cookieStore.get("refreshToken")?.value}`
      : "",
  ]
    .filter(Boolean)
    .join("; ");

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieHeader,
    },
    cache: "no-store",
    credentials: "include",
    ...options,
  });

  if (res.status === 401) {
    //TODO: SSR prefetch 시 에러 핸들링 로직 추가
  }

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Server API error: ${res.status}`);
  }

  return res.json() as Promise<T>;
}
