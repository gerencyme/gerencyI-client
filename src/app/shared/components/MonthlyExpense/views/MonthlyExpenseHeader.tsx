import { ReactNode } from 'react';
import { monthlyExpenseHeaderTv } from '../MonthlyExpenseTV';

interface MonthlyExpenseHeaderProps {
  children: ReactNode;
}

export function MonthlyExpenseHeader({ children }: MonthlyExpenseHeaderProps) {
  return <div className={monthlyExpenseHeaderTv()}>{children}</div>;
}
