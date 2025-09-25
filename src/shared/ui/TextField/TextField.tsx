"use client";

import React, { InputHTMLAttributes, useState } from "react";
import cn from "@/shared/lib/cn"; // ✅ cn 유틸 import

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string | number;
  height?: string | number;
  error?: boolean;
}

export const TextField = (props: TextFieldProps) => {
  const { width, height, error, className, ...rest } = props;

  const [text, setText] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={cn(
        "flex items-center rounded-lg transition-colors bg-black-800 px-[20px] py-[23px]",
        error
          ? "border border-red"
          : focused
          ? "border border-blue"
          : "border border-gray-400",
        className
      )}
      style={{ width, height }}
    >
      <input
        {...rest}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          props.onChange?.(e);
        }}
        className={cn("flex-1 bg-transparent outline-none text-[20px] text-white")}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
      />
    </div>
  );
};