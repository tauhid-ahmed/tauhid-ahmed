import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  gradient?: boolean;
  weight?: "bold" | "semibold" | "medium" | "normal";
  align?: "left" | "center" | "right";
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "display";
};

const classnames = (size: Props["size"]) => ({
  "text-[clamp(1.9rem,3.2vw,3.25rem)] font-extrabold tracking-tight leading-[1.15]":
    size === "display",
  "text-[clamp(2rem,4.5vw,3.69rem)] font-bold tracking-tight": size === "h1",
  "text-[clamp(1.8rem,4vw,2.95rem)] font-bold tracking-tight": size === "h2",
  "text-[clamp(1.6rem,3vw,2.36rem)] font-semibold tracking-tight":
    size === "h3",
  "text-[clamp(1.375rem,2.5vw,1.89rem)] font-semibold tracking-tight":
    size === "h4",
  "text-[clamp(1rem,1.6vw,1.2rem)] font-medium": size === "h5",
  "text-[clamp(0.875rem,1.5vw,0.875rem)] font-medium": size === "h6",
});

export function Heading({
  gradient = true,
  as = "h2",
  weight = "bold",
  align = "center",
  size = "h2",
  className,
  children,
  ...props
}: Props) {
  const Comp = as;
  return (
    <Comp
      className={cn(
        "font-medium",
        gradient &&
          "bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500",
        weight && `font-${weight}`,
        align && `text-${align}`,
        { ...classnames(size) },
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
