import { Dispatch, SetStateAction } from 'react';
import { api } from '~/src/app/shared/services/axios/api';
import { RegisterUser } from '~/src/app/shared/types/RegisterUser';
import { CompanieRequest } from '~/src/app/shared/types/requests/CompanieRequest';
import { RegisterRequest } from '~/src/app/shared/types/requests/RegisterRequest';
import { errorMessages } from '~/src/app/shared/utils/constants/errorMessages';

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

    const result = await api().post<CompanieRequest>(endpoint, formattedBody);

    return result.data;
  } catch (err: any) {
    const status = err.response?.status || 500;

    const errorMessage = errorMessages[status];
    errorResolver(errorMessage);
  }
};
