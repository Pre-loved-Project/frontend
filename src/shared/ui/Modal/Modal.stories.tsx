import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";
import Button from "../Button/Button";

const meta: Meta<typeof Modal> = {
  title: "COMPONENTS/Modal",
  component: Modal,
  tags: ["autodocs"],  
  parameters: {
    docs:{
      story: {
        inline: false,
        iframeHeight: 700,
      }
    }
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    message: { control: "text" },
    buttonText: { control: "text" },
    onClick: { action: "clicked" },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

// lg modal
export const Large: Story = {
  args: {
    size: "lg",
    message: "큰 크기 모달입니다.",
    buttonText: "확인",
  },
};

//md modal
export const Meidum: Story = {
  args: {
    size: "md",
    message: "중간 크기 모달입니다.",
    buttonText: "확인",
  },
};

// small modal
export const Small: Story = {
  args: {
    size: "sm",
    message: "작은 크기 모달입니다",
    buttonText: "닫기",
  },
};


// open / close Situation
export const Interactive: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button variant="primary" size="md" onClick={() => setOpen(true)}>
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