import { serverFetch } from "@/shared/api/fetcher.server";
import { POST_PAGE_SIZE } from "@/entities/post/model/constants/api";
import type { Post } from "@/entities/post/model/types/post";

export async function getPosts({
  category,
  keyword,
  sort,
  page,
}: {
  category: string;
  keyword?: string;
  sort?: string;
  page?: number;
}) {
  const query = new URLSearchParams({
    page: String(page),
    size: String(POST_PAGE_SIZE),
  });

  if (category !== "전체") query.append("category", category);
  if (keyword) query.append("keyword", keyword);
  if (sort) query.append("sort", sort);

  const { data } = await serverFetch<{ data: Post[] }>(
    `/api/postings?${query.toString()}`,
    { method: "GET" },
  );
  return data;
}
