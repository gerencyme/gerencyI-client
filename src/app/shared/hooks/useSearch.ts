import { ChangeEvent, useMemo, useState } from 'react';
import { ProductCard } from '../types/ProductCard';

/**
 * @param data must be a array to be filtered
 */

export const useSearch = (data: ProductCard[]) => {
  const [search, setSearch] = useState('');

  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearch(value.toLowerCase());
  };

  const filteredData = useMemo(() => {
    return search.length > 0
      ? data.filter((item) => item.productName.toLowerCase().match(new RegExp(search, 'i')))
      : data;
  }, [data, search]);

  return { onchange, search, filteredData };
};
