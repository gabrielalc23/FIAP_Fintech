"use client";

import { IText } from "@/interfaces";
import { cn } from "@/lib/utils";
import { createElement, JSX } from "react";

/**
 * Text Atom
 * Componente de texto base do sistema
 * Segue padrão Atomic Design e usa tokens do theme
 */
export const Text = ({
  as = "p",
  variant = "primary",
  size = "base",
  weight = "normal",
  className,
  children,
}: IText): JSX.Element => {
  const variantClasses = {
    primary: "text-gray-200",
    secondary: "text-gray-400",
    tertiary: "text-gray-500",
    gradient: "bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent",
  };

  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
  };

  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  return createElement(
    as,
    {
      className: cn(
        variantClasses[variant],
        sizeClasses[size],
        weightClasses[weight],
        className
      ),
    },
    children
  );
};
