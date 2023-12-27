import { useCallback, useEffect, useState } from 'react';
import { ProductCard } from '../types/ProductCard';

export const useCalculateTotalPrice = (filtaredData: ProductCard[]) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = useCallback(() => {
    const calculatedTotalPrice = filtaredData.reduce(
      (acc, product) => acc + +product.totalPrice,
      0
    );
    setTotalPrice(calculatedTotalPrice);
  }, [filtaredData]);

  useEffect(() => {
    calculateTotalPrice();
  }, [calculateTotalPrice]);

  return {
    totalPrice
  };
};
