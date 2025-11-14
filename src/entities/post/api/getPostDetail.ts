import { apiFetch } from "@/shared/api/fetcher";
import type { PostDetail } from "../model/types/post";

export async function getPostDetail(postingId: number): Promise<PostDetail> {
  if (!postingId) throw new Error("Invalid postingId");

  return apiFetch<PostDetail>(`/api/postings/${postingId}`, {
    method: "GET",
  });
}
