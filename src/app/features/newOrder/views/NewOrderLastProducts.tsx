'use client';

import { Productcards } from '../../Productcards';
import { Template } from '~shared/components/Template';
import { Title } from '~shared/components/Title';
import { newOrderLastProductsTv } from '../NewOrderTV';
import { useNewOrderController } from '../controller';

export function NewOrderLastProducts() {
  const { lastTwoTen } = useNewOrderController();

  return (
    <Template overflow="scroll-y" className={newOrderLastProductsTv()}>
      <Title
        as="h4"
        title={
          lastTwoTen?.length ? 'Últimos 12 Pedidos' : 'Seus 12 últimos pedidos aparecerão aqui'
        }
        size="lg"
        weight="light"
        color="white"
      />
      <Productcards.content />
    </Template>
  );
}
