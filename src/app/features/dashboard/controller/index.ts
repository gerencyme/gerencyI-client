'use client';

import { useCallback, useEffect, useState } from 'react';
import { useAuthController } from '../../auth/controller';
import { useCompanyInfo } from '~/src/app/shared/hooks/useCompanyInfo';
import { GetAllOrdersRequest } from '~/src/app/shared/types/requests/getAllOrdersRequest';
import { ProductCard } from '~/src/app/shared/types/ProductCard';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { getAllCompanyOrders } from '../services';

export const useDashboardController = (isVisible?: boolean) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldGetMoreOrders, setShouldGetMoreOrders] = useState(true);
  const [orders, setOrders] = useState<ProductCard[]>([]);

  const { logout } = useAuthController();
  const { company } = useCompanyInfo();

  const getAllOrders = useCallback(async () => {
    setIsLoading(true);
    const config: GetAllOrdersRequest = {
      companieCNPJ: company.cnpj,
      endDate: new Date(),
      orderDate: new Date(),
      pageNumber,
      pageSize: 10,
      startDate: new Date()
    };

    const resolver = (data: ProductCard[]) => {
      setIsLoading(false);
      setOrders((prevOrders) => [...prevOrders, ...data]);

      if (data.length === 0) {
        setShouldGetMoreOrders(false);
        toast.info('Você não tem mais produtos para ser exibido');
      }
    };

    setPageNumber((prevPage) => prevPage + 1);
    return await getAllCompanyOrders(config, resolver, logout);
  }, [company?.cnpj, logout, pageNumber]);

  useEffect(() => {
    if (isVisible && shouldGetMoreOrders) {
      getAllOrders();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const { data: allOrders, isLoading: load } = useMutation(['allOrders'], getAllOrders);

  const loading = isLoading || load;

  const tableData = orders.length ? orders : allOrders;

  return {
    loading,
    tableData
  };
};
