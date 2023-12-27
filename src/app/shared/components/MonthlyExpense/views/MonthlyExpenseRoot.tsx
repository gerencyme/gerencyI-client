import { ReactNode } from 'react';
import { Template } from '../../Template';

interface MonthlyExpenseRootProps {
  children: ReactNode;
}

export function MonthlyExpenseRoot({ children }: MonthlyExpenseRootProps) {
  return <Template direction="col">{children}</Template>;
}
