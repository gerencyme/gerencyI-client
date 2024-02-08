'use client';

import { Navbar } from '~shared/components/Navbar';
import { actions, authenticatedActions } from '../NavbarUtils';
import { NavbarAction } from '~shared/types/NavbarActions';
import { useCompanyInfo } from '~shared/hooks/useCompanyInfo';

interface MenuProps {
  newActions?: NavbarAction[];
}

export function Menu({ newActions }: MenuProps) {
  const { company } = useCompanyInfo();
  const defaultActions = company ? authenticatedActions : actions;

  return (
    <Navbar.root>
      <Navbar.logo />
      <Navbar.actions actions={newActions ?? defaultActions} />
    </Navbar.root>
  );
}
