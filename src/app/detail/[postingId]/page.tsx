import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { getPostDetail } from "@/entities/post/api/getPostDetail.server";
import { getUser } from "@/entities/user/api/getUser.server";
import PostDetailPageClient from "@/widgets/postDetail/ui/DetailPage.client";
import type { PostDetail } from "@/entities/post/model/types/post";
import { handleError } from "@/shared/error/handleError";

export default async function Page({
  params,
}: {
  params: { postingId: string };
}) {
  const { postingId } = params;
  const id = Number(postingId);
  const queryClient = new QueryClient();

  try {
    await queryClient.fetchQuery({
      queryKey: ["postDetail", id],
      queryFn: () => getPostDetail(id),
    });
  } catch (e) {
    handleError(e);
  }

  const post = queryClient.getQueryData<PostDetail>(["postDetail", id]);

  if (post && post.sellerId) {
    try {
      await queryClient.prefetchQuery({
        queryKey: ["seller", post.sellerId],
        queryFn: () => getUser(post.sellerId),
      });
    } catch (e) {
      handleError(e);
    }
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostDetailPageClient postingId={postingId} />
    </HydrationBoundary>
  );
}
