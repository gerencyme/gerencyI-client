import { api } from '~shared/services/axios/api';
import { CompanieRequest } from '~types/requests/CompanieRequest';
import { toast } from 'react-toastify';

export const updateMyData = async (body: CompanieRequest, resolver: () => void) => {
  const toastId = 'updating';

  try {
    toast('Atualziando dados...', {
      toastId: toastId,
      theme: 'light',
      isLoading: true
    });

    const endpoint = 'UpdateUserIdentity';

    const { data } = await api.post<CompanieRequest>(endpoint, body);

    toast.dismiss(toastId);
    toast.success('Seus dados foram atualizados...');

    resolver();

    return data;
  } catch (err) {
    toast.dismiss(toastId);
    toast.error('Ocorreu um erro interno. Por favor, tente mais tarde', {
      theme: 'light'
    });
  }
};
