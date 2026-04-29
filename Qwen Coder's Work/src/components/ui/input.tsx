import { forwardRef, type InputHTMLAttributes } from "react";
export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className = "", ...p }, ref) => (
    <input ref={ref} className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ${className}`} {...p} />
  )
);
Input.displayName = "Input";
