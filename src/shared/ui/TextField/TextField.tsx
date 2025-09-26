"use client";

import React, { InputHTMLAttributes, useState } from "react";
import cn from "@/shared/lib/cn";
import Image from "next/image";
import eyeIcon from "@/shared/images/eye.svg"
import eyeOffIcon from "@/shared/images/eye-off.svg"

type TextFieldSize =  "sm" | "md" | "lg";
type TextFieldWidthSize = "long" | "short";

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  fieldSize?: TextFieldSize;
  widthSize?: TextFieldWidthSize;
  isError?: boolean;
  isHiddenable?: boolean;
}

const styleMap: Record<
  TextFieldSize,
  {
    widthMap: Record<TextFieldWidthSize, number>;
    height: number;
    textSize: string;
    iconSize: { w: number; h: number };
  }
> = {
  lg: {
    widthMap: { long: 640, short: 400 },
    height: 70,
    textSize: "text-[16px] placeholder:text-[16px]",
    iconSize: { w: 24, h: 24 },
  },
  md: {
    widthMap: { long: 440, short: 360 },
    height: 55,
    textSize: "text-[14px] placeholder:text-[14px]",
    iconSize: { w: 22, h: 22 },
  },
  sm: {
    widthMap: { long: 335, short: 335 },
    height: 55,
    textSize: "text-[14px] placeholder:text-[14px]",
    iconSize: { w: 22, h: 22 },
  },
};

export const TextField = ({
  fieldSize = "lg",
  widthSize = "long",
  isError = false,
  isHiddenable = false,
  className,
  ...rest
} : TextFieldProps) => {
  const [text, setText] = useState("");
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(isHiddenable); //비밀번호 시 숨겨진 상태로 시작

  const { widthMap, height, textSize, iconSize} = styleMap[fieldSize];
  const width = widthMap[widthSize];

  return (
    <div
      className={cn(
        "flex items-center rounded-lg transition-colors bg-black-800 px-[20px] py-[23px]",
        isError
          ? "border border-red"
          : focused
          ? "border border-blue"
          : "border border-gray-400",
      )}
      style={{ width, height }}
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
          textSize,
          "flex-1 bg-transparent outline-none text-white",
          className
        )}
        onFocus={(e) => {
          setFocused(true);
        }}
        onBlur={(e) => {
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
            width={iconSize.w}
            height={iconSize.h}
          />
        </button>
      )}
    </div>
  );
};