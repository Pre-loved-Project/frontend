"use client";
import { useState, useEffect } from "react";
import Profile, { ProfileProps } from "@/entities/user/ui/card/Profile";
import PostCard from "@/entities/post/ui/card/PostCard";
import { PostCreateButton } from "@/features/createPost/ui/PostCreateButton/PostCreateButton";
import Tab from "@/widgets/mypage/ui/Tab.tsx/Tab";
import { apiFetch } from "@/shared/api/fetcher";
import { useModalStore } from "@/shared/model/modal.store";
import { usePostCreateModal } from "@/features/createPost/lib/usePostCreateModal";

const options = [
  { label: "판매중 상품", value: "selling" },
  { label: "판매완료 상품", value: "sold" },
  { label: "구매한 상품", value: "purchased" },
  { label: "관심 상품", value: "liked" },
];

const mockPosts = [
  {
    postingId: 1,
    title: "다이슨 슈퍼소닉 드라이기 판매합니다",
    price: 420000,
    sellerId: 101,
    content: "정품 A급 상태로, 사용 기간 짧고 작동 아주 잘 됩니다.",
    createdAt: "2025-10-04",
    likeCount: 12,
    chatCount: 3,
    viewCount: 150,
    thumbnail: "",
  },
  {
    postingId: 2,
    title: "다이슨 슈퍼소닉 드라이기 판매합니다",
    price: 420000,
    sellerId: 101,
    content: "정품 A급 상태로, 사용 기간 짧고 작동 아주 잘 됩니다.",
    createdAt: "2025-10-04",
    likeCount: 12,
    chatCount: 3,
    viewCount: 150,
    thumbnail: "",
  },
  {
    postingId: 3,
    title: "다이슨 슈퍼소닉 드라이기 판매합니다",
    price: 420000,
    sellerId: 101,
    content: "정품 A급 상태로, 사용 기간 짧고 작동 아주 잘 됩니다.",
    createdAt: "2025-10-04",
    likeCount: 12,
    chatCount: 3,
    viewCount: 150,
    thumbnail: "",
  },
  {
    postingId: 4,
    title: "다이슨 슈퍼소닉 드라이기 판매합니다",
    price: 420000,
    sellerId: 101,
    content: "정품 A급 상태로, 사용 기간 짧고 작동 아주 잘 됩니다.",
    createdAt: "2025-10-04",
    likeCount: 12,
    chatCount: 3,
    viewCount: 150,
    thumbnail: "",
  },
];

const Mypage = () => {
  const [selected, setSelected] = useState(options[0].value);
  const [userProfile, setUserProfile] = useState<ProfileProps | null>(null);
  const { openModal, closeModal } = useModalStore();
  const { openPostCreateModal } = usePostCreateModal({
    onSuccess: async () => {
      //TODO : 게시글 목록 다시 불러오기
    },
  });

  async function fetchUserProfile() {
    try {
      const data = await apiFetch<ProfileProps>("/api/users/me", {
        method: "GET",
      });
      setUserProfile(data);
    } catch (error) {
      console.error("유저 정보 로딩 실패: ", error);
    }
  }

  useEffect(() => {
    fetchUserProfile();
  }, []);

  // 프로필 수정 모달 열기 함수
  const handleEditProfile = () => {
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
            onClick: () => {
              closeModal();
            },
          });
        }, 100);
        await fetchUserProfile();
      },
      onError: () => {
        closeModal();
        openModal("normal", {
          message: "프로필 수정에 실패했습니다.",
          buttonText: "확인",
          onClick: () => {
            closeModal();
          },
        });
      },
    });
  };

  return (
    <main className="m-auto flex max-w-[335px] flex-col items-center justify-center gap-[60px] py-[30px] md:max-w-[510px] md:py-[40px] xl:max-w-[1340px] xl:flex-row xl:items-start xl:justify-start xl:gap-[80px] xl:py-[60px]">
      {userProfile && <Profile {...userProfile} onEdit={handleEditProfile} />}

      <section className="flex flex-col gap-[30px]">
        <Tab options={options} selected={selected} onChange={setSelected} />
        <ul className="grid grid-cols-2 gap-[15px] xl:grid-cols-3 xl:gap-[20px]">
          {mockPosts.map((post) => (
            <li key={post.postingId}>
              <PostCard {...post} />
            </li>
          ))}
        </ul>
        <PostCreateButton onClick={openPostCreateModal} />
      </section>
    </main>
  );
};

export default Mypage;
