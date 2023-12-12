import { formateDate } from '~utils/dates';
import { Text } from '../../Text';

interface ProductCardHeaderProps {
  date: number | Date;
  productName: string;
  productBrand: string;
}

export function ProductCardHeader({ date, productBrand, productName }: ProductCardHeaderProps) {
  return (
    <div className="felx flex-col text-center items-center justify-center w-36 m-auto">
      <Text text={formateDate(date)} color="white" size="xs" weight="light" />
      <Text text={productName} color="white" size="md" weight="bold" className="truncate w-36" />
      <Text
        text={productBrand}
        color="white"
        size="sm"
        weight="light"
        className="truncate w-36 text-center"
      />
    </div>
  );
}
