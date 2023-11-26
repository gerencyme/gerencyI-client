import { Dispatch, SetStateAction } from 'react';
import { api } from '~/src/app/shared/services/axios/api';
import { RegisterUser } from '~/src/app/shared/types/RegisterUser';

export const register = async (
  body: RegisterUser,
  errorResolver: Dispatch<SetStateAction<string>>
) => {
  try {
    const endpoint = 'AddUserIdentityTeste';

    const formattedBody = {
      email: body.email,
      cnpj: body.cnpj,
      corporateReason: body.corporateReason,
      name: body.name,
      password: {
        pawssord: body.password.password,
        confirmPassword: body.password.confirmPassword
      }
    };

    const result = await api.post<string>(endpoint, formattedBody);

    return result.data;
  } catch {
    errorResolver('Erro na criação de conta do usuário, tente mais tarde!');
  }
};
