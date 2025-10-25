"use client";

import { IAuthTemplate } from "@/interfaces";
import { Text } from "@/components/atoms/Text/text.atom";
import { motion } from "framer-motion";
import { JSX } from "react";

/**
 * AuthTemplate
 * Template para páginas de autenticação (Login, Register)
 * Segue padrão Atomic Design
 */
export const AuthTemplate = ({
  children,
  title,
  subtitle,
  footer,
  className,
}: IAuthTemplate): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
   

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full max-w-md relative z-10 ${className}`}
      >
        {/* Logo & Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div
            className="flex justify-center mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-2xl shadow-emerald-500/40 backdrop-blur-sm border border-emerald-400/30 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/20 to-transparent animate-pulse" />
              <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-white to-emerald-100">
                F
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Text 
              as="h1" 
              size="4xl" 
              weight="bold" 
              className="bg-gradient-to-r from-emerald-300 via-teal-300 to-green-300 bg-clip-text text-transparent"
            >
              Fintrix
            </Text>
          </motion.div>

          {title && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <Text 
                as="h2" 
                size="2xl" 
                weight="semibold" 
                className="mt-4 text-emerald-100"
              >
                {title}
              </Text>
            </motion.div>
          )}

          {subtitle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Text 
                className="mt-2 text-emerald-200/70 text-sm"
              >
                {subtitle}
              </Text>
            </motion.div>
          )}
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {/* Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Card */}
          <div className="relative bg-gradient-to-br from-emerald-950/60 to-slate-950/80 backdrop-blur-xl border-2 border-emerald-500/30 hover:border-emerald-500/50 rounded-2xl p-8 shadow-2xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300">
            {/* Top accent line */}
            <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full" />

            {children}
          </div>
        </motion.div>

        {/* Footer */}
        {footer && (
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            {footer}
          </motion.div>
        )}

        {/* Decorative Elements */}
        <motion.div
          className="mt-12 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500/30" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/30" />
        </motion.div>
      </motion.div>
    </div>
  );
};