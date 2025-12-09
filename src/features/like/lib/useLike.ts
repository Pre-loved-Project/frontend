import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateFavorite } from "../api/updateFavorite";

export function useLike(postingId?: number) {
  const queryClient = useQueryClient();

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
      queryClient.setQueryData(["postDetail", postingId], context.previousData);
    },
  });

  return {
    toggleLike: (liked: boolean) => mutation.mutate(liked),
    isLoading: mutation.isPending,
  };
}
