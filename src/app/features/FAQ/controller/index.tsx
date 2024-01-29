import { useCallback, useState } from 'react';
import { FaqItem } from '~/src/app/FAQApi/FAQApiUtils';
import { useQuery } from 'react-query';
import { FAQApi } from '~/src/app/shared/services/axios/api';
import { CollapsableContent } from '~/src/app/shared/types';
import { transformData } from '../FAQUtils';

const timeToRefetchCache = 1000 * 60 * 60 * 12; // 12 horas

export const useFAQController = () => {
  const [selecionedCollapsible, setSelecionedCollapsible] = useState<CollapsableContent | null>(
    null
  );

  const toggle = (item: CollapsableContent) => {
    if (item.id === selecionedCollapsible?.id) {
      setSelecionedCollapsible(null);
    } else {
      setSelecionedCollapsible(item);
    }
  };

  const loadData = useCallback(async () => {
    const endpoint = '/FAQApi';
    const res = await FAQApi.get<FaqItem[]>(endpoint);

    return res.data;
  }, []);

  const { data } = useQuery('FAQ', loadData, {
    staleTime: timeToRefetchCache
  });

  const FaqItems = transformData(data as FaqItem[], toggle, selecionedCollapsible);

  return {
    FaqItems,
    selecionedCollapsible
  };
};
