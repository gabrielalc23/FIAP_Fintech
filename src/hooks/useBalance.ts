import { useState, useCallback } from "react";

/**
 * Hook para gerenciar saldo e visibilidade
 */
export const useBalance = (initialBalance = 0) => {
  const [balance, setBalance] = useState(initialBalance);
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  const updateBalance = useCallback((newBalance: number) => {
    setBalance(newBalance);
  }, []);

  const addToBalance = useCallback((amount: number) => {
    setBalance((prev) => prev + amount);
  }, []);

  const subtractFromBalance = useCallback((amount: number) => {
    setBalance((prev) => prev - amount);
  }, []);

  return {
    balance,
    isVisible,
    toggleVisibility,
    updateBalance,
    addToBalance,
    subtractFromBalance,
  };
};
