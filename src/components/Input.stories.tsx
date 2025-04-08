import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email"],
    },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    value: {
      control: "text",
    },
    onChange: { action: "changed!" },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Playground: Story = {
  args: {
    type: "text",
    placeholder: "입력해주세요",
    disabled: false,
    value: "",
  },
};
