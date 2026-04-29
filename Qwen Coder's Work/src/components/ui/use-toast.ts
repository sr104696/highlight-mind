export type ToastPayload = {
  id?: string; title?: unknown; description?: unknown; action?: unknown;
  [key: string]: unknown;
};
export function toast(input: string | ToastPayload) {
  if (typeof input === "string") return input;
  return input.id ?? crypto.randomUUID();
}
export function useToast() {
  return { toasts: [] as ToastPayload[], toast, dismiss: () => undefined };
}
