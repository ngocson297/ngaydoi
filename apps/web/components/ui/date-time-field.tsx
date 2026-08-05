"use client";

import type { InputHTMLAttributes, ReactNode } from "react";
import { FormField } from "./form-field";

interface DateTimeFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  id: string;
  label: string;
  type?: "date" | "datetime-local" | "time";
  helperText?: ReactNode;
  error?: string;
  required?: boolean;
  disabledReason?: string;
}

export function DateTimeField({ id, label, type = "datetime-local", helperText, error, required, disabledReason, ...inputProps }: DateTimeFieldProps) {
  return (
    <FormField id={id} label={label} helperText={helperText} error={error} required={required} disabledReason={disabledReason}>
      <input type={type} {...inputProps} />
    </FormField>
  );
}
