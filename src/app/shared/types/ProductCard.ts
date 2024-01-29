import { SimilarCompaniesContent } from './SimilarCompaniesContent';

interface Product {
  lastTotalPrice: number;
  productBrand: string;
  productName: string;
  totalPrice: string | number;
  quantity: string | number;
  unitPrice: string | number;
}

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
