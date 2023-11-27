import { ReactNode } from 'react';
import { Navbar } from '~/src/app/features/navbar';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <title>GerencyI | Registre-se</title>
      <Navbar.menu />
      {children}
    </>
  );
}