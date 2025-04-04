import Button from "./Button";

// Storybook 메타 정보
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

// Story 예제들
export const Primary = {
  args: {
    label: "Primary Button",
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
    label: "Click Me",
    onClick: () => alert("Clicked!"),
  },
};
