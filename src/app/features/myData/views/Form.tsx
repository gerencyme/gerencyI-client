import { FormHTMLAttributes, ReactNode } from 'react';
import { myDataFormTv } from '../MyDataTV';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export function Form({ children, ...props }: FormProps) {
  return (
    <form {...props} className={myDataFormTv()}>
      {children}
    </form>
  );
}
