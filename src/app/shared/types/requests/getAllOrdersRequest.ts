export interface GetAllOrdersRequest {
  pageNumber: number;
  pageSize: number;
  startDate: Date;
  endDate: Date;
  companieCNPJ: string;
  orderDate: Date;
}
