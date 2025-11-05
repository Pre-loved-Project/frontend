"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import cn from "@/shared/lib/cn";

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
  const sp = useSearchParams();
  const [value, setValue] = useState(sp.get(name) ?? "");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(sp.toString());

    const q = value.trim();
    if (q) params.set(name, q);
    else params.delete(name);

    router.replace("/?" + params.toString(), { scroll: true });
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
