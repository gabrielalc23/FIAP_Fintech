"use client";

import { ISpinner } from "@/interfaces";
import { cn } from "@/lib/utils";
import { JSX } from "react";

/**
 * Spinner Atom
 * Componente de loading base do sistema
 * Segue padrão Atomic Design
 */
export const Spinner = ({ size = "md", className }: ISpinner): JSX.Element => {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-emerald-500 border-t-transparent",
        sizeClasses[size],
        className
      )}
    />
  );
};
