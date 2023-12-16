import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { TAuthSubmitSchema, authSubmitSchema } from '../AuthUtils';
import { zodResolver } from '@hookform/resolvers/zod';
import { auth } from '../services';
import { maskCpfOrCnpj } from '~/src/app/shared/utils/transformers';
import { useTimeout } from '~/src/app/shared/hooks/useTimeout';
import { useCookie } from '~/src/app/shared/hooks/useCookies';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '~/src/app/shared/utils/app-routes';
import { tokenUserKey } from '~/src/app/shared/utils/constants/cookies';
import { sessionUserLocalStorage } from '~/src/app/shared/utils/constants/userLocalStorage';
import { useLocalStorage } from '~/src/app/shared/hooks/useLocalStorage';
import { AuthRequest } from '~/src/app/shared/types/requests/AuthRequest';

export const useAuthController = () => {
  const { push } = useRouter();
  const { deleteFromStorage } = useLocalStorage();
  const { createSession, deleteCookie } = useCookie();
  const [errorResolver, setErrorResolver] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleIconChange = () => setIsVisible((isVisible) => !isVisible);
  const inputIcon = isVisible ? AiFillEye : AiFillEyeInvisible;
  const passwordType = isVisible ? 'text' : 'password';
  const session = sessionUserLocalStorage;

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
    await auth(data as AuthRequest, setErrorResolver).then((resp) => {
      if (resp !== 'usuario não existe') {
        // validar statuscode
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

  const logout = () => {
    deleteCookie(tokenUserKey);
    deleteFromStorage(session!);
    return push(APP_ROUTES.public.home.name);
  };

  return {
    handleSubmit,
    onSubmit,
    handleIconChange,
    logout,
    authFormSchema,
    passwordType,
    inputIcon,
    errorResolver,
    formattedCnpj,
    isSubmitting
  };
};
