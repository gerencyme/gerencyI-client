import { FormHTMLAttributes, ReactNode } from 'react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export function Form({ children, ...props }: FormProps) {
  return (
    <form {...props} className="flex flex-col">
      {children}
    </form>
  );
}
