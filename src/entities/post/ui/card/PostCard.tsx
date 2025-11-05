import Image from "next/image";
import Link from "next/link";

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
}

const PostCard = ({
  postingId,
  title,
  price,
  likeCount,
  chatCount,
  viewCount,
  thumbnail,
}: PostCardProps) => {
  return (
    <Link href={`/detail/${postingId}`}>
      <article className="w-full rounded-[8px] border border-[#353542] bg-[#252530] p-[10px] md:pb-[20px] xl:pb-[25px]">
        <div className="flex flex-col gap-[10px] md:gap-[20px] xl:gap-[25px]">
          <div className="relative h-[98px] w-full overflow-hidden rounded-[6px] md:h-[160px] xl:h-[220px]">
            {thumbnail ? (
              <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-cover transition-transform duration-200 ease-in-out hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[#1c1c22] text-gray-500">
                이미지 없음
              </div>
            )}
          </div>
          <div className="flex flex-col gap-[5px] md:gap-[10px]">
            <h1 className="line-clamp-2 h-[28px] text-sm leading-none font-medium text-[#F1F1F5] md:h-[32px] md:text-[16px] xl:h-[36px] xl:text-[18px]">
              {title}
            </h1>
            <p className="text-xs text-[#9FA6B2] md:text-sm">
              {price?.toLocaleString()} 원
            </p>
            <div className="flex w-full flex-col gap-[5px] text-xs leading-none font-light text-[#6E6E82] md:flex-row md:justify-between md:text-[14px] xl:text-[16px]">
              <div className="flex gap-[5px]">
                <span aria-label="조회 수" title="조회 수">
                  조회
                </span>
                <span>{viewCount}</span>
              </div>
              <div className="flex items-center gap-[4px]">
                <img
                  src="/icons/chat.svg"
                  alt="채팅 수"
                  className="h-[10px] w-[10px]"
                />
                <span>{chatCount}</span>
                <img
                  src="/icons/heart.svg"
                  alt="좋아요 수"
                  className="h-[10px] w-[10px]"
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
