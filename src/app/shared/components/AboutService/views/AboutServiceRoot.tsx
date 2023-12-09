import { ReactNode } from 'react';

interface AboutServiceRootProps {
  children: ReactNode;
}

export function AboutServiceRoot({ children }: AboutServiceRootProps) {
  return <div className="h-fit">{children}</div>;
}
