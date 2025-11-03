"use client";

import React, { useState, useRef, useEffect } from "react";
import cn from "@/shared/lib/cn";

interface Option {
  label: string;
  value: string | number;
}

interface DropDownProps {
  options: Option[];
  value?: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  className?: string;
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
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "bg-black-800 flex cursor-pointer items-center justify-between rounded-lg border px-4 transition-colors",
          open ? "border-blue" : "border-gray-400",
          "h-[55px] w-[335px] text-[14px]",
          "md:h-[60px] md:w-[360px] md:text-[14px]",
          "xl:h-[70px] xl:w-[400px] xl:text-[16px]",
          className,
        )}
      >
        <span className={value ? "text-white" : "text-gray-400"}>
          {value
            ? options.find((opt) => opt.value === value)?.label
            : placeholder}
        </span>
        {open ? (
          <img
            src="/icons/arrow-up.svg"
            alt="arrow up"
            aria-label="arrow up"
            className="h-[12px] w-[12px] md:h-[14px] md:w-[14px] xl:h-[16px] xl:w-[16px]"
          />
        ) : (
          <img
            src="/icons/arrow-down.svg"
            alt="arrow down"
            aria-label="arrow down"
            className="h-[12px] w-[12px] md:h-[14px] md:w-[14px] xl:h-[16px] xl:w-[16px]"
          />
        )}
      </div>

      <ul
        className={cn(
          "bg-black-800 absolute top-full left-0 z-10 mt-0.5 rounded-lg",
          "border border-gray-400",
          "origin-top transform-gpu overflow-hidden",
          "transition-[opacity,transform] duration-200",
          "max-h-60 overflow-y-auto",
          "w-[335px] gap-[5px] p-[10px]",
          "md:w-[360px] md:gap-[5px] md:p-[10px]",
          "xl:w-[400px] xl:gap-[5px] xl:p-[10px]",
          className,
          open
            ? "pointer-events-auto scale-y-100 opacity-100"
            : "pointer-events-none scale-y-0 opacity-0",
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
              "mt-1 flex cursor-pointer items-center rounded-md px-2 transition-colors",
              "text-gray-400 hover:bg-gray-600 hover:text-white",
              "w-[380px] gap-[5px] p-[10px]",
              "md:w-[360px] md:gap-[5px] md:p-[10px]",
              "xl:w-[400px] xl:gap-[5px] xl:p-[10px]",
              className,
            )}
          >
            {opt.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
