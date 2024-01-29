import { ReactNode } from 'react';
import { systemDemoRootTv } from '../SystemDemoTV';

interface SystemDemoRootProps {
  children: ReactNode;
}

export function SystemDemoRoot({ children }: SystemDemoRootProps) {
  return <div className={systemDemoRootTv()}>{children}</div>;
}
