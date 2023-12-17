import { useForm } from 'react-hook-form';
import { TRegisterSubmitSchema, registerSubmitSchema } from '../registerUtils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useTimeout } from '~/src/app/shared/hooks/useTimeout';
import { maskCpfOrCnpj } from '~/src/app/shared/utils/transformers';
import { register } from '../services';
import { RegisterUser } from '~/src/app/shared/types/RegisterUser';
import { useLocalStorage } from '~/src/app/shared/hooks/useLocalStorage';
import { LocalStorageUser } from '~/src/app/shared/types/LocalStorageUser';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '~/src/app/shared/utils/app-routes';
import { sessionUserLocalStorage } from '~/src/app/shared/utils/constants/userLocalStorage';

export const useRegisterController = () => {
  const { push } = useRouter();
  const { setLocalStorage } = useLocalStorage();
  const [errorResolver, setErrorResolver] = useState('');
  const [strongPasswordMessage, setStrongPasswordMessage] = useState('Senha forte');
  const registerSchema = useForm<TRegisterSubmitSchema>({
    resolver: zodResolver(registerSubmitSchema)
  });

  const userAlreyExists = errorResolver === 'usuario já existe';

  const {
    handleSubmit,
    watch,
    formState: { isSubmitting }
  } = registerSchema;

  const resetStrongPasswordMessage = () => setStrongPasswordMessage('');

  const session = sessionUserLocalStorage;
  const situation = errorResolver !== '' && !userAlreyExists;
  const updateSituation = () => setErrorResolver('');
  const { resetSituation: resetErrorStiruation } = useTimeout(situation, updateSituation, 10000);

  const onSubmit = async (data: TRegisterSubmitSchema) => {
    await register(data as RegisterUser, setErrorResolver).then((res) => {
      if (res !== 'usuario já existe') {
        const user: LocalStorageUser = {
          cnpj: data.cnpj!,
          corporateReason: data.corporateReason,
          email: data.email,
          name: data.name,
          isFirstLogin: true,
          _t: res!
        };

        setLocalStorage(session, user);
        return push(APP_ROUTES.private['my-data'].name);
      }
      return setErrorResolver(res);
    });
  };

  const cnpj = watch('cnpj');
  const password = watch('password');
  const isPasswordStrong = new RegExp(
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
  ).test(password?.password);

  const { resetSituation } = useTimeout(isPasswordStrong, resetStrongPasswordMessage, 2000);
  const formattedCnpj = maskCpfOrCnpj(cnpj || '');

  useEffect(() => {
    resetSituation();
  }, [resetSituation]);

  useEffect(() => {
    resetErrorStiruation();
  }, [resetErrorStiruation]);

  return {
    handleSubmit,
    onSubmit,
    formattedCnpj,
    isSubmitting,
    errorResolver,
    strongPasswordMessage,
    registerSchema,
    isPasswordStrong,
    userAlreyExists,
    password
  };
};
