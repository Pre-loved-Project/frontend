"use client";

import cn from "@/shared/lib/cn";
import HeartIcon from "@/shared/images/heart.svg";

interface LikeButtonProps {
  liked: boolean;
  loading: boolean;
  onToggle: () => void;
}

const LikeButton = ({ liked, loading, onToggle }: LikeButtonProps) => {
  return (
    <button
      type="button"
      aria-pressed={liked}
      disabled={loading}
      onClick={onToggle}
    >
      <HeartIcon
        width={32}
        height={32}
        className={cn(
          "transition-colors hover:cursor-pointer",
          liked
            ? "text-red-500 [&_path]:fill-current"
            : "text-gray-300 hover:text-red-500 hover:[&_path]:fill-current",
        )}
      />
    </button>
  );
};

export default LikeButton;
