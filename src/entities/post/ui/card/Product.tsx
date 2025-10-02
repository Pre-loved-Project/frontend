import Image from "next/image";

import DefaultImage from "@/shared/images/product_image.png";

interface ProductProps {
  imageSrc: string;
  name: string;
  reviewCount: number;
  likeCount: number;
  rating: number;
}

const Product = ({
  imageSrc,
  name,
  reviewCount,
  likeCount,
  rating,
}: ProductProps) => {
  return (
    <article className="w-fit rounded-[8px] border border-[#353542] bg-[#252530] p-[10px] md:pb-[20px] xl:pb-[25px]">
      <div className="flex flex-col gap-[10px] md:gap-[20px] lg:gap-[25px]">
        <Image
          src={imageSrc || DefaultImage}
          alt="상품 이미지"
          width={140}
          height={98}
          className="md:h-[160px] md:w-[227px] xl:h-[220px] xl:w-[284px]"
        />
        <div className="flex flex-col gap-[5px] md:gap-[10px] xl:mx-auto xl:h-[50px] xl:w-[260px]">
          <h1 className="text-sm font-medium leading-none text-[#F1F1F5] md:text-[16px] xl:text-[18px]">
            {name}
          </h1>
          <div className="flex flex-col gap-[5px] md:flex-row md:justify-between">
            <dl className="flex gap-[10px] text-xs font-light leading-none text-[#6E6E82] md:text-[14px] xl:text-[16px]">
              <div className="flex gap-[5px]">
                <dt>후기</dt>
                <dd>{reviewCount}</dd>
              </div>
              <div className="flex gap-[5px]">
                <dt>찜</dt>
                <dd>{likeCount}</dd>
              </div>
            </dl>
            <p className="flex gap-[2px] text-xs font-light leading-none text-[#6E6E82] md:text-[14px] xl:text-[16px]">
              <span aria-hidden="true">⭐</span> {rating}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Product;
