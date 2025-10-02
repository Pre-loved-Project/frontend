import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PostCard from "./PostCard";

const meta: Meta<typeof PostCard> = {
  title: "Post/PostCard",
  component: PostCard,
  tags: ["autodocs"],
  argTypes: {
    postingId: { control: "number" },
    title: { control: "text" },
    price: { control: "number" },
    sellerId: { control: "number" },
    content: { control: "text" },
    createdAt: { control: "text" },
    likeCount: { control: "number" },
    chatCount: { control: "number" },
    viewCount: { control: "number" },
    thumbnail: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof PostCard>;
export const Mobile: Story = {
  args: {
    postingId: 101,
    title: "다이슨 슈퍼소닉 블루 판매",
    price: 1200000,
    sellerId: 12,
    content: "사용감 있어서 싸게 팝니다",
    createdAt: "2025-09-13T15:23:45Z",
    likeCount: 5,
    chatCount: 2,
    viewCount: 101,
    thumbnail: "",
  },
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
};

export const Tablet: Story = {
  args: {
    postingId: 101,
    title: "다이슨 슈퍼소닉 블루 판매",
    price: 1200000,
    sellerId: 12,
    content: "사용감 있어서 싸게 팝니다",
    createdAt: "2025-09-13T15:23:45Z",
    likeCount: 5,
    chatCount: 2,
    viewCount: 101,
    thumbnail: "",
  },
  globals: {
    viewport: { value: "tablet", isRotated: false },
  },
};

export const Desktop: Story = {
  args: {
    postingId: 101,
    title: "다이슨 슈퍼소닉 블루 판매",
    price: 1200000,
    sellerId: 12,
    content: "사용감 있어서 싸게 팝니다",
    createdAt: "2025-09-13T15:23:45Z",
    likeCount: 5,
    chatCount: 2,
    viewCount: 101,
    thumbnail: "",
  },
  globals: {
    viewport: { value: "desktop", isRotated: false },
  },
};
