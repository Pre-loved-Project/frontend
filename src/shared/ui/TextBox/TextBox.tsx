"use client";

import React, { useState } from "react";
import cn from "@/shared/lib/cn";

interface TextBoxProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  maxLength?: number;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextBox = ({
  value,
  maxLength = 300,
  className,
  onChange,
  ...props
}: TextBoxProps) => {
  const [text, setText] = useState("");
  return (
    <div
      className={cn(
        "relative",
        "w-[295px] h-[120px]",
        "md:w-[360px] md:h-[120px]",
        "xl:w-[400px] xl:h-[128px]",
        className,
      )}
    >
      <textarea
        {...props}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          onChange?.(e);
        }}
        maxLength={maxLength}
        className={cn(
          "resize-none rounded-lg border border-gray-400 bg-black-800",
          "text-white placeholder-gray-400 focus:border-blue outline-none",
          "p-5 w-full h-full",
          "text-[14px] md:text-[14px] xl:text-[16px]",
          className,
        )}
      />
      {/* 글자수 카운트 */}
      <div className="absolute bottom-3 right-4 text-sm text-gray-400">
        {text.length}/{maxLength}
      </div>
    </div>
  );
};
