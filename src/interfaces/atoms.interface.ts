/**
 * Interfaces para Atoms
 */

import { InputHTMLAttributes, ReactNode } from "react";



export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
}

export interface IText {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant?: "primary" | "secondary" | "tertiary" | "gradient";
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  className?: string;
  children: ReactNode;
}

export interface IBadge {
  variant?: "default" | "success" | "error" | "warning" | "info";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
}

export interface IAvatar {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export interface ISpinner {
  size?: "sm" | "md" | "lg";
  className?: string;
}
