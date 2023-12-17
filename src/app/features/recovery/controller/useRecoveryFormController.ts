import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TRecoverySchema, recoverySchema } from '../Recoveryutils';

export const useRecoveryFormController = () => {
  const recoveryFormSchema = useForm<TRecoverySchema>({
    resolver: zodResolver(recoverySchema)
  });

  const {
    handleSubmit,
    formState: { isSubmitting }
  } = recoveryFormSchema;

  const onRecovery = (data: TRecoverySchema) => {
    console.log('RECOVERY', data);
  };

  return {
    handleSubmit,
    onRecovery,
    recoveryFormSchema,
    isSubmitting
  };
};
