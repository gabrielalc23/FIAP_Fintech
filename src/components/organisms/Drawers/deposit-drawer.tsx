"use client";

import { useState, JSX } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/atoms/Button/button.atom";
import { Text } from "@/components/atoms/Text/text.atom";
import { Card } from "@/components/molecules/Card/card.molecule";
import { Copy, CheckCircle, Zap, Landmark } from "lucide-react";
import { motion } from "framer-motion";

interface DepositDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * DepositDrawer
 * Drawer para realizar depósitos
 */
export const DepositDrawer = ({
  open,
  onOpenChange,
}: DepositDrawerProps): JSX.Element => {
  const [copied, setCopied] = useState(false);
  const pixKey = "fintrix@pix.com.br";

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-linear-to-br from-slate-950 via-emerald-950 to-slate-950 border-t border-emerald-500/20 p-0">
        <DrawerHeader className="px-6 pt-6 pb-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-500/20 backdrop-blur-sm">
              <Zap className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <DrawerTitle className="text-2xl text-white">Depositar</DrawerTitle>
              <DrawerDescription className="text-emerald-200/70">
                Adicione saldo à sua conta de forma rápida e segura
              </DrawerDescription>
            </div>
          </div>
        </DrawerHeader>

        <motion.div
          className="px-6 pb-6 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* PIX */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="rounded-xl bg-linear-to-br from-emerald-950/60 to-teal-950/40 border border-emerald-500/30 p-5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-linear-to-br from-emerald-600 to-teal-600">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <Text size="base" weight="semibold" className="text-emerald-100">
                PIX
              </Text>
              <span className="ml-auto px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium">
                Instantâneo
              </span>
            </div>

            <div className="space-y-4">
              <Text variant="secondary" size="sm" className="text-emerald-200/70">
                Use a chave PIX abaixo para fazer o depósito:
              </Text>

              <div className="flex items-center gap-2">
                <motion.div
                  className="flex-1 bg-emerald-950/40 border border-emerald-500/30 rounded-lg px-4 py-3 backdrop-blur-sm"
                  whileHover={{ borderColor: "rgba(16, 185, 129, 0.5)" }}
                >
                  <Text size="sm" className="break-all text-emerald-100">
                    {pixKey}
                  </Text>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 transition-colors shrink-0"
                >
                  {copied ? (
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <Copy className="h-5 w-5 text-emerald-400" />
                  )}
                </motion.button>
              </div>

              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40"
                >
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <Text size="sm" className="text-emerald-300 font-medium">
                    Chave copiada!
                  </Text>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Transferência Bancária */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="rounded-xl bg-linear-to-br from-teal-950/60 to-cyan-950/40 border border-teal-500/30 p-5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-linear-to-br from-teal-600 to-cyan-600">
                <Landmark className="h-4 w-4 text-white" />
              </div>
              <Text size="base" weight="semibold" className="text-emerald-100">
                Transferência Bancária
              </Text>
              <span className="ml-auto px-2 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-medium">
                Até 1 dia útil
              </span>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-emerald-950/40 border border-emerald-500/20 rounded-lg p-3 backdrop-blur-sm"
                >
                  <Text size="xs" className="text-emerald-200/60 uppercase tracking-wide font-semibold mb-1">
                    Banco
                  </Text>
                  <Text size="sm" className="text-emerald-100 font-semibold">
                    Fintrix Bank - 777
                  </Text>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-emerald-950/40 border border-emerald-500/20 rounded-lg p-3 backdrop-blur-sm"
                >
                  <Text size="xs" className="text-emerald-200/60 uppercase tracking-wide font-semibold mb-1">
                    Agência
                  </Text>
                  <Text size="sm" className="text-emerald-100 font-semibold">
                    0001
                  </Text>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-emerald-950/40 border border-emerald-500/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <Text size="xs" className="text-emerald-200/60 uppercase tracking-wide font-semibold mb-1">
                  Conta Corrente
                </Text>
                <Text size="sm" className="text-emerald-100 font-semibold">
                  123456-7
                </Text>
              </motion.div>
            </div>
          </motion.div>

          {/* Info Alert */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="rounded-xl bg-linear-to-r from-emerald-500/15 to-teal-500/15 p-4 border border-emerald-500/40 backdrop-blur-sm"
          >
            <Text size="xs" className="text-emerald-200/80 leading-relaxed">
              <span className="font-semibold text-emerald-300">PIX</span> são processados <span className="font-semibold text-emerald-300">instantaneamente</span>. <span className="font-semibold text-emerald-300">Transferências bancárias</span> podem levar até <span className="font-semibold text-emerald-300">1 dia útil</span>.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Button
              className="w-full bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0"
              onClick={() => onOpenChange(false)}
            >
              Fechar
            </Button>
          </motion.div>
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
};