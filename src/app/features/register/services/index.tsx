import { Dispatch, SetStateAction } from 'react';
import { api } from '~/src/app/shared/services/axios/api';
import { RegisterUser } from '~/src/app/shared/types/RegisterUser';
import { RegisterRequest } from '~/src/app/shared/types/requests/RegisterRequest';

export const register = async (
  body: RegisterUser,
  errorResolver: Dispatch<SetStateAction<string>>
) => {
  try {
    const endpoint = 'AddUserIdentityTeste';

    const formattedBody: RegisterRequest = {
      // o id vai vazio porque é gerado no lado do servidor
      email: body.email,
      cnpj: body.cnpj,
      corporateReason: body.corporateReason,
      name: body.name,
      confirmPassword: body.password.confirmPassword,
      creationDate: new Date(),
      id: '',
      password: body.password.password,
      updateDate: new Date()
    };

    const result = await api.post<string>(endpoint, formattedBody);

    return result.data;
  } catch {
    errorResolver('Erro na criação de conta do usuário, tente mais tarde!');
  }
};
