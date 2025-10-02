import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Product from "./Product";

const meta: Meta<typeof Product> = {
  title: "Post/Product",
  component: Product,
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
type Story = StoryObj<typeof Product>;

export const Default: Story = {
  args: {
    imageSrc: "./assets/product_image.png",
    name: "다이슨 슈퍼소닉 블루",
    reviewCount: 129,
    likeCount: 34,
    rating: 4.7,
  },
};
