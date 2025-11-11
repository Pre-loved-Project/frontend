import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { getPosts } from "@/entities/post/api/getPosts";
import HomePageClient from "@/widgets/main/ui/Client/HomePage.client";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const params = await searchParams;
  const initialCategory = params?.category ?? "전체";
  const initialSort = params?.sort ?? "latest";
  const initialKeyword = (params?.keyword ?? "").trim();

  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts", initialCategory, initialSort, initialKeyword],
    queryFn: ({ pageParam = 1 }) =>
      getPosts({
        category: initialCategory,
        sort: initialSort,
        page: pageParam,
        keyword: initialKeyword,
      }),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomePageClient
        initialCategory={initialCategory}
        initialSort={initialSort}
        initialKeyword={initialKeyword}
      />
    </HydrationBoundary>
  );
}
