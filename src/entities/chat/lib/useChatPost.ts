import { useEffect, useState } from "react";
import { PostDetail } from "@/entities/post/model/types/post";
import { apiFetch } from "@/shared/api/fetcher";
import { useModalStore } from "@/shared/model/modal.store";

export const useChatPost = (postingId: number) => {
  const [post, setPost] = useState<PostDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { openModal, closeModal } = useModalStore();

  useEffect(() => {
    async function fetchPost() {
      try {
        setIsLoading(true);
        const res = await apiFetch<PostDetail>(`/api/postings/${postingId}`, {
          method: "GET",
        });
        setPost(res);
      } catch {
        openModal("normal", {
          message: "게시물 정보 조회에 실패했습니다.",
          onClick: () => closeModal(),
        });
      } finally {
        setIsLoading(false);
      }
    }

    fetchPost();
  }, [postingId]);

  return { post, isLoading };
};
