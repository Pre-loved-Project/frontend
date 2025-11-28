import { useEffect, useState } from "react";
import { User } from "@/entities/user/model/types/user";
import { apiFetch } from "@/shared/api/fetcher";
import { useModalStore } from "@/shared/model/modal.store";

export const useChatOtherUser = (otherId: number) => {
  const [otherUser, setOtherUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { openModal, closeModal } = useModalStore();

  useEffect(() => {
    async function fetchUser() {
      try {
        setIsLoading(true);
        const res = await apiFetch<User>(`/api/users/${otherId}`, {
          method: "GET",
        });
        setOtherUser(res);
      } catch {
        openModal("normal", {
          message: "상대 유저 정보 조회에 실패했습니다.",
          onClick: () => closeModal(),
        });
      } finally {
        setIsLoading(false);
      }
    }

    fetchUser();
  }, [otherId]);

  return { otherUser, isLoading };
};
