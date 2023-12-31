'use client';

import { useCallback } from 'react';
import { useCompanyInfo } from '~/src/app/shared/hooks/useCompanyInfo';
import { getCompanyOrders } from '../services';
import { useQuery } from 'react-query';
import { useAuthController } from '../../auth/controller';

const timeToRefetchCache = 1000 * 60 * 60 * 1; // 1 hora

export const useOrderController = () => {
  const { logout } = useAuthController();
  const { company } = useCompanyInfo();

  const getLastTenOrders = useCallback(async () => {
    return await getCompanyOrders(company.cnpj, logout);
  }, [company.cnpj, logout]);

  const { data: lastTenNewOrders } = useQuery('lastTenNewOrders', getLastTenOrders, {
    staleTime: timeToRefetchCache
  });

  return {
    lastTenNewOrders
  };
};
