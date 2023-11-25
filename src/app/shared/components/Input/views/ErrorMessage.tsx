'use client';

import { useFormContext } from 'react-hook-form';
import { errorMessageTv } from '../InputTV';
import { Text } from '~shared/components/Text';
import { get } from '../InputUtils';

interface ErrorMessageProps {
  field: string;
}

export function ErrorMessage({ field }: ErrorMessageProps) {
  const {
    formState: { errors }
  } = useFormContext();

  const fieldError = get(errors, field);

  if (!fieldError) return null;

  return (
    <Text
      as="span"
      weigth="bold"
      color="white"
      className={errorMessageTv()}
      text={fieldError.message?.toString()}
    />
  );
}
