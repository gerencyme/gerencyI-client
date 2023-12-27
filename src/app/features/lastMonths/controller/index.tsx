import { useState } from 'react';
import { useCalculateTotalPrice } from '~/src/app/shared/hooks/useCalculateTotalPrice';
import { ProductCard } from '~/src/app/shared/types/ProductCard';

export const useLastMonthsController = (filtaredData: ProductCard[]) => {
  const [isExpensesVisible, setIsExpensesVisible] = useState(true);

  const toggleExpenses = () => setIsExpensesVisible((prev) => !prev);

  const { totalPrice } = useCalculateTotalPrice(filtaredData);

  return {
    toggleExpenses,
    isExpensesVisible,
    totalPrice
  };
};
