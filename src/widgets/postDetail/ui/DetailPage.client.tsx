"use client";

import { useQuery } from "@tanstack/react-query";
import { getPostDetail } from "@/entities/post/api/getPostDetail";
import { PostDetailSection } from "@/widgets/postDetail/ui/PostDetailSection";
import { SellerPostsSection } from "@/widgets/postDetail/ui/SellerPostsSection";
import { PostDetailSkeleton } from "@/widgets/postDetail/ui/DetailSkeleton";
import { handleError } from "@/shared/error/handleError";
import { notFound } from "next/navigation";

export default function PostDetailPageClient({
  postingId,
}: {
  postingId: string;
}) {
  const id = Number(postingId);

  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["postDetail", id],
    queryFn: () => getPostDetail(id),
    staleTime: Infinity,
  });

  if (isError) {
    handleError(error);
  }

  if (isLoading) {
    return <PostDetailSkeleton />;
  }

  if (!post) {
    notFound();
  }

  return (
    <main className="text-white">
      <PostDetailSection post={post} />
      <SellerPostsSection sellerId={post.sellerId} postingId={post.postingId} />
    </main>
  );
}
