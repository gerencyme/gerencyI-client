import { ServiceCard } from '~/src/app/shared/components/ServiceCard';
import { serviceCardInfoCardInfo } from '../CurrentServiceUtils';

export function CurrentServiceSection() {
  return (
    <ServiceCard.root>
      <ServiceCard.title title="Gestão de Estoque" />
      <ServiceCard.price price={0} />
      <ServiceCard.infoCard dataCards={serviceCardInfoCardInfo} />
      <ServiceCard.action label="Participar do MVP" />
    </ServiceCard.root>
  );
}
