import { cn } from "@/lib/utils";

interface FormPlaceholderProps {
  placeholder: string;
  className?: string;
}

export function FormPlaceholder({
  placeholder,
  className,
}: FormPlaceholderProps) {
  return (
    <div
      className={cn(
        "absolute left-4 top-1/2 -translate-y-1/2 text-sm",
        className,
      )}
    >
      {placeholder}
      <span className="text-primary">*</span>
    </div>
  );
}
