'use client';

import { Navbar } from '~/src/app/shared/components/Navbar';
import { actions, authenticatedActions } from '../NavbarUtils';
import { NavbarAction } from '~/src/app/shared/types/NavbarActions';
import { useUserInfo } from '~/src/app/shared/hooks/useUserInfo';

interface MenuProps {
  newActions?: NavbarAction[];
}

export function Menu({ newActions }: MenuProps) {
  const { user } = useUserInfo();
  const defaultActions = user ? authenticatedActions : actions;

  return (
    <Navbar.root>
      <Navbar.logo />
      <Navbar.actions actions={newActions ?? defaultActions} />
    </Navbar.root>
  );
}
