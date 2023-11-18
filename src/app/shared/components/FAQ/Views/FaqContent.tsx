import { ReactNode } from 'react';
import { FaqContentTv } from '../FaqTV';

interface FaqContentProps {
  children: ReactNode;
}

export function FaqContent({ children }: FaqContentProps) {
  return <div className={FaqContentTv()}>{children}</div>;
}
