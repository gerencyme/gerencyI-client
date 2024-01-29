import { formateDate } from '~utils/dates';
import { Text } from '../../Text';
import * as tv from '../ProductCardTV';

interface ProductCardHeaderProps {
  date: string | Date;
  productName: string;
  productBrand: string;
}

export function ProductCardHeader({ date, productBrand, productName }: ProductCardHeaderProps) {
  const formattedDate = formateDate(date);

  return (
    <div className={tv.productCardHeaderTv()}>
      <Text text={String(formattedDate)} size="xs" weight="light" />
      <Text
        text={productName}
        size="md"
        weight="bold"
        className={tv.productCardHeaderProductNameTv()}
      />
      <Text
        text={productBrand}
        size="sm"
        weight="light"
        className={tv.productCardHeaderProductBrandTv()}
      />
    </div>
  );
}
