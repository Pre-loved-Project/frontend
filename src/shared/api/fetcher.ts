import { useModalStore } from "@/shared/model/modal.store";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit,
): Promise<T> {
  const { headers, ...restOptions } = options;
  const { openModal, closeModal } = useModalStore.getState();

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { ...defaultHeaders, ...headers },
    cache: "no-store",
    credentials: "include",
    ...restOptions,
  });

  //AccessToken 만료 처리
  if (res.status === 401) {
    openModal("normal", {
      message: "세션이 만료되었습니다. 다시 로그인 해주세요.",
      buttonText: "확인",
      onClick: () => {
        closeModal();
        location.replace("/login");
      },
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
