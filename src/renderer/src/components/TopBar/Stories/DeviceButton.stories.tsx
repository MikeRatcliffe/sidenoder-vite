import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { DeviceButton } from "../DeviceButton";

const meta = {
  title: "Sidenoder/DeviceButton",
  component: DeviceButton,
  args: {
    label: "BROWSE",
    connectionState: "disconnected",
    id: "string",
    onClick: fn(),
    disabled: false,
  },
  argTypes: {
    label: {
      control: "inline-radio",
      options: ["BROWSE", "DEVICE", "WIRELESS"],
    },
    connectionState: {
      control: "inline-radio",
      options: ["disconnected", "connecting", "connected"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof DeviceButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Browse: Story = {
  args: {
    label: "BROWSE",
    connectionState: "disconnected",
    id: "some-id",
  },
};

export const Device: Story = {
  args: {
    label: "DEVICE",
    connectionState: "connecting",
    id: "some-id",
  },
};

export const Wireless: Story = {
  args: {
    label: "WIRELESS",
    connectionState: "connected",
    id: "some-id",
  },
};
