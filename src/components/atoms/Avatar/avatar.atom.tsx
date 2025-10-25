"use client";

import { IAvatar } from "@/interfaces";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { JSX } from "react";

/**
 * Avatar Atom
 * Componente de avatar base do sistema
 * Segue padrão Atomic Design
 */
export const Avatar = ({
  src,
  alt = "Avatar",
  fallback,
  size = "md",
  className,
}: IAvatar): JSX.Element => {
  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
    xl: "h-16 w-16 text-lg",
  };

  const getFallbackText = () => {
    if (fallback) return fallback;
    if (alt) return alt.charAt(0).toUpperCase();
    return "U";
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full bg-linear-to-r from-emerald-500 to-teal-500 overflow-hidden",
        sizeClasses[size],
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      ) : (
        <span className="font-semibold text-white">{getFallbackText()}</span>
      )}
    </div>
  );
};
