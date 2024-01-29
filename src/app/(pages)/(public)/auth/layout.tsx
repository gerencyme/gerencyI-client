import { ReactNode } from 'react';
import { Navbar } from '~/src/app/features/navbar';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <title>GerencyI | Entrar</title>
      <Navbar.menu />

      {children}
    </>
  );
}
