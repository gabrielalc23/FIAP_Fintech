"use client";

import { IDashboardTemplate } from "@/interfaces";
import { Navbar } from "@/components/organisms/Navbar/navbar.organism";
import { motion } from "framer-motion";
import { JSX } from "react";

/**
 * DashboardTemplate
 * Template para páginas do dashboard
 * Segue padrão Atomic Design
 */
export const DashboardTemplate = ({
  children,
  className,
}: IDashboardTemplate): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-bl from-teal-500/3 to-emerald-500/3 rounded-full blur-3xl opacity-50" />
      </div>


      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 ${className}`}
      >
        {/* Content Wrapper com gradient border opcional */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </motion.main>

      {/* Floating Elements (opcional) */}
      <div className="fixed bottom-20 right-10 pointer-events-none opacity-30 z-0">
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl"
        />
      </div>

      <div className="fixed top-40 left-10 pointer-events-none opacity-20 z-0">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="w-40 h-40 bg-gradient-to-tr from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>
    </div>
  );
};