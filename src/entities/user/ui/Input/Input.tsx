"use client";

import React from "react";
import cn from "@/shared/lib/cn";
import { TextField } from "@/shared/ui/TextField/TextField";

interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  isHiddenable?: boolean;
  isError?: boolean;
  message?: string; // 가이드 메시지
  errorMessage?: string; // 에러 메시지
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input = ({
  label,
  value,
  placeholder,
  isHiddenable = false,
  isError = false,
  message,
  errorMessage,
  onChange,
  className,
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
    <div className={cn("flex flex-col gap-[6px]", className)}>
      {label && (
        <label
          className={cn(
            "font-medium text-black-800",
            "text-[14px] md:text-[16px] xl:text-[16px]",
          )}
        >
          {label}
        </label>
      )}

      <TextField
        value={value}
        placeholder={placeholder}
        isHiddenable={isHiddenable}
        isError={isError}
        onChange={onChange}
      />

      {helperText && (
        <span
          className={cn(
            "mt-1",
            "text-[12px] md:text-[12px] xl:text-[14px]",
            helperClass,
          )}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};
