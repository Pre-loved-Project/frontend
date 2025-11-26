import { serverFetch } from "@/shared/api/fetcher.server";
import type { User } from "../model/types/user";

export async function getUser(userId: number): Promise<User> {
  if (!userId) throw new Error("Invalid userId");

  return serverFetch<User>(`/api/users/${userId}`, {
    method: "GET",
  });
}
