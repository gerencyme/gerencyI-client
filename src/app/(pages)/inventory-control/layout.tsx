import { ReactNode } from 'react';
import { Navbar } from '../../features/navbar';
import { newMyAccountActions } from '../privateRouteMenuActions';
import { TabsNavigation } from '../../features/TabsNavigation';
import { inventoryControlTv } from './InventoryControlTV';

export default function InventoryControlLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <title>GerencyI | Painel</title>
      <Navbar.menu newActions={newMyAccountActions} />
      <TabsNavigation.navigation />
      <div className={inventoryControlTv()}>{children}</div>
    </>
  );
}
