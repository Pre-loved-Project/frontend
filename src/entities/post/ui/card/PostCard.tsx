import Image from "next/image";

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
  title,
  price,
  likeCount,
  chatCount,
  viewCount,
  thumbnail,
}: PostCardProps) => {
  return (
    <article className="w-fit rounded-[8px] border border-[#353542] bg-[#252530] p-[10px] md:pb-[20px] xl:pb-[25px]">
      <div className="flex flex-col gap-[10px] md:gap-[20px] xl:gap-[25px]">
        <Image
          src={thumbnail || DefaultImage}
          alt="상품 이미지"
          width={140}
          height={98}
          className="md:h-[160px] md:w-[227px] xl:h-[220px] xl:w-[284px]"
        />
        <div className="flex flex-col gap-[5px] md:gap-[10px] xl:mx-auto xl:w-[260px]">
          <h1 className="text-sm font-medium leading-none text-[#F1F1F5] md:text-[16px] xl:text-[18px]">
            {title}
          </h1>
          <p className="text-xs text-[#9FA6B2] md:text-sm">
            {price?.toLocaleString()} 원
          </p>
          <div className="w-full flex flex-col gap-[5px] md:flex-row md:justify-between text-xs font-light leading-none text-[#6E6E82] md:text-[14px] xl:text-[16px]">
            <div className="flex gap-[5px]">
              <span aria-label="조회 수" title="조회 수">
                조회
              </span>
              <span>{viewCount}</span>
            </div>
            <div className="flex gap-[5px]">
              <span aria-label="채팅 수" title="채팅 수">
                💬
              </span>
              <span>{chatCount}</span>

              <span aria-label="좋아요 수" title="좋아요 수">
                ❤️
              </span>
              <span>{likeCount}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
