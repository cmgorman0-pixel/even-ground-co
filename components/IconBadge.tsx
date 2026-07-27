import type { LucideIcon } from "lucide-react";

export function IconBadge({
  icon: Icon,
  className = "mb-4",
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-clay/20 bg-clay/10 text-clay ${className}`}
    >
      <Icon className="h-5 w-5" strokeWidth={2} />
    </div>
  );
}
