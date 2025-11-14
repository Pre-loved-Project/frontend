"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getPostDetail } from "@/entities/post/api/getPostDetail";
import { PostDetailSection } from "@/widgets/postDetail/ui/PostDetailSection";
import { SellerPostsSection } from "@/widgets/postDetail/ui/SellerPostsSection";

export default function PostDetailPage() {
  const { postingId } = useParams<{ postingId: string }>();
  const id = Number(postingId);

  const {
    data: post,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["postDetail", id],
    queryFn: () => getPostDetail(id),
  });

  if (isLoading) return <p className="text-center text-white">로딩 중...</p>;
  if (isError || !post)
    return <p className="text-center text-white">게시글을 찾을 수 없습니다.</p>;

  return (
    <main className="text-white">
      <PostDetailSection post={post} />
      <SellerPostsSection sellerId={post.sellerId} />
    </main>
  );
}
