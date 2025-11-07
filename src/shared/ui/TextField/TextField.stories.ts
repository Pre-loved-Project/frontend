import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "COMPONENTS/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    isError: {
      control: { type: "boolean" },
      description: "Show error border (red)",
      defaultValue: false,
    },
    isHiddenable: {
      control: { type: "boolean" },
      description: "Enable eye toggle button for password fields",
      defaultValue: false,
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text",
    },
    value: {
      control: { type: "text" },
      description: "Controlled value (if provided)",
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextField>;

// 기본 (Uncontrolled)
export const Default: Story = {
  args: {
    placeholder: "내용을 입력해주세요.",
  },
};

// 에러 상태
export const Error: Story = {
  args: {
    placeholder: "에러 상태",
    isError: true,
  },
};

// 비밀번호 입력 (숨김 가능)
export const PasswordHiddenable: Story = {
  args: {
    placeholder: "비밀번호 입력",
    isHiddenable: true,
  },
};
