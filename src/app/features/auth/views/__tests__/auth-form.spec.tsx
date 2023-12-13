import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { AuthForm } from '../AuthForm';
import { todo } from 'node:test';

jest.mock('lottie-react', () => {
  return {
    View: () => <div data-testid="lottie-view" />
  };
});

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: () => ({
    handleSubmit: jest.fn()
  }),
  useFormContext: () => ({
    formState: {
      isValid: false,
      errors: {
        CNPJ: 'errorResolver',
        Password: 'errorResolver'
      }
    },
    register: jest.fn()
  }),
  FormProvider: ({ children }: { children: ReactNode }) => <>{children}</>
}));

jest.mock('../../controller', () => ({
  ...jest.requireActual('../../controller'),
  useAuthController: () => ({
    handleSubmit: jest.fn(),
    onSubmit: jest.fn(),
    handleIconChange: jest.fn(),
    authFormSchema: {},
    passwordType: 'password',
    inputIcon: 'icon',
    formattedCnpj: 'formattedCnpj',
    errorResolver: 'errorResolver',
    isSubmitting: false
  })
}));

describe('AuthForm', () => {
  it('renders without crashing', () => {
    render(<AuthForm handleForgetPassword={() => {}} />);
  });

  todo('it should be able write in forms inputs');
  todo('it should be able change password input type');
  todo('it should not be able access with invalid CNPJ');
  todo('it should not be able access with invalid password');
  todo('it should be able access with valid CNPJ and password');
  todo('it should be able fetch when click in button');
});
