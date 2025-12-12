import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateFavorite } from "../api/updateFavorite";
import { useModalStore } from "@/shared/model/modal.store";

export function useLike(postingId?: number) {
  const queryClient = useQueryClient();
  const { openModal, closeModal } = useModalStore();

  const mutation = useMutation({
    mutationFn: async (liked: boolean) => {
      if (!postingId) throw new Error("Invalid postingId");
      const res = await updateFavorite(postingId, liked);
      return res.favorited;
    },

    onMutate: async (newLiked) => {
      if (!postingId) return;

      await queryClient.cancelQueries({ queryKey: ["postDetail", postingId] });
      const previousData = queryClient.getQueryData<{
        isFavorite: boolean;
        likeCount: number;
      }>(["postDetail", postingId]);

      if (previousData) {
        queryClient.setQueryData(["postDetail", postingId], {
          ...previousData,
          isFavorite: newLiked,
          likeCount: previousData.likeCount + (newLiked ? +1 : -1),
        });
      }

      return { previousData };
    },

    onError: (err, newLiked, context) => {
      if (!postingId || !context?.previousData) return;
      openModal("normal", {
        message: "좋아요 처리 중 오류가 발생했습니다.",
        onClick: () => closeModal(),
      });
      queryClient.setQueryData(["postDetail", postingId], context.previousData);

      console.error(err);
    },
  });

  return {
    toggleLike: (liked: boolean) => mutation.mutate(liked),
    isLoading: mutation.isPending,
  };
}
