"use client";

import { useModalStore } from "@/shared/model/modal.store";

export const useEditProfileModal = (
  userProfile?: {
    userId: number;
    nickname: string;
    introduction?: string;
    imageUrl?: string;
    category?: string;
  },
  handlers?: {
    onSuccess?: () => void;
    onFailure?: () => void;
  },
) => {
  const { openModal, closeModal } = useModalStore();

  const openEditProfileModal = () => {
    if (!userProfile) return;

    openModal("editProfile", {
      ...userProfile,
      onClose: () => closeModal(),

      onSave: async () => {
        closeModal();

        handlers?.onSuccess?.();

        setTimeout(() => {
          openModal("normal", {
            message: "프로필이 성공적으로 수정되었습니다.",
            buttonText: "확인",
            onClick: () => closeModal(),
          });
        }, 100);
      },

      onError: () => {
        closeModal();

        handlers?.onFailure?.();

        openModal("normal", {
          message: "프로필 수정에 실패했습니다.",
          buttonText: "확인",
          onClick: () => closeModal(),
        });
      },
    });
  };

  return { openEditProfileModal };
};
