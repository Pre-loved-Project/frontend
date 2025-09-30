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
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    widthSize: {
      control: { type: "radio" },
      options: ["long", "short"],
    },
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
      { label: "옵션 3", value: "3" },
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
  args: {
    size: "lg",
    widthSize: "long",
  },
};

// --- Size Variants ---
export const Large: Story = {
  args: {
    size: "lg",
    widthSize: "long",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    widthSize: "long",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    widthSize: "long",
  },
};

// --- Width Variants ---
export const Long: Story = {
  args: {
    size: "lg",
    widthSize: "long",
  },
};

export const Short: Story = {
  args: {
    size: "lg",
    widthSize: "short",
  },
};
