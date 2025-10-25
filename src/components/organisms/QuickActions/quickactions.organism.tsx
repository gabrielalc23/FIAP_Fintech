"use client";

import { IQuickActions } from "@/interfaces";
import { ActionButton } from "@/components/molecules/ActionButton/actionbutton.molecule";
import { Card } from "@/components/molecules/Card/card.molecule";
import { ArrowUpRight, CreditCard, Wallet, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { JSX } from "react";
import { Text } from "@/components/atoms/Text/text.atom";

/**
 * QuickActions Organism
 * Ações rápidas do dashboard
 * Segue padrão Atomic Design
 */
export const QuickActions = ({
  onTransfer,
  onPayment,
  onDeposit,
  onInvest,
  className,
}: IQuickActions): JSX.Element => {
  const actions = [
    {
      icon: <ArrowUpRight className="h-6 w-6" />,
      label: "Transferir",
      description: "Enviar dinheiro",
      onClick: onTransfer,
      color: "from-emerald-600 to-teal-600",
      variant: "default" as const,
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      label: "Pagar",
      description: "Boletos e contas",
      onClick: onPayment,
      color: "from-teal-600 to-cyan-600",
      variant: "default" as const,
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      label: "Depositar",
      description: "Adicionar saldo",
      onClick: onDeposit,
      color: "from-cyan-600 to-green-600",
      variant: "default" as const,
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      label: "Investir",
      description: "Fazer render",
      onClick: onInvest,
      color: "from-emerald-600 to-green-600",
      variant: "primary" as const,
    },
  ];

  return (
    <div className={`relative group ${className}`}>
      {/* Glow Background */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

      {/* Main Container */}
      <div className="relative bg-gradient-to-br from-emerald-950/60 via-slate-950/80 to-emerald-950/40 backdrop-blur-xl border-2 border-emerald-500/30 hover:border-emerald-500/50 rounded-2xl p-8 shadow-2xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 overflow-hidden">
        
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-tr from-teal-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-1"
          >
            <Text 
              as="h3" 
              size="xl" 
              weight="semibold"
              className="text-emerald-100"
            >
              Ações Rápidas
            </Text>
            <Text 
              size="sm" 
              className="text-emerald-200/60"
            >
              Acesse suas operações favoritas em um clique
            </Text>
          </motion.div>

          {/* Actions Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.3, ease: "easeOut" }
                  },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.button
                  onClick={action.onClick}
                  className="w-full group/btn relative"
                >
                  {/* Glow on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl blur opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

                  {/* Card */}
                  <div className="relative flex flex-col items-center gap-3 p-5 rounded-xl bg-gradient-to-br from-emerald-950/60 to-slate-950/40 border-2 border-emerald-500/20 hover:border-emerald-500/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                    
                    {/* Icon Container */}
                    <div className={`relative p-3 rounded-lg bg-gradient-to-br ${action.color} shadow-lg shadow-emerald-500/20 group-hover/btn:scale-110 transition-transform duration-300`}>
                      <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      <div className="relative text-white">
                        {action.icon}
                      </div>
                    </div>

                    {/* Text */}
                    <div className="space-y-1 text-center">
                      <Text 
                        size="sm" 
                        weight="semibold"
                        className="text-emerald-100"
                      >
                        {action.label}
                      </Text>
                      <Text 
                        size="xs"
                        className="text-emerald-200/60"
                      >
                        {action.description}
                      </Text>
                    </div>

                    {/* Arrow Indicator */}
                    <motion.div
                      animate={{ y: [0, 2, 0] }}
                      transition={{ repeat: Infinity, duration: 2, delay: index * 0.1 }}
                      className="absolute top-2 right-2 opacity-0 group-hover/btn:opacity-100 transition-opacity"
                    >
                      <ArrowUpRight className="h-4 w-4 text-emerald-400" />
                    </motion.div>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-4 border-t border-emerald-500/20 space-y-2"
          >
            <Text size="xs" className="text-emerald-200/60 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
              Todas as operações são seguras e criptografadas
            </Text>
            <Text size="xs" className="text-emerald-200/60 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
              Sem taxas para operações internas
            </Text>
          </motion.div>
        </div>
      </div>
    </div>
  );
};