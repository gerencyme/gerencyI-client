import { ReactNode } from 'react';
import { lastMonthsRootTv } from '../LastMonthsTV';

interface LastMonthsRootProps {
  children: ReactNode;
}

export function LastMonthsRoot({ children }: LastMonthsRootProps) {
  return <div className={lastMonthsRootTv()}>{children}</div>;
}
