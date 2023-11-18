import { useCallback, useState } from 'react';
import { FaqItem } from '~/src/app/FAQApi/FAQApiUtils';
import { usePromise } from '~/src/app/shared/hooks/usePromise';
import { FAQApi } from '~/src/app/shared/services/axios/api';
import { CollapsableContent } from '~/src/app/shared/types';
import { transformData } from '../FAQUtils';

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

  const { data } = usePromise(loadData);

  const FaqItems = transformData(data, toggle, selecionedCollapsible);

  return {
    FaqItems,
    selecionedCollapsible
  };
};
