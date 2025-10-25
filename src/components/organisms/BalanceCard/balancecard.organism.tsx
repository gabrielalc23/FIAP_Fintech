"use client";

import { IBalanceCard } from "@/interfaces";
import { Card } from "@/components/molecules/Card/card.molecule";
import { Text } from "@/components/atoms/Text/text.atom";
import { Button } from "@/components/atoms/Button/button.atom";
import { Eye, EyeOff, TrendingUp, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import { JSX, useState } from "react";

/**
 * BalanceCard Organism
 * Card de exibição de saldo
 * Segue padrão Atomic Design
 */
export const BalanceCard = ({
  balance,
  currency = "R$",
  hideBalance = false,
  onToggleVisibility,
  className,
}: IBalanceCard): JSX.Element => {
  const [isHidden, setIsHidden] = useState(hideBalance);

  const handleToggle = () => {
    setIsHidden(!isHidden);
    onToggleVisibility?.();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      <div className="relative group">
        {/* Glow Background */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-emerald-950/80 via-teal-950/40 to-slate-950/80 backdrop-blur-xl border-2 border-emerald-500/30 hover:border-emerald-500/60 rounded-2xl p-8 shadow-2xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 overflow-hidden">
          
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-tr from-teal-500/5 to-cyan-500/5 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30">
                    <Wallet className="h-4 w-4 text-emerald-400" />
                  </div>
                  <Text 
                    variant="secondary" 
                    size="sm" 
                    className="text-emerald-200/70"
                  >
                    Saldo Disponível
                  </Text>
                </div>
              </div>

              {/* Eye Toggle Button */}
              <motion.button
                onClick={handleToggle}
                className="p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isHidden ? (
                  <EyeOff className="h-5 w-5 text-emerald-400" />
                ) : (
                  <Eye className="h-5 w-5 text-emerald-400" />
                )}
              </motion.button>
            </div>

            {/* Balance Amount */}
            <motion.div
              key={isHidden ? "hidden" : "visible"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <div className="text-4xl sm:text-5xl font-bold tracking-tight">
                <span className="text-emerald-300">{currency}</span>
                <span className="ml-2 text-transparent bg-gradient-to-r from-emerald-200 via-teal-200 to-green-200 bg-clip-text">
                  {isHidden ? "••••••" : balance.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-emerald-500/20 via-emerald-500/50 to-emerald-500/20" />

            {/* Footer Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all"
              >
                <Text size="xs" className="text-emerald-200/60 uppercase tracking-wider font-semibold">
                  Entrada
                </Text>
                <Text size="lg" weight="semibold" className="text-emerald-300">
                  +R$ 1.250,00
                </Text>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all"
              >
                <Text size="xs" className="text-emerald-200/60 uppercase tracking-wider font-semibold">
                  Saída
                </Text>
                <Text size="lg" weight="semibold" className="text-emerald-300">
                  -R$ 350,00
                </Text>
              </motion.div>
            </div>

            {/* Trend Indicator */}
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20"
            >
              <TrendingUp className="h-4 w-4 text-emerald-400" />
              <Text size="sm" className="text-emerald-200/70">
                <span className="font-semibold text-emerald-300">+2.5%</span> em relação ao mês anterior
              </Text>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};