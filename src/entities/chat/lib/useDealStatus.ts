import { useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { apiFetch } from "@/shared/api/fetcher";
import { DealStatus } from "../model/types";
import { PostStatus } from "@/entities/post/model/types/post";
import { useModalStore } from "@/shared/model/modal.store";

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
      setPostStatus(res.postStatus);
      setDealStatus(res.dealStatus);
      queryClient.invalidateQueries({ queryKey: ["chats"] });
      queryClient.invalidateQueries({
        queryKey: ["postDetail", res.postingId],
      });
      //TODO: 소켓을 통한 시스템 메시지 송/수신 및 상대방 postStatus, dealStatus update
      openModal("normal", {
        message: "거래 상태가 변경되었습니다.",
        onClick: closeModal,
      });
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
