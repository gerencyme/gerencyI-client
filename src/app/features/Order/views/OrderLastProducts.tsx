import { Template } from '~/src/app/shared/components/Template';
import { Title } from '~/src/app/shared/components/Title';
import { Productcards } from '../../Productcards';
import { mockedProductCardContent } from '../../Productcards/ProductCardsUtils';
import { orderLastProductsTv } from '../OrderTV';

export function OrderLastProducts() {
  return (
    <Template overflow="scroll-y" className={orderLastProductsTv()}>
      <Title as="h4" title="Últimos Pedidos" size="lg" weight="light" color="white" />

      <Productcards.content productCard={mockedProductCardContent} />
    </Template>
  );
}
