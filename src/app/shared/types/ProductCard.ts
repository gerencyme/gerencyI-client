import { Product } from '~/src/app/shared/types/Product';
import { SimilarCompaniesContent } from './SimilarCompaniesContent';

export interface ProductCard {
  companyId: number | string;
  orderColorIdentity: string;
  isLiked: boolean;
  orderDate: string | Date;
  orderId: string;
  orderStatus: 'done' | 'canceled' | 'underAnalysis';
  product: Product;
  partnerCompaniesInthisOrder: SimilarCompaniesContent[];
  isModalOpen: boolean;
}
