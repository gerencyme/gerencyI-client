import { formateDate } from '~utils/dates';
import { Text } from '../../Text';
import { productCardHeaderTv } from '../ProductCardTV';

interface ProductCardHeaderProps {
  date: number | Date;
  productName: string;
  productBrand: string;
}

export function ProductCardHeader({ date, productBrand, productName }: ProductCardHeaderProps) {
  return (
    <div className={productCardHeaderTv()}>
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
