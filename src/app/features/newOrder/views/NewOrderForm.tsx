'use client';

import { Input } from '~shared/components/Input';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { TbBrandItch } from 'react-icons/tb';
import { TiStarburstOutline } from 'react-icons/ti';
import { Title } from '~/src/app/shared/components/Title';
import { FormProvider } from 'react-hook-form';
import { useNewOrderController } from '../controller';
import { NewOrderAction } from './NewOrderAction';
import { CgStyle } from 'react-icons/cg';
import { useEffect } from 'react';
import { Graphics } from '~/src/app/shared/components/Graphics';
import { Text } from '~/src/app/shared/components/Text';
import { draftMode } from '~/src/app/shared/utils/constants/draftMode';
import { localStorageOrderSketch } from '~/src/app/shared/utils/constants/localStorageOrderSketch';

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
    deleteFromStorage,
    orderSchema,
    color
  } = useNewOrderController();

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

    if (shoulRemoveDraft) {
      deleteFromStorage(localStorageOrderSketch);
      debouncedDesableDraftMode();
      resetColor();
      setLocalStorage(draftMode, false);
    }
  }, [
    color,
    debouncedDesableDraftMode,
    deleteFromStorage,
    resetColor,
    setLocalStorage,
    updateDraft,
    watch
  ]);

  return (
    <FormProvider {...orderSchema}>
      <div className="absolute -top-0 lg:-top-48 pr-2 w-full lg:w-screen left-1 overflow-x-auto">
        <Title
          as="h4"
          title="Os mais pedidos no seu segmento"
          weight="light"
          color="white"
          className="text-md md:text-lg"
        />
        <Graphics.bestSellers
          handleSetToDraft={handleSetToDraft}
          cursor="pointer"
          hasFunction
          bgColor="easydark"
        />

        <Text
          text="Basta clicar em um produto, selecionar marca, quantidade e enviar para análise"
          color="white"
          weight="light"
          className="hidden min-[500px]:flex text-sm pt-2"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 md:gap-6 w-full max-[480px]:translate-y-6 md:translate-y-6"
      >
        <Title
          title="Informações do seu novo pedido"
          weight="light"
          color="white"
          className="text-md md:text-lg"
        />

        <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 justify-center">
          <div className="flex flex-col gap-4 md:gap-6">
            <Input.root size="full" field="productName">
              <Input.field name="productName" placeholder="Qual o nome do produto?" />
              <Input.label label="Produto" name="productName" />
              <Input.representation icon={MdProductionQuantityLimits} />
              <Input.error field="productName" />
            </Input.root>

            <Input.root size="full" field="productType">
              <Input.field name="productType" placeholder="Qual o tipo do produto?" />
              <Input.label label="Tipo" name="productType" />
              <Input.representation icon={CgStyle} />
              <Input.error field="productType" />
            </Input.root>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <Input.root size="full" field="productBrand">
              <Input.field name="productBrand" placeholder="Qual a marca do produto?" />
              <Input.label label="Marca" name="productBrand" />
              <Input.representation icon={TbBrandItch} />
              <Input.error field="productBrand" />
            </Input.root>

            <Input.root size="full" field="quantity">
              <Input.field
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

        <NewOrderAction />
      </form>
    </FormProvider>
  );
}
