"use client";

import { IIcon } from "@/interfaces";
import { cn } from "@/lib/utils";
import { JSX, cloneElement, isValidElement } from "react";

/**
 * Icon Atom
 * Wrapper para ícones do lucide-react
 * Segue padrão Atomic Design
 */
export const Icon = ({
  size = 24,
  className,
  color,
  children,
}: IIcon & { children: JSX.Element }): JSX.Element => {
  if (!isValidElement(children)) {
    return <></>;
  }

  return cloneElement(children, {
    size,
    className: cn(color && `text-${color}`, className),
    // @ts-ignore
    ...children.props,
  });
};
