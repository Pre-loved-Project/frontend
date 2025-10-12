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
    imageSrc: { control: "text" },
    nickname: { control: "text" },
    bio: { control: "text" },
    stats: {
      control: "object",
      description: "구매내역, 판매내역, 관심 카테고리 정보",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Profile>;

const defaultStats = {
  purchase: 10,
  sales: 5,
  category: "패션",
};

export const Default: Story = {
  args: {
    imageSrc: "",
    nickname: "홍길동",
    bio: "간단한 자기소개만 있는 프로필입니다.",
    stats: defaultStats,
  },
};
