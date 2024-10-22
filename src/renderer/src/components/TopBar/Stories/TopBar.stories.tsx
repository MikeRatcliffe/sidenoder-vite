import type { Meta, StoryObj } from "@storybook/react";
import { TopBar } from "../TopBar";

const meta = {
  title: "Sidenoder/TopBar",
  component: TopBar,
  args: {},
  argTypes: {},
} satisfies Meta<typeof TopBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NavBar: Story = {
  args: {},
};
