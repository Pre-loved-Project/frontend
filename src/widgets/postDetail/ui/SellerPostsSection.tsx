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

  const lastPostRef = useInfiniteScroll(
    () => {
      if (hasNextPage && !isFetchingNextPage) fetchNextPage();
    },
    isFetchingNextPage,
    !!hasNextPage,
  );

  const sellerPosts = sellerPostsData?.pages.flatMap((p) => p.data) ?? [];

  return (
    <section className="mx-4 my-2 md:mx-10 xl:mx-16 xl:my-10">
      <div className="mx-4 h-px bg-gray-600" />
      <h1 className="my-6 text-2xl font-bold xl:text-3xl">판매한 상품</h1>

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
    </section>
  );
}
