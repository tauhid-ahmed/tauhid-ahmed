import { LucideLoader2 } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 fixed inset-0">
      <LucideLoader2 className="animate-spin size-10 text-primary" />
    </div>
  );
}
