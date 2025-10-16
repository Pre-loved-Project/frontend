"use client";
import { PostCreateButton } from "@/features/createPost/ui/PostCreateButton/PostCreateButton";
import { usePostCreateModal } from "@/features/createPost/lib/usePostCreateModal";

export default function Home() {
  const { openPostCreateModal } = usePostCreateModal({
    onSuccess: async () => {
      //TODO : 게시글 목록 다시 불러오기
    },
  });
  return (
    <div>
      메인페이지
      <PostCreateButton onClick={openPostCreateModal} />
    </div>
  );
}
