import { api } from '~shared/services/axios/api';
import { CompanieRequest } from '~types/requests/CompanieRequest';
import { toast } from 'react-toastify';
import { getToken } from '~/src/app/shared/utils/getToken';

const token = getToken();

export const updateImageProfile = async (
  body: CompanieRequest,
  resolver: () => void,
  logout: () => void,
  toastMessage?: string
) => {
  const toastId = 'updateProfile';

  try {
    toast('Atualziando imagem...', {
      toastId: toastId,
      isLoading: true
    });

    const endpoint = 'UpdateUserIdentity';

    const { data } = await api(token).post<CompanieRequest>(endpoint, body);

    if (data) {
      resolver();
      toast.dismiss(toastId);
      toast.success(toastMessage ?? 'Imagem alterada com sucesso...');
    }

    return data;
  } catch (err: any) {
    err.response?.status === 401 && logout();
    toast.dismiss(toastId);
    toast.error(err.response?.data);
  }
};
