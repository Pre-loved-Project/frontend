import Image from "next/image";
import Link from "next/link";
import PostStatusBadge from "../badge/PostStatusBadge";
import { PostStatus } from "../../model/types/post";

interface PostCardProps {
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
  status: PostStatus;
}

const PostCard = ({
  postingId,
  title,
  price,
  likeCount,
  chatCount,
  viewCount,
  thumbnail,
  status,
}: PostCardProps) => {
  return (
    <Link href={`/detail/${postingId}`}>
      <article className="w-full rounded-lg border border-[#353542] bg-[#252530] p-2.5 md:pb-5 xl:pb-6">
        <div className="flex flex-col gap-2.5 md:gap-5 xl:gap-6">
          <div className="relative h-24 w-full overflow-hidden rounded-md md:h-40 xl:h-56">
            {thumbnail ? (
              <Image
                src={thumbnail}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-200 ease-in-out hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[#1c1c22] text-gray-500">
                이미지 없음
              </div>
            )}
          </div>

          <div className="flex flex-col gap-1.5 md:gap-2.5">
            <h1 className="line-clamp-2 h-7 text-sm leading-none font-medium text-[#F1F1F5] md:h-8 md:text-base xl:h-9 xl:text-lg">
              {title}
            </h1>
            <PostStatusBadge status={status} className="block w-fit" />
            <p className="text-xs text-[#9FA6B2] md:text-sm">
              {price?.toLocaleString()} 원
            </p>

            <div className="flex w-full flex-col gap-1.5 text-xs leading-none font-light text-[#6E6E82] md:flex-row md:justify-between md:text-sm xl:text-base">
              <div className="flex gap-1.5">
                <span aria-label="조회 수" title="조회 수">
                  조회
                </span>
                <span>{viewCount}</span>
              </div>

              <div className="flex items-center gap-1">
                <img
                  src="/icons/chat.svg"
                  alt="채팅 수"
                  className="h-2.5 w-2.5"
                />
                <span>{chatCount}</span>

                <img
                  src="/icons/heart.svg"
                  alt="좋아요 수"
                  className="h-2.5 w-2.5"
                />
                <span>{likeCount}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
