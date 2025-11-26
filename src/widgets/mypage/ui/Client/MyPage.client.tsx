"use client";

import { useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import Profile, { ProfileProps } from "@/entities/user/ui/card/Profile";
import ProfileSkeleton from "@/entities/user/ui/card/ProfileSkeleton";
import PostCard from "@/entities/post/ui/card/PostCard";
import { PostCreateButton } from "@/features/createPost/ui/PostCreateButton/PostCreateButton";
import Tab from "@/widgets/mypage/ui/Tab.tsx/Tab";
import { useModalStore } from "@/shared/model/modal.store";
import { usePostCreateModal } from "@/features/createPost/lib/usePostCreateModal";
import { getMyPosts, getMyProfile } from "@/entities/user/api/mypage";
import type { Post } from "@/entities/post/model/types/post";

const options = [
  { label: "판매중 상품", value: "selling" },
  { label: "판매완료 상품", value: "sold" },
  { label: "구매한 상품", value: "purchased" },
  { label: "관심 상품", value: "favorite" },
];

const emptyMessageMap: Record<string, string> = {
  selling: "등록되어 있는 상품이 없습니다.",
  sold: "판매 완료된 상품이 없습니다.",
  purchased: "구매 완료된 상품이 없습니다.",
  favorite: "즐겨찾기한 상품이 없습니다.",
};

export default function MyPageClient({ defaultTab }: { defaultTab: string }) {
  const [selectedTab, setSelectedTab] = useState(defaultTab);
  const { openModal, closeModal } = useModalStore();

  const {
    data: userProfile,
    isLoading: profileLoading,
    refetch: refetchUserProfile,
  } = useQuery<ProfileProps>({
    queryKey: ["userProfile"],
    queryFn: getMyProfile,
  });

  const {
    data: postsData,
    isLoading: postsLoading,
    refetch: refetchPosts,
  } = useQuery<{ data: Post[] }>({
    queryKey: ["myPosts", selectedTab],
    queryFn: () => getMyPosts(selectedTab),
  });

  const { openPostCreateModal } = usePostCreateModal({
    onSuccess: async () => {
      await refetchPosts();
    },
  });

  const handleEditProfile = useCallback(() => {
    if (!userProfile) return;

    openModal("editProfile", {
      ...userProfile,
      onClose: () => closeModal(),
      onSave: async () => {
        closeModal();
        setTimeout(() => {
          openModal("normal", {
            message: "프로필이 성공적으로 수정되었습니다.",
            buttonText: "확인",
            onClick: () => closeModal(),
          });
        }, 100);
        await refetchUserProfile();
      },
      onError: () => {
        closeModal();
        openModal("normal", {
          message: "프로필 수정에 실패했습니다.",
          buttonText: "확인",
          onClick: () => closeModal(),
        });
      },
    });
  }, [userProfile, openModal, closeModal, refetchUserProfile]);

  const posts = postsData?.data || [];

  return (
    <main className="m-auto flex max-w-[335px] flex-col items-center justify-center gap-[60px] py-[30px] md:max-w-[510px] md:py-10 xl:max-w-[1340px] xl:flex-row xl:items-start xl:justify-start xl:gap-20 xl:py-[60px]">
      {profileLoading || !userProfile ? (
        <ProfileSkeleton />
      ) : (
        <Profile {...userProfile} onEdit={handleEditProfile} />
      )}

      <section className="flex flex-col gap-[30px]">
        <Tab
          options={options}
          selected={selectedTab}
          onChange={setSelectedTab}
        />

        {postsLoading ? null : posts.length === 0 ? (
          <p className="mt-10 text-center text-gray-400">
            {emptyMessageMap[selectedTab]}
          </p>
        ) : (
          <ul className="grid grid-cols-2 gap-[15px] xl:grid-cols-3 xl:gap-5">
            {posts.map((post) => (
              <li key={post.postingId}>
                <PostCard {...post} />
              </li>
            ))}
          </ul>
        )}
        <PostCreateButton onClick={openPostCreateModal} />
      </section>
    </main>
  );
}
