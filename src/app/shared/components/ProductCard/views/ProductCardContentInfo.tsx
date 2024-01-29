import { formatPrice } from '~utils/transformers';
import { Text } from '../../Text';
import * as tv from '../ProductCardTV';

interface ProductCardContentInfoProps {
  quantity: string | number;
  unitPrice: string | number;
  totalPrice: string | number;
  isUnderAnalysis: boolean;
}

export function ProductCardContentInfo({
  quantity,
  unitPrice,
  totalPrice,
  isUnderAnalysis = false
}: ProductCardContentInfoProps) {
  const formattedTotalPrice = formatPrice(totalPrice);
  const formattedUnitPrice = formatPrice(unitPrice);

  const content = isUnderAnalysis ? (
    <>
      <div className={tv.productCardContentInfoUnderAnalysisTv()}>
        <Text text={`${quantity} unidades`} weight="light" size="sm" />
      </div>
      <div className={tv.productCardContentInfoUnderAnalysisTv()}>
        <Text text="Buscando o melhor preço..." weight="light" size="sm" />
      </div>
    </>
  ) : (
    <>
      <div className={tv.productCardContentInfoTv()}>
        <Text text={`${quantity} unidades`} weight="light" size="sm" />
        <Text text={formattedTotalPrice} weight="light" size="sm" />
      </div>
      <div className={tv.productCardContentInfoTv()}>
        <Text text="A unidade" weight="light" size="sm" />
        <Text text={formattedUnitPrice} weight="light" size="sm" />
      </div>
    </>
  );

  return <div className={tv.productCardContentInfoRootTv()}>{content}</div>;
}
