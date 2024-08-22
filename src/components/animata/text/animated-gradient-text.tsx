import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-size animate-bg-position bg-gradient-to-r font-black from-blue-500 from-30% via-sky-700 via-50% to-cyan-500 to-80% bg-[length:200%_auto] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </div>
  );
}
