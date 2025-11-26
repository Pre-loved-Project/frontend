import { useAuthStore } from "@/features/auth/model/auth.store";
import { useModalStore } from "@/shared/model/modal.store";

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
  const { openModal, closeModal } = useModalStore.getState();

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

      openModal("normal", {
        message: "세션이 만료되었습니다. 다시 로그인 해주세요.",
        buttonText: "확인",
        onClick: () => {
          closeModal();
          location.replace("/login");
        },
      });

      throw new Error("세션 만료");
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
    let message = `API Error ${res.status}`;

    try {
      const data = await res.json();
      message = data.message ?? data.detail ?? message;
    } catch {
      const text = await res.text();
      if (text) message = text;
    }

    throw new Error(message);
  }

  return res.json() as Promise<T>;
}
