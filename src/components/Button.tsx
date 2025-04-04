interface ButtonProps {
  label: string;
  onClick: () => void;
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
}

export default function Button({
  label,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-200 rounded hover:bg-blue-300 ${className}`}
    >
      {label}
    </button>
  );
}
