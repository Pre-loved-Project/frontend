"use client";

import React, { InputHTMLAttributes, useState } from "react";
import cn from "@/shared/lib/cn";
import Image from "next/image";
import eyeIcon from "@/shared/images/eye.svg";
import eyeOffIcon from "@/shared/images/eye-off.svg";

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
        "flex items-center rounded-lg transition-colors bg-black-800 px-[20px] py-[23px]",
        isError
          ? "border border-red"
          : focused
            ? "border border-blue"
            : "border border-gray-400",
        "w-[335px] h-[55px] md:w-[440px] md:h-[55px] xl:w-[640px] xl:h-[70px]",
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
          "flex-1 bg-transparent outline-none text-white",
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
          <Image
            src={hidden ? eyeIcon : eyeOffIcon}
            alt={hidden ? "hidden" : "visible"}
            className="w-[22px] h-[22px] md:w-[22px] md:h-[22px] xl:w-[24px] xl:h-[24px]"
          />
        </button>
      )}
    </div>
  );
};
