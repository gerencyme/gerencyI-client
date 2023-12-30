'use client';

import { useCallback } from 'react';
import { useCompanyInfo } from '~/src/app/shared/hooks/useCompanyInfo';
import { getCompanyOrders } from '../services';
import { useQuery } from 'react-query';

const timeToRefetchCache = 1000 * 60 * 60 * 1; // 1 hora

export const useOrderController = () => {
  const { company } = useCompanyInfo();

  const getLastTenOrders = useCallback(async () => {
    return await getCompanyOrders(company.cnpj);
  }, [company.cnpj]);

  const { data: lastTenNewOrders } = useQuery('lastTenNewOrders', getLastTenOrders, {
    staleTime: timeToRefetchCache
  });

  return {
    lastTenNewOrders
  };
};
