// components/timeline/index.tsx

import { Heading } from "@/components/heading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; // optional utility for merging classNames

// Base prop shared across timeline components
type BaseProps = {} & React.HTMLAttributes<HTMLDivElement>;

// Root component
function Root({ className, children, ...props }: BaseProps) {
  return (
    <div
      className={cn(
        "relative pl-8 pb-8 last:pb-0 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-primary/60 before:via-primary/30 before:to-transparent after:absolute after:size-3 after:bg-primary after:ring-4 after:ring-primary/20 after:rounded-full after:left-0 after:top-2 after:-translate-x-1/2 transition-all",
        className
      )}
      {...props}
    >
      <div className="space-y-2.5 p-4 rounded-xl border border-border/40 bg-card/30 hover:border-primary/30 hover:bg-card/50 transition-colors">
        {children}
      </div>
    </div>
  );
}

// Title
function Title({ className, children, ...props }: BaseProps) {
  return (
    <Heading
      as="h3"
      size="h5"
      align="left"
      className={cn("", className)}
      {...props}
    >
      {children}
    </Heading>
  );
}

// Subtitle
function Subtitle({ className, children, ...props }: BaseProps) {
  return (
    <Heading
      as="h4"
      size="h6"
      align="left"
      className={cn("text-sm text-primary", className)}
      {...props}
    >
      {children}
    </Heading>
  );
}

// Description
function Description({ className, children, ...props }: BaseProps) {
  return (
    <p className={cn("text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}

// Tags
function Tags({ className, children, ...props }: BaseProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)} {...props}>
      {children}
    </div>
  );
}

// Tag
function Tag({ className, children, ...props }: BaseProps) {
  return (
    <Badge
      className={cn(
        "bg-primary/10 text-primary border border-primary/20",
        className
      )}
      {...props}
    >
      {children}
    </Badge>
  );
}

// Compound export
export const Timeline = {
  Root,
  Title,
  Subtitle,
  Description,
  Tags,
  Tag,
};
