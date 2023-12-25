'use client';

import { AiFillLock } from 'react-icons/ai';
import { BiSolidCity } from 'react-icons/bi';
import { FormProvider } from 'react-hook-form';
import { Input } from '~shared/components/Input';
import { Form } from './Form';
import { Button } from '~/src/app/shared/components/Button';
import { authFormTv } from '../AuthTV';
import { useAuthController } from '../controller';
import { Text } from '~/src/app/shared/components/Text';

interface AuthFormProps {
  handleForgetPassword: () => void;
}

export function AuthForm({ handleForgetPassword }: AuthFormProps) {
  const {
    handleSubmit,
    onSubmit,
    handleIconChange,
    authFormSchema,
    passwordType,
    inputIcon,
    errorResolver,
    isSubmitting
  } = useAuthController();

  return (
    <FormProvider {...authFormSchema}>
      <Form onSubmit={handleSubmit(onSubmit)} className={authFormTv()}>
        {errorResolver && (
          <Text as="span" text={errorResolver} weight="bold" size="sm" color="white" />
        )}
        <div className="flex w-full justify-center items-center flex-wrap gap-5 lg:gap-8 pt-10 min-[1520px]:pt-20">
          <Input.root field="CNPJ">
            <Input.field max={17} maxLength={17} name="CNPJ" placeholder="Qual o seu CNPJ?" />
            <Input.label label="CNPJ" name="CNPJ" />
            <Input.representation icon={BiSolidCity} />
            <Input.error field="CNPJ" />
          </Input.root>

          <Input.root field="Password">
            <Input.field
              type={passwordType}
              name="Password"
              placeholder="Digite sua senha..."
              className="pr-7"
            />
            <Input.label label="Senha" name="Password" />
            <Input.icon icon={inputIcon} onClick={handleIconChange} type="password" />
            <Input.representation icon={AiFillLock} />
            <Input.error field="Password" />
          </Input.root>
        </div>

        <Button.root
          isLoading={isSubmitting}
          disabled={isSubmitting}
          size="small"
          className="w-fit mt-4"
        >
          <Button.contentWrapper>
            <Button.label
              text="Entrar"
              color="white"
              weight="bold"
              className="text-xs sm:text-sm md:text-md lg:text-lg"
            />
          </Button.contentWrapper>
        </Button.root>

        <Text
          text="Esquceu sua senha?"
          size="sm"
          color="white"
          weight="bold"
          onClick={handleForgetPassword}
          className="cursor-pointer"
        />
      </Form>
    </FormProvider>
  );
}
