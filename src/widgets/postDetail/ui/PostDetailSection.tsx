"use client";

import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/entities/user/api/getUser";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

import PostCarousel from "@/entities/post/ui/carousel/PostCarousel";
import LikeButton from "@/features/like/ui/LikeButton";
import Button from "@/shared/ui/Button/Button";
import UserIcon from "@/shared/icons/user.svg";
import Link from "next/link";

import { useLike } from "@/features/like/lib/useLike";
import { usePostEditModal } from "@/features/editPost/lib/usePostEditModal";
import { useChatStore } from "@/features/chat/model/chat.store";
import { useModalStore } from "@/shared/model/modal.store";
import { useAuthStore } from "@/features/auth/model/auth.store";
import { PostDetail } from "@/entities/post/model/types/post";
import PostStatusBadge from "@/entities/post/ui/badge/PostStatusBadge";
import { getChattingRoomStatus } from "@/features/chat/api/getChattingRoomStatus";
import { handleError } from "@/shared/error/handleError";
import { apiFetch } from "@/shared/api/fetcher";

export function PostDetailSection({ post }: { post: PostDetail }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { isLogined } = useAuthStore();
  const { openModal, closeModal } = useModalStore();
  const openChat = useChatStore((s) => s.mount);

  const {
    data: seller,
    isError: isSellerError,
    error: sellerError,
  } = useQuery({
    queryKey: ["seller", post.sellerId],
    queryFn: () => getUser(post.sellerId),
    enabled: !!post.sellerId,
  });

  if (isSellerError) {
    handleError(sellerError);
  }

  const {
    data: chattingRoomStatus,
    isError: isChattingRoomStatusError,
    error: chattingRoomStatusError,
  } = useQuery({
    queryKey: ["findRoom", post.postingId],
    queryFn: () => getChattingRoomStatus(post.postingId),
  });

  if (isChattingRoomStatusError) {
    handleError(chattingRoomStatusError);
  }

  const { toggleLike, isLoading: isLikeLoading } = useLike(post.postingId);
  const handleToggleLike = () => toggleLike(!post.isFavorite);

  const { openPostEditModal } = usePostEditModal({
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["postDetail", post.postingId],
      });
    },
  });

  const handleEditClick = () => {
    openPostEditModal(
      post.postingId,
      post.title,
      post.price,
      post.category,
      post.content,
      post.images,
    );
  };

  const handleChatClick = () => {
    if (!isLogined) {
      openModal("normal", {
        message: " 로그인이 필요한 서비스입니다.\n로그인 해주세요.",
        onClick: () => {
          closeModal();
          router.replace("/login");
        },
      });
      return;
    }
    if (chattingRoomStatus) {
      openChat({
        postingId: post.postingId,
        otherId: post.sellerId,
        chatId: chattingRoomStatus?.chatId,
      });
    }
  };

  const handleDeleteClick = () => {
    openModal("confirm", {
      message: "정말 이 게시물을 삭제하시겠습니까?",
      onConfirm: async () => {
        try {
          await apiFetch(`/api/postings/${post.postingId}`, {
            method: "DELETE",
          });
          queryClient.removeQueries({
            queryKey: ["postDetail", post.postingId],
          });
          queryClient.invalidateQueries({
            queryKey: ["sellerPosts", post.sellerId],
          });
          queryClient.invalidateQueries({
            queryKey: ["myPosts"],
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
      onCancel: closeModal,
    });
  };

  return (
    <section className="flex flex-col px-4 md:px-10 xl:flex-row xl:gap-10 xl:px-16">
      <div className="-mx-1 md:-mx-2.5 xl:mx-0 xl:w-1/2">
        <PostCarousel images={post.images} />
        <div className="align-center mx-4 flex gap-3 py-4 md:mx-6 xl:mx-0">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full md:h-16 md:w-16 xl:h-14 xl:w-14">
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
                <UserIcon className="h-full w-full text-white" />
              )}
            </Link>
          </div>
          <span className="flex items-center text-base md:text-xl xl:text-base">
            {seller?.nickname || "판매자"}
          </span>
        </div>
        <div className="mx-4 h-px bg-gray-600 xl:hidden" />
      </div>
      <div className="flex flex-col justify-between gap-5 py-6 md:pt-8 xl:w-1/2 xl:pt-0 xl:pb-[88px]">
        <div className="relative flex flex-col gap-5">
          <h1 className="text-xl font-bold">{post.title}</h1>
          <h3 className="text-lg font-bold">{post.price.toLocaleString()}</h3>
          <p className="text-base whitespace-pre-line md:text-lg xl:text-base">
            {post.content}
          </p>
          <PostStatusBadge
            status={post.status}
            className="absolute top-1 right-5"
          />
        </div>
        <div className="flex flex-col gap-5">
          <span className="flex flex-wrap gap-1 text-[#868b94]">
            <span>채팅 {post.chatCount}</span>·
            <span>관심 {post.likeCount}</span>·
            <span>조회 {post.viewCount}</span>
          </span>
          <div className="flex items-center justify-center gap-2.5">
            {post.isOwner ? (
              <>
                <Button className="w-full flex-1" onClick={handleEditClick}>
                  수정하기
                </Button>
                <Button className="w-full flex-1" onClick={handleDeleteClick}>
                  삭제하기
                </Button>
              </>
            ) : (
              <>
                <Button className="w-full flex-1" onClick={handleChatClick}>
                  채팅하기
                </Button>
                <LikeButton
                  liked={post.isFavorite}
                  loading={isLikeLoading}
                  onToggle={handleToggleLike}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
