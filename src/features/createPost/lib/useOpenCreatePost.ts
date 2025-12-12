"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/features/auth/model/auth.store";
import { usePostCreateModal } from "./usePostCreateModal";

export const useOpenCreatePostWithAuth = () => {
  const router = useRouter();
  const isLogined = useAuthStore((state) => state.isLogined);

  const { openPostCreateModal } = usePostCreateModal();

  const handleOpen = () => {
    if (!isLogined) {
      router.push("/login");
      return;
    }

    openPostCreateModal();
  };

  return { handleOpen };
};
