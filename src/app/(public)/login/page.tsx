"use client";

import { useState, JSX } from "react";
import { AuthTemplate, Input, Button } from "@/components";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Text } from "@/components";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

/**
 * Login Page
 * Página de autenticação usando Atomic Design
 */
export default function Login(): JSX.Element {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simular login
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.div
        className="text-center space-y-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center mb-2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <span className="text-xl">🔐</span>
          </div>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-green-300">
          Bem-vindo de volta
        </h2>
        <p className="text-emerald-100/60 text-sm lg:text-base max-w-xs mx-auto">
          Acesse sua conta e continue gerenciando suas finanças
        </p>
      </motion.div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* E-mail */}
        <motion.div
          custom={0}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="space-y-2"
        >
          <label className="block text-sm font-medium text-emerald-100 flex items-center gap-2">
            <Mail size={16} className="text-emerald-400" />
            E-mail
          </label>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <Input
              type="email"
              placeholder="seu@email.com"
              className="relative mt-1 bg-emerald-950/40 border border-emerald-500/20 text-white placeholder:text-emerald-100/30 focus:border-emerald-400/60 focus:bg-emerald-950/60 focus:outline-none transition-all duration-200 rounded-lg"
              required
            />
          </div>
        </motion.div>

        {/* Senha */}
        <motion.div
          custom={1}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="space-y-2"
        >
          <label className="block text-sm font-medium text-emerald-100 flex items-center gap-2">
            <Lock size={16} className="text-emerald-400" />
            Senha
          </label>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="relative mt-1 bg-emerald-950/40 border border-emerald-500/20 text-white placeholder:text-emerald-100/30 focus:border-emerald-400/60 focus:bg-emerald-950/60 focus:outline-none transition-all duration-200 rounded-lg pr-12"
                required
              />
              <motion.button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-400 hover:text-emerald-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Remember & Forgot Password */}
        <motion.div
          custom={2}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between pt-2"
        >
          <motion.label
            className="flex items-center gap-2 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
          >
            <input
              type="checkbox"
              className="w-4 h-4 rounded bg-emerald-950/40 border border-emerald-500/30 accent-emerald-500 cursor-pointer transition-colors hover:border-emerald-500/50"
            />
            <span className="text-xs text-emerald-100/60 group-hover:text-emerald-100 transition-colors font-medium">
              Lembrar-me
            </span>
          </motion.label>

          <Link
            href="/forgot-password"
            className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            Esqueceu a senha?
          </Link>
        </motion.div>

        {/* Button Submit */}
        <motion.div
          custom={3}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="pt-6"
        >
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full text-white font-semibold py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
            isLoading={isLoading}
            onClick={() => router.push("/")}
          >
            <span>Entrar</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </Button>
        </motion.div>
      </form>

      {/* Divider */}
      <motion.div
        custom={4}
        variants={inputVariants}
        initial="hidden"
        animate="visible"
        className="relative py-2"
      >
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-emerald-500/20" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-950 text-emerald-200/60 font-medium">
            Ou continue com
          </span>
        </div>
      </motion.div>

      {/* Social Buttons */}
      <motion.div
        custom={5}
        variants={inputVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 gap-3"
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-100 hover:bg-emerald-950/60 hover:border-emerald-500/50 transition-all duration-200 font-medium text-sm">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            GitHub
          </button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-100 hover:bg-emerald-950/60 hover:border-emerald-500/50 transition-all duration-200 font-medium text-sm">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google
          </button>
        </motion.div>
      </motion.div>

      {/* Footer - Register Link */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center text-sm text-emerald-100/50"
      >
        Não tem uma conta?{" "}
        <motion.a
          href="/register"
          className="text-emerald-300 hover:text-emerald-200 font-semibold transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Criar conta aqui
        </motion.a>
      </motion.p>
    </motion.div>
  );
}
