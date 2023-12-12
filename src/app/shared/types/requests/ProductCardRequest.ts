import { SimilarCompaniesContent } from '../SimilarCompaniesContent';

export interface ProductCardRequests {
  id: number | string;
  identifyColor: string;
  status: 'done' | 'canceled' | 'underAnalisis';
  date: string;
  productBrand: string;
  productName: string;
  totalPrice: number | string;
  quantity: number | string;
  unitPrice: number | string;
  similarCompaniesContent: SimilarCompaniesContent[];
}
