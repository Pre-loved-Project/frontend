import { serverFetch } from "@/shared/api/fetcher.server";
import type { Post } from "@/entities/post/model/types/post";

export async function getMyPosts(status: string) {
  return await serverFetch<{ data: Post[] }>(
    `/api/postings/my?status=${status}`,
    {
      method: "GET",
    },
  );
}
