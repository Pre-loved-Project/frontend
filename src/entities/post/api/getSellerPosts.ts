import { apiFetch } from "@/shared/api/fetcher";
import { POST_PAGE_SIZE } from "../model/constants/api";
import type { Post } from "../model/types/post";

interface GetSellerPostsParams {
  userId: number;
  page?: number;
  size?: number;
}

export async function getSellerPosts({
  userId,
  page = 1,
  size = POST_PAGE_SIZE,
}: GetSellerPostsParams): Promise<{ data: Post[] }> {
  if (!userId) throw new Error("Invalid userId");

  const query = new URLSearchParams({
    page: String(page),
    size: String(size),
  });

  return apiFetch<{ data: Post[] }>(
    `/api/postings/user/${userId}?${query.toString()}`,
    { method: "GET" },
  );
}
