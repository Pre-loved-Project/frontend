"use client";

import { useModalStore } from "@/shared/model/modal.store";

export const usePostCreateModal = (handlers?: {
  onSuccess?: () => void;
  onFailure?: () => void;
}) => {
  const { openModal, closeModal } = useModalStore();

  const openPostCreateModal = () => {
    openModal("createPost", {
      onClose: () => closeModal(),
      onCreate: () => {
        closeModal();

        handlers?.onSuccess?.();

        setTimeout(() => {
          openModal("normal", {
            message: "게시물이 성공적으로 등록되었습니다.",
            buttonText: "확인",
            onClick: () => closeModal(),
          });
        }, 100);
      },
    });
  };

  return { openPostCreateModal };
};
