'use client';

import { useState } from 'react';

export const useDashboardController = () => {
  const [isExpensesVisible, setIsExpensesVisible] = useState(true);

  const toggleExpenses = () => setIsExpensesVisible((prev) => !prev);

  return {
    isExpensesVisible,
    toggleExpenses
  };
};
