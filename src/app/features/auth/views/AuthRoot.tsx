import { ReactNode } from 'react';
import { authRootTv } from '../AuthTV';

interface AuthRootProps {
  children: ReactNode;
}

export function AuthRoot({ children }: AuthRootProps) {
  return <div className={authRootTv()}>{children}</div>;
}
