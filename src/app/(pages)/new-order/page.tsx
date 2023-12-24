import { NewOrder } from '~features/newOrder';
import { Productcards } from '~features/Productcards';
import { Title } from '~shared/components/Title';
import { Template } from '~shared/components/Template';

export default function NewOrderPage() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 max-w-7xl m-auto py-8">
      <NewOrder.root>
        <NewOrder.locationGuide />

        <NewOrder.HalfContainer>
          <NewOrder.draftMode />
          <NewOrder.form />
          <NewOrder.ColorIdentity />
        </NewOrder.HalfContainer>

        <NewOrder.HalfContainer>
          <NewOrder.information />
        </NewOrder.HalfContainer>
      </NewOrder.root>

      <Template overflow="scroll-y" className="h-full max-h-[520px] relative">
        <Title as="h4" title="Últimos Pedidos" size="lg" weight="light" color="white" />

        <Productcards.content />
      </Template>
    </div>
  );
}
