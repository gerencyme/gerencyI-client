'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
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

  const { company } = useCompanyInfo();
  const { resetColor } = useSelectColor();
  const { debouncedDraftMode, debouncedDesableDraftMode } = useDraftMode();
  const { latitude, longitude } = useCoordinates(errorResolver);
  const { color, onChange } = useSelectColor();
  const { getLocalStorage, deleteFromStorage, setLocalStorage } = useLocalStorage();

  const [showLocationGuide, setShowLocationGuide] = useState(false);

  const oderSketched: NewOrderRequest = getLocalStorage(localStorageOrderSketch);
  const choisedColor = oderSketched?.orderColorIdentity ?? color;
  const replacedColor = choisedColor.replace('#', '').toUpperCase();

  const defaultValues: TNewOrderSchema = useMemo(
    () => ({
      productBrand: oderSketched?.productBrand ?? '',
      productName: oderSketched?.productName ?? '',
      productType: oderSketched?.productType ?? '',
      quantity: oderSketched?.quantity ?? 10
    }),
    [
      oderSketched?.productBrand,
      oderSketched?.productName,
      oderSketched?.productType,
      oderSketched?.quantity
    ]
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

  const productName = watch('productName');

  useEffect(() => {
    if (productName !== '') {
      setValue('productType', productName.split(' ')[0]);
    }
  }, [setValue, productName]);

  const newOrder = useCallback(
    ({
      orderColorIdentity,
      data,
      productBrand,
      productName,
      quantity,
      productType
    }: TNewOrder) => ({
      companieCNPJ: company.cnpj,
      lastTotalPrice: null,
      latitude,
      longitude,
      orderColorIdentity: orderColorIdentity,
      orderDate: new Date(),
      orderId: '', // gerado do lado do servidor,
      productBrand: productBrand ?? data?.productBrand,
      productName: productName ?? data?.productName,
      quantity: quantity ?? data?.quantity,
      productType: productType ?? data?.productType
    }),
    [company?.cnpj, latitude, longitude]
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
      orderColorIdentity: `bg-[${String(color)}]`
    });

    console.log(newOrderData);

    clearForm();
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
    const productBrand = oderSketched?.productBrand ?? '';
    const productName = data[i].name;
    const productType = productName.split(' ')[0];
    const quantity = oderSketched?.quantity ?? 10;

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
