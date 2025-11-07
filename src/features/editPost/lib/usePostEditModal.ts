"use client";

import { useModalStore } from "@/shared/model/modal.store";

export const usePostEditModal = (handlers?: {
  onSuccess?: () => void;
  onFailure?: () => void;
}) => {
  const { openModal, closeModal } = useModalStore();

  const openPostEditModal = (
    postId: number,
    title: string,
    price: number,
    category: string,
    content: string,
    images: string[],
  ) => {
    openModal("editPost", {
      postId,
      title,
      price,
      category,
      content,
      images,
      onClose: () => closeModal(),
      onEdit: () => {
        closeModal();

        handlers?.onSuccess?.();

        setTimeout(() => {
          openModal("normal", {
            message: "게시물 수정이 완료되었습니다.",
            buttonText: "확인",
            onClick: () => closeModal(),
          });
        }, 100);
      },
      onError: (message: string) => {
        closeModal();

        handlers?.onFailure?.();

        openModal("normal", {
          message: "게시물 수정 중 오류가 발생했습니다. " + message,
          buttonText: "확인",
          onClick: () => closeModal(),
        });
      },
    });
  };

  return { openPostEditModal };
};
