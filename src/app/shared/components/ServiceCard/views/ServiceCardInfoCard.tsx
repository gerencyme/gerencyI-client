import { ServiceCardInfoCardInfo } from '~types/ServiceCardInfoCardInfo';
import { Text } from '../../Text';
import { serviceCardInfoCardTv } from '../ServiceCardTV';

interface ServiceCardInfoCardProps {
  dataCards: ServiceCardInfoCardInfo[];
}

export function ServiceCardInfoCard({ dataCards = [] }: ServiceCardInfoCardProps) {
  return (
    <>
      {dataCards.map((card, i) => {
        const randomDelay = `${Math.random()}s`;

        return (
          <div key={i} className={serviceCardInfoCardTv()}>
            <div
              className="animate-[shimmer_1000ms_infinite] absolute inset-0 bg-gradient-to-r to-transparent via-white from-transparent delay-1000"
              style={{ animationDelay: randomDelay }}
            />
            <div className="absolute top-1/3 left-0 bg-secondary h-8 w-1" />
            <Text weight="bold" size="sm" color="white" text={card.title} />
            <Text weight="bold" size="xs" text={card.textInfo} className="text-white/75" />
            <div className="absolute top-1/3 right-0 bg-secondary h-8 w-1" />
          </div>
        );
      })}
    </>
  );
}
