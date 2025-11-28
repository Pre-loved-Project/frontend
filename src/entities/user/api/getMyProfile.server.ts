import { serverFetch } from "@/shared/api/fetcher.server";
import type { ProfileProps } from "@/entities/user/ui/card/Profile";

export async function getMyProfile() {
  return await serverFetch<ProfileProps>("/api/users/me", {
    method: "GET",
  });
}
