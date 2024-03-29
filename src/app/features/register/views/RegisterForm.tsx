'use client';

import { FormProvider } from 'react-hook-form';
import { Form } from './Form';
import { BiSolidCity } from 'react-icons/bi';
import { Input } from '~/src/app/shared/components/Input';
import { AiFillLock } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { LuUser } from 'react-icons/lu';
import { FaRegNewspaper } from 'react-icons/fa6';
import { useRegisterController } from '../controller';
import { Text } from '~/src/app/shared/components/Text';
import { Tooltip } from '~/src/app/shared/components/Tooltip';
import { Icon } from '~/src/app/shared/components/Icon';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { Button } from '~/src/app/shared/components/Button';
import * as tv from '../RegisterTV';

interface RegisterFormProps {
  handleForgetPassword: () => void;
}

export function RegisterForm({ handleForgetPassword }: RegisterFormProps) {
  const {
    handleSubmit,
    onSubmit,
    strongPasswordMessage,
    registerSchema,
    isPasswordStrong,
    password,
    isSubmitting,
    userAlreyExists,
    errorResolver
  } = useRegisterController();

  const renderStrongPasswordMessage = () =>
    password && (
      <>
        {isPasswordStrong ? (
          <Text
            className="absolute -bottom-5"
            as="span"
            weight="bold"
            text={strongPasswordMessage}
          />
        ) : (
          <div className={tv.renderStrongPasswordMessageTv()}>
            <Text as="span" weight="bold" text="Senha fraca" color="error" />
            <Tooltip
              color="black"
              text={`Senhas deve conter no mínimo 8 carácteres, ao menos 1 minúscula, 1 maiúscula, 1 número e algum caractere especial`}
              className="w-44"
            >
              <Icon icon={FaRegQuestionCircle} size="small" color="white" />
            </Tooltip>
          </div>
        )}
      </>
    );

  return (
    <FormProvider {...registerSchema}>
      {errorResolver && (
        <Text
          as="span"
          text={errorResolver}
          weight="semi-bold"
          size="sm"
          color="error"
          className="relative min-[1520px]:left-16"
        />
      )}
      <Form className={tv.registerFormRootTv()}>
        <div className={tv.registerDualInputsTv()}>
          <Input.root field="cnpj">
            <Input.field max={17} maxLength={17} name="cnpj" placeholder="Qual o seu CNPJ?" />
            <Input.label label="cnpj" name="cnpj" />
            <Input.representation icon={BiSolidCity} />
            <Input.error field="cnpj" />
          </Input.root>

          <Input.root field="name">
            <Input.field name="name" placeholder="Qual o seu Nome?" />
            <Input.label label="Nome" name="name" />
            <Input.representation icon={LuUser} />
            <Input.error field="name" />
          </Input.root>
        </div>

        <div className={tv.registerDualInputsTv()}>
          <Input.root field="password.password">
            <Input.field
              type="password"
              name="password.password"
              placeholder="Escolha uma senha..."
            />
            <Input.label label="Senha" name="password.password" />
            <Input.representation icon={AiFillLock} />
            {password?.password ? (
              renderStrongPasswordMessage()
            ) : (
              <Input.error field="password.password" />
            )}
          </Input.root>

          <Input.root field="password.confirmPassword">
            <Input.field
              type="password"
              name="password.confirmPassword"
              placeholder="Confirme sua senha..."
            />
            <Input.label label="Confirme" name="password.confirmPassword" />
            <Input.representation icon={AiFillLock} />
            <Input.error field="password.confirmPassword" />
          </Input.root>
        </div>

        <Input.root size="full" field="email">
          <Input.field type="email" name="email" placeholder="Qual seu Email?" />
          <Input.label label="E-mail" name="email" />
          <Input.representation icon={MdOutlineEmail} />
          <Input.error field="email" />
        </Input.root>

        <Input.root size="full" field="corporateReason">
          <Input.field name="corporateReason" placeholder="Qual sua razão social?" />
          <Input.label label="Razão Social" name="corporateReason" />
          <Input.representation icon={FaRegNewspaper} />
          <Input.error field="corporateReason" />
        </Input.root>

        <Button.root
          isLoading={isSubmitting}
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
          color="primary"
          size="inputCompatible"
        >
          <Button.contentWrapper>
            <Button.label
              text="Registrar"
              color="white"
              size="sm"
              weight="bold"
              className={tv.registerButonLabelTv()}
            />
          </Button.contentWrapper>
        </Button.root>
        {userAlreyExists && (
          <Text
            text="Esquceu sua senha?"
            size="sm"
            color="white"
            weight="bold"
            onClick={handleForgetPassword}
            className="cursor-pointer"
          />
        )}
      </Form>
    </FormProvider>
  );
}
