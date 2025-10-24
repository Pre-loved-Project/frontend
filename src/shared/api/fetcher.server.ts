const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function serverFetch<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    ...options,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Server API error: ${res.status}`);
  }

  return res.json() as Promise<T>;
}
