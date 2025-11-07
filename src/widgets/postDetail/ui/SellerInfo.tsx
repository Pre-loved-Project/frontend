"use client";
import Link from "next/link";
import UserIcon from "@/shared/images/user.svg";

interface SellerInfoProps {
  userId?: number;
  nickname: string;
  imageUrl?: string;
}

export function SellerInfo({ userId, nickname, imageUrl }: SellerInfoProps) {
  return (
    <div className="align-center mx-[1em] flex gap-[0.75rem] py-[1rem] md:mx-[1.5rem] xl:mx-0">
      <div className="align-center flex h-[48px] w-[48px] justify-center overflow-hidden rounded-full md:h-[64px] md:w-[64px] xl:h-[56px] xl:w-[56px]">
        <Link href={`/user/${userId ?? ""}`} aria-label="판매자 프로필 페이지">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`${nickname} 프로필`}
              className="h-full w-full object-cover"
            />
          ) : (
            <UserIcon className="h-full w-full text-white" />
          )}
        </Link>
      </div>
      <span className="flex items-center justify-center text-[16px] md:text-[20px] xl:text-[16px]">
        {nickname}
      </span>
    </div>
  );
}
