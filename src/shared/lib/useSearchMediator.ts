import { useEffect } from "react";
import { useSearchStore } from "@/shared/model/search.store";

export function useSearchMediator({
  initialCategory,
  initialKeyword,
  initialSort,
}: {
  initialCategory: string;
  initialKeyword: string;
  initialSort: string;
}) {
  const { category, keyword, sort, setCategory, setKeyword, setSort } =
    useSearchStore();

  // SSR 초기값 → Zustand 반영
  useEffect(() => {
    setCategory(initialCategory);
    setKeyword(initialKeyword);
    setSort(initialSort);
  }, [
    initialCategory,
    initialKeyword,
    initialSort,
    setCategory,
    setKeyword,
    setSort,
  ]);

  // Zustand 상태 → URL 동기화
  useEffect(() => {
    const params = new URLSearchParams();

    if (category !== "전체") params.set("category", category);
    if (sort) params.set("sort", sort);
    if (keyword) params.set("keyword", keyword);

    window.history.replaceState(null, "", `/?${params.toString()}`);
  }, [category, sort, keyword]);
}
