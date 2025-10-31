"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
  selectedKeyword?: string;
}

export default function PostList({
  initialPosts,
  selectedCategory,
  selectedSortOption,
  selectedKeyword,
}: Props) {
  const router = useRouter();
  const sp = useSearchParams();

  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(
    initialPosts.length === POST_PAGE_SIZE,
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPosts(initialPosts);
    setPage(1);
    setHasMore(initialPosts.length === POST_PAGE_SIZE);
  }, [initialPosts]);

  const fetchMore = async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    try {
      const nextPage = page + 1;

      const query = new URLSearchParams({
        page: String(nextPage),
        size: String(POST_PAGE_SIZE),
        sort: selectedSortOption,
      });
      if (selectedCategory && selectedCategory !== "전체") {
        query.append("category", selectedCategory);
      }
      if (selectedKeyword) {
        query.append("keyword", selectedKeyword);
      }

      const res = await apiFetch<{ data: Post[] }>(
        `/api/postings?${query.toString()}`,
        { method: "GET" },
      );

      setPosts((prev) => [...prev, ...res.data]);
      setHasMore(res.data.length === POST_PAGE_SIZE);
      setPage(nextPage);
    } finally {
      setIsLoading(false);
    }
  };

  const lastRef = useInfiniteScroll(fetchMore, isLoading, hasMore);

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(sp.toString());
    params.set("sort", value);

    const qs = params.toString();
    router.replace(qs ? `/?${qs}` : "/", { scroll: true });
  };

  return (
    <section className="flex flex-col gap-[30px] px-[20px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-semibold text-white">
          {selectedCategory || "전체"}
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
