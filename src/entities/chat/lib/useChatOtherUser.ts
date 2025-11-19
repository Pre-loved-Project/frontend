import { useEffect, useState } from "react";
import { User } from "@/entities/user/model/types/user";
import { apiFetch } from "@/shared/api/fetcher";
import { handleError } from "@/shared/error/errorHandler";

export const useChatOtherUser = (otherId: number) => {
  const [otherUser, setOtherUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        setIsLoading(true);
        const res = await apiFetch<User>(`/api/users/${otherId}`, {
          method: "GET",
        });
        setOtherUser(res);
      } catch (error) {
        handleError(error, "상대 유저 정보를 가져오는 중 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchUser();
  }, [otherId]);

  return { otherUser, isLoading };
};
