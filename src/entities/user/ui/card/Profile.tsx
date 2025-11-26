"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { useAuthStore } from "@/features/auth/model/auth.store";
import { useModalStore } from "@/shared/model/modal.store";
import Button from "@/shared/ui/Button/Button";
import DefaultProfileImage from "./assets/profile.jpg";

export interface ProfileProps {
  userId: number;
  nickname: string;
  introduction?: string;
  imageUrl?: string;
  category?: string;
  sellCount: number;
  buyCount: number;
  onEdit?: () => void;
}

const Profile = ({
  nickname,
  introduction,
  imageUrl,
  category,
  sellCount,
  buyCount,
  onEdit,
}: ProfileProps) => {
  const router = useRouter();
  const { logout } = useAuthStore();
  const { openModal, closeModal } = useModalStore();

  return (
    <article className="flex h-[556px] w-[335px] shrink-0 items-center justify-center rounded-lg border border-[#353542] bg-[#252530] px-5 py-7 md:h-[601px] md:w-[509px] md:px-7 xl:h-[753px] xl:w-[340px] xl:px-5 xl:pt-10">
      <div className="flex h-full w-full flex-col items-center justify-between">
        <Image
          src={imageUrl || DefaultProfileImage}
          alt="프로필"
          width={120}
          height={120}
          priority
          fetchPriority="high"
          sizes="(max-width:1280px) 120px, 180px"
          className="rounded-full xl:h-[180px] xl:w-[180px]"
        />

        <div className="w-full">
          <h1 className="mb-2.5 text-center text-xl leading-7 font-semibold text-white xl:text-2xl">
            {nickname}
          </h1>
          <p className="text-sm leading-5 font-normal break-words text-gray-600 xl:text-base">
            {introduction}
          </p>
        </div>

        <div className="w-full">
          <div className="mb-2 flex justify-between text-center">
            <div className="relative flex-1">
              <dd className="text-lg font-semibold text-[#F1F1F5]">
                {buyCount}
              </dd>
              <dt className="mt-1 text-sm text-[#9FA6B2]">구매내역</dt>
              <span className="absolute top-0 right-0 h-full w-px bg-[#353542]" />
            </div>
            <div className="relative flex-1">
              <dd className="text-lg font-semibold text-[#F1F1F5]">
                {sellCount}
              </dd>
              <dt className="mt-1 text-sm text-[#9FA6B2]">판매내역</dt>
            </div>
          </div>
        </div>

        <div className="w-full text-center">
          <dd className="text-lg font-semibold text-[#F1F1F5]">{category}</dd>
          <dt className="mt-1 text-sm text-[#9FA6B2]">관심 카테고리</dt>
        </div>

        <div className="flex w-full flex-col gap-2.5 md:gap-4 lg:gap-5">
          <Button className="w-full!" onClick={onEdit}>
            프로필 편집
          </Button>

          <Button
            variant="tertiary"
            className="w-full!"
            onClick={async () => {
              const res = await fetch("/api/auth/logout", {
                method: "POST",
                credentials: "include",
              });

              if (res.ok) {
                logout();
                router.push("/login");
                router.refresh();
              } else {
                openModal("normal", {
                  message: "로그아웃에 실패했습니다.",
                  onClick: () => {
                    closeModal();
                  },
                });
              }
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
