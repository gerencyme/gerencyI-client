import { formatPrice } from '~utils/transformers';
import { Text } from '../../Text';

interface ServiceCardPriceProps {
  price: string | number;
}

export function ServiceCardPrice({ price }: ServiceCardPriceProps) {
  const formattedPrice = formatPrice(price);

  return <Text text={formattedPrice} fontFamily="rosarivo" size="xl" />;
}
