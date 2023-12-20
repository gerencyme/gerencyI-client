'use client';

import { Navbar } from '~/src/app/shared/components/Navbar';
import { actions, authenticatedActions } from '../NavbarUtils';
import { NavbarAction } from '~/src/app/shared/types/NavbarActions';
import { useCompanyInfo } from '~/src/app/shared/hooks/useCompanyInfo';

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
