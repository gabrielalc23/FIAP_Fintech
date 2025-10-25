"use client";

import { ITransactionItem } from "@/interfaces";
import { Text } from "@/components/atoms/Text/text.atom";
import { Badge } from "@/components/atoms/Badge/badge.atom";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { motion } from "framer-motion";
import { JSX } from "react";

/**
 * TransactionItem Molecule
 * Componente de item de transação
 * Segue padrão Atomic Design
 */
export const TransactionItem = ({
  transaction,
  onClick,
  className,
}: ITransactionItem): JSX.Element => {
  const isIncome = transaction.type === "entrada";

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={() => onClick?.(transaction)}
      className={cn(
        "flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10",
        "hover:bg-white/8 hover:border-emerald-500/30 transition-all duration-200",
        onClick && "cursor-pointer",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full",
            isIncome
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-red-500/10 text-red-400"
          )}
        >
          {isIncome ? (
            <ArrowDownLeft className="h-5 w-5" />
          ) : (
            <ArrowUpRight className="h-5 w-5" />
          )}
        </div>

        <div>
          <Text size="base" weight="medium" variant="primary">
            {transaction.title}
          </Text>
          <Text size="sm" variant="secondary">
            {transaction.description} • {transaction.date}
          </Text>
        </div>
      </div>

      <div className="text-right">
        <Text
          size="lg"
          weight="semibold"
          className={cn(
            isIncome ? "text-emerald-400" : "text-red-400"
          )}
        >
          {isIncome ? "+" : "-"} R$ {transaction.amount.toFixed(2)}
        </Text>
        {transaction.category && (
          <Badge variant={isIncome ? "success" : "error"} size="sm" className="mt-1">
            {transaction.category}
          </Badge>
        )}
      </div>
    </motion.div>
  );
};
