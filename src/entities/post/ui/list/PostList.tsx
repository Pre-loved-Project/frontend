"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInfiniteScroll } from "@/shared/lib/useInfiniteScroll";
import { getPosts } from "@/entities/post/api/getPosts";
import { POST_PAGE_SIZE } from "@/entities/post/model/constants/api";
import { SORT_OPTION_LIST } from "@/widgets/main/model/constants";
import SortMenu from "@/widgets/main/ui/Select/Select";
import PostCard from "@/entities/post/ui/card/PostCard";

interface Props {
  selectedCategory: string;
  selectedSortOption: string;
  selectedKeyword: string;
}

export default function PostList({
  selectedCategory,
  selectedSortOption,
  selectedKeyword,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [
        "posts",
        selectedCategory,
        selectedSortOption,
        selectedKeyword,
      ],
      queryFn: ({ pageParam = 1 }) =>
        getPosts({
          category: selectedCategory,
          sort: selectedSortOption,
          page: pageParam,
          keyword: selectedKeyword,
        }),
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length === POST_PAGE_SIZE ? allPages.length + 1 : undefined,
      initialPageParam: 1,
    });

  const handleSortChange = (sortValue: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sortValue);
    router.push(`/?${params.toString()}`);
  };

  const posts = data?.pages.flat() ?? [];
  const lastRef = useInfiniteScroll(
    () => fetchNextPage(),
    isFetchingNextPage,
    hasNextPage,
  );

  return (
    <section className="flex flex-col gap-[30px] px-5">
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

      {isFetchingNextPage && (
        <p className="mt-4 text-center text-gray-400">불러오는 중...</p>
      )}
    </section>
  );
}
