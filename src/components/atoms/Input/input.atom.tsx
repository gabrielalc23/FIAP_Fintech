"use client";

import { IInput } from "@/interfaces";
import { Input as BaseInput } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { JSX } from "react";

/**
 * Input Atom
 * Componente de input base do sistema
 * Segue padrão Atomic Design
 */
export const Input = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className,
  ...props
}: IInput): JSX.Element => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-200 mb-2">
          {label}
          {props.required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}

        <BaseInput
          className={cn(
            "bg-white/5 border border-white/10 text-white placeholder:text-gray-500",
            "focus:border-emerald-400/50 focus:bg-white/10 focus:ring-2 focus:ring-emerald-500/20",
            "transition-all duration-200 rounded-lg",
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            error && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20",
            className
          )}
          {...props}
        />

        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}

      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-400">{helperText}</p>
      )}
    </div>
  );
};
