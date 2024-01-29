import { ReactNode } from 'react';
import { TabsNavigation } from '../../features/TabsNavigation';
import { Navbar } from '../../features/navbar';
import { newMyAccountActions } from '../privateRouteMenuActions';
import { lastMonthsTv } from './LastMonthsTv';

export default function LastMonthsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <title>GerencyI | Meses Passados</title>
      <Navbar.menu newActions={newMyAccountActions} />
      <TabsNavigation.navigation />
      <div className={lastMonthsTv()}>{children}</div>
    </>
  );
}
