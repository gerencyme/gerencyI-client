import { useState } from 'react';

export const useProductsController = () => {
  const [isTable, setIsTable] = useState(true);
  const [isPressable, setIsPressable] = useState(false);

  const togglePress = () => setIsPressable((prev) => !prev);

  return {
    isTable,
    isPressable,
    togglePress,
    setIsTable
  };
};
