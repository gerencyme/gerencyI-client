import { formateDate } from '~utils/dates';
import { Text } from '../../Text';
import * as tv from '../FavoriteCardTV';

interface FavoriteCardHeaderProps {
  date?: string | Date;
  productName: string;
  productBrand: string;
}

export function FavoriteCardHeader({ date, productBrand, productName }: FavoriteCardHeaderProps) {
  const formattedDate = date && formateDate(date);

  return (
    <div className={tv.favoriteCardHeaderTv()}>
      {date && <Text text={String(formattedDate)} size="xs" weight="light" />}
      <Text
        text={productName}
        size="md"
        weight="bold"
        className={tv.favoriteCardHeaderFavoriteNameTv()}
      />
      <Text
        text={productBrand}
        size="sm"
        weight="light"
        className={tv.favoriteCardHeaderFavoriteBrandTv()}
      />
    </div>
  );
}
