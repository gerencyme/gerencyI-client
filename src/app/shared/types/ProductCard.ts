import { ProductCardActions } from './ProductCardActions';
import { SimilarCompaniesContent } from './SimilarCompaniesContent';

export interface ProductCard {
  id: number | string;
  identifyColor: string;
  status: 'done' | 'canceled' | 'underAnalisis';
  handleCancel: () => void;
  date: string | Date;
  productBrand: string;
  productName: string;
  totalPrice: string | number;
  quantity: string | number;
  unitPrice: string | number;
  similarCompaniesContent: SimilarCompaniesContent[];
  productCardActions: ProductCardActions[];
}
