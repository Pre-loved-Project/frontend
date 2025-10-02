import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SignUpForm } from "./SignUpForm";

const meta: Meta<typeof SignUpForm> = {
  title: "AUTH/SignUpForm",
  component: SignUpForm,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    onSuccess: { action: "success" },
    onError: { action: "error" },
  },
};

export default meta;
type Story = StoryObj<typeof SignUpForm>;

// lg
export const Large: Story = {
  args: {
    size: "lg",
  },
};

// md
export const Medium: Story = {
  args: {
    size: "md",
  },
};

// sm
export const Small: Story = {
  args: {
    size: "sm",
  },
};
