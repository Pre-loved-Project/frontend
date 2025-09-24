import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    width: { control: "text" },
    height: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    width: "400px",
    height: "70px",
    placeholder: "Enter your text",
  },
};

export const Focused: Story = {
  args: {
    width: "400px",
    height: "70px",
    placeholder: "Type something...",
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector("input") as HTMLInputElement;
    input?.focus();
  },
};

export const Error: Story = {
  args: {
    placeholder: "This field has an error",
    error: true,
    width: "400px",
    height: "70px",
  },
};