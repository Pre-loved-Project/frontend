import { headers } from "next/headers";
import {
  NotFoundError,
  ServerError,
  AuthorizationError,
  BaseError,
} from "../error/error";
import { getBaseUrl } from "./config";

export async function serverFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const { headers: extraHeaders = {}, ...restOptions } = options;

  const h = await headers();
  const cookie = h.get("cookie") ?? "";

  const BASE_URL = await getBaseUrl();
  const url = `${BASE_URL}${endpoint}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...extraHeaders,
      Cookie: cookie,
    },
    cache: "no-store",
    ...restOptions,
  }).catch(() => {
    throw new ServerError(
      "네트워크 오류가 발생했습니다.\n인터넷 연결을 확인하고 다시 시도해주세요.",
      res.status,
    );
  });

  if (!res.ok) {
    let message = `요청 실패 (${res.status})`;

    try {
      const data = await res.json();
      if (typeof data === "object" && data?.message) {
        message = data.message;
      }
    } catch {
      // 기본 메시지
    }

    if (res.status === 401) throw new AuthorizationError();
    if (res.status === 404) throw new NotFoundError();
    if (res.status >= 500) throw new ServerError(message, res.status);
    throw new BaseError(message, res.status);
  }

  return res.json() as Promise<T>;
}
