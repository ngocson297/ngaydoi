import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "./cn";

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

function buttonClasses({ variant = "primary", size = "md", fullWidth = false }: ButtonStyleProps): string {
  return cn("ui-button", `ui-button-${variant}`, `ui-button-${size}`, fullWidth && "ui-button-full");
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonStyleProps {
  loading?: boolean;
  loadingLabel?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  loadingLabel = "Đang xử lý…",
  leadingIcon,
  trailingIcon,
  className,
  disabled,
  children,
  type = "button",
  ...props
}, ref) {
  return (
    <button
      {...props}
      ref={ref}
      type={type}
      className={cn(buttonClasses({ variant, size, fullWidth }), className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
    >
      {loading ? <span className="ui-button-spinner" aria-hidden="true" /> : leadingIcon}
      <span className="ui-button-label">{loading ? loadingLabel : children}</span>
      {!loading && trailingIcon}
    </button>
  );
});

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, ButtonStyleProps {
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a {...props} className={cn(buttonClasses({ variant, size, fullWidth }), className)}>
      {leadingIcon}
      <span className="ui-button-label">{children}</span>
      {trailingIcon}
    </a>
  );
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  tone?: "default" | "danger";
  size?: "sm" | "md";
}

export function IconButton({ label, tone = "default", size = "md", className, children, type = "button", ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={cn("ui-icon-button", `ui-icon-button-${tone}`, `ui-icon-button-${size}`, className)}
      aria-label={label}
      title={props.title ?? label}
    >
      {children}
    </button>
  );
}
