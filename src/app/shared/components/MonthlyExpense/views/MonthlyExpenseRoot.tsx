import { ReactNode } from 'react';
import { Template, TemplateProps } from '../../Template';

interface MonthlyExpenseRootProps {
  children: ReactNode;
  bgColor?: Partial<TemplateProps['bgColor']>;
}

export function MonthlyExpenseRoot({ children, bgColor }: MonthlyExpenseRootProps) {
  return (
    <Template bgColor={bgColor} direction="col">
      {children}
    </Template>
  );
}
