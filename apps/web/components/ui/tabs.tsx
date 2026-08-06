"use client";

import { useRef, type KeyboardEvent } from "react";
import { cn } from "./cn";

export interface TabItem<T extends string> {
  value: T;
  label: string;
  disabled?: boolean;
}

export interface TabsProps<T extends string> {
  id: string;
  label: string;
  value: T;
  items: readonly TabItem<T>[];
  onChange: (value: T) => void;
  className?: string;
}

export function tabPanelProps<T extends string>(id: string, value: T) {
  return {
    id: `${id}-panel-${value}`,
    role: "tabpanel" as const,
    "aria-labelledby": `${id}-tab-${value}`,
    tabIndex: 0,
  };
}

export function Tabs<T extends string>({ id, label, value, items, onChange, className }: TabsProps<T>) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const enabled = items.map((item, index) => ({ item, index })).filter(({ item }) => !item.disabled);

  function move(currentIndex: number, direction: 1 | -1): void {
    if (!enabled.length) return;
    const currentEnabledIndex = enabled.findIndex(({ index }) => index === currentIndex);
    const next = enabled[(Math.max(0, currentEnabledIndex) + direction + enabled.length) % enabled.length];
    refs.current[next.index]?.focus();
    onChange(next.item.value);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number): void {
    if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      event.preventDefault(); move(index, 1);
    } else if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      event.preventDefault(); move(index, -1);
    } else if (event.key === "Home" && enabled.length) {
      event.preventDefault(); refs.current[enabled[0].index]?.focus(); onChange(enabled[0].item.value);
    } else if (event.key === "End" && enabled.length) {
      event.preventDefault(); const last = enabled[enabled.length - 1]; refs.current[last.index]?.focus(); onChange(last.item.value);
    }
  }

  return (
    <div className={cn("ui-tabs", className)} role="tablist" aria-label={label}>
      {items.map((item, index) => {
        const selected = item.value === value;
        return <button
          key={item.value}
          ref={(node) => { refs.current[index] = node; }}
          id={`${id}-tab-${item.value}`}
          type="button"
          role="tab"
          aria-selected={selected}
          aria-controls={`${id}-panel-${item.value}`}
          tabIndex={selected ? 0 : -1}
          disabled={item.disabled}
          className={selected ? "active" : undefined}
          onKeyDown={(event) => handleKeyDown(event, index)}
          onClick={() => onChange(item.value)}
        >{item.label}</button>;
      })}
    </div>
  );
}
