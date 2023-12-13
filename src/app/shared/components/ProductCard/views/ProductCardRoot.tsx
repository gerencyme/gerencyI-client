import { ReactNode } from 'react';
import { productCardRootTv } from '../ProductCardTV';

interface ProductCardRootProps {
  children: ReactNode;
}

export function ProductCardRoot({ children }: ProductCardRootProps) {
  return <div className={productCardRootTv()}>{children}</div>;
}
