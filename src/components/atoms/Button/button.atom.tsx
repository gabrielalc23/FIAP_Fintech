"use client";

import { Button as BaseButton } from "@/components/ui/button";
import { IButton } from "@/interfaces";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { JSX } from "react";

/**
 * Button Atom
 * Componente de botão base do sistema
 * Segue padrão Atomic Design
 */
export const Button = ({
  variant = "default",
  size = "default",
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  children,
  disabled,
  ...props
}: IButton): JSX.Element => {
  return (
    <motion.div
      whileHover={{ scale: disabled ?? isLoading ? 1 : 1.02 }}
      whileTap={{ scale: disabled ?? isLoading ? 1 : 0.98 }}
    >
      <BaseButton
        variant={variant}
        size={size}
        disabled={disabled || isLoading}
        className={cn(
          "transition-all duration-200",
          isLoading && "opacity-70 cursor-wait",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Carregando...
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </BaseButton>
    </motion.div>
  );
};
