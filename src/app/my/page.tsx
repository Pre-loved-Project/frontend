"use client";
import { useState } from "react";
import Profile from "@/entities/user/ui/card/Profile";
import PostCard from "@/entities/post/ui/card/PostCard";
import Tab from "@/widgets/mypage/ui/Tab.tsx/Tab";

const options = [
  { label: "판매중 상품", value: "selling" },
  { label: "판매완료 상품", value: "sold" },
  { label: "구매한 상품", value: "purchased" },
  { label: "관심 상품", value: "liked" },
];

const mockUserProfileData = {
  imageSrc: "",
  nickname: "찰딱",
  bio: "안녕하세요. 믿을 수 있는 중고 거래를 지향하는 사용자입니다.",
  stats: {
    purchase: 15,
    sales: 7,
    category: "디지털 기기",
  },
};

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
  return (
    <main className="m-auto flex max-w-[335px] flex-col items-center justify-center gap-[60px] pt-[30px] md:max-w-[510px] md:pt-[40px] xl:max-w-[1340px] xl:flex-row xl:items-start xl:justify-start xl:gap-[80px] xl:pt-[60px]">
      <Profile {...mockUserProfileData} />
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
    </main>
  );
};

export default Mypage;
