"use client";

import { ICard } from "@/interfaces";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { JSX } from "react";

/**
 * Card Molecule
 * Componente de card do sistema
 * Segue padrão Atomic Design
 */
export const Card = ({
  title,
  description,
  footer,
  headerAction,
  className,
  children,
  onClick,
  variant = "default",
}: ICard): JSX.Element => {
  const variantClasses = {
    default: "bg-white/5 border-white/10",
    gradient: "bg-linear-to-br from-white/5 to-white/10 border-white/20",
    glass: "bg-white/5 backdrop-blur-md border-white/10",
  };

  const CardWrapper = onClick ? motion.div : "div";

  return (
    <CardWrapper
      onClick={onClick}
      className={cn(
        "rounded-xl border p-6 transition-all duration-200",
        variantClasses[variant],
        onClick && "cursor-pointer hover:bg-white/8 hover:border-emerald-500/30",
        className
      )}
      {...(onClick && {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
      })}
    >
      {(title || headerAction) && (
        <div className="mb-4 flex items-center justify-between">
          {title && (
            <div>
              <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
              {description && (
                <p className="text-sm text-gray-400 mt-1">{description}</p>
              )}
            </div>
          )}
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}

      <div>{children}</div>

      {footer && (
        <div className="mt-4 pt-4 border-t border-white/10">{footer}</div>
      )}
    </CardWrapper>
  );
};
