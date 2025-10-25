"use client";

import { IStatCard } from "@/interfaces";
import { Text } from "@/components/atoms/Text/text.atom";
import { cn } from "@/lib/utils";
import { ArrowUp, ArrowDown } from "lucide-react";
import { JSX } from "react";
import { motion } from "framer-motion";

/**
 * StatCard Molecule
 * Componente de card de estatística
 * Segue padrão Atomic Design
 */
export const StatCard = ({
  label,
  value,
  change,
  changeType,
  icon,
  className,
  variant = "default",
}: IStatCard): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <div className="relative group h-full">
        {/* Glow Background */}
        <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Main Card */}
        <div className="relative h-full flex flex-col bg-gradient-to-br from-emerald-950/60 via-slate-950/80 to-emerald-950/40 backdrop-blur-xl border-2 border-emerald-500/30 hover:border-emerald-500/60 rounded-2xl p-6 shadow-2xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 overflow-hidden">
          
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-gradient-to-tr from-teal-500/5 to-cyan-500/5 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full justify-between gap-4">
            {/* Top Section - Icon & Label */}
            <div className="flex items-start justify-between gap-3">
              {/* Icon */}
              {icon && (
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30"
                >
                  {icon}
                </motion.div>
              )}

              {/* Label */}
              <div className="flex-1 min-w-0">
                <Text 
                  size="sm" 
                  className="text-emerald-200/70 uppercase tracking-wider font-semibold"
                >
                  {label}
                </Text>
              </div>
            </div>

            {/* Bottom Section - Value & Change */}
            <div className="space-y-3">
              {/* Value */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Text 
                  size="2xl" 
                  weight="bold"
                  className="text-transparent bg-gradient-to-r from-emerald-200 via-teal-200 to-green-200 bg-clip-text leading-tight"
                >
                  {value}
                </Text>
              </motion.div>

              {/* Change Indicator */}
              {change !== undefined && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold text-sm",
                    changeType === "increase"
                      ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300"
                      : "bg-red-500/20 border border-red-500/40 text-red-300"
                  )}
                >
                  {changeType === "increase" ? (
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <ArrowUp className="h-4 w-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      animate={{ y: [0, 2, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <ArrowDown className="h-4 w-4" />
                    </motion.div>
                  )}
                  <span>{Math.abs(change)}%</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};