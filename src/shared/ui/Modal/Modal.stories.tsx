import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Modal } from "./Modal";
import Button from "../Button/Button";

const meta: Meta<typeof Modal> = {
  title: "COMPONENTS/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
  },
  argTypes: {
    message: { control: "text" },
    buttonText: { control: "text" },
    onClick: { action: "clicked" },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

// open / close Situation
export const Interactive: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button variant="primary" onClick={() => setOpen(true)}>
          모달 열기
        </Button>
        {open && (
          <Modal
            {...args}
            onClick={() => setOpen(false)}
            message="이 모달은 스토리에서 열고 닫을 수 있습니다."
            buttonText="닫기"
          />
        )}
      </div>
    );
  },
};
