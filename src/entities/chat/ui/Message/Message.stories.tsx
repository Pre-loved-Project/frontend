import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Message } from "./Message";

const meta: Meta<typeof Message> = {
  title: "Entities/Chat/Message",
  component: Message,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "image"],
    },
    content: { control: "text" },
    isMine: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Message>;

export const MyText: Story = {
  args: {
    type: "text",
    content: "네, 아직 있습니다. 상태는 아주 좋아요 🙂",
    isMine: true,
  },
};

export const OtherText: Story = {
  args: {
    type: "text",
    content: "안녕하세요! 이 물건 아직 있나요?",
    isMine: false,
  },
};

export const Image: Story = {
  args: {
    type: "image",
    content:
      "https://chalddackimage.blob.core.windows.net/chalddackimage/bf6828c2-3151-433a-b582-ff954f7be6c1-mid.jpeg",
    isMine: true,
  },
};
