"use client";
import { useState, useEffect } from "react";
import cn from "@/shared/lib/cn";
import { TabSortProps } from "@/widgets/mypage/model/tabSort.types";

const Tab = ({ options, selected, onChange }: TabSortProps) => {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (open) requestAnimationFrame(() => setAnimate(true));
    else setAnimate(false);
  }, [open]);

  const selectedLabel = options.find((opt) => opt.value === selected)?.label;

  const handleSelect = (value: string) => {
    if (value === selected) return;
    onChange(value);
    setOpen(false);
  };

  return (
    <>
      <div className="flex w-fit items-center justify-center xl:hidden">
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="sort-options"
          className="flex items-center justify-between gap-1.25 p-1.25 text-sm leading-none font-normal text-white"
          onClick={() => setOpen((prev) => !prev)}
        >
          {selectedLabel}
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

        {open && (
          <dialog open className="fixed inset-0 z-50">
            <div
              className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
                animate ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <div
              id="sort-options"
              role="listbox"
              aria-label="상품 분류 선택"
              className={`fixed bottom-0 left-0 w-full rounded-t-2xl bg-[#252530] p-5 transition-transform duration-300 ${
                animate ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <div className="mx-auto mb-5 h-1.5 w-10 rounded-full bg-gray-500" />
              <ul className="space-y-3">
                {options.map(({ label, value }) => (
                  <li key={value}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={selected === value}
                      className={`w-full rounded-lg py-2 text-center text-white ${
                        selected === value
                          ? "bg-[#353542]"
                          : "hover:bg-[#353542]/70"
                      }`}
                      onClick={() => {
                        onChange(value);
                        setOpen(false);
                      }}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </dialog>
        )}
      </div>
      <div role="tablist" className="hidden flex-row xl:flex">
        {options.map(({ label, value }) => (
          <button
            key={value}
            role="tab"
            aria-selected={selected === value}
            aria-controls={`panel-${value}`}
            id={`tab-${value}`}
            tabIndex={selected === value ? 0 : -1}
            className={cn(
              "w-40 border-b p-4 text-xl leading-none font-normal transition-colors duration-150 hover:cursor-pointer hover:border-b-white focus-visible:outline-none",
              selected === value
                ? "border-b-white text-white"
                : "border-b-gray-600 text-gray-600",
            )}
            onClick={() => handleSelect(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Tab;
