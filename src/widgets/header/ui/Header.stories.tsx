import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Header from "./ui/Header";

const meta: Meta<typeof Header> = {
  title: "Widgets/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Mobile: Story = {
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
};

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: "responsive" },
  },
};
