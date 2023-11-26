import { ReactNode } from 'react';
import { Navbar } from '../../features/navbar';
import { newMyAccountActions } from '../privateRouteMenuActions';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <title>GerencyI | Minha Conta</title>
      <Navbar.menu newActions={newMyAccountActions} />

      {children}
    </>
  );
}
