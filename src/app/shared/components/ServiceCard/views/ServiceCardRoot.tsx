import { ReactNode } from 'react';
import { serviceCardRootTV } from '../ServiceCardTV';

interface ServiceCardRootProps {
  children: ReactNode;
}

export function ServiceCardRoot({ children }: ServiceCardRootProps) {
  return <div className={serviceCardRootTV()}>{children}</div>;
}
