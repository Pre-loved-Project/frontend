import { useState } from "react";
import { updateFavorite } from "../api/updateFavorite";

interface UseLikeOptions {
  postingId?: number;
  liked: boolean;
  onLikedChange: (liked: boolean) => void;
  onCountChange: (delta: number) => void;
}

export function useLike({
  postingId,
  liked,
  onLikedChange,
  onCountChange,
}: UseLikeOptions) {
  const [loading, setLoading] = useState(false);

  const handleLikeToggle = async () => {
    if (!postingId || loading) return;
    setLoading(true);

    const optimisticLiked = !liked;
    onLikedChange(optimisticLiked);
    onCountChange(optimisticLiked ? +1 : -1);

    try {
      const res = await updateFavorite(postingId, optimisticLiked);
      onLikedChange(res.favorited);
    } catch {
      onLikedChange(!optimisticLiked);
      onCountChange(optimisticLiked ? -1 : +1);
    } finally {
      setLoading(false);
    }
  };

  return { liked, loading, handleLikeToggle };
}
