"use client";

import { ITransactionList } from "@/interfaces";
import { TransactionItem } from "@/components/molecules/TransactionItem/transactionitem.molecule";
import { Text } from "@/components/atoms/Text/text.atom";
import { motion } from "framer-motion";
import { JSX } from "react";
import { ShoppingCart } from "lucide-react";

/**
 * TransactionList Organism
 * Lista de transações
 * Segue padrão Atomic Design
 */
export const TransactionList = ({
  transactions,
  title = "Transações Recentes",
  emptyMessage = "Nenhuma transação encontrada",
  onTransactionClick,
  className,
}: ITransactionList): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <div className="relative group">
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
                {title}
              </Text>
              <Text 
                size="sm" 
                className="text-emerald-200/60"
              >
                Histórico de suas operações
              </Text>
            </motion.div>

            {/* Transactions */}
            {transactions.length === 0 ? (
              <motion.div 
                className="py-12 text-center space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex justify-center">
                  <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
                    <ShoppingCart className="h-6 w-6 text-emerald-400" />
                  </div>
                </div>
                <Text className="text-emerald-200/60">{emptyMessage}</Text>
              </motion.div>
            ) : (
              <motion.div
                className="space-y-3"
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
                {transactions.map((transaction) => (
                  <motion.div
                    key={transaction.id}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { duration: 0.3 }
                      },
                    }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="cursor-pointer"
                  >
                    <div className="p-4 rounded-lg bg-emerald-950/40 border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-950/60 transition-all duration-200">
                      <TransactionItem
                        transaction={transaction}
                        onClick={onTransactionClick}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Footer Stats */}
            {transactions.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-4 border-t border-emerald-500/20 grid grid-cols-2 gap-4"
              >
                <div className="space-y-1">
                  <Text size="xs" className="text-emerald-200/60 uppercase tracking-wider font-semibold">
                    Total de Transações
                  </Text>
                  <Text size="lg" weight="semibold" className="text-emerald-300">
                    {transactions.length}
                  </Text>
                </div>
                <div className="space-y-1">
                  <Text size="xs" className="text-emerald-200/60 uppercase tracking-wider font-semibold">
                    Período
                  </Text>
                  <Text size="lg" weight="semibold" className="text-emerald-300">
                    Últimos 30 dias
                  </Text>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};