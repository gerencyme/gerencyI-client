import { ProductCardIdentifyColor } from './views/ProductCardIdentifyColor';
import { ProductCardContentInfo } from './views/ProductCardContentInfo';
import { ProductCardHeader } from './views/ProductCardHeader';
import { ProductCardRoot } from './views/ProductCardRoot';
import { ProductCardSimiliarCompanies } from './views/ProductCardSimiliarCompanies';
import { ProductCardActions } from './views/ProductCardActions';
import { ProductCardStatus } from './views/ProductCardStatus';

export const ProductCard = {
  root: ProductCardRoot,
  identify: ProductCardIdentifyColor,
  header: ProductCardHeader,
  contentInfo: ProductCardContentInfo,
  similarCompanies: ProductCardSimiliarCompanies,
  actions: ProductCardActions,
  status: ProductCardStatus
};
