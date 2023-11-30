import { ServiceCardInfoCardInfo } from '~types/ServiceCardInfoCardInfo';
import { Text } from '../../Text';
import { serviceCardInfoCardTv } from '../ServiceCardTV';

interface ServiceCardInfoCardProps {
  dataCards: ServiceCardInfoCardInfo[];
}

export function ServiceCardInfoCard({ dataCards = [] }: ServiceCardInfoCardProps) {
  return (
    <>
      {dataCards.map((card, i) => (
        <div key={i} className={serviceCardInfoCardTv()}>
          <div className="absolute top-1/3 left-0 bg-secondary h-8 w-1" />
          <Text weigth="bold" size="sm" color="white" text={card.title} />
          <Text weigth="bold" size="xs" text={card.textInfo} className="text-white/75" />
          <div className="absolute top-1/3 right-0 bg-secondary h-8 w-1" />
        </div>
      ))}
    </>
  );
}
