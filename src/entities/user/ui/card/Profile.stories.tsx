import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Profile from "./Profile";

const meta: Meta<typeof Profile> = {
  title: "User/Profile",
  component: Profile,
  tags: ["autodocs"],
  argTypes: {
    imageSrc: { control: "text" },
    nickname: { control: "text" },
    bio: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {
    imageSrc: "",
    nickname: "홍길동",
    bio: "간단한 자기소개만 있는 프로필입니다.",
  },
};
