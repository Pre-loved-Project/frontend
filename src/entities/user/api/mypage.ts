import { apiFetch } from "@/shared/api/fetcher";
import type { ProfileProps } from "@/entities/user/ui/card/Profile";
import type { Post } from "@/entities/post/model/types/post";

export async function getMyProfile() {
  const res = await apiFetch<ProfileProps>("/api/users/me", {
    method: "GET",
  });

  return res;
}

export async function getMyPosts(status: string) {
  const res = await apiFetch<{ data: Post[] }>(
    `/api/postings/my?status=${status}`,
    {
      method: "GET",
    },
  );

  return res;
}
