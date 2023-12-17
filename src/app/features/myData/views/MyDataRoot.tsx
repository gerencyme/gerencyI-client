'use client';

import { ReactNode } from 'react';
import { FormProvider } from 'react-hook-form';
import { useMyData } from '../controller';

interface MyDataRootProps {
  children: ReactNode;
}

export function MyDataRoot({ children }: MyDataRootProps) {
  const { allMyDataSchema } = useMyData();

  return (
    <div className="flex gap-5">
      <FormProvider {...allMyDataSchema}>{children}</FormProvider>
    </div>
  );
}
