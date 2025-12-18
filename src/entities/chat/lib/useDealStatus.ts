import { useState, useEffect } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { apiFetch } from "@/shared/api/fetcher";
import { Chat, DealStatus } from "../model/types";
import { PostStatus, PostDetail } from "@/entities/post/model/types/post";
import { useModalStore } from "@/shared/model/modal.store";
1;

interface DealResponse {
  chatId: number;
  postingId: number;
  sellerId: number;
  buyerId: number;
  dealStatus: DealStatus;
  postStatus: PostStatus;
  changedBy: number;
  changedAt: string;
}

export const useDealStatus = (
  chatId: number | null,
  initialPostStatus: PostStatus,
  initialDealStatus: DealStatus,
) => {
  const queryClient = useQueryClient();
  const [postStatus, setPostStatus] = useState<PostStatus>(initialPostStatus);
  const [dealStatus, setDealStatus] = useState<DealStatus>(initialDealStatus);

  useEffect(() => {
    setPostStatus(initialPostStatus);
  }, [initialPostStatus]);

  useEffect(() => {
    setDealStatus(initialDealStatus);
  }, [initialDealStatus]);

  const applyUpdate = (update: {
    postStatus: PostStatus;
    dealStatus: DealStatus;
  }) => {
    setPostStatus(update.postStatus);
    setDealStatus(update.dealStatus);
  };

  const { openModal, closeModal } = useModalStore();
  const { mutate: onDealChange, isPending: isLoading } = useMutation<
    DealResponse,
    Error,
    DealStatus
  >({
    mutationFn: async (nextStatus: DealStatus) => {
      if (!chatId) {
        throw new Error("아직 채팅이 시작되지 않았습니다.");
      }
      return await apiFetch<DealResponse>(`/api/chat/${chatId}/deal`, {
        method: "PATCH",
        body: JSON.stringify({ status: nextStatus }),
      });
    },
    onSuccess: (res) => {
      //optimistic update
      const {
        postStatus: updatedPostStatus,
        dealStatus: updatedDealStatus,
        postingId,
        sellerId,
      } = res;

      setPostStatus(updatedPostStatus);
      setDealStatus(updatedDealStatus);
      queryClient.setQueryData<PostDetail>(["postDetail", postingId], (old) => {
        if (!old) return old;
        return {
          ...old,
          status: updatedPostStatus,
        };
      });

      queryClient.invalidateQueries({ queryKey: ["chats"] });
    },
    onError: () => {
      openModal("normal", {
        message: "거래 상태 변경에 실패했습니다.",
        onClick: closeModal,
      });
    },
  });

  return {
    postStatus,
    dealStatus,
    isLoading,
    onDealChange,
    applyUpdate,
  };
};
