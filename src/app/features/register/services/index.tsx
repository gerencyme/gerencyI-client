import { api } from '~/src/app/shared/services/axios/api';
import { RegisterUser } from '~/src/app/shared/types/RegisterUser';

export const register = async (body: RegisterUser) => {
  try {
    const endpoint = 'AddUserIdentityTeste';
    const result = await api.post<RegisterUser>(endpoint, body);

    return result.data;
  } catch (err) {
    console.error('Erro na criação de conta do usuário', err);
  }
};
