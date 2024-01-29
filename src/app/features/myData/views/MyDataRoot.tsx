'use client';

import { ReactNode } from 'react';
import { FormProvider } from 'react-hook-form';
import { useMyDataController } from '../controller';
import { Form } from './Form';
import { MyDataHeader } from './MyDataHeader';
import { myDataContentTv, myDataRootTv } from '../MyDataTV';

interface MyDataRootProps {
  children: ReactNode;
}

export function MyDataRoot({ children }: MyDataRootProps) {
  const { allMyDataSchema, handleSubmit, onSubmit } = useMyDataController();

  return (
    <div className={myDataRootTv()}>
      <FormProvider {...allMyDataSchema}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <MyDataHeader />
          <div className={myDataContentTv()}>{children}</div>
        </Form>
      </FormProvider>
    </div>
  );
}
