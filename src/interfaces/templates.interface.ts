/**
 * Interfaces para Templates
 */

import { ReactNode } from "react";

export interface IDashboardTemplate {
  children: ReactNode;
  className?: string;
}

export interface IAuthTemplate {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  footer?: ReactNode;
  className?: string;
}
