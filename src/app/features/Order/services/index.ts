import { toast } from 'react-toastify';
import { ProductCard } from '~/src/app/shared/types/ProductCard';
import { api } from '~shared/services/axios/api';
import { errorMessages } from '~shared/utils/constants/errorMessages';

export const getCompanyOrders = async (cnpj: string, logout: () => void) => {
  try {
    const endPont = 'GetLast12NewOrders';

    const { data } = await api.post<ProductCard[]>(endPont, { CompanieCNPJ: cnpj });

    if (data) {
      return data;
    }
  } catch (err: any) {
    const defaultMessage = 'Erro ao recuperar seus últimos pedidos';
    const status = err.response?.status || defaultMessage;
    const errorMessage = errorMessages[status];

    status === 400 && logout();

    toast.error(err.response?.data ?? errorMessage);
  }
};