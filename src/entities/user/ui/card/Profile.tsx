"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { useAuthStore } from "@/features/auth/model/auth.store";
import Button from "@/shared/ui/Button/Button";
import DefaultProfileImage from "./assets/profile.jpg";

interface ProfileProps {
  imageSrc: string;
  nickname: string;
  bio: string;
  stats: {
    purchase: number;
    sales: number;
    category: string;
  };
}

const Profile = ({ imageSrc, nickname, bio, stats }: ProfileProps) => {
  const router = useRouter();
  const { logout } = useAuthStore();

  const statItems = [
    { label: "구매내역", value: stats.purchase },
    { label: "판매내역", value: stats.sales },
    { label: "관심 카테고리", value: stats.category },
  ];

  return (
    <article className="flex h-[466px] w-[335px] items-center justify-center rounded-[12px] border border-[#353542] bg-[#252530] px-[20px] py-[30px] md:h-[451px] md:w-[509px] md:px-[30px] xl:h-[603px] xl:w-[340px] xl:px-[20px] xl:pt-[40px]">
      <div className="flex h-full w-full flex-col items-center justify-between">
        <Image
          src={imageSrc || DefaultProfileImage}
          alt="프로필"
          width={120}
          height={120}
          className="rounded-full xl:h-[180px] xl:w-[180px]"
        />

        <div className="w-full">
          <h1 className="mb-[10px] text-center text-xl leading-7 font-semibold text-white xl:text-[24px]">
            {nickname}
          </h1>
          <p className="text-sm leading-5 font-normal break-words text-gray-600 xl:font-[16px]">
            {bio}
          </p>
        </div>

        <dl className="flex w-full text-center">
          {statItems.map((item, idx) => (
            <div key={item.label} className="relative flex-1">
              <dd className="text-[18px] leading-none font-semibold text-[#F1F1F5]">
                {item.value}
              </dd>
              <dt className="mt-[10px] text-[14px] leading-none font-[400] text-[#9FA6B2]">
                {item.label}
              </dt>

              {idx < statItems.length - 1 && (
                <span className="absolute top-0 right-0 h-full w-[1px] bg-[#353542]" />
              )}
            </div>
          ))}
        </dl>

        <div className="flex w-full flex-col gap-[10px] md:gap-[15px] lg:gap-[20px]">
          <Button className="w-full md:w-full xl:w-full">프로필 편집</Button>
          <Button
            variant="tertiary"
            className="w-full md:w-full xl:w-full"
            onClick={() => {
              logout();
              router.push("/login");
            }}
          >
            로그아웃
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Profile;
