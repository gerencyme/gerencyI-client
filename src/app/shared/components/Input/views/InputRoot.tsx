import { HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { inputRootTv } from '../InputTV';
import { useFormContext } from 'react-hook-form';
import { VariantProps } from 'tailwind-variants';
import { get } from '../InputUtils';

interface InputRootProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof inputRootTv> {
  children: ReactNode;
  field: string;
}

export function InputRoot({ children, size, field, ...props }: InputRootProps) {
  const {
    formState: { isValid, errors }
  } = useFormContext();
  const [state, setState] = useState<'inactive' | 'isActive' | 'error'>('inactive');

  const handleActive = () => setState('isActive');
  const handleDesactive = () => setState('inactive');

  const fieldError = get(errors, field);

  useEffect(() => {
    if (fieldError && !isValid) {
      return setState('error');
    }
  }, [fieldError, isValid]);

  return (
    <div
      onFocus={handleActive}
      onBlur={handleDesactive}
      {...props}
      className={inputRootTv({ state, size })}
    >
      {children}
    </div>
  );
}
