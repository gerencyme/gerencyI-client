import { ProductCardIdentifyColor } from './views/ProductCardIdentifyColor';
import { ProductCardContentInfo } from './views/ProductCardContentInfo';
import { ProductCardHeader } from './views/ProductCardHeader';
import { ProductCardRoot } from './views/ProductCardRoot';
import { ProductCardSimiliarCompanies } from './views/ProductCardSimiliarCompanies';
import { ProductCardActions } from './views/ProductCardActions';
import { ProductCardStatus } from './views/ProductCardStatus';
import { ProductCardLikeAction } from './views/ProductCardLikeAction';

export const ProductCard = {
  root: ProductCardRoot,
  identify: ProductCardIdentifyColor,
  header: ProductCardHeader,
  contentInfo: ProductCardContentInfo,
  similarCompanies: ProductCardSimiliarCompanies,
  actions: ProductCardActions,
  likeAction: ProductCardLikeAction,
  status: ProductCardStatus
};
