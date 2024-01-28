'use client';

import { Input } from '~shared/components/Input';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { TbBrandItch } from 'react-icons/tb';
import { TiStarburstOutline } from 'react-icons/ti';
import { Title } from '~/src/app/shared/components/Title';
import { FormProvider } from 'react-hook-form';
import { useNewOrderController } from '../controller';
import { NewOrderActions } from './NewOrderActions';
import { CgStyle } from 'react-icons/cg';
import { useCallback, useEffect } from 'react';
import { draftMode } from '~/src/app/shared/utils/constants/draftMode';
import { localStorageOrderSketch } from '~/src/app/shared/utils/constants/localStorageOrderSketch';
import { NewOrderBestSellers } from './NewOrderBestSellers';
import { newOrderFormContentTv, newOrderFormInputsTv, newOrderFormWrapperTv } from '../NewOrderTV';

export function NewOrderForm() {
  const {
    handleSubmit,
    onSubmit,
    watch,
    updateDraft,
    handleSetToDraft,
    debouncedDesableDraftMode,
    resetColor,
    setLocalStorage,
    setValue,
    deleteFromStorage,
    orderSchema,
    showLocationGuide,
    color
  } = useNewOrderController();

  const clearDraft = useCallback(() => {
    deleteFromStorage(localStorageOrderSketch);
    debouncedDesableDraftMode();
    resetColor();
    setLocalStorage(draftMode, false);
  }, [debouncedDesableDraftMode, deleteFromStorage, resetColor, setLocalStorage]);

  useEffect(() => {
    const productName = watch('productName');
    const productBrand = watch('productBrand');
    const productType = watch('productType');
    const quantity = watch('quantity');

    const shoulActiveDraft =
      productName !== '' || productBrand !== '' || productType !== '' || quantity !== 10;

    const shoulRemoveDraft =
      productName === '' && productBrand === '' && productType === '' && quantity === 10;

    if (shoulActiveDraft) {
      return updateDraft({
        orderColorIdentity: color,
        productBrand,
        productName,
        productType,
        quantity
      });
    }

    if (shoulRemoveDraft) return clearDraft();
  }, [
    color,
    clearDraft,
    debouncedDesableDraftMode,
    deleteFromStorage,
    resetColor,
    setLocalStorage,
    updateDraft,
    watch
  ]);

  const discartDraft = () => {
    setValue('productBrand', '');
    setValue('productName', '');
    setValue('productType', '');
    setValue('quantity', 10);

    clearDraft();
  };

  return (
    <FormProvider {...orderSchema}>
      <NewOrderBestSellers handleSetToDraft={handleSetToDraft} />
      <form onSubmit={handleSubmit(onSubmit)} className={newOrderFormWrapperTv()}>
        <Title
          title="Informações do seu novo pedido"
          weight="light"
          color="white"
          className="text-md md:text-lg"
        />

        <div className={newOrderFormContentTv()}>
          <div className={newOrderFormInputsTv()}>
            <Input.root size="full" field="productName">
              <Input.field
                readOnly={showLocationGuide}
                name="productName"
                placeholder="Qual o nome do produto?"
              />
              <Input.label label="Produto" name="productName" />
              <Input.representation icon={MdProductionQuantityLimits} />
              <Input.error field="productName" />
            </Input.root>

            <Input.root size="full" field="productType">
              <Input.field
                readOnly={showLocationGuide}
                name="productType"
                placeholder="Qual o tipo do produto?"
              />
              <Input.label label="Tipo" name="productType" />
              <Input.representation icon={CgStyle} />
              <Input.error field="productType" />
            </Input.root>
          </div>

          <div className={newOrderFormInputsTv()}>
            <Input.root size="full" field="productBrand">
              <Input.field
                readOnly={showLocationGuide}
                name="productBrand"
                placeholder="Qual a marca do produto?"
              />
              <Input.label label="Marca" name="productBrand" />
              <Input.representation icon={TbBrandItch} />
              <Input.error field="productBrand" />
            </Input.root>

            <Input.root size="full" field="quantity">
              <Input.field
                readOnly={showLocationGuide}
                defaultValue={10}
                min={10}
                max={1000}
                type="number"
                name="quantity"
                placeholder="10"
              />
              <Input.label label="Quantos?" name="quantity" />
              <Input.representation icon={TiStarburstOutline} />
              <Input.error field="quantity" />
            </Input.root>
          </div>
        </div>

        <NewOrderActions discartDraft={discartDraft} />
      </form>
    </FormProvider>
  );
}
