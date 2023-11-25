import { ReactNode } from 'react';
import { registerRootTv } from '../RegisterTV';

interface RegiserRootProps {
  children: ReactNode;
}

export function RegiserRoot({ children }: RegiserRootProps) {
  return <div className={registerRootTv()}>{children}</div>;
}
