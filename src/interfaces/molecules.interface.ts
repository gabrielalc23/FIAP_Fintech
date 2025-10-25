/**
 * Interfaces para Molecules
 */

import { ReactNode } from "react";
import { ITransaction, IStatistic } from "./common.interface";

export interface ICard {
  title?: string;
  description?: string;
  footer?: ReactNode;
  headerAction?: ReactNode;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  variant?: "default" | "gradient" | "glass";
}

export interface IFormField {
  label: string;
  error?: string;
  required?: boolean;
  helperText?: string;
  children: ReactNode;
  className?: string;
}

export interface IStatCard extends IStatistic {
  className?: string;
  variant?: "default" | "gradient";
}

export interface ITransactionItem {
  transaction: ITransaction;
  onClick?: (transaction: ITransaction) => void;
  className?: string;
}

export interface IActionButton {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}
