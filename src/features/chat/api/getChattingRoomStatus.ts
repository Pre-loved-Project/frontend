import { apiFetch } from "@/shared/api/fetcher";
export interface ChattingRoomStatus {
  isExist: boolean;
  chatId?: number;
}

export async function getChattingRoomStatus(
  postingId: number,
): Promise<ChattingRoomStatus> {
  if (!postingId) throw new Error("Invalid postingId");

  return apiFetch<ChattingRoomStatus>(`/api/postings/${postingId}/chat`, {
    method: "GET",
  });
}
