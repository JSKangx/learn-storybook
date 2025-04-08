import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    title: "Card Title",
    description: "Card 설명을 여기에 적습니다.",
    children: <button className="text-blue-600 underline">더보기</button>,
  },
};

export const WithImage: Story = {
  args: {
    title: "동물 정보",
    description: "이건 귀여운 고양이입니다.",
    children: (
      <div className="space-y-2">
        <img
          src="https://placekitten.com/300/200"
          alt="고양이"
          className="rounded-md"
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded">
          보러가기
        </button>
      </div>
    ),
  },
};
