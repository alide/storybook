import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Foundation/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["contained", "outlined"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "secondary", "inherit"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "contained",
    color: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "contained",
    color: "secondary",
    children: "Button",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    color: "inherit",
    children: "Button",
  },
};
