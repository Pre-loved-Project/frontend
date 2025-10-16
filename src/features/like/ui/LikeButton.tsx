"use client";
import { useState } from "react";
import cn from "@/shared/lib/cn";
import HeartIcon from "@/shared/images/heart.svg";

interface LikeButtonProps {
  size?: number;
}

const LikeButton = ({ size = 32 }: LikeButtonProps) => {
  const [liked, setLiked] = useState(false);
  return (
    <button
      type="button"
      aria-pressed={liked}
      onClick={() => setLiked((v) => !v)}
    >
      <HeartIcon
        width={32}
        height={32}
        className={cn(
          "hover:cursor-pointer",
          liked
            ? "text-red-500 [&_path]:fill-current"
            : "text-gray-300 hover:text-red-500 hover:[&_path]:fill-current",
        )}
      />
    </button>
  );
};

export default LikeButton;
