"use client";

import React from "react";
import {
  DashboardTemplate,
  BalanceCard,
  QuickActions,
  ChartSection,
  TransactionList,
  StatCard,
  TransferDrawer,
  PaymentDrawer,
  DepositDrawer,
  InvestDrawer,
} from "@/components";
import { useBalance, useDrawer } from "@/hooks";
import { ShoppingCart, TrendingUp, Wallet } from "lucide-react";
import { motion } from "framer-motion";

// Mock data
const chartData = [
  { name: "Seg", value: 400 },
  { name: "Ter", value: 300 },
  { name: "Qua", value: 450 },
  { name: "Qui", value: 380 },
  { name: "Sex", value: 520 },
  { name: "Sab", value: 490 },
  { name: "Dom", value: 600 },
];

const mockTransactions = [
  {
    id: "1",
    type: "saida" as const,
    title: "Netflix",
    description: "Assinatura mensal",
    amount: 49.90,
    date: "Hoje, 14:30",
    category: "Entretenimento",
  },
  {
    id: "2",
    type: "entrada" as const,
    title: "Salário",
    description: "Pagamento mensal",
    amount: 5000.00,
    date: "Ontem, 09:00",
    category: "Renda",
  },
  {
    id: "3",
    type: "saida" as const,
    title: "Spotify",
    description: "Assinatura mensal",
    amount: 21.90,
    date: "15/10, 10:15",
    category: "Entretenimento",
  },
];

/**
 * Dashboard Page
 * Página principal do dashboard usando Atomic Design
 */
export default function Home(): React.JSX.Element {
  const { balance, isVisible, toggleVisibility } = useBalance(4228.76);

  const transferSheet = useDrawer();
  const paymentSheet = useDrawer();
  const depositSheet = useDrawer();
  const investSheet = useDrawer();

  const stats = [
    {
      label: "Gastou Este Mês",
      value: "R$ 1.245,50",
      icon: <ShoppingCart size={24} />,
      change: 12.5,
      changeType: "increase" as const,
    },
    {
      label: "Economizou",
      value: "R$ 2.983,26",
      icon: <TrendingUp size={24} />,
      change: 8.2,
      changeType: "increase" as const,
    },
    {
      label: "Limite Disponível",
      value: "R$ 4.754,50",
      icon: <Wallet size={24} />,
    },
  ];

  return (
    <DashboardTemplate>
      <div className="space-y-6 max-w-6xl mx-auto">
        {/* Balance Card */}
        <BalanceCard
          balance={balance}
          hideBalance={!isVisible}
          onToggleVisibility={toggleVisibility}
        />

        {/* Quick Actions */}
        <QuickActions
          onTransfer={transferSheet.open}
          onPayment={paymentSheet.open}
          onDeposit={depositSheet.open}
          onInvest={investSheet.open}
        />

        {/* Chart */}
        <ChartSection
          title="Gastos Esta Semana"
          data={chartData}
          type="area"
        />

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </motion.div>

        {/* Recent Transactions */}
        <TransactionList transactions={mockTransactions} />
      </div>

      {/* Drawers */}
      <TransferDrawer
        open={transferSheet.isOpen}
        onOpenChange={transferSheet.setIsOpen}
      />
      <PaymentDrawer
        open={paymentSheet.isOpen}
        onOpenChange={paymentSheet.setIsOpen}
      />
      <DepositDrawer
        open={depositSheet.isOpen}
        onOpenChange={depositSheet.setIsOpen}
      />
      <InvestDrawer
        open={investSheet.isOpen}
        onOpenChange={investSheet.setIsOpen}
      />
    </DashboardTemplate>
  );
}
