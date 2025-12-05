import { headers } from "next/headers";
import { NotFoundError, ServerError, AuthorizationError } from "../error/error";
import { getBaseUrl } from "./config";

export async function serverFetch<T>(
  endpoint: string,
  options: RequestInit,
): Promise<T> {
  const { headers: extraHeaders = {}, ...restOptions } = options;

  const h = await headers();
  const cookie = h.get("cookie") ?? "";

  const BASE_URL = getBaseUrl();
  const url = `${BASE_URL}${endpoint}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...headers,
      ...extraHeaders,
      Cookie: cookie,
    },
    cache: "no-store",
    ...restOptions,
  });

  if (res.status === 401) {
    throw new AuthorizationError(
      "세션이 만료되었습니다.\n다시 로그인 해주세요.",
    );
  }

  if (!res.ok) {
    if (res.status === 404) throw new NotFoundError();
    if (res.status >= 500) throw new ServerError();

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
