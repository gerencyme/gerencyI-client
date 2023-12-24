import { ReactNode } from 'react';
import { Template } from '~/src/app/shared/components/Template';
import { newOrderRootTv } from '../NewOrderTV';

interface NewOrderRootProps {
  children: ReactNode;
}

export function NewOrderRoot({ children }: NewOrderRootProps) {
  return (
    <Template direction="row" overflow="scroll-x-hidden" className={newOrderRootTv()}>
      {children}
    </Template>
  );
}
