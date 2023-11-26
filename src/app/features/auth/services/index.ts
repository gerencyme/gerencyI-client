import { Dispatch, SetStateAction } from 'react';
import { api } from '~/src/app/shared/services/axios/api';

export interface UserAuth {
  CNPJ: string;
  Password: string;
}

export const auth = async (data: UserAuth, errorResolver: Dispatch<SetStateAction<string>>) => {
  try {
    const endpoitn = 'GenereateTokenIdentity';

    const response = await api.post(endpoitn, data);

    return response.data;
  } catch {
    errorResolver('Ocorreu um erro na autenticação. Por favor, tente mais tarde!');
  }
};
