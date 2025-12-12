import {
  AuthorizationError,
  NotFoundError,
  ServerError,
  BaseError,
} from "../error/error";

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit & { noAuth?: boolean } = {},
): Promise<T> {
  const { noAuth, headers, ...restOptions } = options;

  const res = await fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    credentials: "include",
    cache: "no-store",
    ...restOptions,
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

    if (res.status === 401 && !noAuth) {
      throw new AuthorizationError(
        "세션이 만료되었습니다.\n다시 로그인 해주세요.",
      );
    }

    if (res.status === 404) {
      throw new NotFoundError();
    }

    if (res.status >= 500) {
      throw new ServerError(message, res.status);
    }
    throw new BaseError(message, res.status);
  }

  return res.json() as Promise<T>;
}
