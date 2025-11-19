"use client";
import { useState, useEffect } from "react";
import Profile, { ProfileProps } from "@/entities/user/ui/card/Profile";
import PostCard from "@/entities/post/ui/card/PostCard";
import { PostCreateButton } from "@/features/createPost/ui/PostCreateButton/PostCreateButton";
import Tab from "@/widgets/mypage/ui/Tab.tsx/Tab";
import { apiFetch } from "@/shared/api/fetcher";
import { useModalStore } from "@/shared/model/modal.store";
import { usePostCreateModal } from "@/features/createPost/lib/usePostCreateModal";
import { handleError } from "@/shared/error/errorHandler";
const options = [
  { label: "판매중 상품", value: "selling" },
  { label: "판매완료 상품", value: "sold" },
  { label: "구매한 상품", value: "purchased" },
  { label: "관심 상품", value: "favorite" },
];

interface PostListItem {
  postingId: number;
  sellerId: number;
  title: string;
  price: number;
  content: string;
  category: string;
  createdAt: string;
  likeCount: number;
  chatCount: number;
  viewCount: number;
  thumbnail: string;
}

const Mypage = () => {
  const [selected, setSelected] = useState(options[0].value);
  const [userProfile, setUserProfile] = useState<ProfileProps | null>(null);
  const [posts, setPosts] = useState<PostListItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { openModal, closeModal } = useModalStore();
  const { openPostCreateModal } = usePostCreateModal({
    onSuccess: async () => {
      await fetchPosts(selected);
    },
  });

  async function fetchUserProfile() {
    try {
      const data = await apiFetch<ProfileProps>("/api/users/me", {
        method: "GET",
      });
      setUserProfile(data);
    } catch (error) {
      handleError(error, "유저 프로필을 불러오는 중 오류가 발생했습니다.");
    }
  }

  async function fetchPosts(status: string) {
    //TODO: sold | purchase | favorite 기능 구현되면 지우기
    if (status != "selling") {
      setPosts([]);
    }

    try {
      setLoading(true);
      const res = await apiFetch<{ data: PostListItem[] }>(
        `/api/postings/my?status=${status}`,
        {
          method: "GET",
        },
      );
      setPosts(res.data);
    } catch (error) {
      handleError(error, "현재 유저 게시물을 불러오는 중 오류가 발생했습니다.");
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserProfile();
  }, []);

  useEffect(() => {
    fetchPosts(selected);
  }, [selected]);

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

  //카테고리별 빈 상태 문구
  const emptyMessageMap: Record<string, string> = {
    selling: "등록되어 있는 상품이 없습니다.",
    sold: "판매 완료된 상품이 없습니다.",
    purchased: "구매 완료된 상품이 없습니다.",
    favorite: "즐겨찾기한 상품이 없습니다.",
  };

  return (
    <main className="m-auto flex max-w-[335px] flex-col items-center justify-center gap-[60px] py-[30px] md:max-w-[510px] md:py-[40px] xl:max-w-[1340px] xl:flex-row xl:items-start xl:justify-start xl:gap-[80px] xl:py-[60px]">
      {userProfile && <Profile {...userProfile} onEdit={handleEditProfile} />}

      <section className="flex flex-col gap-[30px]">
        <Tab options={options} selected={selected} onChange={setSelected} />
        {loading ? (
          <p className="mt-10 text-center text-gray-400">로딩 중...</p>
        ) : selected !== "selling" ? (
          <p className="mt-10 text-center text-gray-400">
            {emptyMessageMap[selected]} <br />
            <span className="text-sm text-gray-500">(TODO: API 구현 예정)</span>
          </p>
        ) : posts.length == 0 ? (
          <p className="mt-10 text-center text-gray-400">
            {emptyMessageMap[selected]}
          </p>
        ) : (
          <ul className="grid grid-cols-2 gap-[15px] xl:grid-cols-3 xl:gap-[20px]">
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
};

export default Mypage;
