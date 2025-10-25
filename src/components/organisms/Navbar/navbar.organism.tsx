"use client";

import { INavbar } from "@/interfaces";
import { Avatar } from "@/components/atoms/Avatar/avatar.atom";
import { Text } from "@/components/atoms/Text/text.atom";
import { Button } from "@/components/atoms/Button/button.atom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Settings,
  LogOut,
  User,
  Shield,
  Moon,
  Volume2,
  CreditCard,
  HelpCircle,
  ChevronRight,
  X,
} from "lucide-react";
import { useEffect, useState, JSX } from "react";

/**
 * Navbar Organism
 * Componente de navegação principal
 * Segue padrão Atomic Design
 */
export const Navbar = ({ className, user }: INavbar): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const [openNotifications, setOpenNotifications] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settingsOptions = [
    {
      icon: <User className="h-5 w-5" />,
      label: "Perfil",
      description: "Editar dados pessoais",
      action: () => console.log("Perfil"),
    },
    {
      icon: <Shield className="h-5 w-5" />,
      label: "Segurança",
      description: "Autenticação e privacidade",
      action: () => console.log("Segurança"),
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      label: "Pagamentos",
      description: "Métodos de pagamento",
      action: () => console.log("Pagamentos"),
    },
    {
      icon: <Moon className="h-5 w-5" />,
      label: "Tema",
      description: "Modo claro/escuro",
      action: () => console.log("Tema"),
    },
    {
      icon: <Volume2 className="h-5 w-5" />,
      label: "Notificações",
      description: "Gerenciar alertas",
      action: () => console.log("Notificações"),
    },
    {
      icon: <HelpCircle className="h-5 w-5" />,
      label: "Ajuda",
      description: "Central de suporte",
      action: () => console.log("Ajuda"),
    },
  ];

  const notifications = [
    {
      id: 1,
      title: "Transferência confirmada",
      description: "R$ 500,00 para João Silva",
      time: "Há 5 minutos",
      read: false,
    },
    {
      id: 2,
      title: "Novo investimento",
      description: "Seu fundo cresceu 2,5%",
      time: "Há 1 hora",
      read: false,
    },
    {
      id: 3,
      title: "Segurança",
      description: "Acesso de novo dispositivo",
      time: "Há 2 horas",
      read: true,
    },
  ];

  return (
    <>
      <motion.header
        className={`z-40 backdrop-blur-lg px-6 py-4 ${className}`}
        animate={
          isScrolled
            ? {
                position: "fixed",
                top: "24px",
                left: "24px",
                right: "24px",
                borderRadius: "1rem",
                backgroundColor: "rgba(6, 78, 59, 0.4)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                boxShadow: "0 20px 60px rgba(16, 185, 129, 0.2)",
                backdropFilter: "blur(20px)",
              }
            : {
                position: "sticky",
                top: "0",
                left: "0",
                right: "0",
                borderRadius: "0",
                backgroundColor: "rgba(6, 78, 59, 0.8)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                boxShadow: "none",
                backdropFilter: "blur(12px)",
              }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Text
              as="h1"
              size="2xl"
              weight="bold"
              className="bg-gradient-to-r from-emerald-300 via-teal-300 to-green-300 bg-clip-text text-transparent"
            >
              Fintrix
            </Text>
          </motion.div>

          <div className="flex items-center gap-4">
            {/* Notifications */}
            <div className="relative">
              <motion.button
                className="relative p-2 rounded-full hover:bg-emerald-900/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setOpenNotifications(!openNotifications);
                  setOpenSettings(false);
                }}
              >
                <Bell size={20} className="text-emerald-400" />
                <motion.span
                  className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </motion.button>

              {/* Notifications Dropdown */}
              <AnimatePresence>
                {openNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-80 bg-gradient-to-br from-emerald-950/95 to-slate-950/95 backdrop-blur-xl border-2 border-emerald-500/30 rounded-2xl shadow-2xl shadow-emerald-500/20 overflow-hidden z-50"
                  >
                    {/* Header */}
                    <div className="p-4 border-b border-emerald-500/20">
                      <Text
                        size="lg"
                        weight="semibold"
                        className="text-emerald-100"
                      >
                        Notificações
                      </Text>
                    </div>

                    {/* Notifications List */}
                    <div className="max-h-96 overflow-y-auto space-y-1 p-2">
                      {notifications.map((notif, index) => (
                        <motion.div
                          key={notif.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`p-3 rounded-lg cursor-pointer transition-all ${
                            notif.read
                              ? "bg-emerald-950/20 hover:bg-emerald-950/40"
                              : "bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30"
                          }`}
                        >
                          <div className="flex gap-2">
                            <div
                              className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                                notif.read
                                  ? "bg-emerald-400/30"
                                  : "bg-emerald-400"
                              }`}
                            />
                            <div className="flex-1 min-w-0">
                              <Text
                                size="sm"
                                weight="semibold"
                                className="text-emerald-100"
                              >
                                {notif.title}
                              </Text>
                              <Text
                                size="xs"
                                className="text-emerald-200/60 mt-1"
                              >
                                {notif.description}
                              </Text>
                              <Text
                                size="xs"
                                className="text-emerald-200/40 mt-1.5"
                              >
                                {notif.time}
                              </Text>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="p-3 border-t border-emerald-500/20">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-emerald-900/50 border border-emerald-500/40 text-emerald-100 hover:bg-emerald-900/70 transition-colors"
                      >
                        Ver todas as notificações
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Settings */}
            <div className="relative">
              <motion.button
                className="p-2 rounded-full hover:bg-emerald-900/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setOpenSettings(!openSettings);
                  setOpenNotifications(false);
                }}
              >
                <Settings size={20} className="text-emerald-400" />
              </motion.button>

              {/* Settings Dropdown */}
              <AnimatePresence>
                {openSettings && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-72 bg-gradient-to-br from-emerald-950/95 to-slate-950/95 backdrop-blur-xl border-2 border-emerald-500/30 rounded-2xl shadow-2xl shadow-emerald-500/20 overflow-hidden z-50"
                  >
                    {/* Header */}
                    <div className="p-4 border-b border-emerald-500/20 flex items-center justify-between">
                      <Text
                        size="lg"
                        weight="semibold"
                        className="text-emerald-100"
                      >
                        Configurações
                      </Text>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setOpenSettings(false)}
                        className="p-1 rounded-lg hover:bg-emerald-900/30 transition-colors"
                      >
                        <X size={18} className="text-emerald-400" />
                      </motion.button>
                    </div>

                    {/* Settings Options */}
                    <div className="p-2 space-y-1">
                      {settingsOptions.map((option, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => {
                            option.action();
                            setOpenSettings(false);
                          }}
                          whileHover={{ x: 4 }}
                          className="w-full flex items-center gap-3 p-3 rounded-lg bg-emerald-950/20 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group"
                        >
                          <div className="p-2 rounded-lg bg-emerald-500/20 group-hover:bg-emerald-500/30 text-emerald-400 transition-colors">
                            {option.icon}
                          </div>
                          <div className="flex-1 text-left">
                            <Text
                              size="sm"
                              weight="semibold"
                              className="text-emerald-100"
                            >
                              {option.label}
                            </Text>
                            <Text size="xs" className="text-emerald-200/60">
                              {option.description}
                            </Text>
                          </div>
                          <ChevronRight
                            size={16}
                            className="text-emerald-400/50 group-hover:text-emerald-400 transition-colors"
                          />
                        </motion.button>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-emerald-500/20 via-emerald-500/50 to-emerald-500/20 my-2" />

                    {/* Logout */}
                    <div className="p-2">
                      <motion.button
                        whileHover={{ x: 4 }}
                        className="w-full flex items-center gap-3 p-3 rounded-lg bg-red-950/20 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 transition-all group"
                      >
                        <div className="p-2 rounded-lg bg-red-500/20 group-hover:bg-red-500/30 text-red-400 transition-colors">
                          <LogOut size={18} />
                        </div>
                        <div className="flex-1 text-left">
                          <Text
                            size="sm"
                            weight="semibold"
                            className="text-red-100"
                          >
                            Sair
                          </Text>
                        </div>
                        <ChevronRight
                          size={16}
                          className="text-red-400/50 group-hover:text-red-400 transition-colors"
                        />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Avatar */}
            {user && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-emerald-900/30 transition-colors"
              >
                <Avatar
                  src={user.avatar}
                  alt={user.name}
                  fallback={user.name.charAt(0)}
                  size="md"
                />
              </motion.div>
            )}
          </div>
        </div>
      </motion.header>

      {/* Backdrop */}
      <AnimatePresence>
        {(openSettings || openNotifications) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setOpenSettings(false);
              setOpenNotifications(false);
            }}
            className="fixed inset-0 z-30 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </>
  );
};
