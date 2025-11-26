// src/features/chat/api/createChatRoom.ts
import { apiFetch } from "@/shared/api/fetcher";

interface CreateChattingRoomResponse {
  chatId: number;
  createdAt: string;
}

export async function createChattingRoom(
  postingId: number,
): Promise<CreateChattingRoomResponse> {
  if (!postingId) throw new Error("postingId is required");

  const res = await apiFetch<CreateChattingRoomResponse>(`/api/chat`, {
    method: "POST",
    body: JSON.stringify({ postingId }),
  });
  return res;
}
