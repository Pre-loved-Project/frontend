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
    <article className="flex items-center justify-center w-[335px] h-[466px] px-[20px] py-[30px] rounded-[12px] border border-[#353542] bg-[#252530] md:w-[509px] md:h-[451px] md:px-[30px] xl:w-[340px] xl:h-[603px] xl:px-[20px] xl:pt-[40px]">
      <div className="flex flex-col items-center justify-between w-full h-full">
        <Image
          src={imageSrc || DefaultProfileImage}
          alt="프로필"
          width={120}
          height={120}
          className="rounded-full xl:w-[180px] xl:h-[180px]"
        />

        <div className="w-full">
          <h1 className="text-center font-semibold text-xl leading-7 text-white mb-[10px] xl:text-[24px]">
            {nickname}
          </h1>
          <p className="font-normal text-sm leading-5 text-gray-600 xl:font-[16px] break-words">
            {bio}
          </p>
        </div>

        <dl className="flex w-full text-center">
          {statItems.map((item, idx) => (
            <div key={item.label} className="relative flex-1">
              <dd className="font-semibold text-[18px] leading-none text-[#F1F1F5] lg:text-[20px]">
                {item.value}
              </dd>
              <dt className="mt-[10px] font-[400] text-[14px] leading-none text-[#9FA6B2] lg:text-[16px]">
                {item.label}
              </dt>

              {idx < statItems.length - 1 && (
                <span className="absolute top-0 right-0 h-full w-[1px] bg-[#353542]" />
              )}
            </div>
          ))}
        </dl>

        <div className="flex flex-col w-full gap-[10px] md:gap-[15px] lg:gap-[20px]">
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
