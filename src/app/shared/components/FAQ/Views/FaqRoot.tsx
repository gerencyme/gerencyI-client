import { ReactNode } from 'react';
import { faqRootTv } from '../FaqTV';

interface FaqRootProps {
  children: ReactNode;
}

export function FaqRoot({ children }: FaqRootProps) {
  return <div className={faqRootTv()}>{children}</div>;
}
