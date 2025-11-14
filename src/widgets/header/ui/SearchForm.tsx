"use client";

import { useState, useEffect } from "react";
import cn from "@/shared/lib/cn";
import { useRouter, useSearchParams } from "next/navigation";

interface SearchFormProps {
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
  showIcon?: boolean;
  name?: string;
  onSubmitted?: () => void;
}

const SearchForm = ({
  className,
  placeholder = "검색어를 입력하세요",
  autoFocus,
  showIcon = true,
  name = "keyword",
  onSubmitted,
}: SearchFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("keyword") ?? "");
  const category = searchParams.get("category") ?? "전체";

  useEffect(() => {
    setValue("");
  }, [category]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = value.trim();
    if (!q) return;

    const params = new URLSearchParams(searchParams);
    if (category && category !== "전체") params.set("category", category);
    params.set("keyword", q);

    router.push(`/?${params.toString()}`);
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
