import { FormProvider } from 'react-hook-form';
import { Input } from '~shared/components/Input';
import { Text } from '~shared/components/Text';
import { Form } from '../../auth/views/Form';
import { Button } from '~/src/app/shared/components/Button';
import { authFormTv, recoveryButtonTv } from '../../auth/AuthTV';
import { MdOutlineEmail } from 'react-icons/md';
import { useRecoveryFormController } from '../controller/useRecoveryFormController';
import { APP_ROUTES } from '~/src/app/shared/utils/app-routes';
import { usePathname } from 'next/navigation';

interface RecoveryFormProps {
  handleForgetPassword: () => void;
}

export function RecoveryForm({ handleForgetPassword }: RecoveryFormProps) {
  const { handleSubmit, onRecovery, recoveryFormSchema, isSubmitting } =
    useRecoveryFormController();

  const pathName = usePathname();

  const isUnderRegister = pathName === APP_ROUTES.public.register.name;

  return (
    <FormProvider {...recoveryFormSchema}>
      <Form onSubmit={handleSubmit(onRecovery)} className={authFormTv()}>
        <Button.root
          onClick={handleForgetPassword}
          color="primary"
          size="small"
          type="button"
          className={recoveryButtonTv()}
        >
          <Button.contentWrapper>
            <Button.label
              text={isUnderRegister ? 'Registre-se' : 'Entrar'}
              size="sm"
              color="white"
            />
          </Button.contentWrapper>
        </Button.root>

        <Text
          text="Enviaremos um e-mail com instruções de como redefinir sua senha!"
          size="lg"
          color="white"
          weight="light"
          className="max-w-md leading-9"
        />

        <Input.root size="full" field="Email">
          <Input.field fildSize="full" type="email" name="Email" placeholder="Qual seu e-mail?" />
          <Input.label label="E-mail" name="Email" />
          <Input.representation icon={MdOutlineEmail} />
          <Input.error field="Email" />
        </Input.root>

        <Button.root disabled={isSubmitting} size="medium">
          <Button.contentWrapper>
            <Button.label text="Solicitar" color="white" size="lg" weight="bold" />
          </Button.contentWrapper>
        </Button.root>
      </Form>
    </FormProvider>
  );
}
