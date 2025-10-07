"use client";

import React, { useState, useRef, useEffect } from "react";
import cn from "@/shared/lib/cn";
import Image from "next/image";
import arrowDown from "@/shared/images/arrow-down.svg";
import arrowUp from "@/shared/images/arrow-up.svg";

interface Option {
  label: string;
  value: string | number;
}

interface DropDownProps {
  options: Option[];
  value?: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  className: string;
}

export const DropDown = ({
  options,
  value,
  onChange,
  placeholder = "선택하세요",
  className,
}: DropDownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
          "w-[335px] h-[55px] text-[14px]",
          "md:w-[360px] md:h-[60px] md:text-[14px]",
          "xl:w-[400px] xl:h-[70px] xl:text-[16px]",
          className,
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
          width={16}
          height={16}
          className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] xl:w-[16px] xl:h-[16px]"
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
          "w-[335px] p-[10px] gap-[5px]",
          "md:w-[360px] md:p-[10px] md:gap-[5px]",
          "xl:w-[400px] xl:p-[10px] xl:gap-[5px]",
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
              "text-gray-400 hover:text-white hover:bg-gray-600",
              "w-[380px] p-[10px] gap-[5px]",
              "md:w-[360px] md:p-[10px] md:gap-[5px]",
              "xl:w-[400px] xl:p-[10px] xl:gap-[5px]",
            )}
          >
            {opt.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
