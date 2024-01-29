import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TRecoverySchema, recoverySchema } from '../Recoveryutils';
import { APP_ROUTES } from '~/src/app/shared/utils/app-routes';
import { usePathname } from 'next/navigation';

export const useRecoveryFormController = () => {
  const pathName = usePathname();
  const recoveryFormSchema = useForm<TRecoverySchema>({
    resolver: zodResolver(recoverySchema)
  });

  const {
    handleSubmit,
    formState: { isSubmitting }
  } = recoveryFormSchema;

  const isUnderRegister = pathName === APP_ROUTES.public.register.name;

  const onRecovery = (data: TRecoverySchema) => {
    console.log('RECOVERY', data);
  };

  return {
    handleSubmit,
    onRecovery,
    recoveryFormSchema,
    isUnderRegister,
    isSubmitting
  };
};
