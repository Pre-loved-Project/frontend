import { AuthorizationError, NotFoundError, ServerError } from "../error/error";

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

  if (res.status === 401 && !noAuth) {
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
