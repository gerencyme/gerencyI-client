import { ReactNode } from 'react';
import { halfContainerTv } from '../NewOrderTV';

interface HalfContainerProps {
  children: ReactNode;
}

export function HalfContainer({ children }: HalfContainerProps) {
  return <div className={halfContainerTv()}>{children}</div>;
}
