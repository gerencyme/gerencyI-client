'use client';

import { ReactNode } from 'react';
import { FormProvider } from 'react-hook-form';
import { useMyDataController } from '../controller';
import { Form } from './Form';
import { MyDataHeader } from './MyDataHeader';

interface MyDataRootProps {
  children: ReactNode;
}

export function MyDataRoot({ children }: MyDataRootProps) {
  const { allMyDataSchema, handleSubmit, onSubmit } = useMyDataController();

  return (
    <div className="flex w-fit gap-1 md:gap-5 m-auto">
      <FormProvider {...allMyDataSchema}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <MyDataHeader />
          <div className="flex flex-col lg:flex-row gap-5 mb-5">{children}</div>
        </Form>
      </FormProvider>
    </div>
  );
}
