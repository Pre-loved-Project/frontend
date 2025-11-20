import React from "react";
import cn from "@/shared/lib/cn";
import { PostStatus } from "../../model/types/post";

const postStatusMessageMap: Record<PostStatus, string> = {
  SELLING: "판매 중",
  RESERVED: "예약 중",
  SOLD: "판매 완료",
};

const postStatusColorMap: Record<PostStatus, string> = {
  SELLING: "bg-linear-to-r from-[#5097fa] to-[#5363ff] text-[#F1F1F5]",
  RESERVED: "bg-white text-[#5097FA]",
  SOLD: "bg-black text-[#9FA6B2]",
};

interface PostStatusBadgeProps {
  status: PostStatus;
  className?: string;
}

const PostStatusBadge = ({ status, className }: PostStatusBadgeProps) => {
  const message = postStatusMessageMap[status];
  const colorClass = postStatusColorMap[status];

  return (
    <span
      className={cn(
        "inline-block rounded-md px-2 py-[2px] text-[14px] font-medium",
        colorClass,
        className,
      )}
    >
      {message}
    </span>
  );
};

export default PostStatusBadge;
