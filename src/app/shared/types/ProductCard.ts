import { SimilarCompaniesContent } from './SimilarCompaniesContent';

export interface ProductCard {
  id: number | string;
  identifyColor: string;
  status: 'done' | 'canceled' | 'underAnalisis';
  date: string | Date;
  productBrand: string;
  productName: string;
  totalPrice: string | number;
  quantity: string | number;
  unitPrice: string | number;
  similarCompaniesContent: SimilarCompaniesContent[];
  isLiked: boolean;
  isModalOpen: boolean;
}
