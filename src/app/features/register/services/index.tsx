import { Dispatch, SetStateAction } from 'react';
import { api } from '~shared/services/axios/api';
import { RegisterUser } from '~shared/types/RegisterUser';
import { RegisterRequest } from '~shared/types/requests/RegisterRequest';
import { TUserResponse } from '~shared/types/response/TCompanyResponse';
import { errorMessages } from '~shared/utils/constants/errorMessages';

export const register = async (
  body: RegisterUser,
  errorResolver: Dispatch<SetStateAction<string>>
) => {
  try {
    const endpoint = 'AddUserIdentity';

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
      updateDate: new Date(),
      CompanyImg: ''
    };

    const result = await api.post<TUserResponse>(endpoint, formattedBody);

    return result.data;
  } catch (err: any) {
    const status = err.response?.status || 500;

    const errorMessage = errorMessages[status];
    errorResolver(errorMessage);
  }
};
