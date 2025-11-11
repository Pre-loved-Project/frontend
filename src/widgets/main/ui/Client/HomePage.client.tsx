"use client";

import { useSearchStore } from "@/shared/model/search.store";
import SideMenuWrapper from "@/widgets/main/ui/SideMenu/SideMenuWrapper";
import PostList from "@/entities/post/ui/list/PostList";
import { useLayoutEffect, useEffect, useState } from "react";

interface Props {
  initialCategory: string;
  initialSort: string;
  initialKeyword: string;
}

export default function HomePageClient({
  initialCategory,
  initialSort,
  initialKeyword,
}: Props) {
  const [sort, setSort] = useState(initialSort);
  const { category, keyword, setCategory, setKeyword } = useSearchStore();

  useLayoutEffect(() => {
    setCategory(initialCategory);
    setKeyword(initialKeyword);
  }, [initialCategory, initialKeyword, setCategory, setKeyword]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (category !== "전체") params.set("category", category);
    if (sort) params.set("sort", sort);
    if (keyword) params.set("keyword", keyword);
    window.history.replaceState(null, "", `/?${params.toString()}`);
  }, [category, sort, keyword]);

  return (
    <div className="flex flex-col gap-[60px] md:block">
      <aside>
        <SideMenuWrapper selectedCategory={category} />
      </aside>

      <main className="mb-[30px] md:ml-40 md:pr-[30px] md:pl-[25px] lg:pr-[60px] lg:pl-[90px]">
        <PostList
          selectedCategory={category}
          selectedSortOption={sort}
          onSortChange={setSort}
          selectedKeyword={keyword}
        />
      </main>
    </div>
  );
}
