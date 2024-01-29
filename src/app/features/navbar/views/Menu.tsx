'use client';

import { Navbar } from '~/src/app/shared/components/Navbar';
import { actions, authenticatedActions } from '../NavbarUtils';
import { NavbarAction } from '~/src/app/shared/types/NavbarActions';
import { useCompanyInfo } from '~/src/app/shared/hooks/useCompanyInfo';
import { DarkMode } from '../../DarkMode';
import { navbarItemsTv } from '../NavbarTV';

interface MenuProps {
  newActions?: NavbarAction[];
}

export function Menu({ newActions }: MenuProps) {
  const { company } = useCompanyInfo();
  const defaultActions = company ? authenticatedActions : actions;

  return (
    <Navbar.root>
      <Navbar.logo />
      <div className={navbarItemsTv()}>
        <DarkMode.root>
          <DarkMode.icon />
        </DarkMode.root>
        <Navbar.actions actions={newActions ?? defaultActions} />
      </div>
    </Navbar.root>
  );
}
