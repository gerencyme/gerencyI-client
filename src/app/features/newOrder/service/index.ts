import { toast } from 'react-toastify';
import { api } from '~/src/app/shared/services/axios/api';
import { ProductCard } from '~/src/app/shared/types/ProductCard';
import { errorMessages } from '~/src/app/shared/utils/constants/errorMessages';
import { getToken } from '~/src/app/shared/utils/getToken';
import { NewOrderRequest } from '~types/requests/NewOrderRequest';

const token = getToken();

export const postNewOrder = async (order: NewOrderRequest, resolver: () => void) => {
  const newOrderToastId = 'newOrderToastId';
  try {
    toast('Enviando pedido para análise...', {
      toastId: newOrderToastId,
      isLoading: true
    });
    const endPont = 'AddNewOrder';

    const { data } = await api(token).post(endPont, order);

    toast.dismiss(newOrderToastId);
    toast.success('Seu pedido foi enviado para análise');

    if (data) {
      resolver();
    }

    return data;
  } catch (err: any) {
    const status = err.response?.status || 500;
    const errorMessage = status === 401 ? 'Usuário sem autorização!' : errorMessages[status];

    toast.dismiss(newOrderToastId);
    toast.error(errorMessage);
  }
};

export const getLast12CompanyOrders = async (cnpj: string, logout: () => void) => {
  try {
    const endPont = 'GetLast12NewOrders';

    const { data } = await api(token).post<ProductCard[]>(endPont, { CompanieCNPJ: cnpj });

    if (data) {
      return data;
    }
  } catch (err: any) {
    const defaultMessage = 'Erro ao recuperar seus últimos pedidos';
    const status = err.response?.status || defaultMessage;
    const errorMessage = errorMessages[status];

    status === 401 && logout();

    toast.error(err.response?.data ?? errorMessage);
  }
};
