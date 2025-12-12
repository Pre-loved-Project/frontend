"use client";

import PostCard from "@/entities/post/ui/card/PostCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInfiniteScroll } from "@/shared/lib/useInfiniteScroll";
import { getSellerPosts } from "@/entities/post/api/getSellerPosts";
import { POST_PAGE_SIZE } from "@/entities/post/model/constants/api";

export function SellerPostsSection({
  sellerId,
  postingId,
}: {
  sellerId: number;
  postingId: number;
}) {
  const {
    data: sellerPostsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["sellerPosts", sellerId, postingId],
    queryFn: ({ pageParam = 1 }) =>
      getSellerPosts({
        userId: sellerId,
        excludeId: postingId,
        page: pageParam,
        size: POST_PAGE_SIZE,
      }),
    enabled: !!sellerId,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.data.length < POST_PAGE_SIZE ? undefined : allPages.length + 1,
    initialPageParam: 1,
  });

  const sellerPosts = sellerPostsData?.pages.flatMap((p) => p.data) ?? [];

  const lastPostRef = useInfiniteScroll(
    () => {
      if (hasNextPage && !isFetchingNextPage) fetchNextPage();
    },
    isFetchingNextPage,
    !!hasNextPage,
  );

  return (
    <section className="mx-4 mb-2 md:mx-10 xl:mx-16 xl:mb-10">
      <div className="h-px bg-gray-600" />
      <h1 className="my-6 text-2xl font-bold xl:text-3xl">판매한 상품</h1>

      {isLoading ? (
        <div className="flex w-full flex-col items-center justify-center py-10 text-gray-400">
          <p className="text-base md:text-lg">로딩 중...</p>
        </div>
      ) : sellerPosts.length === 0 ? (
        <div className="flex w-full flex-col items-center justify-center py-10 text-gray-400">
          <p className="text-base md:text-lg">판매한 상품이 없습니다.</p>
        </div>
      ) : (
        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 xl:grid-cols-5">
          {sellerPosts.map((item, idx) =>
            idx === sellerPosts.length - 1 ? (
              <div ref={lastPostRef} key={item.postingId}>
                <PostCard {...item} />
              </div>
            ) : (
              <PostCard key={item.postingId} {...item} />
            ),
          )}
        </div>
      )}
    </section>
  );
}
