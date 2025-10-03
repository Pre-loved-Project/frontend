import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { ProfileImageChangeInput } from "./ProfileImageChangeInput";

const meta: Meta<typeof ProfileImageChangeInput> = {
  title: "User/ProfileImageChangeInput",
  component: ProfileImageChangeInput,
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
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileImageChangeInput>;

// Main
export const Main: Story = {
  render: (args) => {
    const [file, setFile] = useState<File | null>(null);

    return (
      <div className="flex flex-col gap-4">
        <ProfileImageChangeInput
          {...args}
          onChange={(f) => {
            setFile(f);
            args.onChange?.(f);
          }}
        />
        <div className="text-black-900">
          {file ? `선택된 파일: ${file.name}` : "선택된 파일 없음"}
        </div>
      </div>
    );
  },
};
