"use client";
import { useState, useEffect } from "react";
import Profile, { ProfileProps } from "@/entities/user/ui/card/Profile";
import PostCard from "@/entities/post/ui/card/PostCard";
import Tab from "@/widgets/mypage/ui/Tab.tsx/Tab";
import { apiFetch } from "@/shared/api/fetcher";
import { Modal } from "@/shared/ui/Modal/Modal";
import { ProfileEditModal } from "@/features/editProfile/ui/ProfileEditModal/ProfileEditModal";

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

  // 모달 상태
  const [modalType, setModalType] = useState<
    null | "edit" | "success" | "error"
  >(null);
  const isAnyModalOpen = modalType !== null;

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

  return (
    <main className="m-auto flex max-w-[335px] flex-col items-center justify-center gap-[60px] pt-[30px] md:max-w-[510px] md:pt-[40px] xl:max-w-[1340px] xl:flex-row xl:items-start xl:justify-start xl:gap-[80px] xl:pt-[60px]">
      {userProfile && (
        <Profile {...userProfile} onEdit={() => setModalType("edit")} />
      )}
      <section className="flex flex-col gap-[30px]">
        <Tab options={options} selected={selected} onChange={setSelected} />
        <ul className="grid grid-cols-2 gap-[15px] xl:grid-cols-3 xl:gap-[20px]">
          {mockPosts.map((post) => (
            <li key={post.postingId}>
              <PostCard {...post} />
            </li>
          ))}
        </ul>
      </section>

      {isAnyModalOpen && (
        <div className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          {modalType === "edit" && userProfile && (
            <ProfileEditModal
              {...userProfile}
              onClose={() => setModalType(null)}
              onSave={async () => {
                setModalType(null);
                setTimeout(() => setModalType("success"), 50);
                await fetchUserProfile(); // 최신 데이터 갱신
              }}
              onError={() => setModalType("error")}
            />
          )}

          {modalType === "success" && (
            <Modal
              message="프로필이 성공적으로 수정되었습니다."
              buttonText="확인"
              onClick={() => setModalType(null)}
              className=""
            />
          )}

          {modalType === "error" && (
            <Modal
              message="프로필 수정에 실패했습니다."
              buttonText="확인"
              onClick={() => setModalType(null)}
              className=""
            />
          )}
        </div>
      )}
    </main>
  );
};

export default Mypage;
