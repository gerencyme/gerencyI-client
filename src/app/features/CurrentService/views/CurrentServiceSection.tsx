'use client';

import { ServiceCard } from '~/src/app/shared/components/ServiceCard';
import { useCurrentServiceController } from '../controller';
import { serviceCardInfoCardInfo } from '../CurrentServiceUtils';

export function CurrentServiceSection() {
  const { handleActionClick } = useCurrentServiceController();
  return (
    <ServiceCard.root>
      <ServiceCard.title title="Gestão de Estoque" />
      <ServiceCard.price price={300} />
      <ServiceCard.infoCard dataCards={serviceCardInfoCardInfo} />
      <ServiceCard.action label="Consultar" onClick={handleActionClick} />
    </ServiceCard.root>
  );
}
