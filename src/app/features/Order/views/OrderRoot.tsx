import { ReactNode } from 'react';
import { orderRootTv } from '../OrderTV';

interface OrderRootProps {
  children: ReactNode;
}

export function OrderRoot({ children }: OrderRootProps) {
  return <div className={orderRootTv()}>{children}</div>;
}
