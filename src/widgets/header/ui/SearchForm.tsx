"use client";

import { useState, useEffect } from "react";
import cn from "@/shared/lib/cn";
import { useRouter, usePathname } from "next/navigation";
import { useSearchStore } from "@/shared/model/search.store";
import { SearchCommands } from "@/shared/commands/SearchCommands";

const SearchForm = ({
  className,
  placeholder = "검색어를 입력하세요",
  autoFocus,
  showIcon = true,
  name = "keyword",
  onSubmitted,
}: {
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
  showIcon?: boolean;
  name?: string;
  onSubmitted?: () => void;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { category, keyword } = useSearchStore();
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("");
    SearchCommands.changeKeyword("");
  }, [category]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = value.trim();
    if (q === keyword) return;

    if (pathname === "/") {
      SearchCommands.changeKeyword(q);
    } else {
      const params = new URLSearchParams({
        category,
        keyword: q,
      });
      router.push(`/?${params.toString()}`);
    }

    onSubmitted?.();
  };

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "flex h-12 w-[291px] items-center gap-3 rounded-lg bg-[#252530] px-4 py-3",
        className,
      )}
      role="search"
    >
      {showIcon && (
        <img
          src="/icons/search.svg"
          alt="search"
          aria-hidden="true"
          className="h-6 w-6 shrink-0"
        />
      )}
      <input
        name={name}
        type="search"
        placeholder={placeholder}
        aria-label="search-box"
        autoComplete="off"
        autoFocus={autoFocus}
        className="w-full bg-transparent text-white placeholder-gray-600 outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="sr-only">
        검색
      </button>
    </form>
  );
};

export default SearchForm;
