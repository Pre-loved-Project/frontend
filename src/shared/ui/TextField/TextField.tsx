"use client";

import React, { InputHTMLAttributes, useState } from "react";
import cn from "@/shared/lib/cn";
import Image from "next/image";
import EyeIcon from "@/shared/images/eye.svg";
import EyeOffIcon from "@/shared/images/eye-off.svg";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  isHiddenable?: boolean;
}

export const TextField = ({
  isError = false,
  isHiddenable = false,
  className,
  ...rest
}: TextFieldProps) => {
  const [text, setText] = useState("");
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(isHiddenable); //비밀번호 시 숨겨진 상태로 시작

  return (
    <div
      className={cn(
        "bg-black-800 flex items-center rounded-lg px-[20px] py-[23px] transition-colors",
        isError
          ? "border-red border"
          : focused
            ? "border-blue border"
            : "border border-gray-400",
        "h-[55px] w-[335px] md:h-[55px] md:w-[440px] xl:h-[70px] xl:w-[640px]",
        className,
      )}
    >
      <input
        {...rest}
        type={hidden ? "password" : "text"}
        value={rest.value ?? text} //부모에서 내용 control 가능!
        onChange={(e) => {
          setText(e.target.value);
          rest.onChange?.(e); //text 수정 시 handling
        }}
        className={cn(
          "flex-1 bg-transparent text-white outline-none",
          "text-[14px] md:text-[14px] xl:text-[16px]",
        )}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
      />

      {isHiddenable && (
        <button
          type="button"
          onClick={() => setHidden((prev) => !prev)}
          className="ml-2"
        >
          {hidden ? (
            <EyeIcon
              aria-label="비밀번호 숨김 상태"
              className="h-[22px] w-[22px] md:h-[22px] md:w-[22px] xl:h-[24px] xl:w-[24px]"
            />
          ) : (
            <EyeOffIcon
              aria-label="비밀번호 표시 상태"
              className="h-[22px] w-[22px] md:h-[22px] md:w-[22px] xl:h-[24px] xl:w-[24px]"
            />
          )}
        </button>
      )}
    </div>
  );
};
