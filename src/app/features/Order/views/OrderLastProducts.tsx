'use client';

import { Template } from '~/src/app/shared/components/Template';
import { Title } from '~/src/app/shared/components/Title';
import { Productcards } from '../../Productcards';
import { orderLastProductsTv } from '../OrderTV';
import { useOrderController } from '../controller';
import { ProductCard } from '~/src/app/shared/types/ProductCard';

export function OrderLastProducts() {
  const { lastTenNewOrders } = useOrderController();

  return (
    <Template overflow="scroll-y" className={orderLastProductsTv()}>
      <Title
        as="h4"
        title={
          lastTenNewOrders?.length
            ? 'Últimos 12 Pedidos'
            : 'Seus 12 últimos pedidos aparecerão aqui'
        }
        size="lg"
        weight="light"
        color="white"
      />
      <Productcards.content productCard={lastTenNewOrders as ProductCard[]} />
    </Template>
  );
}
