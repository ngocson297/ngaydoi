import { cloneElement, type ReactElement, type ReactNode } from "react";
import { cn } from "./cn";

interface FieldControlProps {
  id?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
  "aria-errormessage"?: string;
  "aria-required"?: boolean;
  className?: string;
}

export interface FormFieldProps {
  id: string;
  label: string;
  children: ReactElement<FieldControlProps>;
  required?: boolean;
  optionalLabel?: string;
  helperText?: ReactNode;
  error?: string;
  successText?: string;
  disabledReason?: string;
  className?: string;
}

export function FormField({
  id,
  label,
  children,
  required = false,
  optionalLabel = "Không bắt buộc",
  helperText,
  error,
  successText,
  disabledReason,
  className,
}: FormFieldProps) {
  const helpId = helperText ? `${id}-help` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const successId = successText ? `${id}-success` : undefined;
  const disabledId = disabledReason ? `${id}-disabled` : undefined;
  const describedBy = [children.props["aria-describedby"], helpId, errorId, successId, disabledId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("ui-field", error && "ui-field-error", successText && !error && "ui-field-success", className)}>
      <label className="ui-field-label" htmlFor={id}>
        <span>{label}</span>
        {required ? <><span className="ui-field-required" aria-hidden="true">*</span><span className="sr-only">Bắt buộc</span></> : <span className="ui-field-optional">{optionalLabel}</span>}
      </label>
      {cloneElement(children, {
        id,
        className: cn("ui-control", children.props.className),
        "aria-describedby": describedBy,
        "aria-invalid": Boolean(error) || undefined,
        "aria-errormessage": errorId,
        "aria-required": required || undefined,
      })}
      {helperText ? <p className="ui-field-help" id={helpId}>{helperText}</p> : null}
      {disabledReason ? <p className="ui-field-disabled-reason" id={disabledId}><span aria-hidden="true">🔒</span> {disabledReason}</p> : null}
      {error ? <p className="ui-field-message ui-field-message-error" id={errorId} role="alert"><span aria-hidden="true">⚠</span> {error}</p> : null}
      {successText && !error ? <p className="ui-field-message ui-field-message-success" id={successId}><span aria-hidden="true">✓</span> {successText}</p> : null}
    </div>
  );
}

export function FormRequiredNote() {
  return <p className="ui-required-note"><span aria-hidden="true">*</span> Trường bắt buộc</p>;
}
