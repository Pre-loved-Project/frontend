"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/shared/api/fetcher";
import { useInfiniteScroll } from "@/shared/lib/useInfiniteScroll";
import { POST_PAGE_SIZE } from "@/entities/post/model/constants/api";
import { SORT_OPTION_LIST } from "@/widgets/main/model/constants";
import SortMenu from "@/widgets/main/ui/Select/Select";
import PostCard from "@/entities/post/ui/card/PostCard";
import type { Post } from "@/entities/post/model/types/post";

interface Props {
  initialPosts: Post[];
  selectedCategory: string;
  selectedSortOption: string;
}

export default function PostList({
  initialPosts,
  selectedCategory,
  selectedSortOption,
}: Props) {
  const router = useRouter();
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMore = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const query = new URLSearchParams({
        page: String(page + 1),
        size: String(POST_PAGE_SIZE),
        sort: selectedSortOption,
      });
      if (selectedCategory !== "전체")
        query.append("category", selectedCategory);

      const res = await apiFetch<{ data: Post[] }>(`/api/postings?${query}`, {
        method: "GET",
      });
      setPosts((prev) => [...prev, ...res.data]);
      setHasMore(res.data.length === POST_PAGE_SIZE);
      setPage((p) => p + 1);
    } finally {
      setIsLoading(false);
    }
  };

  const lastRef = useInfiniteScroll(fetchMore, isLoading, hasMore);

  const handleSortChange = (value: string) => {
    router.push(`/?category=${selectedCategory}&sort=${value}`);
  };

  return (
    <section className="flex flex-col gap-[30px] px-[20px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-semibold text-white">
          {selectedCategory}
        </h3>
        <SortMenu
          items={SORT_OPTION_LIST}
          selectedItem={selectedSortOption}
          onSelect={handleSortChange}
        />
      </div>

      <div className="grid grid-cols-2 gap-[15px] xl:grid-cols-3">
        {posts.map((post, i) =>
          i === posts.length - 1 ? (
            <div ref={lastRef} key={post.postingId}>
              <PostCard {...post} />
            </div>
          ) : (
            <PostCard key={post.postingId} {...post} />
          ),
        )}
      </div>

      {isLoading && (
        <p className="mt-4 text-center text-gray-400">불러오는 중...</p>
      )}
    </section>
  );
}
