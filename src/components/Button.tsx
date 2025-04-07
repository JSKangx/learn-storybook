import clsx from "clsx";

interface ButtonProps {
  label: string;
  onClick: () => void;
  textSize: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "danger";
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

export default function Button({
  label,
  onClick,
  type = "button",
  textSize = "md",
  disabled,
  variant = "primary",
}: ButtonProps) {
  // 기본 버튼 클래스
  const base = "rounded px-4 py-2 font-semibold transition-colors";

  // textSize 클래스
  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  // 버튼 용도에 따른 디자인
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        base,
        textSizeClasses[textSize],
        variantClasses[variant],
        { "opacity-50 cursor-not-allowed": disabled }
      )}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
