import { toast } from 'react-toastify';
import { ProductCard } from '~types/ProductCard';
import { GetAllOrdersRequest } from '~types/requests/getAllOrdersRequest';
import { api } from '~shared/services/axios/api';
import { errorMessages } from '~utils/constants/errorMessages';

export const getAllCompanyOrders = async (
  body: GetAllOrdersRequest,
  resolver: (data: ProductCard[]) => void,
  logout: () => void
) => {
  try {
    const endPont = 'GetOrdersByDateWithPagination';

    const { data } = await api.post<ProductCard[]>(endPont, body);

    resolver(data);

    if (data) {
      return data;
    }
  } catch (err: any) {
    const defaultMessage = 'Erro ao recuperar seus pedidos. Por favor, tente mais tarde';
    const status = err.response?.status || defaultMessage;
    const errorMessage = errorMessages[status];

    status === 400 && logout();

    toast.error(errorMessage);
  }
};
