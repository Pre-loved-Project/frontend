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
    hint: { control: "text" },
    error: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    hint: "Enter your text",
    width: "400px",
    height: "70px",
  },
};

export const Focused: Story = {
  args: {
    hint: "Type something...",
    width: "400px",
    height: "70px",
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector("input") as HTMLInputElement;
    input?.focus();
  },
};

export const Error: Story = {
  args: {
    hint: "This field has an error",
    error: true,
    width: "400px",
    height: "70px",
  },
};