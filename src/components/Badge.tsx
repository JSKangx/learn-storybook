type BadgeProps = {
  label: string;
  variant?: "default" | "success" | "error" | "warning" | "info";
};

const variantClassess = {
  default: "bg-gray-200 text-gray-800",
  success: "bg-green-100 text-green-800",
  error: "bg-red-100 text-red-800",
  warning: "bg-yellow-100 text-yellow-800",
  info: "bg-blue-100 text-blue-800",
};

export default function Badge({ label, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${variantClassess[variant]}`}
    >
      {label}
    </span>
  );
}
