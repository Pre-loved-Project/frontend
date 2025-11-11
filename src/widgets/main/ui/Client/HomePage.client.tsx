"use client";

import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/entities/post/api/getPosts";
import { useSearchStore } from "@/shared/model/search.store";
import SideMenuWrapper from "@/widgets/main/ui/SideMenu/SideMenuWrapper";
import PostList from "@/entities/post/ui/list/PostList";
import { useState, useEffect, useLayoutEffect } from "react";

interface Props {
  initialCategory: string;
  initialKeyword: string;
  initialSort: string;
  initialPage: number;
}

export default function HomePageClient({
  initialCategory,
  initialKeyword,
  initialSort,
  initialPage,
}: Props) {
  const [sort, setSort] = useState(initialSort);
  const { category, keyword, setCategory, setKeyword } = useSearchStore();

  const { data } = useQuery({
    queryKey: ["posts", category, sort, initialPage, keyword],
    queryFn: () =>
      getPosts({
        category,
        sort,
        page: initialPage,
        keyword,
      }),
  });

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
          initialPosts={data ?? []}
          selectedCategory={category}
          selectedSortOption={sort}
          onSortChange={setSort}
          selectedKeyword={keyword}
        />
      </main>
    </div>
  );
}
