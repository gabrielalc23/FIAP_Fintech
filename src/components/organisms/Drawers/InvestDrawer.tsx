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
import { TrendingUp, DollarSign, Shield } from "lucide-react";
import { motion } from "framer-motion";

interface InvestDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * InvestDrawer
 * Drawer para realizar investimentos
 */
export const InvestDrawer = ({
  open,
  onOpenChange,
}: InvestDrawerProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const investmentPlans = [
    {
      id: "conservative",
      name: "Conservador",
      description: "Menor risco, rentabilidade estável",
      risk: "Baixo",
      return: "8% a.a.",
      badge: "success" as const,
      color: "from-emerald-600 to-teal-600",
    },
    {
      id: "moderate",
      name: "Moderado",
      description: "Equilíbrio entre risco e retorno",
      risk: "Médio",
      return: "12% a.a.",
      badge: "warning" as const,
      color: "from-teal-600 to-cyan-600",
    },
    {
      id: "aggressive",
      name: "Agressivo",
      description: "Maior potencial de ganho",
      risk: "Alto",
      return: "18% a.a.",
      badge: "error" as const,
      color: "from-cyan-600 to-green-600",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) return;

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
              <TrendingUp className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <DrawerTitle className="text-2xl text-white">Investir</DrawerTitle>
              <DrawerDescription className="text-emerald-200/70">
                Faça seu dinheiro render com segurança
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
          <Text size="sm" weight="medium" className="text-emerald-300">
            Escolha seu perfil de investimento:
          </Text>

          <div className="space-y-3">
            {investmentPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`relative cursor-pointer rounded-xl p-4 transition-all duration-300 backdrop-blur-sm border-2 overflow-hidden group ${
                    selectedPlan === plan.id
                      ? "border-emerald-500 bg-emerald-500/15 shadow-lg shadow-emerald-500/20"
                      : "border-emerald-500/20 bg-emerald-950/40 hover:border-emerald-500/40 hover:bg-emerald-950/60"
                  }`}
                >
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-linear-to-r ${plan.color}`}
                  />

                  <div className="relative flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Text size="base" weight="semibold" className="text-emerald-100">
                          {plan.name}
                        </Text>
                        <Badge variant={plan.badge} size="sm">
                          {plan.risk}
                        </Badge>
                      </div>
                      <Text size="sm" className="text-emerald-200/60 mb-1">
                        {plan.description}
                      </Text>
                      <Text size="sm" weight="semibold" className="text-emerald-400">
                        {plan.return}
                      </Text>
                    </div>
                    <motion.div
                      animate={selectedPlan === plan.id ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${plan.color}`}>
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Input
                label="Valor do Investimento"
                type="number"
                placeholder="0,00"
                leftIcon={<DollarSign className="h-5 w-5" />}
                required
                disabled={!selectedPlan}
                className="bg-emerald-950/40 border-emerald-500/20"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="rounded-xl bg-linear-to-r from-emerald-500/10 to-teal-500/10 p-4 border border-emerald-500/30 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <Text size="xs" className="text-emerald-200/70">
                  Seus investimentos são protegidos pelo FGC até <span className="text-emerald-300 font-semibold">R$ 250.000,00</span>
                </Text>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="flex gap-3 pt-4"
            >
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={(): void => onOpenChange(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                isLoading={isLoading}
                disabled={!selectedPlan}
              >
                Investir
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
};