import { ReactNode } from 'react';
import { reflectorTv } from './ReflectorTV';

interface ReflectorProps {
  children: ReactNode;
}

export function Reflector({ children }: ReflectorProps) {
  return <div className={reflectorTv()}>{children}</div>;
}
