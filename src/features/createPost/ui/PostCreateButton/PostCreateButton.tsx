"use client";

import React from "react";
import cn from "@/shared/lib/cn";
import AddIcon from "@/shared/images/add.svg";

interface PostCreateButtonProps {
  onClick: () => void;
  className?: string;
}

export const PostCreateButton = ({
  onClick,
  className,
}: PostCreateButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        `fixed right-8 bottom-8 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gradient-to-r from-[#5097fa] to-[#5363ff] shadow-lg shadow-blue-400/30 transition-all duration-200 hover:scale-105 active:scale-95`,
        className,
      )}
    >
      <AddIcon />
    </button>
  );
};
