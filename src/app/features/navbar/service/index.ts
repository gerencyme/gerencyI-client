import { toast } from 'react-toastify';
import { api } from '~/src/app/shared/services/axios/api';
import { errorMessages } from '~/src/app/shared/utils/constants/errorMessages';
import { NewOrderRequest } from '~types/requests/NewOrderRequest';

export const postNewOrder = async (order: NewOrderRequest, resolver: () => void) => {
  const newOrderToastId = 'newOrderToastId';
  try {
    toast('Enviando pedido para análise...', {
      toastId: newOrderToastId,
      isLoading: true
    });
    const endPont = ''; // api precisa ser finalizada para ter o endPoint

    const { data } = await api.post(endPont, order);

    toast.dismiss(newOrderToastId);
    toast.success('Seu pedido foi enviado para análise');
    resolver();

    return data;
  } catch (err: any) {
    const status = err.response?.status || 500;
    const errorMessage = errorMessages[status];

    toast.dismiss(newOrderToastId);
    toast.error(errorMessage);
  }
};

export const getCompanyOrders = async (resolver: () => void) => {
  try {
    const endPont = ''; // api precisa ser finalizada para ter o endPoint

    const { data } = await api.get(endPont);

    resolver();

    return data;
  } catch (err: any) {
    const status = err.response?.status || 500;
    const errorMessage = errorMessages[status];

    toast.error(errorMessage);
  }
};
