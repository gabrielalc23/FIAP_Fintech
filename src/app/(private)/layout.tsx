"use client";
import { Navbar } from "@/components/organisms";
import { ReactNode } from "react";

interface IPrivateLayout {
  children: ReactNode;
}

export default function PrivateLayout({ children }: IPrivateLayout) {
  return (
    <div className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      {children}
    </div>
  );
}
