import { FormProvider } from 'react-hook-form';
import { Input } from '~shared/components/Input';
import { Text } from '~shared/components/Text';
import { Form } from './Form';
import { Button } from '~/src/app/shared/components/Button';
import { authFormTv, recoveryButtonTv } from '../AuthTV';
import { MdOutlineEmail } from 'react-icons/md';
import { useRecoveryFormController } from '../controller/useRecoveryFormController';

interface RecoveryFormProps {
  handleForgetPassword: () => void;
}

export function RecoveryForm({ handleForgetPassword }: RecoveryFormProps) {
  const { handleSubmit, onRecovery, recoveryFormSchema, isSubmitting } =
    useRecoveryFormController();

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
            <Button.label text="Entrar" size="sm" color="white" />
          </Button.contentWrapper>
        </Button.root>

        <Text
          text="Enviaremos um e-mail com instruções de como redefinir sua senha!"
          size="lg"
          color="white"
          weigth="light"
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
            <Button.label text="Solicitar" color="white" size="lg" weigth="bold" />
          </Button.contentWrapper>
        </Button.root>
      </Form>
    </FormProvider>
  );
}
