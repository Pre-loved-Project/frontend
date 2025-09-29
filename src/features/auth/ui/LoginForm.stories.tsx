import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "Auth/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      description: "폼 전체 Input과 Button 크기를 조절합니다",
    },
  },
};
export default meta;

type Story = StoryObj<typeof LoginForm>;

// 기본 (Large size)
export const Default: Story = {
  args: {
    size: "lg",
  },
};

// Small size
export const Small: Story = {
  args: {
    size: "sm",
  },
};

// Medium size
export const Medium: Story = {
  args: {
    size: "md",
  },
};