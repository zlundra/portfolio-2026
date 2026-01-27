import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      richColors
      expand
      position="bottom-right"
      toastOptions={{
        className:
          "glass-card border-white/10 text-foreground",
      }}
    />
  );
}
