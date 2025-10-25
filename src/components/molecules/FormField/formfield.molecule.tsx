"use client";

import { IFormField } from "@/interfaces";
import { cn } from "@/lib/utils";
import { JSX } from "react";

/**
 * FormField Molecule
 * Wrapper para campos de formulário
 * Segue padrão Atomic Design
 */
export const FormField = ({
  label,
  error,
  required,
  helperText,
  children,
  className,
}: IFormField): JSX.Element => {
  return (
    <div className={cn("w-full", className)}>
      <label className="block text-sm font-medium text-gray-200 mb-2">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>

      {children}

      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}

      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-400">{helperText}</p>
      )}
    </div>
  );
};
