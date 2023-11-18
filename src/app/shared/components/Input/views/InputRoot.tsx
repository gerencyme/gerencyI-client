import { HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { inputRootTv } from '../InputTV';
import { useFormContext } from 'react-hook-form';

interface InputRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function InputRoot({ children, ...props }: InputRootProps) {
  const {
    formState: { isValid }
  } = useFormContext();
  const [state, setState] = useState<'inactive' | 'isActive' | 'error'>('inactive');

  const handleActive = () => setState('isActive');
  const handleDesactive = () => setState('inactive');

  useEffect(() => {
    if (isValid) {
      return setState('error');
    }
  }, [isValid]);

  return (
    <div
      onFocus={handleActive}
      onBlur={handleDesactive}
      {...props}
      className={inputRootTv({ state })}
    >
      {children}
    </div>
  );
}
