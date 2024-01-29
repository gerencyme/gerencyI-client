import { ReactNode } from 'react';
import { Navbar } from '~features/navbar';
import { newMyAccountActions } from '../privateRouteMenuActions';
import { TabsNavigation } from '../../features/TabsNavigation';
import { myAccountTv } from './MyAccountTV';

export default function MyAccountLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <title>GerencyI | Minha Conta</title>
      <Navbar.menu newActions={newMyAccountActions} />
      <TabsNavigation.navigation />

      <div className={myAccountTv()}>{children}</div>
    </>
  );
}
