"use client";

import { useState, JSX } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/atoms/Input/input.atom";
import { Button } from "@/components/atoms/Button/button.atom";
import { Text } from "@/components/atoms/Text/text.atom";
import { User, DollarSign, Send, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface TransferDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * TransferDrawer
 * Drawer para realizar transferências
 */
export const TransferDrawer = ({
  open,
  onOpenChange,
}: TransferDrawerProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    onOpenChange(false);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 border-t border-emerald-500/20 p-0">
        <DrawerHeader className="px-6 pt-6 pb-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-500/20 backdrop-blur-sm">
              <Send className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <DrawerTitle className="text-2xl text-white">Transferir Dinheiro</DrawerTitle>
              <DrawerDescription className="text-emerald-200/70">
                Envie dinheiro para outros usuários de forma rápida e segura
              </DrawerDescription>
            </div>
          </div>
        </DrawerHeader>

        <motion.form
          onSubmit={handleSubmit}
          className="px-6 pb-6 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Destinatário */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Input
              label="Destinatário"
              placeholder="Nome ou CPF"
              leftIcon={<User className="h-5 w-5" />}
              required
              className="bg-emerald-950/40 border-emerald-500/20 focus:border-emerald-500/60"
            />
          </motion.div>

          {/* Valor */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            <Input
              label="Valor"
              type="number"
              placeholder="0,00"
              leftIcon={<DollarSign className="h-5 w-5" />}
              required
              className="bg-emerald-950/40 border-emerald-500/20 focus:border-emerald-500/60"
            />
          </motion.div>

          {/* Descrição */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Input
              label="Descrição (opcional)"
              placeholder="Adicione uma descrição"
              className="bg-emerald-950/40 border-emerald-500/20 focus:border-emerald-500/60"
            />
          </motion.div>

          {/* Taxa Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="rounded-xl bg-linear-to-r from-emerald-500/15 to-teal-500/15 p-4 border border-emerald-500/40 backdrop-blur-sm overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 to-teal-500/5" />
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-emerald-400" />
                <Text size="sm" className="text-emerald-200/80">
                  Taxa de transferência:
                </Text>
              </div>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="px-3 py-1 rounded-full bg-emerald-600/30 border border-emerald-500/50"
              >
                <Text size="sm" className="text-emerald-300 font-bold">
                  Grátis!
                </Text>
              </motion.div>
            </div>
          </motion.div>

          {/* Benefícios */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="rounded-xl bg-emerald-950/40 border border-emerald-500/20 p-3 backdrop-blur-sm text-center">
              <div className="text-emerald-400 font-bold text-lg mb-1">⚡</div>
              <Text size="xs" className="text-emerald-200/70">Instantâneo</Text>
            </div>
            <div className="rounded-xl bg-emerald-950/40 border border-emerald-500/20 p-3 backdrop-blur-sm text-center">
              <div className="text-emerald-400 font-bold text-lg mb-1">🔒</div>
              <Text size="xs" className="text-emerald-200/70">Seguro</Text>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.35 }}
            className="flex gap-3 pt-4"
          >
            <Button
              type="button"
              variant="outline"
              className="flex-1 border-emerald-500/30 hover:bg-emerald-950/40"
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0"
              isLoading={isLoading}
            >
              Transferir
            </Button>
          </motion.div>
        </motion.form>
      </DrawerContent>
    </Drawer>
  );
};