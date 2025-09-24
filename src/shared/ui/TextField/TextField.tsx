"use client"

import React, { InputHTMLAttributes, useState } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    width?: string | number;
    height?: string | number;
    error?: boolean;
}

export const TextField = (props: TextFieldProps) => {
    const { width, height, error, className, ...rest} = props;

    const [text, setText] = useState("");
    const [focused, setFocused] = useState(false);

    return (
    <div
      className={`
        flex items-center rounded-lg transition-colors
        bg-[#252530]
        px-[20px] py-[23px]
        ${error ? "border-2 border-red-500" : focused ? "border-2 border-[#5097FA]" : "border-2 border-[#353542]"}
        ${className}
      `}
      style={{width, height}}
    >
      <input
        {...rest}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          props.onChange?.(e);
        }}
        className={`flex-1 bg-transparent outline-none font-[Pretendard] text-[20px] ${
          "text-[#F1F1F5]"
        }`}
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