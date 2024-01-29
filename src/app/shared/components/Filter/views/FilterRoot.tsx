import { ReactNode } from 'react';
import { filterRootTv } from '../FilterTV';

interface FilterRootProps {
  children: ReactNode;
}

export function FilterRoot({ children }: FilterRootProps) {
  return <div className={filterRootTv()}>{children}</div>;
}
