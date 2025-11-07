import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { TextBox } from "./TextBox";

const meta: Meta<typeof TextBox> = {
  title: "COMPONENTS/TextBox",
  component: TextBox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
  argTypes: {
    placeholder: { control: "text" },
    maxLength: { control: "number" },
  },
  args: {
    placeholder: "자기소개를 입력하세요...",
    maxLength: 300,
  },
};

export default meta;
type Story = StoryObj<typeof TextBox>;

// --- Main (상태 관리 예시) ---
export const Main: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <div className="flex flex-col gap-4">
        <TextBox
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="text-black-900">현재 입력 값: {value || "없음"}</div>
      </div>
    );
  },
};
