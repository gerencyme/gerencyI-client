'use client';

import { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelectColor } from '~/src/app/shared/hooks/contexts/useSelectColor';
import { useCoordinates } from '~/src/app/shared/hooks/useCoordinates';
import { useLocalStorage } from '~/src/app/shared/hooks/useLocalStorage';
import { ModalContentAction } from '~/src/app/shared/types/ModalContentAction';
import { localStorageOrderSketch } from '~/src/app/shared/utils/constants/localStorageOrderSketch';
import { TNewOrderSchema, newOrderSchema } from '../NewOrderUtils';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewOrderRequest } from '~/src/app/shared/types/requests/NewOrderRequest';
import { useCompanyInfo } from '~/src/app/shared/hooks/useCompanyInfo';
import { useDraftMode } from '~/src/app/shared/hooks/contexts/useDraftMode';
import { Color } from 'react-pick-color';
import { draftMode } from '~/src/app/shared/utils/constants/draftMode';
import { BestSellersData } from '~/src/app/shared/types/graphics/BestSellersData';
import { postNewOrder } from '../service';

type TNewOrder = {
  orderColorIdentity?: Color;
  data?: TNewOrderSchema;
  productBrand?: string;
  productName?: string;
  quantity?: number;
  productType?: string;
};

export const useNewOrderController = () => {
  const errorResolver = () => setShowLocationGuide(true);

  const { latitude, longitude } = useCoordinates(errorResolver);
  const { company } = useCompanyInfo();
  const { resetColor } = useSelectColor();
  const { debouncedDraftMode, debouncedDesableDraftMode } = useDraftMode();
  const { color, onChange } = useSelectColor();
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
      companyId: company.id,
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

  const clearForm = () => {
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
  };

  const onSubmit = async (data: TNewOrderSchema) => {
    if (longitude === 0 || latitude === 0) {
      return setShowLocationGuide(true);
    }

    const newOrderData = newOrder({
      data,
      orderColorIdentity: color
    });

    postNewOrder(newOrderData as NewOrderRequest, clearForm);
  };

  const actions: ModalContentAction[] = [
    {
      id: 0,
      color: 'primary',
      label: 'Fechar',
      onClick: () => setShowLocationGuide(false)
    }
  ];

  const handleSetToDraft = (i: number, data: BestSellersData[]) => {
    const productBrand = product?.productBrand ?? '';
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
