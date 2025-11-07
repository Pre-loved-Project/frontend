import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Profile from "./Profile";

const meta: Meta<typeof Profile> = {
  title: "User/Profile",
  component: Profile,
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {
    nickname: { control: "text", description: "사용자 닉네임" },
    introduction: { control: "text", description: "자기소개" },
    imageUrl: { control: "text", description: "프로필 이미지 경로" },
    category: { control: "text", description: "관심 카테고리" },
    sellCount: { control: "number", description: "판매내역 수" },
    buyCount: { control: "number", description: "구매내역 수" },
    onEdit: { action: "edit clicked", description: "프로필 수정 버튼 클릭" },
  },
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {
    nickname: "닉네임",
    introduction: "자기 소개",
    imageUrl: "",
    category: "뷰티/화장품",
    sellCount: 0,
    buyCount: 0,
  },
};
