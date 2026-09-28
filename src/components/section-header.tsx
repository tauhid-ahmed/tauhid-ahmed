import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  SectionEyebrow                                                     */
/* ------------------------------------------------------------------ */

type SectionEyebrowProps = {
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
};

export function SectionEyebrow({
  icon: Icon,
  children,
  className,
}: SectionEyebrowProps) {
  return (
    <div className={cn("section-eyebrow", className)}>
      {Icon && <Icon className="size-3.5" />}
      <span>{children}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SectionTitle                                                       */
/* ------------------------------------------------------------------ */

type SectionTitleProps = {
  children: React.ReactNode;
  as?: "h2" | "h3";
  className?: string;
};

export function SectionTitle({
  children,
  as: Tag = "h2",
  className,
}: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        "text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  SectionDescription                                                 */
/* ------------------------------------------------------------------ */

type SectionDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionDescription({
  children,
  className,
}: SectionDescriptionProps) {
  return (
    <p
      className={cn(
        "text-base text-muted-foreground max-w-2xl leading-relaxed",
        className,
      )}
    >
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  SectionHeader  — composed shorthand                                */
/* ------------------------------------------------------------------ */

type SectionHeaderProps = {
  /** Small uppercase label above the title */
  eyebrow: string;
  /** Lucide icon rendered in the eyebrow */
  icon?: LucideIcon;
  /** Main section heading */
  title: string;
  /** Optional paragraph beneath the title */
  description?: string;
  /** Render title as h3 instead of h2 (for sub-sections) */
  titleAs?: "h2" | "h3";
  /** Extra wrapper classes */
  className?: string;
};

export function SectionHeader({
  eyebrow,
  icon,
  title,
  description,
  titleAs = "h2",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-2 text-left", className)}>
      <SectionEyebrow icon={icon}>{eyebrow}</SectionEyebrow>
      <SectionTitle as={titleAs}>{title}</SectionTitle>
      {description && <SectionDescription>{description}</SectionDescription>}
    </div>
  );
}
