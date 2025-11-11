import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { getPosts } from "@/entities/post/api/getPosts";
import HomePageClient from "../widgets/main/ui/Client/HomePage.client";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const params = await searchParams;
  const initialCategory = params?.category ?? "전체";
  const initialSort = params?.sort ?? "latest";
  const initialPage = Number(params?.page ?? 1);
  const initialKeyword = (params?.keyword ?? "").trim();

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [
      "posts",
      initialCategory,
      initialSort,
      initialPage,
      initialKeyword,
    ],
    queryFn: () =>
      getPosts({
        category: initialCategory,
        sort: initialSort,
        page: initialPage,
        keyword: initialKeyword,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomePageClient
        initialCategory={initialCategory}
        initialKeyword={initialKeyword}
        initialSort={initialSort}
        initialPage={initialPage}
      />
    </HydrationBoundary>
  );
}
