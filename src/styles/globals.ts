/**
 * Estilos Globais e Classes Utilitárias
 */

export const globalClasses = {
  // Containers
  container: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  containerFluid: "w-full px-4 sm:px-6 lg:px-8",

  // Flex utilities
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex items-center justify-between",
  flexStart: "flex items-start",
  flexEnd: "flex items-end",
  flexCol: "flex flex-col",
  flexColCenter: "flex flex-col items-center justify-center",

  // Grid utilities
  grid2: "grid grid-cols-1 md:grid-cols-2 gap-4",
  grid3: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
  grid4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",

  // Card styles
  card: "bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10",
  cardHover: "bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/8 transition-all duration-200",

  // Text utilities
  textGradient: "bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent",
  textPrimary: "text-gray-200",
  textSecondary: "text-gray-400",

  // Button base
  buttonBase: "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200",

  // Input base
  inputBase: "w-full px-4 py-3 rounded-lg bg-transparent border transition-colors duration-200",

  // Animations
  animate: {
    spin: "animate-spin",
    pulse: "animate-pulse",
    bounce: "animate-bounce",
  },

  // Glassmorphism
  glass: "backdrop-blur-md bg-white/10",
  glassDark: "backdrop-blur-md bg-black/20",
};

export const gradients = {
  primary: "bg-linear-to-r from-emerald-500 to-teal-500",
  secondary: "bg-linear-to-r from-blue-500 to-cyan-500",
  background: "bg-linear-to-br from-slate-950 to-slate-900",
  card: "bg-linear-to-br from-white/5 to-white/10",
  text: "bg-linear-to-r from-emerald-400 to-teal-400",
};

export default globalClasses;
