import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "Auth/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof LoginForm>;

// 기본 (Large size)
export const Default: Story = {};
