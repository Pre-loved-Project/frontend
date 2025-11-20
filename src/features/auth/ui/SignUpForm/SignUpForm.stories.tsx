import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SignUpForm } from "./SignUpForm";

const meta: Meta<typeof SignUpForm> = {
  title: "AUTH/SignUpForm",
  component: SignUpForm,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onSuccess: { action: "success" },
  },
};

export default meta;
type Story = StoryObj<typeof SignUpForm>;

// lg
export const Large: Story = {};
