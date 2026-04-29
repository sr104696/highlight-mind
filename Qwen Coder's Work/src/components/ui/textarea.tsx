import { forwardRef, type TextareaHTMLAttributes } from "react";
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className = "", ...p }, ref) => (
    <textarea ref={ref} className={`flex w-full rounded-md border bg-background px-3 py-2 text-sm ${className}`} {...p} />
  )
);
Textarea.displayName = "Textarea";
