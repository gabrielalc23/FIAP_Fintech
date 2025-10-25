/**
 * Interfaces Comuns
 */

import { ReactNode } from "react";

export interface IBaseComponent {
  className?: string;
  children?: ReactNode;
}

export interface IIcon {
  size?: number;
  className?: string;
  color?: string;
}

export interface ITransaction {
  id: string;
  type: "entrada" | "saida";
  title: string;
  description: string;
  amount: number;
  date: string;
  category?: string;
  icon?: string;
}

export interface IStatistic {
  label: string;
  value: string | number;
  change?: number;
  changeType?: "increase" | "decrease";
  icon?: ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  balance?: number;
}

export interface IChartData {
  name: string;
  value: number;
  color?: string;
}
