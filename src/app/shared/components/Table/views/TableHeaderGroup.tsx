import { ReactNode } from 'react';
import { tableHeaderGroupTv } from '../TableTV';

interface TableHeaderGroupProps {
  children: ReactNode;
}

export function TableHeaderGroup({ children }: TableHeaderGroupProps) {
  return <div className={tableHeaderGroupTv()}>{children}</div>;
}
