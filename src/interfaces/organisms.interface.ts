/**
 * Interfaces para Organisms
 */

import { ReactNode } from "react";
import { ITransaction, IChartData } from "./common.interface";

export interface INavbar {
  className?: string;
  user?: {
    name: string;
    avatar?: string;
  };
}

export interface ITransactionList {
  transactions: ITransaction[];
  title?: string;
  emptyMessage?: string;
  onTransactionClick?: (transaction: ITransaction) => void;
  className?: string;
}

export interface IQuickActions {
  onTransfer?: () => void;
  onPayment?: () => void;
  onDeposit?: () => void;
  onInvest?: () => void;
  className?: string;
}

export interface IBalanceCard {
  balance: number;
  currency?: string;
  hideBalance?: boolean;
  onToggleVisibility?: () => void;
  className?: string;
}

export interface IChartSection {
  title?: string;
  data: IChartData[];
  type?: "line" | "bar" | "pie" | "area";
  className?: string;
}

export interface ISheet {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
}
