import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { PostCreateModal } from "./PostCreateModal";

const meta: Meta<typeof PostCreateModal> = {
  title: "Post/PostCreateModal",
  component: PostCreateModal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 900,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PostCreateModal>;

export const Main: Story = {
  render: () => {
    const [open, setOpen] = useState(true);

    const handleClose = () => setOpen(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="mb-4 rounded bg-blue-500 px-4 py-2 text-white"
        >
          게시물 추가 모달 열기
        </button>

        {open && <PostCreateModal onClose={handleClose} />}
      </>
    );
  },
};
