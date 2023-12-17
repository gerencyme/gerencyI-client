import { ReactNode } from 'react';
import { Navbar } from '~features/navbar';
import { newMyAccountActions } from '../privateRouteMenuActions';
import { TabsNavigation } from '../../features/TabsNavigation';

export default function NewOrderLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <title>GerencyI | Novo Pedido</title>
      <Navbar.menu newActions={newMyAccountActions} />
      <TabsNavigation.navigation />

      <div className="w-full h-full animate-opacityOn">{children}</div>
    </>
  );
}
