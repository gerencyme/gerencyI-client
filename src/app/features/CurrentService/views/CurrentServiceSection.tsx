'use client';

import { ServiceCard } from '~/src/app/shared/components/ServiceCard';
import { serviceCardInfoCardInfo } from '../CurrentServiceUtils';

export function CurrentServiceSection() {
  return (
    <ServiceCard.root>
      <ServiceCard.title title="Gestão de Estoque" />
      <ServiceCard.price price={300} />
      <ServiceCard.infoCard dataCards={serviceCardInfoCardInfo} />
      <ServiceCard.action label="Consultar" />
    </ServiceCard.root>
  );
}
