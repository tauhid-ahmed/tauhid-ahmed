import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Section — top-level <section> wrapper with Container               */
/* ------------------------------------------------------------------ */

type SectionProps = {
  /** The hash id for this section (used by nav scroll) */
  id?: string;
  children: React.ReactNode;
  /** Container width preset */
  containerSize?: "sm" | "md" | "lg";
  className?: string;
};

export function Section({
  id,
  children,
  containerSize = "lg",
  className,
}: SectionProps) {
  // Lazy import avoided — Container is lightweight
  return (
    <section
      id={id}
      className={cn("relative py-10 md:py-16", className)}
    >
      <div
        className={cn("container mx-auto px-4 md:px-6", {
          "lg:max-w-4xl": containerSize === "md",
          "lg:max-w-6xl": containerSize === "lg",
        })}
      >
        {children}
      </div>
    </section>
  );
}
