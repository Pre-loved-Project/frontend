import { apiFetch } from "@/shared/api/fetcher";
import type { User } from "../model/types/user";

export async function getUser(userId: number): Promise<User> {
  if (!userId) throw new Error("Invalid userId");

  return apiFetch<User>(`/api/users/${userId}`, {
    method: "GET",
  });
}
