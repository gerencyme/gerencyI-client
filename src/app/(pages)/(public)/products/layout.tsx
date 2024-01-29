import { ReactNode } from 'react';
import { Navbar } from '~/src/app/features/navbar';
import { productsTv } from './ProductsTV';

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <title>GerencyI | Produtos</title>
      <Navbar.menu />
      <div className={productsTv()}>{children}</div>
    </>
  );
}
