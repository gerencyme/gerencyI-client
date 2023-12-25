import { useForm } from 'react-hook-form';
import { TRegisterSubmitSchema, registerSubmitSchema } from '../registerUtils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useTimeout } from '~/src/app/shared/hooks/useTimeout';
import { maskCpfOrCnpj } from '~/src/app/shared/utils/transformers';
import { register } from '../services';
import { RegisterUser } from '~/src/app/shared/types/RegisterUser';
import { useLocalStorage } from '~/src/app/shared/hooks/useLocalStorage';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '~/src/app/shared/utils/app-routes';
import { sessionUserLocalStorage } from '~/src/app/shared/utils/constants/userLocalStorage';
import { errorMessages } from '~/src/app/shared/utils/constants/errorMessages';

export const useRegisterController = () => {
  const { push } = useRouter();
  const { setLocalStorage } = useLocalStorage();
  const [errorResolver, setErrorResolver] = useState('');
  const [strongPasswordMessage, setStrongPasswordMessage] = useState('Senha forte');
  const registerSchema = useForm<TRegisterSubmitSchema>({
    resolver: zodResolver(registerSubmitSchema)
  });

  const userAlreyExists = errorResolver === errorMessages[409];

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
      if (res && res.token) {
        setLocalStorage(session, res);
        return push(APP_ROUTES.private['my-data'].name);
      }
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
