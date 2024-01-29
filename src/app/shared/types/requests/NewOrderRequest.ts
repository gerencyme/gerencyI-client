interface NewOrderProduct {
  productName: string;
  productBrand: string;
  productType: string;
  quantity: number;
  lastTotalPrice: number;
}

interface NewOrderLocation {
  longitude: number;
  latitude: number;
}

export interface NewOrderRequest {
  orderId: string;
  companyId: string;
  companieCNPJ: string;
  orderDate: Date;
  orderColorIdentity: string;
  product: NewOrderProduct;
  location: NewOrderLocation;
}
