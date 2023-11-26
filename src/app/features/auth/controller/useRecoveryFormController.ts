import { useForm } from 'react-hook-form';
import { TRecoverySchema, recoverySchema } from '../AuthUtils';
import { zodResolver } from '@hookform/resolvers/zod';

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
