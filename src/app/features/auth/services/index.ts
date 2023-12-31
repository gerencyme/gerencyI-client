import { Dispatch, SetStateAction } from 'react';
import { api } from '~/src/app/shared/services/axios/api';
import { AuthRequest } from '~/src/app/shared/types/requests/AuthRequest';
import { CompanieRequest } from '~/src/app/shared/types/requests/CompanieRequest';
import { errorMessages } from '~/src/app/shared/utils/constants/errorMessages';

export const auth = async (data: AuthRequest, errorResolver: Dispatch<SetStateAction<string>>) => {
  try {
    const endpoitn = 'GenereateTokenIdentity';

    const response = await api().post<CompanieRequest>(endpoitn, data);

    return response.data;
  } catch (err: any) {
    const status = err.response?.status || 500;

    const errorMessage =
      errorMessages[status] || 'Ocorreu um erro na autenticação. Por favor, tente mais tarde!';
    errorResolver(errorMessage);
  }
};
