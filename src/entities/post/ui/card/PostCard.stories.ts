import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PostCard from "./PostCard";

const meta: Meta<typeof PostCard> = {
  title: "Post/PostCard",
  component: PostCard,
  tags: ["autodocs"],
  argTypes: {
    imageSrc: { control: "text" },
    name: { control: "text" },
    reviewCount: { control: "number" },
    likeCount: { control: "number" },
    rating: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const Default: Story = {
  args: {
    imageSrc: "",
    name: "다이슨 슈퍼소닉 블루",
    reviewCount: 129,
    likeCount: 34,
    rating: 4.7,
  },
};
