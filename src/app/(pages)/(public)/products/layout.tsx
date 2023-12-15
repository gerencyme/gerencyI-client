import { ReactNode } from 'react';
import { Navbar } from '~/src/app/features/navbar';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <title>GerencyI | Produtos</title>
      <Navbar.menu />
      <div className="w-full h-fit animate-opacityOn">{children}</div>
    </>
  );
}
