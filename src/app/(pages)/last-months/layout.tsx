import { ReactNode } from 'react';
import { TabsNavigation } from '../../features/TabsNavigation';
import { Navbar } from '../../features/navbar';
import { newMyAccountActions } from '../privateRouteMenuActions';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <title>GerencyI | Meses Passados</title>
      <Navbar.menu newActions={newMyAccountActions} />
      <TabsNavigation.navigation />
      <div className="w-full h-full animate-opacityOn">{children}</div>
    </>
  );
}
