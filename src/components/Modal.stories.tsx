import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import ModalSample from "./ModalSample";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => <ModalSample />,
};
