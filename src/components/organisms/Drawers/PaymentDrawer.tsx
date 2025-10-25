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
import { Badge } from "@/components/atoms/Badge/badge.atom";
import { Barcode, CreditCard, Send } from "lucide-react";
import { motion } from "framer-motion";

interface PaymentDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * PaymentDrawer
 * Drawer para realizar pagamentos
 */
export const PaymentDrawer = ({
  open,
  onOpenChange,
}: PaymentDrawerProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentType, setPaymentType] = useState<"barcode" | "card">("barcode");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
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
              <DrawerTitle className="text-2xl text-white">Realizar Pagamento</DrawerTitle>
              <DrawerDescription className="text-emerald-200/70">
                Pague suas contas e boletos de forma prática
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
          {/* Tipo de Pagamento */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setPaymentType("barcode")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 border-2 backdrop-blur-sm ${
                paymentType === "barcode"
                  ? "bg-emerald-600/40 border-emerald-500 text-emerald-100 shadow-lg shadow-emerald-500/20"
                  : "bg-emerald-950/40 border-emerald-500/20 text-emerald-200/70 hover:border-emerald-500/40 hover:bg-emerald-950/60"
              }`}
            >
              <Barcode className="h-4 w-4" />
              <span>Boleto</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setPaymentType("card")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 border-2 backdrop-blur-sm ${
                paymentType === "card"
                  ? "bg-teal-600/40 border-teal-500 text-emerald-100 shadow-lg shadow-teal-500/20"
                  : "bg-emerald-950/40 border-emerald-500/20 text-emerald-200/70 hover:border-emerald-500/40 hover:bg-emerald-950/60"
              }`}
            >
              <CreditCard className="h-4 w-4" />
              <span>Cartão</span>
            </motion.button>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Inputs animados em cascata */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {paymentType === "barcode" ? (
                <Input
                  label="Código de Barras"
                  placeholder="Digite ou cole o código"
                  leftIcon={<Barcode className="h-5 w-5" />}
                  required
                  className="bg-emerald-950/40 border-emerald-500/20"
                />
              ) : (
                <Input
                  label="Número do Cartão"
                  placeholder="0000 0000 0000 0000"
                  leftIcon={<CreditCard className="h-5 w-5" />}
                  required
                  className="bg-emerald-950/40 border-emerald-500/20"
                />
              )}
            </motion.div>

            {/* Campos extras para cartão */}
            {paymentType === "card" && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="grid grid-cols-2 gap-3"
              >
                <Input
                  label="Validade"
                  placeholder="MM/AA"
                  required
                  className="bg-emerald-950/40 border-emerald-500/20"
                />
                <Input
                  label="CVV"
                  placeholder="000"
                  required
                  className="bg-emerald-950/40 border-emerald-500/20"
                />
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Input
                label="Valor"
                type="number"
                placeholder="0,00"
                required
                className="bg-emerald-950/40 border-emerald-500/20"
              />
            </motion.div>

            {/* Info Alert */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              className="rounded-xl bg-linear-to-r from-emerald-500/15 to-teal-500/15 p-4 border border-emerald-500/40 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <Text size="sm" className="text-emerald-200/80">
                  <span className="font-semibold text-emerald-300">Processamento</span>
                </Text>
                <Badge 
                  variant="success" 
                  size="sm" 
                  className="bg-emerald-500/30 text-emerald-200 border border-emerald-500/50"
                >
                  ⚡ Instantâneo
                </Badge>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
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
                Pagar
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
};