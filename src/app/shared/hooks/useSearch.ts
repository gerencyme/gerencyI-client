import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useTimeout } from './useTimeout';
import { ProductCard } from '../types/ProductCard';

/**
 * @param data must be a array to be filtered
 */

export const useSearch = (data: ProductCard[]) => {
  const [isTyping, setIsTyping] = useState(false);
  const [search, setSearch] = useState('');

  const situation = isTyping;
  const updateSituation = useCallback(() => {
    setIsTyping(false);
  }, []);

  useTimeout(situation, updateSituation, 1500);

  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setIsTyping(true);
    setSearch(value.toLowerCase());
  };

  const filteredData = useMemo(() => {
    return search.length > 0
      ? data.filter((item) => item.productName.toLowerCase().match(new RegExp(search, 'i')))
      : data;
  }, [data, search]);

  return { onchange, search, filteredData, isTyping };
};
