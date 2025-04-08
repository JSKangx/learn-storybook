import { ReactNode } from "react";

interface CardProps {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <div className="rounded-xl shadow-md border border-gray-200 p-4 bg-white space-y-2 w-full max-w-md">
      {title && <h2 className="text-lg font-semibold">{title}</h2>}
      {description && <p className="text-gray-600 text-sm">{description}</p>}
      {children}
    </div>
  );
}
