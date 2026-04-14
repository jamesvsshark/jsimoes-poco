import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] hover:bg-violet-700",
  secondary: "border border-border text-secondary hover:text-foreground hover:bg-panel",
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </Link>
  );
}
