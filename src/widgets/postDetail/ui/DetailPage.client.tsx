"use client";

import { useQuery } from "@tanstack/react-query";
import { getPostDetail } from "@/entities/post/api/getPostDetail";
import { PostDetailSection } from "@/widgets/postDetail/ui/PostDetailSection";
import { SellerPostsSection } from "@/widgets/postDetail/ui/SellerPostsSection";

export default function PostDetailPageClient({
  postingId,
}: {
  postingId: string;
}) {
  const id = Number(postingId);

  const { data: post } = useQuery({
    queryKey: ["postDetail", id],
    queryFn: () => getPostDetail(id),
  });

  return (
    <main className="text-white">
      <PostDetailSection post={post!} />
      <SellerPostsSection
        sellerId={post!.sellerId}
        postingId={post!.postingId}
      />
    </main>
  );
}
