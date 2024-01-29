import { ServiceCardInfoCardInfo } from '~types/ServiceCardInfoCardInfo';
import { Text } from '../../Text';
import * as tv from '../ServiceCardTV';

interface ServiceCardInfoCardProps {
  dataCards: ServiceCardInfoCardInfo[];
}

export function ServiceCardInfoCard({ dataCards = [] }: ServiceCardInfoCardProps) {
  return (
    <>
      {dataCards.map((card, i) => {
        return (
          <div key={i} className={tv.serviceCardInfoCardTv()}>
            <div className={tv.serviceCardLeftDetailTv()} />
            <Text weight="bold" size="sm" text={card.title} />
            <Text
              weight="bold"
              size="xs"
              text={card.textInfo}
              className={tv.serviceCardTextInfoTv()}
            />
            <div className={tv.serviceCardRightDetailTv()} />
          </div>
        );
      })}
    </>
  );
}
