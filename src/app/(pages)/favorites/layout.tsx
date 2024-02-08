import { ReactNode } from 'react';
import { Navbar } from '~features/navbar';
import { newMyAccountActions } from '../privateRouteMenuActions';
import { TabsNavigation } from '../../features/TabsNavigation';
import { favoritesTv } from './FavoritesTV';

export default function FavoritesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <title>GerencyI | Favoritos</title>
      <Navbar.menu newActions={newMyAccountActions} />
      <TabsNavigation.navigation />

      <div className={favoritesTv()}>{children}</div>
    </>
  );
}
