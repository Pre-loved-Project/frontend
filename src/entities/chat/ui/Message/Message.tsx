import React from "react";
import cn from "@/shared/lib/cn";
import Image from "next/image";

interface MessageProps {
  type: "text" | "image";
  content: string;
  isMine: boolean;
}

export const Message = ({ type, content, isMine }: MessageProps) => {
  const messageBase = cn(
    "max-w-[80%] break-words rounded-2xl px-4 py-2 text-white",
    "text-[14px] xl:text-[16px]",
    isMine ? "bg-gradient-to-r from-[#5097fa] to-[#5363ff]" : "bg-[#9fa6b2]",
  );

  return (
    <>
      {type === "image" ? (
        <Image
          src={content}
          width={200}
          height={200}
          alt="chat image"
          className="h-auto max-w-[50%] rounded-2xl object-cover"
        />
      ) : (
        <div className={messageBase}>{content}</div>
      )}
    </>
  );
};

export default Message;
