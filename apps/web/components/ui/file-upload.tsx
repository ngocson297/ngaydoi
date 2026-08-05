"use client";

import { useRef, useState, type ChangeEvent, type DragEvent, type ReactNode } from "react";
import { cn } from "./cn";

export interface FileUploadFieldProps {
  id: string;
  label: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  helperText?: ReactNode;
  error?: string;
  selectedSummary?: string;
  onFilesSelected: (files: FileList | null) => void;
}

export function FileUploadField({ id, label, accept, multiple = false, disabled = false, helperText, error, selectedSummary, onFilesSelected }: FileUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  function choose(event: ChangeEvent<HTMLInputElement>): void {
    onFilesSelected(event.target.files);
    event.target.value = "";
  }

  function drop(event: DragEvent<HTMLDivElement>): void {
    event.preventDefault();
    setDragging(false);
    if (!disabled) onFilesSelected(event.dataTransfer.files);
  }

  return (
    <div className={cn("ui-file-field", error && "has-error", disabled && "is-disabled") }>
      <span className="ui-field-label"><span>{label}</span></span>
      <input ref={inputRef} className="ui-file-native" id={id} type="file" accept={accept} multiple={multiple} disabled={disabled} onChange={choose} aria-invalid={Boolean(error) || undefined} aria-describedby={`${id}-help${error ? ` ${id}-error` : ""}`} />
      <div
        className={cn("ui-file-dropzone", dragging && "is-dragging")}
        onDragEnter={(event) => { event.preventDefault(); if (!disabled) setDragging(true); }}
        onDragOver={(event) => event.preventDefault()}
        onDragLeave={(event) => { if (event.currentTarget === event.target) setDragging(false); }}
        onDrop={drop}
      >
        <div className="ui-file-icon" aria-hidden="true">↑</div>
        <div><strong>Kéo thả file vào đây</strong><span>hoặc chọn từ thiết bị của bạn</span></div>
        <button type="button" disabled={disabled} onClick={() => inputRef.current?.click()}>Chọn file</button>
      </div>
      <div className="ui-file-meta" id={`${id}-help`}>
        <span>{selectedSummary || helperText || "Chưa chọn file"}</span>
      </div>
      {error ? <p className="ui-field-message ui-field-message-error" id={`${id}-error`} role="alert">⚠ {error}</p> : null}
    </div>
  );
}
