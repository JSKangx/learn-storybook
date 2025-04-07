interface ButtonProps {
  label: string;
  onClick: () => void;
  textSize: "sm" | "md" | "lg";
  textColor?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  backgroundColor: string;
}

export default function Button({
  label,
  onClick,
  type = "button",
  textSize = "md",
  disabled,
  backgroundColor,
  textColor = "black",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded ${
        textSize === "sm"
          ? "text-sm"
          : textSize === "lg"
          ? "text-lg"
          : "text-base"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={disabled}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      {label}
    </button>
  );
}
