import Button from "./Button";

// Storybook 메타 정보
const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger"],
    },
    textSize: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    textColor: {
      control: "color",
    },
  },
  tags: ["autodocs"],
};

export default meta;

// Story 예제들
export const Primary = {
  args: {
    label: "Primary Button",
    backgroundColor: "#72dd96",
    size: "md",
    textSize: "lg",
    disabled: false,
    textColor: "#ffffff",
    variant: "secondary",
  },
};

export const Danger = {
  args: {
    label: "Delete",
    className: "bg-red-300 hover:bg-red-400",
  },
};

export const WithClickHandler = {
  args: {
    label: "Click Me!",
    onClick: () => alert("Clicked!"),
  },
};
