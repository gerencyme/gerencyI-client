import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { TAuthSubmitSchema, authSubmitSchema } from '../AuthUtils';
import { zodResolver } from '@hookform/resolvers/zod';
import { auth } from '../services';
import { maskCpfOrCnpj } from '~/src/app/shared/utils/transformers';
import { useTimeout } from '~/src/app/shared/hooks/useTimeout';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '~/src/app/shared/utils/app-routes';
import { sessionUserLocalStorage } from '~/src/app/shared/utils/constants/userLocalStorage';
import { useLocalStorage } from '~/src/app/shared/hooks/useLocalStorage';
import { toast } from 'react-toastify';
import { draftMode } from '~/src/app/shared/utils/constants/draftMode';
import { useCookie } from '~/src/app/shared/hooks/useCookies';
import { sessionToken } from '~/src/app/shared/utils/constants/cookies';
import { TSessionCustomer } from '~/src/app/shared/types/TSessionCustomer';

export const useAuthController = () => {
  const { push } = useRouter();
  const { createSession, deleteCookie } = useCookie();
  const { deleteFromStorage, setLocalStorage, getLocalStorage } = useLocalStorage();
  const [errorResolver, setErrorResolver] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleIconChange = () => setIsVisible((isVisible) => !isVisible);
  const inputIcon = isVisible ? AiFillEye : AiFillEyeInvisible;
  const passwordType = isVisible ? 'text' : 'password';
  const session = sessionUserLocalStorage;

  const isDraftMode = getLocalStorage(draftMode);

  const authFormSchema = useForm<TAuthSubmitSchema>({
    resolver: zodResolver(authSubmitSchema)
  });

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting }
  } = authFormSchema;

  const cnpj = watch('CNPJ');
  const formattedCnpj = maskCpfOrCnpj(cnpj || '');

  useEffect(() => {
    if (cnpj !== '') return setValue('CNPJ', formattedCnpj);
  }, [cnpj, formattedCnpj, setValue]);

  const onSubmit = async (data: TAuthSubmitSchema) => {
    try {
      const resp = await auth(data, setErrorResolver);

      if (resp) {
        isDraftMode && toast.success('Você tem um rascunho salvo');

        const pageToBePushed = isDraftMode
          ? push(APP_ROUTES.private['new-order'].name)
          : push(APP_ROUTES.private['dashboard'].name);

        setLocalStorage(session, resp);

        // console.log(resp.token);

        const sessionCustomer: TSessionCustomer = {
          sesstionToken: resp.token,
          refreshToken: resp.refreshToken
        };

        createSession({
          cookieName: sessionToken,
          value: JSON.stringify(sessionCustomer)
        });

        setTimeout(() => {
          return pageToBePushed;
        }, 2000);
      }
    } catch (e) {
      if (e instanceof Error) throw new Error(e.message);
    }
  };

  const situation = errorResolver !== '';
  const updateSituation = () => setErrorResolver('');
  useTimeout(situation, updateSituation, 10000);

  const logout = () => {
    isDraftMode && toast.success('Seu rascunho está salvo');

    setTimeout(() => {
      deleteFromStorage(session!);
      deleteCookie(sessionToken);
      return push(APP_ROUTES.public.home.name);
    }, 2000);
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
    isSubmitting
  };
};
