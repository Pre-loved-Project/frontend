import { apiFetch } from "@/shared/api/fetcher";
import type { Chat } from "@/entities/chat/model/types";

export async function fetchChatList(role?: "buyer" | "seller") {
  const query = new URLSearchParams();
  if (role) query.set("role", role);

  const data = await apiFetch<{ chats: Chat[] }>(
    `/api/chat/me?${query.toString()}`,
    {
      method: "GET",
    },
  );
  return data.chats;
}
