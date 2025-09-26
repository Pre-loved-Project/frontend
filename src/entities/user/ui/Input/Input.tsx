"use client";

import React, { useState } from "react";
import cn from "@/shared/lib/cn";
import { TextField } from "@/shared/ui/TextField/TextField";

type InputSize = "sm" | "md" | "lg";
type InputWidthSize = "long" | "short"

interface InputProps {
  size?: InputSize;
  widthSize? : InputWidthSize
  label?: string;
  value?: string;
  placeholder?: string;
  isHiddenable?: boolean;
  isError?: boolean;
  message?: string;        // 가이드 메시지
  errorMessage?: string;   // 에러 메시지
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const labelSizeMap: Record<InputSize, string> = {
  sm: "text-[14px]",
  md: "text-[16px]",
  lg: "text-[16px]",
};

const messageSizeMap: Record<InputSize, string> = {
  sm: "text-[12px]",
  md: "text-[12px]",
  lg: "text-[14px]",
};

export const Input = ({
  size = "lg",
  widthSize = "long",
  label,
  value,
  placeholder,
  isHiddenable = false,
  isError = false,
  message,
  errorMessage,
  onChange,
}: InputProps) => {

  // 메시지 우선순위 로직
  let helperText: string | null = null;
  let helperClass = "text-gray-400";

  if (isError) {
    helperText = errorMessage ?? "";
    helperClass = "text-red";
  } else if (!isError && !value) {
    helperText = message ?? "";
    helperClass = "text-gray-400";
  }

  return (
    <div className="flex flex-col gap-[6px]">
      {label && (
        <label className={cn("font-medium text-white", labelSizeMap[size])}>
          {label}
        </label>
      )}

      <TextField
        fieldSize={size}
        widthSize={widthSize}
        value={value}
        placeholder={placeholder}
        isHiddenable={isHiddenable}
        isError={isError}
        onChange={onChange}
      />

      {helperText && (
        <span className={cn("mt-1", messageSizeMap[size], helperClass)}>
          {helperText}
        </span>
      )}
    </div>
  );
};