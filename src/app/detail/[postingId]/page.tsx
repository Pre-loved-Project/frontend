import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { getPostDetail } from "@/entities/post/api/getPostDetail";
import PostDetailPageClient from "@/widgets/postDetail/ui/DetailPage.client";

export default async function Page({
  params,
}: {
  params: { postingId: string };
}) {
  const { postingId } = params;
  const id = Number(postingId);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["postDetail", id],
    queryFn: () => getPostDetail(id),
    staleTime: Infinity,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostDetailPageClient postingId={postingId} />
    </HydrationBoundary>
  );
}
