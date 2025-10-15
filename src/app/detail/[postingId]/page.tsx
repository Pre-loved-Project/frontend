"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import PostCard from "@/entities/post/ui/card/PostCard";
import PostCarousel from "@/entities/post/ui/carousel/PostCarousel";
import Button from "@/shared/ui/Button/Button";
import LikeButton from "@/features/like/ui/LikeButton";

interface PostDetail {
  postingId: number;
  sellerId: number;
  title: string;
  price: number;
  content: string;
  category: string;
  viewCount: number;
  likeCount: number;
  chatCount: number;
  createdAt: string;
  updatedAt: string;
  images: string[];
  isOwner: boolean;
}

interface PostSummary {
  postingId: number;
  title: string;
  price: number;
  sellerId: number;
  content: string;
  createdAt: string;
  likeCount: number;
  chatCount: number;
  viewCount: number;
  thumbnail: string;
}

const DetailPage = () => {
  const router = useRouter();
  const [post, setPost] = useState<PostDetail | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState(true);

  //임시 게시글 상세 API 요청
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/1`, { cache: "no-store" });
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error("게시글 로드 실패:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  //임시 판매자 판매 목록 API 요청
  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const res = await fetch(`/api/posts`, { cache: "no-store" });
        const data = await res.json();
        setRelatedPosts(data);
      } catch (err) {
        console.error("판매한 상품 불러오기 실패:", err);
      }
    };
    fetchRelated();
  }, []);

  if (loading) return <p className="text-center text-white">로딩 중...</p>;
  if (!post)
    return <p className="text-center text-white">게시글을 찾을 수 없습니다.</p>;

  return (
    <main>
      <article className="text-white">
        <div className="flex flex-col px-[1rem] md:px-[2.5rem] lg:flex-row lg:gap-[2.5rem] lg:px-[4rem]">
          <section className="mx-[-1rem] md:mx-[-2.5rem] lg:mx-0 lg:w-1/2">
            <PostCarousel images={post.images} />
            <div className="align-center mx-[1em] flex gap-[0.75rem] py-[1rem] md:mx-[1.5rem] lg:mx-0">
              <div className="align-center lg:w-56px] flex h-[48px] w-[48px] justify-center overflow-hidden rounded-full md:h-[64px] md:w-[64px] lg:h-[56px]">
                <Link href="/my" aria-label="판매자 프로필 페이지">
                  <img
                    src="/icons/user.png"
                    className="h-full w-full object-cover"
                  />
                </Link>
              </div>
              <span className="flex items-center justify-center text-[16px] md:text-[20px] lg:text-[16px]">
                {post.sellerId}
              </span>
            </div>

            <div className="mx-[1rem] h-[1px] bg-gray-600 lg:hidden" />
          </section>

          <section className="flex flex-col gap-[1.25rem] py-[1.5rem] md:pt-[2rem] lg:w-1/2 lg:py-0">
            <div className="flex flex-col gap-[0.5rem] md:gap-[0.75rem]">
              <h1 className="text-[20px] font-bold">{post.title}</h1>
              <h3 className="text-[18px] font-bold">
                {post.price.toLocaleString()}
              </h3>
            </div>

            <p className="font-regular text-left text-[16px] whitespace-pre-line md:text-[18px] lg:text-[16px]">
              {post.content}
            </p>

            <span className="font-regular flex flex-wrap gap-[0.25rem] leading-[1.25rem] font-[0.875rem] text-[#868b94]">
              <span>채팅 {post.chatCount}</span>
              <span className="flex gap-[0.25rem]">
                <span>·</span>관심 {post.likeCount}
              </span>
              <span className="flex gap-[0.25rem]">
                <span>·</span>조회 {post.viewCount}
              </span>
            </span>

            <div className="flex items-center justify-center gap-[10px]">
              {post.isOwner ? (
                <>
                  <Button className="w-full flex-1">수정하기</Button>
                  <Button className="w-full flex-1">삭제하기</Button>
                </>
              ) : (
                <>
                  <Button
                    className="w-full flex-1"
                    onClick={() => router.push("/chat")}
                  >
                    채팅하기
                  </Button>
                  <LikeButton />
                </>
              )}
            </div>
          </section>
        </div>

        <div className="mx-[1rem] h-[1px] bg-gray-600" />

        <section className="mx-[1rem] md:mx-[2.5rem] md:mt-[0.5rem] lg:mx-[4rem] lg:mt-[2.5rem]">
          <h1 className="my-[1.5rem] text-[20px] font-bold lg:text-[24px]">
            판매한 상품
          </h1>
          <div className="- grid w-full grid-cols-2 gap-x-[16px] gap-y-[32px] md:grid-cols-4 md:gap-x-[20px] lg:grid-cols-5 lg:gap-x-[20px]">
            {relatedPosts.map((post, id) => (
              <PostCard key={id} {...post} />
            ))}
          </div>
        </section>
      </article>
    </main>
  );
};

export default DetailPage;
