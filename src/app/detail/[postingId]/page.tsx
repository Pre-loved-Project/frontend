"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

import { apiFetch } from "@/shared/api/fetcher";
import { POST_PAGE_SIZE } from "@/entities/post/model/constants/api";
import { useInfiniteScroll } from "@/shared/lib/useInfiniteScroll";

import { useAuthStore } from "@/features/auth/model/auth.store";
import { useModalStore } from "@/shared/model/modal.store";
import { usePostEditModal } from "@/features/editPost/lib/usePostEditModal";
import { useLike } from "@/features/like/lib/useLike";

import PostCard from "@/entities/post/ui/card/PostCard";
import PostCarousel from "@/entities/post/ui/carousel/PostCarousel";
import Button from "@/shared/ui/Button/Button";
import LikeButton from "@/features/like/ui/LikeButton";
import UserIcon from "@/shared/images/user.svg";

import type { PostDetail, Post } from "@/entities/post/model/types/post";
import type { User } from "@/entities/user/model/types/user";

export default function DetailPage() {
  const router = useRouter();
  const params = useParams();
  const postingId = params?.postingId as string;

  const isLogined = useAuthStore((state) => state.isLogined);
  const { openModal, closeModal } = useModalStore();

  const [post, setPost] = useState<PostDetail | null>(null);
  const [isPostLoading, setIsPostLoading] = useState(true);

  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isRelatedLoading, setIsRelatedLoading] = useState(false);

  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const { loading, handleLikeToggle } = useLike({
    postingId: post?.postingId,
    liked,
    onLikedChange: setLiked,
    onCountChange: (delta) => setLikeCount((prev) => prev + delta),
  });
  const [seller, setSeller] = useState<{
    userId: number;
    nickname: string;
    imageUrl?: string;
  } | null>(null);

  const fetchSeller = async (userId: number) => {
    try {
      const data = await apiFetch<User>(`/api/users/${userId}`, {
        method: "GET",
      });

      setSeller(data);
    } catch (err) {
      console.error("판매자 정보 조회 실패:", err);
    }
  };

  const fetchPost = async () => {
    try {
      setIsPostLoading(true);
      const data = await apiFetch<PostDetail>(`/api/postings/${postingId}`, {
        method: "GET",
      });
      setPost(data);
      setLikeCount(data.likeCount);
      setLiked(data.isFavorite);
    } catch (err) {
      console.error("게시글 로드 실패:", err);
    } finally {
      setIsPostLoading(false);
    }
  };

  const { openPostEditModal } = usePostEditModal({
    onSuccess: () => {
      fetchPost();
    },
  });

  useEffect(() => {
    if (!postingId) return;
    fetchPost();
  }, [postingId]);

  const fetchRelatedPosts = async (pageNum: number, reset = false) => {
    if (!post?.sellerId || isRelatedLoading) return;
    setIsRelatedLoading(true);

    try {
      const query = new URLSearchParams({
        page: String(pageNum),
        size: String(POST_PAGE_SIZE),
      });

      const data = await apiFetch<{ data: Post[] }>(
        `/api/postings/user/${post.sellerId}?${query.toString()}`,
        { method: "GET" },
      );

      if (reset) setRelatedPosts(data.data);
      else setRelatedPosts((prev) => [...prev, ...data.data]);

      setHasMore(data.data.length === POST_PAGE_SIZE);
    } catch (err) {
      console.error("판매한 상품 불러오기 실패:", err);
    } finally {
      setIsRelatedLoading(false);
    }
  };

  const lastPostRef = useInfiniteScroll(
    () => setPage((prev) => prev + 1),
    isRelatedLoading,
    hasMore,
  );

  useEffect(() => {
    if (!post?.sellerId) return;
    fetchSeller(post.sellerId);
    setPage(1);
    setHasMore(true);
    fetchRelatedPosts(1, true);
  }, [post?.sellerId]);

  useEffect(() => {
    if (page === 1) return;
    fetchRelatedPosts(page);
  }, [page]);

  const handleChatClick = () => {
    if (!isLogined) router.push("/login");
    else router.push("/chat");
  };

  const handleEditClick = () => {
    if (!post) return;
    openPostEditModal(
      post.postingId,
      post.title,
      post.price,
      post.category,
      post.content,
      post.images,
    );
  };

  const handleDeleteClick = async () => {
    if (!post) return;

    openModal("confirm", {
      message: "정말 이 게시물을 삭제하시겠습니까?",
      onConfirm: async () => {
        try {
          await apiFetch(`/api/postings/${post.postingId}`, {
            method: "DELETE",
          });
          closeModal();
          openModal("normal", {
            message: "삭제가 완료되었습니다.",
            onClick: () => {
              closeModal();
              router.push("/");
            },
          });
        } catch (err) {
          console.error("게시물 삭제 실패:", err);
        }
      },
      onCancel: () => {
        closeModal();
      },
    });
  };

  if (isPostLoading)
    return <p className="text-center text-white">로딩 중...</p>;
  if (!post)
    return <p className="text-center text-white">게시글을 찾을 수 없습니다.</p>;

  return (
    <main>
      <article className="text-white">
        <div className="flex flex-col px-[1rem] md:px-[2.5rem] xl:flex-row xl:gap-[2.5rem] xl:px-[4rem]">
          <section className="mx-[-1rem] md:mx-[-2.5rem] xl:mx-0 xl:w-1/2">
            <PostCarousel images={post.images} />
            <div className="align-center mx-[1em] flex gap-[0.75rem] py-[1rem] md:mx-[1.5rem] xl:mx-0">
              <div className="align-center flex h-[48px] w-[48px] justify-center overflow-hidden rounded-full md:h-[64px] md:w-[64px] xl:h-[56px] xl:w-[56px]">
                <Link
                  href={`/user/${seller?.userId ?? ""}`}
                  aria-label="판매자 프로필 페이지"
                >
                  {seller?.imageUrl ? (
                    <img
                      src={seller.imageUrl}
                      alt={`${seller.nickname} 프로필`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <UserIcon className="h-full w-full object-cover text-white" />
                  )}
                </Link>
              </div>
              <span className="flex items-center justify-center text-[16px] md:text-[20px] xl:text-[16px]">
                {seller?.nickname}
              </span>
            </div>

            <div className="mx-[1rem] h-[1px] bg-gray-600 xl:hidden" />
          </section>

          <section className="flex flex-col justify-between gap-[1.25rem] py-[1.5rem] md:pt-[2rem] xl:w-1/2 xl:pt-0 xl:pb-[88px]">
            <div className="flex flex-col gap-[1.25rem]">
              <div className="flex flex-col gap-[0.5rem] md:gap-[0.75rem]">
                <h1 className="text-[20px] font-bold">{post.title}</h1>
                <h3 className="text-[18px] font-bold">
                  {post.price.toLocaleString()}
                </h3>
              </div>

              <p className="font-regular text-left text-[16px] whitespace-pre-line md:text-[18px] xl:text-[16px]">
                {post.content}
              </p>
            </div>
            <div className="flex flex-col gap-[1.25rem]">
              <span className="font-regular flex flex-wrap gap-[0.25rem] leading-[1.25rem] text-[#868b94]">
                <span>채팅 {post.chatCount}</span>
                <span className="flex gap-[0.25rem]">
                  <span>·</span>관심 {likeCount}
                </span>
                <span className="flex gap-[0.25rem]">
                  <span>·</span>조회 {post.viewCount}
                </span>
              </span>

              <div className="flex items-center justify-center gap-[10px]">
                {post.isOwner ? (
                  <>
                    <Button className="w-full flex-1" onClick={handleEditClick}>
                      수정하기
                    </Button>
                    <Button
                      className="w-full flex-1"
                      onClick={handleDeleteClick}
                    >
                      삭제하기
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="w-full flex-1" onClick={handleChatClick}>
                      채팅하기
                    </Button>
                    <LikeButton
                      liked={liked}
                      loading={loading}
                      onToggle={handleLikeToggle}
                    />
                  </>
                )}
              </div>
            </div>
          </section>
        </div>

        <div className="mx-[1rem] h-[1px] bg-gray-600" />
        <section className="mx-[1rem] my-[0.5rem] md:mx-[2.5rem] xl:mx-[4rem] xl:my-[2.5rem]">
          <h1 className="my-[1.5rem] text-[20px] font-bold xl:text-[24px]">
            판매한 상품
          </h1>
          <div className="grid w-full grid-cols-2 gap-x-[16px] gap-y-[32px] md:grid-cols-4 xl:grid-cols-5">
            {relatedPosts.map((item, idx) =>
              relatedPosts.length === idx + 1 ? (
                <div ref={lastPostRef} key={item.postingId}>
                  <PostCard {...item} />
                </div>
              ) : (
                <PostCard key={item.postingId} {...item} />
              ),
            )}
          </div>

          {isRelatedLoading && (
            <p className="mt-4 text-center text-gray-400">불러오는 중...</p>
          )}
        </section>
      </article>
    </main>
  );
}
