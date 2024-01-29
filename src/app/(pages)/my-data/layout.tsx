import { ReactNode } from 'react';
import { Navbar } from '../../features/navbar';
import { newMyAccountActions } from '../privateRouteMenuActions';
import { TabsNavigation } from '../../features/TabsNavigation';

export default function MyDataLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <title>GerencyI | Meus dados</title>
      <Navbar.menu newActions={newMyAccountActions} />
      <TabsNavigation.navigation />
      {children}
    </>
  );
}
