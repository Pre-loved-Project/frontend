"use client";

import { useState, useEffect } from "react";
import SideMenu from "@/widgets/main/ui/SideMenu/SideMenu";
import PostCard from "@/entities/post/ui/card/PostCard";
import SortMenu from "@/widgets/main/ui/Select/Select";
import type { Post } from "@/entities/post/model/types/post";
import {
  SORT_OPTION_LIST,
  CATEGORY_LIST,
} from "@/widgets/main/model/constants";
import { apiFetch } from "@/shared/api/fetcher";
import { POST_PAGE_SIZE } from "@/entities/post/model/constants/api";
import { useInfiniteScroll } from "@/shared/lib/useInfiniteScroll";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSortOption, setSelectedSortOption] = useState(
    SORT_OPTION_LIST[0].value,
  );
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async (pageNum: number, reset = false) => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const query = new URLSearchParams({
        page: String(pageNum),
        size: String(POST_PAGE_SIZE),
        sort: selectedSortOption,
      });

      if (selectedCategory) {
        query.append("category", selectedCategory);
      }

      const data = await apiFetch<{ data: Post[] }>(
        `/api/postings?${query.toString()}`,
        { method: "GET" },
      );

      if (reset) setPosts(data.data);
      else setPosts((prev) => [...prev, ...data.data]);

      setHasMore(data.data.length === POST_PAGE_SIZE);
    } catch (err) {
      console.error("게시물 목록 요청 실패:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const lastPostRef = useInfiniteScroll(
    () => setPage((prev) => prev + 1),
    isLoading,
    hasMore,
  );

  useEffect(() => {
    setPosts([]);
    setPage(1);
    setHasMore(true);
    fetchPosts(1, true);
  }, [selectedCategory, selectedSortOption]);

  useEffect(() => {
    if (page === 1) return;
    fetchPosts(page);
  }, [page]);

  return (
    <div className="flex flex-col gap-[60px] md:block">
      <aside>
        <SideMenu
          categories={CATEGORY_LIST}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </aside>

      <main className="mb-[30px] md:ml-[160px] md:pr-[30px] md:pl-[25px] lg:pr-[60px] lg:pl-[90px]">
        <section
          aria-labelledby="category-heading"
          className="flex flex-col gap-[30px] px-[20px]"
        >
          <div className="flex items-center justify-between">
            <h3
              id="category-heading"
              className="text-[20px] leading-[28px] font-semibold text-white xl:text-[24px]"
            >
              {selectedCategory || "전체 게시물"}
            </h3>
            <SortMenu
              items={SORT_OPTION_LIST}
              selectedItem={selectedSortOption}
              onSelect={setSelectedSortOption}
            />
          </div>

          <div className="grid grid-cols-2 gap-[15px] xl:grid-cols-3">
            {posts.map((post, idx) =>
              posts.length === idx + 1 ? (
                <div ref={lastPostRef} key={post.postingId}>
                  <PostCard {...post} />
                </div>
              ) : (
                <PostCard key={post.postingId} {...post} />
              ),
            )}
          </div>

          {isLoading ? (
            <p className="mt-4 text-center text-gray-400">불러오는 중...</p>
          ) : null}
        </section>
      </main>
    </div>
  );
}
