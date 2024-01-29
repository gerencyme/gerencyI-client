'use client';

import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { inputFieldTv } from '../InputTV';
import { VariantProps } from 'tailwind-variants';

type InputFieldProps = {
  name: string;
  placeholder: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputFieldTv>;

export function InputField({ name, type, placeholder, className, ...props }: InputFieldProps) {
  const { register } = useFormContext();

  return (
    <input
      {...props}
      {...register(name)}
      id={name}
      type={type ?? name}
      placeholder={placeholder}
      className={inputFieldTv({ className })}
    />
  );
}
