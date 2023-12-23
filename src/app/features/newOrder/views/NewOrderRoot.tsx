import { ReactNode } from 'react';
import { Template } from '~/src/app/shared/components/Template';

interface NewOrderRootProps {
  children: ReactNode;
}

export function NewOrderRoot({ children }: NewOrderRootProps) {
  return (
    <Template
      direction="row"
      overflow="scroll-x-hidden"
      className="flex flex-col-reverse lg:flex-row gap-8 items-center justify-evenly"
    >
      {children}
    </Template>
  );
}
