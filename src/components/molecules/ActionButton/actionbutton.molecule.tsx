"use client";

import { IActionButton } from "@/interfaces";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { JSX } from "react";

/**
 * ActionButton Molecule
 * Componente de botão de ação rápida
 * Segue padrão Atomic Design
 */
export const ActionButton = ({
  icon,
  label,
  onClick,
  variant = "default",
  className,
}: IActionButton): JSX.Element => {
  const variantClasses = {
    default: "bg-white/5 hover:bg-white/10 text-gray-200",
    primary: "bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/30",
    secondary: "bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-white/10",
        "transition-all duration-200 cursor-pointer",
        variantClasses[variant],
        className
      )}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10">
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </motion.button>
  );
};
