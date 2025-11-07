import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";
import React, { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "USER/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "Input label 텍스트" },
    value: {
      control: "text",
      description: "Controlled value (직접 입력 가능)",
    },
    placeholder: { control: "text", description: "Input placeholder" },
    isHiddenable: {
      control: "boolean",
      description: "비밀번호 토글 버튼 활성화",
    },
    isError: { control: "boolean", description: "에러 상태 여부" },
    message: {
      control: "text",
      description: "가이드 메시지 (value 없을 때 표시)",
    },
    errorMessage: {
      control: "text",
      description: "에러 메시지 (isError=true일 때 표시)",
    },
    onChange: { action: "changed", description: "값 변경 이벤트" },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

// Controlled (value를 state로 제어)
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("초기값");
    return (
      <Input
        label="Controlled input"
        value={value}
        placeholder="값을 입력하세요"
        onChange={(e) => setValue(e.target.value)}
        message="가이드 메시지"
      />
    );
  },
};

// Password (isHiddenable = true)
export const Password: Story = {
  args: {
    label: "비밀번호",
    placeholder: "비밀번호를 입력하세요",
    isHiddenable: true,
    message: "최소 8자 이상 입력하세요",
  },
};

// Error (isError = true)
export const Error: Story = {
  args: {
    label: "닉네임",
    placeholder: "닉네임을 입력하세요",
    isError: true,
    errorMessage: "이미 사용 중인 닉네임입니다",
  },
};
