const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit & { noAuth?: boolean },
): Promise<T> {
  const { headers, noAuth, ...restOptions } = options;

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (!noAuth && typeof window !== "undefined") {
    const token = localStorage.getItem("access-token");
    if (token) {
      defaultHeaders["Authorization"] = `Bearer ${token}`;
    }
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { ...defaultHeaders, ...headers },
    cache: "no-store",
    ...restOptions,
  });

  if (!res.ok) {
    let message = `API Error ${res.status}`;
    try {
      const data = await res.json();
      message = data.message ?? message;
    } catch {
      const text = await res.text();
      if (text) message = text;
    }
    throw new Error(message);
  }

  return res.json() as Promise<T>;
}
