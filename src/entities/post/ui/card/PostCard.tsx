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
          <div className="flex flex-col gap-[5px] md:flex-row md:justify-between">
            <dl className="flex gap-[10px] text-xs font-light leading-none text-[#6E6E82] md:text-[14px] xl:text-[16px]">
              <div className="flex gap-[5px]">
                <dt>채팅</dt>
                <dd>{chatCount}</dd>
              </div>
              <div className="flex gap-[5px]">
                <dt>조회</dt>
                <dd>{viewCount}</dd>
              </div>
            </dl>
            <p className="flex gap-[2px] text-xs font-light leading-none text-[#6E6E82] md:text-[14px] xl:text-[16px]">
              <span aria-hidden="true">❤️</span> {likeCount}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
