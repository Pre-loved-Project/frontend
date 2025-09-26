import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "COMPONENTS/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    fieldSize: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      description: "Input height, text size, and icon size",
      defaultValue: "lg",
    },
    widthSize: {
      control: { type: "radio" },
      options: ["long", "short"],
      description: "Input width type",
      defaultValue: "long",
    },
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
    fieldSize: "lg",
    widthSize: "long",
  },
};

// 에러 상태
export const Error: Story = {
  args: {
    placeholder: "에러 상태",
    fieldSize: "md",
    widthSize: "long",
    isError: true,
  },
};

// 비밀번호 입력 (숨김 가능)
export const PasswordHiddenable: Story = {
  args: {
    placeholder: "비밀번호 입력",
    fieldSize: "md",
    widthSize: "long",
    isHiddenable: true,
  },
};

//Long size
export const Small: Story = {
  args: {
    placeholder: "Small",
    fieldSize: "sm",
    widthSize: "long",
  },
};

//Medium Size
export const Medium: Story = {
  args: {
    placeholder: "Medium",
    fieldSize: "md",
    widthSize: "long",
  },
};

//Large Size
export const Large: Story = {
  args: {
    placeholder: "Large",
    fieldSize: "lg",
    widthSize: "long",
  },
};

// Long Width
export const Long: Story = {
  args: {
    placeholder: "long width",
    fieldSize: "lg",
    widthSize: "long",
  },
};

// Short width
export const Short: Story = {
  args: {
    placeholder: "short width",
    fieldSize: "lg",
    widthSize: "short",
  },
};