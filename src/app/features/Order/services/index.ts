import { toast } from 'react-toastify';
import { NewOrderRequest } from '~/src/app/shared/types/requests/NewOrderRequest';
import { api } from '~shared/services/axios/api';
import { errorMessages } from '~shared/utils/constants/errorMessages';

export const getCompanyOrders = async (cnpj: string) => {
  try {
    const endPont = 'GetLast10NewOrders';

    const { data } = await api.post<NewOrderRequest>(endPont, { CompanieCNPJ: cnpj });

    if (data) {
      return data;
    }
  } catch (err: any) {
    const defaultMessage = 'Erro ao recuperar seus últimos pedidos';
    const status = err.response?.status || defaultMessage;
    const errorMessage = errorMessages[status];

    toast.error(errorMessage[1]);
  }
};
