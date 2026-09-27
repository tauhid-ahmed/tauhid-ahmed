import { cn } from "@/lib/utils";

type Props = {
  size?: "sm" | "md" | "lg";
} & React.ComponentProps<"div">;

export function Container({ size, className, children, ...props }: Props) {
  return (
    <div
      className={cn(
        "container mx-auto px-4 md:px-6",
        {
          "lg:max-w-4xl": size === "md",
          "lg:max-w-6xl": size === "lg",
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
