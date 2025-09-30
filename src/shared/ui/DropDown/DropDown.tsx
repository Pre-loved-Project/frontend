"use client";

import React, { useState, useRef, useEffect } from "react";
import cn from "@/shared/lib/cn";
import Image from "next/image";
import arrowDown from "@/shared/images/arrow-down.svg";
import arrowUp from "@/shared/images/arrow-up.svg";

type DropDownSize = "sm" | "md" | "lg";
type DropDownWidthSize = "long" | "short";

interface Option {
  label: string;
  value: string | number;
}

interface DropDownProps {
  size?: DropDownSize;
  widthSize?: DropDownWidthSize;
  options: Option[];
  value?: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
}

const styleMap: Record<
  DropDownSize,
  Record<
    DropDownWidthSize,
    {
      wrapper: string;
      optionWrapper: string;
      option: string;
    }
  >
> = {
  lg: {
    long: {
      wrapper: "w-[400px] h-[70px] text-[16px]",
      optionWrapper: "w-[400px] p-[10px] gap-[5px]",
      option: "w-[380px] h-[34px] text-[16px]",
    },
    short: {
      wrapper: "w-[200px] h-[70px] text-[16px]",
      optionWrapper: "w-[200px] p-[10px] gap-[5px]",
      option: "w-[190px] h-[34px] text-[16px]",
    },
  },
  md: {
    long: {
      wrapper: "w-[360px] h-[60px] text-[14px]",
      optionWrapper: "w-[360px] p-[10px] gap-[5px]",
      option: "w-[320px] h-[32px] text-[14px]",
    },
    short: {
      wrapper: "w-[140px] h-[60px] text-[14px]",
      optionWrapper: "w-[140px] p-[10px] gap-[5px]",
      option: "w-[130px] h-[32px] text-[14px]",
    },
  },
  sm: {
    long: {
      wrapper: "w-[335px] h-[55px] text-[14px]",
      optionWrapper: "w-[335px] p-[10px] gap-[5px]",
      option: "w-[310px] h-[32px] text-[14px]",
    },
    short: {
      wrapper: "w-[100px] h-[55px] text-[14px]",
      optionWrapper: "w-[100px] p-[10px] gap-[5px]",
      option: "w-[90px] h-[32px] text-[14px]",
    },
  },
};

export const DropDown = ({
  size = "lg",
  widthSize = "long",
  options,
  value,
  onChange,
  placeholder = "선택하세요",
}: DropDownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { wrapper, optionWrapper, option } = styleMap[size][widthSize];

  // 외부 클릭 시 닫힘
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* 선택 영역 */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex items-center justify-between rounded-lg border bg-black-800 px-4 cursor-pointer transition-colors",
          open ? "border-blue" : "border-gray-400",
          wrapper,
        )}
      >
        <span className={value ? "text-white" : "text-gray-400"}>
          {value
            ? options.find((opt) => opt.value === value)?.label
            : placeholder}
        </span>
        <Image
          src={open ? arrowUp : arrowDown}
          alt="arrow"
          width={10}
          height={10}
        />
      </div>

      {/* 옵션 리스트 */}
      <ul
        className={cn(
          "absolute mt-0.5 top-full left-0 z-10 rounded-lg bg-black-800",
          "border border-gray-400",
          "origin-top overflow-hidden transform-gpu",
          "transition-[opacity,transform] duration-200",
          "max-h-60 overflow-y-auto",
          optionWrapper,
          open
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-0 pointer-events-none",
        )}
      >
        {options.map((opt) => (
          <li
            key={opt.value}
            onClick={() => {
              onChange(opt.value);
              setOpen(false);
            }}
            className={cn(
              "mt-1 flex items-center px-2 rounded-md cursor-pointer transition-colors",
              option,
              "text-gray-400 hover:text-white hover:bg-gray-600",
            )}
          >
            {opt.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
