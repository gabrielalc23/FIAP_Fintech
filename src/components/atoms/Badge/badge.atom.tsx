"use client";

import { IBadge } from "@/interfaces";
import { cn } from "@/lib/utils";
import { JSX } from "react";

/**
 * Badge Atom
 * Componente de badge base do sistema
 * Segue padrão Atomic Design
 */
export const Badge = ({
  variant = "default",
  size = "md",
  className,
  children,
}: IBadge): JSX.Element => {
  const variantClasses = {
    default: "bg-gray-100 text-gray-900",
    success: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    error: "bg-red-500/20 text-red-400 border border-red-500/30",
    warning: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    info: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
};
