'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";
interface IPublicLayout {
  children: ReactNode;
}

export default function PublicLayout({ children }: IPublicLayout) {
  return (
    <div
      className={cn(
        "min-h-screen w-full flex bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
      )}
    >
      {/* Coluna esquerda - Branding / animação */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 p-12 relative overflow-hidden">
        {/* Grid background animado */}
        <motion.div
          className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5 }}
        />

        {/* Elementos decorativos de luz */}
        <motion.div
          className="absolute top-20 right-1/3 w-72 h-72 rounded-full bg-linear-to-r from-emerald-500/15 to-teal-400/10 blur-3xl"
          animate={{
            x: [0, 20, -20, 0],
            y: [0, 15, -15, 0],
          }}
          transition={{ repeat: Infinity, duration: 8 }}
        />

        <motion.div
          className="absolute -bottom-32 left-1/4 w-80 h-80 rounded-full bg-linear-to-r from-green-500/10 to-emerald-400/5 blur-3xl"
          animate={{
            x: [0, -25, 25, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{ repeat: Infinity, duration: 12 }}
        />

        {/* Conteúdo */}
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-emerald-300 via-teal-300 to-green-300">
              Fintrix Bank
            </h1>
            <p className="text-emerald-100/70 text-lg max-w-md leading-relaxed">
              Controle seu dinheiro com segurança, estilo e tecnologia de ponta.
            </p>
          </motion.div>
        </div>

        {/* Recurso em destaque */}
        <motion.div
          className="z-10 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-4">
            {[
              { icon: "🔒", title: "Segurança", desc: "Protegido com encriptação de ponta a ponta" },
              { icon: "⚡", title: "Rápido", desc: "Transações instantâneas e sem complicações" },
              { icon: "🌍", title: "Global", desc: "Envie dinheiro para qualquer lugar do mundo" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3 text-sm"
              >
                <span className="text-2xl mt-1">{item.icon}</span>
                <div>
                  <p className="font-semibold text-emerald-200">{item.title}</p>
                  <p className="text-emerald-100/50 text-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-4 border-t border-emerald-500/20">
            <p className="text-xs text-emerald-100/40">
              © {new Date().getFullYear()} Fintrix. Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-1 items-center justify-center lg:from-slate-950 lg:to-transparent p-6 relative">
        {/* Background glow para mobile */}
        <motion.div
          className="absolute inset-0 opacity-0 lg:opacity-100"
          animate={{
            background: [
              "radial-gradient(circle at 0% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 50%, rgba(45, 212, 191, 0.05) 0%, transparent 50%)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 8 }}
        />

        <motion.div
          initial={{ y: 30, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn(
            "w-full max-w-md relative z-10",
            "bg-linear-to-br from-white/10 to-white/5",
            "dark:from-white/8 dark:to-white/3",
            "backdrop-blur-2xl",
            "border border-emerald-500/20 dark:border-emerald-400/15",
            "rounded-3xl p-8 lg:p-10",
            "shadow-2xl shadow-emerald-500/10",
            "ring-1 ring-white/10"
          )}
        >
          {/* Decoration top */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-linear-to-r from-transparent via-emerald-400 to-transparent rounded-full blur-md opacity-50" />
          
          {children}
        </motion.div>
      </div>
    </div>
  );
}