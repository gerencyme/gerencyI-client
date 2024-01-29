import { ReactNode } from 'react';
import { tableBasementTv } from '../TableTV';

interface TableContentWrapperProps {
  children: ReactNode;
}

export function TableContentWrapper({ children }: TableContentWrapperProps) {
  return <div className={tableBasementTv()}>{children}</div>;
}
