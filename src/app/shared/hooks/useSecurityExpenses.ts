import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const securityExpensesLocal = 'securityExpenses';

export const useSecurityExpenses = () => {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const [isExpensesVisible, setIsExpensesVisible] = useState<boolean>(
    getLocalStorage(securityExpensesLocal)
  );

  const toggleExpenses = () => setIsExpensesVisible((prev) => !prev);

  useEffect(() => {
    setLocalStorage(securityExpensesLocal, isExpensesVisible);
  }, [isExpensesVisible, setLocalStorage]);

  return {
    toggleExpenses,
    isExpensesVisible
  };
};
