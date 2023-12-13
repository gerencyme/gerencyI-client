import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { AuthForm } from '../AuthForm';
import { todo } from 'node:test';
import userEvent from '@testing-library/user-event';

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

  it('should be able write in forms inputs', async () => {
    const user = userEvent.setup();
    render(<AuthForm handleForgetPassword={() => {}} />);

    const cnpjInputEl = screen.getByPlaceholderText(/Qual o seu CNPJ?/i);
    const passwordInputEl = screen.getByPlaceholderText(/digite sua senha/i);

    expect(passwordInputEl).toHaveValue('');
    // expect(cnpjInputEl).toHaveValue('');

    await user.type(cnpjInputEl, '12345678901234');
    await user.type(passwordInputEl, '123456');

    // expect(cnpjInputEl).toHaveValue('12345678901234');
    expect(passwordInputEl).toHaveValue('123456');
  });
  todo('it should be able change password input type');
  todo('it should not be able access with invalid CNPJ');
  todo('it should not be able access with invalid password');
  todo('it should be able access with valid CNPJ and password');
  todo('it should be able fetch when click in button');
});
