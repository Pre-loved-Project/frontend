"use client";

import { useState, useRef, useEffect } from "react";
import cn from "@/shared/lib/cn";

interface Item {
  label: string;
  value: string;
}

interface SelectProps {
  items: Item[];
  selectedItem: string;
  onSelect: (value: string) => void;
  placeholder?: string;
}

const Select = ({
  items,
  selectedItem,
  onSelect,
  placeholder,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedLabel = items.find(
    (item) => item.value === selectedItem,
  )?.label;

  const handleSelect = (value: string) => {
    if (value === selectedItem) return;
    onSelect(value);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={selectRef} className="relative z-20 w-40 text-white">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="sort-menu"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "bg-black-800 flex w-full items-center justify-between rounded-md px-4 py-2 text-sm font-normal transition hover:cursor-pointer hover:border-white",
          open && "border-white",
        )}
      >
        <span>{selectedLabel || placeholder}</span>
        {open ? (
          <img
            src="/icons/arrow-up.svg"
            alt="Arrow Up"
            className="h-auto w-auto"
          />
        ) : (
          <img
            src="/icons/arrow-down.svg"
            alt="Arrow Down"
            className="h-auto w-auto"
          />
        )}
      </button>

      <div
        id="sort-menu"
        role="listbox"
        className={cn(
          "bg-black-900 absolute left-0 mt-1 w-full overflow-hidden rounded-md border border-gray-700 shadow-lg transition-transform duration-150 ease-out",
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0",
        )}
      >
        {items.map((item) => (
          <div
            key={item.value}
            onClick={() => handleSelect(item.value)}
            role="option"
            aria-selected={selectedItem === item.value}
            className={cn(
              "hover:bg-black-800 cursor-pointer px-4 py-2 text-sm",
            )}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
