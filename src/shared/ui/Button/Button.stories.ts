import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Tertiary",
  },
};
