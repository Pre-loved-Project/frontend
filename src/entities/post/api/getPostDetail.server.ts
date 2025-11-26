import { serverFetch } from "@/shared/api/fetcher.server";
import type { PostDetail } from "../model/types/post";

export async function getPostDetail(postingId: number): Promise<PostDetail> {
  if (!postingId) throw new Error("Invalid postingId");

  return serverFetch<PostDetail>(`/api/postings/${postingId}`, {
    method: "GET",
  });
}
