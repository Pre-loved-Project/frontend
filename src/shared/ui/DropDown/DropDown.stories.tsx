import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DropDown } from "./DropDown";
import { useState } from "react";

const meta: Meta<typeof DropDown> = {
  title: "COMPONENTS/Dropdown",
  component: DropDown,
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
    value: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    onChange: { action: "changed" },
  },
  args: {
    options: [
      { label: "옵션 1", value: "1" },
      { label: "옵션 2", value: "2" },
      { label: "옵션 4", value: "3" },
      { label: "옵션 5", value: "3" },
      { label: "옵션 6", value: "3" },
      { label: "옵션 7", value: "3" },
      { label: "옵션 8", value: "3" },
      { label: "옵션 9", value: "3" },
      { label: "옵션 10", value: "3" },
      { label: "옵션 11", value: "3" },
      { label: "옵션 12", value: "3" },
      { label: "옵션 13", value: "3" },
    ],
    placeholder: "선택하세요",
  },
};

export default meta;
type Story = StoryObj<typeof DropDown>;

// --- Main (useState로 상태 핸들링) ---
export const Main: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>("");

    return (
      <div className="flex flex-col gap-4">
        <DropDown
          {...args}
          value={value}
          onChange={(val) => {
            setValue(val);
            args.onChange?.(val);
          }}
        />
        <div className="text-black-900">선택된 값: {value || "없음"}</div>
      </div>
    );
  },
};
