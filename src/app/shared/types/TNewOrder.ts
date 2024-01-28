import { Color } from 'react-pick-color';
import { TNewOrderSchema } from '../../features/newOrder/NewOrderUtils';

export type TNewOrder = {
  orderColorIdentity?: Color;
  data?: TNewOrderSchema;
  productBrand?: string;
  productName?: string;
  quantity?: number;
  productType?: string;
};
