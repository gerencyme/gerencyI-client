import { ReactNode } from 'react';

interface ProductsRootProps {
  children: ReactNode;
}

export function ProductsRoot({ children }: ProductsRootProps) {
  return <div className="w-full h-fit">{children}</div>;
}
