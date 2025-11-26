"use client";

import { useQuery } from "@tanstack/react-query";
import { getPostDetail } from "@/entities/post/api/getPostDetail";
import { PostDetailSection } from "@/widgets/postDetail/ui/PostDetailSection";
import { SellerPostsSection } from "@/widgets/postDetail/ui/SellerPostsSection";
import { PostDetailSkeleton } from "@/widgets/postDetail/ui/DetailSkeleton";

export default function PostDetailPageClient({
  postingId,
}: {
  postingId: string;
}) {
  const id = Number(postingId);

  const { data: post, isLoading } = useQuery({
    queryKey: ["postDetail", id],
    queryFn: () => getPostDetail(id),
    staleTime: Infinity,
  });

  if (isLoading) {
    return <PostDetailSkeleton />;
  }

  if (!post) {
    return (
      <p className="text-center text-white">게시글 정보를 찾을 수 없습니다.</p>
    );
  }

  return (
    <main className="text-white">
      <PostDetailSection post={post} />
      <SellerPostsSection sellerId={post.sellerId} />
    </main>
  );
}
