export interface NewOrderRequest {
  orderId: string;
  companieCNPJ: string;
  productName: string;
  productBrand: string;
  orderDate: Date;
  quantity: number;
  lastTotalPrice: number | null;
  orderColorIdentity: string;
  longitude: number;
  latitude: number;
  productType: string;
}
