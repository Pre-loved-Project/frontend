import { apiFetch } from "@/shared/api/fetcher";

export async function updateFavorite(postingId: number, favorite: boolean) {
  return await apiFetch<{
    message: string;
    postingId: number;
    favorited: boolean;
    updatedAt: string;
  }>(`/api/postings/${postingId}/favorite`, {
    method: "PUT",
    body: JSON.stringify({ favorite }),
  });
}
