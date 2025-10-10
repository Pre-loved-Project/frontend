import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { ProfileEditModal } from "./ProfileEditModal";

const meta: Meta<typeof ProfileEditModal> = {
  title: "User/ProfileEditModal",
  component: ProfileEditModal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 900,
      },
    },
  },
  argTypes: {
    onClose: { action: "closed" },
    onSave: { action: "saved" },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileEditModal>;

export const Main: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    return (
      <>
        {open && (
          <ProfileEditModal
            {...args}
            imageUrl="https://i.namu.wiki/i/bWtUr_r8eY7ikAhSgpZY0kga1QCDgZIsQI9P3UDmIDKqBJ67zQGZg95H2Svkph_k6PkQ2w_HRXj55lF9BSZD07VqH2PUdFLKWDm880fd0dIgk9nsC3vamlu0iPsjnPe4EOt6cGF7u0wWKfyYWjsaRHQRjBwFu5wmUD1RZtcxQyE.webp"
            nickname="홍길동"
            introduction="안녕하세요. 저는 테스트 사용자입니다."
            category="전자제품/가전제품"
            onClose={() => {
              console.log("모달 닫기");
              setOpen(false);
            }}
            onSave={() => {
              console.log("저장 클릭");
            }}
          />
        )}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="mt-5 rounded bg-blue-500 px-4 py-2 text-white"
          >
            모달 열기
          </button>
        )}
      </>
    );
  },
};
