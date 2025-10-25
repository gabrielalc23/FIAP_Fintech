"use client";

import { IChartSection } from "@/interfaces";
import { Card } from "@/components/molecules/Card/card.molecule";
import { Text } from "@/components/atoms/Text/text.atom";
import { motion } from "framer-motion";
import { JSX } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

/**
 * ChartSection Organism
 * Seção de gráficos
 * Segue padrão Atomic Design
 */
export const ChartSection = ({
  title = "Análise",
  data,
  type = "area",
  className,
}: IChartSection): JSX.Element => {
  // Tailwind colors as constants
  const EMERALD_500 = "rgb(16 185 129)";
  const TEAL_500 = "rgb(20 184 166)";
  const CYAN_500 = "rgb(6 182 212)";
  const GRAY_400 = "rgb(156 163 175)";
  const BLACK_80 = "rgba(0, 0, 0, 0.8)";
  const EMERALD_BORDER = "rgba(16, 185, 129, 0.3)";
  const EMERALD_950 = "rgba(5, 46, 22, 0.9)";

  const renderChart = () => {
    const commonProps = {
      data,
      margin: { top: 10, right: 10, left: 0, bottom: 0 },
    };

    switch (type) {
      case "line":
        return (
          <LineChart {...commonProps}>
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor={EMERALD_500} stopOpacity={1} />
                <stop offset="100%" stopColor={TEAL_500} stopOpacity={1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
            <XAxis dataKey="name" stroke={GRAY_400} style={{ fontSize: "12px" }} />
            <YAxis stroke={GRAY_400} style={{ fontSize: "12px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: EMERALD_950,
                border: `2px solid ${EMERALD_500}`,
                borderRadius: "12px",
                boxShadow: `0 0 20px rgba(16, 185, 129, 0.3)`,
              }}
              labelStyle={{ color: EMERALD_500, fontWeight: "bold" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="url(#lineGradient)"
              strokeWidth={3}
              dot={{ fill: EMERALD_500, r: 5, strokeWidth: 2, stroke: TEAL_500 }}
              activeDot={{ r: 7 }}
              isAnimationActive={true}
            />
          </LineChart>
        );

      case "bar":
        return (
          <BarChart {...commonProps}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={EMERALD_500} stopOpacity={0.9} />
                <stop offset="100%" stopColor={TEAL_500} stopOpacity={0.6} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
            <XAxis dataKey="name" stroke={GRAY_400} style={{ fontSize: "12px" }} />
            <YAxis stroke={GRAY_400} style={{ fontSize: "12px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: EMERALD_950,
                border: `2px solid ${EMERALD_500}`,
                borderRadius: "12px",
                boxShadow: `0 0 20px rgba(16, 185, 129, 0.3)`,
              }}
              labelStyle={{ color: EMERALD_500, fontWeight: "bold" }}
            />
            <Bar 
              dataKey="value" 
              fill="url(#barGradient)" 
              radius={[12, 12, 0, 0]}
              animationDuration={1000}
            />
          </BarChart>
        );

      case "pie":
        const COLORS = [
          EMERALD_500,
          TEAL_500,
          CYAN_500,
          "rgb(34 197 94)",
          "rgb(29 185 84)",
        ];

        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              innerRadius={60}
              fill={EMERALD_500}
              dataKey="value"
              animationDuration={1000}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: EMERALD_950,
                border: `2px solid ${EMERALD_500}`,
                borderRadius: "12px",
                boxShadow: `0 0 20px rgba(16, 185, 129, 0.3)`,
              }}
              labelStyle={{ color: EMERALD_500, fontWeight: "bold" }}
            />
          </PieChart>
        );

      case "area":
      default:
        return (
          <AreaChart {...commonProps}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={EMERALD_500} stopOpacity={0.4} />
                <stop offset="50%" stopColor={TEAL_500} stopOpacity={0.2} />
                <stop offset="95%" stopColor={EMERALD_500} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="strokeGradient" x1="0" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor={EMERALD_500} />
                <stop offset="100%" stopColor={CYAN_500} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
            <XAxis dataKey="name" stroke={GRAY_400} style={{ fontSize: "12px" }} />
            <YAxis stroke={GRAY_400} style={{ fontSize: "12px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: EMERALD_950,
                border: `2px solid ${EMERALD_500}`,
                borderRadius: "12px",
                boxShadow: `0 0 20px rgba(16, 185, 129, 0.3)`,
              }}
              labelStyle={{ color: EMERALD_500, fontWeight: "bold" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="url(#strokeGradient)"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
              isAnimationActive={true}
              animationDuration={1000}
            />
          </AreaChart>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative group">
        {/* Glow Background */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

        {/* Main Container */}
        <div className="relative bg-gradient-to-br from-emerald-950/60 via-slate-950/80 to-emerald-950/40 backdrop-blur-xl border-2 border-emerald-500/30 hover:border-emerald-500/50 rounded-2xl p-8 shadow-2xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 overflow-hidden">
          
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-tr from-teal-500/5 to-cyan-500/5 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-1"
            >
              <Text 
                as="h3" 
                size="xl" 
                weight="semibold"
                className="text-emerald-100"
              >
                {title}
              </Text>
              <Text 
                size="sm" 
                className="text-emerald-200/60"
              >
                Análise detalhada de suas finanças
              </Text>
            </motion.div>

            {/* Chart Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="w-full h-80 -mx-4 px-4"
            >
              <ResponsiveContainer width="100%" height="100%">
                {renderChart()}
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};