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

export function NewOrderForm() {
  const { handleSubmit, onSubmit, watch, updateDraft, orderSchema, color } =
    useNewOrderController();

  const productName = watch('productName');
  const productBrand = watch('productBrand');
  const productType = watch('productType');
  const quantity = watch('quantity');

  const shoulActiveDraft =
    productName !== '' || productBrand !== '' || productType !== '' || quantity !== 10;

  if (shoulActiveDraft) {
    updateDraft({
      orderColorIdentity: color,
      productBrand,
      productName,
      productType,
      quantity
    });
  }

  return (
    <FormProvider {...orderSchema}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 md:gap-6 w-full">
        <Title title="Informações do seu novo pedido" weight="light" color="white" />

        <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-6">
          <div className="flex flex-col gap-2 md:gap-6">
            <Input.root field="productName">
              <Input.field name="productName" placeholder="Qual o nome do produto?" />
              <Input.label label="Produto" name="productName" />
              <Input.representation icon={MdProductionQuantityLimits} />
              <Input.error field="productName" />
            </Input.root>

            <Input.root field="productType">
              <Input.field name="productType" placeholder="Qual o tipo do produto?" />
              <Input.label label="Tipo" name="productType" />
              <Input.representation icon={CgStyle} />
              <Input.error field="productType" />
            </Input.root>
          </div>

          <div className="flex flex-col gap-2 md:gap-6">
            <Input.root field="productBrand">
              <Input.field name="productBrand" placeholder="Qual a marca do produto?" />
              <Input.label label="Marca" name="productBrand" />
              <Input.representation icon={TbBrandItch} />
              <Input.error field="productBrand" />
            </Input.root>

            <Input.root field="quantity">
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
