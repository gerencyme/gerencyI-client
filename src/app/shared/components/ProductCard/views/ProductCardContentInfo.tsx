import { formatPrice } from '~utils/transformers';
import { Text } from '../../Text';

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
      <div className="text-center truncate w-full rounded ring-1 ring-purple px-4 py-1 bg-easydark">
        <Text text={`${quantity} unidades`} weight="light" size="sm" color="white" />
      </div>
      <div className="text-center truncate w-full rounded ring-1 ring-purple px-4 py-1 bg-easydark">
        <Text text="Buscando o melhor preço..." weight="light" size="sm" color="white" />
      </div>
    </>
  ) : (
    <>
      <div className="text-center truncate w-full flex items-center justify-between rounded ring-1 ring-purple px-4 py-1 bg-easydark">
        <Text text={`${quantity} unidades`} weight="light" size="sm" color="white" />
        <Text text={formattedTotalPrice} weight="light" size="sm" color="white" />
      </div>
      <div className="text-center flex justify-between truncate w-full rounded ring-1 ring-purple px-4 py-1 bg-easydark">
        <Text text="A unidade" weight="light" size="sm" color="white" />
        <Text text={formattedUnitPrice} weight="light" size="sm" color="white" />
      </div>
    </>
  );

  return <div className="flex flex-col justify-center items-center gap-2 w-full">{content}</div>;
}
