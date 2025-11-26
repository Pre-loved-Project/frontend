import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { getPostDetail } from "@/entities/post/api/getPostDetail.server";
import { getUser } from "@/entities/user/api/getUser.server";
import PostDetailPageClient from "@/widgets/postDetail/ui/DetailPage.client";
import type { PostDetail } from "@/entities/post/model/types/post";

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
  });

  const post = queryClient.getQueryData<PostDetail>(["postDetail", id]);

  if (post && post.sellerId) {
    await queryClient.prefetchQuery({
      queryKey: ["seller", post.sellerId],
      queryFn: () => getUser(post.sellerId),
    });
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostDetailPageClient postingId={postingId} />
    </HydrationBoundary>
  );
}
