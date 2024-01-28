'use client';

import { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSelectColor } from '~hooks/contexts/useSelectColor';
import { useCoordinates } from '~hooks/useCoordinates';
import { useLocalStorage } from '~hooks/useLocalStorage';
import { ModalContentAction } from '~types/ModalContentAction';
import { localStorageOrderSketch } from '~utils/constants/localStorageOrderSketch';
import { NewOrderRequest } from '~types/requests/NewOrderRequest';
import { useCompanyInfo } from '~hooks/useCompanyInfo';
import { useDraftMode } from '~hooks/contexts/useDraftMode';
import { draftMode } from '~utils/constants/draftMode';
import { BestSellersData } from '~types/graphics/BestSellersData';
import { TNewOrder } from '~shared/types/TNewOrder';
import { TNewOrderSchema, newOrderSchema } from '../NewOrderUtils';
import { getLast12CompanyOrders, postNewOrder } from '../service';
import { useAuthController } from '../../auth/controller';

const timeToRefetchCache = 1000 * 60 * 60 * 1; // 1 hora

export const useNewOrderController = () => {
  const errorResolver = () => setShowLocationGuide(true);

  const { latitude, longitude } = useCoordinates(errorResolver);
  const { company } = useCompanyInfo();
  const { color, onChange } = useSelectColor();
  const { logout } = useAuthController();
  const { resetColor } = useSelectColor();
  const { debouncedDraftMode, debouncedDesableDraftMode } = useDraftMode();
  const { getLocalStorage, deleteFromStorage, setLocalStorage } = useLocalStorage();

  const [showLocationGuide, setShowLocationGuide] = useState(false);

  const oderSketched: NewOrderRequest = getLocalStorage(localStorageOrderSketch);
  const choisedColor = oderSketched?.orderColorIdentity ?? color;
  const replacedColor = choisedColor.replace('#', '').toUpperCase();
  const product = oderSketched?.product;

  const defaultValues: TNewOrderSchema = useMemo(
    () => ({
      productBrand: product?.productBrand ?? '',
      productName: product?.productName ?? '',
      productType: product?.productType ?? '',
      quantity: product?.quantity ?? 10
    }),
    [product?.productBrand, product?.productName, product?.productType, product?.quantity]
  );

  const orderSchema = useForm<TNewOrderSchema>({
    resolver: zodResolver(newOrderSchema),
    defaultValues
  });

  const {
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isSubmitting }
  } = orderSchema;

  const newOrder = useCallback(
    ({
      orderColorIdentity,
      data,
      productBrand,
      productName,
      quantity,
      productType
    }: TNewOrder) => ({
      companyId: company?.id,
      companieCNPJ: company?.cnpj,
      orderDate: new Date(),
      orderColorIdentity: orderColorIdentity,
      product: {
        productName: productName ?? data?.productName,
        productBrand: productBrand ?? data?.productBrand,
        productType: productType ?? data?.productType,
        quantity: quantity ?? data?.quantity,
        lastTotalPrice: 0
      },
      location: {
        latitude,
        longitude
      }
    }),
    [company?.cnpj, company?.id, latitude, longitude]
  );

  const updateDraft = useCallback(
    ({ orderColorIdentity, productBrand, productName, productType, quantity }: TNewOrder) => {
      const newOrderProps: TNewOrder = {
        orderColorIdentity,
        productBrand,
        productName,
        productType,
        quantity
      };

      setLocalStorage(localStorageOrderSketch, newOrder(newOrderProps));
      debouncedDraftMode();
      setLocalStorage(draftMode, true);
    },
    [debouncedDraftMode, newOrder, setLocalStorage]
  );

  const clearForm = useCallback(() => {
    reset({
      productBrand: '',
      productName: '',
      productType: '',
      quantity: 10
    });

    deleteFromStorage(localStorageOrderSketch);
    debouncedDesableDraftMode();
    setLocalStorage(draftMode, false);
    resetColor();
  }, [debouncedDesableDraftMode, deleteFromStorage, reset, resetColor, setLocalStorage]);

  const getLastTwoTenOrders = useCallback(async () => {
    if (company) {
      return await getLast12CompanyOrders(company?.cnpj, logout);
    }
  }, [company, logout]);

  const handleSetToDraft = (i: number, data: BestSellersData[]) => {
    const productBrand = data[i].productBrand ?? '';
    const productName = data[i].name;
    const productType = data[i].productType;
    const quantity = product?.quantity ?? 10;

    updateDraft({
      orderColorIdentity: oderSketched?.orderColorIdentity ?? color,
      productBrand,
      productName,
      productType,
      quantity
    });

    setValue('productBrand', productBrand);
    setValue('productName', productName);
    setValue('productType', productType);
    setValue('quantity', quantity);
  };

  const createOrder = useMemo(
    () =>
      (order: NewOrderRequest, newQuantity?: number): NewOrderRequest => ({
        companieCNPJ: company?.cnpj,
        companyId: order.companyId,
        location: {
          latitude,
          longitude
        },
        product: {
          productBrand: order.product.productBrand,
          quantity: newQuantity ?? order.product.quantity,
          lastTotalPrice: order.product.lastTotalPrice,
          productName: order.product.productName,
          productType: order.product.productType
        },
        orderColorIdentity: order.orderColorIdentity,
        orderDate: new Date(),
        orderId: order.orderId
      }),
    [company?.cnpj, latitude, longitude]
  );

  const {
    data: lastTwoTen,
    isLoading,
    refetch
  } = useQuery('lastTwoTen', getLastTwoTenOrders, {
    staleTime: timeToRefetchCache,
    refetchOnWindowFocus: false
  });

  const sendNewOrder = useCallback(
    async (
      order: NewOrderRequest,
      newQuantity?: number,
      clearForm?: () => void
    ): Promise<NewOrderRequest | undefined> => {
      try {
        const newOrder = createOrder(order, newQuantity);

        const resolver = () => {
          refetch();
          clearForm?.();
        };

        return await postNewOrder(newOrder, resolver);
      } catch (err) {
        toast.error(
          'Não foi possível enviar seu pedido para análise. Por favor, tente mais tarde!'
        );
      }
    },
    [createOrder, refetch]
  );

  const onSubmit = useCallback(
    async (data: TNewOrderSchema) => {
      if (longitude === 0 || latitude === 0) {
        return setShowLocationGuide(true);
      }

      const newOrderData = newOrder({
        data,
        orderColorIdentity: color
      });

      return await sendNewOrder(newOrderData as NewOrderRequest, data.quantity, clearForm);
    },

    [longitude, latitude, color, newOrder, sendNewOrder, clearForm]
  );

  const actions: ModalContentAction[] = [
    {
      id: 0,
      color: 'primary',
      label: 'Fechar',
      onClick: () => setShowLocationGuide(false)
    }
  ];

  return {
    onSubmit,
    onChange,
    handleSubmit,
    watch,
    newOrder,
    updateDraft,
    setValue,
    handleSetToDraft,
    clearForm,
    debouncedDesableDraftMode,
    resetColor,
    setLocalStorage,
    deleteFromStorage,
    reset,
    sendNewOrder,
    lastTwoTen,
    isLoading,
    oderSketched,
    actions,
    showLocationGuide,
    isSubmitting,
    orderSchema,
    replacedColor,
    choisedColor,
    color
  };
};
