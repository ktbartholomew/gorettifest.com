import { ReactNode } from "react";

type ButtonProps = { children?: ReactNode };

export function Button({ children }: ButtonProps) {
  return (
    <button className="bg-blue-600 hover:bg-blue-500 transition-colors text-white rounded-md px-8 py-2">
      {children}
    </button>
  );
}
