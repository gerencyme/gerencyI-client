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

export const useRegisterController = () => {
  const { setLocalStorage } = useLocalStorage();
  const [strongPasswordMessage, setStrongPasswordMessage] = useState('Senha forte');
  const registerSchema = useForm<TRegisterSubmitSchema>({
    resolver: zodResolver(registerSubmitSchema)
  });

  const {
    handleSubmit,
    watch,
    formState: { isSubmitting }
  } = registerSchema;

  const resetStrongPasswordMessage = () => setStrongPasswordMessage('');

  const onSubmit = async (data: TRegisterSubmitSchema) => {
    await register(data as RegisterUser).then((res) => {
      console.log(res);

      const user: LocalStorageUser = {
        cnpj: data.cnpj!,
        corporateReason: data.corporateReason,
        email: data.email,
        name: data.name
      };

      setLocalStorage('_GU', user);
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

  return {
    handleSubmit,
    onSubmit,
    formattedCnpj,
    isSubmitting,
    strongPasswordMessage,
    registerSchema,
    isPasswordStrong,
    password
  };
};
