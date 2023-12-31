'use client';

import { Template } from '~/src/app/shared/components/Template';
import { Title } from '~/src/app/shared/components/Title';
import { Productcards } from '../../Productcards';
import { orderLastProductsTv } from '../OrderTV';
import { useOrderController } from '../controller';

export function OrderLastProducts() {
  const { lastTenNewOrders } = useOrderController();

  return (
    <Template overflow="scroll-y" className={orderLastProductsTv()}>
      <Title as="h4" title="Últimos 12 Pedidos" size="lg" weight="light" color="white" />

      {lastTenNewOrders && <Productcards.content productCard={lastTenNewOrders} />}
    </Template>
  );
}
