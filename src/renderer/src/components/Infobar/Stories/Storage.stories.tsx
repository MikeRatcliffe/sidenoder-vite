import type { Meta, StoryObj } from "@storybook/react";
import { Storage } from "../Storage";

const meta = {
  title: "Sidenoder/Storage",
  component: Storage,
  args: {
    size: "128G",
    used: "64G",
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["128G", "256G", "512G"],
    },
    used: {
      control: "inline-radio",
      options: [
        "64G",
        "100G",
        "128G",
        "156G",
        "200G",
        "256G",
        "400G",
        "475G",
        "512G",
      ],
    },
  },
} satisfies Meta<typeof Storage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    size: "128G",
    used: "50G",
  },
};

export const Warning: Story = {
  args: {
    size: "128G",
    used: "110G",
  },
};

export const Danger: Story = {
  args: {
    size: "128G",
    used: "125G",
  },
};
