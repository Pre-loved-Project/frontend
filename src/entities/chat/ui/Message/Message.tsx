import React from "react";
import cn from "@/shared/lib/cn";
import { MessageProps } from "../../model/types";

export const Message = ({ type, content, isMine }: MessageProps) => {
  const messageBase = cn(
    "break-words rounded-2xl px-4 py-2 text-white text-[14px]",
    isMine ? "bg-gradient-to-r from-[#5097fa] to-[#5363ff]" : "bg-[#9fa6b2]",
  );

  return (
    <>
      {type === "image" ? (
        <img
          src={content}
          alt="chat image"
          className={cn(
            "block rounded-2xl object-cover",
            "h-auto w-auto max-w-[250px]", // 비율 유지
            isMine ? "ml-auto" : "mr-auto",
          )}
        />
      ) : (
        <div className={messageBase}>{content}</div>
      )}
    </>
  );
};
