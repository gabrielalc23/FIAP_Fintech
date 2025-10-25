/**
 * Design Tokens - Sistema de Design Centralizado
 * Seguindo padrão Atomic Design
 * Todos os valores visuais devem usar estes tokens
 */

export const colors = {
  // Cores primárias
  primary: {
    main: "#00B894",
    light: "#00E3A7",
    dark: "#008C6F",
    gradient: "linear-gradient(135deg, #00B894 0%, #00E3A7 100%)",
  },

  // Cores secundárias
  secondary: {
    main: "#0984E3",
    light: "#74B9FF",
    dark: "#0652A5",
  },

  // Backgrounds
  background: {
    primary: "#0A1F1A",
    secondary: "#051512",
    tertiary: "#0D2621",
    gradient: "linear-gradient(to bottom right, #0A1F1A 0%, #051512 100%)",
    card: "rgba(255, 255, 255, 0.05)",
    cardHover: "rgba(255, 255, 255, 0.08)",
  },

  // Superfícies
  surface: {
    primary: "#FFFFFF",
    secondary: "#F8F9FA",
    overlay: "rgba(0, 0, 0, 0.5)",
  },

  // Textos
  text: {
    primary: "#E5E5E5",
    secondary: "#B2BEC3",
    tertiary: "#636E72",
    inverse: "#2D3436",
    light: "#DFE6E9",
  },

  // Bordas
  border: {
    default: "rgba(255, 255, 255, 0.1)",
    focus: "rgba(0, 184, 148, 0.5)",
    hover: "rgba(255, 255, 255, 0.2)",
  },

  // Estados
  status: {
    success: "#00B894",
    error: "#FF7675",
    warning: "#FDCB6E",
    info: "#74B9FF",
  },

  // Sombras (para uso com shadow utilities)
  shadow: {
    primary: "rgba(0, 184, 148, 0.3)",
    secondary: "rgba(0, 0, 0, 0.25)",
    card: "rgba(0, 184, 148, 0.15)",
  },

  // Chart colors
  chart: {
    1: "#00B894",
    2: "#0984E3",
    3: "#FDCB6E",
    4: "#74B9FF",
    5: "#00E3A7",
  },
};

export const typography = {
  fontFamily: {
    primary: 'var(--font-geist-sans)',
    secondary: 'var(--font-geist-mono)',
    base: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },

  fontSize: {
    xs: "0.75rem",      // 12px
    sm: "0.875rem",     // 14px
    base: "1rem",       // 16px
    lg: "1.125rem",     // 18px
    xl: "1.25rem",      // 20px
    "2xl": "1.5rem",    // 24px
    "3xl": "1.875rem",  // 30px
    "4xl": "2.25rem",   // 36px
    "5xl": "3rem",      // 48px
  },

  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },

  lineHeight: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
    loose: "2",
  },

  letterSpacing: {
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
  },
};

export const spacing = {
  // Espaçamentos base (usar com margin, padding)
  0: "0",
  1: "0.25rem",   // 4px
  2: "0.5rem",    // 8px
  3: "0.75rem",   // 12px
  4: "1rem",      // 16px
  5: "1.25rem",   // 20px
  6: "1.5rem",    // 24px
  7: "1.75rem",   // 28px
  8: "2rem",      // 32px
  10: "2.5rem",   // 40px
  12: "3rem",     // 48px
  16: "4rem",     // 64px
  20: "5rem",     // 80px
  24: "6rem",     // 96px
  32: "8rem",     // 128px
};

export const borderRadius = {
  none: "0",
  sm: "0.25rem",    // 4px
  base: "0.375rem", // 6px
  md: "0.5rem",     // 8px
  lg: "0.75rem",    // 12px
  xl: "1rem",       // 16px
  "2xl": "1.5rem",  // 24px
  full: "9999px",
};

export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",

  // Sombras com cor primária
  primarySm: "0 4px 6px -1px rgba(0, 184, 148, 0.3)",
  primaryMd: "0 10px 15px -3px rgba(0, 184, 148, 0.3)",
  primaryLg: "0 20px 25px -5px rgba(0, 184, 148, 0.3)",
};

export const transitions = {
  fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
  base: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
  slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
  slower: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
};

export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  backdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};

export const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// Animações do Framer Motion
export const animations = {
  // Fade In
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  // Slide In Bottom
  slideInBottom: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },

  // Slide In Top
  slideInTop: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },

  // Slide In Left
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },

  // Slide In Right
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },

  // Scale In
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },

  // Stagger Container
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },

  // Hover Scale
  hoverScale: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  },

  // Button Hover
  buttonHover: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  },
};

// Theme completo exportado
export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  zIndex,
  breakpoints,
  animations,
};

export default theme;
