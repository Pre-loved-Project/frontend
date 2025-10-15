import Image from "next/image";
import Link from "next/link";

import HeartIcon from "@/shared/images/heart.svg";
import ChatIcon from "@/shared/images/chat.svg";
import DefaultImage from "./assets/product_image.png";

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
          <Image
            src={thumbnail || DefaultImage}
            alt="상품 이미지"
            width={140}
            height={98}
            className="w-full md:h-[160px] xl:h-[220px]"
          />
          <div className="flex flex-col gap-[5px] md:gap-[10px]">
            <h1 className="line-clamp-2 text-sm leading-none font-medium text-[#F1F1F5] md:text-[16px] xl:text-[18px]">
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
                <ChatIcon width={10} height={10} />
                <span>{chatCount}</span>
                <HeartIcon
                  width={10}
                  height={10}
                  className="text-gray-600 [&_path]:fill-current"
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
