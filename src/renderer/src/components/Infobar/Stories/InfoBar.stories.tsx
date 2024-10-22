import type { Meta, StoryObj } from "@storybook/react";
import { InfoBar } from "../InfoBar";

const meta = {
  title: "Sidenoder/InfoBar",
  component: InfoBar,
} satisfies Meta<typeof InfoBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {};
