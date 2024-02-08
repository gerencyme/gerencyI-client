import { toast } from 'react-toastify';
import { FavoritesRequest } from '~types/requests/FavoritesRequest';
import { api } from '~shared/services/axios/api';
import { getToken } from '~shared/utils/getToken';

const token = getToken();

export const getFavorites = async (cnpj: string) => {
  try {
    const endpoint = 'GetOrdersByIsLiked';

    const { data } = await api(token).post<FavoritesRequest[]>(endpoint, {
      CompanieCNPJ: cnpj
    });

    return data;
  } catch (error: any) {
    toast.error(error.message);
  }
};

export const updateFavorites = async (orderId: string, isLiked: boolean, cnpj: string) => {
  try {
    const endpoint = 'UpdateIsLikedField';

    const body = {
      orderId,
      isLiked,
      CompanieCNPJ: cnpj
    };

    return await api(token).post<boolean>(endpoint, body);
  } catch (error: any) {
    toast.error(error.message);
  }
};
