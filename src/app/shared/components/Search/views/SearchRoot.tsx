import { ReactNode } from 'react';
import { searchRootTV } from '../SearchTV';

interface SearchRootProps {
  children: ReactNode;
}

export function SearchRoot({ children }: SearchRootProps) {
  return <div className={searchRootTV()}>{children}</div>;
}
