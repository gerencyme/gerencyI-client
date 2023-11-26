import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { TAuthSubmitSchema, authSubmitSchema } from '../AuthUtils';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserAuth, auth } from '../services';
import { maskCpfOrCnpj } from '~/src/app/shared/utils/transformers';
import { useTimeout } from '~/src/app/shared/hooks/useTimeout';
import { useCookie } from '~/src/app/shared/hooks/useCookies';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '~/src/app/shared/utils/app-routes';
import { tokenUserKey } from '~/src/app/shared/utils/constants/cookies';

export const useAuthController = () => {
  const { push } = useRouter();
  const { createSession } = useCookie();
  const [errorResolver, setErrorResolver] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleIconChange = () => setIsVisible((isVisible) => !isVisible);
  const inputIcon = isVisible ? AiFillEye : AiFillEyeInvisible;
  const passwordType = isVisible ? 'text' : 'password';

  const authFormSchema = useForm<TAuthSubmitSchema>({
    resolver: zodResolver(authSubmitSchema)
  });

  const {
    handleSubmit,
    watch,
    formState: { isSubmitting }
  } = authFormSchema;

  const cnpj = watch('CNPJ');
  const formattedCnpj = maskCpfOrCnpj(cnpj || '');

  const onSubmit = async (data: TAuthSubmitSchema) => {
    await auth(data as UserAuth, setErrorResolver).then((resp) => {
      if (resp) {
        createSession({
          cookieName: tokenUserKey,
          value: resp
        });

        // só dar o push após uma segunda request para pegar os dados do usuário e salvar no local storage

        return push(APP_ROUTES.private['my-account'].name);
      }
    });
  };

  const situation = errorResolver !== '';
  const updateSituation = () => setErrorResolver('');
  const { resetSituation } = useTimeout(situation, updateSituation, 10000);

  useEffect(() => {
    resetSituation();
  }, [resetSituation]);

  return {
    handleSubmit,
    onSubmit,
    handleIconChange,
    authFormSchema,
    passwordType,
    inputIcon,
    errorResolver,
    formattedCnpj,
    isSubmitting
  };
};
