'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JSX } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Lock, User } from "lucide-react";

export default function Register(): JSX.Element {
  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
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
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <span className="text-xl">✨</span>
          </div>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-emerald-300 via-teal-300 to-green-300">
          Crie sua conta
        </h2>
        <p className="text-emerald-100/60 text-sm lg:text-base max-w-xs mx-auto">
          Junte-se à Fintrix e viva a experiência de uma fintech moderna
        </p>
      </motion.div>

      {/* Form */}
      <form className="space-y-4">
        {/* Nome Completo */}
        <motion.div
          custom={0}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="space-y-2"
        >
          <label className="block text-sm font-medium text-emerald-100 flex items-center gap-2">
            <User size={16} className="text-emerald-400" />
            Nome completo
          </label>
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <Input
              type="text"
              placeholder="Seu nome completo"
              className={
                "relative mt-1 bg-white/5 border border-emerald-500/20 text-white placeholder:text-emerald-100/30 " +
                "focus:border-emerald-400/50 focus:bg-white/10 focus:outline-none transition-all duration-200 " +
                "rounded-lg"
              }
              required
            />
          </div>
        </motion.div>

        {/* E-mail */}
        <motion.div
          custom={1}
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
            <div className="absolute inset-0 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <Input
              type="email"
              placeholder="seu@email.com"
              className={
                "relative mt-1 bg-white/5 border border-emerald-500/20 text-white placeholder:text-emerald-100/30 " +
                "focus:border-emerald-400/50 focus:bg-white/10 focus:outline-none transition-all duration-200 " +
                "rounded-lg"
              }
              required
            />
          </div>
        </motion.div>

        {/* Senha */}
        <motion.div
          custom={2}
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
            <div className="absolute inset-0 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <Input
              type="password"
              placeholder="••••••••"
              className={
                "relative mt-1 bg-white/5 border border-emerald-500/20 text-white placeholder:text-emerald-100/30 " +
                "focus:border-emerald-400/50 focus:bg-white/10 focus:outline-none transition-all duration-200 " +
                "rounded-lg"
              }
              required
            />
          </div>
        </motion.div>

        {/* Confirmar Senha */}
        <motion.div
          custom={3}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="space-y-2"
        >
          <label className="block text-sm font-medium text-emerald-100 flex items-center gap-2">
            <Lock size={16} className="text-emerald-400" />
            Confirmar senha
          </label>
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <Input
              type="password"
              placeholder="••••••••"
              className={
                "relative mt-1 bg-white/5 border border-emerald-500/20 text-white placeholder:text-emerald-100/30 " +
                "focus:border-emerald-400/50 focus:bg-white/10 focus:outline-none transition-all duration-200 " +
                "rounded-lg"
              }
              required
            />
          </div>
        </motion.div>

        {/* Termos e Condições */}
        <motion.div
          custom={4}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="flex items-start gap-3 pt-2"
        >
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 mt-1 rounded border-emerald-500/30 bg-white/5 accent-emerald-500 cursor-pointer"
            required
          />
          <label htmlFor="terms" className="text-xs text-emerald-100/60 cursor-pointer leading-relaxed">
            Concordo com os{" "}
            <a href="#" className="text-emerald-300 hover:text-emerald-200 underline">
              termos de serviço
            </a>{" "}
            e{" "}
            <a href="#" className="text-emerald-300 hover:text-emerald-200 underline">
              política de privacidade
            </a>
          </label>
        </motion.div>

        {/* Button Submit */}
        <motion.div
          custom={5}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="pt-4"
        >
          <Button
            type="submit"
            className={
              "w-full text-white font-semibold py-3 rounded-lg " +
              "bg-linear-to-r from-emerald-500 via-teal-500 to-green-500 " +
              "hover:from-emerald-400 hover:via-teal-400 hover:to-green-400 " +
              "shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 " +
              "transition-all duration-300 transform hover:scale-105 active:scale-95 " +
              "flex items-center justify-center gap-2"
            }
          >
            <span>Criar conta</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </Button>
        </motion.div>
      </form>

      {/* Footer - Login Link */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center text-sm text-emerald-100/50"
      >
        Já tem uma conta?{" "}
        <motion.a
          href="/login"
          className="text-emerald-300 hover:text-emerald-200 font-semibold transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Faça login aqui
        </motion.a>
      </motion.p>
    </motion.div>
  );
}